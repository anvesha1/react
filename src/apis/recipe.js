import axios from 'axios';
export function getAllRecipesByCategory(Pasta){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Pasta}`,

        }).then((resp)=>{
            console.log(resp.data.meals)
            resolve(resp.data.meals)
        })
    })
}
export function getAllRecipeCategories(){
    console.log("here")
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:'https://www.themealdb.com/api/json/v1/1/categories.php',
        }).then((resp)=>{
            console.log(resp.data.categories)
            resolve(resp.data.categories)
        })
    })
}

export default function getMealDetail(idMeal){

    return  new Promise((resolve,reject)=>{

        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        }).then((resp)=>{
        resolve(resp?.data?.meals?.[0])


        })

    })
}

export function getMealByName(searchTerm){

    return  new Promise((resolve,reject)=>{

        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        }).then((resp)=>{

        resolve(resp.data.meals)


        })

    })
}

export function getMealsByFirstLetter(letter){

    return  new Promise((resolve,reject)=>{

        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
        }).then((resp)=>{

        resolve(resp.data.meals)


        })

    })
}












