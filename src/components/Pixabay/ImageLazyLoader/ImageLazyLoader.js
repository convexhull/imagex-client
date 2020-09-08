import React from 'react';
import { connect } from 'react-redux';



import ImageGrid from '../ImageGrid/ImageGrid';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';


class ScrollLazyLoading extends React.Component {

    constructor(props){
        super(props);
        this.loaderRef = React.createRef();
    }

    state = {
        pageCount: 1
    }

    intersectionObserverCallback = (entries) => {
        if(entries[0].isIntersecting){
            this.props.onSearchByKeyword(this.props.keyword, this.cnt++);
        }
    }


    componentDidUpdate(){
        console.log("Pixabay image lazy loader updated!");
        this.props.onClearPreviousImages();
        this.cnt = 1;
    }

    componentDidMount(){
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }
        let observer = new IntersectionObserver(this.intersectionObserverCallback, options);
        observer.observe(this.loaderRef.current);
    }

    render(){
        return (
            <React.Fragment>
                <ImageGrid images={this.props.images} />
                <div ref={this.loaderRef}>
                    <Spinner  />
                </div>
            </React.Fragment>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByKeyword : (keyword, page) => dispatch(actions.pixabayImageSearchByKeyword(keyword, page)),
        onClearPreviousImages: () => dispatch(actions.pixabayClearAllImages())
    }
}

export default connect(null, mapDispatchToProps)(ScrollLazyLoading);
