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
    return (
        <div className="container container-fluid m-2 border border-primary">
            <dl className="mt-2">
                <dt> Name : </dt>
                <dd> <input className="form-control" type="text" /> </dd>
                <dd><button className="btn btn-success">Submit</button></dd>
            </dl>
        </div>
    )
}
const B = () => {
    return (
            <div className="container container-fluid m-2 border border-primary">
                <dl className="mt-2">
                    <dt>
                        Location :
                    </dt>
                    <dd>
                        <input type="text" className="form-control" />
                    </dd>
                    <dd>
                        <button className="btn btn-success">Submit</button>
                    </dd>
                </dl>
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