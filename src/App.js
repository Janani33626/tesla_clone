import Header from "./Header";
import Section from "./Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        title="Model 3"
        tagline="Order online for touchless delivery"
        leftBtn=" Custom Order"
        rightBtn="Existing Inventory"
        bgImage="model-m3.jpg"
        arrow={true}
      />
      <Section
        title="Model Y"
        tagline="Order online for touchless delivery"
        leftBtn=" Custom Order"
        rightBtn="Existing Inventory"
        bgImage="ModelY.jpg"
      />
      <Section
        title="Model S"
        tagline="Order online for touchless delivery"
        leftBtn=" Custom Order"
        rightBtn="Existing Inventory"
        bgImage="model-s.jpg"
      />
      <Section
        title="Model X"
        tagline="Order online for touchless delivery"
        leftBtn=" Custom Order"
        rightBtn="Existing Inventory"
        bgImage="model-x.jpg"
      />
      <Section
        title="Solar Panels"
        tagline=" Lower cost solar panels in America"
        leftBtn=" Order Now"
        rightBtn=" Learn more"
        bgImage="SolarPanels.jpg"
      />
      <Section
        title=" Solar Roof"
        tagline="Produce clean energy from your Roof"
        leftBtn="Order Now"
        rightBtn="Learn more"
        bgImage="solar.jpg"
      />
      <Section
        title=" Accesories"
        leftBtn=" Order Now"
        bgImage="accesories.jpg"
      />
    </div>
  );
}

export default App;
