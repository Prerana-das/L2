const userInfo = state => state.userInfo;
const getIsLoggedIn = (state) => !!state.userInfo;
const getCartItem = (state) => state.cart;
const getSearchTxt = (state) => state.searchtxt;
const getHeaderTxt = (state) => state.headertxt;







export default {
  userInfo,
  getIsLoggedIn,
  getCartItem,
  getSearchTxt,
  getHeaderTxt,

};
