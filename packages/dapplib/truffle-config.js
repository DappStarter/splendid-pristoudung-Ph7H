require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind atom harvest option bridge tumble'; 
let testAccounts = [
"0xea6aeafe25d8148d67ea01d5f4b3c3ff182fdf7bfea88d81b6536d02de0af1d5",
"0x94ccab8eb0a3d2b1e6727eecf7266c1e35c064a160331b7c780db0a971f4268f",
"0xb883e2878ba2c4607ef383f59730f92a3d35adca7db7df5916531e3489d136f6",
"0x789e53b67cf3f56f7e2ee41dd3e737c12ea545eea5473d0bdda51c32beb40d68",
"0xfe96c1d9ac02f1235695d5451c78ca1f7d11c5aba38baee2012a53a09d5c6041",
"0x9c8d30478d5c2de42c4118b7329a1eb5a3f11fa98af685212a0f57adbf6c3ae5",
"0xb7eb5e2a103009591da321edd670a3b5b0fd266e344ca163d0712dc81469022b",
"0xc60a054202cea94a03d693c081c1cd1b0901caaed847ae10a56dcd7d2bdf176c",
"0x311a286a2f493504b243e63f9d4417e302e8cea376b621c1a9399e7880d20f4b",
"0x34fe44ae872052789f724c46c1c766019144f543965009a02b8a6fe58256224c"
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


