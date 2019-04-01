import React, {Component} from 'react'

export default class TaskList extends Component {

    removeTask = (key, index) => {
        this.props.removeTask(key, index);
    }

    listTasks = (tasks) => {
        if (tasks.length > 0) {
            return tasks.map((task, index) =>
                <li key={task.key.toString()}>
                    <div className={"taskContainer"}>
                        <div className={"taskContent"}>
                            {task.value}
                        </div>
                        <div className={"taskAction"}>
                            <button  className={"taskActionButtons done"}>
                                <i className={"material-icons"}>done</i>
                            </button>
                            <button onClick={() => this.removeTask(task.key, index)} className={"taskActionButtons remove"}>
                                <i className={"material-icons"}>clear</i>
                            </button>
                        </div>
                    </div>
                </li>
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