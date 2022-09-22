import { Typography,Box,Button } from "@mui/material"
import { useNavigate } from "react-router-dom"




function Form(props) {

    let navigate =useNavigate();
    return (
        <>
            <div className="formSignup">
                <form>

                    <div className="formDiv">
                        <label style={{ "textTransform": "capitalize" }}>{props.type1}</label>
                        <input type={props.type1} placeholder="enter your email" />
                    </div>
                    <div className="formDiv">
                        <label style={{ "textTransform": "capitalize" }}>{props.type2} </label>
                        <input type={props.type2} placeholder="password" />
                    </div>


                    {(() => {
                        if (props.type3 == 'confirm password') {
                            return (
                                <div className="formDiv">
                                    <label style={{ "textTransform": "capitalize" }}>{props.type3} </label>
                                    <input type={props.type3} placeholder="confirm password" />
                                </div>
                            )
                        } else {
                            return null
                        }
                    })()}



                    <div className="formDiv">
                        <button className="btn1">
                            Submit
                        </button>

                    </div>

                    {(()=>{
                        if(props.formType != 'Signup'){
                            return(
                                <div className="formDiv">
                                <button className="btn2">
                                    Signup With Google
                                </button>
        
                            </div>
                            )
                        }else{
                            return null
                        }
                    })()}
                   
                    {(() => {
                        if (props.formType == 'Signup') {
                            return (
                                <p style={{ "margin": '0px' }}>Registred Yet <a href="/login">Sign in Account</a></p>
                            )
                        } else {
                            return (
                                // <p style={{ "margin": '0px' }}>Registred Yet <a href="/">Signup Account</a></p>
                               <>
                                     <Box sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    alignItems:'center',
                                }}>
                                    <Box>
                                        <Typography>
                                            Register Yet
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Button variant="text" onClick={()=> navigate("/signup")}>SignUp</Button>
                                    </Box>
                                </Box>
                               </>
                                
                            )
                        }

                        return null;
                    })()}

                </form>
            </div>
        </>
    )
}

export default Form