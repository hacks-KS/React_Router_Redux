import React from 'react'
import {browserHistory} from 'react-router'

export default class TodoAdd extends React.Component {
	handleAddTodo(){
		var value = this.refs.todo.value;
		this.props.addTodo(value);
		browserHistory.push("/");
	}
	render () {
		return (
			<div>
				<input type="text" ref="todo" />
				<input type="button" value="add" onClick={this.handleAddTodo.bind(this)}/>
			</div>
		)
	}
}
