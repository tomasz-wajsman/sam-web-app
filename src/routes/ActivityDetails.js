import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, IconButton, Grid } from '@material-ui/core';

import { ArrowBack } from '@material-ui/icons';

import { withRouter, useParams } from 'react-router';
import util from '../util';
import Paragraph from '../components/labels/Paragraph';

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
            <Paragraph variant='h4'>{details.name}</Paragraph>
            <Paragraph>{`Category: ${details.category || "uncategorized"}`}</Paragraph>
            <Paragraph>{`Start date: ${util.date.unixToDate(details.start_date)}`}</Paragraph>
            <Paragraph>{`End date: ${util.date.unixToDate(details.end_date)}`}</Paragraph>
            {details.distance
              ? <Paragraph>{`Distance: ${details.distance} meters`}</Paragraph>
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
    <Grid
      item
      xs={12}
      md={9}
      lg={6}
    >
      <Card title='Activity not found'>
        <CardContent>
          <h1>Activity not found</h1>
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
  return {
    activities: state.activities.items
  };
};

export default withRouter(connect(mapStateToProps)(ActivityDetails));