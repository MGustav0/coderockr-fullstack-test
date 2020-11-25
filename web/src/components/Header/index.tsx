import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  Home,
  Menu,
  Posts,
  Contact,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <Home>
            <Link to="/">Rockr Blog</Link>
          </Home>
          <Menu>
            <Posts>
              <Link to="/">Posts</Link>
            </Posts>
            <Contact>
              <Link to="/contact">Contact</Link>
            </Contact>
          </Menu>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
