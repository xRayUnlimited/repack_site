import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <Header textAlign="center" as="h3">
    Welcome To The Myspace <Link to="/apps">Bulletin Board</Link>
  </Header>
)

export default Home;
