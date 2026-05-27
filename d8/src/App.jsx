import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}


