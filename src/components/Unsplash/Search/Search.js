import React , { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../../store/actions/index'
import ScrollLazyLoader from '../../UI/ScrollLazyLoading/ScrollLazyLoading';




class Search extends Component {

    componentDidMount(){
        this.props.onClearPreviousImages();
    }

    render(){
        let search = new URLSearchParams(this.props.location.search);
        let keyword = search.get('keyword');
        return (
            <React.Fragment>
                <ScrollLazyLoader keyword={keyword} />
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
        onClearPreviousImages: () => dispatch(actions.unsplashClearAllImages())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
