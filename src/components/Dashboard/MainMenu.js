import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
}));

const MainMenu = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDocumentsMenuItem, setOpenDocumentsMenuItem] = useState(false);
  const [openCaseTeamMenuItem, setOpenCaseTeamMenuItem] = useState(false);
  const [openOutsideJobMenuItem, setOpenOutsideJobMenuItem] = useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDocumentsMenuItemClick = () => {
    setOpenDocumentsMenuItem(!openDocumentsMenuItem);
  };

  const handleCaseTeamMenuItemClick = () => {
    setOpenCaseTeamMenuItem(!openCaseTeamMenuItem)
  }

  const handleOutsideJobMenuItemClick = () => {
    setOpenOutsideJobMenuItem(!openOutsideJobMenuItem)
  }

  return (
    <List className={classes.root}>
      <Link to="/" className={classes.link}>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <ListItem button onClick={handleDocumentsMenuItemClick}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Documents" />
        {openDocumentsMenuItem ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openDocumentsMenuItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/documents/office-memo" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 1}
              onClick={event => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Office Memo" />
            </ListItem>
          </Link>
          <Link to="/documents/out-minister" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 2}
              onClick={event => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Out Minister" />
            </ListItem>
          </Link>
          <Link to="/documents/in-minister" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 3}
              onClick={event => handleListItemClick(event, 3)}
            >
              <ListItemText primary="In Minister" />
            </ListItem>
          </Link>
          <Link to="/documents/training" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 4}
              onClick={event => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Training" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button onClick={handleCaseTeamMenuItemClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Case Team" />
        {openCaseTeamMenuItem ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCaseTeamMenuItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/case-team/admin" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 5}
              onClick={event => handleListItemClick(event, 5)}
            >
              <ListItemText primary="Administration" />
            </ListItem>
          </Link>
          <Link to="/case-team/hris" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 6}
              onClick={event => handleListItemClick(event, 6)}
            >
              <ListItemText primary="HRIS" />
            </ListItem>
          </Link>
          <Link to="/case-team/crc" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 7}
              onClick={event => handleListItemClick(event, 7)}
            >
              <ListItemText primary="CRC" />
            </ListItem>
          </Link>
          <Link to="/case-team/preservice" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 8}
              onClick={event => handleListItemClick(event, 8)}
            >
              <ListItemText primary="Preservice" />
            </ListItem>
          </Link>
          <Link to="/case-team/medical-team" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 9}
              onClick={event => handleListItemClick(event, 9)}
            >
              <ListItemText primary="Medical Team" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button onClick={handleOutsideJobMenuItemClick}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Outside Job" />
        {openOutsideJobMenuItem ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openOutsideJobMenuItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/outside-job/supervision" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 10}
              onClick={event => handleListItemClick(event, 10)}
            >
              <ListItemText primary="Supervision" />
            </ListItem>
          </Link>
          <Link to="/outside-job/training" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 11}
              onClick={event => handleListItemClick(event, 11)}
            >
              <ListItemText primary="Training" />
            </ListItem>
          </Link>
          <Link to="/outside-job/meeting" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 12}
              onClick={event => handleListItemClick(event, 12)}
            >
              <ListItemText primary="Meeting" />
            </ListItem>
          </Link>
          <Link to="/outside-job/sick-leave" className={classes.link}>
            <ListItem
              className={classes.nested}
              button
              selected={selectedIndex === 13}
              onClick={event => handleListItemClick(event, 13)}
            >
              <ListItemText primary="Sick Leave" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}

export default MainMenu;
