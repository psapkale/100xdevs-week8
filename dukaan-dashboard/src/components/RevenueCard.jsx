const RevenueCard = () => {
   return (
      <div className='bg-white rounded shadow-sm'>
         <div>{title}?</div>
         <div className='flex justify-between'>
            <div>Rs {amount}</div>
            {orderCount ? <div>{count} orders</div> : null}
         </div>
      </div>
   );
};

export default RevenueCard;
