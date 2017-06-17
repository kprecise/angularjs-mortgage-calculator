/**
* Plugin: Mortgage Calculator
* Frameworks: Angular JS / JQuery / Bootstrap
* Date: 4th September 2016
* Author: Kyri Kyriacou
* www.cheekyiguana.com
**/

$( document ).ready(function() {
  $('#ex1').slider({});

  var app = angular.module('calculatorApp', []);

  app.controller('ng-controller', function($scope) {

      $scope.master = {
        borrowAmount: 12500,
        interestRate: 3.56,
        Term: 33
      };

      $scope.calculateRepayment = function(){

        var calculation = $scope.master.borrowAmount * $scope.master.interestRate / 100;
        var result = parseInt(calculation.toFixed(2)) + parseInt($scope.master.borrowAmount);
        var repaymentAmount = parseInt(result) / $scope.master.Term;

        return repaymentAmount.toFixed(2);

      };

      $("#ex1").on("slide", function(slideEvt) {
        $scope.master.Term = slideEvt.value;

        $("#InputTerm").attr("value", $scope.master.Term);

        $scope.calculateRepayment();
      });

  });

});
