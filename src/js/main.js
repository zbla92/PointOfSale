import  Search  from "../js/model/Search";


const state = {};
window.state = state;



 


console.log(state.employee)

const controlSearch = async () => {
const id = 1;


      // 2) New search object and add to state
     state.employee = new Search(id);

     await state.employee.getEmpList(id);
     const b = state.employee;
     console.log(b.data.emp[0])
      // 3) Prepare UI for results
      
      
  }
controlSearch()