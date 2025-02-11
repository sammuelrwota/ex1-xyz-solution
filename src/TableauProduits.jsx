import React from 'react';
import './TableauProduits.scss';
import Produit from './Produit.jsx';
import produitsData from './data/produits.json';

function TableauProduits() {
  return (
    <table className="TableauProduits">
      <thead>
        <tr>
          <th>Produit</th>
          <th></th>
          <th>Catégories</th>
          <th>Unités</th>
          <th>Ventes</th>
        </tr>
      </thead>
      <tbody>
        {produitsData.map(produit => (
          <Produit key={produit.id} {...produit} />
        ))}
      </tbody>
    </table>
  );
}

export default TableauProduits;