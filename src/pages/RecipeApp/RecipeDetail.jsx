import React, { useEffect } from "react";
import getMealDetail from "../../apis/recipe";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BackIcon } from "../../utils/iconUtil";
import styles from './Recipe.module.css';



export default function RecipeDetail(){

    const[recipedetail , setrecipeDetail] = React.useState('');
    const{idMeal} =useParams()
    const navigate = useNavigate()

        useEffect(()=>{

            getDetail()
        },[])


        const goBack=()=>{
            navigate(-1)
        }

        const getDetail = () =>{

            getMealDetail(idMeal).then((res)=>{
                setrecipeDetail(res)
            })

        }

        return(
            <div className={styles.mealWrapper}>
                <div className="icon-wrapper" onClick={goBack}>
                    {BackIcon()}
                </div>

                <div className="styles.ItemWrapper">
                
                <h1>Item : {recipedetail?.strMeal} </h1>

                
                
                <br/>



                </div>


               
                {recipedetail?.strYoutube ? (
                    <ReactPlayer url={recipedetail?.strYoutube} width="100%"/>
                ) : (
                    <img src={recipedetail?.strMealThumb} alt={''}/>
                )}



            <div className={styles.ingredientWrapper}>
                <div className="display-grid gap-2">
                    <h4>Ingredient</h4>
                    {Array.from({length:20}).map((item,index)=>(
                      <>
                      {recipedetail?.[`strIngredient${index+1}`]?(
                        <span>{recipedetail?.[`strIngredient${index+1}`]}</span>
                      ):(
                        ''
                      )}
                      </>  
                    ))}
                </div>
                </div>

                <div className={styles.QuantityWrapper}>
                <div className="display-grid gap-2">
                    <h4>Quantity</h4>
                    {Array.from({length:20}).map((item,index)=>(
                      <>
                      {recipedetail?.[`strMeasure${index+1}`]?(
                        <span>{recipedetail?.[`strMeasure${index+1}`]}</span>
                      ):(
                        ''
                      )}
                      </>  
                    ))}
                </div>
                </div>




                <div className={styles.InstructionWrapper}>

                    <h3>Instruction</h3>



                


                <span>Instruction</span>

        




                {recipedetail?.strInstructions}


                </div>


            



            </div>


        )
}