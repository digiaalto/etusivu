import styles from "./TarjousOsio.module.sass"
import TarjousApp from "../tarjousApp/"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FaArrowDown } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdThumbUp, MdThumbDown } from "react-icons/md"

const vahvistusViesti = {
  success: {
    header: "Kiitos mielenkiinnosta!",
    subheader:
      "Luemme antamasi tiedot läpi ja vastaamme sähköpostiisi kohtapian.",
  },
  error: {
    header: "Kaikki ei mennyt kuin Strömsössä...",
    subheader:
      "Auringonpurkaus keskeytti lähetyksen, onneksi sähköposti toimii aina.",
  },
}

const TarjousOsio = () => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  })

  const router = useRouter()

  useEffect(() => {
    if (status.submitting) {
      router.push("#tarjouspyynto")
    }
  }, [status])

  return (
    <section className={styles.section} id="tarjouspyynto">
      {(status.error && <FormFailed {...vahvistusViesti.error} />) ||
        (status.submitting && <FormSubmitting />) ||
        (status.submitted && (
          <FormSubmitted {...vahvistusViesti.success} />
        )) || <DefaultForm status={status} setStatus={setStatus} />}
    </section>
  )
}

const DefaultForm = ({ status, setStatus }) => {
  return (
    <Fade>
      <div className={styles.headers}>
        <h2 className={styles.header}>Mietityttääkö hinnat?</h2>
        <h3 className={styles.subheader}>
          Vai haluatko aloittaa hommat? Täytä tarjouspyyntö ja saat samalla
          alustavan hinta-arvion.
        </h3>
        <FaArrowDown className={`${styles.icon} ${styles.bouncing}`} />
      </div>
      <TarjousApp status={status} setStatus={setStatus} />
    </Fade>
  )
}

const FormSubmitting = () => {
  return (
    <Fade>
      <div className={styles.headers}>
        <AiOutlineLoading3Quarters
          className={`${styles.icon} ${styles.spinning}`}
        />
      </div>
    </Fade>
  )
}

const FormSubmitted = ({ header, subheader }) => {
  return (
    <Fade>
      <div className={styles.headers}>
        <MdThumbUp className={styles.icon} />
        <h2 className={styles.header}>{header}</h2>
        <h3 className={styles.subheader}>{subheader}</h3>
      </div>
    </Fade>
  )
}

const FormFailed = ({ header, subheader }) => {
  return (
    <Fade>
      <div className={styles.headers}>
        <MdThumbDown className={styles.icon} />
        <h2 className={styles.header}>{header}</h2>
        <h3 className={styles.subheader}>{subheader}</h3>
      </div>
    </Fade>
  )
}

export default TarjousOsio
