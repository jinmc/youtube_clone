import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAA45fZ5triAedogpjRKUb4JXD3gpomZac';
// import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    let videos = [];
    let videoList = YTSearch({key: API_KEY, videos});
    console.log(videos);
  }

  render() {
    return <h1>hello</h1>;
  }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

