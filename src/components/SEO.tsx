import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props extends React.ComponentProps<typeof Helmet> {
	description?: string
}

const SEO = ({ description, title, meta = [] }: Props) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description
	const titleTemplate = title ? `%s | ${site.siteMetadata.title}` : `%s`

	return (
		<Helmet
			htmlAttributes={{
				lang: "en",
			}}
			title={title || site.siteMetadata.title}
			titleTemplate={titleTemplate}
			meta={[
				{
					name: `description`,
					content: description || metaDescription,
				},
				{
					property: `og:title`,
					content: title || site.siteMetadata.title,
				},
				{
					property: `og:description`,
					content: description || metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title || site.siteMetadata.title,
				},
				{
					name: `twitter:description`,
					content: description || metaDescription,
				},
				...meta,
			]}
		/>
	)
}

export default SEO
