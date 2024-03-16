'use client'
import React from 'react';
import BillForm from "./components/BillForm";
import HabitantForm from "./components/HabitantForm";
import { useState, useEffect } from "react";





class Habitant {
  constructor(name, daysAbsentDuringBillingPeriod) {
    this.name = name
    this.daysAbsent = daysAbsentDuringBillingPeriod
  }
}

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
  const [period, setPeriod] = useState(99)
  const [cost, setCost] = useState(0)
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

  useEffect(() => {
    sethabitantsDynamicListPrintable(JSON.stringify(habitants, null, 2))
    console.log(habitantsDynamicListPrintable)
  }, [habitants])

  function handleClick() {
    setResult(new Calculator(new Bill(period, cost), habitants).calculateShareOfBill())
  }

  return (
    <main className="flex min-h-screen flex-col items-right justify-between p-24">
      <h1>Benny's Billy Calculator</h1>

      <BillForm setPeriod={setPeriod} setCost={setCost} />
      <h1>Cost: {cost} | Period: {period}</h1>
      <HabitantForm addHabitant={addHabitant} />
      <p>{habitantsDynamicListPrintable}</p>
      <button onClick={handleClick} > <b>Calculate </b></button>
      <p>{result}</p>

    </main>
  );
}
