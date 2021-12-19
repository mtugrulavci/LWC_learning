import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val= 20
    chandeHandler(event){
        this.val =event.target.value
    }

   @api resetSlider(event){
        this.val = 50
    }
}