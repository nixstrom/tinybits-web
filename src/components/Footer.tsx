import React from "react"
import {
	MailIcon,
	TwitterIcon,
	LinkedInIcon,
	GithubIcon,
	CodepenIcon,
} from "../assets/svg"
import * as styles from "./Footer.module.css"
import LinkButton from "./LinkButton"
import ButtonGroup from "./ButtonGroup"

const Footer = () => (
	<footer className={styles.footer} id="Footer">
		<h2>
			I am <em>available</em> for new freelance projects!
		</h2>

		<p>
			Reach out if I can help make your web application dream come true — or if
			you just want to chat.
		</p>

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
