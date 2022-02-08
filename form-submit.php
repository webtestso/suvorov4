<?php

	require_once("db_connection.php");

	$errors = [];
	$response = [];

	if(isset($_POST['submit'])) {
		// Get the form data
		$name = $con->real_escape_string($_POST['name']);
		$email = $con->real_escape_string($_POST['email']);
		$subject = $con->real_escape_string($_POST['subject']);
		$message = $con->real_escape_string($_POST['message']);

		// Validate form fields
		if(empty($name)) {
			$errors[] = "Please enter your name";
		}

		if(empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
			$errors[] = "Please enter a valid email";
		}

		if(empty($subject)) {
			$errors[] = "Please enter company name";
		}

		if(empty($message)) {
			$errors[] = "Please enter your message";
		}

		// Check errorss
		if(empty($errors)) {

			// Validate reCAPTCHA box
			if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){

				// Google secret API
                $secret_key = '6LdWmkEeAAAAAIiQAw_MuRdXo5mguZEM--X7O8oP';

				// reCAPTCHA response verification
                $verify_response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key.'&response='.$_POST['g-recaptcha-response']);

                // Decode JSON data
                $gc_response = json_decode($verify_response);

				if($gc_response->success) {

					$sql="INSERT INTO simple_contact_form (name, email, subject, message) VALUES ('".$name."','".$email."', '".$subject."', '".$message."')";

					if(!$result = $con->query($sql)){
						$errors[] = 'There was an error running the query <br>' . $con->error;
					} else {
						require_once("send_mail.php");
						$response[] = "Thank you! We will contact you soon";
					}

				} else {
					$errors[] = "Google reCAPTCHA verification failed, please try again";
				}

			} else {
				$errors[] = "Plese check on the reCAPTCHA box";
			}

		}

	}
?>
