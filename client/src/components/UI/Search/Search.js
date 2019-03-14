import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import SearchItem from '../SearchItem/SearchItem';
import { videoQueries } from '../../../queries';

const { SEARCH_VIDEOS } = videoQueries;

class Search extends Component {
  state = {
    searchResults: [],
  };

  changeHandler = ({ searchVideos }) => {
    this.setState({
      searchResults: searchVideos,
    });
  };

  render() {
    const { searchResults } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <div>
            <input
              type='search'
              placeholder='Искать...'
              onChange={async event => {
                event.persist();
                const { data } = await client.query({
                  query: SEARCH_VIDEOS,
                  variables: { searchTerm: event.target.value },
                });
                this.changeHandler(data);
              }}
            />
            <ul>
              {searchResults.map(video => {
                return <SearchItem key={video._id} {...video} />;
              })}
            </ul>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default Search;
