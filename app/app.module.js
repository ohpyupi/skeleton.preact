if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import { h, render } from 'preact';
import { Router } from 'preact-router';

import { Home } from './containers/home';
import { Profile } from './containers/profile';

import { Nav } from './components/nav';

import './style.scss';

render(
  <section id="app">
    <Nav/>
    <Router>
      <Home path="/"/>
      <Profile path="/profile"/>
    </Router>
  </section>,
	document.getElementById('root')
);
