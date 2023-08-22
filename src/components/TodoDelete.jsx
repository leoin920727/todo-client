import React, { Component } from 'react';
import axios from 'axios';
class TodoDelete extends Component {
    state = {
        todoList: { "todoTableId": 1, "title": "21312", "isComplete": 0 }
    }
    render() {
        return (
            <div class="container">
                <h1>待辦事項清單 - 刪除</h1>
                <hr />
                <div>
                    <dl class="row">
                        <dt class="col-sm-2">
                            項目名稱
                        </dt>
                        <dd class="col-sm-10" id="Name">
                            {this.state.todoList.title}
                        </dd>
                        <dt class="col-sm-2">
                            是否已完工
                        </dt>
                        <dd class="col-sm-10">
                            <input class="check-box" disabled="disabled" id="isComplete"
                                type="checkbox" checked={this.state.todoList.isComplete ? "checked" : ""} />
                        </dd>
                    </dl>
                    <hr />
                    <h3>確定要刪除這筆資料嗎?</h3>
                    <form action="/Todo/Delete" method="post">
                        <input type="hidden" id="TodoItemId" name="TodoItemId"
                            value="1"
                        />
                        <input id="deleteButton" type="button" value="確定" onClick={this.ok_click} class="btn btn-outline-danger" /> |
                        <a href="/index.html" class="btn btn-outline-info">取消</a>
                    </form>
                </div>
            </div>
        );
    }
    async componentDidMount() {
        let result = await axios.get(`http://localhost:8000/todo/item/${this.props.match.params.id}`);
        let newState = { ...this.state };
        newState.todoList = result.data;
        this.setState(newState);
    }
    ok_click = async () => {
        console.log(this.state.todoList)
        let url = `http://localhost:8000/todo/delete/${this.props.match.params.id}`;
        await axios.delete(url, this.state.todoList);
        window.location = "/todo/index";
    }
}

export default TodoDelete;


