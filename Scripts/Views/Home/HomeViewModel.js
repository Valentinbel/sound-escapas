class HomeViewModel
{
    constructor($http, $location, $window)
    {
        this.Http = $http;
        this.Location = $location;
        this.Window = $window;
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

}

app.component('home',
    {
        templateUrl: './Scripts/Views/Home/HomeView.html',
        controller: HomeViewModel,
        controllerAs: "vm",
        //function($scope)
        //{
        //    $scope.ShowView('arcuelh')
        //}
    });