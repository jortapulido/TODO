import './styles.css';
import {Todo, TodoList} from './classes'
import {creatTodoHTML} from './js/componentes';

export const todoList = new TodoList();

for(let todo of todoList.todos){
    creatTodoHTML(todo);
}


document.getElementById('test').addEventListener('click',function(event){
    const a = this;
});

console.log(todoList);