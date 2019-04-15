import React from 'react'
import { Helmet } from "react-helmet";
const defaultDescription = "To do list app creator"
const defaultUrl = "shubh9236.github.io/react"
const SeoHead = props =>{
	return(
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{props.title || ""}</title>
				<meta name="description" content={props.description || defaultDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property = "url" content={props.url || defaultUrl} />
				<meta property = "title" content={ptops.title || ""} />
			</Helmet>
		</React.Fragment>
	)
}

export default SeoHead;