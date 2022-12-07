import React from 'react'


export default function Info() {
    return(
        <div className='info'>
            <img className='info-image' src='../images/rectangle.jpg' alt="Ann B. smiling"/>
            <h3 className='info-name'>Ann B.</h3>
            <p className='info-desc'>Blockchain Developer</p>
            <a href="https://ann-brown.com" className='info-web'>annb.website</a>
            <button className='info-btn' href="mailto: br.ann267@gmail.com">
            <a className="email-icon fa-solid fa-envelope" href="mailto: br.ann267@gmail.com"></a><p className='email-text'>Email</p></button> 
        </div>
    )
}