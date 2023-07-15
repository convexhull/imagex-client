import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import classes from "./ImageModal.module.css";
import * as actions from "../../../../store/actions/index";
import GeneralUtils from "../../../../utils/generalUtils";
import { useHistory } from "react-router-dom";

const ImageModal = ({ hideImageModal, image }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [liked, setLiked] = useState(false);
  let imageDescription = image.description || image.alt_description;
  imageDescription = GeneralUtils.capitalizeFirstLetter(imageDescription);
  let likeBtnClasses = [classes["icons"]];
  if (liked) {
    likeBtnClasses.push(classes["like-btn--liked"]);
  }
  const likeBtnHandler = () => {
    setLiked(true);
    dispatch(actions.asyncSaveFavouriteImageStart(image, "unsplash", history));
  };
  return (
    <Modal hideModal={hideImageModal}>
      <div className={classes["image-header"]}>
        <div className={classes["user-info"]}>
          <div>
            <img src={image.user.profile_image.large} alt="uploader's" />
          </div>
          <p>
            <strong>{image.user.name}</strong>
          </p>
          <p>@{image.user.username}</p>
        </div>
        <div className={classes["actions"]}>
          <div className={likeBtnClasses.join(" ")} onClick={likeBtnHandler}>
            <ion-icon name="heart"></ion-icon>
          </div>
          <div className={classes["download-button"]}>
            <a
              title="Download photo"
              href={`${image.links.download}?force=true`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="_2Aga-">
                {" "}
                <i class="fa fa-download" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className={classes["image-container"]}>
        <img
          src={image.urls.regular}
          alt={
            image.alt_description || image.description || "alternate definition"
          }
        />
      </div>
      <br />
      <div className={classes["image-footer"]}>{imageDescription}</div>
    </Modal>
  );
};

export default ImageModal;
