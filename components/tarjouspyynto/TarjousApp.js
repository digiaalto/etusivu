import styles from "./TarjousApp.module.sass"
import TarjousForm from "./TarjousForm"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { PriceWidget } from "./index"

const sisalto = {
  header: "Lähetä tarjouspyyntö.",
  subheader:
    "Tarjouspyyntö ei maksa mitään eikä ole sitova. Lähetämme tarjouksen antamaanne sähköpostiin 1-2 arkipäivässä.",
  vahvistusViesti: {
    success: {
      header: "Kiitos yhteydenotosta.",
      subheader: "Luemme antamasi tiedot läpi ja vastaamme piakkoin.",
    },
    error: {
      header:
        "Tarjouspyyntöjä on tullut niin monta että lähetysraja on ylittynyt...",
      subheader:
        "Viesti ei mennyt perille, pahoittelumme. Onneksi sähköposti toimii aina.",
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
      <h2 className={styles.header}>{header}</h2>
      <h3 className={styles.subheader}>{subheader}</h3>
    </div>
  )
}

const FormFailed = ({ header, subheader }) => {
  return (
    <div className={styles.headers}>
      <h2 className={styles.header}>{header}</h2>
      <h3 className={styles.subheader}>{subheader}</h3>
    </div>
  )
}

export default TarjousApp
