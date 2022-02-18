const Headers = {
    render() {
        return `
            <div class="header_logo">
                <a href="/#">
                <img src="../src/images/logo_black.png" alt="" height="100">
                </a>
            </div>
            <div class="header_menu">
                <ul>
                <li><a href="/#">home</a></li>
                <li><a href="/#product">product</a></li>
                <li><a href="/#blog">Blogs</a></li>
                <li><a href="/#contact">contact</a></li>
                </ul>
            </div>
            <div class="header_auth">
                <span><a href="/#signin"><ion-icon name="person-outline"></ion-icon></a></span>
                <span><a href="/#cart"><ion-icon name="cart-outline"></ion-icon></a></span> 
            </div>
        `;
    },
};
export default Headers;
