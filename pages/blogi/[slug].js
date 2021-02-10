import styles from "../../styles/pages/post.module.sass"
import client from "../../client"
import groq from "groq"
import BlockContent from "@sanity/block-content-to-react"
import { useNextSanityImage } from "next-sanity-image"
import BlogLayout from "@/layouts/BlogLayout"
import Image from "next/image"
import Overline from "@/common/Overline"

const Post = (props) => {
  const { title, body, mainImage, categories } = props

  return (
    <BlogLayout topbar={false}>
      <div className={styles.container}>
        <Ad />
        <article className={styles.blogArticle}>
          <MainImage image={mainImage} />
          <Content title={title} body={body} categories={categories} />
        </article>
      </div>
    </BlogLayout>
  )
}

const Ad = () => {
  return (
    <div className={styles.ad}>
      <span className={styles.adHeader}>Digiaallon blogi</span>
      <p className={styles.adDescription}>
        Teemme verkkosivuja ja kirjoittelemme blogeja.
      </p>
    </div>
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

const Content = ({ title, body, categories }) => {
  const categoyString = formatCategories(categories)
  return (
    <div className={styles.content}>
      <Overline text={categoyString} customStyle={{ textAlign: "left" }} />
      <h1 className={styles.mainHeader}>{title}</h1>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...client.config()}
      />
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
		body
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
    formatted += ` ${categories[i]}`
  }
  return formatted
}
