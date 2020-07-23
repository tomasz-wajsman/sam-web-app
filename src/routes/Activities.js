import React from 'react';
import { connect } from 'react-redux';

import { Button, Card, CardContent, IconButton, Grid } from '@material-ui/core';

import { setActivities, setActivityIndex, addActivity, modifyActivity, deleteActivity } from '../store/actions';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import { Subject, Edit, Delete } from '@material-ui/icons/';

import clients from '../clients';

const Activities = ({ activities, modifyActivity, deleteActivity, history }) => {
  const addActivityPress = () => {

  };
  const modifyActivityPress = activityID => {

  };
  const deleteActivityPress = activityID => {
    clients.sam.deleteActivity(activityID)
      .then(res => {
        if (res) {
          deleteActivity(activityID);
          console.log('deleted')
        }
      })
      .catch(e => console.error(e)); 
  };

  if (activities.length === 0) {
    // show no activities message
    return (
      <>
        <p>No activities added.</p>
        <Button
          variant="contained"
          onClick={() => addActivityPress()}
        >
          Add a new entry
        </Button>
      </>
    );
  }
  return (
    <Grid
      item
      xs={12}
      md={9}
      lg={6}
    >
      {
        activities.map((activity, index) =>
          <Card key={index} title={activity.name}>
            <CardContent>
              <h1>{activity.name}</h1>
              <IconButton
                onClick={() => history.push(`/activities/details/${activity['_id']}`)}
              >
                <Subject />
              </IconButton>
              <IconButton
                onClick={() => history.push(`/activities/modify/${activity['_id']}`)}
              >
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => deleteActivityPress(activity['_id'])}
              >
                <Delete />
              </IconButton>
            </CardContent>
          </Card>
        )
      }
      <Button
        variant="contained"
        onClick={() => history.push('/activities/add')}
      >
        Add a new entry
        </Button>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { activities: state.activities.items }
};
const mapDispatchToProps = {
  modifyActivity,
  deleteActivity
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Activities));
