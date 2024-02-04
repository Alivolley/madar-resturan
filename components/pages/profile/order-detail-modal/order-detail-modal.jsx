import Image from 'next/image';
import Link from 'next/link';

// MUI
import { Dialog, Grid, IconButton } from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';

// Assets
import noImage from '@/assets/images/noImage.png';

function OrderDetailModal({ show, onClose, detail }) {
   return (
      <Dialog open={show} onClose={onClose} fullWidth dir="rtl">
         <div className="relative p-3 pt-0 font-rokhFaNum customMd:p-5">
            <div className="sticky top-0 mb-2 flex items-center justify-between border-b border-solid border-[#E4EAF0] bg-white py-2">
               <div className="flex items-center gap-1 font-bold">
                  <TopicOutlinedIcon fontSize="small" />
                  <p>حزییات سفارش</p>
               </div>
               <IconButton onClick={onClose}>
                  <CloseIcon />
               </IconButton>
            </div>
            <div className="space-y-4">
               <div className="space-y-4 rounded-sm bg-[#F5F8FC] p-4 text-sm">
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">وضعیت سفارش :</p>
                     {detail?.status === 'sending' ? (
                        <div className="flex items-center gap-2 rounded-lg bg-[#FF9F1C] p-2 text-xs text-white">
                           <LocalShippingOutlinedIcon fontSize="small" />
                           <p>درحال ارسال</p>
                        </div>
                     ) : detail?.status === 'delivered' ? (
                        <div className="flex items-center gap-2 rounded-lg bg-[#2EC4B6] p-2 text-xs text-white">
                           <CheckCircleOutlinedIcon fontSize="small" />
                           <p>ارسال شده</p>
                        </div>
                     ) : detail?.status === 'unpaid' ? (
                        <div className="flex items-center gap-1 rounded-lg bg-[#F03A50] p-2 text-xs text-white">
                           <MoneyOffCsredOutlinedIcon fontSize="small" />
                           <p>پرداخت نشده</p>
                        </div>
                     ) : null}
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">کد سفارش :</p>
                     <p>{detail?.order_code}</p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">تاریخ ثبت سفارش :</p>
                     <p>{detail?.pay_time?.slice(0, 10)}</p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">تعداد محصولات :</p>
                     <p>{detail?.all_orders_count}</p>
                  </div>
               </div>

               <div className="space-y-4 rounded-sm bg-[#F5F8FC] p-4 text-sm">
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">نام سفارش دهنده :</p>
                     <p>{detail?.user?.name}</p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">شماره تماس سفارش دهنده :</p>
                     <p>{detail?.user?.phone_number}</p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">نحوه ارسال :</p>
                     <p>{detail?.delivery ? 'توسط پیک' : 'تحویل حضوری'}</p>
                  </div>
               </div>

               <div className="space-y-4 rounded-sm bg-[#F5F8FC] p-4 text-sm">
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">نام گیرنده :</p>
                     <p>{detail?.address?.recipient_name}</p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">شماره تلفن گیرنده :</p>
                     <p>{detail?.address?.phone_number}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1">
                     <p className="font-rokhRegular">آدرس گیرنده :</p>
                     <p>{detail?.address?.address}</p>
                  </div>
               </div>

               <div className="space-y-4 rounded-sm bg-[#F5F8FC] p-4 text-sm">
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">هزینه ارسال :</p>
                     <p>{Number(detail?.shipping_cost).toLocaleString()} تومان</p>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">قیمت بدون تخفیف :</p>
                     <p>{Number(detail?.before_discount_price).toLocaleString()} تومان</p>
                  </div>
                  <div className="!mt-6 flex items-center justify-between gap-1">
                     <p className="font-rokhRegular">قیمت نهایی :</p>
                     <p className="text-base font-bold text-[#B1302E]">
                        {Number(detail?.final_price).toLocaleString()} تومان
                     </p>
                  </div>
               </div>

               <div className="space-y-4 rounded-sm bg-[#F5F8FC] p-4 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                     <p className="font-rokhRegular">توضیحات سفارش :</p>
                     <p>{detail?.order_description}</p>
                  </div>
               </div>

               <div className="rounded-sm px-4 py-2 text-sm">
                  <div className="space-y-5">
                     <p className="font-rokhRegular">محصولات :</p>
                     <div className="flex flex-wrap items-center justify-end gap-3">
                        <Grid container spacing={2}>
                           {detail?.orders?.map(item => (
                              <Grid item xs={12} sm={6} key={item?.product?.product_id}>
                                 <Link
                                    href={`/productDetail/${item?.product?.product_title}`}
                                    className="flex gap-1.5 rounded-md bg-[#F5F8FC] p-1.5"
                                 >
                                    <div className="relative my-auto size-[60px] rounded-md bg-[#F5F8FC]">
                                       <Image
                                          src={item?.product?.cover || noImage}
                                          alt="order"
                                          className="rounded-md object-cover"
                                          fill
                                       />
                                    </div>

                                    <div className="grow">
                                       <p className="text-xs font-bold">{item?.product?.product_title}</p>
                                       <div className="mt-0.5 flex flex-wrap items-center justify-between">
                                          <p className="font-rokhRegular text-[11px]">تعداد :</p>
                                          <p className="text-[11px]">{item?.count}</p>
                                       </div>

                                       <div className="mt-0.5 flex flex-wrap items-center justify-between">
                                          <p className="font-rokhRegular text-[11px]">قیمت نهایی :</p>
                                          <p className="text-[11px]">
                                             {Number(item?.total_price).toLocaleString()} تومان
                                          </p>
                                       </div>
                                    </div>
                                 </Link>
                              </Grid>
                           ))}
                        </Grid>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Dialog>
   );
}

export default OrderDetailModal;
