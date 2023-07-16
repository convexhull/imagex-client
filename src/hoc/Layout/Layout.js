import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import MainNavbar from "../../components/Header/MainNavigation/MainNavigation";
// import ImageModal from "../../components/RandomImage/ImageModal/ImageModal";
import ImageModal from "../../components/Common/UI/ImageModal/ImageModal";

class Layout extends Component {
  state = {
    showRandomImageModal: false,
  };

  toggleRandomImageModal = () => {
    if (!this.state.showRandomImageModal) {
      this.props.onRandomImageLoad();
    } else {
      this.props.onClearRandomImage();
    }
    this.setState((state, props) => {
      return {
        showRandomImageModal: !state.showRandomImageModal,
      };
    });
  };

  render() {
    const randomImage = this.props.randomImage;
    return (
      <Fragment>
        {this.state.showRandomImageModal ? (
          <ImageModal
            hideImageModal={this.toggleRandomImageModal}
            image={randomImage}
            platform="unsplash"
            imageDescription={
              randomImage.description || randomImage.alt_description
            }
            uploaderProfileImageUrl={randomImage.user?.profile_image.large}
            uploaderName={randomImage.user?.name}
            uploaderUsername={randomImage.user?.username}
            imageDownloadUrl={randomImage.links?.download}
            imageUrl={randomImage.urls?.regular}
          />
        ) : null}
        <header>
          <MainNavbar randomImageLoad={this.toggleRandomImageModal} />
        </header>
        {this.props.children}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    randomImage: state.unsplash.randomImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRandomImageLoad: () => dispatch(actions.asyncUnsplashGetRandomImage()),
    onClearRandomImage: () => dispatch(actions.unsplashClearRandomImage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
