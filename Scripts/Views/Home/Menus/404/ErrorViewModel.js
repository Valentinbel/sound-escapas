class ErrorViewModel
{
    constructor()
    {
    }
}
app.component('error',
    {
        templateUrl: './Scripts/Views/Home/Menus/404/ErrorView.html',
        controller: ErrorViewModel,
        controllerAs: "vm"
    });
