import styles from "../../styles/pages/post.module.sass"
import client from "../../client"
import groq from "groq"
import BlockContent from "@sanity/block-content-to-react"
import { useNextSanityImage } from "next-sanity-image"
import Image from "next/image"
import styled from "styled-components"

import { formatCategories } from "../../utils/helpers"
import BlogLayout from "@/layouts/BlogLayout"
import Overline from "@/common/Overline"

const Post = (props) => {
  const { title, body, excerpt, mainImage, categories } = props

  return (
    <BlogLayout topbar={true}>
      <section className={styles.section}>
        <article className={styles.blogArticle}>
          <MainImage image={mainImage} />
          <Content
            title={title}
            categories={categories}
            excerpt={excerpt}
            body={body}
          />
        </article>
      </section>
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
    return <StyledBlockquote>{props.children}</StyledBlockquote>
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

const StyledBlockquote = styled.blockquote`
  max-width: 550px;
  color: #666;
  margin: 20px;
  padding: 20px;
  font-size: 18px;
  border-left: 3px solid #666;
`

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
