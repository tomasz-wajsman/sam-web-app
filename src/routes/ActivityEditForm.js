import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Grid, IconButton, Card, CardContent } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { modifyActivity } from '../store/actions';
import util from '../util';

import clients from '../clients';
import ActivityEditorForm from '../components/input/ActivityEditorForm';

const ActivityEditForm = ({ history, activities, modifyActivity }) => {
  const getActivityIndexByID = activityID => activities.findIndex(activity => activity['_id'] === activityID);
  const handleEdit = async (activityID, activityDetails) => {
    // add an activity
    const details = { ...activityDetails };
    try {
      // convert dates to Unix format
      details.start_date = util.date.dateToUnix(activityDetails.start_date);
      details.end_date = util.date.dateToUnix(activityDetails.end_date);
      details['_id'] = activityID;
      // add the activity
      console.error(activityID, details)
      const res = await clients.sam.modifyActivity(activityID, details);
      if (res) {
        console.log(getActivityIndexByID(activityID),'index');
        modifyActivity(getActivityIndexByID(activityID), details);
      }
    } catch (e) {

    }
  };
  return (
    <Grid
      item
      xs={12}
      md={9}
      lg={6}
    >
      <Card>
        <CardContent>
          <h1>Edit an activity</h1>
          <ActivityEditorForm
            editing={true}
            onSubmit={handleEdit}
          />
          <IconButton
            onClick={() => history.goBack()}
          >
            <ArrowBack />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { activities: state.activities.items };
};
const mapDispatchToProps = {
  modifyActivity
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityEditForm));
