import React from 'react'
// import { Helmet } from "react-helmet"
import SeoHead from '../layouts/SeoHead.js'
function About() {
	return(		
		<React.Fragment>
			{/*<Helmet>
			  <meta charSet="utf-8" />
			  <title>Inside about route</title>
			</Helmet>*/}
			<SeoHead title = "About page of react app" description="Get to know about us" url="https://shubh9236.github.io/about"/>		
			<h1>About</h1>
			<p>This is the todo lsit app version 1.0.0. This is part of react crash course</p>
		</React.Fragment>
	)
}

export default About;