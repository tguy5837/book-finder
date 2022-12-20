const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: String
        description: String
        bookID: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        password: String
        savedBooks: [Book]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): user
        books(author: String): [Book]
        book(_id: ID!): Book
    }
`;