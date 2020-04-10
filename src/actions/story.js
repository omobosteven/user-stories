import { apiBaseurl } from '../utils/main';

import {
  STORY_CREATE_SUCCESS,
  STORIES_FETCH_SUCCESS,
  STORY_FETCH_SUCCESS,
  STORY_REVIEW_SUCCESS
} from '../constant/actionTypes';

export const createStory = (story) => ({
  type: STORY_CREATE_SUCCESS,
  story,
});

export const fetchStories = (stories) => ({
  type: STORIES_FETCH_SUCCESS,
  stories,
});

export const fetchStory = (story) => ({
  type: STORY_FETCH_SUCCESS,
  story,
});

export const reviewStory = (review) => ({
  type: STORY_REVIEW_SUCCESS,
  review
});

const doCreateStory = (payload) => async (dispatch) => {
  const { data } = await apiBaseurl.post('/stories', payload);
  dispatch(createStory(data));
};

const doFetchStories = () => async (dispatch) => {
  const { data } = await apiBaseurl.get('/stories');
  dispatch(fetchStories(data));
};

const doFetchStory = (payload) => async (dispatch) => {
  const { data } = await apiBaseurl.get(`/stories/${payload}`);
  dispatch(fetchStory(data));
};

const doReviewStory = (payload) => async (dispatch) => {
  dispatch(reviewStory(payload));
};

export {
  doCreateStory,
  doFetchStories,
  doFetchStory,
  doReviewStory
};
