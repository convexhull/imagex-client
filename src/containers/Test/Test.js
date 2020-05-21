import React, { Component } from 'react';
import axios from '../../axios/axios';
import classes from './Unsplash.module.css';


import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}


// class Test extends Component {



//     render() {
//         return (
//             <div className={classes.Unsplash}>
//                 <h1>Unsplash</h1>
//                 <img src={this.state && this.state.urls.raw} alt="alter" />
//             </div>
//         )
//     }
// }



export default Test;