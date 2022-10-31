let user = {

    name: "Chris",

    age: 24,

  };

  // create a new function that we will use as an object method

  function sayHi() {

    alert("Hello!");

  }

  // then add the previously created method

  user.sayHi = sayHi;

  // this will print username on the screen

  document.getElementById("demo").innerHTML = "Hi " + user.name;

  //user.sayHi(); // this will create an alert, Hello!

  document.getElementById("click me").onclick = user.sayHi;
