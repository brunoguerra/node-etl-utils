
module.exports = deepset
/**
 * Public: deep set value to an object
 * * path {Array | String} A property hierachy to be set. If string dots are need
 * * obj {Object} will receive a new property or porperties
 * * value {*} a value to be setted
 */
function deepset(path, obj, value) {
	var nobj, i
  if (path.constructor !== Array) path = path.split('.')
  for (i = 0; i < path.length - 1; i++) {
  	nobj = obj[path[i]]
  	if (!nobj) {
  		nobj = {}
  		obj[path[i]] = nobj
  	}
  	obj = nobj
  }

  obj[path[i]] = value
}
