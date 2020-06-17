import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Copyright from '../Copyright';
import MainMenu from './MainMenu';
import SecondaryMenu from './SecondaryMenu';
import { logout } from '../../actions/auth';
import { setTitle } from '../../actions/title';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  drawerHeader: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = ({ title, setTitle, logout, window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogoutDialogOpen = () => {
    setOpenLogoutDialog(true);
  };

  const handleLogoutDialogClose = () => {
    setOpenLogoutDialog(false);
  };

  const drawer = (
    <div>
      <Container className={classes.drawerHeader}>
        <img src="/logo64.png" alt="Minsitry of Health Logo" />
        <Typography variant="body1" color="inherit" noWrap>
          ጤና ሚኒስቴር - ኢትዮጲያ
        </Typography>
        <Typography variant="body1" color="inherit" noWrap>
          Ministry of Health - Ethiopia
        </Typography>
      </Container>
      <Divider />
      <MainMenu />
      <Divider />
      <SecondaryMenu handleLogoutDialogOpen={handleLogoutDialogOpen} />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" noWrap className={classes.title}>
              {title}
            </Typography>
            <IconButton color="inherit">
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <AccountCircleIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Route
              exact
              path="/"
              render={props => {
                setTitle('Dashboard');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/documents/office-memo"
              render={props => {
                setTitle('Office Memo');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/documents/out-minister"
              render={props => {
                setTitle('Out Minister');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/documents/in-minister"
              render={props => {
                setTitle('In Minister');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/documents/training"
              render={props => {
                setTitle('Training Documents');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/case-team/admin"
              render={props => {
                setTitle('Administration');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/case-team/hris"
              render={props => {
                setTitle('HRIS');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/case-team/crc"
              render={props => {
                setTitle('CRC');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/case-team/preservice"
              render={props => {
                setTitle('Preservice');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/case-team/medical-team"
              render={props => {
                setTitle('Medical Team');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/outside-job/supervision"
              render={props => {
                setTitle('Supervision');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/outside-job/training"
              render={props => {
                setTitle('Outside Job - Training');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/outside-job/meeting"
              render={props => {
                setTitle('Meeting');
                return <React.Fragment />;
              }}
            /> 
            <Route
              exact
              path="/outside-job/sick-leave"
              render={props => {
                setTitle('Sick Leave');
                return <React.Fragment />;
              }}
            />
            <Route
              exact
              path="/user/profile"
              render={props => {
                setTitle('User Profile');
                return <React.Fragment />;
              }}
            />
            <Container maxWidth="lg" className={classes.container}>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
        </main>
      </div>
      <Dialog
        open={openLogoutDialog}
        onClose={handleLogoutDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => logout()} color="secondary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Router>
  );
}

Dashboard.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  window: PropTypes.func,
};

const mapStateToProps = state => ({
  title: state.title,
});

export default connect(
  mapStateToProps,
  { setTitle, logout },
)(Dashboard);
