# Typescript Package Template

This repository provides a minimal and robust template for getting started on your own pure Typescript package. It is barebones and uses Typescript CLI as its build tool.

You can also use this template for simply learning how to get started on making your own Typescript package.

## Get Started

Clone the repo with your preferred project name

```
git clone https://github.com/jmmaa/typescript-package-template.git <your package name>
```

Specify project details

```js
// package.json

{
    "name": "your-package-name",
    ...
}
```

Then run

```
npm install
npm run build
```

Then test if everything is working properly

```
npm test
```

If you're developing

```
npm run dev
```

## Test Your Package Locally (Optional)

By default, the template is only capable of testing your package by importing your generated library code from `/lib` to the `/tests` directory. This is for fast development process.

If you want to test your package as if you're the consumer

```
npm run build
npm install -D file:build/<your package tarball name>
```

> **Note:** You have to rebuild the package by repeating the commands above if you want to have updated changes.

Now you can write tests using the name of your package

```typescript
import { add, mul } from "typescript-package-template";

test("build", () => {
  expect(add(1, 2, 3)).toEqual(6);

  expect(mul(4, 5, 6)).toEqual(120);
});
```

## References

- [Typescript Docs](https://www.typescriptlang.org/docs)
- [Typescript Deep Dive](https://basarat.gitbook.io/typescript/library)
- [How to Test a Node (npm) Package Locally](https://javascript.plainenglish.io/how-to-test-a-node-package-locally-8dde33e642df)
- [How to configure Jest with TypeScript](https://swizec.com/blog/how-to-configure-jest-with-typescript/)
