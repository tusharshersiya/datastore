// import axios from "axios"
import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Register() {

    const navigate = useNavigate();

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [contact, setContact] = useState("")
    const [emailid, setEmailid] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    const [fnameerr, setFnameerr] = useState("")
    const [lnameerr, setLnameerr] = useState("")
    const [addresserr, setAddresserr] = useState("")
    const [cityerr, setCityerr] = useState("")
    const [contacterr, setContacterr] = useState("")
    const [emailiderr, setEmailiderr] = useState("")
    const [passworderr, setPassworderr] = useState("")
    const [cpassworderr, setCpassworderr] = useState("")

    const [isSubmitted, setisSubmitted] = useState(false)



    const handleFnameChange = (e) => {
        setFname(e.target.value)
    }

    const handleLnameChange = (e) => {
        setLname(e.target.value)
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleContactChange = (e) => {
        setContact(e.target.value)
    }

    const handleMailChange = (e) => {
        setEmailid(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleCpasswordChange = (e) => {
        setCpassword(e.target.value)
    }


    console.log("fname is", fname)
    console.log("lname is", lname)
    console.log("address is", address)
    console.log("city is", city)
    console.log("contact is", contact)
    console.log("mail is", emailid)
    console.log("password is", password)
    console.log("cpassword is", cpassword)




    function verify() {
        let valid = true;

        let email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        let password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-z]).{8,}$/gm

        if (!fname) {
            setFnameerr("First name must be required");
            valid = false;
        } else if (fname.length < 2) {
            setFnameerr("First name must be at least 2 chars");
            valid = false;
        } else {
            setFnameerr("");
        }

        if (!lname) {
            setLnameerr("last name must be required");
            valid = false;
        } else if (fname.length < 4) {
            setLnameerr("last name must be at least 4 chars");
            valid = false;
        } else {
            setLnameerr("");
        }

        if (!address) {
            setAddresserr("Address name must be required");
            valid = false;
        } else if (fname.length < 10) {
            setAddresserr("Address name must be at least 10 chars");
            valid = false;
        } else {
            setAddresserr("");
        }

        if (!city) {
            setCityerr("City name must be required");
            valid = false;
        } else if (fname.length < 3) {
            setCityerr("City name must be at least 3 chars");
            valid = false;
        } else {
            setCityerr("");
        }

        if (!contact) {
            setContacterr("Contact must be required");
            valid = false;
        } else if (fname.length < 10) {
            setContacterr("Contact must be exctly 10 chars");
            valid = false;
        } else {
            setContacterr("");
        }

        if (!emailid) {
            setEmailiderr("Mail must be required");
            valid = false;
        } else if (!email_pattern.test(emailid)) {
            setEmailiderr("Email format not valid");
            valid = false;
        } else {
            setEmailiderr("");
        }

        if (password.length === 0) {
            setPassworderr("Password must be required");
            valid = false;
        } else if (!password_pattern.test(password)) {
            setPassworderr("Password must contain at least 8 characters, including uppercase, lowercase, a number, and a sepcial character.");
            valid = false;
        } else {
            setPassworderr("");
        }

        if (!cpassword) {
            setCpassworderr("Confirm password must be required");
            valid = false;
        } else if (password !== cpassword) {
            setCpassworderr("Password do not match");
            valid = false;
        } else {
            setCpassworderr("");
        }

        return valid;
    }


    const handleRegister = async () => {
        setisSubmitted(true)

        if (verify()) {


            toast.success("register successfull", {
                duration: 600
            })


            const timer = setTimeout(() => {
                navigate('/login');
                clearTimeout(timer);
            }, 700);
        }
        else {
            toast.error("something went wrong")
        }

    }


    useEffect(() => {
        verify()
    }, [fname, lname, address, city, contact, emailid, password, cpassword])

    return (
        <>
            <Toaster />
            <div className="w-75 py-5 px-2 shadow m-auto mt-5 pt-2 border border-secondary" style={{ borderRadius: "5px" }} id="regpage">
                <h1 className="alert alert-dark text-center">Registration From</h1>

                <label htmlFor="fname" className="mt-3">First Name :</label>
                <input type="text" placeholder="Enter your first name" className="form-control" id="fname" onChange={handleFnameChange} />
                {isSubmitted && <p className="text-danger">{fnameerr}</p>}

                <label htmlFor="lname" className="mt-3">Last Name :</label>
                <input type="text" placeholder="Enter your last name" className="form-control" id="lname" onChange={handleLnameChange} />
                {isSubmitted && <p className="text-danger">{lnameerr}</p>}

                <label htmlFor="address" className="mt-3"> Address :</label>
                <input type="text" placeholder="Enter your address" className="form-control" id="address" onChange={handleAddressChange} />
                {isSubmitted && <p className="text-danger">{addresserr}</p>}

                <label htmlFor="city" className="mt-3"> City :</label>
                <input type="text" placeholder="Enter your city" className="form-control" id="city" onChange={handleCityChange} />
                {isSubmitted && <p className="text-danger">{cityerr}</p>}

                <label htmlFor="cnct" className="mt-3">Contact:</label>
                <input type="text" placeholder="Enter your contact number" className="form-control" id="cnct" onChange={handleContactChange} />
                {isSubmitted && <p className="text-danger">{contacterr}</p>}

                <label htmlFor="mail" className="mt-3">Mail Id :</label>
                <input type="text" placeholder="Enter your mail id" className="form-control" id="mail" onChange={handleMailChange} />
                {isSubmitted && <p className="text-danger">{emailiderr}</p>}

                <label htmlFor="pwd" className="mt-3">Password:</label>
                <input type="text" placeholder="Enter your password" className="form-control" id="pwd" onChange={handlePasswordChange} />
                {isSubmitted && <p className="text-danger">{passworderr}</p>}

                <label htmlFor="cpwd" className="mt-3">Confirm password :</label>
                <input type="text" placeholder="Enter your last name" className="form-control" id="cpwd" onChange={handleCpasswordChange} />
                {isSubmitted && <p className="text-danger">{cpassworderr}</p>}

                <button className="btn btn-dark btn-sm d-block m-auto" onClick={handleRegister}>Register</button>
            </div >

        </>
    )
}

export default Register