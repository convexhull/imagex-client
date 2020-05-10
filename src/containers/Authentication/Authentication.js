import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class Authentication extends Component {

    render(){
        return(
            <button onClick={this.props.onLogin}>Log In</button>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch(actions.asyncAuthStart())
    }
}


export default connect(null, mapDispatchToProps)(Authentication);