type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
