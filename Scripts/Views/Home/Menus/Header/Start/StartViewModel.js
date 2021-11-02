class StartViewModel
{
    constructor($window)
    {
        this.Window = $window;
    }

    get HaveAccount()
    {
        if (this.Window.AccountUser)
            return true;
        else
        {
            return false;
        }
    }
    IsLoading()
    {
        return this.Window.IsLoading;
    }

    IsLogon()
    {
        if (!this.Window || this.Window.LogonUser === null || this.Window.LogonUser === undefined)
            return false;
        else
            return true;
    }
}

app.component('start',
    {
        templateUrl: './Scripts/Views/Home/Menus/Header/Start/StartView.html',
        controller: StartViewModel,
        controllerAs: "vm"
    });
