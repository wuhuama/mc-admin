<template>
    <div :class='classObj' class="app-wrapper">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <sildebar class="sidebar-container"></sildebar>
        <div class="main-container">
            <navbar></navbar>
            <tags-view></tags-view>
            <app-main></app-main>
        </div>
    </div>
</template>
<script>
import { Navbar, Sidebar, TagsView,AppMain } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
export default {
    name: 'Layout',
    components: {
        Navbar
    },
    // mixins: [ResizeMixin],
    computed: {
        classObj () {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                widthoutAnimation: this.sidebar.widthoutAnimation,
                mobile: this.device === 'mobile'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
        position: fixed;
        top: 0
    }
}
</style>
