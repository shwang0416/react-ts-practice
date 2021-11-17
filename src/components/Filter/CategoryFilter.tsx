import DropDown from './DropDown';
import Switch from './ToggleSwitch';
import refreshIcon from '../../resource/svg/refresh_24px.svg';
import './filter.css';
import {
    isMobile,
  } from "react-device-detect";
const methods = ["밀링", "선반"];
const materials = [
  '알루미늄',
  '탄소강',
  '구리',
  '합금강',
  '강철'
];

const isAnyChecked = (checkedList :any) => {
    return checkedList.size ? true : false;
  }

  


const CategoryFilter = (props:any) => {

    const handleResetButton = () => {
        return ((isAnyChecked(props.methodsCheckedList)) || isAnyChecked(props.materialsCheckedList)) 
      };
    const requestFilterClass = isMobile ? 'requestFilter mobile' :'requestFilter';

    return(
    
    <div className="categoryFilter">         
        <div className="requestText">
            <p className="request-title">들어온 요청</p>
            <p className="request-desc">파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
        </div>
        <div className={requestFilterClass}>
            <div className="dropdownWrapper">
            <DropDown id="가공방식" handleCheckedList={props.handleMethodsCheckedList} checkedList= {props.methodsCheckedList} list = {methods}/>
            <DropDown id="재료" handleCheckedList={props.handleMaterialsCheckedList} checkedList= {props.materialsCheckedList} list = {materials}/>
                <button className={`dropdown-btn ${handleResetButton() ? "active" : "none"}`} onClick={props.resetCheckedList}><img src={refreshIcon}/><span>필터링 리셋</span></button>
            
            </div>
            <div className="elseWrapper">
            
            <Switch handleSwitchChange={props.handleSwitchChange} checked={props.setInNegoChecked}/>
            </div>
        </div>
    </div>
 )};
 
 export default CategoryFilter;
