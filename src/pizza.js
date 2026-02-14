import './App.css';   //Imports the CSS file so the components can use the styles defined inside App.css.


//This is the main component of the app.
function PizzaApp(){

    //Return the following
    return (
        //Main container div with className "main"
        <div className="main">
            {/* Company title */}
            <h1>IP13 PIZZA LT.</h1>
            
            {/* Displays the header section */}
            <Header /> 
            {/* Displays the pizza menu */}
            <Menu />
            {/* Displays the footer section */}
            <Footer />

        </div>
    )
}

//This component receives props using destructuring.
function Pizza({ name, description, price, image }){   
    //The Pizza component is reusable. Instead of writing the pizza card 4 times, we reuse it and just change the props.
    return (
        <div className="pizza-card">
            {/* Pizza image */}
            <img src={image} alt={name} className="pizza-image"/>
            
            {/* Container for pizza details */}
            <div className="pizza-content">
                {/* Pizza name */}
                <h2 className="pizza-name">{name}</h2>
                {/* Pizza description */}
                <p className="pizza-description">{description}</p>
                {/* Pizza price */}
                <p className="pizza-price">${price}</p>
            </div>
        </div>
    );
}

//Simple component that shows the title.
function Header(){
    return (
        //Header container
        <div className="header">
            {/* Subtitle text */}
            <h2>Fast React Company</h2>
        </div>
    )
}
  
//This is where the pizzas are listed
function Menu(){
    return (
        //Menu section container
        <div className="menu-section">
            {/* Menu title */}
            <h1 className="menu-title">Our Menu</h1>
            {/* Grid container for pizza cards */}
            <div className="pizza-grid">

                {/* Passing different props to the Pizza component. */}
                {/* First pizza - Margherita */}
                <Pizza 
                    name="Margherita" 
                    description="Classic tomato sauce, mozzarella, and fresh basil"
                    price="12.99"
                    image="/pizzas/pizza.avif"
                />
                {/* Second pizza - Pepperoni Deluxe */}
                <Pizza 
                    name="Pepperoni Deluxe" 
                    description="Loaded with pepperoni and extra cheese"
                    price="14.99"
                    image="/pizzas/pizza two.avif"
                />
                {/* Third pizza - Veggie Supreme */}
                <Pizza 
                    name="Veggie Supreme" 
                    description="Fresh vegetables with herbs and olive oil"
                    price="13.99"
                    image="/pizzas/pizza 3.avif"
                />
                {/* Fourth pizza - BBQ Chicken */}
                <Pizza 
                    name="BBQ Chicken" 
                    description="Grilled chicken with BBQ sauce and onions"
                    price="15.99"
                    image="/pizzas/pizza 4.avif"
                />
            </div>
        </div>
    )
}

//Footer component displays store information
function Footer(){
    return(
        //Footer container
        <div className='footer'>
            {/* Main footer message */}
            <p>We're active! Place your order now</p>
            
            {/* Store hours */}
            <p className="footer-hours">Open Daily: 11:00 AM - 10:00 PM</p>
        </div>
    )
}
//This allows PizzaApp to be imported and used in another file
export default PizzaApp;