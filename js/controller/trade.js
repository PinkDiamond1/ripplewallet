/* global _, myApp, round */

myApp.controller("TradeCtrl", [ '$scope', '$rootScope', 'XrpApi', 'XrpOrderbook', 'SettingFactory', 'Gateways',
  function($scope, $rootScope, XrpApi, XrpOrderbook, SettingFactory, Gateways) {
    $scope.offers = {
      origin : null,
      all : {},
      ask : [],
      bid : [],
      clean : function() {
        this.origin = null;
        this.all = {};
        this.ask = [];
        this.bid = [];
      },
      update : function(data) {
        this.origin = data;
        this.all = {};
        this.ask = [];
        this.bid = [];
        data.forEach(offer => {
          var id, taker_gets, taker_pays, quantity, total, price;
          if (offer.specification.direction == 'sell') {
            taker_gets = native2coin(offer.specification.quantity);
            taker_pays = native2coin(offer.specification.totalPrice);
            quantity = taker_gets;
            total  = taker_pays;
            price = new BigNumber(total.value).dividedBy(quantity.value).toString();
          } else {
            taker_gets = native2coin(offer.specification.totalPrice);
            taker_pays = native2coin(offer.specification.quantity);
            quantity = taker_pays;
            total  = taker_gets;
            price = new BigNumber(taker_gets.value).dividedBy(quantity.value).toString();
          }
          id = offer.properties.sequence;
          this.all[id] = {
              id : id,
              direction : offer.specification.direction,
              quantity : quantity,
              total  : total,
              price  : price
          };
          
          if (sameAsset(taker_gets.currency, taker_gets.counterparty, $scope.base_code, $scope.base_issuer)
              && sameAsset(taker_pays.currency, taker_pays.counterparty, $scope.counter_code, $scope.counter_issuer)) {
              this.ask.push({
                id : id,
                quantity : taker_gets,
                total : taker_pays,
                price : new BigNumber(taker_pays.value).dividedBy(taker_gets.value).toString()
              });
            }
          if (sameAsset(taker_gets.currency, taker_gets.counterparty, $scope.counter_code, $scope.counter_issuer)
              && sameAsset(taker_pays.currency, taker_pays.counterparty, $scope.base_code, $scope.base_issuer) ) {
              this.bid.push({
                id : id,
                quantity : taker_pays,
                total : taker_gets,
                price : new BigNumber(taker_gets.value).dividedBy(taker_pays.value).toString()
              });
            }
        });
        try {
          this.ask = this.ask.sort((a, b) => {
            return parseFloat(a.price) - parseFloat(b.price);
          });
          this.bid = this.bid.sort((a, b) => {
            return parseFloat(b.price) - parseFloat(a.price);
          });
        } catch(e) {
          cosole.error(e);
        }
        
      }
    }

    var tradepair = SettingFactory.getTradepair();
    if (tradepair.base_issuer) {
      $scope.base_code   = realCode(tradepair.base_code);
      $scope.base_issuer = tradepair.base_issuer;
    } else {
      $scope.base_code   = $rootScope.currentNetwork.coin.code;
      $scope.base_issuer = null;
    }
    if (tradepair.counter_issuer) {
      $scope.counter_code   = realCode(tradepair.counter_code);
      $scope.counter_issuer = tradepair.counter_issuer;
    } else {
      $scope.counter_code   = $rootScope.currentNetwork.coin.code;
      $scope.counter_issuer = null;
    }
    $scope.savePair = function() {
      SettingFactory.setTradepair($scope.base_code, $scope.base_issuer, $scope.counter_code, $scope.counter_issuer);
    }
    $scope.base    = $rootScope.getGateway($scope.base_code, $scope.base_issuer);
    $scope.counter = $rootScope.getGateway($scope.counter_code, $scope.counter_issuer);

    $scope.tradeAssets = {};
    function addLinesToTradePairs() {
      for (var code in $rootScope.lines) {
        for (var issuer in $rootScope.lines[code]) {
          $scope.tradeAssets[key(code, issuer)] = {code: code, issuer: issuer};
        }
      }
    };
    addLinesToTradePairs();
    $scope.$on("balanceChange", function() {
      addLinesToTradePairs();
    });
    Gateways.defaultTradeAssets.forEach(asset =>{
      $scope.tradeAssets[key(asset.code, asset.issuer)] = {
        code: realCode(asset.code),
        issuer: asset.issuer
      }
    });
    
    
    $scope.precise = 2;
    $scope.price_precise = 4;
    $scope.precise_jutify = function() {
      if (['BTC', 'ETH'].indexOf($scope.base_code) >= 0) {
        $scope.precise = 4;
      } else {
        $scope.precise = 2;
      }

      if (['USD', 'CNY', 'XRP', 'XLM'].indexOf($scope.counter_code) >= 0) {
        $scope.price_precise = 4;
        if (['BTC', 'ETH'].indexOf($scope.base_code) >= 0) {
          $scope.price_precise = 0;
        }
      } else if (['BTC', 'ETH'].indexOf($scope.counter_code) >= 0) {
        $scope.price_precise = 6;
      } else {
        $scope.price_precise = 4;
      }
    }
    $scope.precise_jutify();

    $scope.book = {
      origin : null,
      asks : [],
      bids : [],
      clean : function() {
        this.origin = null;
        this.asks = [];
        this.bids = [];
      },
      update : function(data) {
        this.origin = data;
        this.asks = JSON.parse(JSON.stringify(data.asks));
        this.bids = JSON.parse(JSON.stringify(data.bids));
        this.process();
      },
      price :function(type) {
        if (type == 'ask') {
          return this.asks.length ? this.asks[0].price : null;
        } else {
          return this.bids.length ? this.bids[0].price : null;
        }
      },
      process : function() {
        var depth = 0;
        this.asks = this.asks.map((item)=>{
          depth = depth + item.amount;
          item.depth = depth;
          return item;
        });
        
        depth = 0;
        this.bids = this.bids.map((item)=>{
          depth = depth + item.amount;
          item.depth = depth;
          return item;
        });
        
        this.asks = this.asks.filter(item => {
          return new BigNumber(item.gets_value).isGreaterThan("0.001") || new BigNumber(item.pays_value).isGreaterThan("0.001");
        });
        this.bids = this.bids.filter(item => {
          return new BigNumber(item.gets_value).isGreaterThan("0.001") || new BigNumber(item.pays_value).isGreaterThan("0.001");
        });
        
        var displayNum = 20;
        if (this.asks.length > displayNum) {
          this.asks = this.asks.slice(0, displayNum);
        }
        if (this.bids.length > displayNum) {
          this.bids = this.bids.slice(0, displayNum);
        }
      }
    }

    $scope.refreshingBook = false;
    $scope.refreshBook = function() {
      var info = {
          base : {currency: $scope.base_code, counterparty: $scope.base_issuer},
          counter : {currency: $scope.counter_code, counterparty: $scope.counter_issuer}
      };
      $scope.refreshingBook = true;
      $scope.countdown = 30;
      XrpOrderbook.checkBook(info).then(data => {
        if (!$scope.book.origin || !_.isEqual($scope.book.origin.asks, data.asks) || !_.isEqual($scope.book.origin.bids, data.bids)) {
          console.debug('book changed', $scope.book);
        }
        $scope.book.update(data);
        $scope.refreshingBook = false;
        //$scope.$apply();
      }).catch(err => {
        console.error('Should not reach here.', err);
        $scope.refreshingBook = false;
        //$scope.$apply();
      });
    }
    $scope.refreshBook();

    $scope.refreshingOffer = false;
    $scope.refreshOffer = function() {
      $scope.refreshingOffer = true;
      XrpApi.checkOffers().then(data => {
        $scope.offers.update(data);
        console.log($scope.offers);
        $scope.refreshingOffer = false;
        $scope.$apply();
      }).catch(err => {
        $scope.refreshingOffer = false;
        $scope.$apply();
      });
    }
    $scope.refreshOffer();
    
    $scope.$on("offerChange", function() {
      console.debug('offerChange event got');
      $scope.refreshOffer();
      $scope.refreshBook();
    });

    $scope.buying = false;
    $scope.buy_fail;
    $scope.selling = false;
    $scope.sell_fail;
    
    $scope.buy_hash = "";
    $scope.buy_state = "";
    $scope.sell_hash = "";
    $scope.sell_state = "";
    $scope.$on("txSuccess", function(e, tx) {
      console.debug('txSuccess event', tx);
      if (tx.hash == $scope.buy_hash) $scope.buy_state = "success";
      if (tx.hash == $scope.sell_hash) $scope.sell_state = "success";
      $scope.refreshOffer();
      $scope.refreshBook();
      $scope.$apply();
    });
    $scope.$on("txFail", function(e, tx) {
      console.debug('txFail event', tx);
      if (tx.hash == $scope.buy_hash) $scope.buy_state = "fail";
      if (tx.hash == $scope.sell_hash) $scope.sell_state = "fail";
      $scope.refreshOffer();
      $scope.refreshBook();
      $scope.$apply();
    });

    $scope.buy_price;
    $scope.buy_amount;
    $scope.buy_volume;
    $scope.sell_price;
    $scope.sell_amount;
    $scope.sell_volume;
    $scope.calculate = function(name) {
      switch(name) {
      case 'buy_price':
        $scope.buy_volume = round($scope.buy_price * $scope.buy_amount, 8);
        break;
      case 'buy_amount':
        $scope.buy_volume = round($scope.buy_price * $scope.buy_amount, 8);
        break;
      case 'buy_volume':
        $scope.buy_amount = round($scope.buy_volume / $scope.buy_price, 8);
        break;
      case 'sell_price':
        $scope.sell_volume = round($scope.sell_price * $scope.sell_amount, 8);
        break;
      case 'sell_amount':
        $scope.sell_volume = round($scope.sell_price * $scope.sell_amount, 8);
        break;
      case 'sell_volume':
        $scope.sell_amount = round($scope.sell_volume / $scope.sell_price, 8);
        break;
      }
    }
    $scope.pickPrice = function(src, price) {
      if (src == 'bid') {
        $scope.sell_price = price;
      } else {
        $scope.buy_price = price;
      }
    }
    
    $scope.offerWithCheck = function(type) {
      var price;
      if (type == 'buy') {
        price = $scope.book.price('ask');
        if (price && $scope.buy_price > price * 1.2) {
          $scope.fatfingerbuy = true;
        } else {
          $scope.offer(type);
        }
      } else {
        price = $scope.book.price('bid');
        if (price && $scope.sell_price < price * 0.8) {
          $scope.fatfingersell = true;
        } else {
          $scope.offer(type);
        }
      }
    }

    $scope.offer = function(type) {
      $scope['fatfinger' + type] = false; // hide the fatfinger warning
      $scope[type + 'ing'] = true;
      $scope[type + '_hash'] = "";
      $scope[type + '_state'] = "";
      $scope[type + '_fail'] = "";
      var option = {
        type : type,
        base        : $scope.base_code,
        base_issuer : $scope.base_issuer,
        counter        : $scope.counter_code,
        counter_issuer : $scope.counter_issuer
      };
      if (type == 'buy') {
        option.amount = $scope.buy_amount;
        option.price  = $scope.buy_price;
      } else {
        option.amount = $scope.sell_amount;
        option.price  = $scope.sell_price;
      }
      XrpApi.offer(option).then(hash => {
        $scope[type + 'ing'] = false;
        $scope[type + '_hash'] = hash;
        $scope[type + '_state'] = "submitted";
        $scope[type + '_amount'] = "";
        $scope[type + '_price'] = "";
        $scope[type + '_volume'] = "";
        $scope.$apply();
        $scope.refreshOffer();
        $scope.refreshBook();
      }).catch(err => {
        $scope[type + 'ing'] = false;
        $scope[type + '_fail'] = err.message;
        $scope.$apply();
      });
    }

    $scope.offerDelete = {};
    $scope.isCancelling = function(id) {
      return !!$scope.offerDelete[id];
    }
    
    $scope.cancel = function(offer_id) {
      $scope.offerDelete[offer_id] = true;
      $scope.cancel_error = "";
      XrpApi.cancelOffer(offer_id).then(result => {
        $scope.refreshOffer();
      }).catch(err => {
        $scope.offerDelete[offer_id] = false;
        $scope.cancel_error = err.message;
      });
    }

    $scope.show_pair = false;
    $scope.choosePair = function() {
      $scope.show_pair = !$scope.show_pair;
      if (!$scope.show_pair) {
        $scope.book.clean();
        $scope.offers.clean();
        $scope.offerDelete = {};
        $scope.refreshOffer();
        $scope.refreshBook();
        $scope.savePair();
      }
    }
    $scope.pick = function(type, code, issuer) {
      if (type == 'base') {
        $scope.base_code = code;
        $scope.base_issuer = issuer;
        $scope.base = $rootScope.getGateway(code, issuer);
      } else {
        $scope.counter_code = code;
        $scope.counter_issuer = issuer;
        $scope.counter = $rootScope.getGateway(code, issuer);
      }
      $scope.precise_jutify();
    }
    $scope.flip = function() {
      var old_base_code = $scope.base_code;
      var old_base_issuer = $scope.base_issuer;
      $scope.pick('base', $scope.counter_code, $scope.counter_issuer);
      $scope.pick('counter', old_base_code, old_base_issuer);
      if (!$scope.show_pair) {
        $scope.book.clean();
        $scope.offers.clean();
        $scope.offerDelete = {};
        $scope.refreshOffer();
        $scope.refreshBook();
        $scope.savePair();
      }
    }

    $scope.isBase = function(code, issue) {
      return sameAsset(code, issue, $scope.base_code, $scope.base_issuer);
    }
    $scope.isCounter = function(code, issue) {
      return sameAsset(code, issue, $scope.counter_code, $scope.counter_issuer);
    }
    
    $scope.countdown = 30;
    console.log('countdown');
    $scope.timer = setInterval(function() {
      $scope.$apply(function() {
        $scope.countdown = $scope.countdown - 1;
        if ($scope.countdown <= 0) {
          $scope.refreshBook();
        }
      });
    }, 1000);
    
    $scope.$on("$destroy", function() {
      clearInterval($scope.timer);
    });
    
    function sameAsset(code, issuer, code2, issuer2) {
      if (code == $rootScope.currentNetwork.coin.code) {
        return code == code2;
      } else {
        return code == code2 && issuer == issuer2;
      }
    }
    
    function native2coin(asset) {
      obj = JSON.parse(JSON.stringify(asset));
      if (obj.currency == 'XRP') {
        obj.currency = $rootScope.currentNetwork.coin.code;
      }
      if (obj.code == 'XRP') {
        obj.code = $rootScope.currentNetwork.coin.code;
      }
      return obj;
    }

  } ]);
