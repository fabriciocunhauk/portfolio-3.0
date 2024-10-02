import { useEffect, useState } from 'react';

function useScrollPosition(position: number) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const activeOnScroll = scrollPosition > position;

  return activeOnScroll;
}

export default useScrollPosition;