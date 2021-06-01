<?php
session_start();
$host = "localhost"; /* Host name */
$user = "id16842393_admin"; /* User */
$password = "RVT_1_Flights"; /* Password */
$dbname = "id16842393_main"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
<?php
$error_message = ""; $success_message = "";

// Register user
if(isset($_POST['btnsignup'])){
    $nickname = trim($_POST['nickname']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $country = trim($_POST['country']);

    $isValid = true;

    // Check fields are empty or not
    if($nickname == '' || $username == '' || $password == '' || $email == '' || $phone == '' || $country == ''){
        $isValid = false;
        $error_message = "Please fill all fields.";
    }

    // Check if Email-ID is valid or not
    if ($isValid && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $isValid = false;
        $error_message = "Invalid Email-ID.";
    }

    if($isValid){

        // Check if Email-ID already exists
        $stmt = $con->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        if($result->num_rows > 0){
            $isValid = false;
            $error_message = "Email-ID is already existed.";
        }

    }

    // Insert records
    if($isValid){
        $insertSQL = "INSERT INTO users(nickname,username,password,email,phone,country) values(?,?,?,?,?,?)";
        $stmt = $con->prepare($insertSQL);
        $stmt->bind_param("ssssss",$nickname,$username, $password, $email, $phone, $country);
        $stmt->execute();
        $stmt->close();

        $success_message = "Account created successfully.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>RVT</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="Admin/css/util.css">
    <link rel="stylesheet" type="text/css" href="Admin/css/main.css">
    <!--===============================================================================================-->
</head>
<body>

<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-t-50 p-b-90">
            <form action="register.php" method="post" autocomplete="off" class="login100-form validate-form flex-sb flex-w">
					<span class="login100-form-title p-b-51">
						Registration
					</span>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Name is required">
                    <input class="input100" type="text" name="username" placeholder="Name">
                    <span class="focus-input100"></span>
                </div>


                <div class="wrap-input100 validate-input m-b-16" data-validate = "Nickname is required">
                    <input class="input100" type="text" name="nickname" placeholder="Nickname">
                    <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                    <input class="input100" type="password" name="password" placeholder="Password">
                    <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Email is required">
                    <input class="input100" type="text" name="email" placeholder="Email">
                    <span class="focus-input100"></span>
                </div>


                <div class="wrap-input100 validate-input m-b-16" data-validate = "Phone is required">
                    <input class="input100" type="text" name="phone" placeholder="Phone">
                    <span class="focus-input100"></span>
                </div>


                <div class="wrap-input100 validate-input m-b-16" data-validate = "Country is required">
                    <input class="input100" type="text" name="country" placeholder="Country">
                    <span class="focus-input100"></span>
                </div>

                <div class="container-login100-form-btn m-t-17">
                    <button name="btnsignup" class="login100-form-btn">
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
