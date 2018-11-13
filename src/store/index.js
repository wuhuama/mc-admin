import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagView'
import user from './modules/user'
import getter from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    app,
    tagsView,
    user,
    getter
})

export default store