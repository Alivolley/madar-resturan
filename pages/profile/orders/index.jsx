import { useState } from 'react';

// MUI
import { CircularProgress, Pagination, Tab, Tabs } from '@mui/material';

// Icon
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import OrderCard from '@/components/pages/profile/order-card/order-card';

// Apis
import useGetCards from '@/apis/profile/useGetCards';

function Orders() {
   const [tabsValue, setTabsValue] = useState('');
   const [page, setPage] = useState(1);

   const { data: cardsData, isLoading: cardsIsLoading } = useGetCards(tabsValue, page);

   return (
      <ProfileLayout>
         <p className="border-b border-solid border-[#E4EAF0] pb-4 font-bold">پیگیری سفارش</p>

         <div>
            <RtlProvider>
               <Tabs
                  value={tabsValue}
                  onChange={(e, newValue) => {
                     setPage(1);
                     setTabsValue(newValue);
                  }}
                  TabIndicatorProps={{ sx: { backgroundColor: '#FB9B40' } }}
                  variant="scrollable"
               >
                  <Tab label="همه" value="" customOrange />
                  <Tab
                     icon={<LocalShippingOutlinedIcon />}
                     iconPosition="start"
                     label="در حال ارسال"
                     value="sending"
                     customOrange
                  />
                  <Tab
                     icon={<CheckCircleOutlinedIcon />}
                     iconPosition="start"
                     label="تحویل داده شده"
                     value="delivered"
                     customOrange
                  />
               </Tabs>
            </RtlProvider>
         </div>

         {cardsIsLoading ? (
            <div className="mt-16 flex items-center justify-center">
               <CircularProgress color="customOrange2" />
            </div>
         ) : (
            <div>
               {cardsData?.total_objects ? (
                  <div className="mt-10 flex flex-col gap-5">
                     {cardsData?.result?.map(item => (
                        <OrderCard key={item.order_code} detail={item} />
                     ))}
                  </div>
               ) : (
                  <p className="mb-10 mt-24 space-y-3 text-center text-xl font-bold">
                     شما در حال حاضر آدرسی ثبت نکرده اید
                  </p>
               )}

               {cardsData?.total_objects !== 0 && (
                  <div className="flex items-center justify-center py-6">
                     <Pagination
                        count={cardsData?.total_pages}
                        variant="outlined"
                        color="customOrange2"
                        page={page}
                        onChange={(e, newValue) => setPage(newValue)}
                     />
                  </div>
               )}
            </div>
         )}
      </ProfileLayout>
   );
}

export default Orders;
