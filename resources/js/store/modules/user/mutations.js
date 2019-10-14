const USER_UPDATED = (state,user) => {
            state.userInfo=user;
          };

const updateCart = (state,data) => {
            state.cart=data
          };
const setSearchTxt = (state,data) => {
            state.searchtxt=data
          };
const setHeaderTxt = (state,data) => {
            state.headertxt=data
          };

const removeItem = (state,i) => {
            state.cart.splice(i,1)
          };

const removeAll = (state) => {
            state.cart=[]
          };





export default {
            USER_UPDATED,
            updateCart,
            removeItem,
            removeAll,
            setSearchTxt,
            setHeaderTxt,

};
