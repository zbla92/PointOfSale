export default class Loging {
    constructor(){
        
    }
    logMeIn(empid, empList){
        if (empid === empList){
            this.currentlyLoggedIn = empid;
            console.log(` You are now logged in`)
        }
        else {
            console.log('ERROR: No such employe in the database')
        }
    }

}