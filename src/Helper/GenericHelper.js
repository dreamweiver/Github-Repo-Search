const GenericHelper = {
	mapRepoItems: rawItems => {
		let mappedItems = [];

		// Massage the raw items array and pick only 
		// the information needed
		for (let i=0; i<rawItems.length; i++) {
			let item = rawItems[i];
			let repo = {
	          repo_full_name: item.full_name,
	          repo_url:item.git_url,
	          stars_count : item.stargazers_count,
	          programming_lang: item.language,
	          owner_url: item.owner.html_url,
	          avatar_url: item.owner.avatar_url,
	          user_id: item.owner.login
	        };

	        mappedItems.push(repo);
		}

		return mappedItems;
	}
}

export default GenericHelper;