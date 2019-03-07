import { para } from './dom-loader';

para.innerHTML = 'radi l ovo mic cddesck';

var url = '/src/json/people.json' 


fetch(url)
  .then(result => {
    console.log(result)
    return result.json();
  })
  .then(data => {
    console.log(data.users)
  })
  .catch(error => console.log(error))



 