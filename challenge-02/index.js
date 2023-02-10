movie = class Movie{
    constructor(title,Director,Genre,ReleaseYear,Rating){
        this.title= title;
        this.Director=Director;
        this.Genre=Genre;
        this.ReleaseYear=ReleaseYear;
        this.Rating=Rating;
    }
}
function getOverview(){
    console.log(`${title},"a" ${Genre}"film directed by" ${Director} "was released in "${ReleaseYear} ".it recieved a rating of" ${Rating}`)
}
let firstmovie = new Movie("spida","james","comedy","2002","5")
console.log(firstmovie.getOverview())