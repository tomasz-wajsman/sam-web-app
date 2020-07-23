import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Button, IconButton, Grid } from '@material-ui/core';

import { ArrowBack } from '@material-ui/icons';

import { withRouter, useParams } from 'react-router';
import util from '../util';

const ActivityDetails = ({ activities, history }) => {
  const getActivityIndexByID = activityID => activities.findIndex(activity => activity['_id'] === activityID);

  const details = activities[getActivityIndexByID(useParams().id)];
  if (details) {
    return (
      <Grid
        item
        xs={12}
        md={9}
        lg={6}
      >
        <Card title={details.name || 'Default title'}>
          <CardContent>
            <h1>{details.name}</h1>
            <p>{`Category: ${details.category || "uncategorized"}`}</p>
            <p>{`Start date: ${util.date.unixToDate(details.start_date)}`}</p>
            <p>{`End date: ${util.date.unixToDate(details.start_date)}`}</p>
            {details.distance
              ? <p>{`Distance: ${details.distance} meters`}</p>
              : <></>
            }
            <IconButton
              onClick={() => history.goBack()}
            >
              <ArrowBack />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  // 404 not found, return to previous page
  return (
    <p>Not found</p>
  );
};

const mapStateToProps = state => {
  return {
    activities: state.activities.items
  };
};

export default withRouter(connect(mapStateToProps)(ActivityDetails));