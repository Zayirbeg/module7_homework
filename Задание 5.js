class DevicePower  {
  constructor (name, power) {
  this.name = name,
  this.power = power
  }
  }
  
class WorkDevice extends DevicePower {
  constructor (name, power, brand){
    super (name, power);
    this.brand = brand
    }
  enabled(power){ 
    if (power !== 0){
       console.log (`${this.name} включен`)}
    else {console.log (`${this.name} выключен`)}
    }  
  }
    
class Cooler extends DevicePower {
  constructor (name, power, rpm){
    super (name, power);
    this.rpm = rpm}
  enabled(power){ 
    if (power !== 0){
       console.log (`${this.name} включен`)}
    else {console.log (`${this.name} выключен`)}
    }
  }
     
class Appliance extends DevicePower {
  constructor  (name, power, temperature) {
    super (name, power);
    this.temperature = temperature}
  enabled(power){ 
    if (power ){
       console.log (`${this.name} включен`)}
    else {console.log (`${this.name} выключен`)}
    }
  }
    
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