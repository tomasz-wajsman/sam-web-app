import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import store from './store';
import { setActivities } from './store/actions';

import SamClient from './clients/sam';
import config from './config/config.json';
import AppRouter from './routes';

const client = new SamClient(config.api_url);

const Root = ({ setActivities }) => {
  // loading
  const [loading, setLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [loadingErrorText, setLoadingErrorText] = useState('');

  const loadActivities = () => {
    let activities;
    setLoading(true);
    client.getActivities()
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
        <p>Loading...</p>
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
