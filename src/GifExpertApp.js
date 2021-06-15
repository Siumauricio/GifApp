import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//rafc usar esto mejor

const GifExpertApp = () =>{
    // const categories = [ 'One punch','Samurai','Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () =>{
        // setCategories([...categories,'HunterXHunter']);
       // setCategories(cats=> [...cats,'HunterXhUNTER']);
    // }

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>


        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {categories.map(category=>
                <GifGrid key={category} category = {category}/>
            )}
        </ol>
        </>
     )
}
export default GifExpertApp;