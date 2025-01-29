import React, { useEffect, useState } from 'react'

function DataStore() {

    const [accno, setAccno] = useState()
    const [name, setName] = useState("")

    function handleAcc(e) {
        setAccno(e.target.value)
    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handleSubmit() {
        let mydetail = accno + " " + name;
        console.log("mydetail is", mydetail)

        if (localStorage.getItem("user1")) {
            let previousData = JSON.parse(localStorage.getItem("user1"))
            let updatedData = previousData.concat(mydetail)
            localStorage.setItem("user1", JSON.stringify(updatedData))
        }
        else {
            localStorage.setItem("user1", JSON.stringify([mydetail]))
        }
        setAccno("")
        setName("")
    }


    useEffect(() => {
        if (!localStorage.getItem("user1"))
            localStorage.setItem('user1', "[]")
    }, [])


    return (
        <>

            <div className='shadow w-75 m-auto p-5'></div>
            <h1 className='m-5 text-center'>DataStore</h1>
            <input type="text" className='form-control w-75 m-auto mb-3' placeholder='Enter your account no' onChange={handleAcc} value={accno} />
            <input type="text" className='form-control w-75 m-auto' placeholder='enter your name' onChange={handleName} value={name} />

            <button className='btn btn-sm btn-dark px-5 d-block m-auto mt-5' onClick={handleSubmit}>Submit</button>


        </>
    )
}

export default DataStore