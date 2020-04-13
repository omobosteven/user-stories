const storiesMockData = {
  createStoryData: {
    summary: 'test story',
    description: 'this is a test story',
    type: 'bugfix',
    complexity: 'mid'
  },
  createStoryResponse: {
    id: 0,
    createdBy: 0,
    summary: 'test user',
    description: 'this is a test story',
    type: 'bugfix',
    cost: 0,
    complexity: 'mid',
    estimatedHrs: 'string'
  },
  fetchStoriesResponse: [
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
  fetchStorySuccess: {
    summary: 'asdf',
    description: 'sfdfgf',
    type: 'enhancement',
    complexity: 'mid',
    estimatedHrs: 0,
    cost: 0,
    id: 1,
    createdBy: 0
  },
  reviewStoryResponse: {
    summary: 'asdf',
    description: 'sfdfgf',
    type: 'enhancement',
    complexity: 'mid',
    estimatedHrs: 0,
    cost: 0,
    id: 1,
    createdBy: 0,
    status: 'accepted'
  }
};

export default storiesMockData;
