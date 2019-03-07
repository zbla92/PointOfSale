import { para } from './dom-loader';

para.innerHTML = 'radi l ovo mic cddesck';

var url = 'https://jsonplaceholder.typicode.com/users' 


fetch(url)
  .then(result => {
    console.log(result)
    return result.json();
  })
  .then(data => {
    console.log(data.users[0].name)
  })
  .catch(error => console.log(error))



 