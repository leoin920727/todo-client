import React, { Component } from 'react';
import axios from 'axios';

class TodoIndex extends Component {
    state = {
        todoList: [
            { "todoTableId": 1, "title": "Job A", "isComplete": 0 },
            { "todoTableId": 2, "title": "Job B", "isComplete": 1 },
            { "todoTableId": 3, "title": "Job C", "isComplete": 0 }
        ]
    }
    render() {
        return (
            <div className="container">
                <h1>
                    待辦事項清單
                    <a href="/Todo/Create" className="btn btn-outline-success btn-md float-right">
                        新增
                    </a>
                </h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                項目名稱
                            </th>
                            <th>
                                是否已完工
                            </th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todoList.map((todoItem) =>
                                <tr key={todoItem.todoTableId}>
                                    <td>
                                        {todoItem.title}
                                    </td>
                                    <td>
                                        <input className="check-box" disabled="disabled"
                                            type="checkbox" checked={todoItem.isComplete ? "checked" : ""} />
                                    </td>
                                    <td>
                                        <span className="float-right">
                                            <a href={`/Todo/Edit/${todoItem.todoTableId}`} className="btn btn-outline-primary btn-sm">編輯</a> |
                                            <a href={`/Todo/Delete/${todoItem.todoTableId}`} className="btn btn-outline-danger btn-sm">刪除</a>
                                        </span>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
        );
    }
    async componentDidMount() {
        let result = await axios.get("http://localhost:8000/todo/list");
        let newState = { ...this.state };
        newState.todoList = result.data;
        this.setState(newState);
    }
}

export default TodoIndex;