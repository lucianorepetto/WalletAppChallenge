import React, {Fragment,useState, useEffect, useRef} from "react";
import {Toaster, toast} from "react-hot-toast";
import PopUp from "./PopUp";
import Select from "react-select"

/**
 * Form for Insert/Update data in list
 * @param {object} props Component props
 * @param {object} props.data data collection with atributtes
 * @param {string} props.setData
 * @param {string} props.btn To get diference between add/update functionality 
 * @param {function} props.setListUpdated actualize list view
 * @param {function} props.setPopUp to remove popUp in update data
 */

const Form = (props) => {
    const [buttonPopup, setPopUp] = useState(false)
    const i_date = useRef(null);
    const i_description = useRef(null);
    const i_amount = useRef(null);
    const i_new_concept = useRef(null);
    const handleChange = (e) => {
        let data_ = {...props.data}
        if(e.target){
            data_[e.target.name] = e.target.value
        } else {
            data_[e.name] = e.value
        }
        props.setData(data_)
    }

    const handleAddConcept = () => {
        setPopUp(()=>{
            return <Fragment>
                <h3>Add New Concept</h3>
                <div className="input_container" style={{width: '300px'}}>
                    <label htmlFor="new_concept">Concept description</label>
                    <input ref={i_new_concept} name="new_concept" onChange={handleChange} type="text" id="new_concept"/>
                </div>
                <button className="btn" style={{padding: '9px 40px',fontSize: '14px'}} onClick={()=>{
                    let new_concept = i_new_concept.current.value
                    const requestInit = {
                        method: 'POST',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({description: new_concept})
                    }
        
                    fetch('http://localhost:9000/api/concepts', requestInit)
                    .then(res => res.json())
                    .then(res => {
                        concepts.push({"value": res.value.insertId, "label": new_concept})
                        toast.success(res.msg,{style: {borderRadius: '10px',background: '#333',color: '#fff'}})
                        handleListConcepts()
                    })
                }}>Add</button>
            </Fragment>
        })
    }

    const handleUpdateConcept = (i, id, prev_value) => {
        setPopUp(()=>{
            return <Fragment>
                <h3>Update Concept</h3>
                <div className="input_container" style={{width: '300px'}}>
                    <label htmlFor="new_concept">Concept description</label>
                    <input ref={i_new_concept} name="new_concept" onChange={handleChange} type="text" id="new_concept" defaultValue={prev_value}/>
                </div>
                <button className="btn" style={{padding: '9px 40px',fontSize: '14px'}} onClick={()=>{
                    let new_concept = i_new_concept.current.value
                    const requestInit = {
                        method: 'PUT',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({description: new_concept})
                    }
        
                    fetch('http://localhost:9000/api/concepts/'+id, requestInit)
                    .then(res => res.text())
                    .then(res => {
                        let c = {"value": id, "label": new_concept}
                        concepts[i] = c
                        toast.success(res,{style: {borderRadius: '10px',background: '#333',color: '#fff'}})
                        handleListConcepts()
                        props.setListUpdated(true)
                        if(valueConcept.label === prev_value){
                            setValueConcept(c)
                        }
                        
                    })
                }}>Update</button>
            </Fragment>
        })
    }

    const handleDeleteConcept = (id, concept) => {
        setPopUp(() => {
            return <Fragment>
                <h3>Delete Confirmation</h3>
                <p>Are you sure you want to delete "{concept}"?</p>
                <div style={{display: 'flex',width: '100%',justifyContent: 'flex-end',gap: '10px'}}>
                    <button style={{cursor: 'pointer', background: 'unset', border: 'unset'}} onClick={()=>handleListConcepts()}>Cancel</button>
                    <button style={{cursor: 'pointer',background: 'var(--m-red)',border: 'unset',padding: '9px 20px',fontSize: '14px',borderRadius: '10px',color: 'white'}}  onClick={()=>{
                        const requestInit = {
                            method: 'DELETE'
                        }

                        fetch('http://localhost:9000/api/concepts/'+id, requestInit)
                        .then(res => res.text())
                        .then(res => {
                            let pos = null
                            concepts.filter((x,i)=>{
                                if(x.value === id){
                                    pos = i      
                                } 
                                return x
                            })
                            concepts.splice(pos, 1)
                
                            toast.success(res,{style: {borderRadius: '10px',background: '#333',color: '#fff'}})
                            handleListConcepts()
                        })
                    }}>Delete</button>
                </div>
            </Fragment>
        })
    }

    const handleListConcepts = () => {
        setPopUp(() => {
            return <Fragment>
                <h3>Concepts</h3>
                <div style={{margin: '10px auto 0 0'}}>Add, edit or delete your concepts</div>
                <button className="btn" style={{margin: '10px 0 0 auto'}} onClick={()=>handleAddConcept()}>add new</button>
                <div style={{marginTop: '10px',maxHeight: '200px',overflowY: 'auto',overflowX: 'hidden'}}>
                    <table style={{ width: '350px'}}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {concepts.map((data, i)=>(
                                <tr key={i}>
                                    <th>{data.label}</th>
                                    <th>
                                        <i className='far fa-trash' style={{cursor: 'pointer', marginRight: '10px'}} onClick={()=> handleDeleteConcept(data.value, data.label)}></i>
                                        <i className='far fa-edit' style={{cursor: 'pointer'}} onClick={()=> handleUpdateConcept(i, data.value, data.label)}></i>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        })
    }
    console.log(props.data)
    let {date, description, amount, concept, type} = props.data
    
    const handleSubmit = (e) => {
        e.preventDefault()
        amount = Math.abs(parseFloat(amount))
        //validation
        if(date === ""){return toast.error("Please enter a valid date",{style: {borderRadius: '10px',background: '#333',color: '#fff'}})}
        if(description === ""){return toast.error('"Description" is empty',{style: {borderRadius: '10px',background: '#333',color: '#fff'}})}
        if(amount === 0){return toast.error("Amount must not be 0",{style: {borderRadius: '10px',background: '#333',color: '#fff'}})}
        if(concept === ""){return toast.error('"Concept" is empty',{style: {borderRadius: '10px',background: '#333',color: '#fff'}})}
        console.log(type)
        if(type <= 0){return toast.error('"Type" is empty',{style: {borderRadius: '10px',background: '#333',color: '#fff'}})}

        //format date
        props.data.date = date.split('T')[0]
        props.data.amount = amount

        //consulta
        if(props.btn === 'add'){
            //To Add new Row to table
            const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(props.data)
            }
            
            fetch('http://localhost:9000/api/activity', requestInit)
            .then(res => res.json())
            .then(res => toast.success(res.msg,{style: {borderRadius: '10px',background: '#333',color: '#fff'}}))
            
        } else {
            //To Update Row information by id
            const requestInit = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(props.data)
            }

            fetch('http://localhost:9000/api/activity/'+props.data.id, requestInit)
            .then(res => res.text())
            .then(res => {
                toast.success(res,{style: {borderRadius: '10px',background: '#333',color: '#fff'}})
            })
            
        }
        props.setPopUp("")
        //Actualize list view
        props.setListUpdated(true)
    }

    let date_ = ""
    if(props.data.date){
        let date_arr = props.data.date.split('T')[0].split('-')
        date_ = new Date()
        date_.setYear(date_arr[0])
        date_.setMonth(date_arr[1]-1)
        date_.setDate(date_arr[2])
        date_ = date_.toISOString().substring(0,10)
    }

    let [concepts, setConcepts] = useState([])
    const [valueConcept, setValueConcept] = useState([])
    useEffect(() => {
        const getConcepts = ()=>{
            fetch('http://localhost:9000/api/concepts')
            .then(res => res.json())
            .then(res => {
                let concepts = []
                for(let c of res){
                    concepts.push({value: c.id, label: c.description})
                }
                setConcepts(concepts)
                if(props.data.concept){
                    for(let c of concepts){
                        if(c.label === props.data.concept){
                            setValueConcept(c)
                        }
                    }
                }
            })
        }
        getConcepts()
    }, [])


    //types
    let types = [
        {value: '1', label: 'Ingreso'},
        {value: '2', label: 'Egreso'},
    ]
    
    const [valueType, setValueType] = useState([])
    
    useEffect(() => {
        if(props.data.type){
            for(let t of types){
                if(parseInt(t.value) === props.data.type){
                    setValueType(t)
                }
            }
        }
    }, [])

    let disable = props.btn === "update" ? true : false
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="date">Date</label>
                    <input ref={i_date} name="date" onChange={handleChange} type="date" id="date" defaultValue={date_}/>
                </div>
                <div className="input_container">
                    <label htmlFor="description">Description</label>
                    <input ref={i_description} name="description" onChange={handleChange} type="text" id="description" defaultValue={props.data.description ? props.data.description : ''}/>
                </div>
                <div className="input_container">
                    <label htmlFor="amount">Amount</label>
                    <input ref={i_amount} step="any" name="amount" onChange={handleChange} type="number" id="amount" defaultValue={props.data.amount ? props.data.amount : ''}/>
                </div>
                <div className="input_container">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <label htmlFor="concept">Concept</label>
                    <span style={{cursor: 'pointer', color: 'var(--m-blue)'}} onClick={() => handleListConcepts()}>Edit Concepts</span>
                    </div>
                    <Select
                        onChange={(e)=> {
                            handleChange({...e, 'name': 'concept'})
                            setValueConcept(e)
                        }} 
                        value={valueConcept}
                        options={concepts}
                        
                    />
                </div>
                <div className="input_container">
                    <label htmlFor="type">Type</label>
                    <Select
                        onChange={(e)=> {
                            handleChange({...e, 'name': 'type'})
                            setValueType(e)
                        }} 
                        value={valueType}
                        options={types}
                        isDisabled={disable}
                    />
                </div>
                
                <button type="submit" className="btn" style={{marginTop: '20px'}}>{props.btn}</button>
            </form>
            <Toaster position="bottom-right"/>
            <PopUp trigger={buttonPopup} setPopUp={setPopUp}></PopUp>
        </Fragment>
    );
}

export default Form;