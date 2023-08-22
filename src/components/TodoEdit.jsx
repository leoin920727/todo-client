import React, { Component } from 'react';
import axios from 'axios';
class TodoEdit extends Component {
    state = {
        todoList: { "todoTableId": 1, "title": "21312", "isComplete": 0 }
    }
    render() {
        return (
            <div class="container">


                <h1>待辦事項清單 - 修改{this.props.match.params.id}</h1>
                <hr />
                <div class="row">
                    <div class="col-md-4">
                        <form action="/Todo/Edit" method="post">

                            <input type="hidden" id="TodoItemId"
                                name="TodoItemId" value="1" />
                            <div class="form-group">
                                <label class="control-label" for="Name">項目名稱</label>
                                <input class="form-control" type="text"
                                    id="Name" name="Name" value={this.state.todoList.title}
                                    onChange={this.name_change} />
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox"
                                        id="IsComplete" name="IsComplete"
                                        value="1"
                                        checked={this.state.todoList.isComplete ? "checked" : ""}
                                        onChange={this.isComplete_change} /> 是否已完工
                                </label>
                            </div>
                            <div class="form-group">
                                <input id="okButton" type="button" value="確定" class="btn btn-outline-primary"
                                    onClick={this.ok_click} /> |
                                <a href="/index.html" class="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    name_change = (e) => {
        let newState = { ...this.state };
        newState.todoList.title = e.target.value;
        this.setState(newState);
    }
    isComplete_change = (e) => {
        // console.log(e.target.value, e.target.checked);
        let newState = { ...this.state };
        newState.todoList.isComplete = e.target.checked ? 1 : 0;
        this.setState(newState);
    }
    ok_click = async () => {
        console.log(this.state.todoList)
        let url = `http://localhost:8000/todo/item/`;
        await axios.put(url, this.state.todoList);
        window.location = "/todo/index";
    }
    async componentDidMount() {
        let result = await axios.get(`http://localhost:8000/todo/item/${this.props.match.params.id}`);
        let newState = { ...this.state };
        newState.todoList = result.data;
        this.setState(newState);
    }
}

export default TodoEdit;