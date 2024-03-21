'use client'
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