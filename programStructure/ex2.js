let string = " # # # #";
for (let i = 0; i < 8; i++) {
  if(!(i % 2)){
    console.log(string);
  }
  else console.log(string.split("").reverse().join(""));
  
}

