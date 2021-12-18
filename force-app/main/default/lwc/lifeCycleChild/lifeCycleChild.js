import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        console.log("Child Constructor Called")
    }
    connectedCallback(){
        console.log(" Child connected call back called")
    }

    renderedCallback(){
        console.log("cHILD rendered call back calleed")
    }
}