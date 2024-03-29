function sumSalary(salaries) {
  let sum = 0;
  
  for (let key in salaries) {
    if (typeof salaries[key] !== 'number' || isNaN(salaries[key]) || !isFinite(salaries[key])) {
      continue
    }
    sum += salaries[key];
  }
  return sum;
}