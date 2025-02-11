
function Produit({avatar, nom, categories, unites, ventes }) {
  return (
    <tr>
      <td><img src={`${avatar}`} alt={nom} /></td>
      <td>{nom}</td>
      <td>{categories.join(', ')}</td>
      <td>{unites}</td>
      <td>{ventes}</td>
    </tr>
  );
}

export default Produit;