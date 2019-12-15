interface Lengthwise {
  length: number;
}

function logging<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

logging([1, 2, 3])

export default logging

class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value)
  }
}

let arr = new MyArray<number>()
arr.add(100)

interface CreateArrayFunc<T> {
  (length: number, value: T): T[]
}

let createArray: CreateArrayFunc<string> = function <T>(length: number, value: T): T[] {
  let result = []
  for (let i = 0; i < length; i++) {
    result.push(value)
  }
  return result
}

createArray(5, 'x')
