import Layout from "../components/layout"
import Jumbotron from "../components/jumbotron"
import styles from "../styles/sisallonsuunnittelu.module.sass"
import { BiBookContent } from "react-icons/bi"
import { FaQuestionCircle } from "react-icons/fa"

const Sisallonsuunnittelu = () => {
	return (
		<Layout title="Miten verkkosivun sisältö suunnitellaan">
			<Jumbotron
				header="Miten verkkosivun sisältö suunnitellaan"
				icon={<FaQuestionCircle className={styles.headerIcon} />}
			/>
			<section className={styles.section}>
				<div className={styles.content}>
					<div className={styles.information}>
						<h3>
							Suunnittelu lähtee käyntiin yrityksen toiminnan tutkinnasta.
							Siihen kuuluu verkkosivun tavoitteiden kartoitus, asiakkaiden
							hahmotus ja oman brändisi tuntemus.
						</h3>
					</div>
					<Part dataObject={tavoitteet} />
					<Part dataObject={asiakkaat} />
					<Part dataObject={brandi} />
				</div>
			</section>
		</Layout>
	)
}

export default Sisallonsuunnittelu

const Part = ({ dataObject }) => {
	const { header, paragraphs, todo } = dataObject
	return (
		<div className={styles.part}>
			<h4 className={styles.partHeader}>{header}</h4>

			{paragraphs.map((paragraph, index) => (
				<p className={styles.partParagraph} key={`${header}-${index}`}>
					{paragraph}
				</p>
			))}

			{todo && (
				<ul>
					{todo.map((todo, index) => (
						<li key={`${header}-todo-${index}`}>{todo}</li>
					))}
				</ul>
			)}
		</div>
	)
}

const tavoitteet = {
	header: "Tavoitteet",
	paragraphs: [
		"Sinulla on varmasti toiveita mitkä haluat toteuttaa verkkosivujesi välityksellä. Oikein suunniteltu sisältö tekee toiveista totta. Listaa tavoitteesi tärkeysjärjestyksessä.",
		"Tätä kohtaa käytetään myös web-suunnittelussa. Sinun valitsemasi päämääräsi informoivat muummoassa sisällön järjestystä, ulkoasua ja mitä elementtejä ja lauseita korostetaan.",
	],
}

const asiakkaat = {
	header: "Asiakkaat",
	paragraphs: [
		"Sinulla on varmasti monenlaisia asiakkaita, ja netin välityksellä kuka tahansa voi löytää sinut ja tarjontasi. Älä kuitenkaan kuvittele että voit kirjoittaa koko maailmalle.",
		"Teksti uppoaa lukijaan parhaiten kun se tuntuu hänestä johdonmukaiselta. Valitse siis asiakas joka on sinulle tärkein ja lähdinnä sydäntä.",
		"Mitä enemmän tiedät hänestä, sitä helpompi hänelle on kirjoittaa!",
	],
	todo: [
		"Määrittele kuka on tärkein unelma-asiakkaasi.",
		"Mitä hän pelkää ja toivoo?",
		"Mikä häntä motivoi?",
		"Minkälaisia kokemuksia hänellä on toimialastasi?",
	],
}

const brandi = {
	header: "Brändi",
	paragraphs: [
		"Yrityksesi maine ja mielikuva eli brändi syntyy vahingossa tai tarkoituksella. Jotta sinulta ostettaisiin pitää asiakkaan luottaa, tuntea tai olla muuten vain vakuuttunut sinusta.",
	],
	todo: [
		"Kirjoita kaksi listaa; adjektiivit jotka kuvaavat brändiäsi ja adjektiivit jotka eivät kuvaa brändiäsi.",
		"Miten työskentelet asiakkaittesi kanssa?",
		"Mikä motivoi sinua yrittämään?",
		"Missä olet parempi kuin muut /  miten erotut kilpailijoista?",
	],
}
