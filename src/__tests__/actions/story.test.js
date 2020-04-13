import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { apiBaseurl } from '../../utils/main';

import {
  doCreateStory,
  doFetchStories,
  doFetchStory,
  doReviewStory
} from '../../actions/story';
import {
  STORY_CREATE_SUCCESS,
  STORIES_FETCH_SUCCESS,
  STORY_FETCH_SUCCESS,
  STORY_REVIEW_SUCCESS
} from '../../constant/actionTypes';
import storiesMockData from '../../fixtures/storiesMockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(apiBaseurl);

describe('Story Actions', () => {
  it('should create STORY_CREATE_SUCCESS when story is successfully created', (done) => {
    const { createStoryData, createStoryResponse } = storiesMockData;
    const store = mockStore({});

    mock
      .onPost('/stories')
      .reply(
        200,
        {
          ...createStoryResponse
        }
      );

    const expectedAction = [{
      type: STORY_CREATE_SUCCESS,
      story: createStoryResponse
    }];

    store.dispatch(doCreateStory(createStoryData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    done();
  });

  it('should create STORY_FETCH_SUCCESS when story is successfully fetch', (done) => {
    const { fetchStorySuccess } = storiesMockData;
    const store = mockStore({});

    mock
      .onGet('/stories/3')
      .reply(
        200,
        fetchStorySuccess
      );

    const expectedAction = [{
      type: STORY_FETCH_SUCCESS,
      story: fetchStorySuccess
    }];

    store.dispatch(doFetchStory(3))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    done();
  });

  it('should create STORIES_FETCH_SUCCESS when stories are successfully fetched', (done) => {
    const { fetchStoriesResponse } = storiesMockData;
    const store = mockStore({});

    mock
      .onGet('/stories')
      .reply(
        200,
        fetchStoriesResponse
      );

    const expectedAction = [{
      type: STORIES_FETCH_SUCCESS,
      stories: fetchStoriesResponse
    }];

    store.dispatch(doFetchStories())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    done();
  });

  it('should create STORY_REVIEW_SUCCESS when story is reviewed successfully', (done) => {
    const store = mockStore({});

    const expectedAction = [{
      type: STORY_REVIEW_SUCCESS,
      review: {
        storyId: 3,
        status: 'accepted'
      }
    }];

    store.dispatch(doReviewStory({
      storyId: 3,
      status: 'accepted'
    }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    done();
  });
});
