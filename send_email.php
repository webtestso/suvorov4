<?php
	// Admin email configuration
	$to_email = 'justanotherreality@hotmail.com';

	$mail_subject = "PHP Contact Form";
	$mail_content = "
		<h3>Contact Details</h3>
		<p><b>Name: </b>".$name."</p>
		<p><b>Email: </b>".$email."</p> 
		<p><b>Company name: </b>".$subject."</p>
		<p><b>Message: </b>".$message."</p>
	";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= "From: " . $name . "\r\n";

	// Send email
	@mail($to_email,$mail_subject,$mail_content,$headers);
?>
