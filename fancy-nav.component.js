(function () {
  angular
    .module('app')
    .component('fancyNav', {
      transclude: true,
      template: `
        <button class="pure-button" style="font-size: 2em">Big, fancy button added by fancy-nav component.</button>
        <div class="pure-menu pure-menu-horizontal" ng-transclude></div>
      `
    });
})();
