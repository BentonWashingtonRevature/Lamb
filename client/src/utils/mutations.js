import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

export const ADD_REQUEST = gql`
  mutation addRequest($title: String!, $description: String!, $details: String!) {
    addRequest(title: $title, description: $description, details: $details) {
      _id
      title
      description
      details
      requestAuthor
      createdAt
    }
  }
`;

export const UPDATE_REQUEST = gql`
  mutation updateRequest($description: String!, $details: String!) {
    updateRequest(description: $description, details: $details) {
      _id
      title
      description
      details
      requestAuthor
      createdAt
    }
  }
`;

export const DELETE_REQUEST = gql`
  mutation deleteRequest($requestId: ID!) {
    deleteRequest(requestId: $requestId) {
      request
    }
  }
`;