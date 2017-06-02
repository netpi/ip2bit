const ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/

class Ip2int {
  to32bit (oip) {
    let ip = oip.replace(/(\s+\.)|(\.\s+)/g, '.')
    let ips = ip.split('.')
    if (!ipv4Maybe.test(ip) || ip.split('.').sort((a, b) => a - b)[3] > 255) {
      throw new Error(`the ip [ '${oip}' ] format error`)
    }
    return parseInt(ips.map(int => this._to2bit(int)).join(''), 2)
  }
  _to2bit (int) {
    const int2 = parseInt(int).toString(2)
    return Array(8 - int2.length).fill('0').join('') + '' + int2
  }
}

module.exports = new Ip2int()
