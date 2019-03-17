<template>
    <section class="option-list-component">
    	<Option 
            v-for="(option,index) in options" 
            :key="index"
            :option="option"
            @optionSelected="selectOption">
        </Option>
    </section>
</template>

<script>
    import Option from './Option';

    export default {
        name: 'OptionList',

        props: {
            options: {
                type: Array,
                required: true
            }
        },

        components: {
            Option
        },

        methods: {
            selectOption(value) {
                this.$emit('optionSelected', value);
            }
        }
    }
</script>

<style scoped lang="less">
    @import './../../assets/stylesheets/global/variables.less';

    section {
        border-radius: @border_radius;
        background: @white;
        padding: 9px 0;
        position: absolute;
        width: 262px;
        max-width: 100%;
    }
</style>
