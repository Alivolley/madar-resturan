import { useEffect, useState } from 'react';

function CountdownParty({ initialCount = 0 }) {
   const [count, setCount] = useState(initialCount);

   // eslint-disable-next-line consistent-return
   useEffect(() => {
      if (count > 0) {
         const timer = setTimeout(() => {
            setCount(prev => prev - 1);
         }, 1000);

         return () => clearTimeout(timer);
      }
   }, [count]);

   const formatTime = seconds => {
      const days = Math.floor(seconds / (24 * 60 * 60));
      const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);

      return (
         <>
            <div className="flex flex-col items-center gap-2">
               <p className="flex h-9 w-9 items-center justify-center rounded-md bg-white font-bold text-customOrange">
                  {days}
               </p>
               <p className="text-10">روز</p>
            </div>
            <div className="flex flex-col items-center gap-2">
               <p className="flex h-9 w-9 items-center justify-center rounded-md bg-white font-bold text-customOrange">
                  {hours}
               </p>
               <p className="text-10">ساعت</p>
            </div>
            <div className="flex flex-col items-center gap-2">
               <p className="flex h-9 w-9 items-center justify-center rounded-md bg-white font-bold text-customOrange">
                  {minutes}
               </p>
               <p className="text-10">دقیقه</p>
            </div>
         </>
      );
   };

   return <div className="flex gap-1 font-rokhFaNum">{formatTime(count)}</div>;
}

export default CountdownParty;
