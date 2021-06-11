
import FabricClient from "./FabricClient"

(async () => {
  console.log('start')
  const fabricClient = new FabricClient()


  await fabricClient.connectNetwork()

  // CreateUser
  await fabricClient.invokeChaincode('CreateUser', ['1', 'John', 'john@g.com'])
  await fabricClient.invokeChaincode('CreateUser', ['2', 'Eric Lin', 'eric@g.com'])

  // UserExists
  const userExistsResult = await fabricClient.queryChaincode('UserExists', ['1'])
  console.log('userExistsResult:', userExistsResult)

  // GetUser
  const getUserResult = await fabricClient.queryChaincode('GetUser', ['1'])
  console.log('getUserResult', getUserResult)

  // UpdateUser
  await fabricClient.invokeChaincode('UpdateUser', ['1', 'updateName', 'updateEmail'])

  // DeleteUser
  await fabricClient.invokeChaincode('DeleteUser', ['2'])

  // GetAllUsers
  const getAllUsersResult = await fabricClient.queryChaincode('GetAllUsers', [])
  console.log('getAllUsersResult', getAllUsersResult)


  console.log('closeNetwork')
  fabricClient.closeNetwork()
})();