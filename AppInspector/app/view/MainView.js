/*
 * File: app/view/MainView.js
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

Ext.define('AI.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'AI.view.ComponentInspector',
        'AI.view.StoreInspector',
        'AI.view.AppProfiles',
        'Ext.grid.property.Grid',
        'Ext.button.Button',
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    collapsed: true,
                    collapsible: true,
                    title: 'Menu',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'propertygrid',
                            height: 150,
                            itemId: 'AppDetails',
                            title: 'App Details',
                            source: {
                                
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'ComponentsNav',
                            icon: 'resources/images/nav-components.png',
                            scale: 'large',
                            text: 'Components'
                        },
                        {
                            xtype: 'button',
                            itemId: 'StoresNav',
                            icon: 'resources/images/nav-stores.png',
                            scale: 'large',
                            text: 'Stores'
                        },
                        {
                            xtype: 'button',
                            itemId: 'ProfilesNav',
                            icon: 'resources/images/nav-components.png',
                            scale: 'large',
                            text: 'Layouts'
                        },
                        {
                            xtype: 'button',
                            itemId: 'EventsNav',
                            icon: 'resources/images/nav-components.png',
                            scale: 'large',
                            text: 'Events'
                        },
                        {
                            xtype: 'button',
                            itemId: 'PerformanceNav',
                            icon: 'resources/images/nav-components.png',
                            scale: 'large',
                            text: 'Performance'
                        },
                        {
                            xtype: 'button',
                            itemId: 'AboutNav',
                            icon: 'resources/images/nav-components.png',
                            scale: 'large',
                            text: 'About'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'ContentPanel',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'componentinspector'
                        },
                        {
                            xtype: 'storeinspector'
                        },
                        {
                            xtype: 'appprofiles'
                        },
                        {
                            xtype: 'panel',
                            title: 'Events'
                        },
                        {
                            xtype: 'panel',
                            title: 'Performance'
                        },
                        {
                            xtype: 'panel',
                            itemId: 'AboutPanel',
                            loader: {
                                url: 'about.html',
                                autoLoad: true
                            },
                            padding: 20
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});