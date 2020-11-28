import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ContactForm from '../Contact';

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
  const [isContactVisible, setIsContactVisible] = useState(false);

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
            <Contact onClick={() => setIsContactVisible(true)}>
              {isContactVisible ? <ContactForm /> : null}
              Contact
            </Contact>
          </Menu>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
