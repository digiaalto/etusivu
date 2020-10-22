import { useState } from "react"
import styles from "../styles/contact.module.sass"

const Contact = () => {
  const [form, setForm] = useState({
    nimi: "",
    yritys: "",
    sahkoposti: "",
    puhelinnumero: "",
    viesti: "",
  })

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleChange(event) {
    // Computed property name
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <section className={styles.section} id="yhteystiedot">
      <div className={styles.content}>
        <img className={styles.paperAirplane} src="plane.svg" />
        <h2 className={styles.header}>
          Haluatko tietää enemmän Digiaallon verkkoratkaisusta?
        </h2>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <Input
              label="Etunimi, Sukunimi"
              name="nimi"
              value={form.nimi}
              handleChange={handleChange}
              isRequired
            />
            <Input
              label="Yritys, Toimiala"
              name="yritys"
              value={form.yritys}
              handleChange={handleChange}
            />
            <Input
              label="Sähköposti"
              name="sahkoposti"
              type="email"
              value={form.sahkoposti}
              handleChange={handleChange}
              isRequired
            />
            <Input
              label="Puhelinnumero"
              type="tel"
              value={form.puhelinnumero}
              handleChange={handleChange}
            />
            <label className={styles.label}>
              <span>Viesti</span>
              <textarea
                value={form.viesti}
                name="viesti"
                rows="6"
                onChange={handleChange}
                className={styles.input}
                required
              />
            </label>
            <input type="submit" value="Lähetä" className={styles.submit} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

const Input = ({
  label,
  name,
  type = "text",
  value,
  handleChange,
  isRequired,
}) => {
  return (
    <label className={styles.label}>
      <span>
        {label}
        {isRequired && " *"}
      </span>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        name={name ? name : label.toLowerCase()}
        className={styles.input}
        required={isRequired}
      />
    </label>
  )
}
