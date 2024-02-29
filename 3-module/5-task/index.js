function getMinMax(str) {
  let items = str.split(' ');
  let num = [];

  for (let item of items) {
    let number = parseFloat(item);
    if (!isNaN(number)) {
      num.push(number);
    }
  }

  let max = Math.max(...num);
  let min = Math.min(...num);

  return { 
    min,
    max 
  };
}
