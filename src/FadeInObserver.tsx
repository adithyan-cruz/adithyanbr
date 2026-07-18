import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function FadeInObserver() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    // Use a small timeout to ensure React has finished rendering the new route
    const timeout = setTimeout(() => {
      const targets = document.querySelectorAll('.intersect-target');
      targets.forEach((target) => {
        observer.observe(target);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}
