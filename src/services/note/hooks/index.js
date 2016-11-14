'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const populateCreatedBy = hooks.populate('CreatedBy', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [populateCreatedBy],
  get: [populateCreatedBy],
  create: [populateCreatedBy],
  update: [populateCreatedBy],
  patch: [populateCreatedBy],
  remove: []
};
