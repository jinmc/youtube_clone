import './style/style.css';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBjkAF_Uf8RZf6iaOrXDiHlYH5cR2mIFLw';
// import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
      term: "kpop"
    };

    this.videoSearch("kpop");
    // console.log(this.state)
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        term: term,
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  } 

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 500)
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch} 
          term={this.state.term}/>
          <div className="row">
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
          </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

