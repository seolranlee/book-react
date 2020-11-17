import React, { Component } from 'react';
import Title from './Title';

class TodoList extends Component {
    state = {
        desc: '',
        currentId: 1, 
        todoList: [],
        title: '오늘 할 일'
    }
    onAdd = () => {
        const { desc, currentId, todoList } = this.state
        const todo = {
            id: currentId, 
            desc
        }
        this.setState({
            currentId: currentId + 1,
            todoList: [ ...todoList, todo ]
        })

    }
    onDelete = (e) => {
        const { todoList } = this.state
        const id = Number(e.target.dataset.id)
        const newTodoList = todoList.filter(todo => todo.id !== id)
        this.setState({
            todoList: newTodoList
        })
    }
    onChangeDesc = (e) => {
        const desc = e.target.value
        this.setState({ desc })

    }
    onEditTitle = () => {
        this.setState({
            title: '타이틀 변경!'
        })
    }
    render() {
        const { todoList, desc, title } = this.state
        return (
            <div>
                <Title title={title} onEditTitle={this.onEditTitle}/>
                <ul>
                    {todoList.map(todo => (
                        <li key={todo.id}>
                            <span>{todo.desc}</span>
                            <button data-id={todo.id} onClick={this.onDelete}>삭제</button>
                        </li>
                    ))}
                </ul>
                <input type="text" onChange={this.onChangeDesc} value={desc}></input>
                <button onClick={this.onAdd}>추가</button>
            </div>
        );
    }
}

export default TodoList;