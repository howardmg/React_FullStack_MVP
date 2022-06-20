fetch("http://localhost:5555/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
