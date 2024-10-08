import React from "react";
import { connect } from "react-redux";

import Spinner from "../../UI/Spinner/Spinner";
import ImageGrid from "../../Unsplash/ImageGrid/ImageGrid";
import * as actions from "../../../store/actions/index";
import classes from "./ScrollLazyLoading.module.css";
import EndOfResults from "../../UI/EndOfResults/EndOfResults";

class ScrollLazyLoading extends React.Component {
  constructor(props) {
    super(props);
    this.loaderRef = React.createRef();
    this.cnt = 1;
  }

  intersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      this.props.onSearchByKeyword(this.props.keyword, this.cnt++);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.onClearPreviousImages();
      this.cnt = 1;
    }
  }

  componentDidMount() {
    this.props.onClearPreviousImages();
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    let observer = new IntersectionObserver(
      this.intersectionObserverCallback,
      options
    );
    observer.observe(this.loaderRef.current);
  }

  render() {
    let spinnerClasses = [classes["spinner"]];
    let endOfResults = null;
    if (this.props.moreResults === false) {
      spinnerClasses.push(classes["spinner--invisible"]);
      endOfResults = (
        <div className={classes["end-of-results"]}>
          <EndOfResults />
        </div>
      );
    }
    return (
      <React.Fragment>
        <ImageGrid />
        <div ref={this.loaderRef} className={spinnerClasses.join(" ")}>
          <Spinner />
        </div>
        {endOfResults}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moreResults: state.unsplash.moreResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchByKeyword: (keyword, page) =>
      dispatch(actions.unsplashImageSearchByKeyword(keyword, page)),
    onClearPreviousImages: () => dispatch(actions.unsplashClearAllImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollLazyLoading);
