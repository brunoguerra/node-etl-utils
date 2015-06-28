var expect = require('chai').expect;

var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })

  describe('#length()', function(){
  	var data= [1,2,3];
  	it('valid return on counting data', function() {
  		expect(data.length).to.equal(3);
  	})

  	it('zero for empty', function() {
  		expect([].length).to.equal(0);
  	})

  	it('not undefined', function(){
  		expect(data).to.be.def();
  	})

  	it('not defined', function(){
  		expect(undefined).to.not.be.def();
  	})
  	
  })
})
