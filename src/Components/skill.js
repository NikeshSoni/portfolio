
import html_work from '../Images/Html_css-main.png';
import bootstrap from '../Images/bootstrap-logo.png';
import JAVASCRIPT from '../Images/javascript-work-main.png';
import react from '../Images/React.png'

const Skills = () => {

    let html_image = html_work;
    let script = bootstrap;
    let React_img = react;
    let Javascript = JAVASCRIPT;

    const skillData = [
        {
            image:html_image,
            headLine:'HTML & CSS',
            para:'Able To create Reaponsive web Pages'
        },
        {
            image:script,
            headLine:'bootstrap & SCSS',
            para:'Using Css library and Scss Style'
            
        },
        {
            image:React_img,
            headLine:'React Js',
            para:'Able To create wepsite On using React.js'
        },
        {
            image:Javascript,
            headLine:'JAVASCRIPT',
            para:'create A webpage Using Javascript & ECMA 6'
            
        }
    ]

    return(
        <>
            <div className="my-5 text-center">
                <h2  className='fw-bolder'>
                   Skills
                </h2>
            </div>

            <div className=" mx-auto justify-content-center row gap-4">


                {skillData.map((my_skills) => {
                    return(
                            
                     <div className='my-skiil rounded col-9 col-md-5 col-lg-4  justify-content-center'>
                            <div className='p-5 main-data background-comman'>
                                <div className='d-flex comman-image justify-content-center gap-3'>
                                    <img   className='img-fluid skills-img' src={my_skills.image} />
                                </div>

                                <div className='text-center'>
                                    <h4 className='mt-2'>
                                        {my_skills.headLine}
                                    </h4> 
                                    <p>
                                        {my_skills.para}
                                   </p>
                                </div>
                            </div>
                     </div>
                    )
                })}
           </div>
            
        </>
    )
}

export default Skills;