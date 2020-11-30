import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import api from '../../services/apiClient';

import Input from '../Input';

import exitButton from '../../assets/exitButton.svg';
import submitButton from '../../assets/submitButton.svg';

import { Container, Content } from './styles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  post: string;
}

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: any;
};

const Contact: React.FC<Props> = ({ onClose }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    await api.post('/contacts', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      post: data.post,
    });
  }, []);

  return (
    <Container>
      <Content>
        <button type="button" onClick={onClose}>
          <img src={exitButton} alt="Exit contact" />
        </button>

        <h1>Contact </h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label="Name" placeholder="Fill your name" />

          <Input
            name="email"
            label="E-mail"
            placeholder="Fill a valid e-mail"
          />

          <Input name="phone" label="Phone" placeholder="Fill your phone" />

          <Input
            name="post"
            label="Post"
            placeholder="Hello..."
            className="textarea"
          />

          <button type="submit" className="submitButton">
            <img src={submitButton} alt="Submit Contact" /> Submit
          </button>
        </Form>
      </Content>
    </Container>
  );
};

export default Contact;
