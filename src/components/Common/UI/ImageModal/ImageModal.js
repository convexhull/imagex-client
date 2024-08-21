import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import classes from "./ImageModal.module.css";
import * as actions from "../../../../store/actions/index";
import GeneralUtils from "../../../../utils/generalUtils";
import { useHistory } from "react-router-dom";
import Spinner from "../../../UI/Spinner/Spinner";

const ImageModal = ({
  hideImageModal,
  image,
  platform,
  imageUrl,
  imageDescription,
  uploaderProfileImageUrl,
  uploaderName,
  uploaderUsername,
  imageDownloadUrl,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [liked, setLiked] = useState(false);
  const capitalizedImageDesc =
    GeneralUtils.capitalizeFirstLetter(imageDescription);
  let likeBtnClasses = [classes["icons"]];
  if (liked) {
    likeBtnClasses.push(classes["like-btn--liked"]);
  }
  const likeBtnHandler = () => {
    setLiked(true);
    dispatch(actions.asyncSaveFavouriteImageStart(image, platform, history));
  };

  return (
    <Modal hideModal={hideImageModal}>
      {!image && (
        <div className={classes.container}>
          <div className={classes["spinner"]}>
            <Spinner />
          </div>
        </div>
      )}
      {image && (
        <div className={classes.container}>
          <div className={classes["image-header"]}>
            <div className={classes["user-info"]}>
              <div>
                <img src={uploaderProfileImageUrl} alt="uploader's" />
              </div>
              <p>
                <strong>{uploaderName}</strong>
              </p>
              <p>@{uploaderUsername}</p>
            </div>
            <div className={classes["actions"]}>
              <div
                className={likeBtnClasses.join(" ")}
                onClick={likeBtnHandler}
              >
                <ion-icon name="heart"></ion-icon>
              </div>
              <div className={classes["download-button"]}>
                <a
                  title="Download photo"
                  href={`${imageDownloadUrl}?force=true`}
                  rel="noopener noreferrer"
                  target="_blank"
                  download
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
              src={imageUrl}
              alt={capitalizedImageDesc || "alternate definition"}
            />
            <div className={classes["image-footer"]}>
              {capitalizedImageDesc}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
