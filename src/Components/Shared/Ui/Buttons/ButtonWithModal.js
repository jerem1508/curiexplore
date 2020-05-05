import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import classes from './ButtonWithModal.scss';

class ButtonWithModal extends Component {
  state={
    showModal: false,
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  titleFunction = title => (
    (title) ? <div className={classes.Title}>{title}</div> : null
  );

  render() {
    return (
      <div className={classes.ButtonWithModal}>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          dialogClassName={classes.Modal80w}
        >
          <Modal.Header closeButton>
            <div className={classes.Header}>
              {this.titleFunction(this.props.title)}
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className={`container ${classes.Content}`}>
              {this.props.dataHtml}
            </div>
          </Modal.Body>
        </Modal>

        <button className={`btn mt-3 p-0 pl-2 pr-2 ${classes.Button}`} onClick={this.handleShowModal} onKeypress={this.handleShowModal} type="button" tabIndex={0}>
          {this.props.buttonLabel}
          <i className={`${this.props.logo} ml-2`} />
        </button>
      </div>
    );
  }
}

export default ButtonWithModal;


ButtonWithModal.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  dataHtml: PropTypes.string,
};
