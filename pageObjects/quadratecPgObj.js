var quadratecCommands = {

  deleteFromCart: function() {
    this
    .click('@cartBtn')
    .expect.element('@productNumber').to.be.present.before(5000)
    this.expect.element('@quantityBtn').to.be.present.before(5000)
    this.expect.element('@continueShopBtn').to.be.present.before(5000)
    this.expect.element('@updateCartBtn').to.be.present.before(5000)
    this.expect.element('@checkout').to.be.present.before(5000)
    this.expect.element('@orderSummary').to.be.present.before(5000)
    this.expect.element('@payPalCredit').to.be.present.before(5000)
    this.click('@cartRemoveBtn')
    .expect.element('@productNumber').to.not.be.present.after(5000)
    return this
  },
  editName: function(firstName, lastName, password, originalFirstName, originalLastName) {
    this
    .click('@accountSetBtn')
    .expect.element('@accountSetPg').to.be.present.before(5000)
    this.click('@nameEditBtn')
    .expect.element('@firstNameFld').to.be.present.before(5000)
    this.clearValue('@firstNameFld')
    .clearValue('@firstNameFld')
    .setValue('@firstNameFld', firstName)
    .clearValue('@lastNameFld')
    .setValue('@lastNameFld', lastName)
    .setValue('@passwordFld', password)
    .click('@updateBtn')
    .expect.element('@accountSetPg').to.be.present.before(5000)
    this.click('@nameEditBtn')
    this.clearValue('@firstNameFld')
    .setValue('@firstNameFld', originalFirstName)
    .clearValue('@lastNameFld')
    .setValue('@lastNameFld', originalLastName)
    .setValue('@passwordFld', password)
    .click('@updateBtn')
    .expect.element('@accountSetPg').to.be.present.before(5000)
    return this
  },

  searchTabs: function(searchTab, header) {
    this
    .click(searchTab)
    .assert.elementPresent(header)
    return this
  },

  searchBar: function(searchInfo, url) {
    this
    .setValue('@searchBar', searchInfo)
    .click('@searchBtn')
    .assert.urlEquals(url)
    return this
  },

  wishListAndCart: function() {
    this
    .click('@product')
    .expect.element('@wishListBtn').to.be.present.before(5000)
    this.click('@wishListBtn')
    .click('@myAccountBtn')
    .click('@wishList')
    .expect.element('@wishListPg').to.be.present
    this.expect.element('@product').to.be.present.before(5000)
    this.click('@addToCartBtn')
    .expect.element('@productNumber').to.be.present.before(4000)
    this.click('@myAccountBtn')
    .click('@wishList')
    .expect.element('@wishListPg').to.be.present
    this.expect.element('@product').to.be.present.before(5000)
   this .click('@wishListRemoveBtn')
   this .expect.element('@product').to.not.be.present.after(5000)
    return this
  },

  logOut: function() {
    this
    .click('@myAccountBtn')
    .click('@logOutBtn')
    this.expect.element('@shopByCategory').to.be.present.before(6000)
    return this
  },

  logIn: function(emailField, passwordField){
    this
    .click('@myAccountBtn')
    .click('@logInBtn')
    .assert.urlEquals('https://www.quadratec.com/user')
    .assert.elementPresent('@logInEmail')
    .assert.elementPresent('@logInPassword')
    .assert.elementPresent('@registerBtn')
    .setValue('@logInEmail', emailField)
    .setValue('@logInPassword', passwordField)
    .click('@logInSubmit')
    .assert.urlEquals('https://www.quadratec.com/account')
    return this
  },
  
  checkHomePg: function() {
    this
    .assert.elementPresent('@searchBar')
    .assert.elementPresent('@searchBtn')
    .assert.elementPresent('@myAccountBtn')
    .assert.elementPresent('@shopCategory')
    .assert.elementPresent('@shopBrand')
    .assert.elementPresent('@shopJeep')
    .assert.elementPresent('@newHot')
    .assert.elementPresent('@specialOffers')
    .assert.elementPresent('@giftIdeas')
    .assert.elementPresent('@categoryBox')
    .assert.elementPresent('@brandBox')
    .assert.elementPresent('@chatIcon')
    .assert.elementPresent('@shopByCategory')
    .assert.elementPresent('@newAndHot')
    .assert.elementPresent('@brandSpotlight')
    .assert.elementPresent('@specialOff')
    .assert.elementPresent('@popularSearches')
    .assert.elementPresent('@jeepShowcases')
    .assert.elementPresent('@quadratecChannel')
    .assert.elementPresent('@quadratecDifference')
    .assert.elementPresent('@footer')
    return this
  },

  editPassword: function(newPassword, password,) {
    this
    .click('@passwordEditBtn')
    .expect.element('@newPasswordFld').to.be.present.before(5000)
    this.setValue('@newPasswordFld', newPassword)
    .setValue('@confirmPasswordFld', newPassword)
    .setValue('@currentPasswordFld', password)
    .click('@updateBtn')
    .expect.element('@passwordEditBtn').to.be.present.before(5000)
    this.click('@passwordEditBtn')
    this.expect.element('@newPasswordFld').to.be.present.before(5000)
    this.setValue('@newPasswordFld', password)
    .setValue('@confirmPasswordFld', password)
    .setValue('@currentPasswordFld', newPassword)
    .click('@updateBtn')
    .expect.element('@passwordEditBtn').to.be.present.before(5000)
    return this
  },

}


module.exports = {
    url: 'https:www.quadratec.com/',
    commands: [quadratecCommands],
    elements: {
      navBar: 'header[id="navbar"]',
      searchBar: 'input[name="keyword"]',
      searchBtn: 'button[name="searchit"]',
      cartBtn: '[class="cart"]',
      cartRemoveBtn: 'button[class="delete-line-item btn btn-danger form-submit"]',
      shopByCategory: '[class="col-sm-8 shop-category merch-section"]',
      newAndHot: '[class="col-sm-6 merch-new-hot merch-section"]',
      brandSpotlight: '[class="col-sm-4 shop-brand merch-section"]',
      specialOff: '[class="clearfix merch-bottom merch-offers"]',
      popularSearches: '[class="merch-popular-search merch-section fullwidth-background"]',
      jeepShowcases: '[class="merch-shop-vehicle merch-section"]',
      quadratecChannel: '[class="row row-autowrap quad-channel-icons"]',
      quadratecDifference: '[class="field field-name-field-quad-difference field-type-text-long field-label-hidden"]',
      footer: '[class="footer"]',

      myAccountBtn: 'button[class="btn dropdown-toggle"]',
      logInBtn: 'a[href="/user"]',
      registerBtn: 'a[href="/user/register"]',
      logOutBtn: 'a[href="/user/logout"]',
      wishList: {
        selector: '//a[contains(text(), "My Wishlist")]',
        locateStrategy: 'xpath'
      },

      wishListBtn: '[id="wishlist-add-btn"]',
      addToCartBtn: '[class="btn btn-success form-submit btn-block"]',
      wishListRemoveBtn: '[id="wishlist-pg-remove-btn"]',
      quantityBtn: '[id="edit-edit-quantity-0"]',
      continueShopBtn: '[class="btn btn-success"]',
      updateCartBtn: '[value="Update cart"]',
      checkout: '[class="btn-success btn form-submit"]',
      orderSummary: '[id="quadratec-order-summary-pane"]',
      payPalCredit: '[class="ad-wrap pp-af7083af-f80f-5513-aa3d-b73dbee6a305__wrapper"]',

      shopCategory: '#navbar-collapse-1 > ul > li:nth-child(2) > a',
      categoryHdr: 'div.col-sm-5 > div.dropdown-heading',
      shopBrand: '#navbar-collapse-1 > ul > li:nth-child(3) > a',
      brandsHdr: 'div.row.menu-group-title-row > div > div',
      shopJeep: '#navbar-collapse-1 > ul > li:nth-child(4) > a',
      jeepHdr: '[alt="Jeep Wrangler JL Accessory Showcase"]',
      newHot: '#top-navbar-col-4a > a',
      newHotHdr: '#block-quadratec-breadcrumbs-quadratec-breadcrumbs > div > span:nth-child(3)',
      
      specialOffers: '#top-navbar-col-5a > a',
      offersHdr: 'h2[id="wheels-bumpers"]',
      giftIdeas: 'div[class="slick-navi"]',
      categoryBox: 'div[class="col-sm-8 shop-category merch-section"]',
      brandBox: 'div[class="col-sm-4 shop-brand merch-section"]',
      chatIcon: '#chat-icon > a',

      logInScreen: 'div[class="user-login-section form-wrapper form-group"]',
      logInEmail: '[name="name"]',
      logInPassword: '[name="pass"]',
      logInSubmit: 'button[name="op"]',

      accountSetBtn: 'div.col-xs-6.account-settings.user-section > a > div.section-img',
      accountSetPg: 'h1#page-title.title',
      nameEditBtn: '[href="/account/settings/name"]',
      firstNameFld:'input#edit-new-first-name',
      lastNameFld: 'input#edit-new-last-name',
      newPasswordFld: '[id="edit-new-new-pass"]',
      confirmPasswordFld: '[id="edit-new-confirm-pass"]',
      currentPasswordFld: '[id="edit-current-password"]',
      passwordFld: '#edit-current-password',
      updateBtn: '[class="btn btn-info form-submit"]',
      passwordEditBtn: '[href="/account/settings/password"]',
      doneBtn: 'a[href="/account"][class="btn btn-default"]',

      wishListPg: {
        selector: '//*[@id="page-title"]',
        locateStrategy: 'xpath'
      },

      product: {
        selector: '//span[text()="Performance Tool Oxygen Sensor Thread Chaser"]',
        locateStrategy: 'xpath'
      },
      productNumber: 'div.row.details > div.col-sm-9 > div.catalog',
      freeCatalog: '[class="free-catalog"]',
      



    },
}