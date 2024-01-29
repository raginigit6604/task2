function takeinput(){
    let person={};
       let  details=['name','id','age','occupation'];
           for(let i =0;i<details.length;i++){
              let input= prompt("Enter the Person's "+details[i]+ ":");
                 person[details[i]]=input;
           }
           return person;
}
function showoutput(person){
        for (let details in person){
            if(person.hasOwnProperty(details)){
                console.log(details+ " :"+ person[details]);
            }
        }
}
let person=takeinput();
showoutput(person);