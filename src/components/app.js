import React, { Component } from 'react';
import SearchBar from "../containers/search-bar";
import PostList from "../containers/post_list";
import FavoriteList from "../containers/favorite_list";


export default class App extends Component {
  render() {
    return (
      <div className="inner-container">
        <SearchBar />
        <FavoriteList />
        <PostList />
      </div>
    );
  }
}
