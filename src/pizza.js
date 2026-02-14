import './App.css';

function PizzaApp(){
    return (
        <div className="main">
            <h1>IP13 PIZZA LT.</h1>
            
            
            <Header />
            <Menu />
            <Footer />

        </div>
    )
}

function Pizza({ name, description, price, image }){
    return (
        <div className="pizza-card">
            <img src={image} alt={name} className="pizza-image"/>
            <div className="pizza-content">
                <h2 className="pizza-name">{name}</h2>
                <p className="pizza-description">{description}</p>
                <p className="pizza-price">${price}</p>
            </div>
        </div>
    );
}

function Header(){
    return (
        <div className="header">
            <h2>Fast React Company</h2>
        </div>
    )
}

function Menu(){
    return (
        <div className="menu-section">
            <h1 className="menu-title">Our Menu</h1>
            <div className="pizza-grid">
                <Pizza 
                    name="Margherita" 
                    description="Classic tomato sauce, mozzarella, and fresh basil"
                    price="12.99"
                    image="/pizzas/pizza.avif"
                />
                <Pizza 
                    name="Pepperoni Deluxe" 
                    description="Loaded with pepperoni and extra cheese"
                    price="14.99"
                    image="/pizzas/pizza two.avif"
                />
                <Pizza 
                    name="Veggie Supreme" 
                    description="Fresh vegetables with herbs and olive oil"
                    price="13.99"
                    image="/pizzas/pizza 3.avif"
                />
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

function Footer(){
    return(
        <div className='footer'>
            <p>We're active! Place your order now</p>
            <p className="footer-hours">Open Daily: 11:00 AM - 10:00 PM</p>
        </div>
    )
}
export default PizzaApp;