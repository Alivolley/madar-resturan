import { useState } from 'react';

// MUI
import { Tab, Tabs } from '@mui/material';

// Icon
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// Components
import ProfileLayout from '@/components/layout/profile-layout/profile-layout';
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import OrderCard from '@/components/pages/profile/order-card/order-card';

function Orders() {
   const [tabsValue, setTabsValue] = useState('all');

   return (
      <ProfileLayout>
         <p className="border-b border-solid border-[#E4EAF0] pb-4 font-bold">پیگیری سفارش</p>

         <div>
            <RtlProvider>
               <Tabs
                  value={tabsValue}
                  onChange={(e, newValue) => setTabsValue(newValue)}
                  TabIndicatorProps={{
                     sx: {
                        backgroundColor: '#FB9B40',
                     },
                  }}
                  variant="scrollable"
               >
                  <Tab label="همه" value="all" customOrange />
                  <Tab
                     icon={<LocalShippingOutlinedIcon />}
                     iconPosition="start"
                     label="در حال ارسال"
                     value="shipping"
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

         <div className="mt-10 flex flex-wrap items-center gap-5">
            <OrderCard className="w-[200px]" />
            <OrderCard className="w-[200px]" />
            <OrderCard className="w-[200px]" />
         </div>
      </ProfileLayout>
   );
}

export default Orders;
