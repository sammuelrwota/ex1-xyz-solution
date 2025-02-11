import React from 'react';
import './ListeCategories.scss';
import Categorie from './Categorie.jsx';
import categoriesData from './data/categories.json';

function ListeCategories() {
  return (
    <ul className="ListeCategories">
      {categoriesData.map(categorie => (
        <Categorie key={categorie.id} nom={categorie.nom} couleur={categorie.couleur} />
      ))}
    </ul>
  );
}

export default ListeCategories;