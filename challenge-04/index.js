class Book{
    constructor(Title,Author,ISBN,NumberOfCopies){
        this.Title=Title;
        this.Author= Author;
        this.ISBN=ISBN;
        this.NumberOfCopies = NumberOfCopies;

    }
get BookAvailability(){
  return this.availability()
}
availability(){
    if(this.NumberOfCopies === 0){
        return "out of stock"
            }else if (this.NumberOfCopies < 10){
            return  "low on stock"
        }
            return"in stock"
        }

sold(NumberOfCopiesSold = 1) {
    this.NumberOfCopies -= NumberOfCopiesSold;
  }

  Restock(NumberOfCopiesAdded = 5) {
    this.NumberOfCopies += NumberOfCopiesAdded;
  }
}

class TechnicalBook extends Book{
    constructor(Title,Author,ISBN,NumberOfCopies,edition){
        super(Title,Author,ISBN,NumberOfCopies)
        this.edition=edition;
    }
 getEdition() {
    console.log(`"the current edition of this book is the"${this.edition}`)
}

}

const tech = new TechnicalBook("NightmareAcademy", "john wall", 200, 5, "1.5")