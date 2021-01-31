import styles from "./LahetaViesti.module.sass"
import PropTypes from "prop-types"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdThumbUp, MdThumbDown } from "react-icons/md"
import { ButtonStyler } from "./button"
import TextareaAutosize from "react-textarea-autosize"

const LahetaViesti = (props) => {
  const { header } = props
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    setStatus({ ...status, submitting: true })

    axios({
      method: "POST",
      url: "https://formspree.io/f/mbjpqqoe",
      data: data,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Kiitos yhteydenotosta. Vastaamme mahdollisimman pian."
        )
      })
      .catch((response) => {
        handleServerResponse(
          false,
          "Auringonpurkaus pysäytti viestin, voitko käyttää sähköpostia?"
        )
      })
  }

  function handleServerResponse(success, msg) {
    if (success) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  const hideform = status.submitting || status.submitted || status.info.error

  if (hideform) {
    const feedbackNote =
      (status.submitting && "Viestiä lähetetään.") ||
      ((status.submitted || status.info.error) && status.info.msg)

    return (
      <div className={styles.feedbackWrapper}>
        {status.submitting && (
          <AiOutlineLoading3Quarters
            className={`${styles.feedbackIcon} ${styles.rotating}`}
          />
        )}
        {status.submitted && <MdThumbUp className={styles.feedbackIcon} />}
        {status.info.error && <MdThumbDown className={styles.feedbackIcon} />}
        <h5 className={styles.feedbackNote}>{feedbackNote}</h5>
      </div>
    )
  }

  return (
    <div className={styles.wrapper} id="laheta-viesti">
      <span className={styles.header}>{header}</span>
      {status.info.msg === null && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <label htmlFor="viesti_nimi" className={styles.label}>
              Nimi
            </label>
            <input
              name="viesti_nimi"
              id="viesti_nimi"
              ref={register({ required: true })}
              className={styles.input}
            />
            {errors.nimi && errors.nimi.type === "required" && (
              <span className={styles.error}>Nimi on pakollinen.</span>
            )}
          </div>
          <div>
            <label htmlFor="viesti_sahkoposti" className={styles.label}>
              Sähköposti
            </label>
            <input
              name="viesti_sahkoposti"
              id="viesti_sahkoposti"
              ref={register({ required: true })}
              className={styles.input}
            />
            {errors.sahkoposti && errors.sahkoposti.type === "required" && (
              <span className={styles.error}>
                Sähköpostiosoite on pakollinen.
              </span>
            )}
          </div>
          <div>
            <label htmlFor="viesti" className={styles.label}>
              Mikä painaa mieltä?
            </label>
            <TextareaAutosize
              name="viesti"
              id="viesti"
              minRows={6}
              ref={register({ required: true })}
              className={styles.input}
            />
            {errors.viesti && errors.viesti.type && (
              <span className={styles.error}>Viesti unohtui.</span>
            )}
          </div>
          <ButtonStyler secondary>
            <button type="submit">Lähetä viesti</button>
          </ButtonStyler>
        </form>
      )}
    </div>
  )
}

export default LahetaViesti

LahetaViesti.propTypes = {
  header: PropTypes.string.isRequired,
}

LahetaViesti.defaultProps = {
  header: "Kysyttävää? Pistä viestiä tulemaan.",
}
