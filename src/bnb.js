const unMarshalBinaryLengthPrefixed = require('./utils/amino')
const TYPE = require('./utils/types')

const TYPE_BY_HEX = {
    'ce6dc043': TYPE.PlaceOrder.msg[0],
    '2a2c87fa': TYPE.Transfer.msg[0],
    '166E681B': TYPE.PlaceOrder.msg[0],
};

const AUTO_TYPE = { msg: [
      { msgType: "AUTO" }
    ],
    signatures:[{
      pub_key: Buffer.from([]),
      signature: Buffer.from([]),
      account_number: 0,
      sequence: 0
    }],
    memo: "",
    source: 0,
    data: "",
    msgType:"StdTx"
};

const typeFactory = typeHex => TYPE_BY_HEX[typeHex];

/**
 * @param {string} hex
 * @param {string | class} type Transfer, placeOrder or cancelOrder
 */
module.exports = function(hex, type = 'AUTO') {
    if(typeof type === 'object') return unMarshalBinaryLengthPrefixed(Buffer.from(hex,'hex'), type).val
    else if (TYPE.hasOwnProperty(type)) {
        return unMarshalBinaryLengthPrefixed(Buffer.from(hex,'hex'), TYPE[type]).val
    }
    else if (type === 'AUTO') {
        return unMarshalBinaryLengthPrefixed(Buffer.from(hex,'hex'), Object.assign({}, AUTO_TYPE), typeFactory).val
    }
    else throw 'type should be one of the built-in types of passed in as object';
}
