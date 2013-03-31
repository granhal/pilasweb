// Generated by CoffeeScript 1.4.0

/*
 Licencia de pilasweb.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['actores/actor'], function(Actor) {
    var Plano;
    Plano = (function(_super) {

      __extends(Plano, _super);

      function Plano(options, sprite) {
        var g;
        this.sprite = sprite != null ? sprite : "";
        if (!(this instanceof Plano)) {
          return new Plano(options);
        }
        this.imagen = pilas.imagenes.cargar("plano.png");
        g = new createjs.Graphics();
        g.beginBitmapFill(this.imagen.imagen);
        g.drawRect(0, 0, 600, 600);
        this.sprite = new createjs.Shape(g);
        pilas.agregar(this);
      }

      return Plano;

    })(Actor);
    return Plano;
  });

}).call(this);
