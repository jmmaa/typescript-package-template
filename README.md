# Typescript Package Template

This repository provides a minimal and robust template for getting started on your own pure Typescript package. It is barebones and uses Typescript CLI as its build tool.

You can also use this template for simply learning how to get started on making your own Typescript package.

## Get Started

Let's say I want to make a package named "my-cool-package"

Create a new [repo](https://github.com/jmmaa/typescript-package-template/generate) or clone this
```
git clone https://github.com/jmmaa/typescript-package-template.git my-shiny-new-package
```

Specify project details

```json
// package.json
{
    "name": "my-shiny-new-package",
    ...
}
```

Then run

```
npm install
npm run build
```
This will generate the library code into the `/lib` directory.


Test if everything is working properly

```
npm test
```

If you're developing 

```
npm run dev
```

## Test Your Package Build Locally (Optional)

If you want to test your package as if you're the consumer

Build the package tarball
```
npm run build
```
Install the package locally from the tarball
```
npm install -D file:build/my-shiny-new-package
```
> **Note**: you can find the package tarball inside the `/build` folder after running `npm run build`

Now you can import your package using its name!

```typescript
import { add, mul } from "my-shiny-new-package";

test("build", () => {

  expect(add(1, 2, 3)).toEqual(6);

  expect(mul(4, 5, 6)).toEqual(120);
});
```
The local package is decoupled from the project, so you will need to install it again to reflect the changes you've made

```
npm install my-cool-package
```

## References

- [Typescript Docs](https://www.typescriptlang.org/docs)
- [Typescript Deep Dive](https://basarat.gitbook.io/typescript/library)
- [How to Test a Node (npm) Package Locally](https://javascript.plainenglish.io/how-to-test-a-node-package-locally-8dde33e642df)
- [How to configure Jest with TypeScript](https://swizec.com/blog/how-to-configure-jest-with-typescript/)
