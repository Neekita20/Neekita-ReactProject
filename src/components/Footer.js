import React from 'react'
import './Footer.scss'
import { FacebookLogo ,InstagramLogo, LinkedinLogo} from 'phosphor-react'
export const Footer = () => {
    return (
        <>
   
            <ul class="nav justify-content-center" style={{margin:"30px"}}>
            <li class="nav-item" style={{margin:"12px",color:"grey"}}> 
            <h6>Follow Us:</h6>
            </li>
                <li class="nav-item" >
                    <a class="nav-link active" aria-current="page" href="#"><FacebookLogo size={30} /></a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><InstagramLogo size={30} /></a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><LinkedinLogo size={30} /></a>
                </li>
            </ul>
        
        </>
    )
}
