import React, {Component} from 'react';


import classes from './Spinner.module.css';
class Spinner extends Component {

    render(){
        return (
            <div className={classes.Spinner}>
                <img src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif" alt="Spinner.gif" />
            </div>
        )
    }
}


export default Spinner;