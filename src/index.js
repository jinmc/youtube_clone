import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAA45fZ5triAedogpjRKUb4JXD3gpomZac';
// import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    // console.log(this.state)
    YTSearch({key: API_KEY, term: 'kpop'}, (data) => {
      console.log(data);
      // this.state= {videos:videos}
      console.log(this);
      // videoList = data;
      this.setState({ videos: data });
    });
  }

   /**
  componentDidMount() {
    let videoList = null;
    YTSearch({key: API_KEY, term: 'kpop'}, (data) => {
      console.log(data);
      // this.state= {videos:videos}
      console.log(this);
      videoList = data;
      // this.setState({ videos: data });
    });
    this.setState({videos: videoList});
    console.log(`this.state`);
    // this.state = {videos: videoList};
    // console.log(videoList);
  }
  */


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

