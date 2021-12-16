import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames =["John", "Smith","Tugrul", "Nice"]
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText)
        elem.style.border = "1px solid red";
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p> I AM A CHILD ELEMENT </p>'
    }
}