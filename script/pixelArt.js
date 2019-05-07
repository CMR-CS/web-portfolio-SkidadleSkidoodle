/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler

var penColor = 'black';

function setPenColour(pen)
{
    penColor = pen;
}

function setPixelColour(pixel)
{
    pixel.style.backgroundColor = penColor;
}