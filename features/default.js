// EXAMPLE 1

// Set default value if none is provided
let sayHello = (name = 'world') => {
  console.log('Hello ' + name + '!');
}

sayHello();
sayHello('Sandra');

// EXAMPLE 2
//This function expects a user object. If none provided, default is used.
let greetUser = (user = {name: 'Anonymous'}) => {
  console.log('Hello hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Sandra'});
