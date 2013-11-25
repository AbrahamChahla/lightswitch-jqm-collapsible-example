/// <reference path="../GeneratedArtifacts/viewModel.js" />

function collapsibleContent(element, contentItem, options) {
    // provide some defaults for the optional "options" parameter
    var defaults = { theme: 'a', collapsed: false };
    options = $.extend({}, defaults, options);

    // create a header based on the displayName of the bound content
    var h1 = $('<h1>').text(contentItem.displayName);
    $(element).prepend(h1);

    // build the <div> for the jQM collapsible content control
    var d = $('<div data-role="collapsible" data-content-theme="' +
        options.theme + '" data-theme="' +
        options.theme + '" data-collapsed="' +
        options.collapsed + '"/>');

    // wrap the existing children with this div
    $(element).children().wrapAll(d);

    // tell jQM to render the new <div>
    d.trigger("create");
}

myapp.AddEditPerson.Address_postRender = function (element, contentItem) {
    collapsibleContent(element, contentItem, { collapsed: true });
};