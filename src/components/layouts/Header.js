import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
	return(
		<header style={headerStyle}>
			<h1>Todo List</h1>
			{/* in react instead of a tags we use Link */}
			<Link style={linkStyle} to="/react">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
		</header>
		)
}

const headerStyle = {
  background : '#333',
  color : '#fff',
  textAlign : 'center',
  padding : '10px',

}
const linkStyle = {
	color : '#fff',
	textDecoration : 'none'
}
export default Header;