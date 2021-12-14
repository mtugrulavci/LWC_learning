import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name
    handleClick(){
        this.isVisible=true;
    }
    writeHello(event){
        this.name =event.target.value
    }
    get helloTrue(){
        return this.name ==="hello"
    }
}