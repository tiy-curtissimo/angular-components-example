(function () {
  class TeamMemberController {
    constructor ($log, $timeout) {
      var member = this;
      member.log = $log;
      member.timeout = $timeout;
    }

    $onInit() {
      var member = this;
      member.imageUrl = 'http://www.placehold.it/150x150';
      
      member.timeout(function () {
        member.onSomething({$event: member.member});
      }, 1000);
    }
  }

  function factory ($log, $timeout) {
    return new TeamMemberController($log, $timeout);
  }

  angular
    .module('team')
    .component('teamMember', {
      templateUrl: 'team/team-member.template.html',
      controller: ['$log', '$timeout', factory],
      controllerAs: 'teamMember',
      bindings: {
        onSomething: '&',
        member: '<',
        firstName: '<'
      }
    });
})();
