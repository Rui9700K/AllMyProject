//创建vue中最为关键的store

//引入vue
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex';

//调用vuex
Vue.use(Vuex)

//准备actions-用于响应组件中的动作
const actions = {
    increment(context, value) {
        //两个参数 1.上下文（包裹方法） 2.传入的参数值
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    },
    incrementWait(context, value) {
        if (context.state.sum % 2 !== 0) {
            context.commit('INCREMENT', value)
        }
    }
}

//准备mutations-用于操作数据
const mutations = {
    INCREMENT(state, value) {
        //两个参数 1.state 2.传入的参数值
        state.sum = state.sum + value
        localStorage.setItem('sum', JSON.stringify(state.sum))
    },
    DECREMENT(state, value) {
        state.sum = state.sum - value
        localStorage.setItem('sum', JSON.stringify(state.sum))
    },

}

//准备state-用于存储数据
const state = {
    sum: JSON.parse(localStorage.getItem('sum')) || 0
}

//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

//暴露
export default store