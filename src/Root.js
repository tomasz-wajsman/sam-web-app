import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setActivities } from './store/actions';

import AppRouter from './routes';

import clients from './clients';
import Paragraph from './components/labels/Paragraph';
import { Button } from '@material-ui/core';

const Root = ({ setActivities }) => {
  // loading
  const [loading, setLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [loadingErrorText, setLoadingErrorText] = useState('');

  const loadActivities = () => {
    let activities;
    setLoading(true);
    clients.sam.getActivities()
      .then(res => {
        activities = res;
        setLoadingFailed(false);
      })
      .catch(err => {
        activities = [];
        setLoadingFailed(true);
        setLoadingErrorText(err);
      })
      .finally(() => {
        setLoading(false);
        setActivities(activities);
      });
  };

  useEffect(() => {
    loadActivities();
  }, []);

  if (loading) {
    return (
      <div>
        <Paragraph>Please wait when the application is being loaded...</Paragraph>
      </div>
    );
  } else if (loadingFailed) {
    return (
      <div>
        <Paragraph>Loading failed. Please check your connection and retry.</Paragraph>
        <Button
          color="primary"
          variant="contained"
          onClick={() => loadActivities()}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <>
      <AppRouter />
    </>
  );
};

const mapDispatchToProps = {
  setActivities
};

export default connect(null, mapDispatchToProps)(Root);
