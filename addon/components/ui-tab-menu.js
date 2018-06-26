import { computed } from '@ember/object';
import { isArray } from '@ember/array';
import Component from '@ember/component';
import layout from '../templates/components/ui-tab-menu';


/**
ui-tab-menu component

@module components
@namespace components
@class UiTabMenu
@constructor
*/
export default Component.extend({
    layout: layout,
    tagName: 'div',
    tabs: '',
    delimiter: ',',
    classNameBindings: ['_uiClass', '_theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'menu',
    theme: '',
    _theme: computed('theme', {
        get() {
            return this.get('theme') ? this.get('theme') : 'top attached tabular';
        }
    }),
    _tabs: computed('tabs', {
        get() {
            if(isArray(this.get('tabs'))){
                return this.get('tabs');
            }

            return this.get('tabs').split(this.get('delimiter'));
        }
    }),
    /**
    the active tab name
    @property {String} active
    */
    active: '',
    didInsertElement() {
        this.$('.item').tab();
        this.$('.item[data-tab="'+this.active+'"]').addClass("active");
    }
});