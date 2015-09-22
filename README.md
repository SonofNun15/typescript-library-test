# typescript-library-test
This repository demostrates an issue that I am having getting webpack with ts-loader to work with a TypeScript library.

`library` is the sample library. It contains a simple console notification service which is instanced and exported.

This library is installed as a depedency into `consumer` using npm. `consumer` then imports this library using the ES6 module syntax (the commonjs syntax has the same issues) and tries to use it. 

Building `consumer` with `tsc` works fine on `tsc` version 1.6.2. Running webpack results in the following error:

```
ERROR in ./source/app.ts
Module not found: Error: Cannot resolve module 'library' in /Users/josh/Dev/ts-libraries/consumer/source
 @ ./source/app.ts 1:16-34
```

## Steps to Reproduce
* Checkout this repository
* Go to the `library` folder and run `tsc`
* Go to the `consumer` folder and run `npm install`
* Run `webpack`

You should see the same error.
