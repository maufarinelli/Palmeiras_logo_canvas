'use strict';

window.app = window.app || {};

(function(window, document, $) {

    /**
     * Class Palmeiras
     * @param {Object} elements - object containing HTML Canvas Elements to construct the Palmeiras logo
     * @param {Object} options - Custom options
     */
    var Palmeiras = function(options, elements) {
        // settings
        this.settings = $.extend(true, {}, Palmeiras.DEFAULTS, options);

        // elements
        this.elements = $.extend(true, {}, Palmeiras.ELEMENTS, elements);
    };

    /**
     * Default settings
     * @type {Object}
     */
    Palmeiras.DEFAULTS = {
        ratio: 1,
        whiteColor: '#fff',
        greenPalmeiras: '#006437'
    };

    /**
     * Default Canvas elements
     * @type {Object}
     */
    Palmeiras.ELEMENTS = {
        outsideGreenCircle: document.getElementById('greencircle-outside').getContext('2d'),
        /*outsideWhiteCircle: document.getElementById('whitecircle-outside').getContext('2d'),
        insideGreenCircle: document.getElementById('greencircle-inside').getContext('2d'),*/

        pSymbolWhiteCircleOutside: document.getElementById('psymbol-whitecircle-outside').getContext('2d'),
        /*pSymbolGreenCircleLine: document.getElementById('psymbol-greencircle-line').getContext('2d'),
        pSymbolOutsideShield: document.getElementById('psymbol-outside-shield').getContext('2d'),
        pSymbolInsideShield: document.getElementById('psymbol-inside-shield').getContext('2d'),

        pSymbolLine: document.getElementById('psymbol-line').getContext('2d'),
        pSymbol: document.getElementById('psymbol').getContext('2d')*/
    };


    $.extend(true, Palmeiras.prototype, {
        /**
         * initialize Palmeiras's Logo
         */
        initialize: function() {
            this.drawOutsizeGreenCircle();
            this.drawInsizeGreenCircle();

            // P-symbol part
            this.drawPSymbolOutsizeWhiteCircle();
            this.drawPSymbolGreenCircleLine();
            this.drawpSymbolOutsideShield();
            this.drawpSymbolInsideShield();

            this.drawPSymbolLines();
            this.drawPSymbol();
        },

        _ratioValue: function(value) {
            return value * this.settings.ratio;
        },

        /**
         * Draw Outsize Green Circle
         */
        drawOutsizeGreenCircle: function() {
            this.elements.outsideGreenCircle.arc(this._ratioValue(205), this._ratioValue(205), this._ratioValue(198), 0, 2*Math.PI);
            this.elements.outsideGreenCircle.fillStyle = this.settings.greenPalmeiras;
            this.elements.outsideGreenCircle.fill();

            this.elements.outsideGreenCircle.lineWidth = this._ratioValue(10);
            this.elements.outsideGreenCircle.strokeStyle = this.settings.greenPalmeiras;
            this.elements.outsideGreenCircle.stroke();
        },

        /**
         * Draw Inside Green Circle
         */
        drawInsizeGreenCircle: function() {
            this.elements.outsideGreenCircle.globalCompositeOperation = 'destination-out';
            this.elements.outsideGreenCircle.arc(this._ratioValue(205), this._ratioValue(205), this._ratioValue(192), 200, 2*Math.PI, true);
            this.elements.outsideGreenCircle.fillStyle = this.settings.whiteColor;
            this.elements.outsideGreenCircle.fill();
        },

        /* P Symbol section
        / ------------------------------------------------ */

        /**
         * Draw the outside white circle that will contain the P Symbol
         */
        drawPSymbolOutsizeWhiteCircle: function() {
            this.elements.pSymbolWhiteCircleOutside.arc(this._ratioValue(205), this._ratioValue(135), this._ratioValue(100), 0, 2*Math.PI);
            this.elements.pSymbolWhiteCircleOutside.fillStyle = this.settings.whiteColor;
            this.elements.pSymbolWhiteCircleOutside.fill();
        },

        /**
         * Draw the green circle line in the white circle that will contain the P Symbol
         */
        drawPSymbolGreenCircleLine: function() {
            this.elements.pSymbolWhiteCircleOutside.globalCompositeOperation = 'source-over';
            this.elements.pSymbolWhiteCircleOutside.arc(this._ratioValue(205), this._ratioValue(135), this._ratioValue(93), 0, 2*Math.PI);
            //this.elements.pSymbolWhiteCircleOutside.fillStyle = this.settings.greenPalmeiras;
            //this.elements.pSymbolWhiteCircleOutside.fill();
            this.elements.pSymbolWhiteCircleOutside.strokeStyle = this.settings.greenPalmeiras;
            this.elements.pSymbolWhiteCircleOutside.lineWidth = this._ratioValue(3);
            this.elements.pSymbolWhiteCircleOutside.stroke();
        },

        /**
         * Draw the green outside line of the shield
         */
        drawpSymbolOutsideShield: function() {
            //this.elements.pSymbolOutsideShield.beginPath();
            //this.elements.pSymbolOutsideShield.lineJoin = 'bevel';
            //this.elements.pSymbolOutsideShield.moveTo(this._ratioValue(123), this._ratioValue(77));
            //this.elements.pSymbolOutsideShield.bezierCurveTo(this._ratioValue(123), this._ratioValue(84), this._ratioValue(200), this._ratioValue(50), this._ratioValue(200), this._ratioValue(38));
            //this.elements.pSymbolOutsideShield.bezierCurveTo(this._ratioValue(200), this._ratioValue(50), this._ratioValue(277), this._ratioValue(84), this._ratioValue(276), this._ratioValue(77));
            //this.elements.pSymbolOutsideShield.bezierCurveTo(this._ratioValue(276), this._ratioValue(154), this._ratioValue(211), this._ratioValue(215), this._ratioValue(200), this._ratioValue(223));
            //this.elements.pSymbolOutsideShield.bezierCurveTo(this._ratioValue(200), this._ratioValue(223), this._ratioValue(123), this._ratioValue(165), this._ratioValue(123), this._ratioValue(77));
            //
            //this.elements.pSymbolOutsideShield.lineWidth = this._ratioValue(2);
            //this.elements.pSymbolOutsideShield.strokeStyle = this.settings.greenPalmeiras;
            //this.elements.pSymbolOutsideShield.stroke();
        },

        /**
         * Draw the green inside line of the shield
         */
        drawpSymbolInsideShield: function() {
            //this.elements.pSymbolInsideShield.beginPath();
            //this.elements.pSymbolInsideShield.lineJoin = 'bevel';
            //this.elements.pSymbolInsideShield.moveTo(this._ratioValue(132), this._ratioValue(84));
            //this.elements.pSymbolInsideShield.bezierCurveTo(this._ratioValue(132), this._ratioValue(88), this._ratioValue(200), this._ratioValue(60), this._ratioValue(200), this._ratioValue(50));
            //this.elements.pSymbolInsideShield.bezierCurveTo(this._ratioValue(200), this._ratioValue(60), this._ratioValue(270), this._ratioValue(90), this._ratioValue(267), this._ratioValue(84));
            //this.elements.pSymbolInsideShield.bezierCurveTo(this._ratioValue(267), this._ratioValue(141), this._ratioValue(206), this._ratioValue(210), this._ratioValue(200), this._ratioValue(211));
            //this.elements.pSymbolInsideShield.bezierCurveTo(this._ratioValue(200), this._ratioValue(215), this._ratioValue(134), this._ratioValue(152), this._ratioValue(132), this._ratioValue(83));
            //
            //this.elements.pSymbolInsideShield.lineWidth = this._ratioValue(2);
            //this.elements.pSymbolInsideShield.strokeStyle = this.settings.greenPalmeiras;
            //this.elements.pSymbolInsideShield.stroke();
        },

        drawPSymbolLines: function() {
            var aX1 = [190, 178, 166, 152, 138, 132, 134, 135, 135, 136, 138, 140, 142, 145, 148, 151, 155, 159, 163, 167, 171, 176, 181, 186, 191],
                aX2 = [212, 222, 232, 246, 260, 267, 265, 264, 264, 263, 261, 259, 257, 254, 251, 248, 244, 240, 236, 233, 229, 224, 219, 214, 209],
                aY = 60;

            for (var i = 0; i < aX1.length; i++) {
                //this.elements.pSymbolLine.moveTo(this._ratioValue(aX1[i]), this._ratioValue(aY));
                //this.elements.pSymbolLine.lineTo(this._ratioValue(aX2[i]), this._ratioValue(aY));
                //this.elements.pSymbolLine.lineWidth = this._ratioValue(1);
                //this.elements.pSymbolLine.strokeStyle = this.settings.greenPalmeiras;
                //this.elements.pSymbolLine.stroke();

                aY += 6;
            }
        },

        drawPSymbol: function() {
            //this.elements.pSymbol.beginPath();
            //this.elements.pSymbol.lineJoin = 'bevel';
            //this.elements.pSymbol.moveTo(this._ratioValue(173), this._ratioValue(83));
            //this.elements.pSymbol.bezierCurveTo(this._ratioValue(173), this._ratioValue(77), this._ratioValue(187), this._ratioValue(77), this._ratioValue(187), this._ratioValue(83));
            //this.elements.pSymbol.bezierCurveTo(this._ratioValue(193), this._ratioValue(166), this._ratioValue(227), this._ratioValue(66), this._ratioValue(233), this._ratioValue(83));
            //this.elements.pSymbol.bezierCurveTo(this._ratioValue(238), this._ratioValue(93), this._ratioValue(243), this._ratioValue(113), this._ratioValue(237), this._ratioValue(123));
            //
            //this.elements.pSymbol.lineWidth = this._ratioValue(3);
            //this.elements.pSymbol.strokeStyle = this.settings.greenPalmeiras;
            //this.elements.pSymbol.stroke();
            //
            //this.elements.pSymbol.fillStyle = this.settings.whiteColor;
            //this.elements.pSymbol.fill();


            /*var startingX = 190, startingY = 300, firstX = 207, firstY = 281, secondX = 240, secondY = 269, endingX = 270, endingY = 303;
            context.moveTo( startingX, startingY );
            context.bezierCurveTo( firstX, firstY, secondX, secondY, endingX, endingY );

            context.moveTo( startingX + 80, startingY + 3 )
            context.bezierCurveTo( firstX + 84, firstY - 40, secondX + 137, secondY - 45, endingX + 137, endingY - 5 );

            context.moveTo( startingX + 216, startingY - 6 )
            context.bezierCurveTo( firstX + 237, firstY + 128, secondX + 97, secondY + 214, endingX + 38, endingY + 100 );

            context.moveTo( startingX + 119, startingY + 105 )
            context.bezierCurveTo( firstX + 98, firstY + 80, secondX + 115, secondY + 104, endingX + 78, endingY + 91 );

            context.moveTo( startingX + 158, startingY + 94 )
            context.bezierCurveTo( firstX + 143, firstY + 125, secondX + 95, secondY + 150, endingX + 51, endingY + 95 );

            context.moveTo( startingX + 132, startingY + 99 )
            context.bezierCurveTo( firstX + 115, firstY + 164, secondX + 176, secondY + 145, endingX + 105, endingY + 39 );

            context.moveTo( startingX + 185, startingY + 42 )
            context.bezierCurveTo( firstX + 210, firstY + 25, secondX + 91, secondY - 57, endingX + 27, endingY - 1 );

            context.moveTo( startingX + 107, startingY )
            context.bezierCurveTo( firstX + 88, firstY + 128, secondX + 52, secondY + 279, endingX + 23, endingY + 282 );

            context.moveTo( startingX + 103, startingY + 284 )
            context.bezierCurveTo( firstX + 88, firstY + 292, secondX + 45, secondY + 333, endingX + 53, endingY + 314 );

            context.moveTo( startingX + 132, startingY + 317 )
            context.bezierCurveTo( firstX + 114, firstY + 338, secondX + 22, secondY + 352, endingX - 7, endingY + 264 );

            context.moveTo( startingX + 74, startingY + 266 )
            context.bezierCurveTo( firstX + 57, firstY + 298, secondX - 12, secondY + 305, endingX - 49, endingY + 250 );

            context.moveTo( startingX + 31, startingY + 253 )
            context.bezierCurveTo( firstX + 66, firstY + 274, secondX + 26, secondY + 249, endingX - 5, endingY + 132 );

            context.moveTo( startingX + 75, startingY + 136 )
            context.bezierCurveTo( firstX + 53, firstY + 134, secondX + 1, secondY + 144, endingX - 41, endingY + 107 );

            context.moveTo( startingX + 39, startingY + 110 )
            context.bezierCurveTo( firstX + 58, firstY + 125, secondX + 25, secondY + 119, endingX - 8, endingY + 84 );

            context.moveTo( startingX + 73, startingY + 88 )
            context.bezierCurveTo( firstX + 58, firstY + 26, secondX + 11, secondY + 27, endingX - 80, endingY - 3 );*/
        }



    });

    window.app.Palmeiras = Palmeiras;

})(window, window.document, window.jQuery);