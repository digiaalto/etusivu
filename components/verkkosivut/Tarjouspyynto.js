import styles from "./Tarjouspyynto.module.sass"
import TarjousApp from "../tarjousApp"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FaArrowDown } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdThumbUp, MdThumbDown } from "react-icons/md"

const animCfg = {
  form: {
    triggerOnce: true,
  },
}

const sisalto = {
  header: "Aloitetaanko hommat?",
  subheader:
    "Vai mietityttääkö hinta? Täytä tarjouspyyntö ja katso samalla alustava hinta-arvio.",
  vahvistusViesti: {
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
  },
}

const Tarjouspyynto = (props) => {
  const { refs } = props
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
    <section className={styles.section} id="tarjouspyynto" ref={refs}>
      {(status.error && <FormFailed {...sisalto.vahvistusViesti.error} />) ||
        (status.submitting && <FormSubmitting />) ||
        (status.submitted && (
          <FormSubmitted {...sisalto.vahvistusViesti.success} />
        )) || <DefaultForm status={status} setStatus={setStatus} />}
    </section>
  )
}

const DefaultForm = ({ status, setStatus }) => {
  return (
    <Fade {...animCfg.form}>
      <div className={styles.headers}>
        <h2 className={styles.header}>{sisalto.header}</h2>
        <h3 className={styles.subheader}>{sisalto.subheader}</h3>
        <FaArrowDown className={`${styles.icon} ${styles.bouncing}`} />
      </div>
      <TarjousApp status={status} setStatus={setStatus} />
    </Fade>
  )
}

const FormSubmitting = () => {
  return (
    <Fade {...animCfg.form}>
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
    <Fade {...animCfg.form}>
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
    <Fade {...animCfg.form}>
      <div className={styles.headers}>
        <MdThumbDown className={styles.icon} />
        <h2 className={styles.header}>{header}</h2>
        <h3 className={styles.subheader}>{subheader}</h3>
      </div>
    </Fade>
  )
}

export default Tarjouspyynto
