import  Search  from "../js/model/Search";
import Logging   from "../js/model/Loging"

const state = {};
window.state = state;

//----------------------------CONTROL SEARCH:
const controlSearch = async () => {


      //Call modules to create new objects 
     state.employee = new Search();
     state.logging = new Logging();

     await state.employee.getEmpList();
    console.log(state.employee.data.emp[0].id);
    console.log(state.employee.data.emp.length)
      for(var i = 0; i <state.employee.data.emp.length; i++){
        state.employee.data.emp[i].id
      }
     
      // 2) Prepare UI for results
      
      
  }
controlSearch();


