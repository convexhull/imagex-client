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
   
    componentDidMount(){
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }       
        let pagecount = 0;
        let callback = (entries) => {
            if(entries[0].isIntersecting){
                pagecount++;
                this.props.onSimilarImageSearch({uploadedImageId: this.props.uploadedImageId, page: pagecount});
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
        );
    }

}


const mapStateToProps = (state) => {
    return {
        uploadedImageId: state.cv.uploadedImageId
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSimilarImageSearch: (data) => dispatch(actions.asyncSimilarImagesSearchStart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollLazyLoading);
