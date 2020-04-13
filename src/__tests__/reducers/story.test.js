import storyReducer from '../../reducers/story';
import {
  STORY_CREATE_SUCCESS,
  STORIES_FETCH_SUCCESS,
  STORY_FETCH_SUCCESS,
  STORY_REVIEW_SUCCESS,
} from '../../constant/actionTypes';
import storiesMockData from '../../fixtures/storiesMockData';

describe('Story Reducer', () => {
  it('should return the initial state', () => {
    expect(storyReducer(undefined, {})).toEqual({
      stories: [],
      story: null,
    });
  });

  it('should return the state when passed STORY_CREATE_SUCCESS', () => {
    const state = {
      stories: [],
      story: null,
    };

    const action = {
      type: STORY_CREATE_SUCCESS,
      story: storiesMockData.createStoryResponse.data,
    };

    const newState = storyReducer(state, action);

    expect(newState.stories).toHaveLength(0);
    expect(newState.story).toBeNull();
  });

  it('should update state when passed STORIES_FETCH_SUCCESS', () => {
    const state = {
      stories: [],
      story: null,
    };

    const action = {
      type: STORIES_FETCH_SUCCESS,
      stories: storiesMockData.fetchStoriesResponse
    };

    const newState = storyReducer(state, action);

    expect(newState.stories).toEqual(storiesMockData.fetchStoriesResponse);
  });

  it('should update state when passed STORY_FETCH_SUCCESS', () => {
    const state = {
      stories: [
        {
          summary: 'asdf',
          description: 'sfdfgf',
          type: 'enhancement',
          complexity: 'mid',
          estimatedHrs: 0,
          cost: 0,
          id: 1,
          createdBy: 0
        }
      ],
      story: null,
    };

    const action = {
      type: STORY_FETCH_SUCCESS,
      story: storiesMockData.fetchStorySuccess
    };

    const newState = storyReducer(state, action);

    expect(newState.story).toEqual(storiesMockData.fetchStorySuccess);
  });

  it('should update state when passed STORY_REVIEW_SUCCESS', () => {
    const state = {
      stories: [
        {
          summary: 'asdf',
          description: 'sfdfgf',
          type: 'enhancement',
          complexity: 'mid',
          estimatedHrs: 0,
          cost: 0,
          id: 1,
          createdBy: 0
        }
      ],
      story: null,
    };

    const action = {
      type: STORY_REVIEW_SUCCESS,
      review: storiesMockData.reviewStoryResponse
    };

    const newState = storyReducer(state, action);

    expect(newState.stories[0]).toEqual(storiesMockData.reviewStoryResponse);
  });
});
