import {useEffect, useState} from 'react';

function UseScrollPosition() {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    let ticking = false;

    const handleScrollEvent = () => {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          setScrollPos(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return scrollPos;
}

export default UseScrollPosition;
