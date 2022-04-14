require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember equip inner kiwi off giant'; 
let testAccounts = [
"0x820c492ff8695ddabdb0e3fdd58e821c2debbb7aed93a9c792a1087f3f5f95c4",
"0x98ede5e5906c46217926a077fd553d34f08fdaa9e9eccd4f6c379f61d18ad0c2",
"0xb2d2f5b95cebafab9a68af38f233431b455bd5fb5fe6dd36416796759280af22",
"0x0aa7338dd6f4cc19d5407ff4004207e562ffc9f94caef543772fcef0a79574b9",
"0xfbc34a0ec94ffd6661f1778c1c2ce662ece62c50014b7f471da535d778a038a5",
"0xbec617bd2f18cb3261f38584fea275b5a859ffc3e3a7a182c297f9d82f0c84c3",
"0x17ed3deccb6758897f9deee10a81558e8918a295a833406f960a92a4b42376e2",
"0x2b415be5f82c93868142613340c53573aece694aeeea56761b668903d1361caa",
"0xe804980521839a395ccbc09427bfe37cf3d120742b8e147cb658c42b142606e8",
"0xbff4c8ac1c42df56baddd638db64c13ea0f99d9bc8035ff4bb5bdce948ce3dda"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


