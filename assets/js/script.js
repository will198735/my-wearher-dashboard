var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function() {

    // fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=7b0b7cf6e3d4a04100b0ee30f0319a75')
    
// this API works with the city of berkeley only
    fetch("https://api.openweathermap.org/data/2.5/weather?q=berkeley&appid=e57d555e0392d22a3b1302daa069abd0")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

     name.innerHTML = nameValue;
     temp.innerHTML = tempValue;
     desc.innerHTML = descValue;


    })
     
      
      
    
    .catch(err => alert('Something went wrong!'))
})
 