angular.module('filters', []).
filter('cardtype', [function ($scope) {
    return function (ccnumber) {
      if (!ccnumber) { return "images/default.png"; }
      ccnumber = ccnumber.toString().replace(/\s+/g, '');
      var len = ccnumber.length;
      var cardType,valid,path;
      mul = 0,
      prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
      sum = 0;
      while (len--) {
          sum += prodArr[mul][parseInt(ccnumber.charAt(len), 10)];
          mul ^= 1;
      }
      if(/^(34)|^(37)/.test(ccnumber)) {
        cardType = "American Express";
		    path="American.png";
      }
      if(/^(62)|^(88)/.test(ccnumber)) {
        cardType = "China UnionPay";
		    path="China.png";
      }
      if(/^30[0-5]/.test(ccnumber)) {
        cardType = "Diners Club Carte Blanche";
		    path="Diners.png";
      }
      if(/^(2014)|^(2149)/.test(ccnumber)) {
        cardType = "Diners Club enRoute";
		    path="Dinersclub.png";
      }
      if(/^36/.test(ccnumber)) {
        cardType = "Diners Club International";
		    path="DinersInt.png";
      }
      if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) {
        cardType = "Discover Card";
		    path="Discover.png";
      }
      if(/^35(2[89]|[3-8][0-9])/.test(ccnumber)) {
        cardType = "JCB";
		    path="Jcb.png";
      }
      if(/^(6304)|^(6706)|^(6771)|^(6709)/.test(ccnumber)) {
        cardType = "Laser";
		    path="Laser.png";
      }
      if(/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(ccnumber)) {
        cardType = "Maestro";
		    path="Maestro.png";
      }
      if(/^5[1-5]/.test(ccnumber)) {
        cardType = "MasterCard";
		    path="MasterCard.png";
      }
      if (/^4/.test(ccnumber)) {
        cardType = "Visa";
		    path="visa.png";
      }
      if (/^(4026)|^(417500)|^(4405)|^(4508)|^(4844)|^(4913)|^(4917)/.test(ccnumber)) {
        cardType = "Visa Electron"
		   path="visaelec.png";
      }

      if (sum % 10 === 0 && sum > 0) {
        valid = "valid";
        return "images/"+path;
      } else {
        valid = "not valid";
        return "images/default.png";
      }

      
    };
}]);
