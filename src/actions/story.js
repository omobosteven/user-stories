import { toast } from 'react-toastify';
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
  try {
    const { data } = await apiBaseurl.post('/stories', payload);
    dispatch(createStory(data));
  } catch (error) {
    const errorData = {
      message: error.response ? error.response.data.error : error.message
    };
    throw new Error(errorData.message);
  }
};

const doFetchStories = () => async (dispatch) => {
  try {
    const { data } = await apiBaseurl.get('/stories');
    dispatch(fetchStories(data));
  } catch (error) {
    const errorData = {
      message: error.response ? error.response.data : error.message
    };
    toast.error(errorData.message, {
      toastId: 'create-stories',
      position: toast.POSITION.TOP_CENTER
    });
  }
};

const doFetchStory = (payload) => async (dispatch) => {
  try {
    const { data } = await apiBaseurl.get(`/stories/${payload}`);
    dispatch(fetchStory(data));
  } catch (error) {
    const errorData = {
      message: error.response ? error.response.data : error.message
    };
    toast.error(errorData.message, {
      toastId: 'fetch-story',
      position: toast.POSITION.TOP_CENTER
    });
  }
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
