// import Vue from 'vue'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import bootstrap5
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import axios
import axios from 'axios'
import VueAxios from 'vue-axios'



const app = createApp(App);


// 전역 filter 설정
// 사용법 : {{ $filters.필터이름(데이터) }}
app.config.globalProperties.$filters = {
  // 금액, 수량 필터 : 천단위마다 , 찍음
  price(value) {
    if (!value) return value;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  // 번호 필터 ex) 010-1234-5678
  mobile(value) {
    // 0, null, undefined, 빈문자 이거나 10, 11자리가 아니면 그대로 리턴
    if (!value || !(value.length === 10 || value.length === 11)) return value;
    return value.replace(/^(\d{3})(\d{3,4})(\d{4})/g, '$1-$2-$3');
  },
};

app.use(store).use(router).use(VueAxios, axios).mount('#app');