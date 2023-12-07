const person = {
    city: "Piter",
  }
  
  const student = Object.create(person);
  
  student.ownCity = "Moscow";
  
  student.age = 23;
  
  function findEntriesOfObj (obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (obj.hasOwnProperty(key, value)) {
          console.log(`${key}: ${value}`); 
      }   
  }}
  
  findEntriesOfObj (student)