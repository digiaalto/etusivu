import styles from "../../styles/pages/blogi.module.sass"
import client from "../../client"
import groq from "groq"
import { useNextSanityImage } from "next-sanity-image"
import BlogLayout from "@/layouts/BlogLayout"
import Link from "next/link"
import Image from "next/image"
import BlockContent from "@sanity/block-content-to-react"
import { formatDate } from "../../utils/helpers"

const Blogi = (props) => {
  const { posts } = props
  return (
    <BlogLayout topbar={true}>
      <Hero />
      <Posts posts={posts} />
    </BlogLayout>
  )
}

const Hero = () => {
  return (
    <section className={styles.hero}>
      <span className={styles.pageOverline}>Moi Digiaallon blogista!</span>
      <h1 className={styles.pageHeader}>
        Faktaa ja tarinoita verkkomaailmasta.
      </h1>
      <h2 className={styles.pageDescription}>
        Kirjoitamme ohjeita verkkosivujen omistajille, teknisiä juttuja ja
        ajankohtaisia kirjoitelmia web-designista ja verkkokehitykestä.
      </h2>
    </section>
  )
}

const Posts = ({ posts }) => {
  return (
    <div className={styles.postsContainer}>
      {posts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  )
}

const PostItem = ({ post }) => {
  const { slug, title, publishedAt, category, excerpt, mainImage } = post
  const formattedDate = formatDate(publishedAt)
  let thumbnailProps = useNextSanityImage(client, mainImage)
  return (
    <div className={styles.post}>
      <div className={styles.postImageWrapper}>
        <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
          <a>
            <Image
              {...thumbnailProps}
              alt={`Kuva: ${title}`}
              className={styles.postThumbnail}
            />
          </a>
        </Link>
      </div>
      <div className={styles.postInfoWrapper}>
        <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
          <a>
            <h3 className={styles.postHeader}>{title}</h3>
          </a>
        </Link>
        <div className={styles.postMetadataWrapper}>
          <span className={styles.publishedNote}>{formattedDate}</span>
        </div>
        <BlockContent
          blocks={excerpt}
          imageOptions={{ w: 320, h: 240, fit: "max" }}
          {...client.config()}
        />
      </div>
    </div>
  )
}

// const PostItem = ({ post }) => {
//   const { slug, title, category, mainImage } = post
//   let thumbnailProps = useNextSanityImage(client, mainImage)
//   return (
//     <div className={styles.postItem}>
//       <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
//         <a>
//           <div className={styles.postThumbnail}>
//             <Image
//               {...thumbnailProps}
//               alt={`Kuva: ${title}`}
//               className={styles.postThumbnailImage}
//             />
//           </div>
//         </a>
//       </Link>
//       <div className={styles.postMeta}>
//         <span className={styles.postCategory}>{category}</span>
//         <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
//           <a className={styles.postTitle}>{title}</a>
//         </Link>
//       </div>
//     </div>
//   )
// }

export async function getStaticProps(ctx) {
  // excerpt
  const query = groq`*[_type == "post" && publishedAt < now()]{
		_id,
		publishedAt,
		slug,
		title,
		"category": categories[0]->title,
		mainImage,
		excerpt,
	}|order(publishedAt desc)`
  return {
    props: {
      posts: await client.fetch(query),
    },
  }
}

export default Blogi

Blogi.defaultProps = {
  posts: [],
}
