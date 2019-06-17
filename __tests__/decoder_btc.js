const txHexDecoder = require("../index");

test('btc segwit', ()=>{
    const btcRawTx = '010000000001018c5eb9b0dc16998a093d7b14ade1f08c7e50e7850300f2b9c7ddbcb91940a6520000000017160014a766979873e93859be7ce57d2d0260abe8a4c081ffffffff03220200000000000017a914e9176b11d2e4c4fb15987fe404e6cb55f70c9236870000000000000000166a146f6d6e69000000000000001f0000000005f5e10056e400000000000017a914c7f51ad81af55f18a33dc5a95e79fe3b6e4726678702483045022100d5746ae871e84a30fec792d02656a156ea6ee2f1aecc62c05bfecb77b339ecef02206c2392c29918c01e3bceed93f62b448bdcf21f4a32e28e26be922f5234eb900a012102fe5ab04839d0fc726b0dc4a7e1a8104684c9e687bd64d3304b10538d7090e91900000000';
    let decodedTx = txHexDecoder.decodeRawUTXO(btcRawTx);
    expect(decodedTx.ins.length).toBe(1)
    expect(decodedTx.ins[0].witness).toHaveProperty('signature')
    expect(decodedTx.ins[0].witness).toHaveProperty('publicKey')
    expect(decodedTx.ins[0].witness.hashType).toBe(1)
})

test('btc p2pkh', ()=>{
    const btcRawTx = '0100000001cae51bf0c4791c6e20ee97adf5f4c2204ad3c9d42c4df7625e2918463efd3537020000006b483045022100b00341f804157ed7c564f7acc6e5cc44f115708f0f77001c0fdd38e7b2dc480a0220724c9b9162f14936b25e5c16e44827d9549f3976bb184f478c8e455e93392a650121026747a52363a3531046f5c789cb6b1d1917164e8d77b833eb63b89060bb1d04c8ffffffff0210270000000000001976a9148a99a17ee968fb47e3a446a24a49bed1f872808b88ac463b0100000000001976a9148a99a17ee968fb47e3a446a24a49bed1f872808b88ac00000000';
    let decodedTx = txHexDecoder.decodeRawUTXO(btcRawTx);
    expect(decodedTx.ins.length).toBe(1)
    expect(decodedTx.ins[0].script).toHaveProperty('signature')
    expect(decodedTx.ins[0].script).toHaveProperty('publicKey')
    expect(typeof decodedTx.outs[0].script).toBe('string')
})

test('ltc p2wpkh', ()=>{
    const ltcRawTx = '010000000001011be5a299e70b188004258e77eb66a26ede7107609b5bf75cdd2d3b82ec2d9bb201000000171600144ed20ef6efb1c1925db64648c6bc569199de2161ffffffff02a81f0b000000000017a914bdffa40b4a490984bbe6a4bbe1af6dd9cbf06a8c87649500000000000017a91443880567fe154beed716e61d4e4e3cf45453606887024730440220334e414578bc50bc85d0c65651390f8311fc83f40c4f20c4e22b765f87cb0d87022070c25ee4b3deba660ad078c597d98f1e05c1ffd004ad525ac24903f04007159c012102c44a3acfbdff560e9be4641e5679d9ef0cca3264d2e337631f4de3ae34b20ba100000000';
    let decodedTx = txHexDecoder.decodeRawUTXO(ltcRawTx);
    expect(decodedTx.ins.length).toBe(1)
    expect(decodedTx.ins[0].witness).toHaveProperty('signature')
    expect(decodedTx.ins[0].witness).toHaveProperty('publicKey')
    expect(decodedTx.ins[0].witness.hashType).toBe(1)
    expect(decodedTx.outs.length).toBe(2)
})

test('omni p2wpkh', ()=>{
    const omniRawTx = '01000000000101cae51bf0c4791c6e20ee97adf5f4c2204ad3c9d42c4df7625e2918463efd353702000000171600148a99a17ee968fb47e3a446a24a49bed1f872808bffffffff03102700000000000017a914c7f51ad81af55f18a33dc5a95e79fe3b6e472667870000000000000000166a146f6d6e69000000000000001f000000007bdbc380463b01000000000017a914e9176b11d2e4c4fb15987fe404e6cb55f70c9236870247304402202652a083badfd8697acd968e01dbe5e62ac47031c43d0e2acc62cc82ac5a546902203e9494f4535a963763f40804c5cc161483b834f9e6b36fd8bbf49c25312112340121026747a52363a3531046f5c789cb6b1d1917164e8d77b833eb63b89060bb1d04c800000000';
    let decodedTx = txHexDecoder.decodeRawUTXO(omniRawTx);
    expect(decodedTx.ins.length).toBe(1)
    expect(decodedTx.ins[0].witness).toHaveProperty('signature')
    expect(decodedTx.ins[0].witness).toHaveProperty('publicKey')
    expect(decodedTx.outs.length).toBe(3)
})

test('bch p2pkh', ()=>{
    const bchRaw = "01000000045f6f02f8cf9b1221b04850ca253379ff29be6d8f165bc059fbf169a6b1436a58000000006a47304402201acf7edeb14f511c2d8b6f819827d379aca2da51d87e9755b64413a0e6aabed302200256ae612c7f5244bfc36ef0e87de2a2b7c9b5b0cb0769dce3d96fc381ff3b66412102100dbe85cedc0651421a9d0117e363227850fffdfc9396f15989cfab26f698dcffffffff8db70621748adc2a86728cd2cf7903d146432169cec3415c964a55ad97fe933c000000006b483045022100c33d16b1a1f3c14ddc4eaa6f43d759b6abbd8d7e4435583a9274ea1588d1d5c90220438076477abbc26f96ce72cec2976ea2561771bcb5693166d2291afe6ee6f160412102100dbe85cedc0651421a9d0117e363227850fffdfc9396f15989cfab26f698dcffffffffdba70f0187a11d0674a23b20e831f41d84439caa3ffba39aab8226e8cabc7660000000006a4730440220035da2fc1651cda021be060f3d19b7da7cc57d2eea4a6b2e59e7324dabe56d8b02202d8421c521ad38561282ccbc52bee28a03e9ca29830bbbff7794e41898dddf42412102100dbe85cedc0651421a9d0117e363227850fffdfc9396f15989cfab26f698dcffffffff7400db0aa9ce34f368033ebd56c0b697c775b38805b7c056954e20df64312b5c000000006b483045022100ab63083a06c37b6f8427a50dbf4665a01482eefe353cc676dcf803322c2282c70220356e99902bacc3262f8b76a37dbaa0fee0e675a90a97406a04d0580be17b40da412102100dbe85cedc0651421a9d0117e363227850fffdfc9396f15989cfab26f698dcffffffff015fbc3600000000001976a9141b98acb2d1e2f9b19f2e5b12b87dc3a439133aae88ac00000000";
    let decodedTx = txHexDecoder.decodeRawUTXO(bchRaw);
    expect(decodedTx.ins.length).toBe(4)
    expect(decodedTx.ins[0].script).toHaveProperty('signature')
    expect(decodedTx.ins[0].script).toHaveProperty('publicKey')
    expect(decodedTx.outs.length).toBe(1)
})

test('zen', ()=>{
    const zenRaw = "01000000039cf6a56444c2a9d554d9feeb595a832cf24c8304cc90a3a6eaf30bf5594417f5000000006a47304402207fd74d64a10e46926278b7ee75d17f66cd3e52350822b3626d61d785778f6f7402201d4fbfce23d201fac3a07c39b3461916284ad9e8781cc25e2ef10f08eaa0689f81210316e2515e82198dbf1d8171b918be2fe1de780124b1ddee6da20d41a83dddfc8fffffffffdc83b99bf11c5b8ebe80ed157c0b0b28732b9005a9aa91c5b7030a9e6557e626000000006a4730440220346bd12436c7fca706db4af5404a0c485963b26b876518f8b058944b2a02a9f9022004f0762c7b15173aa5ceb6997f3485bd2d28d5f03c5ed07ecd985eb05043e68481210316e2515e82198dbf1d8171b918be2fe1de780124b1ddee6da20d41a83dddfc8fffffffffd13512370b291e180a7c9da0287c65911321105bfbdf56a6e8c7d493b4a2a4fc000000006a47304402202bb7c62c5d4ee7e6c991941746dd36ce2ec0c54b33d45536690c49f08ad7bd90022073536311ff60c8d86f38556a89cd84774a5adaee26b5a3a232c1ac0425bc296c81210316e2515e82198dbf1d8171b918be2fe1de780124b1ddee6da20d41a83dddfc8fffffffff0240420f00000000003f76a914a408ead75e89a3cebbc043310d49de5ef6daae8388ac2096bfa34fd7b9e955d9f22dcf3c0ec33736b95169cb4894ea2a502c0f0000000003766807b46fee7001000000003f76a914e1b874d42f42b738c795eda860179bb387ff343c88ac2096bfa34fd7b9e955d9f22dcf3c0ec33736b95169cb4894ea2a502c0f0000000003766807b400000000";
    let decodedTx = txHexDecoder.decodeRawUTXO(zenRaw);
    expect(decodedTx.ins.length).toBe(3)
    expect(decodedTx.ins[2].script).toHaveProperty('signature')
    expect(decodedTx.ins[2].script).toHaveProperty('publicKey')
    expect(decodedTx.outs.length).toBe(2)
    expect(typeof decodedTx.outs[0].script).toBe('string')

})