module.exports = {
  Query: {
    projects(parent, args) {
      return [
        {
          id: 1,
          name: 'My First Project',
          draft: {
            id: 1,
            folders: [
              { id: 1, name: 'Chapter 1', documents: [] },
              {
                id: 2,
                name: 'Chapter 2',
                documents: [
                  {
                    id: '4af1ed95-60dd-4563-9a88-193640d6794b',
                    name: 'First scene',
                    text: '<p>Hello!</p>',
                  },
                  { id: '43ec6087-74ed-452f-aa7c-33e83237d060', name: 'Second scene', text: '' },
                ],
              },
            ],
          },
        },
      ];
    },
  },
};
