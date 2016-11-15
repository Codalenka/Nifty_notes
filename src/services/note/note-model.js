'use strict';

// note-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new Schema({
  name: { type: String, required: true },
  categoryId: { type: String, required: true },
  // type can be either text or an image (canvas)
  type: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
});

const categorySchema = new Schema({
  categoryId: { type: String, required: true },
  name: { type: String, required: true },
  notes: [noteSchema],
});

const notesboardSchema = new Schema({
  notes: [noteSchema],
  categories: [categorySchema],
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
})

const noteModel = mongoose.model('note', noteSchema);

module.exports = noteModel;
