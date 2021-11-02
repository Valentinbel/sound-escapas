class HeaderViewModel
{
    constructor($location, $window)
    {
        this.Location = $location;
        this.Window = $window;
        $(window).scroll(function ()
        {
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 192);
            $('nav').toggleClass('transparence', $(this).scrollTop() > 192);
            //$('nav').toggleClass('scrolled', $(this).scrollTop() > 192);
        });

			 
    }
    

    ShowView(option)
    {
        this.Location.path("/" + option);
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
    IsLogged()
    {
        if (this.Window && this.Window.LogonUser)
            return true;

        else
            return false;
    }
}



app.component('headerview',
    {
        templateUrl: './Scripts/Views/Home/Menus/Header/HeaderView.html',
        controller: HeaderViewModel,
        controllerAs: "vm"
    });