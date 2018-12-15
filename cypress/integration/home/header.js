describe("test header", () => {


    it('count menu elements', function () {
        cy
            .fullhd()
            .visit("/")
//            .get('.b-header-top-block__menu-items-list>.b-header-top-block__menu-item')
//            .eq(5)
            .get('.p-index-b-advantages__list-item-text').first().scrollIntoView()
            .get('.b-preview-category__product-name').first().click()
            .get ('.b-simple-button__text').first().click()
            .get ('.b-header-basket__full-basket-link').first().click()
            .get('.b-simple-button__text').first().click()
    });



        /*   it('hover menu', function () {
                cy
                    .fullhd()
                    .visit("/")
                    .get('.b-header-top-block__menu-items-list > div.b-header-top-block__menu-item')
                    .trigger("mouseover")
            });*/
});