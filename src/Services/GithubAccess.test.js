import GithubAccess from "./GithubAccess";
import mockedRepoItems from  './../Misc/repo-items-mock.js';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

let mockAdap = undefined;


describe("Github Api services", () => {

  beforeEach(() => {
    mockAdap = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAdap.restore();
  });

  it('should call a get repositories function: valid flow', () => {

    const query = 'dreamweiver';
    const sortBy = 'stars';
    const orderBy = 'desc';
    const repoItemsMockData = {...mockedRepoItems};

    const getRepoUrl = `https://api.github.com/search/repositories?q=${query}+in:name&sort=${sortBy}&order=${orderBy}`;


    //construct mock data for  axios ajax call
    const mockAdap = new MockAdapter(axios);
      
    //stubbing post request with mock data
    mockAdap.onGet(getRepoUrl).reply(200, repoItemsMockData);

    //execute 
    const actualPromise = GithubAccess.getRepositories(query, sortBy, orderBy);
    const expectedPromise = new Promise(function(resolve, reject) {
                  //empty function for UT
                });

    let expectedRepoItems = {...mockedRepoItems};

    //assert
    expect(actualPromise).toEqual(expectedPromise);
    return expect(actualPromise).resolves.toEqual(expect.objectContaining(expectedRepoItems));

  });
});