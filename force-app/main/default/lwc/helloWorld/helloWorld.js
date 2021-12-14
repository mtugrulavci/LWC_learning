import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname ="Salesforce Turkey";
    title ='aura'

    changeHandler(event){
        this.title = event.target.value
    }
@track address = {
    city : "melbourne",
    postcode: 3008,
    country: "Autralia"
}

trackHandler(event){
    this.address = {...this.address, "city":event.target.value}

}
users =["John", "nick", "tugrul"]
num1=10
num2=20
get firstUser(){
    return this.users[0].toUpperCase()
}
get multiply(){
    return this.num1*this.num2
}

}