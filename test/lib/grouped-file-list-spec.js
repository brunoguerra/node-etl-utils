var t          = require('../support/test')
  , expect     = t.expect
  , gfs        = require('../../lib/grouped-file-list')

describe('gfs-list-images', function () {
  it('list all file into object', function (done) {
    gfs.list(/(\w)(\d+)[._]*(\d+)?/, __dirname+"/../fixtures/images/", check)

    function check(err, result) {
      expect(err).to.not.exits;
      expect(result).to.have.deep.property('all')
      done(err)
    }

  })
})
