const PERMISSION = {
   // category
   CATEGORY: {
      POST: '102',
      PATCH: '103',
      DELETE: '104',
   },

   // product
   PRODUCT: {
      POST: '105',
      PATCH: '106',
      DELETE: '107',
   },

   // shipping cost
   SHIPPING_COST: {
      PATCH: '108',
   },

   // todays menu
   TODAY_MENU: {
      PATCH: '113',
      DELETE: '114',
   },

   // Change cart status
   CHANGE_CART_STATUS: {
      PATCH: '115',
   },

   // Replying on the comment
   REPLY_ON_COMMENT: {
      PATCH: '116',
   },

   // Delete a comment
   DELETE_COMMENT: {
      DELETE: '117',
   },

   // View the reports
   VIEW_REPORTS: {
      LIST: '118',
   },

   // Edit users
   EDIT_USERS_INFO: {
      PATCH: '119',
   },

   // Block users
   BLOCK_USERS: {
      PATCH: '120',
   },
};

export default PERMISSION;
