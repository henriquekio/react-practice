import React, {Component} from 'react'

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.listTasks = this.listTasks.bind(this);
    }

    listTasks(tasks) {
        if (tasks.length > 0) {
            return tasks.map((task) =>
                <li key={task.key.toString()}>{task.value}</li>
            );
        }

        return (
            <li className={"disable text-center"}>Add your first task =)</li>
        );
    }

    render() {
        let list = this.listTasks(this.props.tasks);


        return (<ul>{list}</ul>);
    }
}

export default TaskList
