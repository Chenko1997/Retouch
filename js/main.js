

/*===================== MENU =======================*/

((d)=>{
    const $btnMenu = d.querySelector(".header__btn"),
    $menu = d.querySelector(".header__menu");

    $btnMenu.addEventListener("click",e=>{
        $btnMenu.firstElementChild.classList.toggle("header__none");
        $btnMenu.lastElementChild.classList.toggle("header__none");
        $menu.classList.toggle("header__menu--active");
    });

    d.addEventListener("click", e=>{
        if(!e.target.matches(".header__menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("header__none");
        $btnMenu.lastElementChild.classList.add("header__none");
        $menu.classList.remove("header__menu--active");
    })
})(document);