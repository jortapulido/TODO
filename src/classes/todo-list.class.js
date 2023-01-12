import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos.splice(this.todos.findIndex(to => to.id == id),1);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        let todo = this.todos.find(to => to.id == id);
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
    }

    eliminarCompletados(){
        debugger
        this.todos = this.todos.filter(to => {
            return !to.completado
        });
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        let todos = !!localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
        this.todos = todos.map(Todo.fromJson);
    }
}
