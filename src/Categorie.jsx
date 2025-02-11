
function Categorie({ nom, couleur }) {
  return (
    <li style={{ color: couleur }}>
      {nom}
    </li>
  );
}

export default Categorie;