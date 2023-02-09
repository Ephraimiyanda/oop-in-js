const dishes =[
    {
        name:"eggplant parmesan",
        vegetarian:"true",
    },
    {
        name:"spagetti & meatballs",
        vegetarian:"true"
    }
]
function vegetarian(){
    const dish = dishes.filter((dishes=> dishes.vegetarian))
    return`<li>${dish}</li>`
}