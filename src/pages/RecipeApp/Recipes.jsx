import React, { useEffect } from 'react'
import RecipeCard from '../../components/recipecards/cards/RecipeCard'
import {getAllRecipeCategories,getAllRecipesByCategory,getMealByName} from '../../apis/recipe'
import styles from './Recipe.module.css'
import { Link } from 'react-router-dom'
import SearchField from '../../components/common/SearchField'

export default function Recipes() {
  const [categories, setCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState('Pasta')
  const [meals, setMeals] = React.useState([])

  useEffect(() => {

    getRecipeCategories()

  }, [])
  


  useEffect(() => {
    getMealsByCategory()
  }, [setSelectedCategory])

  const getRecipeCategories = () => {
    getAllRecipeCategories().then((res) => {
      setCategories(res)
    })
  }
  const getMealsByCategory = () => {
    getAllRecipesByCategory(selectedCategory).then((res) => {
      setMeals(res)
    })
  }

  const filterByName=(name)=>
  {
    getMealByName(name).then((res)=>{
      setMeals(res)
    })
  }
    return (
    <>
    <SearchField

    onSearchInitiate = {(searchTerm)=>{

      console.log(searchTerm)
      filterByName(searchTerm)
    }}
    ></SearchField>
      <div className={styles.categoriesWrapper}>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <div 

              onClick={() => {
                setSelectedCategory(category.strCategory);
              }}
              style={{
                background:
                  selectedCategory === category.strCategory ? "pink" : "white",
              }}


            
            
            className={styles.categoryItem} key={category.idCategory}>
              {category?.strCategory}

              
          </div>
          ))}
      </div>
      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
          <Link

          to={`/recipe/${recipe.idMeal}`}
          className={styles.recipeCardsWrapper}
          key={recipe.idMeal}
          >

            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </>
  )
}