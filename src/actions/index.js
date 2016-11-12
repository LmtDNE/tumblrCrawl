import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import Private from '../../private';
const API_KEY  =  Private.C_API_KEY;


export const ROOT_URL = "https://api.tumblr.com/v2/";
export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export function addToFavorites(post) {
  return { 
    type: ADD_FAVORITE,
    payload: post
  }
}

export function removeFromFavorites(id) {
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
      return fetchJsonp(url).then(response => {
        return response.json()
      }).then(
        request => {
          const blogPosts = request.response.posts
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
      return fetchJsonp(url).then(response => {
        return response.json()
      }).then(
        request => {
          const blogPosts = request.response
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
      return fetchJsonp(url).then(response => {
        return response.json()
      }).then(
        request => {
          const blogPosts = request.response.posts
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