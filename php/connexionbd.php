<?php

    try {
        $bdd = new PDO('mysql:host=localhost;dbname=users', 'root', '');
        $bdd -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Erreur ". $e->getMessage());
    }

