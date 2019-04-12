import React from 'react'
import { Helmet } from "react-helmet"
function About() {
	return(
		<Helmet>
		  <meta charSet="utf-8" />
		  <title>Inside about route</title>
		</Helmet>		
		<React.Fragment>
			<h1>About</h1>
			<p>This is the todo lsit app version 1.0.0. This is part of react crash course</p>
		</React.Fragment>
	)
}

export default About;