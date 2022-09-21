import React, {Fragment, useState} from "react";
import PopUp from "./PopUp";
import Form from "./Form";
import {Toaster, toast} from 'react-hot-toast'
import CurrentBalance from "./CurrentBalance";


const BookList = ({all_data, data, setData, setListUpdated}) => {

    const [buttonPopup, setPopUp] = useState(false)

    const handlePopUpDelete = (id) => {
        setPopUp(() => {
            return <Fragment>
                <h3>Delete Confirmation</h3>
                <p>Are you sure you want to delete?</p>
                <div style={{display: 'flex',width: '100%',justifyContent: 'flex-end',gap: '10px'}}>
                    <button style={{cursor: 'pointer', background: 'unset', border: 'unset'}} onClick={()=>setPopUp("")}>Cancel</button>
                    <button style={{cursor: 'pointer',background: 'var(--m-red)',border: 'unset',padding: '9px 20px',fontSize: '14px',borderRadius: '10px',color: 'white'}}  onClick={()=>{
                        handleDelete(id)
                        setPopUp('')
                    }}>Delete</button>
                </div>
            </Fragment>
        })
    }

    const handleDelete = (id) => {
        const requestInit = {
            method: 'DELETE'
        }

        fetch('http://localhost:9000/api/activity/'+id, requestInit)
        .then(res => res.text())
        .then(res => toast.success(res,{style: {borderRadius: '10px',background: '#333',color: '#fff'}}))

        setListUpdated(true)
    }
    
    const UpdateForm = ({id, data_})=>{
        const [data, setData] = useState(data_)
        return <Fragment>
            <h3>Edit Activity</h3>
            <Form data={data} setData={setData} setListUpdated={setListUpdated} setPopUp={setPopUp} btn={'update'}></Form>
        </Fragment>
    }

    const handleUpdate = (id, data_) => {
        //validation
        setPopUp(() => {
            return <UpdateForm id={id} data_={data_}/>
        })
        // setListUpdated(true)
    }

    const handleFilter = () => {
        toast.success('added',{style: {borderRadius: '10px',background: '#333',color: '#fff'}})
    }

    let [currentBalance, setCurrentBalance] = useState(0.00)
    
    return (
    <Fragment>
        <div className="table_container">
            <table className="table">
                <tbody>
                    {
                        all_data.map((data, i) => {
                            currentBalance += parseFloat(data.amount)
                            return (<tr key={i}>
                                <th><i className={"fas fa-chart-line"+(data.type === 1 ? '': '-down')} style={{color: (data.type === 1 ? 'var(--m-green)': 'var(--m-red)')}}></i></th>
                                <th style={{textAlign: 'initial'}}>
                                    {data.description}
                                    <p style={{margin: '0',fontSize: '11px',color: '#8f8f8f',fontWeight: '500'}}>{data.concept}</p>
                                    <p className="date">{data.date.split('T')[0].split('-').join(' ')}</p>
                                </th>
                                <th>${data.amount}</th>
                                
                                <th>
                                    <i className='far fa-trash' style={{cursor: 'pointer', marginRight: '10px'}} onClick={()=>handlePopUpDelete(data.id)}></i>
                                    <i className='far fa-edit' style={{cursor: 'pointer'}} onClick={()=>handleUpdate(data.id, data)}></i>
                                </th>
                            </tr>)
                        })
                    }
                </tbody>
            </table> 
        </div>
        <div style={{cursor:'pointer', padding: '10px',textAlign: 'end'}} onClick={()=>handleFilter()}>Filter <i class="far fa-filter"></i></div>
        <CurrentBalance data={data} setData={setData} currentBalance={currentBalance} setListUpdated={setListUpdated}/>
        <PopUp trigger={buttonPopup} setPopUp={setPopUp}></PopUp>
        <Toaster position="bottom-right"/>
    </Fragment>       
    );
}

export default BookList;