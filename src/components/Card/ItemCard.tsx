import Button from '@mui/material/Button';
import {Request} from '../../useRequest';



const ItemCard = (props: Request) =>  {
  return (
        <div className="itemCard">
      <div>
        <div>
          <p className="card-title">
          {props.title}
          </p>
          {props.status === "상담중" && 
          <div className="card-status">
        {props.status}
        </div>
        }
        </div>

        <p className="card-client" color="text.secondary">
        {props.client}
        </p>
        <p className="card-due" color="text.secondary">
        {props.due+'까지 납기'}
        </p>
        <hr/>
        <div className="cardMiddle">
          <div>
            <p >도면개수</p>
            <p className="bold">{props.count && props.count+'개'}</p>
          </div>
          <div>
          <p>총 수량</p>
            <p className="bold">{props.amount && props.amount+'개'}</p>
          </div>
          <div>
          <p>가공방식</p>
            <p className="bold">{props.method && props.method.join(", ")}</p>
          </div>
          <div>
          <p>재료</p>
            <p className="bold">{props.material && props.material.join(", ")}</p>
          </div>
        </div>


      </div>
      <div className="cardBottom">

        <Button className="button" style={{backgroundColor: '#2196F3', color: '#FFFFFF', fontSize: "1.4rem"}}>요청 내역 보기</Button>
        <Button className="button" variant="outlined" style={{color: '#2196F3', fontSize: "1.4rem"}}>채팅하기</Button>
      </div>
      </div>


  );
}

export default ItemCard;