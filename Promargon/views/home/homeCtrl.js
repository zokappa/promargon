angular.module('app').controller('homeCtrl', ['$scope', function ($scope) {
    $(document).ready(function () {
        $('.carousel').carousel({
            interval: 4000
            , cycle: true
        })
    });
    $('.carousel').carousel({
        interval: 4000
        , cycle: true
    })
  }]);