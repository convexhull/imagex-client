import React , {Component} from 'react';
import { connect } from 'react-redux';



import ImageGrid from '../ImageGrid/ImageGrid';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import classes from './ImageLazyLoader.module.css';
import image from '../../../assets/images/logo.png';


class ImageLazyLoader extends Component {

    constructor(props){
        super(props);
        this.loaderRef = React.createRef();
    }
   
    componentDidMount(){

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        let pagecount = 0;
        let callback = (entries, observer) => {
            console.log("xxxxxxx", entries[0]);
            // if(!entries[0].isIntersecting){
            //     return;
            // }
            pagecount++;
            this.props.onSearchByKeyword(this.props.keyword, pagecount);
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.loaderRef.current);
    }

    render(){
        let spinner = (this.props.endOfResults ? <p>That's it folks. You have reached the end of results.</p> : <Spinner />);
        let dummyimage = [<div className={classes.Dummydiv}>Dummy image div</div>,<div className={classes.Dummydiv}>Dummy image div</div>,<div className={classes.Dummydiv}>Dummy image div</div>,<div className={classes.Dummydiv}>Dummy image div</div>];
        return (
            <div className={classes.ImageLazyLoader}>
                {this.props.images.length ? <ImageGrid images={this.props.images} /> : dummyimage }
                {/* <ImageGrid images={this.props.images} /> */}
                <div ref={this.loaderRef} style={{backgroundColor: 'pink', width : '100%'}} >
                    <Spinner /> 
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        images: state.pixabay.images,
        endOfResults: state.pixabay.endOfResults
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByKeyword : (keyword, page) => dispatch(actions.pixabayImageSearchByKeyword(keyword, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageLazyLoader);