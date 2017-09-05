import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import serverRenderMethods from './serverRender';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get(['/', '/profiles/:profileId'], (req, res) => {
  serverRenderMethods.serverRenderApp(req.params.profileId)
    .then( ({initialMarkup, initialData}) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

// for adding new profiles
server.get(['/addNewProfile'], (req, res) => {
  const initialMarkup = serverRenderMethods.serverRenderAddNewProfile();
  res.render('addNewProfile', {
    initialMarkup
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express is listening to port ', config.port);
});
