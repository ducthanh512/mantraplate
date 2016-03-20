import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';

import Navigation from './components/navigation.jsx';


import PostList from './containers/postlist';
import Post from './containers/post.js';
import NewPost from './containers/newpost.js';


import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
