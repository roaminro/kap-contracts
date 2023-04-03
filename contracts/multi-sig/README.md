# Multi-signature Contract

The multi-signature contract allows for adding multi-signature capability to a Koinos account. This contracts adds multi-sig to all 3 types of authorizations available on Koinos:
  - contract_call: checks if the multi-sig account is authorized to call a contract.
  - transaction_application: checks if an account can consume the multi-sig account's Ressources Credits (RC), aka Mana.
  - contract_upload: checks if the multi-sig account's contract can be updated.

This contract is composed of the 3 following entry points:

- add_signer: adds a new authorized signer to the multi-sig contract. All the authorized signers and the new signer being added must sign the transaction. The contract signature is required when there are no authorized signers setup (e.g.: the first time using the contract).

- remove_signer: removes an authorized signer. All the authorized signers except for the signer being removed must sign the transaction.

- get_signers: gets a list of the current authorized signers.

## Use the multi-sig contracts to manage another contract
You can easily use the multi-sig contract to add multi-signature capability to another contract. You can simply override the `authorize` method of a contract and forward all `authorize` request to the multi-sig contract. Here's an example of such implementation:

```ts
// override the authorize entry point
authorize(args: authority.authorize_arguments): authority.authorize_result {
  // set the multi-sig contract address
  const MULTI_SIG_CONTRACT_ID = Base58.decode("1D....");

  // forward the authority request to the multi-sig contract
  return new authority.authorize_result(
    System.checkAuthority(
      args.type, 
      MULTI_SIG_CONTRACT_ID
    )
  );
}
```

## Build
```sh
# build the debug version
yarn build:debug
# or
yarn exec koinos-sdk-as-cli build-all --generate_authorize debug 0 multisig.proto

# build the release version
yarn build:release
# or
yarn exec koinos-sdk-as-cli build-all --generate_authorize release 0 multisig.proto
```

## Test/CI
```sh
# run the ci witin a dev container
yarn local-ci

# run the ci outside of a dev container
yarn ci
```