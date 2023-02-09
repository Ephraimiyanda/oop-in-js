Book = class Book{
    constructor(Title,Author,ISBN,NumberOfCopies,availability,CopiesSold,Restock,edition){
        this.Title=Title;
        this.Author= Author;
        this.ISBN=ISBN;
        this.NumberOfCopies=NumberOfCopies
        this.availability=()=>{
    if(NumberOfCopies===0){
return "out of stock"
    }
if(NumberOfCopies<10){
    return  "low on stock"
}
}

        this.CopiesSold=CopiesSold
        this.Restock=[5]
        this.edition=edition
}
}
class TechnicalBook extends Book{
    constructor(,){
        super(Title,Author,ISBN,NumberOfCopies,availability,CopiesSold,Restock)
        this.edition=edition
    }

}
function getEdition() {
    console.log("the current edition of this book is the"`${this.edition}`)
}