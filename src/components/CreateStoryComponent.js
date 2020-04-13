import React from 'react';
import { connect } from 'react-redux';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import {
  Input, Select, Card, InputNumber, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { doCreateStory } from '../actions/story';
import '../styles/createStory.css';

const CreateStoryComponent = ({ onCreateStory }) => {
  const {
    handleSubmit, control, errors
  } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    onCreateStory(data)
      .then(() => history.push('/stories'))
      .catch((error) => {
        toast.error(error.message, {
          toastId: 'create-stories',
          position: toast.POSITION.TOP_CENTER
        });
      });
  };

  return (
    <Card
      title="Create User Story"
      style={{ width: 350 }}
      bordered={false}
      className="story-form-card"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <Controller
            as={<Input placeholder="Summary" />}
            name="summary"
            control={control}
            rules={{ required: 'summary missing' }}
          />
          <span className="form-error">
            <ErrorMessage errors={errors} name="summary" className="form-error" />
          </span>
        </div>

        <div className="form-input">
          <Controller
            as={<Input.TextArea row={4} placeholder="Description" autoSize={false} />}
            name="description"
            control={control}
            rules={{ required: 'description missing' }}
          />
          <span className="form-error">
            <ErrorMessage errors={errors} name="description" className="form-error" />
          </span>
        </div>

        <div className="form-dropdowns">
          <div className="form-input">
            <Controller
              as={
                <Select
                  style={{ width: 120 }}
                  placeholder="Type"
                >
                  <Select.Option value="enhancement">Enhancement</Select.Option>
                  <Select.Option value="bugfix">BugFix</Select.Option>
                  <Select.Option value="development">Development</Select.Option>
                  <Select.Option value="qa">Quality Assurance</Select.Option>
                </Select>
              }
              name="type"
              control={control}
              rules={{
                required: 'type missing',
                validate: (value) => (['enhancement', 'bugfix', 'development', 'qa'].includes(value)
                  || 'Invalid type given')
              }}
            />
            <span className="form-error">
              <ErrorMessage errors={errors} name="type" className="form-error" />
            </span>
          </div>

          <div className="form-input">
            <Controller
              as={
                <Select
                  style={{ width: 120 }}
                  placeholder="Complexity"
                >
                  <Select.Option value="low">Low</Select.Option>
                  <Select.Option value="mid">Mid</Select.Option>
                  <Select.Option value="high">High</Select.Option>
                </Select>
              }
              name="complexity"
              control={control}
              rules={{
                required: 'Story complexity missing',
                validate: (value) => (['low', 'mid', 'high'].includes(value)
                  || 'invalid complexity')
              }}
            />
            <span className="form-error">
              <ErrorMessage errors={errors} name="type" className="form-error" />
            </span>
          </div>
        </div>

        <div className="form-input">
          <Controller
            as={<Input placeholder="Estimated Hour" />}
            name="estimatedHrs"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  return parseInt(value, 10) > 0 || 'invalid estimated hour';
                }
                return null;
              }
            }}
          />
          <span className="form-error">
            <ErrorMessage errors={errors} name="estimatedHrs" className="form-error" />
          </span>
        </div>

        <div className="form-input">
          <Controller
            as={
              <InputNumber
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              />
            }
            name="cost"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  return parseInt(value, 10) > 0 || 'invalid cost';
                }
                return null;
              }
            }}
          />
          <span className="form-error">
            <ErrorMessage errors={errors} name="cost" className="form-error" />
          </span>
        </div>
        <Button htmlType="submit">Create Story</Button>
      </form>
    </Card>
  );
};

CreateStoryComponent.propTypes = {
  onCreateStory: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCreateStory: (payload) => dispatch(doCreateStory(payload)),
});

export default connect(null, mapDispatchToProps)(CreateStoryComponent);
