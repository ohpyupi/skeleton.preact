import { h } from 'preact';
import { Link } from 'preact-router/match';

import './style.scss';

export const Nav = () => {
  return (
    <nav id="nav">
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};
