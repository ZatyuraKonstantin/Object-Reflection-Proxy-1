// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function orderByProps(obj, props) {
    const propsArray = [];
    const sortedArray = [];
    for (const key in obj) {
       if (props.includes(key)) {
         propsArray.push({ key, value: obj[key] });
       } else {
         sortedArray.push({ key, value: obj[key] });
     }
   }
 
    sortedArray.sort((a, b) => (a.key > b.key ? 1 : -1));
    const result = [...propsArray, ...sortedArray]
    return result;
 }
