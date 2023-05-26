import React from "react";
import styles from './RecipeCard.module.css';
function RecipeCard(props){
    return(
        <div className={styles.recipeCardWrapper}>
        <img alt="" src={props?.recipe?.strMealThumb}></img>
           <div className={styles.contentWrapper}>
           <span className={styles.cardTitle}>{props?.recipe?.strMeal}</span>
           <span className={styles.mealTitle}>Spicy Arrabiata Penne</span>
          <span className={styles.mealSubtitle}>
            Time: <b>15m</b>
          </span>
            
          </div>
            
          </div>
    )
}
export default RecipeCard