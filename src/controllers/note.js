const note = require('../../note.json');
/**
 * function to fetch the todo list
 * @param {*} req
 * @param {*} h
 * @returns
 */
const getNote = async (req, h) => {
  req.logger.info('In handler %s', req.path)

  return h
    .response({
      status: 'OK!',
      data: note.data
    })
    .code(200);
};

const changeNote = async (req, h) => {
  req.logger.info('In handler %s', req.path)
  const {content, id} = req.payload
  const noteIndex =  note.data.findIndex((note) => note.id === id)
  note.data[noteIndex].content = content

  return h
    .response({
      status: 'OK!',
      data: 'Note is changed'
    })
    .code(200);
};

const createNote = async (req, h) => {
  req.logger.info('In handler %s', req.path)
  const {content, id} = req.payload
  note.data.push({id, content})
  return h
    .response({
      status: 'OK!',
      data: 'Note is added'
    })
    .code(200);
};

module.exports = { changeNote, createNote, getNote };
