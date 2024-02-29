function camelize(str) {
  let arr = str.split('-');
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return result;
}