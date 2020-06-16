import React , { Component } from 'react';
import ImageGrid from '../../../components/UI/ImageGrid/ImageGrid';
const qs = require('qs');


class Search extends Component {

    componentDidMount(){
        console.log(this.props);
        let search = new URLSearchParams(this.props.location.search);
        console.log(search.get('keyword'));
    }

    render(){
        return <h1>Search Results....</h1>
    }
}



export default Search;
