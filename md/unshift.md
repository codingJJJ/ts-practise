```ts
实现类型版本的 Array.unshift。

举例，

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

// answer
type Unshift<T extends any[], U> = [U, ...T]
```