function factorial(n) {
  let res = 1;
  let i = 1;
  do {
    res = res * i
    i++;
  }  
  while (i<=n);
return (res);
}
