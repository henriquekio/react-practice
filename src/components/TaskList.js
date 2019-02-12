import React, {Component} from 'react'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.listTasks = this.listTasks.bind(this);
    }

    listTasks() {
        if (this.props.tasks.length > 0) {
            const tasks = this.props.tasks;
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
        console.log(list);

        return (<ul>{list}</ul>);
    }
}

export default TaskList
