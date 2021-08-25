import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBJorU5-QpMc8qMvuMhNPX5ETZrVw39APk';
// import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };
    // console.log(this.state)
    YTSearch({key: API_KEY, term: 'kpop'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

