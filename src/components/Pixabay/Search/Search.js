
import React , { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index';
import ImageGrid from '../ImageGrid/ImageGrid';




class Search extends Component {

    componentDidMount(){
        let search = new URLSearchParams(this.props.location.search);
        let keyword = search.get('keyword');
        this.props.onSearchByKeyword(keyword);
    }

    render(){
        return (
            <React.Fragment>
                <ImageGrid images={this.props.images} />
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
        onSearchByKeyword : (keyword) => dispatch(actions.pixabayImageSearchByKeyword(keyword))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
