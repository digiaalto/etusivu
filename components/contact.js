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
		<section className={styles.section} id="yhteystietolomake">
			<div className={styles.contet}>
				<h2>Yhteyslomake</h2>
				<p>
					Kerro projektistasi täyttämällä lomake. Vapaamuotoiset tervehdykset
					ovat myös tervetulleita{" "}
					<a href="mailto:hei@digiaalto.fi" className="bold">
						hei@digiaalto.fi
					</a>
				</p>
			</div>
			<div className={styles.form}>
				<form onSubmit={handleSubmit}>
					<Input
						label="Etu- ja sukunimi"
						name="nimi"
						value={form.nimi}
						handleChange={handleChange}
						isRequired
					/>
					<Input
						label="Yritys ja toimiala"
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
						isRequired
					/>
					<label className={styles.label}>
						<span className="bold">Projektin kuvaus</span>
						<textarea
							value={form.viesti}
							name="viesti"
							placeholder="Kuvaile projektia lyhyesti omin sanoin"
							rows="6"
							onChange={handleChange}
							className={styles.input}
							required
						/>
					</label>
					<input type="submit" value="Lähetä" className={styles.submit} />
				</form>
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
			<span className={isRequired ? "bold" : ""}>{label}</span>
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
