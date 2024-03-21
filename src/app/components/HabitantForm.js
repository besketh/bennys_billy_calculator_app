'use client'
import Editable from './Editable';
import { useState,useEffect } from 'react';
import { RefreshAction } from 'next/dist/client/components/router-reducer/router-reducer-types';
import styled from "styled-components";
import MyJazzyButton from './MyJazzyButton';

export const HabitantForm = ({addHabitant,removeHabitant}) => {

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


    function handleAddClick(){
      addHabitant(habitantName,daysAbsent)
      console.log('handle hab add click')
    }

    function handleRemoveClick(){
      removeHabitant()
      console.log('handle hab rm click')
    }


  return(
  <>
      <Editable fieldName={'Habitant name'} updateValueForParent={updateNameValue} />
      <Editable fieldName={'How many days absent during billing period'} updateValueForParent={updateDaysAbsentValue}/>
      <div>
      <MyJazzyButton handleClick={handleAddClick} text={'Add Habitant'}/>
      <MyJazzyButton handleClick={handleRemoveClick} text={'Remove Habitant'}/>
 
 </div>
 </>
  )
}

export default HabitantForm;