import './Appli.scss';
import Entete from './Entete.jsx'
import ListeCategories from './ListeCategories.jsx';
import TableauProduits from './TableauProduits.jsx';

function Appli() {
  return (
    <div className='Appli'>
      <Entete /> 
      <main>
        <section>
          <h2>Catalogue</h2>
          <ListeCategories />
        </section>
        <section>
          <TableauProduits />
        </section>
      </main>
    </div>
  );
}

export default Appli;
