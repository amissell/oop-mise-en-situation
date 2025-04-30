<?php
require_once 'Vehicule.php';

class voiture extends Vehicule{


    public $nbPortes;
    public $transmission;

    public function __construct($id, $immatruculation, $marque, $modele, $prixJour)
    {
        $this->nbPortes = $nbPortes;
        $this->transmission = $transmission;
    }

    public function gettype()
    {
        return $this->$voiture;
    }

    public function afficherDetails() {
        echo "Voiture: $this->marque $this->modele $this->immatriculation,";
        echo "$this->prixJour, $this->nbPortes portes, Transmission: $this->transmission";
    }
}

