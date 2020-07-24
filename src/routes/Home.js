import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import Paragraph from '../components/labels/Paragraph';

const Home = ({ location, history }) => {
  return (
    <div>
      <Paragraph variant='h4'>Welcome to SAM, the Sports Activity Manager</Paragraph>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button color="primary" variant="contained" onClick={() => history.push('/activities')}>
            View activities
          </Button>
        </Grid>
      </Grid>

    </div >
  );
};
export default withRouter(Home);
