class RegisterViewModel
{
    constructor($RegisterService, $LoginService, $window, $location)
    {
        this.RegisterSvc = $RegisterService;
        this.LoginSvc = $LoginService;
        this.Window = $window;
        this.Location = $location;
    }

    Register()
    {
        //this.Window.IsLoading = true;

        this.RegisterSvc.RegisterAsync(this.Email, this.Password, this.Name, this.Surname, this.BirthDate)
            .then((response) =>
            {
                console.log(response);
                this.Window.LogonUser = response.data;
                this.Window.Token = response.data.user.token;
                
                //this.Window.IsLoading = false;
                this.ShowView('rodin');
            },
                (error) =>
                {
                    console.log(error.data);
                    this.Window.Token = null;
                    //this.Window.IsLoading = false;
                });
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    RedirectLogin()
    {
        this.Window.AccountUser = true;
    }

    ClearForm()
    {
        this.Email = "";
        this.Password = "";
        this.BirthDate = new Date();

        Email.classList.add("ng-pristine");
        Password.classList.add("ng-pristine");
    }
}

app.component('register',
    {
        templateUrl: './Scripts/Views/Home/Menus/Header/Start/Register/RegisterView.html',
        controller: RegisterViewModel,
        controllerAs: "vm"
    });

