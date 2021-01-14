import React, { Component } from "react";
import "./App.css";
import { Form } from "./component/Form";
import Task from "./component/Task";
import tasks from "./task/task.json";
import Host from "./component/Host";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    tasks: tasks,
  };
  addT = (name, des) => {
    const newTask = {
      name: name,
      des: des,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };
  deleteT = (id) => {
    const dele = this.state.tasks.filter((e) => e.id !== id);
    this.setState({ tasks: dele });
  };

  updateCheck = (id) => {
    const upd = this.state.tasks.map((e) => {
      if (e.id === id) {
        e.est = !e.est;
      }
      return e;
    });
    this.setState({ tasks: upd });
  };

  render() {
    return (
      <>
        <Router>
          <Link to="/">Home</Link> <br />
          <Link to="host">Host</Link>
          <Route exact
            path="/"
            render={() => {
              return (
                <>
                  <Form add={this.addT} />
                  <Task
                    tasks={this.state.tasks}
                    delete={this.deleteT}
                    check={this.updateCheck}
                  />
                </>
              );
            }}
          ></Route>

          <Route path="/host" component={Host} />
        </Router>

        {/* <Host /> */}
      </>
    );
  }
}

export default App;
