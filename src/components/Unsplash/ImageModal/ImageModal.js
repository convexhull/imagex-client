import React , { Component } from 'react';
import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';
import Spinner from '../../UI/Spinner2/Spinner2';


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
                <div className={classes["image-options"]}>
                    <div>
                        User's Info
                    </div>
                    <div>
                        Download options
                    </div>  
                </div>
                <div className={classes["image-container"]}>
                    <img src={this.props.imageToLoad} alt="india's tricolour flag" onLoad={this.imageLoadedHandler} />
                    {/* {this.state.loading ? <Spinner /> : null } */}
                </div>
                <div>
                    India's tricolour
                </div>
            </Modal>
        )
    }
}


export default ImageModal;