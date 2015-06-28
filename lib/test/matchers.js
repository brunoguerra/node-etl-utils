module.exports = function(chai, utils) {
	chai.Assertion.addMethod('def', function() {
	  this.assert(this._obj !== undefined,
	    'expected #{this} be defined',
	    'expected #{this} not to be defined'
	  )
	})

	chai.Assertion.addMethod('statusWith', function(status) {
		this.assert(this._obj.status && this._obj.status == status,
			'expected #{this} to have a property status with '+status+' value',
			'expected #{this} to not have a property status with '+status)
	})
}