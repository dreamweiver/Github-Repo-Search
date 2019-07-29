import axios from 'axios';


let githubApiUrl = 'https://api.github.com';

const GithubAccess = {
	getRepositories:(query, sortBy, orderBy) => {

		let repoSearchUrl = `${githubApiUrl}/search/repositories?q=${query}+in:name&sort=${sortBy}&order=${orderBy}`;
	
		return axios.get(repoSearchUrl).then(response => response.data);

	}
}

export default GithubAccess;