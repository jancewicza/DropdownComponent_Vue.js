<template>
    <section class="search-input-component">
        <input 
            type="text" 
            :name="`${name}-search-input`"
            :placeholder="inputPlaceholder"
            :value="query"
            autocomplete="off"
            @keyup="$emit('updateQuery', $event.target.value)"
            @focus="$emit('searchInputClicked', true)">
        <i class="la la-angle-down"></i>
    </section>
</template>

<script>
    export default {
        name: 'SearchInput',

        props: {
            inputPlaceholder: {
                type: String,
                required: false,
                default: ''
            },
            query: {
                type: String,
                required: false,
                default: ''
            },
            name: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>

<style scoped lang="less">
    @import './../../assets/stylesheets/global/variables.less';

    section {
        position: relative;
        margin-bottom: 9px;
    }

    input {
        width: 100%;
        height: 100%;
        padding: 11px 16px;
        border-radius: @border_radius;
        background: @white;
        box-shadow: 0 0 30px @white; 
        border-color: transparent;
        text-transform: capitalize;
        color: @font_color;
        .placeholder_prefixer(@placeholder_color);

        &:focus {
            .placeholder_prefixer(@visibility: hidden);
        }
    }

    i {
        position: absolute;
        right: 19px;
        top: 50%;
        transform: translateY(-50%);
        color: @black;
    }
</style>
