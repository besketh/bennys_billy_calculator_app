'use client'
import Editable from './Editable';
import { useState,useEffect } from 'react';
import { RefreshAction } from 'next/dist/client/components/router-reducer/router-reducer-types';

export const HabitantForm = ({addHabitant}) => {

    const [habitantName,setHabitantName]=useState()
    const [daysAbsent,setDaysAbsent]=useState()


    function updateNameValue(n){
       setHabitantName(n)
       console.log(n)
    }


    function updateDaysAbsentValue(d){
      setDaysAbsent(d)  
      console.log(d)    
    }


    function handleClick(){
      addHabitant(habitantName,daysAbsent)
    }

  return(
    <>
      <Editable fieldName={'Habitant name'} updateValueForParent={updateNameValue} />
      <Editable fieldName={'How many days absent during billing period'} updateValueForParent={updateDaysAbsentValue}/>

      <button onClick={handleClick} > <b>Add habitant </b></button>

 </>
  )
}

export default HabitantForm;