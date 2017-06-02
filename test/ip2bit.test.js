const Ip2int = require('../lib/ip2bit.js')
var should = require('should')

// console.log(Ip2int.to32bit('180.173.73.39'))
describe('./test/ip2bit.test.js', function () {
  describe('a string with spaces between two Number', function () {
    it('should throw a error ', function (done) {
      (function () {
        Ip2int.to32bit('18 0.173.73.39')
      }).should.throw(Error)
      done()
    })
  })
  describe('a string with spaces between two digits', function () {
    it('should process the output normally ', function (done) {
      Ip2int.to32bit('255.173. 173.39').should.be.Number()
      done()
    })
  })
  describe('非数字.格式', function () {
    it('should throw a error', function (done) {
      (function () {
        Ip2int.to32bit('非数字.格式.73.39')
      }).should.throw(Error)
      done()
    })
  })
  describe(' ip某一位 > 255', function () {
    it('should throw a error', function (done) {
      (function () {
        Ip2int.to32bit('256.123.73.39')
      }).should.throw(Error)
      done()
    })
  })
})
