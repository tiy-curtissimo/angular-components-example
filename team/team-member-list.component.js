(function () {
  class TeamMemberListController {
    $onInit() {
      this.members = [
        { firstName: 'Carol', lastName: 'Burnett', imageUrl: 'http://placehold.it/100x100' },
        { firstName: 'Harvey', lastName: 'Korman' }
      ];
      this.receivedMessages = [];
    }

    log($event) {
      this.receivedMessages.push(angular.toJson($event));
    }
  }

  function factory() {
    return new TeamMemberListController();
  }

  angular
    .module('team')
    .component('teamMemberList', {
      templateUrl: 'team/team-member-list.template.html',
      controller: factory,
      controllerAs: 'list'
    });
})();
