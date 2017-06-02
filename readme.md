## ip2bit

### Directory Structure

├── lib
│   └── ip2bit.js
├── package.json
├── readme.md
├── test
│   └── ip2bit.test.js
└── yarn.lock

### Test

```sh
yarn test
#  or
npm run test 
```

### example

```js

const ip2bit = require('../lib/ip2bit')

let ip = '172.168.5.1'
console.log(ip, ip2bit.to32bit(ip)) // 2896692481

ip = '172. 168 .5.1'
console.log('ip', ip2bit.to32bit(ip)) // 2896692481

ip = '1 72.168.5.1'
try {
  ip2bit.to32bit(ip)
} catch (e) {
  console.log(ip, 'some error with [1 72.168.5.1]')
}

ip = '错误.IP.5.1'
try {
  ip2bit.to32bit(ip)
} catch (e) {
  console.log(ip, 'some error with [1 72.168.5.1]')
}


```




