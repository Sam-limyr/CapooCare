import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { sqlToJsDate } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 400
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function BidList(props) {
    const { subheader, bids, onClick, ...other } = props;
    const classes = useStyles();


    return (
    <List className={classes.root} subheader={<li />}>
        {subheader.map((sectionId, sectionIndex) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
            <ListSubheader>{`${sectionId}`}</ListSubheader>
            {bids
              .filter((bid) => sqlToJsDate(bid.s_time).getMonth() == sectionIndex || sqlToJsDate(bid.e_time).getMonth() == sectionIndex)
              .filter((bid) => sqlToJsDate(bid.e_time).getFullYear() == new Date().getFullYear())
              .map((bid) => (
                <ListItem 
                  button
                  key={`item-${sectionId}-${bid.pouname}-${bid.petName}-${bid.petType}-${bid.ctuname}-${bid.s_time}-${bid.e_time}`}
                  onClick={() => onClick(
                    {
                      pouname: bid.pouname,
                      petname: bid.petname,
                      pettype: bid.pettype,
                      ctuname: bid.ctuname,
                      s_time: bid.s_time,
                      e_time: bid.e_time
                    }
                  )}
                >
                  <ListItemText primary={`${bid.petname} (${bid.pettype})`} />
                </ListItem>
            ))}
            </ul>
        </li>
        ))}
    </List>
  );
}