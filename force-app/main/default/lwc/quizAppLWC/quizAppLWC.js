import { LightningElement } from 'lwc';

export default class QuizAppLWC extends LightningElement {
    selected={

    }// for storing answers
    correctAnswers = 0 // use to show the number of correct answer
    isSubmited= false // use to show the result
    myQuestions =[
        {
            id:"question 1",
            question:"which one of the following is not a template loop?",
            answer:{
                a:"for:each",
                b:"iterator", 
                c:"map loop"
            },
            correctAnswer:"c"

        },
        {
            id:"question 2",
            question:"which one of the file is invalid in LWC Ccomponent folder?",
            answer:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"

        },
        {
            id:"question 3",
            question:"which one of the following is not a directive?",
            answer:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"

        }
    ]
    // used for diabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length ===this.myQuestions.length) // if it is True then it will make it false so it willnot disable on the html
    }
    // change handler get's called on every click on the options
    changeHandler(event){
        const {name, value} = event.target
        // const name = event.target.name
        //const name = event.target.value
        this.selected = {...this.selected, [name]:value}
    }
    //form submit handler
    submitHandler(event){
        event.preventDefault()
       let correct =  this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer) // selected[item.id] is key but brings the value to check
        // filter always return an array
        this.correctAnswers = correct.length
        console.log("this.correctAnswers", this.correctAnswers)
        this.isSubmited=true
    }
    //form reset handler
    resetHandler(){
        this.selected={}
        this.correctAnswers =0;
        this.isSubmited =false
    }
    // for applying dynamic styling to our result
     get  isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers? 
            'slds-text-color_success':'slds-text-color_error'}`
    }


}