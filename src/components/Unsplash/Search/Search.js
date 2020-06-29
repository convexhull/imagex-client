
import React , { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index';
import ScrollLazyLoader from '../../UI/ScrollLazyLoading/ScrollLazyLoading';




class Search extends Component {

    componentDidMount(){
        let search = new URLSearchParams(this.props.location.search);
        let keyword = search.get('keyword');
        this.props.onSearchByKeyword(keyword);
    }

    render(){
        return (
            <React.Fragment>
                <ScrollLazyLoader />
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        images: state.unsplash.images,
        loading: state.unsplash.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByKeyword : (keyword) => dispatch(actions.unsplashImageSearchByKeyword(keyword))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
