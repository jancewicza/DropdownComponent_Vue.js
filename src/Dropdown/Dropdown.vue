<template>
    <section class="dropdown-component">
        <div>
            <SearchInput 
                :inputPlaceholder="dropdown.inputPlaceholder"
                @searchInputClicked="setOptionListVisibility"
                @updateQuery="updateTransportDropdownQuery"
                :query="query"
                :name="dropdown.name">
            </SearchInput>
            <transition name="slide">
                <OptionList 
                    v-if="optionListOpened"
                    :options="optionList"
                    @optionSelected="optionSelected">
                </OptionList>
            </transition>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'
    import SearchInput from './components/SearchInput';
    import OptionList from './components/OptionList';
    
    export default {
        name: 'Dropdown',

        props: {
            dropdown: {
                type: Object,
                required: true
            },
            query: {
                type: String,
                required: true
            }
        },

        data () {
            return {
                optionListOpened: false
            }
        },

        components: {
            SearchInput,
            OptionList
        },

        mounted() {
            document.addEventListener("click", this.handleClickOutside, false);
        },

        computed: {
            optionList() {
                return this.dropdown.options.filter(this.searchQuery);                
            }
        },

        methods: {
            ...mapActions([
              'updateTransportDropdownQuery'
            ]),

            optionSelected(query) {
                this.updateTransportDropdownQuery(query);
                this.setOptionListVisibility(false);
            },

            setOptionListVisibility(visible) {
                this.optionListOpened = visible;
            },

            searchQuery(option) {
                return option.value.includes(this.query);
            },

            handleClickOutside(event) {
                const insideDropdown = document.querySelector('.dropdown-component div').contains(event.target);

                if (!insideDropdown) {
                    this.setOptionListVisibility(false);
                }
            }
        },

        beforeDestroy() {
            document.removeEventListener("click", this.handleClickOutside, false);
        }
    }
</script>

<style scoped lang="less">
    @import './../assets/stylesheets/global/variables.less';

    section.dropdown-component {
        width: 100%;
        height: 100vh;
        background: @black;
        display: flex;
        justify-content: center
    }

    div {
        width: 262px;
        max-width: 100%;
        position: relative;
        top: 30%;
        height: fit-content;
    }
</style>
