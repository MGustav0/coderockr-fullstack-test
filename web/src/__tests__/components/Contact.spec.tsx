import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Contact from '../../components/Contact';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mockedOnClose = () => {};

jest.mock('../../components/Header', () => {
  return {
    useAuth: () => ({
      onClose: mockedOnClose,
    }),
  };
});

describe('Contact Page', () => {
  it('should be able to send contact', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Contact onClose={mockedOnClose} />,
    );

    const nameField = getByPlaceholderText('Fill your name');
    const emailField = getByPlaceholderText('Fill a valid e-mail');
    const phoneField = getByPlaceholderText('Fill your phone');
    const postField = getByPlaceholderText('Hello...');
    const buttonElement = getByText('Submit');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(phoneField, { target: { value: '11999111999' } });
    fireEvent.change(postField, {
      target: { value: 'Qui occaecati vero et quibusdam non' },
    });

    fireEvent.click(buttonElement);

    expect('/contacts');
  });
});
