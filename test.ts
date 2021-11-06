const toutle = ["a", "b", "c"] as const;

type ToupleToObject<T extends readonly any[]> = {  [ K in T[number]]: T[K] } 

const test: ToupleToObject<typeof toutle> = {
  a: "a",
  b: "b",
  c: "c"
}