

<?php



abstract class Vehicule{
    
    protected $id ;
    protected $immatruculation;
    protected $marque;
    protected $modele;
    protected $prixJour;
    protected $disponible;

    public function __construct($id, $immatruculation, $marque, $modele, $prixJour)
    {
        $this->id = $id;
        $this->immatruculation = $immatruculation;
        $this->marque = $marque;
        $this->modele = $modele;
        $this->prixJour = $prixJour;
        $this->disponible = $disponible;

    }
    
    public function calculerPrix(int $jours)
    {
        return $this->prixJour * $jours;
    }

    public function estDisponible()
    {
        return $this->disponible;
    }

    public function setDisponibilite($etat)
    {
        $this->disponible = $etat;
    }

    abstract public function getType();

}