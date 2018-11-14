<template>
    <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
        <slot></slot>
    </el-scrollbar>
</template>
<script>
const tagAndTagSpacing = 4
export default {
    name: 'ScrollPane',
    data () {
        return {
            left: 0
        }
    },
    methods: {
        handleScroll(e) {
            const eventDelta = e.wheelDelta || -e.deltaY * 40
            const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
            $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
        },
    }
}
</script>
