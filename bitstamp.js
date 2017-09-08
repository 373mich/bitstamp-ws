var Pusher = require('pusher-js/node');

var BITSTAMP_PUSHER_KEY = 'de504dc5763aeef9ff52';

var Bitstamp = function(opts) {
  if (opts) {
    this.opts = opts;
  }
  else {
    this.opts = {
      // force encrypted socket session
      encrypted: true,

      // BTC/USD market:
      live_trades: true,
      order_book: true,
      diff_order_book: true,

    };
  }

  this.client = new Pusher(BITSTAMP_PUSHER_KEY, {
      encrypted: this.opts.encrypted
  });


  // bitstamp publishes all data over just 2 channels
  // make sure we only subscribe to each channel once
  this.bound = {
    trade: false,
    data: false
  }

  this.subscribe();
}

var util = require('util');
var EventEmitter = require('events').EventEmitter;
util.inherits(Bitstamp, EventEmitter);

Bitstamp.prototype.subscribe = function() {

  // BTC/USD events
  if(typeof this.opts.live_trades !== 'undefined' && this.opts.live_trades == true) {
    this.client.subscribe('live_trades');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book !== 'undefined' && this.opts.order_book == true) {
    this.client.subscribe('order_book');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book !== 'undefined' && this.opts.diff_order_book == true) {
    this.client.subscribe('diff_order_book');
    this.client.bind('data', this.broadcast('data'));
  }

  // EUR/USD events
  if(typeof this.opts.live_trades_eurusd !== 'undefined' && this.opts.live_trades_eurusd == true) {
    this.client.subscribe('live_trades_eurusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_eurusd !== 'undefined' && this.opts.order_book_eurusd == true) {
    this.client.subscribe('order_book_eurusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_eurusd !== 'undefined' && this.opts.diff_order_book_eurusd == true) {
    this.client.subscribe('diff_order_book_eurusd');
    this.client.bind('data', this.broadcast('data'));
  }

  // XRP/USD events
  if(typeof this.opts.live_trades_xrpusd !== 'undefined' && this.opts.live_trades_xrpusd == true) {
    this.client.subscribe('live_trades_xrpusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_xrpusd !== 'undefined' && this.opts.order_book_xrpusd == true) {
    this.client.subscribe('order_book_xrpusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_xrpusd !== 'undefined' && this.opts.diff_order_book_xrpusd == true) {
    this.client.subscribe('diff_order_book_xrpusd');
    this.client.bind('data', this.broadcast('data'));
  }


  // LTC/USD events
  if(typeof this.opts.live_trades_ltcusd !== 'undefined' && this.opts.live_trades_ltcusd == true) {
    this.client.subscribe('live_trades_ltcusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_ltcusd !== 'undefined' && this.opts.order_book_ltcusd == true) {
    this.client.subscribe('order_book_ltcusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_ltcusd !== 'undefined' && this.opts.diff_order_book_ltcusd == true) {
    this.client.subscribe('diff_order_book_ltcusd');
    this.client.bind('data', this.broadcast('data'));
  }

  // ETH/USD events
  if(typeof this.opts.live_trades_ethusd !== 'undefined' && this.opts.live_trades_ethusd == true) {
    this.client.subscribe('live_trades_ethusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_ethusd !== 'undefined' && this.opts.order_book_ethusd == true) {
    this.client.subscribe('order_book_ethusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_ethusd !== 'undefined' && this.opts.diff_order_book_ethusd == true) {
    this.client.subscribe('diff_order_book_ethusd');
    this.client.bind('data', this.broadcast('data'));
  }

  // BTC/EUR events
  if(typeof this.opts.live_trades_btceur !== 'undefined' && this.opts.live_trades_btceur == true) {
    this.client.subscribe('live_trades_btceur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_btceur !== 'undefined' && this.opts.order_book_btceur == true) {
    this.client.subscribe('order_book_btceur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_btceur !== 'undefined' && this.opts.diff_order_book_btceur == true) {
    this.client.subscribe('diff_order_book_btceur');
    this.client.bind('data', this.broadcast('data'));
  }

  // XRP/EUR events
  if(typeof this.opts.live_trades_xrpeur !== 'undefined' && this.opts.live_trades_xrpeur == true) {
    this.client.subscribe('live_trades_xrpeur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_xrpeur !== 'undefined' && this.opts.order_book_xrpeur == true) {
    this.client.subscribe('order_book_xrpeur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_xrpeur !== 'undefined' && this.opts.diff_order_book_xrpeur == true) {
    this.client.subscribe('diff_order_book_xrpeur');
    this.client.bind('data', this.broadcast('data'));
  }

  // XRP/BTC events
  if(typeof this.opts.live_trades_xrpbtc !== 'undefined' && this.opts.live_trades_xrpbtc == true) {
    this.client.subscribe('live_trades_xrpbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_xrpbtc !== 'undefined' && this.opts.order_book_xrpbtc == true) {
    this.client.subscribe('order_book_xrpbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_xrpbtc !== 'undefined' && this.opts.diff_order_book_xrpbtc == true) {
    this.client.subscribe('diff_order_book_xrpbtc');
    this.client.bind('data', this.broadcast('data'));
  }

  // LTC/EUR events
  if(typeof this.opts.live_trades_ltceur !== 'undefined' && this.opts.live_trades_ltceur == true) {
    this.client.subscribe('live_trades_ltceur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_ltceur !== 'undefined' && this.opts.order_book_ltceur == true) {
    this.client.subscribe('order_book_ltceur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_ltceur !== 'undefined' && this.opts.diff_order_book_ltceur == true) {
    this.client.subscribe('diff_order_book_ltceur');
    this.client.bind('data', this.broadcast('data'));
  }

  // LTC/BTC events
  if(typeof this.opts.live_trades_ltcbtc !== 'undefined' && this.opts.live_trades_ltcbtc == true) {
    this.client.subscribe('live_trades_ltcbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_ltcbtc !== 'undefined' && this.opts.order_book_ltcbtc == true) {
    this.client.subscribe('order_book_ltcbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_ltcbtc !== 'undefined' && this.opts.diff_order_book_ltcbtc == true) {
    this.client.subscribe('diff_order_book_ltcbtc');
    this.client.bind('data', this.broadcast('data'));
  }

  // ETH/EUR events
  if(typeof this.opts.live_trades_etheur !== 'undefined' && this.opts.live_trades_etheur == true) {
    this.client.subscribe('live_trades_etheur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_etheur !== 'undefined' && this.opts.order_book_etheur == true) {
    this.client.subscribe('order_book_etheur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_etheur !== 'undefined' && this.opts.diff_order_book_etheur == true) {
    this.client.subscribe('diff_order_book_etheur');
    this.client.bind('data', this.broadcast('data'));
  }

  // ETH/BTC events
  if(typeof this.opts.live_trades_ethbtc !== 'undefined' && this.opts.live_trades_ethbtc == true) {
    this.client.subscribe('live_trades_ethbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(typeof this.opts.order_book_ethbtc !== 'undefined' && this.opts.order_book_ethbtc == true) {
    this.client.subscribe('order_book_ethbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(typeof this.opts.diff_order_book_ethbtc !== 'undefined' && this.opts.diff_order_book_ethbtc == true) {
    this.client.subscribe('diff_order_book_ethbtc');
    this.client.bind('data', this.broadcast('data'));
  }

};

Bitstamp.prototype.broadcast = function(name) {
  if(this.bound[name])
    return function noop() {};

  this.bound[name] = true;

  return function(e) {
    this.emit(name, e)
  }.bind(this);
};

module.exports = Bitstamp;
