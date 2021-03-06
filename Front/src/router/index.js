import { createRouter, createWebHistory } from 'vue-router';

// Views imports
// Home
import Home from '@/views/Home.vue';
// 회원
import Login from '@/views/User/Login.vue';
import Join from '@/views/User/Join.vue';
import MyPage from '@/views/User/MyPage.vue';
// import UserModify from '@/views/User/UserModify.vue';
import SearchPassword from '@/views/User/SearchPassword.vue';

// 장바구니 페이지
import CartView from '@/views/Cart/CartView.vue';
// 주문/결제 페이지
import OrderView from '@/views/Order/OrderView.vue';
// 주문목록 페이지
import OrderList from '@/views/Order/OrderList.vue';
// 받는사람정보 페이지
import ReceiverInfo from '@/views/Order/ReceiverInfo.vue';
// 리뷰 관리
import ProductReview from '@/views/productReview/ProductReview.vue';
import ReviewRegister from '@/components/productReview/reviewRegister.vue';
import ReviewModify from '@/components/productReview/reviewModify.vue';

// 관리자
import AdminProfile from '@/views/Admin/AdminProfile.vue';
import AdminUserList from '@/views/Admin/AdminUserList.vue';
import AdminItemList from '@/views/Admin/AdminItemList.vue';
import AdminItemRegister from '@/views/Admin/AdminItemRegister.vue';
import AdminItemModify from '@/views/Admin/AdminItemModify.vue';

// 고객센터
import CSQna from '@/views/CS/CSQna.vue';
// 상품
import ItemList from '@/views/Item/ItemList.vue';
import CategoryItemList from '@/views/Item/CategoryItemList.vue';
import ItemDetail from '@/views/Item/ItemDetail.vue';
import ItemDetailImage from '@/components/Item/ItemDetailImage.vue';
import ItemReview from '@/components/Item/ItemReview.vue';
import ItemQna from '@/components/Item/ItemQna.vue';
// JWT-common import
import JWTcommon from '@/utils/JWT-common';

// import mapGetters (admin)
// import store from '@/store'

// temp
import Temp from '@/views/User/Temp.vue';

const routes = [
  // temp
  {
    path: '/temp',
    name: 'Temp',
    component: Temp,
  },
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  /* ------------------------ 회원 ------------------------ */
  // 로그인
  {
    path: '/user/login',
    name: 'Login',
    component: Login,
  },
  // 회원가입
  {
    path: '/user/join',
    name: 'Join',
    component: Join,
  },
  // MyPage
  {
    path: '/user/mypage',
    name: 'MyPage',
    component: MyPage,
    meta: {
      requiresAuth: true,
    },
  },
  // // 회원 정보 수정
  // {
  //   path: '/user/modify',
  //   name: 'UserModify',
  //   component: UserModify,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // 비밀번호 찾기
  {
    path: '/user/search-password',
    name: 'SearchPassword',
    component: SearchPassword,
  },
  /* ------------------------ @도명 ------------------------ */
  // 장바구니 페이지
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
    meta: {
      requiresAuth: true,
    },
  },
  // 주문/결제 페이지
  {
    path: '/order',
    name: 'OrderView',
    component: OrderView,
  },
  // 주문목록 페이지
  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList,
    meta: {
      requiresAuth: true,
    },
  },
  // 받는사람정보 페이지
  {
    path: '/receiverinfo',
    name: 'ReceiverInfo',
    component: ReceiverInfo,
    meta: {
      requiresAuth: true,
    },
  },
  // 리뷰 관리 페이지
  {
    path: '/productreview',
    name: 'ProductReview',
    component: ProductReview,
    meta: {
      requiresAuth: true,
    },
  },
  // 리뷰 등록
  {
    path: '/productreview/register',
    name: 'ReviewRegister',
    component: ReviewRegister,
    meta: {
      requiresAuth: true,
    },
  },
  // 리뷰 수정
  {
    path: '/productreview/modify',
    name: 'reviewModify',
    component: ReviewModify,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  /* ------------------------ 관리자 ------------------------ */
  // 관리자 화면 Home - 관리자 정보
  {
    path: '/admin/profile',
    name: 'AdminProfile',
    component: AdminProfile,
    meta: {
      requiresAuth: true,
      requiersAdmin: true,
    },
  },
  // 회원 리스트
  {
    path: '/admin/user-list',
    name: 'AdminUserList',
    component: AdminUserList,
    meta: {
      requiresAuth: true,
      // requiersAdmin: true,
    },
  },
  // 상품 리스트
  {
    path: '/admin/item-list',
    name: 'AdminItemList',
    component: AdminItemList,
    meta: {
      requiresAuth: true,
      // requiersAdmin: true,
    },
  },
  // 상품 등록
  {
    path: '/admin/item-register',
    name: 'AdminItemRegister',
    component: AdminItemRegister,
    meta: {
      requiresAuth: true,
      // requiersAdmin: true,
    },
  },
  // 상품 수정
  {
    path: '/admin/item-modify',
    name: 'AdminItemModify',
    component: AdminItemModify,
    meta: {
      requiresAuth: true,
      // requiersAdmin: true,
    },
  },
  /* ------------------------ 고객센터 ------------------------ */
  // Home - 나의 문의 내역
  {
    path: '/cs/cs-qna',
    name: 'CSQna',
    component: CSQna,
    meta: {
      requiresAuth: true,
    },
  },
  /* ------------------------ 아이템 ------------------------ */
  // 상품 검색
  {
    path: '/item/item-list',
    name: 'ItemList',
    component: ItemList,
  },
  // 카테고리별 상품 리스트
  {
    path: '/item/category-item-list',
    name: 'CategoryItemList',
    component: CategoryItemList,
  },
  // 상품 디테일
  {
    path: '/item/item-detail',
    name: 'itemDetail',
    component: ItemDetail,
  },
  // 상품 상세설명
  {
    path: '/item/item-detail-img',
    name: 'ItemDetailImage',
    component: ItemDetailImage,
  },
  // 상품 리뷰
  {
    path: '/item/item-review',
    name: 'ItemReview',
    component: ItemReview,
  },
  // 상품 문의
  {
    path: '/item/item-qna',
    name: 'ItemQna',
    component: ItemQna,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// navigation guard
// 1. 로그인 해야 갈 수 있는 페이지 설정
// 2. admin이여만 갈 수 있는 페이지에 일반 유저가 가는 것 방지

router.beforeEach((to, from, next) => {
  // Access Token이 있는 지 검사하고 없으면 로그인
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!JWTcommon.getAccessToken()) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
