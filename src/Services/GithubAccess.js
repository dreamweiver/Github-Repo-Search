import axios from 'axios';

let githubApiUrl = 'https://api.github.com'; // Github api base url

const GithubAccess = {
	getRepositories:(query, sortBy, orderBy) => {

		let repoSearchUrl = `${githubApiUrl}/search/repositories?q=${query}+in:name&sort=${sortBy}&order=${orderBy}`;
	
		return axios.get(repoSearchUrl).then(response => response.data);

	}
}

export default GithubAccess;