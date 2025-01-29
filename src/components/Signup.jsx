import React, { useState } from "react"
function Signup() {
    const [isSubmitted, setisSubmitted] = useState(false)
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        address: "",
        email: "",
        password: "",
        confirmpassword: "",
        city: "",
        gender: "",
        terms: false


    })
    const [error, setError] = useState({})

    // console.log("error is", error);



    function handlefname(e) {
        let localUser = { ...user };
        localUser.fname = e.target.value
        setUser(localUser)
    }

    function handlelname(e) {
        let localUser = { ...user };
        localUser.lname = e.target.value;
        setUser(localUser)
    }

    function handleaddress(e) {
        let localUser = { ...user };
        localUser.address = e.target.value;
        setUser(localUser)
    }
    function handleemail(e) {
        let localUser = { ...user };
        localUser.email = e.target.value;
        setUser(localUser)
    }

    function handlepassword(e) {
        let localUser = { ...user };
        localUser.password = e.target.value;
        setUser(localUser)
    }


    function handleconfirmpassword(e) {
        let localUser = { ...user };
        localUser.confirmpassword = e.target.value;
        setUser(localUser)
    }


    function handlecityChange(e) {
        let localUser = { ...user };
        localUser.city = e.target.value;
        setUser(localUser)
    }


    function handleGender(e) {
        let localUser = { ...user };
        localUser.gender = e.target.value;
        setUser(localUser)
    }

    function handleTerms(e) {
        let localUser = { ...user };
        localUser.terms = e.target.value;
        setUser(localUser)
    }

















    function handleSubmit() {
        setisSubmitted(true)

        if (isverify()) {
            console.log("first name is", user.fname)
            console.log("last name is", user.lname)
            console.log("address is", user.address)
            console.log("email is", user.email)
            console.log("password is", user.password)
            console.log("confirmpassword is", user.confirmpassword)
            console.log("city is", user.city)
            console.log("gender is", user.gender)
            console.log("terms is", user.terms)



        }
        else {
            console.log("somthing went wrong ")
        }
    }


    function isverify() {
        let verify = true;

        let localError = {
            fname: {
                errorStatus: false,
                errorDetail: ""
            },
            lname: {
                errorStatus: false,
                errorDetail: ""
            },
            address: {
                errorStatus: false,
                errorDetail: ""
            },
            email: {
                errorStatus: false,
                errorDetail: ""
            },
            password: {
                errorStatus: false,
                errorDetail: ""
            },
            confirmpassword: {
                errorStatus: false,
                errorDetail: ""
            },
            city: {
                errorStatus: false,
                errorDetail: ""
            },

            gender: {
                errorStatus: false,
                errorDetail: ""
            },
            terms: {
                errorStatus: false,
                errorDetail: ""
            }



        }

        if (user.fname?.length == 0) {
            localError.fname.errorStatus = true
            localError.fname.errorDetail = "first name must be required"
            verify = false
        }
        else if (user.fname?.length < 2) {
            localError.fname.errorStatus = true
            localError.fname.errorDetail = "first name at least 2 chars"
            verify = false
        }

        if (user.lname?.length == 0) {
            localError.lname.errorStatus = true
            localError.lname.errorDetail = "last name must be required"
            verify = false
        }
        else if (user.lname?.length < 4) {
            localError.lname.errorStatus = true
            localError.lname.errorDetail = "last name at least 4 chars"
            verify = false
        }

        if (user.address?.length == 0) {
            localError.address.errorStatus = true
            localError.address.errorDetail = "address must be required"
            verify = false
        }

        else if (user.address?.length < 10) {
            localError.address.errorStatus = true
            localError.address.errorDetail = "address at least 6 chars"
            verify = false
        }

        if (user.email?.length == 0) {
            localError.email.errorStatus = true
            localError.email.errorDetail = "email must be required"
            verify = false
        }

        else if (user.email?.length < 5) {
            localError.email.errorStatus = true
            localError.email.errorDetail = "email at least 5 chars"
            verify = false
        }


        if (user.password?.length == 0) {
            localError.password.errorStatus = true
            localError.password.errorDetail = "password must be required"
            verify = false
        }

        else if (user.password?.length < 5) {
            localError.password.errorStatus = true
            localError.password.errorDetail = "password at least 5 chars"
            verify = false
        }

        if (user.confirmpassword?.length == 0) {
            localError.confirmpassword.errorStatus = true
            localError.confirmpassword.errorDetail = "confirmpassword must be required"
            verify = false
        }

        else if (user.confirmpassword?.length < 5) {
            localError.confirmpassword.errorStatus = true
            localError.confirmpassword.errorDetail = "confirmpassword at least 5 chars"
            verify = false
        }

        if (user.city?.length == 0) {
            localError.city.errorStatus = true
            localError.city.errorDetail = "city must be select"
            verify = false
        }

        if (user.gender?.length == 0) {
            localError.city.errorStatus = true
            localError.city.errorDetail = " "
            verify = false
        }

        if (user.terms?.length == 0) {
            localError.terms.errorStatus = true
            localError.terms.errorDetail = " "
            verify = false
        }











        // console.log("local error are", localError);

        setError(localError)
        return verify
    }

    return (
        <>
            <div className="p-5 my-5 shadow w-75 m-auto">
                <h1 className="alert alert-dark text-center text-uppercase">Signup</h1>

                <label htmlFor="Fname" className="form-label">first Name: </label>
                <input type="text" className="form-control mb-3" id="fname" placeholder="Enter your first name" onChange={handlefname} />
                {error.fname?.errorStatus && <p className="text-danger">{error.fname?.errorDetail}</p>}


                <label htmlFor="lname" className="form-label">Last Name: </label>
                <input type="text" className="form-control mb-3" id="lname" placeholder="Enter your last name" onChange={handlelname} />
                {error.lname?.errorStatus && <p className="text-danger">{error.lname?.errorDetail}</p>}

                <label htmlFor="address" className="form-label">address: </label>
                <input type="text" className="form-control mb-3" id="address" placeholder="enter your address" onChange={handleaddress} />
                {error.address?.errorStatus && <p className="text-danger"> {error.address?.errorDetail} </p>}

                <div className="my-3">
                    <label htmlFor="city" className="form-label me-3">City : </label>
                    <select className="form-select" value={user.city} id="city" onChange={handlecityChange}>
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
                    {error.city?.errorStatus && <p className="text-danger"> {error.city?.errorDetail} </p>}
                    {/* {isSubmitted && error.city?.errorStatus && <p className="text-danger">{error.city?.errorDetail}</p>} */}
                </div>


                <label htmlFor="email" className="form-label">email: </label>
                <input type="text" className="form-control mb-3" id="email" placeholder="enter your email" onChange={handleemail} />
                {error.email?.errorStatus && <p className="text-danger"> {error.email?.errorDetail} </p>}

                <label htmlFor="password" className="form-label">password: </label>
                <input type="text" className="form-control mb-3" id="password" placeholder="enter your password" onChange={handlepassword} />
                {error.password?.errorStatus && <p className="text-danger"> {error.password?.errorDetail} </p>}

                <label htmlFor="confirmpassword" className="form-label">confirm password: </label>
                <input type="text" className="form-control mb-3" id="confirmpassword" placeholder="enter your confirm password" onChange={handleconfirmpassword} />
                {error.confirmpassword?.errorStatus && <p className="text-danger"> {error.confirmpassword?.errorDetail} </p>}


                <div>
                    <label htmlFor="gendermale" className="form-label me-3">Gender: </label>
                    <input type="radio" className="" name="gender" id="gendermale" onChange={handleGender} value="Male" checked={user.gender === "Male" ? "checked" : ""} /><strong>Male</strong>
                    <input type="radio" className="ms-2" name="gender" onChange={handleGender} value="Female" checked={user.gender === "Female" ? "checked" : ""} /> <strong>Female</strong>
                </div>

                <div className="my-3">
                    <input type="checkbox" onChange={handleTerms} className="" /> Terms and conditions
                    {isSubmitted && error.terms?.errorStatus && <p className="text-danger">{error.terms?.errorDetail}</p>}
                    {/* {isSubmitted && !terms && <p className="text-danger">Please select terms and condition</p>} */}
                </div>








                <button className="btn btn-dark btn-sm px-5 d-block m-auto" onClick={handleSubmit}>Register me </button>
            </div>
        </>
    );
}


export default Signup;