
import Nikki from '../Images/my_img.jpeg';
import Nikesh from '../Images/nikki.jpeg';
import home from '../Images/homeImage.jpg'
import iNikesh from '../Images/iNikesh.jpg'
import Store from '../Store/Store'

const Data = {
    lives:'I am from India, lives in Mumbai. Passionate about Front End Developer, Especially in User Interface.',
}

const Contsint =() => {
    return(
        <>

            <div className="mainWapper shadow-sm mt-4 container d-flex  position-relative">
                    <div className='myIntro text-center'>
                            <h5 className=''>
                                Hey I am Here 
                            </h5>
                        <h2 className=''>
                                Nikesh Rajbhar  
                            </h2>

                            <h5>I am Web <a href="#">Developer</a></h5>
                        </div>
                <div className="commanBg position-relative">

                </div>
               
                <div className="bg-white homeWidth">
                    
                </div>
            </div>

            {/* <div className="mt-5 text-center"> 
                <h1 className="mb-4 heading-fonts">
                    Hii! I am Nikesh Rajbhar
                </h1>

                <button className="web-btn">
                     <a className="text-dark" href="#">
                         Web Developer
                     </a>
                </button>
            </div> */}


            <div className="about-me row mx-auto about-me py-4 justify-content-center rounded container my-5">
                    <div className="col-11 col-md-5 mb-4 mb-md-0 text-center">
                        <img  className='img-fluid my-img comman-radius' src={iNikesh} />
                    </div>
                    <div className="col-11 col-md-6 ">
                        <h2 className='mb-3 comman-info'>
                            About Me
                        </h2>

                        <div>
                            <p className='mb-1'>
                                 {Data.lives}
                            </p>

                            <div className='mt-2 '>
                                
                                {Store.map( (items) => {
                                    return (
                                        <div className='d-flex mt-3   bg-white'>
                                            <div>
                                                <p className='fw-bolder  p-0'>
                                                   {items.title}: 
                                                 </p>
                                            </div>    
                                              
                                            <div>
                                                 <p className='ms-3 fst-normal'>{items.name}</p>
                                             </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='mt-4 '>
                                <div className='mb-4'>
                                    <h4>
                                        <a className='me-2' href="#">11</a> 
                                        Projects Complete
                                    </h4>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-primary">
                                        Downloan CV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Contsint;