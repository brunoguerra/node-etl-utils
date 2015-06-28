var fs         = require('fs')
  , async      = require('async')
  , deepset    = require('./deepset')
  , selectn    = require('selectn')

var NUM_DEFAULT_RESULT_MATCHED = 3
var NO_ZERO_BASED_ENDING = 2

exports.list = list;

/**
 * Public: list all files of directory whos matches criterias and
 *         put it into groups
 * * `groups` {Array} regex to be matched on scanning
 * * `dir` {String} directory to search
 * * `callback` {Function} that will be called when finished
 *   * `err`
 *   * `result` object with matched groups on keys and files
 */
function list (groups, dir, callback) {

  async.waterfall([readDir, filter], callback)

  function readDir (next) {
    fs.readdir(dir, next)
  }

  function filter (files) {
    if (groups.constructor != Array) groups = [groups]

    var result = { all: [] }

    groups.forEach(function (group) {
      if (typeof(group) == "string") group = new Regex(group)
      files.forEach(function (file) {
        var match = file.match(group)
        if (match) {
          addToResult(match, file)
        }
      })
    })

    function addToResult (match, file) {

      result.all.push(file)
      var lenMa = match.length
      var values = match.splice(1, NO_ZERO_BASED_ENDING+lenMa-NUM_DEFAULT_RESULT_MATCHED)
      var actual = selectn(values.join("."))(result)

      if (actual) {
        actual.push(file)
      } else {
        deepset(values, result, [file])
      }
    }

    callback(null, result)

  }
}
