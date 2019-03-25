for (i = 1; i < 30; i++) {
  if ((i % 3 == 0) & (i % 5 !== 0)) {
    console.log("fiz");
  } else if ((i % 5 == 0) & (i % 3 !== 0)) {
    console.log("buz");
  } else if ((i % 3 == 0) & (i % 5 == 0)) {
    console.log("kuzbus");
  } else {
    console.log(i);
  }
}
