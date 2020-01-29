import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Route } from 'react-router-dom';
import {
  makeStyles,
  useTheme,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseLine';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { blue, pink, indigo } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolBarTitle: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const blueTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    type: 'light'
  }
});

const redTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
    type: 'light'
  }
});

function MainLayout(props) {
  const { component: Component, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const newIssues = useSelector(
    (state) => state.issues.items.filter((x) => x.isNew === true).length
  );
  const [open, setOpen] = React.useState(true);
  const [layoutTheme, setLayoutTheme] = React.useState(blueTheme);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const switchTheme = () => {
    setLayoutTheme(layoutTheme === blueTheme ? redTheme : blueTheme);
  };

  return (
    <ThemeProvider theme={layoutTheme}>
      <Route
        {...rest}
        render={(props) => (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  className={classes.toolBarTitle}
                  noWrap
                >
                  Leon&apos;s Admin Hub
                </Typography>
                <Badge badgeContent={newIssues} color="secondary">
                  <NewReleasesIcon />
                </Badge>
                <IconButton color="inherit" onClick={switchTheme}>
                  <InvertColorsIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  edge="end"
                  href="https://github.com/yunling2003/ledger-admin"
                >
                  <GitHubIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button component="a" href="/" key={'Dashboard'}>
                  <ListItemIcon>
                    <DashboardIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={'Dashboard'} />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/issues"
                  key={'Issue List'}
                >
                  <ListItemIcon>
                    <FormatListNumberedIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={'Issue List'} />
                </ListItem>
                <ListItem button key={'Resource List'}>
                  <ListItemIcon>
                    <ComputerIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={'Resource List'} />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button key={'Users'}>
                  <ListItemIcon>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={'Users'} />
                </ListItem>
              </List>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open
              })}
            >
              <div className={classes.drawerHeader} />
              <Component {...props} />
            </main>
          </div>
        )}
      />
    </ThemeProvider>
  );
}

export default MainLayout;
