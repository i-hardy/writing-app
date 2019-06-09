const User = require('./models/user');
const Project = require('./models/project');
const Collection = require('./models/collection');
const Folder = require('./models/folder');
const Document = require('./models/document');

module.exports = {
  Folder: {
    documents(parent) {
      return Document.read({ id: parent.id });
    },
  },
  Collection: {
    folders(parent) {
      return Folder.read({ id: parent.id });
    },
  },
  Project: {
    draft(parent) {
      return Collection.read({ id: parent.draft });
    },
    notes(parent) {
      return Collection.read({ id: parent.notes });
    },
  },
  User: {
    projects(parent) {
      return Project.read({ userID: parent.userID });
    },
  },
  Query: {
    user(parent, args) {
      return User.read(args);
    },
    project(parent, args) {
      return Project.read(args);
    },
  },
};
