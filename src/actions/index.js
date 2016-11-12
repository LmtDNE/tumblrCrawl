import axios from 'axios';
const API_KEY  = process.env.API__KEY;


export const ROOT_URL = "https://api.tumblr.com/v2/";
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export function addToFavorites(post) {
  console.log("This is post inside addToFavorite", post);
  return { 
    type: ADD_FAVORITE,
    payload: post
  }
}

export function removeFromFavorites(id) {
  console.log("removeFromFavorites is being called", id);
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}


export function fetchPosts(blog, tag) {
  let url;
  const resultLimit = 50;
  if(blog && !tag){
    url = `${ROOT_URL}blog/${blog}/posts?api_key=${API_KEY}&limit=${resultLimit}`;
    return dispatch => {
      return axios.get(url)
      .then(
        request => {
          const blogPosts = request.data.response.posts
          dispatch({
          type: FETCH_POSTS,
          payload: blogPosts
        });
        }, 
        error => {
          console.log(error);
      });
    };
  }
  if(!blog && tag) {
    url = `${ROOT_URL}tagged?api_key=${API_KEY}&tag=${tag}&limit=${resultLimit}`;
    console.log("This is url", url);
    return dispatch => {
      return axios.get(url)
      .then(
        request => {
          const blogPosts = request.data.response
          dispatch({
          type: FETCH_POSTS,
          payload: blogPosts
        });
        }, 
        error => {
          console.log(error);
      });
    };
  }
  if(blog && tag){
    url = `${ROOT_URL}blog/${blog}/posts?api_key=${API_KEY}&tag=${tag}&limit=${resultLimit}`;
    return dispatch => {
      return axios.get(url)
      .then(
        request => {
          const blogPosts = request.data.response.posts
          dispatch({
          type: FETCH_POSTS,
          payload: blogPosts
        });
        }, 
        error => {
          console.log(error);
      });
    };
  }
} 