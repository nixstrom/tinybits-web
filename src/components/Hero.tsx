import React from "react"
import LinkButton from "./LinkButton"
import styles from "./Hero.module.css"

const Hero = () => (
	<header className={styles.hero}>
		<h1>
			Hello World! <span className={styles.wave}>👋</span>
		</h1>
		<p>
			I am <em>Nikki Strømsnes</em> &mdash; a Senior Frontend Developer working
			out of Copenhagen, Denmark.
		</p>
		<p>
			<small>
				In my <em>ten years of working experience</em>, I've specialised with
				React, Redux, GraphQL, Typescript and more.
			</small>
		</p>
		<LinkButton
			href="#Footer"
			text="Get in touch!"
			variant="secondary"
			className={styles.cta}
		/>
	</header>
)

export default Hero
