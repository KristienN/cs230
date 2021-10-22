<?php

class App extends Dbh{

    public function addPersonEntry($firsname, $lastname, $mobile, $email){

        $sql = "INSERT INTO person(person_id, firstname, lastname, mobile, email) VALUES(NULL, ?,?,?,?)";
        

        $stmt = $this->connect()->prepare($sql);
        $stmt -> execute($firstname, $lastname, $mobile, $email)
    }
    

    public function addAddressEntry($line1, $line2, $town, $citycounty, $eircode){
        $sql = "INSERT INTO address(address_id, line1, line2, town, city_county,eircode) VALUES(NULL, ?,?,?,?,?)";

        $stmt = $this->connect()->prepare($sql2);
        $stmt -> execute($line1, $line2,$town,$citycounty,$eircode)
    }
}
