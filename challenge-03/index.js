const dishes =[
    {
        name:"eggplant parmesan",
        vegetarian:true,
    },
    {
        name:"spagetti & meatballs",
        vegetarian:true
    }
]
function vegetarian(menu){
    const dish = dishes.filter((dishes)=> dishes.vegetarian===true)
    return document.querySelectorAll("li").innerHTML = dish;

}