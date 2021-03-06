import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../utils";

const Header = {
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
             ${localStorage.getItem("user") ? `<div class="header_auth flex items-center justify-between w-28">
                <a href="/#cart"><ion-icon name="cart-outline"></ion-icon></a>
                <a class="text-black cursor-pointer mb-2" id="logout" class="btn-logOut">Logout</a> 
            </div>
            ` : `
            <div class="header_auth">
                <span><a href="/#signin"><ion-icon name="person-outline"></ion-icon></a></span>
                <span><a href="/#cart"><ion-icon name="cart-outline"></ion-icon></a></span> 
            </div>
            `}
            
        `;
    },

    afterRender() {
        // const user = JSON.parse(localStorage.getItem("user"));
        // document.querySelector("#account-name").innerHTML = `Xin chào ${user.username}`;
        // logout
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            toastr.success("Bạn đã đăng xuất thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;
