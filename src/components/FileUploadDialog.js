import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Dropzones from './FileUpload/Dropzone';


  // const baseStyle = {   
  //   flex: 1,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: '200px',
  //   margin: '10%',
  //   borderWidth: 2,
  //   borderRadius: 2,
  //   borderColor: '#1F4D90',
  //   borderStyle: 'dashed',
  //   backgroundColor: '#fafafa',
  //   color: '#1F4D90',
  //   outline: 'none',
  //   transition: 'border .24s ease-in-out'
  // };

  // const activeStyle = {
  //   borderColor: '#2196f3'
  // };

  // const acceptStyle = {
  //   borderColor: '#00e676'
  // };

  // const rejectStyle = {
  //   borderColor: '#ff1744'
  // };

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FileUploadDialog(props) {

  const classes = useStyles();
  const [setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => props.setFileUploadIsShown(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Afbleelding Uploaden
            </Typography>
            <Button autoFocus color="inherit" onClick={() => props.setFileUploadIsShown(false)}>
              Opslaan
            </Button>
          </Toolbar>
        </AppBar>
        <Dropzones />
      </Dialog>
    </div>
  );
}

FileUploadDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setFileUploadIsShown: PropTypes.func.isRequired,

}