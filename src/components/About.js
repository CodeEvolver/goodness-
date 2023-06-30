import React from 'react';
import DevImg from '../Assets/profile-img.png';
import '../App.css';

class About extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
        <div id="about" className="surface1-dark px-4 px-sm-5 d-flex flex-column flex-sm-row-reverse justify-content-sm-between align-items-sm-center pt-sm-1 pb-sm-1" style={{height: 'auto'}}>
            <img src={DevImg} alt="Goodness developer" className="d-block mx-auto" style={{minWidth: '50%', width:'100%'}}/>
            <div className="text-sm-start mb-5 mb-sm-0" style={{minWidth:'50%'}}>
                <h2 className="text2-dark" style={{fontSize: 'clamp(14px, 2vw, 25px)'}}>Hello, Universe!</h2>
                <h1 className="text1-dark" style={{fontSize: 'clamp(20px, 3vw, 40px)'}}>I'm <span style={{textShadow:'0px 0px 7px #00ADB5', fontWeight:'bold'}}>Goodness</span>, a <span style={{textShadow:'0px 0px 7px #00ADB5', fontWeight:'bold'}}>Frontend Developer</span></h1>
                <p className="text2-dark" style={{fontSize: 'clamp(16px, 1vw, 27px)'}}>With my expertise, I can create exceptional user experiences, build responsive interfaces, and effectively manage state in web application. I bring a detail-oriented approach, a strong foundation in frontend development, and a commitment to delivering high-quality project on time.</p>
                <a href="https://wa.me/+2349015174899"><button className="btn rounded-2 p-2 brand-light text1-dark btn-hover" style={{}} >Get in Touch</button></a>
            </div>
         </div>
        );
    }
}

export { About }