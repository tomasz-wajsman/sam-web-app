import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Grid, IconButton, Card, CardContent } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { addActivity } from '../store/actions';
import util from '../util';

import clients from '../clients';

const ActivityAddForm = ({ history, addActivity }) => {
  const handleAdd = async activityDetails => {
    // add an activity
    const details = { ...activityDetails };
    try {
      // convert dates to Unix format
      details.start_date = util.date.dateToUnix(activityDetails.start_date);
      details.end_date = util.date.dateToUnix(activityDetails.end_date);
      // add the activity
      const res = await clients.sam.createActivity(details);
      if (res) {
        addActivity(res);
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
      lg={6}w
    >
      <Card>
        <CardContent>
          <h1>Add a new activity</h1>
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
  addActivity
};

export default withRouter(connect(null, mapDispatchToProps)(ActivityAddForm));
