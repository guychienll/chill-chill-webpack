const obj = {
  name: "John",
  age: 30,
};

const sayHello = (name: string) => {
  console.log(`Hello, ${name}!`);
};

sayHello(obj.name);
