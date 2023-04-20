let app = new Vue({
  el:".conteiner5",
  data:{
    products:[{'id':1,'title':'Hass Avocado','image':'image_1.png','short_text':'Long storage','desc':'Full desc'},
    {'id':2,'title':'Wurtz Avocado','image':'image_2.png','short_text':'Long storage','desc':'Full desc'},
    {'id':3,'title':'Bacon Avocado','image':'image_3.png','short_text':'Most beautiful','desc':'Full desc'},
    {'id':4,'title':'Fuerte Avocado','image':'image_4.png','short_text':'Most delicious','desc':'Full desc'},
    {'id':5,'title':'Pinkerton Avocado','image':'image_5.png','short_text':'Long storage','desc':'Full desc'},
    {'id':6,'title':'Reed Avocado','image':'image_6.png','short_text':'Most delicious','desc':'Full desc'},
    {'id':7,'title':'Stewart Avocado','image':'image_7.png','short_text':'Most beautiful','desc':'Full desc'},
    {'id':8,'title':'Zutano Avocado','image':'image_8.png','short_text':'Most delicious','desc':'Full desc'}],
    product:[],
    cart:[],
    contactFields:[],
    menu:0,
    btnVisible:0,
    order:0
  },
  mounted: function(){
    this.getProduct();
    this.checkInCart();
    this.getCart();
  },
  methods:{
    openMenu(){
      if(this.menu==0){
        this.menu=1;
      }
      else{
        this.menu=0;
      }
    },
    getProduct(){
      if(window.location.hash!=null){
        let id = window.location.hash.replace('#','');
        if(this.products!=null && this.products.length>0){
          for(let i in this.product){
            if(this.products[i] != null && this.products[i].id != null && this.products[i].id==id){
              this.product=this.products[i];
            }
          }
        }
      }
    },
    addToCart(id){
      let cart = [];
      if(window.localStorage.getItem('cart') != null){
        cart = window.localStorage.getItem('cart').split(',');
      }
      if(cart.indexOf(String(id))==1){
        cart.push(id);
        window.localStorage.setItem('cart',cart.join(','));
        this.btnVisible=1;
      }
    },
    checkInCart(){
      if(this.product!=null && this.product.id!=null && window.localStorage.getItem('cart')!=null && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)!=-1)){
        this.btnVisible=1;
      }
    },
    getCart(){
      if(window.localStorage.getItem('cart') != null){

          if(this.products!=null && this.products.length>0){
              for(let i in this.products){
                  if(this.products[i] != null && this.products[i].id != null && window.localStorage.getItem('cart').split(',').indexOf(String(this.products[i].id))!=-1) this.cart.push(this.products[i]);
              }
          }
      }
    },
    removeFromCart(id){
      let cart = [];
      if(windows.localStorage.getItem('cart')!=null){
        cart = windo.localstorage.getItem('cart').split(',');
      }
      if(cart.indexOf(String(id))!=-1){
        cart.splice(cart.indexOf(String(id)),1);
        this.cart = cart;
        window.localStorage.setItem('cart',cart.join(','));
      }
    },
    makeOrder(){
      this.cart = [];
      window.localStorage.getItem('cart','');
      this.order=1;
    }
  }
});




// const button = document.querySelector(".menbt");
// function handleClick() {
//   console.log('click');
// }
// button.AddEventListener('click', handleClick);

// let jdf = document.getElementById('men');

// function open(){
//     console.log('gggg');
//     let box = document.getElementById("blck");
//     box.style.display = 'block';
// }

// jdf.addEventListener("click", open);
// let Mybutton = document.getElementById("menbt");
// let div_id = document.getElementById("blck");

// function functionName(event) {
//     event.preventDefault();
//     console.log('gggg');
//     // div_id.style.display = "block";
// }

// Mybutton.addEventListener("click", functionName);
// btn.onclick = changeBg;
// function changeBg(){
//     let box = document.querySelector('.block');
//     box.style.backgroundColor = 'blue';
//     box.style.width = '600px';
