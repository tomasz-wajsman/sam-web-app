import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Card, CardContent, IconButton, Grid } from '@material-ui/core';

import { setActivities, setActivityIndex, addActivity, modifyActivity, deleteActivity } from '../store/actions';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import { Subject, Edit, Delete } from '@material-ui/icons/';

import clients from '../clients';
import Snackbar from '../components/Snackbar';

const Activities = ({ activities, modifyActivity, deleteActivity, history }) => {
  // snackbar
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarStyle, setSnackbarStyle] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('Message');

  // add, modify and delete handlers
  const getActivityIndexByID = activityID => activities.findIndex(activity => activity['_id'] === activityID);
  const addActivityPress = () => {
    setActivityIndex(-1);
    history.push('/activities/add');
  };
  const modifyActivityPress = activityID => {
    setActivityIndex(activityID);
    history.push(`/activities/modify/${activityID}`);
  };
  const deleteActivityPress = activityID => {
    clients.sam.deleteActivity(activityID)
      .then(res => {
        if (res) {
          deleteActivity(getActivityIndexByID(activityID));
          setSnackbarStyle('success');
          setSnackbarMessage('The activity was deleted');
        }
      })
      .catch(() => {
        setSnackbarStyle('error');
        setSnackbarMessage('The activity was not deleted');
      })
      .finally(() => {
        setSnackbarVisible(true)
      });
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
    <>
      <Grid
        item
        xs={12}
        md={9}
        lg={6}
      >
        <h1>Activities</h1>
        {
          activities.map((activity, index) =>
            <Card key={index} title={activity.name}>
              <CardContent>
                <h3>{activity.name}</h3>
                <IconButton
                  onClick={() => history.push(`/activities/details/${activity['_id']}`)}
                >
                  <Subject />
                </IconButton>
                <IconButton
                  onClick={() => modifyActivityPress(activity['_id'])}
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
      <Snackbar
        visible={snackbarVisible}
        style={snackbarStyle}
        message={snackbarMessage}
        onHide={() => setSnackbarVisible(false)}
      />
    </>
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
