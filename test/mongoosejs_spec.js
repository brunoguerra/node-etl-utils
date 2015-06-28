'use strict';

var request = require('supertest')
  , test    = require('./support/test')
  , expect  = test.expect
  , sinon   = test.sinon
  , factory = test.factory
  , auth    = require('./support/steps/auth')
  , jobs    = require('./support/steps/jobs')
  , _       = require('underscore')
  , selectn = require('selectn')
  , async   = require('async')
  , User    = require('app/models/user')
  ;



describe('mongoosejs', function () {
	it('is new', function (done) {
		
		var user = new User({ displayName: 'xuxa' });
		expect(user.isNew).to.be.true;
    done();
	})
})