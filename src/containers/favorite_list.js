import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromFavorites } from '../actions/index.js';
import FavoritePost from '../components/favorite_post'


//Component to hold favorites added by user
class FavoriteList extends Component {

  constructor(props) {
    super(props)

    this.handleRemove = this.handleRemove.bind(this);
    this.renderFavorite = this.renderFavorite.bind(this);
  }

  handleRemove(removedPostId) {
    //invoke action to remove specific post by id
    this.props.removeFromFavorites(removedPostId);
  }

  renderFavorite(favoriteData) {
    return (
        <li key={favoriteData.id}>
            <button onClick={e => this.handleRemove(favoriteData.id) }id={favoriteData.id}>❌</button>
            <FavoritePost {...favoriteData} />
        </li>
      )
  }

  render(){
    console.log("This is props inside of FavoriteList", this.props);
    return (
        <div className="favorite-container">
          <h1>List of Favorites</h1>
          <ul>
            {this.props.favorite.map(this.renderFavorite)}
          </ul>
        </div>
      )
  }
}

function mapStateToProps({favorite}) {
  return { favorite }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {removeFromFavorites}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);