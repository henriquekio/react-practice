import React, {Component} from 'react'
import TaskService from '../service/TaskResourceService.js'
import swal from 'sweetalert'
import TaskList from '../components/TaskList'
import TaskForm from "../components/TaskForm";
import {MainContent} from "../components/MainContent";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        TaskService.getTasks().then(data => {
            this.setState({
                tasks: data
            });

        });

    }

    addTask = (task) => {
        TaskService.setTaskIndexedDb(task)
            .then(() => {
                swal('Tarefa Adicionada !!', '', 'success');
                TaskService.getTasks().then((data) => this.setState({tasks: data}));
            })
            .catch(err => {
                swal('Opss..', 'Desculpe, ocorreu um erro interno. Por favor tente novamente mais tarde.', 'error');
                console.warn(err);
            })
    }

    render() {
        const {tasks} = this.state;

        return (
            <MainContent>
                <TaskForm addTask={this.addTask}/>
                <br/>
                <br/>
                <TaskList tasks={tasks}/>
            </MainContent>
        )
    }
}

export default Index
