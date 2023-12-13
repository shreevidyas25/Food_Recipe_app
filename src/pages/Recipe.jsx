import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'

function Recipe() {

    let params = useParams()
    const [detail, setDetail] = useState([]);
  const [activeTab, setActiveTab] = useState('instructions')

    useEffect(() => {
        fetchFetail();
      },[])

   const fetchFetail = async () => {
   const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const datajson = await data.json()
    setDetail(datajson)
   } 
  return (
    <DetailedWrapper>

      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
        <div>
        {activeTab === 'instructions' && (
          <div>

          <h3 dangerouslySetInnerHTML={{__html: detail.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: detail.instructions}}></h3>
          </div>

        )}

          {activeTab === 'ingredients' && (
               <ul>

               {detail.extendedIngredients.map((ing) => (
                 <li key={ing.id}>{ing.original}</li>
               )
             )}
             </ul>
          )}
         
        </div>
      </Info>
    </DetailedWrapper>
  )
}

const DetailedWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  
  }
  li {
    font-size: 0.9rem;
    line-height: 2rem;

  }

  img {
    height: 250px;
    width: 280px;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

const Info = styled.div`
  margin-left: 10rem;
  width: 500px;

  h3 {
    font-size: 0.9rem;
    line-height: 2rem;
  }
`

export default Recipe