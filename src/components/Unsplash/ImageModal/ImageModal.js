import React , { Component } from 'react';
import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';


class ImageModal extends Component {

    state = {
        loading: true
    }
    imageLoadedHandler = () => {
        console.log("yassshh")
        this.setState({loading: false})
    }
    render(){
        return (
            <Modal show={this.props.show} hideModal={this.props.hideImageModal} >
                <div className={classes["image-header"]}>
                    <div className={classes["user-info"]}>
                        <div>
                            <img src="https://images.unsplash.com/profile-1529188896528-7f0ccc5a7172?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32" alt="user image" />
                        </div>
                        <p>Yash</p>
                        <p>Singh</p>
                    </div>
                    <div className={classes["actions"]}>
                        Download options
                    </div>  
                </div>
                <div className={classes["image-container"]}>
                    <img src={this.props.imageToLoad} alt="india's tricolour flag" onLoad={this.imageLoadedHandler} />
                </div>
                <div className={classes["image-footer"]}>
                    India's tricolour
                </div>
            </Modal>
        )
    }
}


export default ImageModal;