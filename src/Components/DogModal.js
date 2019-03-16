import React from 'react';
import Modal from 'react-modal';
import Dog from './Dog';
import Name from './Name';
import Image from './Image';
import Features from './Features';
import GoodWith from './GoodWith';

const customInlineStyles = {
	content: {
		top: '40px',
		left: '5%',
		right: '5%',
		bottom: '40px',

		background: 'rgb(255, 255, 255)',
		overflow: 'auto',
		borderRadius: '4px',
		outline: 'none',
		padding: '20px',
		// transform: 'translate(-50%, -50%)',
		margin: '5px'
	},
	overlay: {
		backgroundColor: '#3172a5'
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
		const dog = this.props.dog;
		return (
			<div>
				<button onClick={this.openModal}>
					<article key={dog.id} className="doglist container">
						<Image dog={dog} size={'medium'} />
						<Name dog={dog} />
						<Features dog={dog} />
						<GoodWith dog={dog} />
					</article>
				</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customInlineStyles}
					contentLabel="Dog Information Modal"
				>
					<button className="modal-close" onClick={this.closeModal}>
						close<span>X</span>
					</button>
					{/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}
					<Dog dog={this.props.dog} />
					<button className="modal-close" onClick={this.closeModal}>
						close<span>X</span>
					</button>
				</Modal>
			</div>
		);
	}
}
