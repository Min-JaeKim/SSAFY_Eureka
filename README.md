# Eureka Project π

> κΈ°λ³Έμ μΈ μΌνκΈ°λ₯μ μ κ³΅νλ μ΄μ»€λ¨Έμ€ μΉμ¬μ΄νΈ
>
> μ΄λμλ κ³ κ°μ΄ μνλ μνμ μ°Ύμ μ μλλ‘ νλ Eurekaμ ν΅μ¬μΈ λ  λ€λλ μΉ΄νκ³ λ¦¬
>
> μν κ²μ, μ£Όλ¬Έ, λ¦¬λ·°, νλ§€μ μνλ±λ‘, κ΄λ¦¬μ νμ΄μ§, μΉ΄νΈ, νμ κ΄λ¦¬ λ±μ κΈ°λ₯μ μ§μνλ μ΄μ»€λ¨Έμ€ μΉμ¬μ΄νΈ

<br>

# **κ²°κ³Όλ¬Ό Preview**


- λ‘κ·ΈμΈ
- νμκ°μ
- μ₯λ°κ΅¬λ
- λ±λ± μ¬λ¬ νλ©΄λ€ gif μμ±ν΄μ λ³΄μ¬μ£ΌκΈ°

<br>

# **κ°λ° νκ²½**


### **Front-end**

- **Framework** : Vue.js

<br>

### **Back-end**

- **Framework** : Spring boot
- **Database** : MySQL

<br>

### **Design**

- Framework μ¬μ©
  - Element UI Plus
  - Bootstrap5
  - Fontawesome
  - λλν°νΈ

<br>

# **Used Library**

- μΆν μΆκ° μμ 

<br>

# ν΄λ κ΅¬μ‘°

### Front

```
β  babel.config.js
β  package-lock.json
β  package.json
β  README.md
β  tree.txt
β  vue.config.js
β  
ββpublic
β      favicon.ico
β      index.html
β      
ββsrc
    β  App.vue
    β  main.js
    β  
    ββassets
    β  β  eureka.png
    β  β  eureka2.png
    β  β  eureka3.png
    β  β  eureka4.png
    β  β  food.png
    β  β  item1.png
    β  β  item2.png
    β  β  item3.png
    β  β  logo.png
    β  β  logo.svg
    β  β  logo2.png
    β  β  main.png
    β  β  main2.png
    β  β  main3.png
    β  β  main4.png
    β  β  random.png
    β  β  star.png
    β  β  
    β  ββscss
    β          _common.scss
    β          
    ββcomponents
    β  ββAdmin
    β  β      adminItemForm.vue
    β  β      adminItemTable.vue
    β  β      adminSideBar.vue
    β  β      adminUserTable.vue
    β  β      backTop.vue
    β  β      
    β  ββBar
    β  β      CategoryBar.vue
    β  β      NavBar.vue
    β  β      
    β  ββCarousel
    β  β      Slide.vue
    β  β      
    β  ββCart
    β  β      CartList.vue
    β  β      TotalOrder.vue
    β  β      
    β  ββCSQna
    β  β      CSQnaFAQ.vue
    β  β      CSQnaForm.vue
    β  β      CSQnaHistory.vue
    β  β      CSQnaHistoryItem.vue
    β  β      
    β  ββItem
    β  β      ItemDetailImage.vue
    β  β      ItemListCard.vue
    β  β      ItemListFilter.vue
    β  β      ItemQna.vue
    β  β      ItemReview.vue
    β  β      
    β  ββOrder
    β  β      CustomerInfo.vue
    β  β      PayInfo.vue
    β  β      ProductInfo.vue
    β  β      
    β  ββproductReview
    β  β      reviewModify.vue
    β  β      reviewRegister.vue
    β  β      
    β  ββUser
    β      ββCommon
    β      β      logo.vue
    β      β      
    β      ββJoin
    β      β      addressForm.vue
    β      β      googleAuth.vue
    β      β      
    β      ββMyPage
    β              myPageSideBar.vue
    β              userModifyInfo.vue
    β              userModifyPassword.vue
    β              
    ββplugins
    β      vuetify.js
    β      
    ββrouter
    β      index.js
    β      
    ββstore
    β  β  index.js
    β  β  
    β  ββmodules
    β      ββAdmin
    β      β      adminStore.js
    β      β      
    β      ββCart
    β      β      cart.js
    β      β      
    β      ββCSQna
    β      β      CSQnaStore.js
    β      β      
    β      ββItem
    β      β      itemDetail.js
    β      β      itemStore.js
    β      β      
    β      ββMyPage
    β      β      myPageStore.js
    β      β      
    β      ββOrder
    β      β      order.js
    β      β      
    β      ββproductReview
    β      β      productReview.js
    β      β      
    β      ββUser
    β              userStore.js
    β              
    ββutils
    β      http-common.js
    β      JWT-common.js
    β      
    ββviews
        β  Home.vue
        β  
        ββAdmin
        β      AdminItemList.vue
        β      AdminItemModify.vue
        β      AdminItemRegister.vue
        β      AdminProfile.vue
        β      AdminUserList.vue
        β      AdminView.vue
        β      
        ββCart
        β      CartView.vue
        β      
        ββCS
        β      CSQna.vue
        β      
        ββDirect
        β      DirectView.vue
        β      
        ββItem
        β      CategoryItemList.vue
        β      ItemDetail.vue
        β      ItemList.vue
        β      ItemListByCategories.vue
        β      
        ββOrder
        β      OrderList.vue
        β      OrderView.vue
        β      ReceiverInfo.vue
        β      ShippingAddressList.vue
        β      
        ββproductReview
        β      ProductReview.vue
        β      
        ββUser
                Join.vue
                Login.vue
                MyPage.vue
                SearchPassword.vue
                Temp.vue
```
<br>

### Back

<br>

```
β  mvnw
β  mvnw.cmd
β  pom.xml
β  README.md
β  tree_back.txt
β  
ββ.mvn
β  ββwrapper
β          maven-wrapper.jar
β          maven-wrapper.properties
β          MavenWrapperDownloader.java
β          
ββbin
β  β  .gitignore
β  β  mvnw
β  β  mvnw.cmd
β  β  pom.xml
β  β  
β  ββ.mvn
β  β  ββwrapper
β  β          maven-wrapper.jar
β  β          maven-wrapper.properties
β  β          MavenWrapperDownloader.class
β  β          
β  ββsrc
β      ββmain
β      β  ββjava
β      β  β  ββcom
β      β  β      ββssafy
β      β  β          ββeureka
β      β  β                  EurekaApplication.class
β      β  β                  ServletInitializer.class
β      β  β                  
β      β  ββresources
β      β          application.properties
β      β          
β      ββtest
β          ββjava
β              ββcom
β                  ββssafy
β                      ββeureka
β                              EurekaApplicationTests.class
β                              
ββsrc
    ββmain
    β  ββjava
    β  β  ββcom
    β  β      ββssafy
    β  β          ββeureka
    β  β              β  EurekaApplication.java
    β  β              β  ServletInitializer.java
    β  β              β  SwaggerConfiguration.java
    β  β              β  
    β  β              ββcontroller
    β  β              β      AdminController.java
    β  β              β      HomeController.java
    β  β              β      MemberController.java
    β  β              β      OrderController.java
    β  β              β      ProductController.java
    β  β              β      ProductQnAController.java
    β  β              β      QnAController.java
    β  β              β      ReviewController.java
    β  β              β      RootController.java
    β  β              β      
    β  β              ββdao
    β  β              β      AdminDao.java
    β  β              β      HomeDao.java
    β  β              β      MemberDao.java
    β  β              β      OrderDao.java
    β  β              β      ProductDao.java
    β  β              β      ProductQnADao.java
    β  β              β      QnADao.java
    β  β              β      ReviewDao.java
    β  β              β      
    β  β              ββdto
    β  β              β      Cart.java
    β  β              β      Comment.java
    β  β              β      Member.java
    β  β              β      Order.java
    β  β              β      OrderDetail.java
    β  β              β      Product.java
    β  β              β      Productqna.java
    β  β              β      QnA.java
    β  β              β      Review.java
    β  β              β      ShipAddress.java
    β  β              β      Token.java
    β  β              β      Wish.java
    β  β              β      
    β  β              ββinterceptor
    β  β              β      ConfirmInterceptor.java
    β  β              β      JWTInterceptor.java
    β  β              β      
    β  β              ββservice
    β  β                      AdminService.java
    β  β                      AdminServiceImpl.java
    β  β                      HomeService.java
    β  β                      HomeServiceImpl.java
    β  β                      JWTService.java
    β  β                      MemberService.java
    β  β                      MemberServiceImpl.java
    β  β                      OrderService.java
    β  β                      OrderServiceImpl.java
    β  β                      ProductQnAService.java
    β  β                      ProductQnAServiceImpl.java
    β  β                      ProductService.java
    β  β                      ProductServiceImpl.java
    β  β                      QnAService.java
    β  β                      QnAServiceImpl.java
    β  β                      ReviewService.java
    β  β                      ReviewServiceImpl.java
    β  β                      
    β  ββresources
    β      β  application.properties
    β      β  
    β      ββconfig
    β      β      mybatis-config.xml
    β      β      
    β      ββmappers
    β      β      admin.xml
    β      β      home.xml
    β      β      member.xml
    β      β      order.xml
    β      β      product.xml
    β      β      productqna.xml
    β      β      qna.xml
    β      β      review.xml
    β      β      
    β      ββstatic
    β          β  favicon.ico
    β          β  index.html
    β          β  
    β          ββcss
    β          β      app.e02a3953.css
    β          β      chunk-vendors.8dd7dea4.css
    β          β      
    β          ββimg
    β          β      food.8872b051.png
    β          β      
    β          ββjs
    β                  app.49fa99d1.js
    β                  app.49fa99d1.js.map
    β                  chunk-vendors.41ede9e1.js
    β                  chunk-vendors.41ede9e1.js.map
    β                  
    ββtest
        ββjava
            ββcom
                ββssafy
                    ββeureka
                            EurekaApplicationTests.java
```
