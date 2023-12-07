function DevicePower (name, power) {
  this.name = name,
  this.power = power
  }
  
  function WorkDevice (name, power, brand) {
    this.name = name
    this.power = power
    this.brand = brand
    this.enabled = function (){ 
    if (power !== 0){
       console.log (`${this.name} включен`)}
    else {console.log (`${this.name} выключен`)}
    }
  }
    
  WorkDevice.prototype = new DevicePower ();
  
  function Cooler (name, power, rpm) {
    this.name = name
    this.power = power
    this.rpm = rpm
    this.enabled = function (){ 
    if (power !== 0){
       console.log (`${this.name} включен`)}
    else {console.log (`${this.name} выключен`)}
    }
  }
    
  Cooler.prototype = new DevicePower ();
  
  function Appliance (name, power, temperature) {
    this.name = name
    this.power = power
    this.temperature = temperature
    this.enabled = function (){ 
    if (power !== 0){
       console.log (`${this.name} включен`)}
    else {console.log (`${this.name} выключен`)}
    }
  }
    
  Appliance.prototype = new DevicePower ();
  
  const fan = new Cooler ('Вентилятор', 200, 1500)
  const computer = new WorkDevice ('Компьютер', 500, 'MSI')
  const fridge = new Appliance ('Холодильник', 0, 3);
  
  fan.enabled ()
  computer.enabled ()
  fridge.enabled ()
  
  let arr = [fan.power, computer.power, fridge.power];
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    }
      
  console.log ('Суммарная мощность включенных электроприборов равна '+sum)