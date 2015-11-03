/*global App, Backbone*/

App.Collections = App.Collections || {};

(function () {
    'use strict';

    App.Collections.Carousel = Backbone.Collection.extend({
    	model: App.Models.Song,
        url: 'https://itunes.apple.com/search?term=rolling+stones&limit=20&sort=popular',
        parse: function(response) {
    		return response.results;
		}        
    });

})();
