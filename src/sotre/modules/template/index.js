import Global from "@/Global";
import * as types from "../mutations_type";

const state = {
count: 0
}

const actions = {
//   actionIncrease({ commit }) {
//         let md5_key = Global.$API_MD5_KEY;
//         let lang = localStorage.getItem("LOCALE");
//         let token = sessionStorage.getItem("token");
//         let jsonMsg = JSON.stringify({
//             nickname: nickname
//         });
//         let params = secret.Encrypt(jsonMsg);
//         let key = md5(params + md5_key);
//         axios
//             .post(
//                 Global.$API_URL + "api/update",
//                 {
//                     params: params,
//                     key: key
//                 },
//                 {
//                     headers: {
//                         "Accept-Language": lang,
//                         Authorization: "Bearer " + token
//                     }
//                 }
//             )
//             .then(res => {

//             })
//             .catch(error => {
//                 console.log("error", error);
//             });
//     }
actionIncrease({ commit }) {
  // console.log('actionIncrease');
  commit(types.INCREASE);
},
actionDecrease({ commit }) {
  //  console.log('actionDecrease');
  commit(types.DECREASE);
}
}

const mutations = {
 // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE] (state) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    state.count += 1;
  },
  [types.DECREASE] (state) {
    state.count -= 1;
  },
};

const getters = {
getCount : state => state.count
};

export default {
    state,
    getters,
    actions,
    mutations,
    // 嚴格模式，禁止直接修改 state
  strict: true
};