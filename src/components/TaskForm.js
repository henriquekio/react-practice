import React, {Component} from 'react';
import swal from "sweetalert";

export default class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ""
        }
    }

    /**
     * @type event
     * @param e
     */
    setTaskChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    onAdd = () => {
        const {task} = this.state;
        if(task == null){
            swal('Oppss...', 'A descrição da tarefa não pode ser vazia.', 'warning')
        }else{
            this.props.addTask(task);
            this.setState({
                task: ""
            });
        }
    }

    render() {
        const {task} = this.state;

        return (
            <div>
                <input value={task} name="task" placeholder={""} onChange={this.setTaskChange}/>
                <button onClick={this.onAdd} className={"btn-success"}>Add task</button>
            </div>
        );
    }
}