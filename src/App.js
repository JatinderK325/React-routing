import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <header><MainHeader /></header>
      <main>
        {/* Switch component is used to make one route active at a time becoz by default all routes that match the current path will be loaded. for eg: if path is '/products/:productId', both 'products' as well as 'product detail 'will be loaded. 
        React-router matches the path from the start hence it gives both the components on the screen.
        hence, to make only one route active, Switch is used. with this, react-router will go through from top to bottom. when it finds the first match, it will display the route and stop searching.*/}
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* exact tells react-router that 'Products' shd only lead to match if we have an exact match so it then switches from matching the beginning of the path to matching the full path.
          Means, if we are searching path="/products/:productId" then just becoz the beginning of both the pages is same, it should not render the 'Products' until the path="/products".   */}
          <Route path="/products" exact >
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our domain.com/welcome => Welcome Component
// our domain.com/products => Products Component
// our domain.com/product-detail/:<any value> => ProductDetail Component with data/info about selected particular product item



