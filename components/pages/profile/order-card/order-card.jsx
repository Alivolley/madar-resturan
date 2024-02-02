import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icon
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import EastIcon from '@mui/icons-material/East';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';

// Assets
import noImage from '@/assets/images/noImage.png';

// Components
import RtlProvider from '@/components/layout/rtlProvider/rtlProvider';
import OrderDetailModal from '../order-detail-modal/order-detail-modal';

function OrderCard({ detail }) {
   const [showDetailModal, setShowDetailModal] = useState(false);

   return (
      <div className="rounded-2xl border border-solid border-[#E4EAF0] p-3 customMd:p-6">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5 text-sm customMd:text-base">
               <p className="text-textGray">تعداد کالاها : </p>
               <p className="text-[#050F2C]">{detail?.all_orders_count}</p>
            </div>
            {detail?.status === 'sending' ? (
               <div className="flex items-center gap-1 rounded-lg bg-[#FF9F1C] px-1 py-2 text-xs text-white">
                  <LocalShippingOutlinedIcon fontSize="small" />
                  <p>درحال ارسال</p>
               </div>
            ) : detail?.status === 'delivered' ? (
               <div className="flex items-center gap-1 rounded-lg bg-[#2EC4B6] px-1 py-2 text-xs text-white">
                  <CheckCircleOutlinedIcon fontSize="small" />
                  <p>تحویل داده شده</p>
               </div>
            ) : detail?.status === 'unpaid' ? (
               <div className="flex items-center gap-1 rounded-lg bg-[#F03A50] px-1 py-2 text-xs text-white">
                  <MoneyOffCsredOutlinedIcon fontSize="small" />
                  <p>پرداخت نشده</p>
               </div>
            ) : null}
         </div>

         <div className="my-7 flex flex-wrap items-start justify-between gap-5 border-b border-dashed border-[#336CA4] pb-7">
            <div className="space-y-3 text-[15px] customSm:shrink-0">
               <div className="flex items-center gap-0.5 text-sm customMd:text-base">
                  <p className="text-textGray">تاریخ ثبت سفارش :</p>
                  <p className="text-[#050F2C]">{detail?.pay_time?.slice(0, 10)}</p>
               </div>
               <div className="flex items-center gap-0.5 text-sm customMd:text-base">
                  <p className="text-textGray">مبلغ نهایی :</p>
                  <p className="font-bold text-[#024A90]">{Number(detail?.final_price).toLocaleString()} تومان</p>
               </div>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3">
               {detail?.orders?.map(item => (
                  <Link
                     href={`/productDetail/${item?.product?.product_title}`}
                     className="relative aspect-square w-16 rounded-md bg-[#F5F8FC] p-1 customMd:w-24"
                     key={crypto.randomUUID()}
                  >
                     <Image
                        src={item?.product?.cover || noImage}
                        alt="order"
                        className="rounded-md object-cover"
                        fill
                     />
                  </Link>
               ))}
            </div>
         </div>
         <RtlProvider>
            <Button
               fullWidth
               endIcon={<EastIcon className="!rotate-180" fontSize="small" />}
               className="!text-[#626E94]"
               onClick={() => setShowDetailModal(true)}
            >
               نمایش جزییات سفارش
            </Button>
         </RtlProvider>

         <OrderDetailModal show={showDetailModal} onClose={() => setShowDetailModal(false)} detail={detail} />
      </div>
   );
}

export default OrderCard;
