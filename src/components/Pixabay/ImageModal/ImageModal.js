import React , { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../Common/UI/Modal/Modal';
import classes from './ImageModal.module.css';
import * as actions from '../../../store/actions/index';
import GeneralUtils from '../../../utils/generalUtils';


class ImageModal extends Component {

    state = {
        liked: false
    }

    likeBtnHandler = () => {
        this.setState({
            liked: true
        });
        this.props.onAddToFavourites(this.props.image, "pixabay")
    }
  
    render(){
        let imageDescription = this.props.image.description || this.props.image.alt_description || this.props.image.tags;
        imageDescription = GeneralUtils.capitalizeFirstLetter(imageDescription);
        let likeBtnClasses = [classes["icons"]];
        if(this.state.liked){
            likeBtnClasses.push(classes["like-btn--liked"]);
        }
        return (
            <Modal hideModal={this.props.hideImageModal} >
                <div className={classes["image-header"]}>
                    <div className={classes["user-info"]}>
                        <div>
                            <img src={this.props.image.userImageURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__480.png"} alt="uploader's"/>
                        </div>
                        <p><strong>{this.props.image.user.name}</strong></p>
                        <p>@{this.props.image.user}</p>
                    </div>
                    <div className={classes["actions"]}>
                        <div className={likeBtnClasses.join(' ')} onClick={this.likeBtnHandler}>
                            <ion-icon name="heart"></ion-icon>
                        </div>
                        <div className={classes["download-button"]}>
                            <a title="Download photo" href={this.props.image.largeImageURL}  rel="noopener noreferrer" target="_blank"  ><span className="_2Aga-">Download</span></a>
                        </div>
                    </div>  
                </div>
                <div className={classes["image-container"]}>
                    <img src={this.props.image.largeImageURL} alt="india's tricolour flag"  />
                </div>
                <br />
                <div className={classes["image-footer"]}>
                    {imageDescription}
                </div>
            </Modal>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToFavourites: (image, platform) => dispatch(actions.asyncSaveFavouriteImageStart(image, platform))
    }
}


export default connect(null, mapDispatchToProps)(ImageModal);