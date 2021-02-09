import styles from "../../styles/pages/post.module.sass"
import client from "../../client"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import { useNextSanityImage } from "next-sanity-image"
import BlogLayout from "@/layouts/BlogLayout"
import Image from "next/image"
import Overline from "@/common/Overline"

const Post = (props) => {
  const { title, body, mainImage, name, categories, authorImage } = props
  return (
    <BlogLayout topbar={true}>
      <div className={styles.container}>
        <article className={styles.blogArticle}>
          <div className={styles.topContainer}>
            <BlogMetadata
              name={name}
              authorImage={authorImage}
              categories={categories}
            />
            <SideImage mainImage={mainImage} />
          </div>
          <Content title={title} body={body} categories={categories} />
        </article>
      </div>
    </BlogLayout>
  )
}

const SideImage = ({ mainImage }) => {
  const postImageProps = useNextSanityImage(client, mainImage)
  return (
    <div className={styles.postImageWrap}>
      <Image {...postImageProps} alt="Blogpostaukseen liittyvä kuva" />
    </div>
  )
}

const BlogMetadata = ({ name, categories, authorImage }) => {
  return (
    <div className={styles.metadata}>
      <AuthorImage image={authorImage} />
      <span>{name}</span>
      {/* <Categories categories={categories} /> */}
    </div>
  )
}
const AuthorImage = ({ image }) => {
  const imageProps = useNextSanityImage(client, image)
  return (
    <div className={styles.authorImageWrapper}>
      <Image {...imageProps} alt="Kirjoittaja" />
    </div>
  )
}

// const Categories = ({ categories }) => (
//   <span>
//     {categories && (
//       <ul className={styles.categories}>
//         {categories.map((category) => (
//           <li key={category}>{category}</li>
//         ))}
//       </ul>
//     )}
//   </span>
// )

function formatCategories(categories) {
  let formatted = ""
  for (let i = 0; i < categories.length; i++) {
    formatted += ` ${categories[i]}`
  }
  return formatted
}

const Content = ({ title, body, categories }) => {
  const formattedCategories = formatCategories(categories)
  console.log(categories)
  return (
    <div className={styles.textContent}>
      <Overline text={formattedCategories} />
      <h1 className={styles.mainHeader}>{title}</h1>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...client.config()}
      />
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
