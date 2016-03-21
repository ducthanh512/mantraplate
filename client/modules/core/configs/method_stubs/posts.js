import {check} from 'meteor/check';
export default function ({Meteor, Collections}) {
  Meteor.methods({
    'posts.create'(_id, title, content) {

      check(_id, String);
      check(title, String);
      check(content, String);

      const createdAt = new Date();
      const post = {
        _id, title, content, createdAt,
        saving: true
      };
    //  alert('Call posts.create method from config: before inserting');

      Collections.Posts.insert(post);

    //  alert('Call posts.create method from config: after inserting');
    }
  });
}
