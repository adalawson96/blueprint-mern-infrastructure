import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(){
    return(
        <>
        <body>
            <div class="main-pic">
                <img src="https://i.imgur.com/un1goop.png" alt="coffee" />
                <br/>
                <h3> Ethically Sourced, Responsibly Grown, Roasted <br/> with Care</h3>
                <h1>testing</h1>
                <br/>
            </div>

            <div class="card">
            <div class="new-merch">
                <Link to="/shop/allCoffee">{ <img src="https://i.imgur.com/ePVw3h0.png" alt="new merch"/>}</Link>
                <h3><Link to="/shop/allCoffee">NEW MERCH</Link></h3>
            </div>
            <div class="subscriptions">
            <Link to="/shop/allCoffee">{ <img src="https://i.imgur.com/OLagKHV.png" alt="supscriptions"/>}</Link>
                <h3><Link to="/shop/allCoffee">SUBSCRIPTIONS</Link></h3>
            </div>
            <div class="wholesale">
            <Link to="/shop/allCoffee">{<img src="https://i.imgur.com/vTO91mL.png" alt="wholesale"/>}</Link>
                <h3><Link to="/shop/allCoffee">WHOLESALE</Link></h3>
            </div>
            </div>
            <div class="new-arrivals">
                <h3> NEW ARRIVALS </h3>
            </div>
            <div class="new-arrivals-img">
                <img src="https://i.imgur.com/4r5MY9t.png" alt="juan francisco"/>
                <img src="https://i.imgur.com/jsKyRhU.png" alt="worka sakaro"/>
                <img src="https://i.imgur.com/nBvPjev.png" alt="karatu"/>
                <img src="https://i.imgur.com/RTbaJsB.png" alt="carlos madrid"/>
            </div>
        </body>
        </>
    )
}