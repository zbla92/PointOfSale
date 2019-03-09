export default class Search {
    constructor () {
        
    }
        async getEmpList(){
            try {
                const res = await fetch("../src/data/emps/people.json");
                this.data = await res.json();
                
                
            } catch(error){
                alert(error)
            }
        }
}




