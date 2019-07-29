import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

// application header with title and icon
function HeaderAppBar(props) {
  const { title, icon } = props;
  const classes = useStyles();

  return (
    <div className="header-app-bar">
      <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              {title} 
            </Typography>
             <Avatar alt="drone" src={icon} className={'margin5'}/>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default HeaderAppBar
