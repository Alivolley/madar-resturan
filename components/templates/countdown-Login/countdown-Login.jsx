import { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import CachedIcon from '@mui/icons-material/Cached';

function CountdownLogin({ initialCount = 0, onComplete = () => {}, onResetClick = () => {}, loading = false }) {
   const [count, setCount] = useState(initialCount);

   // eslint-disable-next-line consistent-return
   useEffect(() => {
      if (count > 0) {
         const timer = setTimeout(() => {
            setCount(prev => prev - 1);
         }, 1000);

         return () => clearTimeout(timer);
      }
      onComplete();
   }, [count, onComplete]);

   const formatTime = time => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   };

   const resetHandler = () => {
      onResetClick();
      setCount(initialCount);
   };

   return (
      <div className="flex items-center justify-between">
         <LoadingButton
            variant="text"
            type="submit"
            onClick={resetHandler}
            disabled={count !== 0}
            loading={loading}
            startIcon={<CachedIcon />}
         >
            درخواست مجدد
         </LoadingButton>
         <p className="font-rokhFaNum tracking-[1px]">{formatTime(count)}</p>
      </div>
   );
}

export default CountdownLogin;
