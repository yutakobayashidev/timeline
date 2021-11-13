import React, { Component } from 'react'

export default class KeybaseTxt extends Component {
  static getInitialProps ({ res }) {
    res.end(claim)
  }
  
  render () {
    return <div>We'll never get this far</div>
  }
}

const claim = `==================================================================
https://keybase.io/yutakobayashi
--------------------------------------------------------------------

I hereby claim:

  * I am an admin of https://yutakobayashi.dev
  * I am yutakobayashi (https://keybase.io/yutakobayashi) on keybase.
  * I have a public key ASAHvlsGnRF6sUJcVFhKE5wr6ApTXaA43BuWTnGtut3H7Ao

To do so, I am signing this object:

{
  "body": {
    "key": {
      "eldest_kid": "012007be5b069d117ab1425c54584a139c2be80a535da038dc1b964e71adbaddc7ec0a",
      "host": "keybase.io",
      "kid": "012007be5b069d117ab1425c54584a139c2be80a535da038dc1b964e71adbaddc7ec0a",
      "uid": "d58b658bfad4375ae0aaa1dc825a2a19",
      "username": "yutakobayashi"
    },
    "merkle_root": {
      "ctime": 1636823137,
      "hash": "63f331fc44f91c6151249528d2c0217a5df6613d2367711fab9f7267a51ef33adfe0c82f9179cf63924f0d14feefbadac5745fa9b6422c27a8cf2f99e094f38c",
      "hash_meta": "ee36e2785be9277c4cb4007324448e08f2f52b052f152c753fe32f7db66c98cf",
      "seqno": 21212737
    },
    "service": {
      "entropy": "+Uw8hAAlhk4xUesbOgBEqKp7",
      "hostname": "yutakobayashi.dev",
      "protocol": "https:"
    },
    "type": "web_service_binding",
    "version": 2
  },
  "client": {
    "name": "keybase.io go client",
    "version": "5.8.0"
  },
  "ctime": 1636823171,
  "expire_in": 504576000,
  "prev": "6ccf4583c10d45ad827e387907f665cad5fe83b1b95a7a5d88df71014985f05b",
  "seqno": 16,
  "tag": "signature"
}

which yields the signature:

hKRib2R5hqhkZXRhY2hlZMOpaGFzaF90eXBlCqNrZXnEIwEgB75bBp0RerFCXFRYShOcK+gKU12gONwblk5xrbrdx+wKp3BheWxvYWTESpcCEMQgbM9Fg8ENRa2Cfjh5B/ZlytX+g7G5WnpdiN9xAUmF8FvEIAXu6CDsdnBWMBoIglE2lCghiSyjrx5dSZY8pMPsdu7sAgHCo3NpZ8RA2MhyFBXGPdpZC213m3oM9ye09TXwe2rn1rju0bhIErWtBFhVVo7XT0XQdAcaRD/TdKZsgoQgk8qjJ27MF77NAqhzaWdfdHlwZSCkaGFzaIKkdHlwZQildmFsdWXEIEYlHMzDBpT6DiLHm+9U7n9G82+70Nf3+A2+fx5/t1a1o3RhZ80CAqd2ZXJzaW9uAQ==

And finally, I am proving ownership of this host by posting or
appending to this document.

View my publicly-auditable identity here: https://keybase.io/yutakobayashi

==================================================================`