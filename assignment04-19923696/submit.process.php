<?php

include('./includes/class-autoload.inc.php');

$entry = new App;

if(isset($_POST['submit'])){

    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $line1 = $_POST['line1'];
    $line2 = $_POST['line2'];
    $town = $_POST['town'];
    $cityc = $_POST['countycity'];
    $ecode = $_POST['eircode'];

    $entry-> addPersonEntry($fname,$lname,$mobile,$email);
    $entry-> addAddressEntry($line1,$line2,$town,$cityc,$ecode);

}