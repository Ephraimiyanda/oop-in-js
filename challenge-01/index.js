Book = class book{
    constructor(Title,Author,ISBN,NumberOfCopies,availability,CopiesSold,Restock){
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
        this.Restock=restock
}
}