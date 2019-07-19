const txHexDecoder = require("../index"); 

test('bnb send', ()=>{
    let bnbSend = 'ce01f0625dee0a4a2a2c87fa0a210a14d1a42a815fc6a339ecd8bfcd093dd1a835f40e1312090a03424e4210e8922612210a14e0a17a3ec9ddfd1d9c8b4e17df0622c679ffa89812090a03424e4210e89226126f0a26eb5ae987210298013db8d32124d1c11570cd37f8e52297bd18ea561cf990907f7aa03e486d6c1240ee378db6506d180dee42fdc54157c562fdd4d047a9c1c33ef407af6bd435a9023a2e0ebdb3061943a88b3a434d6b2ba8a4c970db218bd38fecf9796de973a43d182720cc011a097369676e61747572652001';
    let decodedTx = txHexDecoder.decodeBnbRawTx(bnbSend, 'Transfer');
    expect(typeof decodedTx).toBe('object')
    expect(decodedTx).toHaveProperty('msg')
    expect(decodedTx).toHaveProperty('signatures')
    expect(decodedTx).toHaveProperty('msgType')
}, 3000)

test('bnb auto', () => {
    const placeOrder = "E201F0625DEE0A67CE6DC0430A14731479905B7D0704F81B621CD5B19018EED019EC122D373331343739393035423744303730344638314236323143443542313930313845454430313945432D333832301A0B444F532D3132305F424E4220022802309B8B03388088F6D8BD04400112710A26EB5AE9872103A1BB9F23D0A4CA474AA686D25275B6BC3D2F6FCEB4A253F8D6EEA105A2BB555C124058537CEBEEF18863924A17A781A056FE3B1520C60D1F7DD940882B0EC21788DE35BCEF4E3FDEB03C1C3469C5CA5F82E3A18D0ED18342A7CA10EC838DAD20F03618E7E30520EB1D2001";
    let decodedTx = txHexDecoder.decodeBnbRawTx(placeOrder);
    console.log('Decoded tx', decodedTx)
    expect(typeof decodedTx).toBe('object')
    expect(decodedTx).toHaveProperty('msg')
    expect(typeof decodedTx.msg[0].sender).toBe('object')
    expect(decodedTx.msg[0].id).toBe('731479905B7D0704F81B621CD5B19018EED019EC-3820')
    expect(decodedTx.msg[0].ordertype).toBe(2)
    expect(decodedTx.msg[0].quantity).toBe(154000000000)
});

test('bnb anotherPlaceOrder', () => {
    const placeOrder = "E201F0625DEE0A67CE6DC0430A14731479905B7D0704F81B621CD5B19018EED019EC122D373331343739393035423744303730344638314236323143443542313930313845454430313945432D333832301A0B444F532D3132305F424E4220022802309B8B03388088F6D8BD04400112710A26EB5AE9872103A1BB9F23D0A4CA474AA686D25275B6BC3D2F6FCEB4A253F8D6EEA105A2BB555C124058537CEBEEF18863924A17A781A056FE3B1520C60D1F7DD940882B0EC21788DE35BCEF4E3FDEB03C1C3469C5CA5F82E3A18D0ED18342A7CA10EC838DAD20F03618E7E30520EB1D2001";
    let decodedTx = txHexDecoder.decodeBnbRawTx(placeOrder, 'PlaceOrder');
    console.log('Decoded tx', decodedTx)
    expect(typeof decodedTx).toBe('object')
    expect(decodedTx).toHaveProperty('msg')
    expect(typeof decodedTx.msg[0].sender).toBe('object')
    expect(decodedTx.msg[0].id).toBe('731479905B7D0704F81B621CD5B19018EED019EC-3820')
    expect(decodedTx.msg[0].ordertype).toBe(2)
    expect(decodedTx.msg[0].quantity).toBe(154000000000)
})

test('bnb placeOrder', ()=>{
    let placeOrder = "de01f0625dee0a66ce6dc0430a14ba36f0fad74d8f41045463e4774f328f4af779e5122b424133364630464144373444384634313034353436334534373734463332384634414637373945352d33331a0d4144412e422d4236335f424e42200228013080c2d72f3880c2d72f4001126e0a26eb5ae98721029729a52e4e3c2b4a4e52aa74033eedaf8ba1df5ab6d1f518fd69e67bbd309b0e1240851fc9542342321af63ecbba7d3ece545f2a42bad01ba32cff5535b18e54b6d3106e10b6a4525993d185a1443d9a125186960e028eabfdd8d76cf70a3a7e3100182220202001";
    let decodedTx = txHexDecoder.decodeBnbRawTx(placeOrder, 'PlaceOrder');
    expect(typeof decodedTx).toBe('object')
    expect(decodedTx).toHaveProperty('msg')
    expect(decodedTx).toHaveProperty('signatures')
    expect(decodedTx).toHaveProperty('msgType')
})

test('bnb cancelOrder', ()=>{
    let cancelOrder = 'd001f0625dee0a58166e681b0a14ba36f0fad74d8f41045463e4774f328f4af779e5120f42434853562e422d3130465f424e421a2b424133364630464144373444384634313034353436334534373734463332384634414637373945352d3239126e0a26eb5ae98721029729a52e4e3c2b4a4e52aa74033eedaf8ba1df5ab6d1f518fd69e67bbd309b0e1240d93fb0402b2b30e7ea08e123bb139ad68bf0a1577f38592eb22d11e127f09bbd3380f29b4bf15bdfa973454c5c8ed444f2e256e956fe98cfd21e886a946e21e5182220212001';
    let decodedTx = txHexDecoder.decodeBnbRawTx(cancelOrder, 'CancelOrder');
    expect(typeof decodedTx).toBe('object')
    expect(decodedTx).toHaveProperty('msg')
    expect(decodedTx).toHaveProperty('signatures')
    expect(decodedTx).toHaveProperty('msgType')
})

test('bnb base64', ()=>{
    let txn = "xgHwYl3uCkwqLIf6CiIKFJGTdSD0BFj1tBTSZ5YbRsGXid1wEgoKA0JOQhDA0eEjEiIKFEYLfJ9Eg666OgnnNNBoO+8TYkdaEgoKA0JOQhDA0eEjEnAKJuta6YchA1bgpYA4mm/SzJHNUlxtWk2AVK9w3xdITlhnj59XSgtNEkBiVAL8/DmusweaMjwhhC4FKIedREnOsvbSxJjLXp0Ti2MI8K03X0tuFxpBlQSoHoW4CkIs+sJnPsSuT0HzAVVLGDMg6u8EIAI=";
    let txnDt = Buffer.from(txn, "base64").toString('hex');
    
    class Token {
    constructor(opts) {
        opts = opts || {}
        this.denom = opts.denom || ""
        this.amount = opts.amount || 0
    }
    }

    class Input {
    constructor(opts) {
        opts = opts || {}
        this.address = opts.address || Buffer.alloc(0)
        this.coins = opts.coins || [new Token()]
    }
    }

    class Output {
    constructor(opts) {
        opts = opts || {}
        this.address = opts.address || Buffer.alloc(0)
        this.coins = opts.coins || [new Token()]
    }
    }

    class NewOrderMsg {
        constructor(opts) {
            opts = opts || {}
            this.sender = Buffer.alloc(0)
            this.id = ""
            this.symbol = ''
            this.orderType = 2
            this.side = 2
            this.price = 0
            this.quantity = 0
            this.timeinforce = false
            this.msgType = "NewOrder"
        }
    }

    class MsgSend {
    constructor(opts) {
        opts = opts || {}
        this.inputs = opts.inputs || new Input()
        this.outputs = opts.outputs || new Output()
        
        this.msgType = "MsgSend"
    }
    }

    class StdSignature {
    constructor(opts) {
        opts = opts || {}
        this.pub_key = opts.pub_key || Buffer.from([])
        this.signature = opts.signature || Buffer.from([])
        this.account_number = opts.account_number || 0
        this.sequence = opts.sequence || 0
    }
    }

    class stdTx {
        constructor(opts) {
            opts = opts || {}
            this.msgs = opts.msgs || [new MsgSend()]
            this.signatures = opts.signatures || new StdSignature()
            this.memo = opts.memo || ""
            this.source = opts.source || 0
            this.data = opts.data || Buffer.alloc(0)
            
            this.msgType = "stdTx"
        }
    }

    // const decodeType = new stdTx()
    // let decodedTx = txHexDecoder.decodeBnbRawTx(txnDt, decodeType)
    // expect(typeof decodedTx).toBe('object')
    // expect(decodedTx).toHaveProperty('msgs')
    // expect(decodedTx).toHaveProperty('signatures')
    // expect(decodedTx).toHaveProperty('msgType')

    // const anotherTxStr = "xgHwYl3uCkwqLIf6CiIKFD7DoJG6NNkkhYusYi75a1ei0OsaEgoKA0JOQhD4xskBEiIKFC1EAy1ID+Cd+mqnpaHhQYP3qURiEgoKA0JOQhD4xskBEnAKJuta6YchA6KD0zw25KvLJTbaXU2sM3d1NO6IkztyOJCeoZuZBXvQEkAhsIX6n+7mBrXHu3Tj5VD2hq/yJE1lH88mnNMWfnGGl3mlZSLwMBZHdl1eh3TgEHh+tYfQFT/WxbXGd7nKbtQSGNiFBiADIAE=";
    const anotherTxStr = "4gHwYl3uCmfObcBDChRzFHmQW30HBPgbYhzVsZAY7tAZ7BItNzMxNDc5OTA1QjdEMDcwNEY4MUI2MjFDRDVCMTkwMThFRUQwMTlFQy0zODIwGgtET1MtMTIwX0JOQiACKAIwm4sDOICI9ti9BEABEnEKJuta6YchA6G7nyPQpMpHSqaG0lJ1trw9L2/OtKJT+NbuoQWiu1VcEkBYU3zr7vGIY5JKF6eBoFb+OxUgxg0ffdlAiCsOwheI3jW8704/3rA8HDRpxcpfguOhjQ7Rg0KnyhDsg42tIPA2GOfjBSDrHSAB"
    //const anotherTxHex = Buffer.from(anotherTxStr, 'base64').toString('hex');
    const anotherTxHex = "E201F0625DEE0A67CE6DC0430A14731479905B7D0704F81B621CD5B19018EED019EC122D373331343739393035423744303730344638314236323143443542313930313845454430313945432D333832301A0B444F532D3132305F424E4220022802309B8B03388088F6D8BD04400112710A26EB5AE9872103A1BB9F23D0A4CA474AA686D25275B6BC3D2F6FCEB4A253F8D6EEA105A2BB555C124058537CEBEEF18863924A17A781A056FE3B1520C60D1F7DD940882B0EC21788DE35BCEF4E3FDEB03C1C3469C5CA5F82E3A18D0ED18342A7CA10EC838DAD20F03618E7E30520EB1D2001";
    const anotherTx = new stdTx();
    anotherTx.msgs = [new NewOrderMsg()]
    const anotherTxDecoded = txHexDecoder.decodeBnbRawTx(anotherTxHex, anotherTx);
    // console.log(anotherTxDecoded);
    console.log('TX', anotherTxDecoded.msgs[0]);
}
)