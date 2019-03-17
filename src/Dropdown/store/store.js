import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters.js'
import { mutations } from './mutations.js'
import { actions } from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        transportDropdown: {
            name: 'transport-dropdown',
            inputPlaceholder: "Your transport",
            options: [
                {
                    value: 'bicycle',
                    iconClass: 'bicycle'
                },
                {
                    value: 'motorcycle',
                    iconClass: 'motorcycle'
                },
                {
                    value: 'car',
                    iconClass: 'automobile'
                },
                {
                    value: 'train',
                    iconClass: 'train'
                },
                {
                    value: 'plane',
                    iconClass: 'plane'
                },
                {
                    value: 'ship',
                    iconClass: 'ship'
                }
            ],
            query: ''
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
})
