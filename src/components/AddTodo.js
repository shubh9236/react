import React , {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component { 
	state = {
		title : ''
	}

	onChange = (e) =>{
		this.setState({title : e.target.value});
		//this.setState({[e.target.name] : e.target.value})   //can be used to update all input values when value of name parameter and key of state are same
	}

	onSubmit = (e) =>{
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title : ''});
	}
	render(){
		return(
			<form onSubmit={this.onSubmit} style={{display : 'flex'}}>
				<input type="text" name="title" placeholder="Add to do..." style = {{ flex : '10', padding : '5px'}} value={this.state.title} onChange={this.onChange} / >
				<input type="submit" name="submit" className="btn" style = {{ flex : '1'}} / >
			</form>
			)
	}
}

// PropTypes
AddTodo.propTypes = {
	addTodo : PropTypes.func.isRequired
}
export default AddTodo;