import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 100%;
    margin-bottom: 48px;
    padding: 12px 16px;
    border-radius: 5px;
    border: 2px solid #ddd;
    font-size: 24px;
    color: #444;
    transition: border-color 0.2s;

    font-size: 24px;
    font-weight: 400;

    &:focus {
      border-color: #111;
    }

    &::placeholder {
      font-size: 24px;
      font-weight: 400;
    }
  }

  .textarea {
    padding-bottom: 200px;
    margin-bottom: 72px;

    &::placeholder {
    }
  }

  .textarea:focus {
    border-color: #111;
  }

  label {
    display: block;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;
