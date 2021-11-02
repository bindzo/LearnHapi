const { getNote, createNote, changeNote } = require('../controllers/note');
module.exports = [
  {
    method: 'GET',
    path: '/note',
    options: {
      auth: false,
      tags: ['api', 'note'],
    },
    handler: getNote
  },
  {
    method: 'PUT',
    path: '/note',
    options: {
      auth: false,
      tags: ['api', 'note'],
    },
    
    handler: changeNote
  },
  {
    method: 'POST',
    path: '/note',
    options: {
      auth: false,
      tags: ['api', 'note'],
    },
    handler: createNote
  }
];
