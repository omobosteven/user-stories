import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Spin, Button } from 'antd';
import PropTypes from 'prop-types';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { doFetchStory, doReviewStory } from '../actions/story';
import '../styles/story.css';

const StoryComponent = ({
  story, onFetchStory, onReviewStory, isAdmin
}) => {
  const history = useHistory();
  const { storyId } = useParams();

  useEffect(() => {
    onFetchStory(storyId);
  }, []);

  if (!isAdmin) {
    return <Redirect to="/stories" />;
  }

  const onHandleReview = (review) => {
    const data = {
      storyId: story.id,
      status: review
    };
    onReviewStory(data).then(() => history.push('/stories'));
  };

  if (!story) return <Spin size="large" />;

  const {
    summary, description, type, complexity, estimatedHrs, cost, status,
  } = story;

  return (
    <Card title="User Story" className="story-card">
      <p className="story">
        <span className="title">Summary:</span>
        <span className="data-detail">{summary}</span>
      </p>
      <p className="story">
        <span className="title">Description:</span>
        <span className="detail">{description}</span>
      </p>
      <p className="story">
        <span className="title">Type:</span>
        <span className="detail">{type}</span>
      </p>
      <p className="story">
        <span className="title">Complexity:</span>
        <span className="detail">{complexity}</span>
      </p>
      <p className="story">
        <span className="title">EstimatedHours:</span>
        <span className="detail">{estimatedHrs}</span>
      </p>
      <p className="story">
        <span className="title">Cost:</span>
        <span className="detail">{cost}</span>
      </p>
      <p className="story">
        <span className="title">Status:</span>
        <span className="detail status">{status}</span>
      </p>
      <div className="btn-group">
        <Button onClick={() => onHandleReview('accepted')} className="btn-accept">Accept</Button>
        <Button onClick={() => onHandleReview('rejected')} className="btn-reject">Reject</Button>
      </div>
    </Card>
  );
};

StoryComponent.propTypes = {
  // eslint-disable-next-line react/require-default-props
  story: PropTypes.objectOf(PropTypes.any),
  onFetchStory: PropTypes.func.isRequired,
  onReviewStory: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onFetchStory: (payload) => dispatch(doFetchStory(payload)),
  onReviewStory: (payload) => dispatch(doReviewStory(payload)),
});

const mapStateToProps = (state) => ({
  story: state.storyState.story,
  isAdmin: state.userState.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryComponent);
