// MUI
import { CircularProgress, FormControl, MenuItem, Pagination, Select } from '@mui/material';

// Assets
import TableStyle from './table.style';

function Table({
   columns,
   rows,
   pageStatus = 1,
   setPageStatus,
   loading = false,
   totalPages,
   totalObjects,
   countValue,
   setCountValue,
}) {
   const tableRowCalculator = (limit, page, index) => limit * page - (limit - 1) + index;

   return (
      <>
         <TableStyle>
            {loading ? (
               <div className="mt-10 flex items-center justify-center p-10">
                  <CircularProgress color="customOrange" />
               </div>
            ) : rows?.length ? (
               <table>
                  <thead className="bg-[#f5f8fc]">
                     <tr>
                        {columns?.map(column => (
                           <th
                              key={column?.id || crypto.randomUUID()}
                              className="text-center text-sm font-bold text-[#713802]"
                           >
                              {column?.title}
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {rows?.map((row, rowIndex) => (
                        <tr
                           key={row?.id || crypto.randomUUID()}
                           className="transition-all duration-150 hover:bg-[#fef1e4]"
                        >
                           {columns?.map((column, colIndex) =>
                              colIndex === 0 ? (
                                 <td key={column?.id || crypto.randomUUID()} className="text-center text-sm">
                                    {tableRowCalculator(countValue, pageStatus, rowIndex)}
                                 </td>
                              ) : (
                                 <td key={column?.id || crypto.randomUUID()} className="text-center text-sm">
                                    {!column?.renderCell ? row?.[column?.key] : column?.renderCell(row)}
                                 </td>
                              )
                           )}
                        </tr>
                     ))}
                  </tbody>
               </table>
            ) : (
               <p className="py-20 text-center font-bold">جدول خالی میباشد</p>
            )}
         </TableStyle>
         {pageStatus && setPageStatus && totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-between gap-7">
               <div className="flex items-center gap-2">
                  <p className="text-sm text-textGray">نمایش</p>

                  <div className="min-w-[55px]">
                     <FormControl fullWidth size="small">
                        <Select
                           value={countValue}
                           onChange={e => {
                              setPageStatus(1);
                              setCountValue(e.target.value);
                           }}
                           color="customOrange"
                           className="!font-rokhFaNum"
                        >
                           <MenuItem value={6} className="!font-rokhFaNum">
                              6
                           </MenuItem>
                           <MenuItem value={8} className="!font-rokhFaNum">
                              8
                           </MenuItem>
                           <MenuItem value={10} className="!font-rokhFaNum">
                              10
                           </MenuItem>
                           <MenuItem value={12} className="!font-rokhFaNum">
                              12
                           </MenuItem>
                           <MenuItem value={14} className="!font-rokhFaNum">
                              14
                           </MenuItem>
                        </Select>
                     </FormControl>
                  </div>
                  <p className="whitespace-nowrap font-rokhFaNum text-sm text-textGray">از {totalObjects} عدد</p>
               </div>
               <Pagination
                  count={totalPages}
                  onChange={(_, value) => setPageStatus(value)}
                  page={pageStatus}
                  size="small"
                  color="customOrange2"
                  sx={{
                     '& .Mui-selected': {
                        color: 'white !important',
                     },
                  }}
               />
            </div>
         )}
      </>
   );
}

export default Table;
