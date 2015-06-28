var _ = require('underscore');
/**
* Author: Bruno Guerra
*/

module.exports = function(job) {
	var defaults = {
		logData: [],
		data: {},

		log: function(msg){
			this.logData.push(msg);
		}
	};
	return _.extend(defaults, job);
}