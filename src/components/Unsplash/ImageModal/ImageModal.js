import React , { Component } from 'react';
import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';


class ImageModal extends Component {

    
    render(){
        return (
            <Modal show={this.props.show} hideModal={this.props.hideImageModal} >
                <div className={classes["image-options"]}>
                    <div>
                        User's Info
                    </div>
                    <div>
                        Download options
                    </div>  
                </div>
                <div className={classes["image-container"]}>
                    <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80" alt="india's tricolour flag" />
                </div>
                <div>
                    India's tricolour
                </div>
            </Modal>
        )
    }
}


export default ImageModal;