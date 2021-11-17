import {useEffect, useState} from 'react';
import {Service} from './Service';

export interface Request {

    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: string[];
    material:string[];
    status: string;
  
  }
  
  const useRequest = () => {
    const [result, setResult] = useState<Service>({
      status: 'loading',
    } as any);
    console.log('useRequest');
  
    useEffect(() => {
      fetch('http://localhost:3001/requests')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, []);
  
    return result;
  };
  export default useRequest;