import Layout from "../components/layouts"
import TarjousApp from "../components/tarjouspyynto"
import Image from "next/image"
import styles from "@/styles/pages/tarjouspyynto.module.sass"

const Hinnat = () => {
  return (
    <Layout topbar={true}>
      <div className={styles.heroWrapper}>
        <Image
          src="/images/hinnat/tausta_paperikone.jpg"
          layout="fill"
          objectFit="cover"
          alt="Tarjouspyyntöä kuvaava paperilentokone."
          objectPosition="50% 30%"
        />
      </div>
      <TarjousApp />
    </Layout>
  )
}

export default Hinnat
