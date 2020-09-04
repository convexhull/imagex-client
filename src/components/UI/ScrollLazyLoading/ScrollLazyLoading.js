import React from 'react';
import { connect } from 'react-redux';



import ImageGrid from '../../Unsplash/ImageGrid/ImageGrid';
import Spinner from '../Spinner/Spinner';
import * as actions from '../../../store/actions/index';

class ScrollLazyLoading extends React.Component {

    constructor(props){
        super(props);
        this.loaderRef = React.createRef();
    }
   
    // componentDidUpdate(){
    //     this.props.onClearPreviousImages();
    // }

    componentDidMount(){
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }
        let pagecount = 0;
        let callback = (entries, observer) => {
            if(entries[0].isIntersecting){
                pagecount++;
                this.props.onSearchByKeyword(this.props.keyword, pagecount);
            }
        }
        let observer = new IntersectionObserver(callback, options);
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