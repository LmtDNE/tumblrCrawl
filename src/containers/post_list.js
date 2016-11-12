import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFavorites } from '../actions/index.js';
import SinglePost from '../components/single_post'

//Create PostList Component to hold all posts returned from search
class PostList extends Component {
  constructor(props) {
    super(props)

  
    this.handleClick = this.handleClick.bind(this);
    this.renderPost = this.renderPost.bind(this);

  }

  handleClick(post) {
    //invoke action to add post to favorites
    this.props.addToFavorites(post);
  }

  renderPost(postData) {
    return (
        <li key={postData.id}>
          <div className="individual_post">
          <button onClick={e => this.handleClick(postData) }id={postData.id}>❤️</button>
           <SinglePost {...postData} />
          </div>
        </li>
      )
  }

  render(){
    return (
        <div className="post-container">
          <ul>
            {this.props.post.map(this.renderPost)}
          </ul>
        </div>
      )
  }
}

function mapStateToProps({post}) {
  return { post }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {addToFavorites}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);