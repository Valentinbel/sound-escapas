class Index2ViewModel
{
    constructor($window)
    {
        this.Window = $window;
        $('.carousel').carousel({
            interval: 5000
        }) 
    }
}
app.component('index2',
    {
        templateUrl: './Scripts/Views/Index2View.html',
        controller: Index2ViewModel,
        controllerAs: "vm"
    });
