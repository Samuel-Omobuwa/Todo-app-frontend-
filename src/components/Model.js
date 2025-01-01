import React, {Component} from 'react'

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class CustomModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

// To check if the Checkbox is checked or not
handleChange = e => {
    let {name, value} = e.target;
    if(e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = {...this.state.activeItem, [name]: value};
    this.setState({activeItem})
};

render() {
    const {toggle, onSave} = this.props;
    return (
        <Modal IsOpen={true}  toggle={toggle} >
            <ModalHeader toggle={toggle}>Task Item</ModalHeader>
            <ModalBody>

                <form>
                    <FormGroup>
                        {/* Title */}
                        <label for='title'>Title</label>
                        <Input
                            type='text'
                            name='title'
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder='Enter Task Title'
                        />
                    </FormGroup>

                    {/* Description lable */}
                    <FormGroup>
                        <label for='description'>Description</label>
                        <Input
                            type='text'
                            name='description'
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder='Enter Task Description'
                        />                        
                    </FormGroup>

                    {/* Completed label */}
                    <FormGroup check>
                        <label for='completed'>
                        <Input
                            type='checkbox'
                            name='completed'
                            checked={this.state.activeItem.completed}
                            onChange={this.handleChange}
                            
                        />
                        Completed
                        </label>
                    </FormGroup>

                </form>
            </ModalBody>
            <ModalFooter>
                <buton color='success' onClick={(this.state.activeItem)} >
                    Save
                </buton>
            </ModalFooter>
         </Modal>
    )   
    }
}

export default CustomModal;