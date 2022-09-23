import { Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"




function Form(props) {
    console.log(props.type)
    let navigate = useNavigate();
    return (
        <>


            <div className="formSignup">

                {(() => {
                    if (props.type == 'signup') {

                        return (
                            <>

                                <form>
                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>Email</label>
                                        <input type='email' placeholder="enter your email" />
                                    </div>
                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>password </label>
                                        <input type='password' placeholder="password" />
                                    </div>


                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>confirm password</label>
                                        <input type='password' placeholder="confirm password" />
                                    </div>




                                    <div className="formDiv">
                                        <button className="btn1">
                                            Submit
                                        </button>

                                    </div>


                                    <div className="formDiv">
                                        <button className="btn2">
                                            Login With Google
                                        </button>

                                    </div>



                                    <Box style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Box>

                                            <Typography>
                                                Already Have An Account
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Button varient='text' onClick={() => navigate('/')}>
                                                Login
                                            </Button>
                                        </Box>
                                    </Box>

                                    


                                </form>


                            </>
                        )

                    }else if(props.type == 'resetPass'){
                        return (
                            <>

                                <form>
                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>old password </label>
                                        <input type='password' placeholder="old password" />
                                    </div>


                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>new password</label>
                                        <input type='password' placeholder="new password" />
                                    </div>




                                    <div className="formDiv">
                                        <button className="btn1">
                                            Submit
                                        </button>

                                    </div>




                                    <Box style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Box>

                                            <Typography>
                                                Already Have An Account
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Button varient='text' onClick={() => navigate('/')}>
                                                Login
                                            </Button>
                                        </Box>
                                    </Box>

                                    


                                </form>


                            </>
                        )
                    }else if(props.type == 'login'){
                        return(
                            <>

                                <form>
                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>Email</label>
                                        <input type='email' placeholder="enter your email" />
                                    </div>
                                    <div className="formDiv">
                                        <label style={{ "textTransform": "capitalize" }}>password </label>
                                        <input type='password' placeholder="password" />
                                    </div>

                                    <div className="formDiv">
                                        <button className="btn1">
                                            Submit
                                        </button>

                                    </div>


    



                                  

                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Box>
                                            <Typography>
                                                Not Register Yet
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Button variant="text" onClick={() => navigate("/signup")}>SignUp</Button>
                                        </Box>
                                    </Box>


                                </form>


                            </>
                        )
                    }
                })()}


            </div>
        </>
    )
}

export default Form