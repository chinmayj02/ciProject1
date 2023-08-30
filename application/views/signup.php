<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sign up form created as a task for intern selection process at Bodhami">
    <meta name="author" content="Chinmay Joshi">
    <title>Sign Up</title>
    <!-- external css -->
    <link rel="stylesheet" href="<?php echo site_url(); ?>assets/css/styles.css">
    <!-- external js -->
    <script src="<?php echo site_url(); ?>assets/js/script.js"></script>
</head>

<body onload="enableSubmit()">
    <form action="<?php echo site_url('signup/submit'); ?>" method="post">
        <div class="container">
            <h1>Sign Up</h1>
            <div class="form-fields">
                <div class="form-control">
                    <label for="fname">First Name<span>*</span></label>
                    <input id="fname" type="text" placeholder="First Name" name="fname" required
                        oninput="nameValidation(this.value,'fname')">
                    <span></span>
                </div>
                <div class="form-control">
                    <label for="lname">Last Name<span>*</span></label>
                    <input id="lname" type="text" placeholder="Last Name" name="lname" required
                        oninput="nameValidation(this.value,'lname')">
                    <span></span>
                </div>
                <div class="form-control">
                    <label for="email">Email Address<span>*</span></label>
                    <input id="email" type="email" placeholder="Email" name="email" required
                        oninput="emailValidation(this.value)">
                    <span></span>
                </div>
                <div class="form-control">
                    <label for="pnumber">Phone Number<span>*</span></label>
                    <input id="pnumber" type="tel" placeholder="Phone" name="pnumber" required
                        oninput="phoneValidation(this.value)">
                    <span></span>
                </div>
                <div class="form-control">
                    <label for="password">Password<span>*</span></label>
                    <input id="password" type="password" placeholder="Password" name="password" required
                        oninput="passwordValidation(this.value)">
                    <span></span>
                </div>
                <div class="form-control">
                    <label for="confirm-password">Confirm Password<span>*</span></label>
                    <input id="confirm-password" type="password" placeholder="Re-enter Password" name="confirm-password"
                        required oninput="repeatPasswordValidation(this.value)">
                    <span></span>
                </div>
                <div class="form-control">
                    <input id="submit" type="submit" name="submit" disabled>
                </div>
            </div>
        </div>
    </form>
</body>
<script>
    function enableSubmit() {
        // get error from the url
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');
        if (error === 'user_exists') {
            // user already exists
            alert("User already exists. Please change your email.");
            // Retrieve the previously entered form data from local storage
            const fname = localStorage.getItem('fname');
            const lname = localStorage.getItem('lname');
            const pnumber = localStorage.getItem('pnumber');
            // clear the error parameter from url to make it look better
            const currentUrl = window.location.href;
            const updatedUrl = currentUrl.replace('?error=user_exists', '');
            window.history.replaceState({}, document.title, updatedUrl);
            // pre fill the form with previous data
            document.getElementById('fname').value = fname;
            validFields["fname"] = true;
            document.getElementById('lname').value = lname;
            validFields["lname"] = true;
            document.getElementById('pnumber').value = pnumber;
            validFields["pnumber"] = true;
        }
        // disable submit button until all fields are valid
        var button = document.getElementById("submit");
        button.style.cursor = "not-allowed";
        button.style.opacity = "0.5"
        button.title = "Please enter valid data in all mandatory fields";
        // check if fields are valid
        if (Object.values(validFields).every(value => value === true)) {
            // all fields are valid so enable submit button
            button.disabled = false;
            button.style.cursor = "";
            button.style.opacity = "";
            button.title = "Submit";
            clearInterval(intervalId);
        }
        else {
            button.style.cursor = "not-allowed";
            button.style.opacity = "0.5"
            button.title = "Please enter valid data in all mandatory fields";
            var intervalId = setInterval(enableSubmit, 1000);
        }
    }
</script>

</html>