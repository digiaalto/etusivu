import styles from "./button.module.sass"
import Link from "next/link"

const Button = ({ text = "Text", href = "/", secondary = false }) => {
	return (
		<Link href={href}>
			<a
				href={href}
				className={`${styles.button} ${secondary ? styles.secondary : ""}`}
			>
				{text}
			</a>
		</Link>
	)
}

export default Button
