import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import {icoMsgFunc} from 'redux/modules/icoWarning';

@connect(
    state => ({ language: state.auth.language, }),
    {icoMsgFunc}
)
export default class JoinwarningModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    language: PropTypes.string,

    icoMsgFunc: PropTypes.func,
  };

  onCloseJoinFunc() {
    this.props.onClose();
  }

  render() {
    const styles = require('./warning.scss');

    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className={styles['astro-warning-modal']}>
              <h4>JOIN US</h4>
              <hr/>

              <div className={styles['astro-warning-modal-button']}>
                <div className={styles['astro-warning-modal-div']}>
                  <p>Wanchain is hiring new employees and contract workers in the following areas:
                    -Blockchain Development
                    -Leadership</p>
                  <p>
                    Working in either our Austin or Beijing is preferred; however, we are open to remote hires for the right candidates.
                  </p>
                  <p>We are also hiriing new International Community Managers.</p>
                  <p>
                    Pay is competitive.
                    If you are interested in working on next generation blockchain architecture and rebuilding the financial services industry please send your resume, Github repository, and/or LinkedIn profile to: <span className={styles.spanColor}>jobs@wanchina.org</span>
                  </p>
                </div>
                <button key="1" onClick={this.onCloseJoinFunc.bind(this)} id="theText">close</button>
              </div>
            </div>
        </Modal>
    );
  }
}