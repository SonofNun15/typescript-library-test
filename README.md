# typescript-library-test
This repository explores the idea of exporting a typescript library that can be consumed by other typescript or javascript repositories.

`library` is the sample library. It contains a simple console notification service which is instanced and exported.

This library is installed as a depedency into `consumer` using npm. `consumer` then imports this library using the ES6 module syntax (the commonjs syntax has the same issues) and tries to use it. 
