import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
const router = express.Router();

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);


  router.get('/profiles', (req, res) => {
    let profiles = {};
    db.collection('profiles')
      .find({})
      .project({
        id: 1,
        firstName: 1,
        lastName: 1
      })
      .each((err, profile) => {
        assert.equal(null, err);

        if (!profile) { // no more profiles
          res.send({ profiles });
          return;
        }
        profiles[profile.id] = profile;
      });
  });

  router.get('/profiles/:profileId', (req, res) => {
    db.collection('profiles')
      .findOne({id: Number(req.params.profileId)})
      .then(profile => res.send(profile))
      .catch(console.error);
  });

  router.get('/posts', (req, res) => {
    let posts = {};
    db.collection('posts')
      .find({})
      .each((err, post) => {
        assert.equal(null, err);

        if (!post) { // no more profiles
          res.send({ posts });
          return;
        }
        posts[post.id] = post;
      });
  });


});

export default router;
