const { gql } = require('apollo-server');

module.exports = gql`
  scalar Text

  type Document {
    documentID: ID!
    title: String
    text: Text
  }

  type Folder {
    folderID: ID!
    name: String
    documents: [Document]
  }

  type Collection {
    collectionID: ID
    folders: [Folder]
  }

  type Project {
    projectID: ID!
    name: String
    draft: Collection
    notes: Collection
  }

  type User {
    userID: ID!
    name: String!
    projects: [Project]
  }

  type Query {
    user(userID: ID!): User
    project(projectID: ID!): Project
    document(documentID: ID): Document
  }
`;
