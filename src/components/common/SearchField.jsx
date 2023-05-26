import React from "react";
import styles from './common.module.css'



export default function SearchField(props){
    const SearchInputRef = React.useRef();

    const handleSearch =()=>{
        let value = SearchInputRef.current.value ;
        props?.onSearchInitiate(value)
    }

    return(

        <div>
        <input ref={SearchInputRef}/>

        <button onClick={()=>handleSearch()}>Search</button>

        </div>
    )
}

