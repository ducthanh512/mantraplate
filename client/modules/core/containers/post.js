import Post from '../components/post.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('posts.single', postId).ready()) {
  //  alert('1');
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  } else {
  //  alert(postId);
    const post = Collections.Posts.findOne(postId);
    if (post) {
      onData(null, {post});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Post);
