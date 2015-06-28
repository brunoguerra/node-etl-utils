// uses
var crypto = require('crypto')
  , chai    = require('chai')
  , expect  = chai.expect
  , sinon   = require('sinon')
  , sinonChai = require("sinon-chai")
  , chaiUse = chai.use(sinonChai)
  ;

// exports
module.exports.randomValueHex = randomValueHex
module.exports.expect  = expect
module.exports.sinon   = sinon
module.exports.resMock = {
  view: '',
  payload: '',
  render: function (view, payload) {
    this.view = view;
    this.payload = payload;
    return true;
  }
}

chai.config.includeStack = true // defaults to false
chai.use(require('../../lib/test/matchers'))


// implementation
function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len)    // return required number of characters
}
