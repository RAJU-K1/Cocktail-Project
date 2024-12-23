import React from 'react'
import axios from "axios"
import { useLoaderData, useParams } from 'react-router-dom'
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchurl="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader=async ({request})=>{
  const url=new URL(request.url);
  const searchTerm=url.searchParams.get('search')||"vodka";

    const searchQuery="margarita";
    const response=await axios.get(`${cocktailSearchurl}${searchTerm}`);

    return { drinks:response.data.drinks,searchTerm}
}
const Landing = () => {

   const {drinks,searchQuery}= useLoaderData();
  return (
    <>
    <SearchForm/>
    <CocktailList drinks={drinks}/>
           
    </>
  
  )
}

export default Landing