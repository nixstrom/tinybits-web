import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styles from "./ButtonGroup.module.css"

interface ItemProps {
	href: string
	tooltip: string
	children: React.ReactNode
}

interface Props {
	children:
		| React.ReactElement<typeof ButtonGroupItem>
		| React.ReactElement<typeof ButtonGroupItem>[]
}

export const ButtonGroupItem = ({ href, tooltip, children }: ItemProps) => (
	<OutboundLink
		href={href}
		className={`${styles.buttonGroupItem} ${styles.tooltip}`}
		data-tooltip={tooltip}
		target="_blank"
		rel="noreferrer noopener"
	>
		{children}
	</OutboundLink>
)

const ButtonGroup = ({ children }: Props) => (
	<aside className={styles.buttonGroup}>{children}</aside>
)

ButtonGroup.Item = ButtonGroupItem

export default ButtonGroup
