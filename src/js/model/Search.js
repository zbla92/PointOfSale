export default class Search {
    constructor (emp) {
        this.emp = {a: 3, b: 5};
        this.emb = 0;
    }
        async getEmpList(id){
            try {
                const res = await fetch("../src/data/emps/people.json");
                this.data = await res.json();
                
                
            } catch(error){
                alert(error)
            }
        }
}




