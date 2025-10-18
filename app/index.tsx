import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import Login from './Auth/Login';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
        router.replace('/Auth');
    }, 0);

    return () => clearTimeout(timer);
  }, []); 
  return null;
  // return (
  //   <Login></Login>
  // )
}
