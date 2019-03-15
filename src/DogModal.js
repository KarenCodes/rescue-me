import React from 'react';
import Modal from 'react-modal';
import Dog from './Components/Dog';

const customStyles = {
	content: {
		// top: '50%',
		// left: '50%',
		// right: 'auto',
		// bottom: 'auto'
		// marginRight: '-50%',
		// transform: 'translate(-50%, -50%)'
	}
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default class DogModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		// this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	// afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	this.subtitle.style.color = '#f00';
	// }

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return (
			<div>
				<button onClick={this.openModal}>More</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<button onClick={this.closeModal}>close</button>
					{/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}
					<Dog dog={this.props.dog} />
					<button onClick={this.closeModal}>close</button>
				</Modal>
			</div>
		);
	}
}
