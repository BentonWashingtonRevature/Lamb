const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        requests: [Request]
}

    type Request {
        _id: ID
        title: String
        description: String
        details: String
        requestAuthor: String
        createdAt: String
}


    type Auth {
        token: ID!
        user: User
    }


    type Query {
        me: User
        user(username: String!): User
        requests: [Request]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, username: String!, password: String!): Auth
        deleteUser(userId: ID!): User
        addRequest(title: String!, description: String!, details: String!): Request
        updateRequest(description: String! details: String!): Request
        deleteRequest(requestId: ID!): Request

    }
`;

module.exports = typeDefs;
