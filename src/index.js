import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAA45fZ5triAedogpjRKUb4JXD3gpomZac';
// import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    console.log(this.state)
    YTSearch({key: API_KEY, term: 'kpop'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail videos={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

