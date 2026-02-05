## Differences Between Interface and Types

1. - interface forms in key value pair. whereas types forms in line variable assignment.

2. - interface can be duplicate. typescript will merge them. but type can't be duplicate.

3. - interface mostly used for bigger or combination of types like objects and functions. In the other hand type used for smalled type declaration like variables.

## Use of keyof keyword in TypeScript

1. - keyof used to extract keys of an interface

```
    interface User{
        id: string;
        name: string;
        age: number;
    }

    type UserKeys = keyof User;
```