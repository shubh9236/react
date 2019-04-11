import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Todoitem extends Component {
	getStyle = () =>{
		return {
			//css properties are referred to using Camelcasing unlike normal css
			background : '#f4f4f4',
			padding : '10px',
			borderBottom : '1px #ccc dotted',
			textDecoration : this.props.todo.completed ? 'line-through' : 'none'
		}
	}
  render() {
  	const {id,title} = this.props.todo;
    return (
    	//in inline styling {{}} are used in case of styling using a variable or function {} are used.
    	<div style={this.getStyle()}>
    		<p>
    			<input type="checkbox" onChange= {this.props.markComplete.bind(this,id)}/>
    			{title}
    			<button onClick={this.props.delTodo.bind(this,id)} style = {btnStyle}>
    				x
    			</button>
    		</p>
    	</div>
    	)
  }
}

const btnStyle = {
	background : '#ff0000',
	color : '#fff',
	border : 'none',
	padding : '5px 9px',
	borderRadius : '50%',
	cursor : 'pointer',
	float : 'right'
}

// PropTypes
Todoitem.propTypes = {
	todo : PropTypes.object.isRequired,
	markComplete : PropTypes.func.isRequired,
	delTodo : PropTypes.func.isRequired	
}
export default Todoitem;
