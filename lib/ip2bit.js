const ipv4Maybe = /^(((2[0-5][0-5])|(1[0-9][0-9])|([1-9][0-9])|([0-9])).){3}((2[0-5][0-5])|(1[0-9][0-9])|([1-9][0-9])|([0-9]))$/

class Ip2int {
  to32bit (oip) {
    let ip = oip.replace(/(\s+\.)|(\.\s+)/g, '.')
    if (!ipv4Maybe.test(ip)) {
      throw new Error(`the ip [ '${oip}' ] format error`)
    }
    return parseInt(ip.split('.').map(int => this._to2bit(int)).join(''), 2)
  }
  _to2bit (int) {
    const int2 = parseInt(int).toString(2)
    return Array(8 - int2.length).fill('0').join('') + '' + int2
  }
}

module.exports = new Ip2int()
