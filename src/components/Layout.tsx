import React from "react"
import "./reset.css"
import "./app.css"
import "typeface-signika-negative"

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<div
				style={{
					margin: `0 auto`,
				}}
			>
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
