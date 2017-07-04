import React from 'react'
import {Link} from 'react-router'


//親コンポーネントの作成
//export defaultで複数の関数を扱いたいときはclassで宣言すると良い
export default class TodoList extends React.Component {
	render () {
		let todos = this.props.text;
		return (
			<div>
				<ul>
					{todos.map(function(todo,i){
						return <li key={i}>{todo}</li>
					})}
				</ul>
				<Link to="/add">追加</Link>
			</div>
		)
	}
};
