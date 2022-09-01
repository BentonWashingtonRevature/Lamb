import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      requests {
        _id
        title
        description
        details
        requestAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      requests {
        _id
        title
        description
        details
        requestAuthor
        createdAt
      }
    }
  }
`;

// export const QUERY_CATEGORIES = gql`
//   query getCategories {
//     categories {
//       _id
//       categoryName
//   }
// }
// `

export const QUERY_REQUESTS = gql`
  query getRequests {
    requests {
      _id
      title
      description
      details
      requestAuthor
      createdAt
    }
  }
`;

// export const QUERY_CATEGORY_REQUESTS = gql`
//   query getCatRequests($category: ID!) {
//     catrequests(category: $category) {
//       _id
//       category
//       title
//       description
//       details
//       requestAuthor
//       createdAt
//     }
//   }
// `;

