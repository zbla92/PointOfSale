import { para } from './dom-loader';

para.innerHTML = 'radi l ovo mic cddesck';

var urlEMPs = '/src/json/people.json' 
var urlItems = '/src/json/items/items.json'


fetch(urlEMPs)
  .then(result => {
    console.log(result)
    return result.json();
  })
  .then(data => {
    console.log(data.users)
  })
  .catch(error => console.log(error))



  fetch(urlItems)
  .then(result => {
    console.log(result)
    return result.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))