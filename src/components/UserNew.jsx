import React, { useEffect, useState } from "react"

function UserNew() {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        address: "",
        city: "",
        dob: "",
        gender: "",
        email: "",
        password: "",
        cpassword: "",
        terms: false
    })

    const [isSubmitted, setisSubmitted] = useState(false)
    const [error, setError] = useState({})

    function handleUser(e) {
        if (e.target.name === "terms")
            setUser({ ...user, [e.target.name]: e.target.checked })
        else
            setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit() {
        setisSubmitted(true)

        if (isverify())
            console.log("user is", user)

        else
            console.log("somthing went wrong")

    }

    function isverify() {
        let valid = true;
        let localError = {};

        function addErrorMessage(key, statusValue, detailValue) {
            localError[key] = {
                errorStatus: statusValue,
                errorDetail: detailValue
            }

            valid = false
        }


        if (user.fname?.length === 0)
            addErrorMessage("fname", true, "first name must be required")
        else if (user.fname?.length < 2)
            addErrorMessage("fname", true, "first name at least 2 chars")


        if (user.lname?.length === 0)
            addErrorMessage("lname", true, "last name must be required")
        else if (user.lname?.length < 4)
            addErrorMessage("lname", true, "last name at least 4 chars")


        if (user.address?.length === 0)
            addErrorMessage("address", true, "address must be required")
        else if (user.address?.length < 6)
            addErrorMessage("address", true, "address at least 6 chars")


        if (user.email?.length === 0)
            addErrorMessage("email", true, "email must be required")
        else if (user.email?.length < 8)
            addErrorMessage("email", true, "email at least 8 chars")


        if (user.password?.length === 0)
            addErrorMessage("password", true, "password must be required")
        else if (user.password?.length < 10)
            addErrorMessage("password", true, "password at least 10 chars")


        if (user.cpassword?.length === 0)
            addErrorMessage("cpassword", true, "confirm password must be required")
        else if (user.cpassword?.length < 10)
            addErrorMessage("cpassword", true, "confirm password does not matched")


        if (!user.city)
            addErrorMessage("city", true, "please select the city")


        if (!user.dob)
            addErrorMessage("dob", true, "please select the date")


        if (!user.terms)
            addErrorMessage("terms", true, "please check terms and condition")


        console.log('local error is', localError)

        setError(localError)
        return valid
    }

    console.log("issubmitted is", isSubmitted);


    useEffect(() => {
        isverify()
    }, [user])

    console.log("user is", user)

    return (
        <>
            <div className="p-5 my-5 shadow w-75 m-auto">
                <h1 className="alert-dark text-center text-uppercase m-5">Newsignup</h1>

                <label htmlFor="fname" className="form-label">first name:</label>
                <input type="text" name="fname" className="form-control mb-3" id="fname" placeholder="Enter your first name " onChange={handleUser} />
                {isSubmitted && error.fname?.errorStatus && <p className="text-danger">{error.fname?.errorDetail}</p>}

                <label htmlFor="lname" className="form-label">Last Name: </label>
                <input type="text" name="lname" className="form-control mb-3" id="lname" placeholder="Enter your last name" onChange={handleUser} />
                {isSubmitted && error.lname?.errorStatus && <p className="text-danger">{error.lname?.errorDetail}</p>}


                <label htmlFor="address" className="form-label">address: </label>
                <input type="text" name="address" className="form-control mb-3" id="address" placeholder="Enter your address" onChange={handleUser} />
                {isSubmitted && error.address?.errorStatus && <p className="text-danger">{error.address?.errorDetail}</p>}


                <div className="my-3">
                    <label htmlFor="city" className="form-label me-3">City : </label>
                    <select className="form-select" value={user.city} id="city" name="city" onChange={handleUser}>
                        <option value="">Select a city</option>
                        <option value="Ajmer">Ajmer</option>
                        <option value="Bikaner">Bikaner</option>
                        <option value="Banswara">Banswara</option>
                        <option value="Bundi">Bundi</option>
                        <option value="Dausa">Dausa</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Jodhpur">Jodhpur</option>
                        <option value="Kota">Kota</option>
                    </select>
                    {isSubmitted && error.city?.errorStatus && <p className="text-danger">{error.city?.errorDetail}</p>}
                </div>


                <label htmlFor="email" className="form-label">email: </label>
                <input type="text" name="email" className="form-control mb-3" id="email" placeholder="enter your email" onChange={handleUser} />
                {isSubmitted && error.email?.errorStatus && <p className="text-danger">{error.email?.errorDetail}</p>}


                <label htmlFor="password" className="form-label">password: </label>
                <input type="text" name="password" className="form-control mb-3" id="password" placeholder="enter your password" onChange={handleUser} />
                {isSubmitted && error.password?.errorStatus && <p className="text-danger">{error.password?.errorDetail}</p>}

                <label htmlFor="confirmpassword" className="form-label">confirm password: </label>
                <input type="text" name="password" className="form-control mb-3" id="confirmpassword" placeholder="enter your confirm password" onChange={handleUser} />
                {isSubmitted && error.cpassword?.errorStatus && <p className="text-danger">{error.cpassword?.errorDetail}</p>}

                <div>
                    <label htmlFor="gendermale" className="form-label me-3">Gender: </label>
                    <input type="radio" className="" name="gender" id="gendermale" onChange={handleUser} value="Male" checked={user.gender === "Male" ? "checked" : ""} /><strong>Male</strong>
                    <input type="radio" className="ms-2" name="gender" onChange={handleUser} value="Female" checked={user.gender === "Female" ? "checked" : ""} /> <strong>Female</strong>
                </div>


                <div className="my-3">
                    <input type="checkbox" onChange={handleUser} className="" /> Terms and conditions
                    {isSubmitted && error.terms?.errorStatus && <p className="text-danger">{error.terms?.errorDetail}</p>}
                    {/* {isSubmitted && !terms && <p className="text-danger">Please select terms and condition</p>} */}
                </div>


                <button className="btn btn-dark btn-sm px-5 d-block m-auto" onClick={handleSubmit}>Register me </button>
            </div>

        </>
    )
}


export default UserNew;