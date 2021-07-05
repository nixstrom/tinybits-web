import React from "react"
import * as styles from "./LinkButton.module.css"

interface Props {
	href: string
	text: string
	icon?: React.ReactNode
	className?: string
	variant?: "primary" | "secondary"
}

const LinkButton = ({
	href,
	text,
	icon,
	className,
	variant = "primary",
}: Props) => {
	return (
		<a
			href={href}
			className={`${styles.linkButton} ${styles[variant]} ${className}`}
		>
			{icon && icon}
			<span className={styles.linkButtonText}>{text}</span>
		</a>
	)
}

export default LinkButton
