import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    let arr = ["tushar", "pawan", "gaurav", "sandeep", "bhasker", "harchand", "mohit", "vijay", "madur", "sahil", "vijay",]

    const [text, setText] = useState("")
    const [originalData, setoriginalData] = useState(arr)
    const [filteredData, setfilteredData] = useState([])

    function handleChange(e) {

        let filtereName = arr.filter(item => item.includes(e.target.value))
        setfilteredData(filtereName)
    }

    function handleSubmit() {
        let filtereName = arr.filter(e => e.includes(text))
        setfilteredData(filtereName)
    }


    return (
        <>
            <div className='d-flex justify-content p-4 mt-5'>
                <input type="text" onChange={handleChange} placeholder='Search your keyword' className='form-control' />
                <button onClick={handleSubmit} className='btn btn-sm btn-warning px-5 ms-1'>Search</button>
            </div>

            <div className='d-flex justify-content-between w-100 px-5'>
                <ol>
                    <h1 className='alert alert-primary'>Original date</h1>
                    {
                        originalData.map(e => <li>{e}</li>)

                    }
                </ol>
                <ol>
                    <h1 className='alert alert-success'>Filtered data</h1>
                    {
                        filteredData.map(e => <li>{e}</li>)
                    }
                </ol>


            </div>

        </>
    )
}

export default Search