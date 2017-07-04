import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoAdd from '../components/TodoAdd.jsx';
import TodoList from '../components/TodoList.jsx';
import * as Actions from '../actions/action';

//ReactとReduxを繋げる部分

//mapStateToPropsはReactに対してStoreの情報を渡すための関数
//stateが変更されて，それがstoreに伝えられたときに呼び出される
function mapStateToProps(state) {
	return {
		text: state.todos.text
	}
}

//mapDispatchToPropsはReactがStoreの情報を変更するための関数
//storeにstateの変更を伝える
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

//connectによりコンポーネントのpropsで使えるようになる
export const Add = connect(mapStateToProps, mapDispatchToProps)(TodoAdd);

export const List = connect(mapStateToProps, mapDispatchToProps)(TodoList);
