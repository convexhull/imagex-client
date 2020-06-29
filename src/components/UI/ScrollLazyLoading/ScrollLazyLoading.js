import React from 'react';
import { connect } from 'react-redux';



import classes from './ScrollLazyLoading.module.css';
import ImageGrid from '../../Unsplash/ImageGrid/ImageGrid';
import Spinner from '../Spinner/Spinner';
import * as actions from '../../../store/actions/index';


class ScrollLazyLoading extends React.Component {

    state = {
        y : 0
    }

    constructor(props){
        super(props);
        this.loaderRef = React.createRef();
    }

   
    componentDidMount(){
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        let pagecount = 0;
        let callback = (entries, observer) => {
            const y = entries[0].boundingClientRect.y;
            if(this.state.y < y){
                pagecount ++;
                alert('shit');
                this.props.onSearchByKeyword(this.props.keyword, pagecount);
                this.setState({y})
            }
            
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.loaderRef.current);
        
    }

    render(){
        return (
            <React.Fragment>
                <ImageGrid images={this.props.images} />
                {/* <div className={classes.Loader} ref={this.loaderRef}>
                    Loading...
                </div> */}
                <div ref={this.loaderRef}>
                    <Spinner  />
                </div>

            </React.Fragment>
        )
        
        
    }

}


const mapStateToProps = (state) => {
    return {
        images: state.unsplash.images
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByKeyword : (keyword, page) => dispatch(actions.unsplashImageSearchByKeyword(keyword, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollLazyLoading);