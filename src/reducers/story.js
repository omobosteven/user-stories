import { intersectionWith, differenceWith } from 'lodash';

import {
  STORY_CREATE_SUCCESS,
  STORIES_FETCH_SUCCESS,
  STORY_FETCH_SUCCESS,
  STORY_REVIEW_SUCCESS,
} from '../constant/actionTypes';

const initialState = {
  stories: [],
  story: null,
};

const applyFetchStories = (state, action) => {
  const fetchedStories = action.stories;
  const newStories = differenceWith(fetchedStories, state.stories,
    (fetchedStory, stateStory) => fetchedStory.id === stateStory.id);
  const stories = [...state.stories, ...newStories];
  const newStoryList = intersectionWith(stories, fetchedStories,
    (fetchedStory, story) => fetchedStory.id === story.id);
  return {
    ...state,
    stories: newStoryList
  };
};

const applyFetchStory = (state, action) => {
  const fetchedStoryId = action.story.id;
  const matchedStoryInState = state.stories.find((story) => fetchedStoryId === story.id);
  return {
    ...state,
    story: matchedStoryInState
  };
};

const applyReviewStory = (state, action) => {
  const storyInReview = state.stories.find((story) => story.id === action.review.storyId);
  const storiesInState = [...state.stories];
  // eslint-disable-next-line no-param-reassign
  delete action.review.storyId;
  const reviewedStory = { ...storyInReview, ...action.review };
  const storyList = storiesInState.filter((story) => story.id !== reviewedStory.id);
  const newStoryList = [...storyList, reviewedStory];
  return {
    ...state,
    stories: newStoryList
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORY_CREATE_SUCCESS:
    case STORIES_FETCH_SUCCESS:
      return applyFetchStories(state, action);
    case STORY_FETCH_SUCCESS:
      return applyFetchStory(state, action);
    case STORY_REVIEW_SUCCESS:
      return applyReviewStory(state, action);
    default: return state;
  }
};
