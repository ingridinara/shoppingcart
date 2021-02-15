import React from "react";
import Products from "./components/Products";
import data from "./data.json";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
  }

  // FORMA
  // 1. Primero demo -> causar interes, momento de impresionar, efecto wow, todo entrevistador tiene parte emocional, tienes que vender la marca Ingrid. HACER CUANDO HAYAS ACABADO LA LOGICA
  // 2. Directa App.js, explicar de general a detalles, ARQUITECTURA, COMPONENTES / no empezar por detalles & contexto!! Poco tiempo. LO MAS IMPORTANTE
  // 3. No decir problema! decir he interpretado de esta manera (IDs) que no haya fricciones
  // 4. No decir trampa! dejas al entrevistador como que ha hecho mal el enunciado o pone trampas, puede ser que no lo hayas entendido
  // 5. Muy bien lo de granel, has mirado ejemplos reales, pero no entrar mucho en detalle, lo importante es el codigo
  // 6. No dedir lo de tutoriales! decir como mucho que te has basado en un repo existente, explicando por que
  
  // CODIGO!!
  // 7. Muy bien leer detenidamente enunciado -> sacar conclusiones y plantearlo (no ense;ar word, comentarlo, ense;arlo si lo piden)
  // 8. No poner cosas adicionales si no has acabado (filtro), parece que estas dispersa, no tienes focus
  // 9. Seria conveniente cambiar la manera de enfocar las soluciones. 
      - Leer bien enunciado
      - Detalles no! empezar a montar el esqueleto de la aplicacion. Tu aplicacion es como un edificio, empezamos por la base, despues estructura y por ultimo completamos con muros y ventanas

  //    Step 1. Que es la base?? datos de la aplicacion

  //    Al final, el objetivo es tener un carrito de la compra. Ese carrito renderizar'a el array cart: []. Centremonos en la ESTRUCUTRA DE CART. QUE PROPS NECESITA EL COMPONENTE PRODUCT DEL CARRITO
  // cart es un array de objetos:
      // product id
      // porduct name
      // product price
      // pruduct quantity
      // product price subtotal
      // product subtotal discount
      // product price subtotal with discounts
      // hasDiscount

  // Step 2. Montar en app.js la base

  class App extends React.Component {
   ......
  // Cargar productos del json

  // ****Funcion que se llama al pulsar boton (handleAddToCard) MAIN. Funciones jefas

  function handleAddToCard(productId)
    // addToCard(productId) // Acutalizar array card
    // checkCartPromotions(cart) // le pasamos el array card y actualiza los campos product subtotal discount....
  

  function handleRemoveToCard(productId)
    // revomeToCard(productId) // Acutalizar array card
    // checkCartPromotions(cart) // le pasamos el array card y actualiza los campos product subtotal discount....
  
  function removeCart
    // resetear array cart




  // *****Funciones secundarias hacen el trabajo sucio, son las que contienen la logica

  // Actualizar carrito
  function addToCard (productId)
    // bucle que mire si el producto ya esta anadido para actualizar cantidad o en cambio lo tenemos que anadir
  
  // Funcion que calcule ofertas
  function checkCartPromotions(cart)
    // Bucle que barrera el array del carrito y con la logica del enunciado anadira fertas a cada elemento del array o no



// step 3. Crear html b'asico con un boton de anadir

// step 4. rellenar funciones, una por una, por partes, ir probando que funciona

// step 5. Como habra mucha logica en app.js, crear componentes hijos, rutas, jsx mas completos con iconos o helpers, es decir, logica en archivos js separados....






  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };

  /* applyDiscountBuyOneGetOneFree = (product) => {
    //discountArray = ["dress1", "dress2"];
    const cartItems = this.state.cartItems.slice();
    cartItems.forEach((item) => {
      if (product._id === "dress1" )  {
        newprice = (item.price*0.5);
        console.log(newprice);
      } else { null //addToCart
       };
 */

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart </a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />

              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />{" "}
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default App;
