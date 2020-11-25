import React from 'react';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

const Contact: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <a href="exit">X</a>

      <h1>Contact</h1>

      <Content>
        <Form onSubmit={handleSubmit}>
          <title>Name</title>

          <input name="name" placeholder="Fill your name" />
          <title>E-mail</title>
          <input name="email" placeholder="Fill a valid e-mail" />

          <title>Phone</title>
          <input name="phone" placeholder="Fill your phone" />

          <title>Post</title>
          <textarea name="post" placeholder="Hello..." />

          <button type="submit">Submit</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Contact;
