/**
 * Template Manager
 * Copyright (c) Webmatch GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

Ext.define('Shopware.apps.WbmTemplateManager.model.Template', {
    extend : 'Ext.data.Model', 
    fields : [
        {
            name: 'name', 
            type: 'string'
        }, 
        {
            name: 'content',
            type: 'string'
        },
        {
            name: 'oContent',
            type: 'string'
        },
        {
            name: 'custom',
            type: 'int'
        }
    ],
    proxy: {
        type : 'ajax', 
        api:{
            read : '{url action=list}',
            create : '{url action="create"}',
            update : '{url action="update"}',
            destroy : '{url action="delete"}'
        },
        reader : {
            type : 'json',
            root : 'data'
        }
    }
});
