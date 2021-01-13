import styles from "./LahetaViesti.module.sass"
import PropTypes from "prop-types"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdThumbUp, MdThumbDown } from "react-icons/md"
import TextareaAutosize from "react-textarea-autosize"
import { ButtonStyler } from "./button"

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
    <div className={styles.wrapper}>
      <h5 className={styles.header}>{header}</h5>
      {status.info.msg === null && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name="nimi"
              ref={register({ required: true })}
              placeholder="Nimi"
              className={styles.input}
            />
            {errors.nimi && errors.nimi.type === "required" && (
              <span className={styles.error}>Nimi on pakollinen.</span>
            )}
          </div>
          <div>
            <input
              name="sahkoposti"
              ref={register({ required: true })}
              placeholder="Sähköposti"
              className={styles.input}
            />
            {errors.sahkoposti && errors.sahkoposti.type === "required" && (
              <span className={styles.error}>
                Sähköpostiosoite on pakollinen.
              </span>
            )}
          </div>
          <div>
            <TextareaAutosize
              name="viesti"
              minRows={6}
              ref={register({ required: true })}
              placeholder="Mikä painaa mieltä?"
              className={styles.input}
            />
            {errors.viesti && errors.viesti.type && (
              <span className={styles.error}>Viesti unohtui.</span>
            )}
          </div>
          <ButtonStyler primary customStyle={{ marginTop: "2rem" }}>
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
  header: "Onko kysyttävää? Ota yhteyttä!",
}
