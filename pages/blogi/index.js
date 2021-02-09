import styles from "../../styles/pages/blogi.module.sass"
import client from "../../client"
import groq from "groq"
import { useNextSanityImage } from "next-sanity-image"
import BlogLayout from "@/layouts/BlogLayout"
import Link from "next/link"
import Image from "next/image"

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
    <div className={styles.heroBg}>
      <Image
        src="/images/blog/WaveBackground.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.headers}>
        <h1 className={styles.overline}>Tervetuloa Digiaallon blogiin!</h1>
        <h2 className={styles.mainHeader}>
          Vinkkejä ja tarinoita verkkomaailmasta.
        </h2>
      </div>
    </div>
  )
}

const Posts = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}

const PostItem = ({ post }) => {
  const { slug, title, category, mainImage } = post
  let thumbnailProps = useNextSanityImage(client, mainImage)
  return (
    <div className={styles.postItem}>
      <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
        <a>
          <div className={styles.postThumbnail}>
            <Image
              {...thumbnailProps}
              alt={`Kuva: ${title}`}
              className={styles.postThumbnailImage}
            />
          </div>
        </a>
      </Link>
      <div className={styles.postMeta}>
        <span className={styles.postCategory}>{category}</span>
        <Link href="/blogi/[slug]" as={`/blogi/${slug.current}`}>
          <a className={styles.postTitle}>{title}</a>
        </Link>
      </div>
    </div>
  )
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

export default Blogi

Blogi.defaultProps = {
  posts: [],
}
