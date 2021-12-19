import { LightningElement,} from 'lwc';

export default class P2cParentComponent extends LightningElement {
handleClick(){
    this.template.querySelector('c-p2c-slider-component').resetSlider()
}
    
}