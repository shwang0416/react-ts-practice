import React from 'react';
import {Header, MobileHeader} from './components/Header';
import CategoryFilter from './components/Filter/CategoryFilter';
import CategoryCard from './components/Card/CategoryCard';
import { SelectChangeEvent } from '@mui/material/Select';
import './App.css';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

function App() {

  const [methodsCheckedList, setMethodsCheckedList] = React.useState(new Set());
  const [materialsCheckedList, setMaterialsCheckedList] = React.useState(new Set());


  const handleMethodsCheckedList = (event: SelectChangeEvent<string[]>) => {
      const {
          target: { value },
      } = event;
      console.log(value);
      if (methodsCheckedList.has(value)) {
        setMethodsCheckedList(prev => {
            const next = new Set(prev);
      
            next.delete(value);
      
            return next;
          });
      }
      else {
        setMethodsCheckedList(prev => new Set(prev).add(value));
      }
  }

  const handleMaterialsCheckedList = (event: SelectChangeEvent<string[]>) => {
      const {
          target: { value },
      } = event;
      if (materialsCheckedList.has(value)) {
        setMaterialsCheckedList(prev => {
            const next = new Set(prev);
      
            next.delete(value);
      
            return next;
          });
      }
      else {
        setMaterialsCheckedList(prev => new Set(prev).add(value));
      }
  }

  const resetCheckedList = () => {
      setMethodsCheckedList(new Set());
      setMaterialsCheckedList(new Set());
  }

  const [inNegoChecked, setInNegoChecked] = React.useState(false);
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInNegoChecked(event.target.checked);
  };

  return (
    <div className="App">
    <BrowserView>
      <Header/>
      <div className="categoryContainer">
        <CategoryFilter 
          handleMethodsCheckedList={handleMethodsCheckedList} methodsCheckedList= {methodsCheckedList}
          handleMaterialsCheckedList={handleMaterialsCheckedList} materialsCheckedList= {materialsCheckedList}
          resetCheckedList={resetCheckedList}
          inNegoChecked={inNegoChecked} handleSwitchChange={handleSwitchChange}
          />
        <CategoryCard methodsCheckedList={methodsCheckedList} materialsCheckedList={materialsCheckedList} onNegoChecked={inNegoChecked}/>
      </div>
      </BrowserView>
      <MobileView>
      <MobileHeader/>
      
      <div className="categoryContainer mobile">
        <CategoryFilter 
          handleMethodsCheckedList={handleMethodsCheckedList} methodsCheckedList= {methodsCheckedList}
          handleMaterialsCheckedList={handleMaterialsCheckedList} materialsCheckedList= {materialsCheckedList}
          resetCheckedList={resetCheckedList}
          inNegoChecked={inNegoChecked} handleSwitchChange={handleSwitchChange}
          />
        <CategoryCard methodsCheckedList={methodsCheckedList} materialsCheckedList={materialsCheckedList} onNegoChecked={inNegoChecked}/>
      </div>
      </MobileView>
    </div>


  );
}

export default App;
