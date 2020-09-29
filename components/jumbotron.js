import styles from "../styles/jumbotron.module.sass"
import PropTypes from "prop-types"

const Jumbotron = ({ header, subheader, image, icon }) => {
	return (
		<section className={styles.section}>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className={styles.jumbotron}
			></div>
			<div className={styles.content}>
				{icon && icon}
				{header && <h1 className={styles.header}>{header}</h1>}
			</div>
		</section>
	)
}

Jumbotron.defaultProps = {
	image: "letters.jpg",
}

Jumbotron.propTypes = {
	header: PropTypes.string,
	subheader: PropTypes.string,
	image: PropTypes.string.isRequired,
}

export default Jumbotron
