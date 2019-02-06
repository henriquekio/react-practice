import React, {Component} from 'react'
import TaskService from '../service/TaskResourceService.js'
import swal from 'sweetalert'
import TaskList from '../components/TaskList'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: {}
        };

        this.modelDataChange = this.modelDataChange.bind(this);
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

    addTask(){
        TaskService.setTaskIndexedDb(this.state.newTask)
            .then(() =>{
                swal('Tarefa Adicionada !!', '', 'success');
            })
            .catch(err => {
                swal('Opss..', 'Desculpe, ocorreu um erro interno. Por favor tente novamente mais tarde.', 'error');
                console.warn(err);
            })
    }


    render() {
        return (
            <div className={"container-form"}>
                <h1 className={"text-center"}>Add your task</h1>
                <br/>
                <input name="task" placeholder={""} onChange={this.modelDataChange}/>
                <button className={"btn-success"}>Add task</button>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Index
