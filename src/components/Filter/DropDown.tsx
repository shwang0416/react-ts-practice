import React, {useRef} from 'react';
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import greyArrow from "../../resource/img/arrow_drop_down_24px_grey.png";
import whiteArrow from "../../resource/img/arrow_drop_down_24px_white.png";
import {
  isMobile,
} from "react-device-detect";

export default function MultipleSelectCheckmarks(props:any) {
  let optionItems = props.list.map((item:string) =>
  <li className="wrap" key={item} value = {item} >
    <input type="checkbox" 
    checked={props.checkedList.has(item)}
    onChange={props.handleCheckedList}
    value={item}
    multiple
    id={item}
    />
    <label htmlFor={item} className="checkbox-icon"><span>{item}</span></label>
    
  </li>

);


const dropdownRef = useRef(null);
const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);


const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {

  const target = event.target as HTMLButtonElement;

  if (target.id !== props.id) return;


  setIsActive(!isActive);
};


const getCountChecked = () => {
    const countChecked = props.checkedList.size;
    if(props.checkedList.size) return <p>{"("+countChecked+')'}</p>
    else return '';
}


return (

<div className="dropdown-button"> 
  
  <button onClick={onClick} className={props.checkedList.size ?"menu-trigger active" :"menu-trigger"} id={props.id}>
    {props.id}{getCountChecked()}<img className="dropdown-arrow"src={isActive ? whiteArrow : greyArrow}/>
  </button>


      <div ref={dropdownRef}

      onChange={props.handleCheckedList}
          className={`${isMobile ? "menu mobile" : "menu"} ${isActive ? "active" : "inactive"}`}

      >
          <ul>

          {optionItems}
          </ul>
      </div>
</div>
  );
}