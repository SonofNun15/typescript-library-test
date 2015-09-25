# typescript-library-test
This repository explores the idea of exporting a typescript library that can be consumed by other typescript or javascript repositories.

`library` is the sample library. It contains a simple console notification service which is instanced and exported.

This library is installed as a depedency into `consumer` using npm. `consumer` then imports this library using the ES6 module syntax (the commonjs syntax has the same issues) and tries to use it. 

To see a more complicated example of this working "in the wild," check out these open source repositories we are building at Renovo Solutions:
* https://github.com/RenovoSolutions/TypeScript-Angular-Utilities
* https://github.com/RenovoSolutions/TypeScript-Angular-Components 

Typescript-Angular-Utilities is a library of general purpose utilities for angular. This library will be consumed (working on that part now) by the components library, which will contain useful reusable UI components for angular projects.
