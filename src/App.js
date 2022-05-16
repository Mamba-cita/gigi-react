import "./App.css";
import Contacts from "./components/Contacts";
import Product from "./components/Product";

function App() {
  return (
    <>
      
      <Product
        name="Shoes"
        description="Your AI companion"
        price="$99.99"
        rating={5}
        image="../images/shoes.jpg"
      />
 <div className="contacts">
      <Contacts
        img="./images/wewe.jpg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contacts
        img="./images/3.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contacts
        img="./images/uu.jpg"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contacts
        img="./images/ll.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
      </div>
    </>
  );
}

export default App;

