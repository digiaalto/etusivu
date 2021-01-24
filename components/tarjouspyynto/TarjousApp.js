import styles from "./TarjousApp.module.sass"
import TarjousForm from "./TarjousForm"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Fade } from "react-awesome-reveal"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdThumbUp, MdThumbDown } from "react-icons/md"
import { PriceWidget } from "./index"

const animCfg = {
  form: {
    triggerOnce: true,
  },
}

const sisalto = {
  header: "Lähetä tarjouspyyntö!",
  subheader:
    "Tarjouspyynnön ohella näet alustava hinnan, todellisen arvion saat sähköpostiisi.",
  vahvistusViesti: {
    success: {
      header: "Kiitos tarjouspyynnöstä!",
      subheader:
        "Luemme antamasi tiedot läpi ja vastaamme sähköpostiisi muutamassa arkipäivässä.",
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
  const [price, setPrice] = useState(0)
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
        )) || (
          <DefaultForm
            status={status}
            setStatus={setStatus}
            price={price}
            setPrice={setPrice}
          />
        )}
    </section>
  )
}

const DefaultForm = ({ status, setStatus, price, setPrice }) => {
  return (
    <div className={styles.defaultForm}>
      <div className={styles.defaultFormColumn}>
        <h2 className={styles.header}>{sisalto.header}</h2>
        <h3 className={styles.subheader}>{sisalto.subheader}</h3>
        <PriceWidget price={price} hideIfDesktop />
        <TarjousForm
          status={status}
          setStatus={setStatus}
          setPrice={setPrice}
        />
      </div>
      <div className={styles.defaultFormColumn}>
        <PriceWidget price={price} />
      </div>
    </div>
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
