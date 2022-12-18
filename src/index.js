console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const message = data.message;
    for(let i=0; i<message.length; i++){
       const id = document.getElementById("dog-image-container");
       const img = document.createElement("img")
       img.setAttribute("src",message[i])
       id.append(img)
       
    }
  });


  const ul = document.getElementById("dog-breeds")

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function (data){

    const obj = data.message

    const iterationLength = Object.keys(obj).length
  
    for(let i =0; i<iterationLength; i++){
      const li = document.createElement("li")
   
      li.innerHTML = Object.keys(obj)[i]
      document.getElementById("dog-breeds").append(li)

  li.addEventListener('click', changeFontColor)    
  function changeFontColor(){
    li.style.color = '#ff0000'
    }

  }
  for(let i=0; i<4; i++){
    const listSelect = document.querySelector('#breed-dropdown')
    listSelect.addEventListener('change', filterBreed)
  }

function filterBreed() {
  document.getElementById('dog-breeds').innerHTML=''

  console.log('inside filterBreed')
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function (data){
    const char = document.querySelector('#breed-dropdown').value
    console.log(char)
    const obj = data.message

    for(let i =0; i<Object.keys(obj).length; i++){
     console.log('inside for loop')
  
    if (char ===Object.keys(obj)[i][0]){
      const li = document.createElement("li")
      li.innerHTML = Object.keys(obj)[i]
    const text =li.innerText 
    document.getElementById('dog-breeds').append(li)
    li.addEventListener('click', changeFontColor)    
    function changeFontColor(){
      li.style.color = '#ff0000'
      }

    } 
    }
  })

  var e = document.getElementById("breed-dropdown");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  const char = text[0]


  
}
}
  )

