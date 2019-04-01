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

    removeTask = (key, index) => {
        try {
            TaskService.removeTask(key).then(() => {
                swal('Deu bom!!!', 'Tarefa removida com sucesso', 'success');
                const {tasks} = this.state;
                tasks.splice(index, 1);
                this.setState({tasks});
            });
        } catch (e) {
            swal('Opss..', 'Desculpe, ocorreu um erro interno. Por favor tente novamente mais tarde.', 'error');
            console.log(e);
        }
    }

    render() {
        const {tasks} = this.state;

        return (
            <MainContent>
                <TaskForm addTask={this.addTask}/>
                <br/>
                <br/>
                <TaskList removeTask={this.removeTask} tasks={tasks}/>
            </MainContent>
        )
    }
}

export default Index
