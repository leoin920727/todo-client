import React, { Component } from 'react';
import axios from 'axios';

class TodoCreate extends Component {
    state = {
        todoList: { "todoTableId": 1, "title": "21312", "isComplete": 0 }

    }
    render() {
        return (
            <div className="container">

                <h1>待辦事項清單 - 新增</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form action="/Todo/Create" method="post">
                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">項目名稱</label>
                                <input className="form-control" type="text" id="Name"
                                    name="Name" value={this.state.todoList.title} onChange={this.name_change} />
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" id="IsComplete"
                                        name="IsComplete" value="1"
                                        checked={this.state.todoList.isComplete ? "checked" : ""}
                                        onChange={this.isComplete_change} /> 是否已完工
                                </label>
                            </div>
                            <div className="form-group">
                                <input id="okButton" type="button" value="確定"
                                    className="btn btn-outline-primary"
                                    onClick={this.ok_click} /> |
                                <a href="/index.html" className="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
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
        let url = "http://localhost:8000/todo/create";
        await axios.post(url, this.state.todoList);
        window.location = "/todo/index";
    }
}


export default TodoCreate;