import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
}));

const SecondaryMenu = ({ handleLogoutDialogOpen }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Link to="/user/profile" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
      </Link>
      <ListItem button onClick={() => handleLogoutDialogOpen()}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
}

SecondaryMenu.propTypes = {
  setOpenLogoutDialog: PropTypes.func.isRequired,
};

export default SecondaryMenu;
