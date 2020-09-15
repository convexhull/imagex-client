import React, { Component, Fragment } from 'react';

import ImageLazyLoader from '../ImageLazyLoader/ImageLazyLoader';
import classes from './Search.module.css';


class Search extends Component {

    render() {
        return (
            <Fragment>
                <h1 className={classes["search-message"]}>Similar images for your search &nbsp;<i class="fab fa-searchengin"></i></h1>
                <ImageLazyLoader />
            </Fragment>
        );
    }
}




export default Search;