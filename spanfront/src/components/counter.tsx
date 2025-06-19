import { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count * 2);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};
