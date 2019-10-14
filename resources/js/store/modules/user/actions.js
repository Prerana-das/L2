const updateUser = async (context,data) => {
					  context.commit('USER_UPDATED', data);
};

const updateCart = async (context,data) => {
					  context.commit('updateCart', data);
};
const setSearchTxt = async (context,data) => {
					  context.commit('setSearchTxt', data);
};
const setHeaderTxt = async (context,data) => {
					  context.commit('setHeaderTxt', data);
};
const removeAll = async (context,data) => {
					  context.commit('removeAll', data);
};
const removeItem = async (context,data) => {
					  context.commit('removeItem', data); 
};



export default {
	updateUser,
	updateCart,
	removeItem,
	removeAll,
	setSearchTxt,
	setHeaderTxt,

};
