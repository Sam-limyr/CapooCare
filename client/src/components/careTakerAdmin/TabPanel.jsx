import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CalendarView from "./CalendarView"
import BidPanel from "./BidPanel"
import PetCareList from "./PetCareList"
import CaretakerAvailability from './CaretakerAvailability';
import Salary from './Salary';
import Summary from './Summary';

function TabPanel(props) {
  const { children, value, index, username, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function FullWidthTabs(props) {
  const {username} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Bids" {...a11yProps(0)} />
          <Tab label="Availability/Salary" {...a11yProps(1)} />
          <Tab label="Pet Price" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <CalendarView/> */}
          <BidPanel username={props.username}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CaretakerAvailability username={props.username} isFT={props.isFT}/>
          <Summary username={props.username}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PetCareList userType="ct" username={props.username}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
