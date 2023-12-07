const student = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const strFirst = 'Строчка'
  
  function findKeys (str, obj) {
    if (obj.hasOwnProperty('name')) {
      console.log (true)}
    else {console.log (false)}}
  
  findKeys (strFirst, student)