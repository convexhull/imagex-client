import React , { Component } from 'react';
import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';


class ImageModal extends Component {

  
    render(){
        return (
            <Modal show={this.props.show} hideModal={this.props.hideImageModal} >
                <div className={classes["image-header"]}>
                    <div className={classes["user-info"]}>
                        <div>
                            <img src={this.props.image.user.profile_image.large } alt="user image" />
                        </div>
                        <p><strong>{this.props.image.user.name}</strong></p>
                        <p>@{this.props.image.user.username}</p>
                    </div>
                    <div className={classes["actions"]}>
                        <div className={classes["icons"]}>
                            <ion-icon name="heart"></ion-icon>
                        </div>
                        <div className={classes["icons"]}>
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                        <div className={classes["download-button"]}>
                            <a title="Download photo" href={`${this.props.image.links.download}?force=true`} rel="nofollow" target="_blank"  ><span class="_2Aga-">Download</span></a>
                        </div>
                    </div>  
                </div>

                <div className={classes["image-container"]}>
                    <img src={this.props.image.urls.regular} alt="india's tricolour flag"  />
                </div>
                <br />
                <div className={classes["image-footer"]}>
                    {this.props.image.description || this.props.image.alt_description}
                </div>

            </Modal>
        )
    }
}


export default ImageModal;