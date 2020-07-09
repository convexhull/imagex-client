
import React , { Component } from 'react';
import { connect } from 'react-redux';


import ScrollLazyLoader from '../../UI/ScrollLazyLoading/ScrollLazyLoading';




class Search extends Component {

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




export default connect(mapStateToProps)(Search);
