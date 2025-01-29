import React, { useState } from 'react'

function Inputs() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("Male")
    const [city, setCity] = useState("")
    const [terms, setTerms] = useState(false)
    const [Email, setEmail] = useState("")

    function handlefname(e) {
        // console.log("value is", e.target.value)
        setfname(e.target.value)
    }

    function handlelname(e) {
        setlname(e.target.value)
    }



    function handleAddress(e) {
        setAddress(e.target.value)
    }



    function handleTerms(e) {
        setTerms(e.target.checked)
    }

    function handleCityChange(e) {
        setCity(e.target.value)
    }

    function handleGender(e) {
        setGender(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }




    return (
        <>
            <div className='p-5  mt-5 shadow w-75 m-auto'>
                <h1 className='alert alert-dark text-center text-uppercase'>Using Inputs</h1>
                <input type="text" className='form control d-block w-75 my-3' placeholder='Enter your first name' onChange={handlefname} />
                <input type="text" className='form control d-block w-75 my-3' placeholder='Enter your last name' onChange={handlelname} />
                <input type="text" className='form control d-block w-75 my-3' placeholder='Enter your address' onChange={handleAddress} />
                <input type="text" className='form control d-block w-75 my-3' placeholder='Enter your email' onChange={handleEmail} />


                <input type="radio" className='' name="gender" onChange={handleGender} value="Male" checked={gender === "Male"} /> Male
                <input type="radio" className='ms-2' name="gender" onChange={handleGender} value="Female" checked={gender === "Female"} /> Female

                <br />

                <br />
                city:&nbsp;

                <select name="my-3" value={city} onChange={handleCityChange}>
                    <option value="">select a city </option>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Bikaner">Bikaner</option>
                    <option value="Bundi">Bundi</option>
                    <option value="Kota">Kota</option>
                    <option value="Dausa">Dausa</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Dholpur">Dholpur</option>
                    <option value="Badhmer">Badhmer</option>
                    <option value="Jaisalmer">Jaisalmer</option>
                    <option value="jodhpur">jodhpur</option>
                    <option value="karoli">karoli</option>
                    <option value="sikar">sikar</option>
                </select>


                <div className='my-3'>
                    < input type="checkbox" onChange={handleTerms} /> Terms and conditions
                </div>
            </div>

            <span className='d-block my-3'>first name is {fname}</span>
            <span className='d-block my-3'>last name is {lname}</span>
            <span className='d-block my-3'> address is {address}</span>
            <span className='d-block my-3'> gender is {gender}</span>
            <span className='d-block my-3'> city is {city}</span>
            <span className='d-block my-3'>Terms  is {terms ? "true" : "false"}</span>
            {/* <span className='d-block my-3'>Terms is {terms.toString()}</span> */}


        </>
    )
}

export default Inputs