import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '40vw',
    height: '100vh',
    zIndex:'100',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

export default function CircularIndeterminate(props) {
  const classes = useStyles();

  if(!props.isLoading) return null

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
