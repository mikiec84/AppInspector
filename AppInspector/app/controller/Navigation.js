/*
 * File: app/controller/Navigation.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.controller.Navigation', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'contentPanel',
            selector: '#ContentPanel'
        }
    ],

    init: function(application) {
        this.control({
            '#ComponentsNav' : {
                'click' : this.onComponentsNavClick
            },
            '#StoresNav' : {
                'click' : this.onStoresNavClick
            },
            '#ProfilesNav' : {
                'click' : this.onProfilesNavClick
            },
            '#EventsNav' : {
                'click' : this.onEventsNavClick
            },
            '#PerformanceNav' : {
                'click' : this.onPerformanceNavClick
            },
            '#AboutNav' : {
                'click' : this.onAboutNavClick
            }
        });
    },

    onComponentsNavClick: function() {
        this.getContentPanel().layout.setActiveItem(0);
    },

    onStoresNavClick: function() {
        this.getContentPanel().layout.setActiveItem(1);
    },

    onProfilesNavClick: function() {
        this.getContentPanel().layout.setActiveItem(2);
    },

    onAboutNavClick: function() {
        this.getContentPanel().layout.setActiveItem(5);
    },

    onPerformanceNavClick: function() {
        this.getContentPanel().layout.setActiveItem(4);
    },

    onEventsNavClick: function() {
        this.getContentPanel().layout.setActiveItem(3);
    }

});
