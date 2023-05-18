import { action, makeObservable, observable } from "mobx";

export default class todoStore {
    todos = [];
    constructor(){
        makeObservable(this,{
            todos: observable,
            loadTodo: action,
            addTodo: action,
            deleteTodo: action,
            updateTodo: action
        })
    }

    loadTodo(data){
        this.todos = data
    }

    addTodo(data){
        this.todos = [...this.todos, data]
    }

    deleteTodo(id){
        let newTodo = this.todos.filter((item) => item.id !== Number(id))
        this.todos = newTodo
    }
    updateTodo(data){
        let newTodo = this.todos.map((item) => item.id === data.id ? data : item)
        this.todos = newTodo
    }

}