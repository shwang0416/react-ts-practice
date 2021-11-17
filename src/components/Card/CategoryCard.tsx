import ItemCard from './ItemCard';
import './Card.css';
import useRequest, {Request} from '../../useRequest';




const CategoryCard = (props:any) => {
    const service = useRequest();
    let isEmpty = true;
    const manufactureFiltering = (request:Request) => {

      const methodsIntersection = (props.methodsCheckedList.size === 0 || request.method.filter(value => props.methodsCheckedList.has(value)).length) ? true : false;
      const materialIntersection = (props.materialsCheckedList.size === 0 || request.material.filter(value => props.materialsCheckedList.has(value)).length)? true : false;

      return methodsIntersection && materialIntersection;

    };

    const inNegoFiltering = (request:Request) => {

      if(props.onNegoChecked) {
        if(request.status === '상담중') return true;
        else return false;
      } 
      else return true;

    }

    const isVisible = (request:Request) => {
      const nego = inNegoFiltering(request);
      const manu = manufactureFiltering(request);
      const visibleCard =  nego&&manu;
      isEmpty = isEmpty && !visibleCard;
      return visibleCard;
    }


    
    return (
        <div className="categoryCard">
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' &&
          
            service.payload.map((request: Request) => (                                                              
                isVisible(request) &&
                <ItemCard {...request}/>
            ))  
        }
        {
          service.status === 'loaded' && isEmpty && <div className="noCard"><span>조건에 맞는 견적 요청이 없습니다.</span></div>
        }
            </div>
    );
};
 
 export default CategoryCard;
