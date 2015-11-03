/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.Song = Backbone.View.extend({

        template: JST['app/scripts/templates/song.ejs'],

        tagName: 'li',
        className: 'song-container',

        render: function () {
            var songTemplate = this.template(this.model.toJSON());
            this.$el.html(songTemplate);
            return this;
        }

    });

})();
