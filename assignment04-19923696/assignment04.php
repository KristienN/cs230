<?php

include('./includes/class-autoloader.inc.php');

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Database</title>

    <link rel="stylesheet" href="assignment04.css">
    <link rel="stylesheet" href="bs/css/bootstrap.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <h1>Users Database</h1>
    </header>

    <!-- Insert into Database -->
    <!-- Personal Details -->
    <form class="form-horizontal" method ="POST" action="submit.process.php">
        <fieldset>
        
        <!-- Form Name -->
        <legend>Personal Details</legend>
        
        <!-- Select Basic -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="selectbasic">Title</label>
          <div class="col-md-2">
            <select id="selectbasic" name="selectbasic" class="form-control">
              <option value="1">Mr.</option>
              <option value="2">Ms.</option>
              <option value="3">Mrs.</option>
              <option value="4">Miss.</option>
              <option value="5">Mx.</option>
              <option value="6">Dr.</option>
              <option value="7">Other</option>
            </select>
          </div>
        </div>
        
        <!-- First Name-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">First Names(s)</label>  
          <div class="col-md-4">
          <input id="textinput" name="firstname" type="text" placeholder="First Name(s)" class="form-control input-md" required="">
          <span class="help-block">Please enter first names</span>  
          </div>
        </div>
        
        <!-- Last Name-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Last Name</label>  
          <div class="col-md-4">
          <input id="text input" name="lastname" type="text" placeholder="Last Name" class="form-control input-md" required="">
          <span class="help-block">Please enter surname</span>  
          </div>
        </div>
        
        <!-- Mobile Number-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Mobile No.</label>  
          <div class="col-md-4">
          <input id="textinput" name="mobile" type="text" placeholder="Mobile No." class="form-control input-md" required="">
          <span class="help-block">eg. 0871234567</span>  
          </div>
        </div>
        
        <!-- Email -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Email</label>  
          <div class="col-md-4">
          <input id="textinput" name="email" type="text" placeholder="Email" class="form-control input-md">
          <span class="help-block">eg. joebloggs@here.com</span>  
          </div>
        </div>
        
        </fieldset>
      
        
    
    <!-- Shipping Address -->
        <fieldset>
        
        <!-- Form Name -->
        <legend>Shipping Address</legend>
        
        <!-- Line 1-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Address Line 1</label>  
          <div class="col-md-4">
          <input id="textinput" name="line1" type="text" placeholder="Address Line 1" class="form-control input-md" required="">
            
          </div>
        </div>
        
        <!-- Line 2-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Address Line 2</label>  
          <div class="col-md-4">
          <input id="textinput" name="line2" type="text" placeholder="Address Line 2" class="form-control input-md">
            
          </div>
        </div>
        
        <!-- Town-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Town</label>  
          <div class="col-md-4">
          <input id="textinput" name="town" type="text" placeholder="County/City" class="form-control input-md" required="">
            
          </div>
        </div>
        
        <!-- City County-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">County/City</label>  
          <div class="col-md-4">
          <input id="textinput" name="countycity" type="text" placeholder="Town" class="form-control input-md" required="">
            
          </div>
        </div>
        
        <!-- Eircode-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Eircode</label>  
          <div class="col-md-4">
          <input id="textinput" name="eircode" type="text" placeholder="Eircode" class="form-control input-md" required="">
            
          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="singlebutton"></label>
          <div class="col-md-4">
            <button type ="submit" id="singlebutton" name="singlebutton" class="btn btn-success">Add</button>
          </div>
        </div>
        
        </fieldset>
        </form>

        


</body>
</html>