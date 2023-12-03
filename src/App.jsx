
import './App.scss'
/*images*/
import cart from "./assets/images/icon-cart.svg";
import banner from "./assets/images/image-product-desktop.jpg";
function App() {
  return (
    <>
      <aside className="right">
        <img src={banner}/>
      </aside>
      <aside className="left">
        <p>
          perfume
        </p>
        <h1>
          gabrielle essence eau de parfum
        </h1>
        <p>
          a floral, sollar and volpituous 
          interpretation composed by oliver khan
          perfumer-creator for the house of channel
        </p>
        <div className="price">
          <h2>$149,99</h2>
          <span>$169,99</span>
        </div>
        <button type="button">
          <img src={cart}/> add to cart
        </button>
      </aside>
    </>
  )
}

export default App
