import React, {Component} from 'react'
import TaskService from '../service/TaskResourceService.js'
import swal from 'sweetalert'
import TaskList from '../components/TaskList'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: {
                title: null,
                concluido: false
            }
        };

        this.modelDataChange = this.modelDataChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
        this.setState({
            tasks: TaskService.getTasks()
        });
    }

    /**
     * @type event
     * @param e
     */
    modelDataChange(e) {
        return this.setState({
            newTask: e.target.value
        })
    }

    addTask() {
        if (this.state.newTask.title !== null) {
            TaskService.setTaskIndexedDb(this.state.newTask)
                .then(() => {
                    swal('Tarefa Adicionada !!', '', 'success');
                })
                .catch(err => {
                    swal('Opss..', 'Desculpe, ocorreu um erro interno. Por favor tente novamente mais tarde.', 'error');
                    console.warn(err);
                })
        }else {
            swal('Oppss...', 'Digite a tarefa', 'warning')
        }
    }


    render() {
        return (
            <div className={"container-form"}>
                <h1 className={"text-center"}>Add your task</h1>
                <br/>
                <input name="task" placeholder={""} onChange={this.modelDataChange}/>
                <button onClick={this.addTask} className={"btn-success"}>Add task</button>
                <br/>
                <br/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Index
