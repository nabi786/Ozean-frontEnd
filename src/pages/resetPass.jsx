
import Logo from '../assets/imgs/Ozen Logo 1.png';
import sliderImg from '../assets/imgs/Group 34892 (1).png'
import BackgroundLogo from '../assets/imgs/Group 34891.png'

// components
import From from '../components/form';





function resetPass() {
    return (
        <>
            <div className='signuPage'>
                <div className='box box1'>

                    <img src={BackgroundLogo} className="backgroundImg" />

                    <div className='logoBoxFormPage'> <img src={Logo} /> </div>

                    <div className='formBox' style={{width:"70%"}}>

                        <h3>Reset Password</h3>

                        <From 
                            type='resetPass'
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



export default resetPass