const { gql } = require('apollo-server');

module.exports = gql`
  scalar Text

  type Document {
    id: ID!
    name: String
    text: Text
  }

  type Folder {
    id: ID!
    name: String
    documents: [Document]
  }

  type Collection {
    id: ID!
    folders: [Folder]
  }

  type Project {
    id: ID!
    name: String
    draft: Collection
    notes: Collection
  }

  type Query {
    projects(userID: ID!): [Project]
    document(userID: ID!, documentID: ID!): Document
  }
`;
