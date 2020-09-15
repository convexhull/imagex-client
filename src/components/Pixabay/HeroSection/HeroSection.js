import React , { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './HeroSection.module.css';
import Search from '../../UI/Search/Search';


class HeroSection extends Component {

    state = {
        form: {
            value: ''
        }
    }


    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/photos/pixabay',
            search: `?keyword=${this.state.form.value}`
        });
    }

    onInputChange = (event) => {
        this.setState({
            form: {
                value: event.target.value
            }
        })
    }

    searchClearHandler = () => {
        this.setState({
            form: {
                value: ''
            }
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className={classes["mainsection"]}>
                    <h1 className={classes["mainsection__title"]}>{this.props.title}</h1>
                    <p className={classes["mainsection__subtitle"]}>{this.props.subtitle1}</p>
                    <p className={classes["mainsection__subtitle"]}>{this.props.subtitle2}</p>
                    <form className={classes["mainsection__form"]} onSubmit={this.formSubmitHandler}>
                        <Search
                            value={this.state.form.value}
                            changed={this.onInputChange}
                            clearSearch={this.searchClearHandler} />
                    </form>
                    <p className={classes["mainsection__trending"]}>{this.props.subtitle3}</p>
                </div>
                <div className={classes["subsection"]}>
                </div>
            </React.Fragment>
        )
    }
}   


const mapStateToProps = (state) => {
    return {
        heroImageUrl: state.unsplash.heroImageUrl
    }
}


  
export default connect(mapStateToProps)(withRouter(HeroSection));