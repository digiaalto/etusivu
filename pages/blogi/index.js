import styles from "../../styles/pages/blogi.module.sass"
import client from "../../client"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
import Link from "next/link"

import Layout from "../../components/layouts"

const Blogi = (props) => {
  const { posts } = props

  return (
    <Layout topbar={true}>
      <div className={styles.container}>
        <div className={styles.headers}>
          <h1 className={styles.overline}>Tervetuloa Digiaallon blogiin!</h1>
          <h2 className={styles.mainHeader}>Ohjeita ja vinkkejä.</h2>
        </div>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const PostItem = ({ post }) => {
  const { slug, title, category, mainImage } = post
  console.log(category)
  return (
    <>
      <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
        <a className={styles.thumbnailLink}>
          <div className={styles.postItem}>
            <div className={styles.thumbnailWrapper}>
              <img
                src={urlFor(mainImage).width(420).url()}
                className={styles.thumbnail}
              />
            </div>
            <p className={styles.itemTexts}>
              <span className={styles.itemCategory}>{category}</span>
              {title}
            </p>
          </div>
        </a>
      </Link>
    </>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`
  return formattedDate
}

export async function getStaticProps(ctx) {
  const query = groq`*[_type == "post" && publishedAt < now()]{
		_id,
		slug,
		title,
		"category": categories[0]->title,
		mainImage,
	}|order(publishedAt desc)`
  return {
    props: {
      posts: await client.fetch(query),
    },
  }
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default Blogi

Blogi.defaultProps = {
  posts: [],
}
