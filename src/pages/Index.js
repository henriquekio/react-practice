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

        this.setTaskChange = this.setTaskChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
        TaskService.getTasks().then(data => {
            console.log(data);
            this.setState({
                tasks: data
            });

        });

    }

    /**
     * @type event
     * @param e
     */
    setTaskChange(e) {
        this.setState({
            newTask: e.target.value
        })
    }

    addTask() {
        if (this.state.newTask.title !== null && this.state.newTask.title !== "") {
            TaskService.setTaskIndexedDb(this.state.newTask)
                .then(() => {
                    swal('Tarefa Adicionada !!', '', 'success');
                    TaskService.getTasks().then((data) => this.setState({tasks: data}));
                })
                .catch(err => {
                    swal('Opss..', 'Desculpe, ocorreu um erro interno. Por favor tente novamente mais tarde.', 'error');
                    console.warn(err);
                })
        } else {
            swal('Oppss...', 'Digite a tarefa', 'warning')
        }
    }

    render() {
        const {tasks} = this.state;

        return (
            <div className={"container-form"}>
                <h1 className={"text-center"}>Add your task</h1>
                <br/>
                <input name="task" placeholder={""} onChange={this.setTaskChange}/>
                <button onClick={this.addTask} className={"btn-success"}>Add task</button>
                <br/>
                <br/>
                <TaskList tasks={tasks}/>
            </div>
        )
    }
}

export default Index
