import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import LinkButton from "../components/LinkButton"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<section style={{ margin: "10vh 10vw" }}>
			<h1>NOT FOUND</h1>
			<p>
				This page doesn't exist. Sorry about that. How did you even get here?
				Anyway &hellip;
			</p>
			<LinkButton href="/" text="Let's go somewhere else" />
		</section>
	</Layout>
)

export default NotFoundPage
