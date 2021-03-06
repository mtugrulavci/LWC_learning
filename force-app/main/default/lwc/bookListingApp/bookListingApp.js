import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookListingApp extends LightningElement {
    query=''
    books
    timer
    connectedCallback(){
        this.fetchBookData()
    }
    fetchBookData(){
        fetch(BOOK_URL +this.query)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.books =data
        })
        .then(error =>console.error(error))
    }
// debouncing
    fetchBooksHandler(event){
       this.timer= this.query =event.target.value
       window.clearTimeout(this.timer)
        setTimeout(()=>{
            this.fetchBookData()
        },1000)
    }
}