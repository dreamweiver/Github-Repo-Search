import GenericHelper from './GenericHelper';
import mockedRepoItems  from  './../Misc/repo-items-mock';


it('Massage raw repo items to minimalistic object', () => {
	const {items} =  mockedRepoItems;
	const expectedMapObj = {
	  repo_full_name: items[0].full_name,
      repo_url:items[0].git_url,
      stars_count : items[0].stargazers_count,
      programming_lang: items[0].language,
      owner_url: items[0].owner.html_url,
      avatar_url: items[0].owner.avatar_url,
      user_id: items[0].owner.login
	}

	const mappedRepoItems = GenericHelper.mapRepoItems(items);

	// compare entire object
    expect(mappedRepoItems[0]).toEqual(expectedMapObj);

});

it('Massage raw repo items to minimalistic object - Empty items array', () => {
	const items = [];
	const expectedMapItems = [];

	const mappedRepoItems = GenericHelper.mapRepoItems(items);

    expect(mappedRepoItems).toEqual(expectedMapItems);

});

