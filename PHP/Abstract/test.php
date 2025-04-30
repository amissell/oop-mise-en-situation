
<?php


require_once "Voiture.php";

$voiture = new Voiture(1, "1234", "fmdn", "5345", 300, 5, "Automatique");
$voiture->afficherDetails();