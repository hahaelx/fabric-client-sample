# fabric-network
hyperledger fabric 2.0 network node sdk sample

Using fabric-network interactive with hyperledger fabric 2.0 chaincode.


edit ./src/config.ts file
sample:
```
export const config = {
  mspId: 'Org1MSP',
  identity: 'Admin@org1.example.com',
  channelName: 'users',
  chaincodeId: 'users',
  certPath: '../metadata/Admin@org1.example.com-cert.pem',
  privPath: '../metadata/priv_sk',
  connectionProfilePath: '../metadata/connection-org1.json'
}

```


```
npm i
npm run dev
```