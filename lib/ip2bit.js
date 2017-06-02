const ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/

class Ip2int {
  to32bit (oip) {
    let ip = oip.replace(/(\s+\.)|(\.\s+)/g, '.')
    let ips = ip.split('.')
    if (!ipv4Maybe.test(ip) || ips.sort((a, b) => a - b)[3] > 255) {
      throw new Error(`the ip [ '${oip}' ] format error`)
    }
    let intArr = ips.map(int => this._to2bit(int))
    return parseInt(intArr.join(''), 2)
  }
  _to2bit (int) {
    const int2 = parseInt(int).toString(2)
    let lessStr = ''
    for (let i = 0; i < 8 - int2.length; i++) {
      lessStr += 0
    }
    return lessStr + '' + int2
  }
}

module.exports = new Ip2int()
