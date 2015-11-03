/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.CarouselControls = Backbone.View.extend({

        template: JST['app/scripts/templates/carouselControls.ejs'],

        tagName: 'div',

        className: 'carousel-controls',

        events: {
            'click .next' : 'advanceCarousel',
            'click .rewind' : 'rewindCarousel'
        },

        advanceCarousel: function(event){
            var carouselSongs = $('.carousel-songs');
            var carouselPosition = carouselSongs.position().left;
            if (carouselPosition > -1720){
                var moveLeft = carouselPosition - 430;
                carouselSongs.css('left', moveLeft);
            }
            this.checkControlStatus(moveLeft);
        },

        rewindCarousel: function(){
            var carouselSongs = $('.carousel-songs');
            var carouselPosition = carouselSongs.position().left;
            if (carouselPosition < 0){
                var moveLeft = carouselPosition + 430;
                carouselSongs.css('left', moveLeft);
            }
            this.checkControlStatus(moveLeft);
        },

        checkControlStatus: function(position){
            if(position === undefined){
               position = $('.carousel-songs').position().left;
            }

            if(position <= -1720){
                $('.next').addClass('inactive');
                $('.rewind').removeClass('inactive');
            }else if(position === 0){
                $('.rewind').addClass('inactive');
                $('.next').removeClass('inactive');
            }else{
                $('.next, .rewind').removeClass('inactive');
            }
        },

        render: function () {
            var html = this.template();
            this.$el.html(html);
            return this;
        }

    });

})();
