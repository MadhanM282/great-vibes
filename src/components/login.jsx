import { useState } from "react"
import { Containor, InputBox, Title } from "./styles/signup.styled"

export const Login = () => {
    const [data, SetData] = useState({
        name: "",
        email: "",
        number: "",
        country: "",
        state: "",
        message: ""
    })

    const Button = {
        border: "0px",
        marginTop: "10px",
        padding: "10px 60px",
        marginLeft: "20%",
        backgroundColor: "#5f9ef0",
        borderRadius: "10px",
        color: "white",
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
        SetData({ ...data, [id]: value })
    }

    const handelCheck = () => {
        if (data.name === "") {
            alert("Please enter name")
        }
        else if (data.email === "") {
            alert("Please enter email")
        }
        else if (data.number.length !== 10) {
            alert("please enter a valid number")
        }
        else if (data.country === "") {
            alert("Please enter country")
        }
        else if (data.state === "") {
            alert("Please enter state")
        }
        else if (data.city === "") {
            alert("please enter city")
        }
        else if(data.message===""){
            alert("Please enter message")
        }else{
            alert("Registered")
        }
    }
    return (
        <div style={Containor}>
            <h1>Signup</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handelCheck()
                
            }} style={{ width: "400px", textAlign: "left", margin: "auto" }}>
                <p style={Title}>name :-</p>
                <input id="name" onChange={handleChange} type="text" required={true} style={InputBox} placeholder="Enter Name" />
                <p style={Title}>email :-</p>
                <input id="email" onChange={handleChange} type="email" required={true} style={InputBox} placeholder="Enter Email" />
                <p style={Title}>number :-</p>
                <input id="number" onChange={handleChange} type="number" style={InputBox} placeholder="Enter Number" />
                <p style={Title}>Country :-</p>
                <input id="country" onChange={handleChange} type="text" style={InputBox} placeholder="Enter Country" />
                <p style={Title}>city :-</p>
                <input id="city" onChange={handleChange} type="text" style={InputBox} placeholder="Enter City" />
                <p style={Title}>state :-</p>
                <input id="state" onChange={handleChange} type="text" style={InputBox} placeholder="Enter State" />
                <p style={Title}>message :-</p>
                <input id="message" onChange={handleChange} type="text" style={InputBox} placeholder="Enter Message" />
                <br />
                <input style={Button} type="submit" value="Save" />
            </form>
        </div>
    )
}

