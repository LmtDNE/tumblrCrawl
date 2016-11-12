import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/index";


export default function (state = [], action) {
  switch(action.type) {
    case ADD_FAVORITE:
      console.log("This is adding post");
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter(post => {
        console.log("What is remove post?", post);
        return post.id !== action.payload
      })
    default:
      return state;
  }
};

