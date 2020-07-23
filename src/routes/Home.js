import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { withRouter } from 'react-router';

const Home = ({ location, history }) => {
  return (
    <div>
      <h1>Welcome to SAM, the Sports Activity Manager</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button variant="outlined" onClick={() => history.push('/activities')}>
            View activities
          </Button>
        </Grid>
      </Grid>

    </div >
  );
};
export default withRouter(Home);
