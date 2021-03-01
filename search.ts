interface Search {
  array: number[];
  num: number;
  search(array: number[], num: number): string;
}

class linealSearch implements Search {
  array: number[];
  num: number;
  constructor(array: number[], num: number) {
    this.array = array;
    this.num = num;
  }
  public search(array: number[], num: number): string {
    let i: number;
    let msj: string;
    for (i = 0; i < array.length; i++) {
        if (num === array[i]) {
        msj = num + " fue hallado en la posicion " + i + " del arreglo";
        break;
      } else {
        msj = num + " no esta en el arreglo";
      }
    }
    return msj;
  }
}
class binarySearch implements Search {
  array: number[];
  num: number;
  constructor(array: number[], num: number) {
    this.array = array;
    this.num = num;
  }
  public OrderBinary(): any {
    const l = this.array.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1],
            this.array[j],
          ];
        }
      }
    }

    return this.array;
  }
  public search(array: number[], num: number): string {
    let list = this.OrderBinary();
    let first = 0; //left endpoint
    let last = list.length - 1; //right endpoint
    let position = -1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
      middle = Math.floor((first + last) / 2);
      if (list[middle] === num) {
        found = true;
        position = middle;
      } else if (list[middle] > num) {
        //if in lower half
        last = middle - 1;
      } else {
        //in in upper half
        first = middle + 1;
      }
    }
    if (position < 0) {
      return num + " No fue hallado en el arreglo";
    } else {
      return num + " fue hallado en la posicion " + position + " del arreglo";
    }
  }
}
//searcher
const array = [10, 4, 40, 32, 67];
const array1 = [1, 2, 3, 4, 5, 4, 8]
const prueba: linealSearch = new linealSearch(array1, 1);
const prueba2: binarySearch = new binarySearch(array, 1);
const result = prueba2.search(array, 67);
console.log(array);
console.log(array1);
console.log(result);
console.log(prueba.search(array1, 12));
