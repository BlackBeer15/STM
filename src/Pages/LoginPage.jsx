import logo from "../Images/logo.png";
import "../Styles/LoginPage.css"
function LoginPage () {
    return (
        <main>
            <div className={"login-block"}>
                <img src={logo} alt="Логотип"/>
                <form action="">
                    <input type="text" placeholder={"Логин"}/>
                    <input type="password" placeholder={"Пароль"}/>
                    <input type="submit" value={"Войти"}/>
                </form>
            </div>
        </main>
    );
}

export default LoginPage;