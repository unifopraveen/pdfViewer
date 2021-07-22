import React from 'react';
import PdfLogo from './icons/pdf.png';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const Header = () => {

    const classes = useStyles();

        return (
      <div className='header'>

      <div className='filename'>
        <img src={PdfLogo} alt='pdf' ></img>
        <h4>Invoice-7642.pdf</h4>
      </div>

      <div className='closeIcons'>
      <IconButton aria-label="delete" size='small'>
        <CloseIcon color="primary" />
      </IconButton>
      </div>
       
      </div>
    );
}

export default Header
