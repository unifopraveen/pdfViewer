import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import './Controls.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: 'black'
      },
    },
    input: {
        background:'#d7d9d7',
    },
  }));


const Controls = (props) => {

    const classes = useStyles();
    
    const {zoom, setZoom} = props

    const zoomIn = () => {
        setZoom(zoom + 0.2)
    }
    const zoomOut = () => {
        setZoom(zoom - 0.2)
    }

    return (
        <div className='control-panel'>
            <IconButton variant="contained" size='small'className={classes.input} onClick={zoomIn}>
                <AddIcon color="primary" />
            </IconButton>
            <IconButton variant="outlined" size='small' className={classes.input} onClick={zoomOut}>
                <RemoveIcon color="primary" />
            </IconButton>
        </div>
    )
}

export default Controls
