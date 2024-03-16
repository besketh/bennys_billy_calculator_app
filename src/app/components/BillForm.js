'use client'
import Editable from './Editable';

export const BillForm = ({setCost,setPeriod}) => {
  return(
    <>
      <Editable fieldName={'Cost (€)'} updateValueForParent={setCost}/>
      <Editable fieldName={'Period (days)'} updateValueForParent={setPeriod}/>
    </>
  )
}

export default BillForm;
