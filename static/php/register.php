<?php
    session_start();
    include('config.php');
    if (isset($_POST['register'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $password_hash = password_hash($password, PASSWORD_BCRYPT);
        $query = $connection->prepare("SELECT * FROM users WHERE email=:email");
        $query->bindParam("email", $email, PDO::PARAM_STR);
        $query->execute();
        if ($query->rowCount() > 0) {
            echo '<p class="error">Этот адрес уже зарегистрирован!</p>';
        }
        if ($query->rowCount() == 0) {
            $query = $connection->prepare("INSERT INTO users(username,password,email) VALUES (:username,:password_hash,:email)");
            $query->bindParam("username", $username, PDO::PARAM_STR);
            $query->bindParam("password_hash", $password_hash, PDO::PARAM_STR);
            $query->bindParam("email", $email, PDO::PARAM_STR);
            $result = $query->execute();
            if ($result) {
                echo '<p class="success">Регистрация прошла успешно!</p>';
            } else {
                echo '<p class="error">Неверные данные!</p>';
            }
        }
    }
?>

<html>
<body>
<form method="post" action="" name="signup-form">
<head>
    <title>Регистрация</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===============================================================================================-->
    <link rel="stylesheet" href="{{ url_for('static', filename='css/util.css') }}">
    <link rel="stylesheet" href="{{ url_for('static', filename='css/main.css') }}">
    <!-- <link rel="stylesheet" type="text/css" href="CSS/util.css">
    <link rel="stylesheet" type="text/css" href="CSS/main.css"> -->
    <!--===============================================================================================-->
</head>
<form method="post" action="" name="signup-form">
<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-t-50 p-b-90">
            <form action="register.php" method="post" autocomplete="off" class="login100-form validate-form flex-sb flex-w">
                    <span class="login100-form-title p-b-51">
                        Registration
                    </span>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Nickname is required">
                    <input class="input100" type="text" name="username" placeholder="Nickname" required/>
                    <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                    <input class="input100" type="password" name="password" placeholder="Password" required/>
                    <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Email is required">
                    <input class="input100" type="text" name="email" placeholder="Email" required/>
                    <span class="focus-input100"></span>
                </div>

                <div class="container-login100-form-btn m-t-17">
                    <button type="submit" name="register" value="register" class="login100-form-btn" href="">
                        Register
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
<div id="dropDownSelect1"></div>
</body>
</html>
