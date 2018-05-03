// function findArrayQuadruplet(arr, s) {
//   if (arr.length < 4) return [];

//   let sorted = arr.sort();

//   let result = [];
//   let target = s;

//   for (let i = 0; i < sorted.length; i++) {
//     for (let j = i + 1; j < sorted.length; j++) {
//         for (let k = j + 1; k < sorted.length; k++) {
//           for (let l = k + 1; l < sorted.length; l++) {
//             let sum = sorted[i] + sorted[j] + sorted[k] + sorted[l];
//             if (sum === target) {
//               result.push(sorted[i], sorted[j], sorted[k], sorted[l]);
//               return result
//             }
//           }
//         }


//     }
//   }
//   return [];
// }


function findArrayQuadruplet(arr, s) {
  if (arr.length < 4) return [];
  let sorted = arr.sort(function(a, b) { return a - b });
  let result = [];
  let target = s;
  let map = {};
  console.log(sorted)

  for (let i = 0; i < sorted.length; i++) {
    map[sorted[i]] = i;
  }

  for (let j = 0; j < sorted.length; j++) {

    for (let k = 0; k < sorted.length; k++) {

      for (let l = 0; l < sorted.length; l++) {

        let currentSum = sorted[j] + sorted[k] + sorted[l];

        if (map[target - currentSum]) {
          result.push(sorted[j], sorted[k], sorted[l], map[target - currentSum])
          return result;
        }
      }

    }
  }

  
}


let array = [2,7,4,0,9,5,1,3];
const target = 20;
//expect [0, 4, 7, 9]
console.log(findArrayQuadruplet(array, target));