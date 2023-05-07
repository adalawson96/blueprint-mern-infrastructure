import '../../pages/App/App.css';

export default function Footer(){
    return(
        <footer>
            <body>
                <div class="footer">
                    <div class="col-1">
                        <h3>NEWSLETTER</h3><br/>
                        <h5>Suscribe to be the first to hear about new arrivals and exclusive products.</h5>
                        <form>
                            <input type="text" placeholder='email@example.com' required/>
                            <button type="submit">GO</button>
                        </form>
                    </div>
                    <div class="col-2">
                        <h5>Our mission as a small batch roaster is to find and serve up the sweetest, most sustainable coffees being grown. We practice complete transparency in our sourcing and happily bring these beautiful, complex coffees back to Oregon to be roasted and enjoyed by you.</h5><br />
                        <h5>©2023, Case Coffee Roasters</h5>
                    </div>
                    <div class="col-3">
                        <h3>GET IN TOUCH</h3><br/>
                        <h5>info@casecoffeeroasters.com</h5>
                        <div class="social-icons">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-instagram"></i>
                        </div>

                    </div>
                </div>
            </body>
        </footer>
    )
}

