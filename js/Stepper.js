
/*

    Stepper.js

    Description: Step through multiple elements and activate them one at a time
    Author: Matthew Morrison @stuffmattdoesnt
    License: MIT
    URL: stuffmattdoes.com
    Version: 1.0

    TODO

*/

(function() {
     this.Stepper = function(container, params) {

        //  console.log("Stepper!");

        // ----------
        // Properties
        // ----------

        var defaults = {
            containerActiveClass: '.stepper-container-active',
            containerCompleteClass: '.stepper-container-complete',
            direction: "forward",
            item: '.stepper-item',
            itemActiveClass: 'stepper-item-active',
            speed: 500
        }

        var stepperInstance = this;

        // Create options by extending defaults with the passed in arugments
        if (arguments[1] && typeof arguments[1] === "object") {
            this.options = extendDefaults(defaults, arguments[1]);
        }

        // Utility method to extend defaults with user options
        function extendDefaults(source, properties) {

            for (var property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }

            // console.log(source);
            return source;
        }

        // console.log(this);

        // --------------
        // Public Methods
        // --------------

        this.stepIt = function() {

            // console.log(this);

            // Variables
            var containerCompleteClass = stepperInstance.options.containerCompleteClass,
                item = stepperInstance.options.item,
                itemActiveClass = stepperInstance.options.itemActiveClass,
                speed = stepperInstance.options.speed,
                itemArray = $(container).find($(item)),
                nextItem = 0;

            $(container).removeClass(containerCompleteClass);

            this.myInterval = setInterval(function() {
                if (nextItem >= itemArray.length) {
                    clearInterval(this.myInterval);
                    return;
                }
                $(itemArray).eq(nextItem).addClass(itemActiveClass);
                nextItem ++;
            }.bind(this), speed);

        }();

    }

})();
