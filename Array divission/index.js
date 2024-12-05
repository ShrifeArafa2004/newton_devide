let arr = window.prompt('Enter main array :').split(' ');
let input_array = [];
arr.map(function (el) {
  input_array.push(+el);
});
let sub_array = 0;
let [array_of_subarrys_without_null_arrays, array_of_sums, array_contain_sub_arrays] = [[], [], []];
for (let o = 0; o < input_array.length; o++) {
  for (let f = 0; f < input_array.length; f++) {
    sub_array = input_array.slice(o, f + 1);
    array_contain_sub_arrays.push(sub_array);
  }
}
array_contain_sub_arrays.map(function (el) {
  if (el.length != 0) array_of_subarrys_without_null_arrays.push(el);
});
// console.log(array_of_subarrys_without_null_arrays);
array_of_subarrys_without_null_arrays.map(function (el) {
  array_of_sums.push(Get_sum_of_each_subarray(el));
});
console.log(Get_max_of_subarrays_sum(array_of_sums));
// console.log(array_of_sums);
function Get_sum_of_each_subarray(el) {
  let sum = 0;
  el.map(function (els) {
    sum += els;
  });
  return sum + ' arr ' + `[${el}]`;
}
function Get_max_of_subarrays_sum(el) {
  let max = el[0];
  el.map(function (els) {
    if (els > max) max = els;
  });
  return max;
}
