
import Nikki from '../Images/my_img.jpeg';
import Nikesh from '../Images/nikki.jpeg';

const Data = {
    lives:'I am from India, lives in Mumbai. Passionate about Front End Developer, Especially in User Interface, Currently I am S-Y B-com student',
}

const Contsint =() => {
    return(
        <>
            <div className="mt-5 text-center"> 
                <h1 className="mb-4 heading-fonts">
                    Hii! I am Nikesh Rajbhar
                </h1>

                <button className="web-btn">
                     <a className="text-dark" href="#">
                         Web Developer
                     </a>
                </button>
            </div>


            <div className="about-me row mx-auto about-me py-4 justify-content-center rounded container my-5">
                    <div className="col-8 col-md-5 mb-4 mb-md-0 text-center">
                        <img  className='img-fluid my-img comman-radius' src={Nikesh} />
                        {/* <img  className='img-fluid my-img comman-radius' src={Nikki} /> */}
                    </div>
                    <div className="col-8 col-md-6 text-center center-all-data">
                        <h2 className='mb-3 comman-info'>
                            About Me
                        </h2>

                        <p className='mb-1'>
                           {Data.lives}
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Contsint;