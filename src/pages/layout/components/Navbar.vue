<template>
    <div class="navbar">
        <!-- <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"></hamburger> -->

        <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->

        <div class="right-menu">
            <template v-if="device!=='mobile'">
                <error-log class="errLog-container right-menu-item"/>>

                <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
                    <!-- <screenfull class="screenfull right-menu-item"></screenfull> -->
                </el-tooltip>

                <lang-select class="international right-menu-item"/>

                <el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">
                    <!-- <theme-picker class="theme-switch right-menu-item"/> -->
                </el-tooltip>
            </template>

            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img src="" alt="">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>
                        {{ $t('navbar.dashboard') }}
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item>
                        <span style="display:block;" @click="logout">{{$t('navbar.logOut')}}</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
// import ErrorLog from '@/components/ErrorLog'
// import Screenfull from '@/components/Screenfull'

export default {
    components: {
        // Breadcrumb,
        // Hamburger,
        // ErrorLog,
        // Screenfull,
    },
    methods: {
        toggleSideBar() {
            this.$route.dispatch('toggleSideBar')
        },
        logout() {
            this.$route.dispatch('logout').then(()=>{
                location.reload()
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    background-color: #f90;
}
</style>
