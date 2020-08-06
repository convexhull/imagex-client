import React, { Component } from 'react';

import classes from './ComputerVision.module.css';

class CV extends Component {

    render() {
        return (
            <div  className={classes["CV"]}>
                <div className={classes["container"]}>
                    <form>
                        <div>

                        </div>
                        <p>Drag and drop an image to find similar</p>
                        <button type="button"><input type="file" className={classes["container__file"]} style={{display: 'none'}}/></button>
                        
                    </form>
                </div>
            </div>
        )
    }
}


export default CV;