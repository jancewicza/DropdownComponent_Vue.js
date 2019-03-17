import {shallowMount} from '@vue/test-utils';
import Dropdown from '../../../src/Dropdown/Dropdown.vue';
import SearchInput from '../../../src/Dropdown/components/SearchInput.vue';
import OptionList from '../../../src/Dropdown/components/OptionList.vue';

describe('Dropdown.vue', () => {
	let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Dropdown, {
            propsData: {
                dropdown: {
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
		        },
		        query: ''
            }
        });
	});

	it('should have section with class "dropdown-component".', () => {
	    expect(wrapper.findAll('.dropdown-component').length).toEqual(1);
	});

	it('should contain "SearchInput" components.', () => {
        expect(wrapper.contains(SearchInput)).toBeTruthy();
	});

	it('should contain "OptionList" components when optionListOpened equal true.', () => {
        expect(wrapper.contains(OptionList)).toBeFalsy();

        wrapper.vm.optionListOpened = true;

        expect(wrapper.contains(OptionList)).toBeTruthy();
	});

	it('should have "dropdown" property.', () => {
		expect(wrapper.props().dropdown).toBeTruthy();
	});

	it('should have "query" property.', () => {
		expect(wrapper.props().query).toBe('');
	});

	it('should have "optionList" computed.', () => {
		const options = [
				{value: 'bicycle', iconClass: 'bicycle'}, 
				{value: 'motorcycle', iconClass: 'motorcycle'}, 
				{value: 'car', iconClass: 'automobile'}, 
				{value: 'train', iconClass: 'train'}, 
				{value: 'plane', iconClass: 'plane'}, 
				{value: 'ship', iconClass: 'ship'}
			]

        expect(wrapper.vm.optionList).toEqual(options);
	});


	it('should have "searchQuery" method which return true when proper option .', () => {
		const option = {value: 'motorcycle', iconClass: 'motorcycle'};

		wrapper.vm.query = 'cycle';
        expect(wrapper.vm.searchQuery(option)).toBe(true);
	});

	it('should have "searchQuery" method which return false when option is not proper.', () => {
		const option = {value: 'motorcycle', iconClass: 'motorcycle'};

		wrapper.vm.query = 'bbicycle';
		expect(wrapper.vm.searchQuery(option)).toBe(false);
	});

	it('should call "updateTransportDropdownQuery" when optionSelected method was called.', () => {
		spyOn(wrapper.vm, 'updateTransportDropdownQuery');

		wrapper.vm.optionSelected('newQuery');

		expect(wrapper.vm.updateTransportDropdownQuery).toHaveBeenCalled();
		expect(wrapper.vm.updateTransportDropdownQuery.calls.count()).toEqual(1);
	});
});
