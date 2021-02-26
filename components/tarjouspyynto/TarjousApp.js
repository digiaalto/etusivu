import styles from "./TarjousApp.module.sass"
import TarjousForm from "./TarjousForm"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdThumbUp, MdThumbDown } from "react-icons/md"
import { PriceWidget } from "./index"

const sisalto = {
  header: "Tarjouspyyntö.",
  subheader:
    "Pyyntö ei maksa mitään ei sido teitä mihinkään. Lähetämme tarjouksen sähköpostiisi yleensä ensimmäisenä arkipäivänä.",
  vahvistusViesti: {
    success: {
      header: "Kiitos tarjouspyynnöstä!",
      subheader:
        "Luemme tarjouspyyntösi tiedot läpi ja vastaamme mahdollisimman pian.",
    },
    error: {
      header: "Kaikki ei mennyt kuin Strömsössä...",
      subheader: "Viesti ei mennyt perille. Kokeile sähköpostia.",
    },
  },
}

const TarjousApp = (props) => {
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
      <PriceWidget price={price} />
      <div className={styles.content}>
        <h2 className={styles.header}>{sisalto.header}</h2>
        <h3 className={styles.subheader}>{sisalto.subheader}</h3>
        <TarjousForm
          status={status}
          setStatus={setStatus}
          setPrice={setPrice}
        />
      </div>
    </div>
  )
}

const FormSubmitting = () => {
  return (
    <div className={styles.headers}>
      <AiOutlineLoading3Quarters
        className={`${styles.icon} ${styles.spinning}`}
      />
    </div>
  )
}

const FormSubmitted = ({ header, subheader }) => {
  return (
    <div className={styles.headers}>
      <MdThumbUp className={styles.icon} />
      <h2 className={styles.header}>{header}</h2>
      <h3 className={styles.subheader}>{subheader}</h3>
    </div>
  )
}

const FormFailed = ({ header, subheader }) => {
  return (
    <div className={styles.headers}>
      <MdThumbDown className={styles.icon} />
      <h2 className={styles.header}>{header}</h2>
      <h3 className={styles.subheader}>{subheader}</h3>
    </div>
  )
}

export default TarjousApp
