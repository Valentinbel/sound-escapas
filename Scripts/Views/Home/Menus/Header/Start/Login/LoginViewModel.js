class LoginViewModel
{
    constructor($LoginService, $window, $location)
    {
        this.LoginSvc = $LoginService;
        this.Window = $window;
        this.Location = $location;

        this.Window.AccountUser = true;
        this.Email = "rodin.kaufmann@gmail.com";
        this.Password = "12341234";
    }

    Login()
    {
        //this.Window.IsLoading = true;
        this.LoginSvc.LoginAsync(this.Email, this.Password)
            .then((response) =>
            {
                if (response.data !== "")
                {
                    this.Window.Token = response.data.token;
                    this.Window.LogonUser = response.data;
                    console.log(this.Window.LogonUser);
                    //console.log(response.data);
                }
                else
                {
                    alert("Usuario incorrecto");
                    console.log(response.data);
                }
                //this.Window.IsLoading = false;
                this.ShowView('rodin');
            },
                (response) =>
                {
                    alert(response.data.message);
                    console.log(response.data);
                    this.Window.Token = null;

                    //this.Window.IsLoading = false;
                });
    }

    ShowView(option)
    {
        this.Location.path("/" + option);
    }

    ForgotPassword()
    {
        alert("So bad..");
    }

    RedirectRegister()
    {
        this.Window.AccountUser = false;
    }

    ClearForm()
    {
        this.Email = "";
        this.Password = "";

        Email.classList.add("ng-pristine");
        Password.classList.add("ng-pristine");
    }
}

app.component('login',
    {
        templateUrl: './Scripts/Views/Home/Menus/Header/Start/Login/LoginView.html',
        controller: LoginViewModel,
        controllerAs: "vm"
    });