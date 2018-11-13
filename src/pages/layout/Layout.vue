<template>
    <div class="app-wrapper">
        <div>11111111111</div>
        <!-- <sildebar class="sidebar-container"></sildebar> -->
        <div class="main-container">
            <navbar></navbar>
            <!-- <tags-view></tags-view>
            <app-main></app-main> -->
        </div>
    </div>
</template>
<script>
import { Navbar } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
export default {
    name: 'Layout',
    components: {
        Navbar
    },
    // mixins: [ResizeMixin],
    computed: {

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
