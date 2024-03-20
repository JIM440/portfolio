import { useEffect } from 'react';

   export default function UseScrollTop () {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}