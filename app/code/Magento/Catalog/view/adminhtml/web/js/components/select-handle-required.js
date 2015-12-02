/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Ui/js/form/element/select'
], function (Select) {
    'use strict';

    return Select.extend({

        /**
         * Disable required validation, when 'use config option' checked
         *
         * @returns {Boolean}
         */
        handleRequired : function (newValue) {
            this.validation['required-entry'] = !newValue;
            this.required(!newValue);
            this.error(false);
        }
    });
});
