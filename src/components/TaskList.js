import React, {Component} from 'react'

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props
        };

        this.listTasks = this.listTasks.bind(this);
    }

    listTasks() {
        if (this.state.tasks.length > 0) {
            const tasks = this.state.tasks;
            return tasks.map((task) =>
                <li>{task.title}</li>
            );
        }

        return (
            <li className={"disable text-center"}>Add your first task =)</li>
        );
    }

    render() {
        let list = this.listTasks();

        return (<ul>{list}</ul>);
    }
}

export default TaskList
