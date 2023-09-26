"use client"
import { useState } from "react"
import { appStore } from "../store"

export const ReduxExample = ()=>{
   
    return (
        <div>
            <A />
            <B />
            <C />
        </div>
    )
}

const A = () =>{
    const [name,setName] = useState('')
    const fnName = ()=> {
        appStore.dispatch({type:'name_update',payload:name})
    }
    return (
        <div className="container container-fluid m-2 border border-primary">
            <dl className="mt-2">
                <dt> Name : </dt>
                <dd> <input className="form-control" type="text" onChange={(e)=>{setName(e.target.value)}}   /> </dd>
            </dl>
            <button className="btn btn-success mb-2" onClick={fnName}>Submit</button>
        </div>
    )
}
const B = () => {
    const [loc,setLoc] =useState('')
    const fnLoc = ()=>{
        appStore.dispatch({type:"loc_update",payload:loc})
    }
    return (
            <div className="container container-fluid m-2 border border-primary">
                <dl className="mt-2">
                    <dt>
                        Location :
                    </dt>
                    <dd>
                        <input type="text" className="form-control" onChange={(e)=>{setLoc(e.target.value)}} />
                    </dd>
                </dl>
                <button className="btn btn-success mb-2" onClick={fnLoc}>Submit</button>
            </div>
    )
}
const C = () =>{
    return (
        <div className="container container-fluid m-2 border border-primary">
            <dl className="mt-2">
                <dt>Name : </dt>
                <dt>Location :</dt>
            </dl>
        </div>
    )
}
export default ReduxExample;