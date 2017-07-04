//reducerは，現在のstateとactionから新しいstateの生成を行う
export default function todos(state = {text: ["aaa"]}, action){
	switch (action.type) {
		case 'ADD_TODO':
			return {text: state.text.concat([action.text])}
		default:
			return state
	}
};
