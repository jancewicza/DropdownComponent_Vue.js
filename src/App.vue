<template>
    <section>
        <Dropdown 
            :dropdown="$store.getters.transportDropdown"
            :query="$store.getters.transportDropdown.query">
        </Dropdown>
    </section>
</template>

<script>
    import { store } from './Dropdown/store/store'
    import Dropdown from './Dropdown/Dropdown';

    export default {
        components: {
            Dropdown
        }
    }
</script>

<style lang="less">
    @import './assets/stylesheets/global/normalize.css';
    @import './assets/stylesheets/fonts/google-fonts.css';
    @import './assets/stylesheets/global/icons.less';
    @import './assets/stylesheets/global/variables.less';
    @import './assets/stylesheets/global/animations.less';

	html body, #app {
        font-family: 'Open Sans', 'Arial', sans-serif;
        color: @font_color;
        font-size: @font_size;
        font-weight: @font_weight_normal;

        * {
            box-sizing: border-box;
        }
	}
</style> 
