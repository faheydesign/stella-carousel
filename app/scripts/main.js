

window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var songCollection = new this.Collections.Carousel;
        var carouselControls = new App.Views.CarouselControls;

        var songGroup = songCollection.fetch({
            dataType: 'jsonp',
            success : function (data) {
                var songsView = new App.Views.Carousel({collection: data });
                $('.carousel-container').append(songsView.render().el);
                $('.carousel').append(carouselControls.render().el);

            }
        });
    }
};

$(document).ready(function () {
    'use strict';
    App.init();
});
