import React , { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './HeroSection.module.css';
import * as actions from '../../../store/actions/index';
import HeroImage from '../../../assets/Pixabay/hero.jpg';


class HeroSection extends Component {

    state = {
        form: {
            value: ''
        }
    }


    onSearchByKeyword = (e) => {
        e.preventDefault();
        this.props.onClearAllImages();
        this.props.history.push({
            pathname: '/photos/pixabay',
            search: `?keyword=${this.state.form.value}`
        });
    }

    onInputChange = (e) => {
        this.setState({
            form: {
                value: e.target.value
            }
        })
    }

    render(){
        return (
            <div className={classes["hero-section"]}>
                <div className={classes["image-container"]}>
                    <img src={HeroImage} alt="random hero image" />
                </div>
                <div className={classes["hero-info"]}>
                    <h1>Pixabay</h1>
                    <form>
                        <input type="text" placeholder="Search free high resolution photos" value={this.state.form.value} onChange={this.onInputChange}/>
                        <button onClick={this.onSearchByKeyword}>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}   


const mapStateToProps = (state) => {
    return {
        heroImageUrl: state.unsplash.heroImageUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClearAllImages: () => dispatch(actions.pixabayClearAllImages())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroSection));