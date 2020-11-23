import React from "react"
import {
	MailIcon,
	TwitterIcon,
	LinkedInIcon,
	GithubIcon,
	CodepenIcon,
} from "../assets/svg"
import styles from "./Footer.module.css"
import LinkButton from "./LinkButton"
import ButtonGroup from "./ButtonGroup"

const Footer = () => (
	<footer className={styles.footer} id="Footer">
		<h2>
			I am unavailable for new projects until <em>July 2021</em>, but don’t let
			that stop you – I am always happy to connect.
		</h2>

		<LinkButton
			href="mailto:hello@tinybits.dk"
			text="hello@tinybits.dk"
			className={styles.cta}
			icon={<MailIcon />}
		/>

		<ButtonGroup>
			<ButtonGroup.Item href="https://twitter.com/TheNix" tooltip="Twitter">
				<TwitterIcon />
			</ButtonGroup.Item>
			<ButtonGroup.Item
				href="https://www.linkedin.com/in/nikkistromsnes/"
				tooltip="LinkedIn"
			>
				<LinkedInIcon />
			</ButtonGroup.Item>
			<ButtonGroup.Item href="https://github.com/nixstrom" tooltip="Github">
				<GithubIcon />
			</ButtonGroup.Item>
			<ButtonGroup.Item href="https://codepen.io/TheNix" tooltip="Codepen">
				<CodepenIcon />
			</ButtonGroup.Item>
		</ButtonGroup>
	</footer>
)

export default Footer
