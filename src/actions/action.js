//actionの定義

//新しいtodoの追加
export function addTodo(value) {
 return {
    type: 'ADD_TODO',
    text: value
 };
}
