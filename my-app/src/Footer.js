import React from "react"

function Footer() {
    return(
        <div>
                    
            <footer className="page-footer font-small special-color-dark pt-4">
            
            <div className="container">
                
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-1" href="https://mail.google.com/mail/u/0/?tab=rm1#inbox">
                            <i className="fab fa-google-plus-g">
                                GM:martagorpinchuk@gmail.com 
                            </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in" href="https://www.facebook.com/profile.php?id=100007322912499">
                                <a>FB: Marta Gorpinchuk</a> 
                            </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-dribbble mx-1">
                            <i className="fab fa-dribbble" href="https://www.instagram.com/life_is__pain/">
                                <a>INST:life_is__pain</a> 
                            </i>
                        </a>
                    </li>
                </ul>
                
            </div>

            <div className="footer-copyright text-center py-3">© 2020 MagorProduct:
                <a href="https://www.facebook.com/profile.php?id=100007322912499"> Magor.com</a>
            </div>
    
            </footer>
           
        </div>
    )
}

export default Footer 