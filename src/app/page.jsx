'use client'
import React from 'react';
import BillForm from "./components/BillForm";
import HabitantForm from "./components/HabitantForm";
import { useState, useEffect } from "react";
import MyJazzyButton from './components/MyJazzyButton'

class Bill {
  constructor(period, cost) {
    this.cost = cost
    this.period = period

  }
}


class Calculator {
  constructor(bill, habitants) {
    this.bill = bill
    this.habitants = habitants

  }

  calculateTotalDays() {
    var days = 0

    this.habitants.forEach(h => { days = days + (this.bill.period-h.daysAbsent) })

    return days;
  }


  calculateShareOfBill() {
    const totalDaysSpentByEveryOne =  this.calculateTotalDays()

    var output = 'Share of €' + this.bill.cost + ' bill with a period of ' + this.bill.period + " days ---> "

    this.habitants.forEach(h => {
      const thisPersonsShare =     
      (this.bill.period-h.daysAbsent)/totalDaysSpentByEveryOne*this.bill.cost
      
      output = output += h.name + " was absent " + h.daysAbsent + ' days and owes €' + thisPersonsShare.toFixed(2) + ' ----- '
    })
    return output;
  }

}


export default function Home() {
  const [period, setPeriod] = useState()
  const [cost, setCost] = useState()
  const [habitants, setHabitants] = useState([])
  const [habitantsDynamicListPrintable, sethabitantsDynamicListPrintable] = useState()
  const [result,setResult] = useState()



  function addHabitant(name, daysAbsent) {

    if (name != '' && name != null && daysAbsent != '' && daysAbsent != null) {

      const habitant = { name, daysAbsent }
      var isNew = true
      habitants.forEach(h => { if (h.name == name) isNew = false })
      if (isNew) {
        setHabitants(habitants => habitants.concat(habitant), [])
        console.log('adding ' + name)
      }
      else {
        console.log('not adding ' + name + ' again because already exists in list')
      }

    }

  }


  function removeHabitant() {
        habitants.length<2 && setHabitants([])
        habitants.length>=2 && setHabitants(habitants=>habitants.splice(-1))
        
  }

  useEffect(() => {
    var s = JSON.stringify(habitants, null, 2)

    if (s=='[]') s='No habitants added yet';

    sethabitantsDynamicListPrintable(s)
    console.log(habitantsDynamicListPrintable)
  }, [habitants])

  function handleClick() {
    const bill = new Bill(period,cost)
    setResult(new Calculator(bill, habitants).calculateShareOfBill())
  }

  function clear(){
    window.location.reload();
  }

  return (
    <main className="flex min-h-screen flex-col items-right justify-between p-24">
      <h1 style={{ fontSize: "2rem" }}><b>Benny's Billy Calculator</b></h1>
      <br/>

      <BillForm setPeriod={setPeriod} setCost={setCost} />
      <HabitantForm addHabitant={addHabitant} removeHabitant={removeHabitant}/>
      <p>{habitantsDynamicListPrintable}</p>

      <div>
      <MyJazzyButton text='Calculate share of cost' handleClick={handleClick} />
      <MyJazzyButton text='Clear All' handleClick={clear} />
      </div>
      <p>{result}</p>

    </main>
  );
}
