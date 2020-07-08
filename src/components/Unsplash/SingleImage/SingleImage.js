import React , { Component } from 'react';
import Modal from '../../Common/UI/Modal/Modal';
import classes from './SingleImage.module.css';


class SingleImage extends Component {

    render(){
        return (
            <Modal>
                <div className={classes["image-options"]}>
                    <div>
                        User's Info
                    </div>
                    <div>
                        Download options
                    </div>
                </div>
                <div className={classes["image-container"]}>
                    <img style={{height: '100%'}} src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80" alt="india's tricolour flag" />
                </div>
                <div>
                    India's tricolour
                </div>
            </Modal>
        )
    }
}


export default SingleImage;