import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css"
import ItemAddForm from "../item-add-forms";




export default class App extends Component {
    state = {
        todos: [
            {label: "Выйти на перемену", important: false, done: false, id:1},
            {label: "Курение вредно", important: false, done: false, id:2},
            {label: "А муха тоже вертолет.", important: false, done: false, id:3},
            {label: "Но без корбки передач.", important: false, done: false, id:4}
        ],
        filter: 'all'
    }

    addItem = () => {
        const newItem = {
            label: "Hello World!",
            important: false,
            done: false,
            id: Date.now()
        };

        this.setState(({ todos }) => ({
            todos: [...todos, newItem]
        }));
    };

    onDeleted = (id) => {
        this.setState(({todos})=>{
            const index = todos.findIndex(item=>item.id === id);
            const newTodos = [
                ...todos.slice(0,index),
                ...todos.slice(index+1)
            ];
            return { todos: newTodos }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todos})=>{
            const newTodos = todos.map(item => {
                if(item.id === id){
                    return {...item, done: !item.done};
                }
                return item;
            });
            return { todos: newTodos }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todos})=>{
            const newTodos = todos.map(item => {
                if(item.id === id){
                    return {...item, important: !item.important};
                }
                return item;
            });
            return { todos: newTodos }
        })
    }

    setFilter = (filter) => {
        this.setState({ filter });
    }

    filterTodos = (todos, filter) => {
        switch(filter){
            case 'all': return todos;
            case 'active': return todos.filter(item => !item.done);
            case 'done': return todos.filter(item => item.done);
            default: return todos;
        }
    }

    render(){
        const { todos, filter } = this.state;
        const visibleTodos = this.filterTodos(todos, filter);

        return (
            <div className="App">
                <AppHeader
                    todo={todos.filter(t => !t.done).length}
                    done={todos.filter(t => t.done).length}
                />
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.setFilter}
                    />
                </div>

                <TodoList
                    todos={visibleTodos}
                    onDeleted={this.onDeleted}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}
