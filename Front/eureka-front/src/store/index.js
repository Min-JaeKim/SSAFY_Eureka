import { createStore } from 'vuex';

// import modules
import { cart } from '@/store/modules/Cart/cart';
import { itemStore } from '@/store/modules/Item/itemStore';
import { userStore } from '@/store/modules/User/userStore';
import { order } from '@/store/modules/Order/order';
import { adminStore } from '@/store/modules/Admin/adminStore';

// import plugin
import createPersistedState from "vuex-persistedstate";

export default createStore({
  namespaced: true,
  state: {
    // 유저 정보
    // 장바구니 (로그인할 때 리셋)
    // 검색 정보
    // 메인 페이지 상품 정보
    // Footer 정보
  },
  mutations: {},
  actions: {},
  modules: { cart, itemStore, userStore, order, adminStore },
  plugins: [
    // userStore에 있는 정보만 관리
    createPersistedState({
      paths: ['userStore']
    })
  ]
});
