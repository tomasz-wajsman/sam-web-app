import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Grid, IconButton, Card, CardContent } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { modifyActivity } from '../store/actions';
import util from '../util';

import clients from '../clients';
import ActivityEditorForm from '../components/input/ActivityEditorForm';

const ActivityEditForm = ({ history, modifyActivity }) => {
  const handleAdd = async activityDetails => {
    // add an activity
    const details = { ...activityDetails };
    try {
      // convert dates to Unix format
      details.start_date = util.date.dateToUnix(activityDetails.start_date);
      details.end_date = util.date.dateToUnix(activityDetails.end_date);
      // add the activity
      const res = await clients.sam.modifyActivity(details['_id'], details);
      if (res) {
        modifyActivity(res);
      }
    } catch (e) {

    } finally {

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

const mapDispatchToProps = {
  modifyActivity
};

export default withRouter(connect(null, mapDispatchToProps)(ActivityEditForm));
