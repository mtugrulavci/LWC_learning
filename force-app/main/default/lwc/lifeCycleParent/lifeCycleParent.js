import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("Parent Constructor Called")
    }
    connectedCallback(){
        console.log(" Parent connected call back called")
    }

    renderedCallback(){
        console.log("Parent rendered call back calleed")
    }
}