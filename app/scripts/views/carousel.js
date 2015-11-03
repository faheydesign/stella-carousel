/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.Carousel = Backbone.View.extend({

        template: JST['app/scripts/templates/carousel.ejs'],

        tagName: 'ul',
        className:'carousel-songs',

        events:{
            'click .shuffle' : 'shuffleSongs'
        },

        render: function () {
            this.$el.empty().append(this.template());
            this.collection.each(this.addSong, this);
            return this; 
        },

        addSong: function(song) {
            var songView = new App.Views.Song ({ model: song });
            this.$el.append(songView.render().el);
        },

        shuffleSongs: function(){
            this.collection.reset(this.collection.shuffle());
        },

        initialize: function(){
            this.listenTo(this.collection, 'reset', this.render);
        }

    });

})();
