
import Logo from '../assets/imgs/Ozen Logo 1.png';
import sliderImg from '../assets/imgs/Group 34892 (1).png'
import BackgroundLogo from '../assets/imgs/Group 34891.png'

// components
import From from '../components/form';





function Login() {
    return (
        <>
            <div className='signuPage'>
                <div className='box box1'>

                    <img src={BackgroundLogo} className="backgroundImg" />

                    <div className='logoBoxFormPage'> <img src={Logo} /> </div>

                    <div className='formBox'>

                        <h3>Hi, Welcome Back</h3>
                        <p>
                            Start your 8 days free triel. No any card required.
                        </p>

                        <From
                            type = 'login'
                        />
                    </div>
                </div>
                <div className='box box2'>
                    <img src={sliderImg} />

                </div>
            </div>
        </>
    )
}



export default Login