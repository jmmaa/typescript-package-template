/*

To test the package as if you were consuming it as a client, install the package locally by running these commands:

```
$ npm run build

$ npm install -D file:build/<package tarball file> 
```

You can find the tarball on the build folder after you run the `npm run build` command.

Repeat these commands everytime you want to see changes on your package. 

If you do not prefer to rebuild the package for testing, you can opt into importing the files from `lib` folder

*/

import { add, mul } from "typescript-package-template";

test("build", () => {
  expect(add(1, 2, 3)).toEqual(6);

  expect(mul(4, 5, 6)).toEqual(120);
});
