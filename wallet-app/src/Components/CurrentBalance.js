import React, { Fragment, useState} from 'react'
import PopUp from './PopUp'
import Form from './Form'

function CurrentBalance(props) {

  const [buttonPopup, setPopUp] = useState(false)

  const AddForm = ({data_}) => {
    const [data, setData] = useState(data_)
    return <Fragment>
        <h3>Add Activity</h3>
        <Form data={data} setData={setData} setListUpdated={props.setListUpdated} setPopUp={setPopUp} btn={'add'}></Form>
    </Fragment>
  }

  const handleAddActivity = () => {
    return setPopUp(() => {
      return <AddForm data_={props.data}/>
    })
}

  return (
    <Fragment>
      <div className='currentBalance'>
        Current Balance 
        <strong>$ {parseFloat(props.currentBalance).toFixed(2)}</strong>
        <button className='btn' onClick={()=> handleAddActivity()}>Add Activity</button>
      </div>
      <PopUp trigger={buttonPopup} setPopUp={setPopUp}></PopUp>
    </Fragment>
  )
}

export default CurrentBalance