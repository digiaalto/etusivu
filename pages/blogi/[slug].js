import styles from "../../styles/pages/post.module.sass"
import client from "../../client"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import { BlogLayout } from "../../components/layouts"

const Post = (props) => {
  const { title, body, name, categories, authorImage } = props
  return (
    <BlogLayout>
      <div className={styles.container}>
        <article className={styles.blogArticle}>
          <BlogMetadata
            name={name}
            categories={categories}
            authorImage={authorImage}
          />
          <Content title={title} body={body} />
        </article>
      </div>
    </BlogLayout>
  )
}

const Content = ({ title, body }) => {
  return (
    <div className={styles.content}>
      <Hero title={title} />
      <div className={styles.bodyWrapper}>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: "max" }}
          {...client.config()}
        />
      </div>
    </div>
  )
}

const Hero = ({ title }) => {
  return <h1 className={styles.mainHeader}>{title}</h1>
}

const BlogMetadata = ({ name, categories, authorImage }) => {
  return (
    <div className={styles.metadata}>
      <div className={styles.authorImageWrapper}>
        <img src={urlFor(authorImage).width(100).url()} alt="Kirjoittaja" />
      </div>
      <div className={styles.metatext}>
        <span>Kirjoittaja: {name}</span>
        <span>
          Kategoriat:{" "}
          {categories && (
            <ul className={styles.categories}>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}
        </span>
      </div>
    </div>
  )
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
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
		"name": author->name,
		"categories": categories[]->title,
		"authorImage": author->image,
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
