
import React , { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index';
import ImageLazyLoader from '../ImageLazyLoader/ImageLazyLoader';



class Search extends Component {


    componentDidMount() {
        this.props.onClearPreviousImages();
    }

    render(){
        let search = new URLSearchParams(this.props.location.search);
        let keyword = search.get('keyword');
        return (
            <React.Fragment>
                <ImageLazyLoader keyword={keyword} />
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        images: state.pixabay.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByKeyword : (keyword) => dispatch(actions.pixabayImageSearchByKeyword(keyword)),
        onClearPreviousImages: () => dispatch(actions.pixabayClearAllImages())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
