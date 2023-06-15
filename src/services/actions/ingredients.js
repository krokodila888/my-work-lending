/*import { api } from '../../utils/Api';

import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS
} from "../../utils/constants";

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS
    })
    api.getIngredients().then( res  => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data
        })
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    }).catch( err => {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      })
    })
  }
} */
/*var uniqueInOrder=function(iterable){
  let aaa = [];
  if (iterable.isArray) iterable.forEach((item, index) => {
    if (index === 0) return aaa.push(item);
    if (index !== 0 && item !== iterable[index - 1]) return aaa.push(item) 
  });
  else iterable.split('').forEach((item, index) => {
    if (index === 0) return aaa.push(item);
    if (index !== 0 && item !== iterable[index - 1]) return aaa.push(item) 
  })
  return aaa
}*/

/*var uniqueInOrder=function(iterable){
  let aaa = [];
  let bbb;
  if (typeof(iterable) === 'string') 
  {bbb = iterable.split('')} else {bbb = iterable};
  bbb.forEach((item, index) => {
    if (index === 0) aaa.push(item);
    if (index !== 0 && item !== iterable[index - 1]) aaa.push(item) 
  })
  return aaa
}

console.log(uniqueInOrder('AAAABBBBBBSSSAA'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));*/

/*function aaa(N, staff, K) {
  return staff
  .sort(( a, b ) =>  b - a)
  .splice(0, K)
  .reduce((sum, item) => sum + item, 0);
};*/

/*function aaa1(N, staff, K) {
  let res = 0;
  if (K > N) return staff.reduce((sum, item) => sum + item, 0);
  else {
    let i = 0;
    while (i < K) {
    res = res + Math.max(...staff);
    staff.splice(staff.indexOf(Math.max(...staff)), 1);
    i++;
  }
return res};
}*/

/*function aaa1(N, staff, K) {
  let bbb = staff;
  let res = [];
  let i = 0;
  while (i < N - K) {
    let res1 = [];
    res1 = bbb.filter(item => {
    let count = 0;
    if ((count !== 0) && (item !== Math.min(...staff))) {count++; console.log((count === 0)); return item};});
    bbb = res1;
    console.log(bbb);

  i++;
}
return bbb.reduce((sum, item) => sum + item, 0)
};*/

function aaa1(N, staff, K) {
  let bbb = 0;
  let i = 0;
    while (i < K) {
      bbb = bbb + Math.max(...staff);
    staff.splice(staff.indexOf(Math.max(...staff)), 1);
    console.log(bbb);
  console.log(staff);
    i++;}

return bbb
};

/*function aaa(N, staff, K) {
  staff
  .sort(( a, b ) =>  a - b)
  .splice(0, N - K);
  let res = 0;
  staff.forEach(i => res = res + i);
  return res
};*/

console.log(aaa1(7, [2, 1, 3, 3, 1, 1, 3], 2))


