
import '../index.css';
import './Header.css';
import React, {useEffect, useRef} from 'react';
import logo from '../resource/img/logo.png';
import logoBlue from '../resource/svg/logo_blue.svg';
import companySvg from '../resource/svg/company.svg';
import hamburgerMenu from '../resource/svg/menu_24px.svg';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import structureIcon from '../resource/svg/structure_15px.svg';

const Header = () => ( 
    <div className="header">
        <img src={logo} className="logo"/>
        <div className="userFrame">
            <div>
                <img src={companySvg} style={{marginRight:"10px"}}/>
                <p>A가공업체</p>
            </div>

            <p>|</p>
            <p>로그아웃</p> 
        </div>

    </div>
 );

 const MobileHeader = () => {
    const navRef = useRef(null);
    const [isActive, setisActive] = useDetectOutsideClick(navRef, false);
    const MobileNav = 
             <>
                <div className={isActive ?"mobile-navitem active" : "mobile-navitem"}>
                    <img src={structureIcon} style={{marginRight:"8px"}}/>
                파트너 정밀가공
                </div>            
                <div className={isActive ?"mobile-navitem active" : "mobile-navitem"}>
                로그아웃
                </div>
            </>



    useEffect(()=>{
        console.log(isActive);
        if(isActive) (document.getElementById('nav-overlay')as HTMLElement).className = "nav-overlay active";
        else (document.getElementById('nav-overlay')as HTMLElement).className = "nav-overlay none";     },[isActive]);

    const onClick = (event: React.MouseEvent<HTMLElement>) => {

        setisActive(!isActive);
    };

    return (
        <>
 
 
        <nav 
        arai-label="mobile navigation"  
        className={`mobile-nav-wrapper ${isActive ? "open" : ""}`}
        ref={navRef}
        >
        <div className="mobile-header nav">
       <img src={logoBlue} className="mobile-logo"/>
       </div>
        {MobileNav} 
        </nav>
        <div id="nav-overlay" className="nav-overlay none">

        </div>
        <div className="mobile-header">
            <img src={hamburgerMenu} className="hamberger-menu" onClick={onClick}/>
            <img src={logo} className="mobile-logo"/>
        </div>
        </>
    );
};
 export {Header, MobileHeader};
