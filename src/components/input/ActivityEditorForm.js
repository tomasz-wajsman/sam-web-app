import React, { useState, useEffect } from 'react';

import FormTextInput from './FormTextInput';
import DateTextInput from './DateTextInput';

import PropTypes from 'prop-types';
import util from '../../util';

import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';
import SamClient from '../../clients/sam';

const ActivityEditorForm = ({ onSubmit, editing, activities, selectedActivityIndex }) => {
  const getActivityIndexByID = activityID => activities.findIndex(activity => activity['_id'] === activityID);
  const id = useParams().id;

  useEffect(() => {
    if (id) {
      const activity = activities[getActivityIndexByID(id)];
      setInput({
        name: String(activity.name),
        category: String(activity.category),
        start_date: String(util.date.unixToDate(activity.start_date)),
        end_date: String(util.date.unixToDate(activity.end_date)),
        distance: String(activity.distance || '')
      });
    } else {
      setInput(defaults.input);
    }
  }, [id]);

  const defaults = {
    input: {
      name: '',
      category: '',
      start_date: util.date.unixToDate(Date.now()),
      end_date: util.date.unixToDate(Date.now()),
      distance: ''
    }, messages: {
      name: '',
      category: '',
      start_date: '',
      end_date: '',
      distance: ''
    }
  };

  const [input, setInput] = useState(defaults.input);
  const [messages, setMessages] = useState(defaults.messages);

  const validateInput = (field, value) => {
    const dtRegex = new RegExp(/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0[0-92|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/);
    const msg = { ...messages };
    switch (field) {
      default: break;
      case 'name':
        if (value === '') {
          msg.name = 'Empty name';
        } else {
          msg.name = '';
        }
        // name
        break;
      case 'category':
        // category
        if (value === '') {
          msg.category = 'Empty category';
        } else {
          msg.category = '';
        }
        break;
      case 'start_date':
        // start date
        if (value === '') {
          msg.start_date = 'Start date is empty';
        } else if (!dtRegex.test(value)) {
          msg.start_date = 'Start date is incorrect';
        } else {
          msg.start_date = '';
        }
        break;
      case 'end_date':
        // category
        if (value === '') {
          msg.end_date = 'End date is empty';
        } else if (!dtRegex.test(value)) {
          msg.end_date = 'End date is incorrect';
        } else {
          msg.end_date = '';
        }
        break;
      case 'distance':
        // distance
        if (value !== '') {
          const distanceNum = Number.parseInt(value);
          if (Number.isNaN(distanceNum)) {
            msg.distance = 'Incorrect distance format';
          } else if (distanceNum <= 0) {
            msg.distance = 'Negative or zeroth distance';
          } else {
            msg.distance = '';
          }
        }
        break;
    }
    setMessages(msg);
  };

  const handleInput = (field, value) => {
    const temp = { ...input };
    if (temp.hasOwnProperty(field)) {
      temp[field] = value;
      // validate the value
      validateInput(field, value);
      setInput(temp);
    }
  };

  const submit = () => {
    if (!SamClient.checkActivityDetails(input)) {
      // show error message
      alert('Data validation error. One or more of the mandatory details is missing or incorrect. Please check them.');
    } else if (editing) {
      // edit an existing activity
      onSubmit(id, input);
    } else {
      // add a new activity
      onSubmit(input);
    }
  };

  return (
    <div>
      <FormTextInput
        value={input.name}
        defaultValue={input.name}
        placeholder="Activity name"
        onChangeText={text => handleInput('name', text)}
        helperVisible={messages.name !== ''}
        helperType={'error'}
        helperText={messages.name}
      />
      <br /><br /><br />
      <FormTextInput
        value={input.category}
        defaultValue={input.category}
        placeholder="Category name"
        onChangeText={text => handleInput('category', text)}
        helperVisible={messages.category !== ''}
        helperType={'error'}
        helperText={messages.category}
      />
      <br /><br /><br />
      <DateTextInput
        value={input.start_date}
        defaultValue={util.date.unixToDate(input.start_date)}
        placeholder="Start date"
        onChangeText={text => handleInput('start_date', text)}
        helperVisible={messages.start_date !== ''}
        helperType={'error'}
        helperText={messages.start_date}
      />
      <br /><br /><br />
      <DateTextInput
        value={input.end_date}
        defaultValue={util.date.unixToDate(input.end_date)}
        placeholder="End date"
        onChangeText={text => handleInput('end_date', text)}
        helperVisible={messages.end_date !== ''}
        helperType={'error'}
        helperText={messages.end_date}
      />
      <br /><br /><br />
      <FormTextInput
        value={input.distance}
        defaultValue={input.distance}
        placeholder="Distance"
        additionalHelperText="(optional)"
        onChangeText={text => handleInput('distance', text)}
        helperVisible={messages.distance !== ''}
        helperType={'error'}
        helperText={messages.distance}
      />
      <br /><br /><br />
      <Button
        color="primary"
        variant="contained"
        onClick={submit}
      >
        {editing ? 'SAVE' : 'ADD'}
      </Button>
    </div>
  );
};

ActivityEditorForm.propTypes = {
  activities: PropTypes.array
};
ActivityEditorForm.defaultProps = {
  activities: []
};

const mapStateToProps = state => {
  return {
    selectedActivityIndex: state.activities.selectedActivityIndex,
    activities: state.activities.items
  }
};

export default connect(mapStateToProps)(ActivityEditorForm);
