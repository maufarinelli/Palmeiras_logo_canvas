/**
 * Class Palmeiras
 */
class Palmeiras {
    constructor(options) {
        this.SETTINGS = {
            ratio: options.ratio,
            whiteColor: '#fff',
            greenPalmeiras: '#006437'
        };
        this.ELEMENTS = {
            outsideGreenCircle: document.getElementById('greencircle-outside').getContext('2d'),

            pSymbolWhiteCircleOutside: document.getElementById('psymbol-whitecircle-outside').getContext('2d'),
            pSymbolWhiteCircleInside: document.getElementById('psymbol-whitecircle-inside').getContext('2d'),
            //pSymbolGreenCircleLine: document.getElementById('psymbol-greencircle-line').getContext('2d'),
            
            pSymbolOutsideShield: document.getElementById('psymbol-outside-shield').getContext('2d'),
            // pSymbolInsideShield: document.getElementById('psymbol-inside-shield').getContext('2d'),

            // pSymbolLine: document.getElementById('psymbol-line').getContext('2d'),
            // pSymbol: document.getElementById('psymbol').getContext('2d')
        };

        /**
         * initialize Palmeiras's Logo
         */
        this.drawOutsizeGreenCircle();
        this.drawInsideGreenCircle();

        this.drawPSymbolOutsizeWhiteCircle();
        this.drawPSymbolInsizeWhiteCircle();
        this.drawpSymbolOutsideShield();
        /*this.drawpSymbolInsideShield();

        this.drawPSymbolLines();
        this.drawPSymbol();*/
    }

    ratioValue(value) {
        return value * this.SETTINGS.ratio;
    }

    /**
     * Draw Outsize Green Circle
     */
    drawOutsizeGreenCircle() {
        this.ELEMENTS.outsideGreenCircle.arc(this.ratioValue(205), this.ratioValue(205), this.ratioValue(198), 0, 2*Math.PI);
        this.ELEMENTS.outsideGreenCircle.fillStyle = this.SETTINGS.greenPalmeiras;
        this.ELEMENTS.outsideGreenCircle.fill();

        this.ELEMENTS.outsideGreenCircle.lineWidth = this.ratioValue(10);
        this.ELEMENTS.outsideGreenCircle.strokeStyle = this.SETTINGS.greenPalmeiras;
        this.ELEMENTS.outsideGreenCircle.stroke();
    }

    /**
     * Draw Inside Green Circle
     */
    drawInsideGreenCircle() {
        this.ELEMENTS.outsideGreenCircle.globalCompositeOperation = 'destination-out';
        this.ELEMENTS.outsideGreenCircle.arc(this.ratioValue(205), this.ratioValue(205), this.ratioValue(193), 0, 2*Math.PI, true);
        this.ELEMENTS.outsideGreenCircle.fillStyle = this.SETTINGS.whiteColor;
        this.ELEMENTS.outsideGreenCircle.fill();
    }

    /* P Symbol section
        / ------------------------------------------------ */

    /**
     * Draw the outside white circle that will contain the P Symbol
     */
    drawPSymbolOutsizeWhiteCircle() {
        this.ELEMENTS.pSymbolWhiteCircleOutside.arc(this.ratioValue(205), this.ratioValue(135), this.ratioValue(100), 0, 2*Math.PI);
        this.ELEMENTS.pSymbolWhiteCircleOutside.fillStyle = this.SETTINGS.whiteColor;
        this.ELEMENTS.pSymbolWhiteCircleOutside.fill();
    }

    /**
     * Draw the outside white circle that will contain the P Symbol
     */
    drawPSymbolInsizeWhiteCircle() {
        this.ELEMENTS.pSymbolWhiteCircleInside.arc(this.ratioValue(205), this.ratioValue(135), this.ratioValue(94), 0, 2*Math.PI);
        this.ELEMENTS.pSymbolWhiteCircleInside.fillStyle = this.SETTINGS.whiteColor;
        this.ELEMENTS.pSymbolWhiteCircleInside.fill();

        this.ELEMENTS.pSymbolWhiteCircleInside.lineWidth = this.ratioValue(3);
        this.ELEMENTS.pSymbolWhiteCircleInside.strokeStyle = this.SETTINGS.greenPalmeiras;
        this.ELEMENTS.pSymbolWhiteCircleInside.stroke();
    }


    /**
     * Draw the green outside line of the shield
     */
    drawpSymbolOutsideShield() {
        this.ELEMENTS.pSymbolOutsideShield.beginPath();
        this.ELEMENTS.pSymbolOutsideShield.lineJoin = 'bevel';
        this.ELEMENTS.pSymbolOutsideShield.moveTo(this.ratioValue(128), this.ratioValue(82));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(128), this.ratioValue(88), this.ratioValue(205), this.ratioValue(54), this.ratioValue(205), this.ratioValue(40));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(205), this.ratioValue(54), this.ratioValue(281), this.ratioValue(88), this.ratioValue(282), this.ratioValue(82));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(282), this.ratioValue(158), this.ratioValue(215), this.ratioValue(219), this.ratioValue(205), this.ratioValue(228));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(205), this.ratioValue(228), this.ratioValue(127), this.ratioValue(169), this.ratioValue(127), this.ratioValue(81));
        
        this.ELEMENTS.pSymbolOutsideShield.lineWidth = this.ratioValue(2);
        this.ELEMENTS.pSymbolOutsideShield.strokeStyle = this.SETTINGS.greenPalmeiras;
        this.ELEMENTS.pSymbolOutsideShield.stroke();

        this.ELEMENTS.pSymbolOutsideShield.beginPath();
        this.ELEMENTS.pSymbolOutsideShield.lineJoin = 'bevel';
        this.ELEMENTS.pSymbolOutsideShield.moveTo(this.ratioValue(132), this.ratioValue(86));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(132), this.ratioValue(92), this.ratioValue(205), this.ratioValue(58), this.ratioValue(205), this.ratioValue(48));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(205), this.ratioValue(58), this.ratioValue(278), this.ratioValue(92), this.ratioValue(278), this.ratioValue(86));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(274), this.ratioValue(154), this.ratioValue(205), this.ratioValue(226), this.ratioValue(205), this.ratioValue(222));
        this.ELEMENTS.pSymbolOutsideShield.bezierCurveTo(this.ratioValue(205), this.ratioValue(222), this.ratioValue(134), this.ratioValue(152), this.ratioValue(132), this.ratioValue(86));
        
        this.ELEMENTS.pSymbolOutsideShield.lineWidth = this.ratioValue(2);
        this.ELEMENTS.pSymbolOutsideShield.strokeStyle = this.SETTINGS.greenPalmeiras;
        this.ELEMENTS.pSymbolOutsideShield.stroke();
        
    }

}

export { Palmeiras };