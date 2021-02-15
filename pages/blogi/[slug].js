import styles from "../../styles/pages/post.module.sass"
import client from "../../client"
import groq from "groq"
import BlockContent from "@sanity/block-content-to-react"
import { useNextSanityImage } from "next-sanity-image"
import BlogLayout from "@/layouts/BlogLayout"
import Image from "next/image"
import Overline from "@/common/Overline"
import Link from "next/link"

const Post = (props) => {
  const { title, body, excerpt, mainImage, categories } = props

  return (
    <BlogLayout topbar={false}>
      <div className={styles.container}>
        <article className={styles.blogArticle}>
          <div>
            <Link href="/blogi">
              <a
                style={{
                  justifySelf: "start",
                }}
              >
                &larr; Blogi
              </a>
            </Link>
          </div>
          <MainImage image={mainImage} />
          <Content
            title={title}
            categories={categories}
            excerpt={excerpt}
            body={body}
          />
        </article>
      </div>
    </BlogLayout>
  )
}

const MainImage = ({ image }) => {
  const imageProps = useNextSanityImage(client, image)
  return (
    <div className={styles.mainImageWrapper}>
      <Image {...imageProps} alt="Blogpostaukseen liittyvä kuva" />
    </div>
  )
}

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node

  if (style === "blockquote") {
    return (
      <blockquote style={{ maxWidth: "600px", color: "#666" }}>
        {props.children}
      </blockquote>
    )
  }
  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const Content = ({ title, body, categories, excerpt }) => {
  const categoryString = formatCategories(categories)

  return (
    <div className={styles.content}>
      <Overline
        text={"Kategoria: " + categoryString}
        customStyle={{ textAlign: "left", margin: "0" }}
      />
      <h1 className={styles.mainHeader}>{title}</h1>
      <h2 className={styles.descriptionHeader}>
        <BlockContent blocks={excerpt} {...client.config()} />
      </h2>
      <div className={styles.blockContent}>
        <BlockContent
          blocks={body}
          {...client.config()}
          serializers={{
            types: { block: BlockRenderer },
          }}
        />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = params
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
		title,
		"categories": categories[]->title,
		mainImage,
		body,
		excerpt
	}`
  return {
    props: await client.fetch(query, { slug }),
  }
}

export default Post

Post.defaultProps = {
  title: "Ei otsikkoa!",
  name: "Ei kirjoittajaa?",
  categories: ["Ei kategoriaa!?"],
}

function formatCategories(categories) {
  let formatted = ""
  for (let i = 0; i < categories.length; i++) {
    let seperator = categories[i + 1] ? ", " : ""
    formatted += `${categories[i]}${seperator}`
  }
  return formatted
}
