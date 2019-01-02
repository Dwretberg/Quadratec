var bucket = {}

module.exports = {
    beforeEach: browser => {
        bucket = browser.page.quadratecPgObj()
        bucket.navigate()
            .waitForElementPresent('@navBar', 5000)

    },
    after: browser => {
        browser.end()
    },

    'find elements on home page': browser =>{
        bucket.checkHomePg()
    },
    
    'loggin in search for item and add product to wishlist and cart': browser => {
        bucket.logIn('ripsterbolton@gmail.com', 'Streetsharks1!')
        bucket.searchBar('chaser', 'https://www.quadratec.com/search/chaser')
        bucket.wishListAndCart()
        bucket. deleteFromCart()
        bucket.logOut()
    },
    'checking search tabs': browser => {
        bucket.searchTabs('@shopCategory', '@categoryHdr')
        bucket.searchTabs('@shopBrand', '@brandsHdr')
        bucket.searchTabs('@shopJeep', '@jeepHdr')
        bucket.searchTabs('@newHot', '@newHotHdr')
        bucket.searchTabs('@specialOffers', '@offersHdr')
        
    },
    'edit name': browser =>{
        bucket.logIn('ripsterbolton@gmail.com', 'Streetsharks1!')
        bucket.editName('Ripster1', 'Bolton1', 'Streetsharks1!', 'Ripster', 'Bolton')
        bucket.editPassword('Ab123456789', 'Streetsharks1!')
        bucket.logOut()
    },


}