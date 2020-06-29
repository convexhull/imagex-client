import React from 'react';
import { connect } from 'react-redux';



import classes from './ScrollLazyLoading.module.css';
import ImageGrid from '../../Unsplash/ImageGrid/ImageGrid';
import Spinner from '../Spinner/Spinner';


class ScrollLazyLoading extends React.Component {

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
        let callback = () => {
            alert('shit');
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

export default connect(mapStateToProps)(ScrollLazyLoading);