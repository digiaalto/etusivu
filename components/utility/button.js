import styles from "./button.module.sass"
import Link from "next/link"

const Button = (props) => {
	if (props.outside) return <Anchor {...props} />
	else
		return (
			<Link href={href}>
				<Anchor {...props} />
			</Link>
		)
}

export default Button

const Anchor = ({ text, href, secondary, outside }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`${styles.button} ${secondary ? styles.secondary : ""}`}
		>
			{text}
		</a>
	)
}
