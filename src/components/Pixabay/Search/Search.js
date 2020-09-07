import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import ImageLazyLoader from "../ImageLazyLoader/ImageLazyLoader";
import CategoryNavigation from "../../Header/CategoryNavigation/CategoryNavigation";

class Search extends Component {
  state = {
    keyword: "",
  };

  componentDidMount() {
    this.props.onClearPreviousImages();
    let search = new URLSearchParams(this.props.location.search);
    let keyword = search.get("keyword");
    this.setState({
      keyword
    });
  }

  inputHandler = (newKeyword) => {
    this.setState({
      keyword: newKeyword
    });
  };

  render() {
    return (
      <React.Fragment>
        <CategoryNavigation platform="pixabay" clicked={this.inputHandler} />
        <ImageLazyLoader keyword={this.state.keyword} />
      </React.Fragment>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onSearchByKeyword: (keyword) => dispatch(actions.pixabayImageSearchByKeyword(keyword)),
    onClearPreviousImages: () => dispatch(actions.pixabayClearAllImages()),
  };
};

export default connect(null, mapDispatchToProps)(Search);
