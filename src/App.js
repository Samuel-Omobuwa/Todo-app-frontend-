import React, { Component } from 'react'
import { Modal } from 'reactstrap';
import './index.css';
import CustomModal from './components/Model';


const tasks = [
  {
    id: 1,
    title: "Call Clients",
    description: "Call clients for overdue invoices.",
    completed: true
  },
  {
    id: 2,
    title: "Dunning",
    description: "Sending dunning letters to clients for uncollected cash.",
    completed: false
  },
  {
    id: 3,
    title: "Order Release",
    description: "Check out customers accounts and release or block orders accordingly",
    completed: true
  },
  {
    id: 4,
    title: "Weekly Reports",
    description: "Sending the weekly reports for overdue invoices",
    completed: false
  },

]



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      taskList: tasks,
    }
  }

  // Create toggle property
  toggle = () => {
    this.setState({modal: !this.state.modal});
  };

  handleSubmit = item => {
    this.toggle()
    alert("Saved!" + JSON.stringify(item))
  }
  handleDelete = item => {
       alert("Deleted!" + JSON.stringify(item))
  }

  createItem = () => {
    const item = {title: "", modal: !this.state.modal }
    this.setState({activeItem: item, modal: !this.state.modal})
  }

  editItem = item => {
    this.setState({activeItem: item, modal: !this.state.modal})
  }



  displayCompleted = status => {
    if (status){
      return this.setState({viewCompleted: true})
    }
    return this.setState({viewCompleted: false})
  }

  renderTabList = () => {
    return (
      <div className='my-5 tab-list'>
        <span
        onClick={() => this.displayCompleted(true)}
        className={this.state.viewCompleted ? "active" : ""}
        
        >
          Completed
        </span>
        <span
        onClick={() => this.displayCompleted(false)}
        className={this.state.viewCompleted ? "" : "active"}
        >
          Incomplete
        </span>
      </div>
    )

  }

    // Rendering items in the List as completed || imcompleted
  renderItem = () => {
    const{viewCompleted} = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed === viewCompleted
    );



    return newItems.map(item => (
      <li
      key={item.id}
      className='list-group-item d-flex justify-content-between align-items-center' >

        <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : "" }`}
        title = {item.title}>
          {item.title}
        </span>
        <span>
          <button className='btn btn-info mr-2'>Edit</button>
          <button className='btn btn-danger mr-2'>Delete</button>
        </span>

      </li>
    ))

  };



  
  render() {
    return (
      <main className='context p-3 mb-2 bg-info'>
        <h1 className='text-white text-uppercase text-center my-4'>Task Manager</h1>
          <div className='row'>
            <div className='col-md-6 col-sma-10 mx-auto p-0'>
              <div className='card p-3'>
                <div>
                  <button className='btn btn-warning'>
                    Add Task
                  </button>
                </div>
                {this.renderTabList()}
                <ul className='list-group list-group-flush'>
                  {this.renderItem()}
                </ul>
              </div>
            </div>
          </div>
          <footer className='my-3 mb-2 bg-info text-white text-center' > Copyright 2024 &copy; All Rights Reserved</footer>
          {this.state.modal ? (
            <Modal activeItem = {this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
          ) : null }
      </main>
    )
  }
}  


export default App;
