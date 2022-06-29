import { Containor, InputBox, Title } from "./styles/signup.styled"

export const Login = () => {
    const Button ={
        border:"0px",
        marginTop:"10px",
        padding:"10px 60px",
        marginLeft:"20%",
        backgroundColor:"#5f9ef0",
        borderRadius:"10px",
        color:"white",
    }
    return (
        <div style={Containor}>
            <h1>Signup</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                alert("Registered")
            }} style={{width:"400px",textAlign:"left",margin:"auto"}}>
                <p style={Title}>name :-</p>
                <input type="text" required={true} style={InputBox} placeholder="Enter Name"/>
                <p style={Title}>email :-</p>
                <input type="email" required={true} style={InputBox} placeholder="Enter Email"/>
                <p style={Title}>number :-</p>
                <input type="number" style={InputBox} placeholder="Enter Number"/>
                <p style={Title}>Country :-</p>
                <input type="text" style={InputBox} placeholder="Enter Country"/>
                <p style={Title}>city :-</p>
                <input type="text" style={InputBox} placeholder="Enter City"/>
                <p style={Title}>state :-</p>
                <input type="text" style={InputBox} placeholder="Enter State"/>
                <p style={Title}>message :-</p>
                <input type="text" style={InputBox} placeholder="Enter Message" />
                <br />
                <input style={Button} type="submit" value="Save" />
            </form>    
        </div>
    )
}
