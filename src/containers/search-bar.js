import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchPosts } from "../actions/index.js";

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      blogSearch: "",
      tagSearch: ""
    }

    this.onBlogSearchChange = this.onBlogSearchChange.bind(this);
    this.onTagSearchChange = this.onTagSearchChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onBlogSearchChange(e) {
    e.preventDefault();
    //Set searched blog on state
    this.setState({ blogSearch: e.target.value})
  }

  onTagSearchChange(e) {
    e.preventDefault();
    //Set searched tag on state
    this.setState({ tagSearch: e.target.value})
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    //invoke action to fetch searched blog and tag
    this.props.fetchPosts(this.state.blogSearch, this.state.tagSearch);
    this.setState({blogSearch:"", tagSearch:""});
  }

  render() {
    return (
        <div className="search-container">
          <form onSubmit={this.onFormSubmit}>
            <input 
              placeholder="Blog Name here"
              value={this.state.blogSearch}
              onChange={this.onBlogSearchChange}
              />
            <input 
              placeholder="Enter Tag here"
              value={this.state.tagSearch}
              onChange={this.onTagSearchChange}
              />
            <button type="submit">Search</button>
          </form>
        </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchPosts}, dispatch )
}

export default connect(null, mapDispatchToProps)(SearchBar);