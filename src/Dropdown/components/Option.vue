<template>
    <div 
    	class="option-component"
    	@click="$emit('optionSelected', option.value)">
    	<span>{{ option.value }}</span>
    	<i :class="['la', `la-${option.iconClass}`]" />
    </div>
</template>

<script>
    export default {
        name: 'Option',

        props: {
            option: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="less">
    @import './../../assets/stylesheets/global/variables.less';

    div {
        background: @white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 18px;

        &:hover {
            background: @hover_state_backgorund;
            color: @black;
        }
    }

    span {
        text-transform: capitalize;
    }

    i {
        font-size: 16px;
    }
</style>
