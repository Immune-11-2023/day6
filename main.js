// Bucles

// for

// count++ = count = count + 1;
// count-- = count = count - 1;

// for (let count = 0; count < 5; count++) {
//   console.log(count);
// }

// ----

// const arr = ['Pepe', 'Luis', 'Juan'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// bucle del 1 al 100

// for (let loQueQuiera = 1; loQueQuiera <= 100; loQueQuiera++) {
//   if (loQueQuiera % 3 === 0 && loQueQuiera % 5 === 0) {
//     console.log('Hola Pepe');
//   } else if (loQueQuiera % 3 === 0) {
//     console.log('Hola');
//   } else if (loQueQuiera % 5 === 0) {
//     console.log('Pepe');
//   } else {
//     console.log(loQueQuiera);
//   }
// }

// for (let loQueQuiera = 1; loQueQuiera <= 100; loQueQuiera++) {
//   if (loQueQuiera % 3 === 0) {
//     if (loQueQuiera % 5 === 0) {
//       console.log('Hola Pepe');
//     } else {
//       console.log('Hola');
//     }
//   } else if (loQueQuiera % 5 === 0) {
//     console.log('Pepe');
//   } else {
//     console.log(loQueQuiera);
//   }
// }

// while

// let count = 1;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// const arrNumber = [];

// let num = 5;

// while (arrNumber.length < 20) {
//   if (num % 5 === 0) {
//     arrNumber.push(num);
//   }
//   num++;
// }

// console.log(arrNumber);

// do while

// const arrNumber = [];

// let num = 5;

// do {
//   if (num % 5 === 0) {
//     arrNumber.push(num);
//   }
//   num++;
// } while(arrNumber.length === 20)

// while (arrNumber.length === 20) {
//   if (num % 5 === 0) {
//     arrNumber.push(num);
//   }
//   num++;
// }

// examples

// for(/* inciar una variable */; /* condición */; /* ejecución de final de bucle */) {
// }

// for (let count = 0; count < 5; count++) {
//   console.log(count);
// }

// Utilizar un for para sumar los números de dos en dos hasta 100

// for(let pares = 0; pares <= 100; pares = pares + 2) {
//   console.log(pares);
// }

// Crear una función para dar la vuelta a un string que pasemos como parámetro

function reverseString(word) {
  let reverse = '';
  for (let index = word.length - 1; index > -1; index--) {
    console.log(index);
    reverse += word.charAt(index);
  }

  return reverse;
  // return word[9]+word[8]+...+word[0];
  //'odnum olaH';
}
// console.log(reverseString('word'));

// Pedir al usuario que introduzca un número hasta que sea mayor que 100
// prompt('Añade un número');

let number = 0;

// // if (number > 100) {
// //   console.log('Mayor');
// // }

// do {
//   number = prompt('Añade un número');
// } while(number <= 100)

// console.log(number);

// do {
//   if (num % 5 === 0) {
//     arrNumber.push(num);
//   }
//   num++;
// } while(arrNumber.length === 20)

// while (>= 100)

// funcion que se encargue se sumar el array que le pasemos --> [1, 2, 3] = 6

function sumArray() {
  const array = [1, 2, 3];
  let resultado = 0;
  for (let i = 0; i < array.length; i++) {
    resultado += array[i]; // resultado = resultado + array[i];
  }
  return resultado;
}

console.log(sumArray([1, 2, 3, 4]));

// while (arrNumber.length === 20) {
//   if (num % 5 === 0) {
//     arrNumber.push(num);
//   }
//   num++;
// }

function obj(array, obj) {
  const resultado = [];
  let posicion = 0;
  while (posicion < array.length) {
    const key = array[posicion]; // a || b --> obj.a = 1 || obj.b = 2 ?
    const value = obj[key] // key -> a = 1 || b = 2 // 1 || 2
    if (value !== undefined) {
      resultado.push(value);
    }
    posicion++; // posicion +=1; posicion = posicion + 1;
  }
  return resultado
}


console.log(obj(['a', 'b', 'c'], { a: 1, b: 2 })); // --> [1, 2]
// Object.values({a: 1, b: 2}); // --> [1, 2]

// for of

// for in
