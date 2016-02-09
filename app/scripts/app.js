angular.module('itsRamesh', ['itsRamesh.core', 'itsRamesh.learning']);
angular.module('itsRamesh.core', [
    'ui.router'
]);
angular.module('itsRamesh.learning', [
    'itsRamesh.core'
]);


angular.module('itsRamesh.core')
    .config(coreUrlConfig);

coreUrlConfig.$inject = ['$stateProvider', '$urlRouterProvider']

function coreUrlConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            template: '<ui-view/>'
        })
        .state('app.main', {
            url: '',
            templateUrl: 'views/core/main-page.html',
            controller: 'CoreMainController',
            controllerAs: 'vm'
        })
}


angular.module('itsRamesh.learning')
    .config(learningUrlConfig);

learningUrlConfig.$inject = ['$stateProvider']

function learningUrlConfig($stateProvider){
    $stateProvider
        .state('app.learning', {
            url: 'learning',
            templateUrl: 'views/learning/learning-main-page.html',
            controller: 'LearningMainController',
            controllerAs: 'vm'
        });
}
angular.module('itsRamesh.core')
    .controller('CoreMainController', CoreMainController);

CoreMainController.$inject = []

function CoreMainController(){
   var vm = this;
}
angular.module('itsRamesh.learning')
    .controller('LearningMainController', LearningMainController);

LearningMainController.$inject = []

function LearningMainController(){
   var vm = this;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvcmUvYXBwLmNvcmUuanMiLCJsZWFybmluZy9hcHAubGVhcm5pbmcuanMiLCJjb3JlL2NvbmZpZy9hcHAuY29uZmlnLmpzIiwiY29yZS9jb25maWcvYXBwLmNvbmZpZy51cmwuanMiLCJsZWFybmluZy9jb25maWcvYXBwLmNvbmZpZy5qcyIsImxlYXJuaW5nL2NvbmZpZy9hcHAuY29uZmlnLnVybC5qcyIsImNvcmUvY29udHJvbGxlci9tYWluL0NvcmVNYWluQ29udHJvbGxlci5qcyIsImxlYXJuaW5nL2NvbnRyb2xsZXIvbWFpbi9NYWluQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2l0c1JhbWVzaCcsIFsnaXRzUmFtZXNoLmNvcmUnLCAnaXRzUmFtZXNoLmxlYXJuaW5nJ10pOyIsImFuZ3VsYXIubW9kdWxlKCdpdHNSYW1lc2guY29yZScsIFtcclxuICAgICd1aS5yb3V0ZXInXHJcbl0pOyIsImFuZ3VsYXIubW9kdWxlKCdpdHNSYW1lc2gubGVhcm5pbmcnLCBbXHJcbiAgICAnaXRzUmFtZXNoLmNvcmUnXHJcbl0pOyIsIlxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnaXRzUmFtZXNoLmNvcmUnKVxyXG4gICAgLmNvbmZpZyhjb3JlVXJsQ29uZmlnKTtcclxuXHJcbmNvcmVVcmxDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ11cclxuXHJcbmZ1bmN0aW9uIGNvcmVVcmxDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwJywge1xyXG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPidcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLm1haW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29yZS9tYWluLXBhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb3JlTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9KVxyXG59IiwiXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdpdHNSYW1lc2gubGVhcm5pbmcnKVxyXG4gICAgLmNvbmZpZyhsZWFybmluZ1VybENvbmZpZyk7XHJcblxyXG5sZWFybmluZ1VybENvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddXHJcblxyXG5mdW5jdGlvbiBsZWFybmluZ1VybENvbmZpZygkc3RhdGVQcm92aWRlcil7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnYXBwLmxlYXJuaW5nJywge1xyXG4gICAgICAgICAgICB1cmw6ICdsZWFybmluZycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbGVhcm5pbmcvbGVhcm5pbmctbWFpbi1wYWdlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhcm5pbmdNYWluQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICAgIH0pO1xyXG59IiwiYW5ndWxhci5tb2R1bGUoJ2l0c1JhbWVzaC5jb3JlJylcclxuICAgIC5jb250cm9sbGVyKCdDb3JlTWFpbkNvbnRyb2xsZXInLCBDb3JlTWFpbkNvbnRyb2xsZXIpO1xyXG5cclxuQ29yZU1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXVxyXG5cclxuZnVuY3Rpb24gQ29yZU1haW5Db250cm9sbGVyKCl7XHJcbiAgIHZhciB2bSA9IHRoaXM7XHJcbn0iLCJhbmd1bGFyLm1vZHVsZSgnaXRzUmFtZXNoLmxlYXJuaW5nJylcclxuICAgIC5jb250cm9sbGVyKCdMZWFybmluZ01haW5Db250cm9sbGVyJywgTGVhcm5pbmdNYWluQ29udHJvbGxlcik7XHJcblxyXG5MZWFybmluZ01haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXVxyXG5cclxuZnVuY3Rpb24gTGVhcm5pbmdNYWluQ29udHJvbGxlcigpe1xyXG4gICB2YXIgdm0gPSB0aGlzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
