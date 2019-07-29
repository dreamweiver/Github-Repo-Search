import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import HeaderAppBar from './../Common/HeaderAppBar';
import SearchResults from  './../Results/Results';
import appIcon from './appIcon.png';
import SearchForm from  './../Search/SearchForm';
import Store from "./../Stores/Store";
import { Provider } from "react-redux";
import GithubAccess from './../Services/GithubAccess';
import GenericHelper from './../Helper/GenericHelper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NotificationBar from './../Common/Notification';
import {ColorCircularProgress, ColorLinearProgress} from './../Common/CustomProgressBar';
import './home.scss';

const notificationDimissTime =  5000;  // notification dismiss timeout
class Home extends Component {

  constructor(){
    super();
    this.state = {
      searchResults: [],
      isLoading: false,
      noResults: false,
      notification : {
        showNotification: false,
        variant: '',
        message: ''
      }
    };

    this.showResults= this.showResults.bind(this);
    this.dismissNotification = this.dismissNotification.bind(this);
  }

  _pageTitle = "Github Repo Directory";

  // dismiss notification handler for all notifications on this view
  dismissNotification(event) {
    let {notification} = this.state;

    notification.showNotification = false;
    this.setState({...this.state, 'notification': {...notification}});
  }

  // form submit handler 
  showResults(values) {
    const searchQuery = values.searchQuery &&  values.searchQuery.trim();
    const sortBy = 'stars';
    const orderBy= 'desc';

    // when valid search query, then make service call 
    if(!!searchQuery) {
      this.setState({...this.state, noResults: false, searchResults: [], isLoading: true}); // show the loader or spinner

      GithubAccess.getRepositories(searchQuery, sortBy, orderBy).then(results => {
        let mappedResults = GenericHelper.mapRepoItems(results.items);

        this.setState({...this.state, 
          searchResults: [...mappedResults],
          noResults: (mappedResults.length === 0),
          isLoading: false});
      }).catch(error => {
        let {notification} = this.state;

        notification.showNotification = true;
        notification.message = "Github Api Get repositories call failed";
        notification.variant = 'error';
        
        this.setState({...this.state, searchResults: [], 'notification' : {...notification}, isLoading: false});
      });
    }
    
  }

  render() {

    let {searchResults, isLoading, noResults, notification} = this.state;

    return (
      <Provider store={Store}>
        <section className="home">
          <HeaderAppBar title={this._pageTitle} icon={appIcon}></HeaderAppBar> 
          
          <Container maxWidth="lg" className="home__cont">
              <SearchForm onSubmit={this.showResults} isSubmitting={isLoading}/>
              {
                isLoading && (
                  <div>
                    <ColorCircularProgress size={30} thickness={5} />
                    <ColorLinearProgress  />
                  </div>
                  )
              }

              {
                noResults && (
                  <Paper square className="home__no-results">
                      <Typography>No Results Found</Typography>
                  </Paper>
                )
              }
              
            <Paper square >
              <SearchResults data={searchResults}></SearchResults>
            </Paper>
          </Container>
          <NotificationBar variant={notification.variant}
             msg={notification.message} 
             showNotification={notification.showNotification}
             dismissAfter={notificationDimissTime} 
             onDimiss={this.dismissNotification}>
          </NotificationBar>
          <footer className="home__footer">
            <Container maxWidth="sm">
              <Typography variant="body1">Github Repo Directory.</Typography>
              <Typography variant="body2" color="textSecondary">
                  {'@ Copyright '}
                  <Link color="inherit" href="https://github.com/dreamweiver/">
                    dreamweiver
                  </Link>
              </Typography>
            </Container>
        </footer>
        </section>
      </Provider>
    );
  }
}

export default Home;