import React from 'react';
import Modal from 'react-modal';
import TextArea from '../TextArea';
import {PrimaryButton} from '../Button';

const customStyles = {
    content : {
		top                   : '40%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		transform             : 'translate(-50%, -50%)'
	}
};

const AddTodoModal = ({modalIsOpen, closeModal, onChange, todoText, submitTodo}) => (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
    >
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{margin: 0}}>Add your todo</p>
            <TextArea onChange={onChange} value={todoText} />
            <PrimaryButton primary onClick={submitTodo}>Add</PrimaryButton>
        </div>
    </Modal>
);

export default AddTodoModal;