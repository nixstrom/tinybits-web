module.exports = {
	siteMetadata: {
		title: `Tinybits :: Nikki Strømsnes`,
		description: `Portfolio of Nikki Strømsnes - freelance frontend developer and React specialist.`,
		author: `@TheNix`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `tinybits-web`,
				short_name: `tinybits`,
				start_url: `/`,
				background_color: `#84cce8`,
				theme_color: `#84cce8`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS || "fake_tracking_id",
				head: false,
				anonymize: true,
				respectDNT: true,
				defer: true,
				siteSpeedSampleRate: 10,
			},
		},
	],
}
