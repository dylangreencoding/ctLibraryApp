import { useState, useEffect } from 'react';
import { server_calls } from '../api'

export const useGetData = () => {
  const [bookData, setBookData] = useState<[]>([]);

  async function handleDataFetch () {
    const result = await server_calls.get();
    setBookData(result);
  }

  useEffect(() => {
    handleDataFetch();
  }, [])
  
  return {bookData, getData:handleDataFetch}
}