import Switch from '@mui/material/Switch';
import {
  isMobile,
} from "react-device-detect";


export default function ToggleSwitch(props:any) {
  const switchClass = isMobile ? 'switchWrapper mobile' :'switchWrapper';

  return (
    <div className={switchClass}>
      <Switch
            checked={props.checked}
            onChange={props.handleSwitchChange}
            inputProps={{ 'aria-label': 'controlled' }}
            />
            <span style={{margin:'auto', fontSize:'1.4rem'}}>상담 중인 요청만 보기</span>
    </div>
  );
}