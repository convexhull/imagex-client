import React from 'react';
import { connect } from 'react-redux';



import ImageGrid from '../../Unsplash/ImageGrid/ImageGrid';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

class ScrollLazyLoading extends React.Component {

    constructor(props){
        super(props);
        this.loaderRef = React.createRef();
        this.cnt = 1;
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
        console.log("Unsplash image lazy loader updated!");
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
                <ImageGrid />
                <div ref={this.loaderRef}>
                    <Spinner  />
                </div>
            </React.Fragment>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByKeyword : (keyword, page) => dispatch(actions.unsplashImageSearchByKeyword(keyword, page)),
        onClearPreviousImages: () => dispatch(actions.unsplashClearAllImages())
    }
}

export default connect(null, mapDispatchToProps)(ScrollLazyLoading);