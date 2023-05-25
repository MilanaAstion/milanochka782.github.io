let app = new Vue({
    el:".conteiner5",
    data:{
        products:[{'id':1,'title':'Hass Avocado','image':'image_1.png','short_text':'Long storage','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':2,'title':'Wurtz Avocado','image':'image_2.png','short_text':'Long storage','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':3,'title':'Bacon Avocado','image':'image_3.png','short_text':'Most beautiful','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':4,'title':'Fuerte Avocado','image':'image_4.png','short_text':'Most delicious','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':5,'title':'Pinkerton Avocado','image':'image_5.png','short_text':'Long storage','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':6,'title':'Reed Avocado','image':'image_6.png','short_text':'Most delicious','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':7,'title':'Stewart Avocado','image':'image_7.png','short_text':'Most beautiful','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'},
        {'id':8,'title':'Zutano Avocado','image':'image_8.png','short_text':'Most delicious','desc':'Avocado is a fruit that is native to Mexico and Central America, and it is also known as the "alligator pear" due to its bumpy green skin.'}],
        product:[],
        cart:[],
        contactFields:[],
        menu:0,
        btnVisible:0,
        order:0
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        openMenu(){
            if(this.menu==0){
                this.menu=1;
            }else{
                this.menu=0;
            }
        },
        getProduct(){
            if(window.location.hash!=null){
                let id = window.location.hash.replace('#','');

                if(this.products!=null && this.products.length>0){
                    for(let i in this.products){
                        if(this.products[i] != null && this.products[i].id != null && this.products[i].id==id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart(id){
            let cart = [];
            if(window.localStorage.getItem('cart') != null){ 
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart', cart.join(','));
                this.btnVisible=1;
            }
        },
        checkInCart(){
            if(this.product!=null && this.product.id!=null && window.localStorage.getItem('cart')!=null && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
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
            if(window.localStorage.getItem('cart') != null){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))!=-1){
                cart.splice(cart.indexOf(String(id)),1);               
                window.localStorage.setItem('cart', cart.join(','));
                this.cart = [];
                this.getCart();
            }    
        },
        makeOrder(){
            this.cart = [];
            window.localStorage.setItem('cart', '');
            this.order=1;
        }       
    }
});
function askPermission() {
    return new Promise(function(resolve, reject) {
        const permissionResult = Notification.requestPermission(function(result) {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    })
    .then(function(permissionResult) {
        if(permissionResult !== "granted")
        throw new Error('We weren\'t granted permission.');
    });
}
	if ('serviceWorker' in navigator){
		navigator.serviceWorker 
		.register('/sw.js')
		.then(function() {
			console.log('Service worker registered!');
		});

		navigator.serviceWorker.ready.then(registration => {
			if ('PushManager' in window) { 
				document.querySelector('button.subscribe-for-push')
					.addEventListener('click', () => { 
						askPermission()
					});
			}
		});
	}