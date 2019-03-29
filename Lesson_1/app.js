Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }

    },
    template: `
    <div class="product-info">
    <div class="product" v-bind:style="[premium? {border: '2px solid red'} : {border: 'none'}]">
        stock: {{inStock}}
        <button @click="changeImage">Change Color</button>
        <button @click='addToCart'
                v-bind:disabled='!inStock'
                v-bind:class="{disabledButton:!inStock}"> 
                Add To Cart
        </button>
        

        <div class="product-image">
            <img v-bind:src="productImage">
            <div v-for="image in sockImages">

                <div v-bind:style="[nameStyleObject, { backgroundColor:image.name}]"
                    @mouseover="changeImageTo(image.image)" class="change-image">
                    {{image.name}}
                </div>
            </div>
        </div>
    </div>
    <h3>{{title}} |{{myTitle()}} | ({{this.currentImage}} - useless: {{uselessVariable}})</h3>
    <button @click='inStock = !inStock'>Change Stock</button>
    <button @click='uselessVariable = !uselessVariable'>Change Useless Variable</button>
    <p v-if='inStock'>In Stock</p>
    <p v-else='!inStock'>Out of stock</p>

    <ul>
        <li v-for='(feature, index) in features'>{{ index }}.{{ feature.name }} ({{ feature.score }})</li>
    </ul>

    <div v-for='(feature, index) in features' v-bind:id='index' v-bind:key='index'>
        {{ index }}.{{ feature.name }} ({{ feature.score }})
    </div>

    <div><b>Shipping: {{shipping}} </b> </div>






    <b>Cart: </b>

    



</div>
    `,
    computed: {
        shipping() {
            if (this.premium) {
                return "FREE";
            }
            return "2.99";
        },
        title() {
            console.log('inside title');
            return this.productName + '(Stock: ' + this.inStock + ')';
        }
    },
    methods: {
        myTitle() {
            console.log('inside my title');
            return `${this.productName} [${this.inStock}]`;

        },
        getText() {
            return "Some Text";
        },
        addToCart() {
            var newItem = {
                name: this.productName
            }
            this.$emit('add-to-cart', newItem);

            // this.cart.push(newItem);

        },
        changeImage(event) {
            var toDisplay = (this.currentImage++) % 2;
            this.productImage = this.sockImages[toDisplay].image;
            this.inStock = this.currentImage % 3;
        },
        changeImageTo(newImage) {
            this.productImage = newImage;
        }
    },
    data: function () {
        return {

            uselessVariable: false,
            inStock: false,
            nameStyleObject: {
                fontSize: '15px'
            },
            productName: 'Super socks!',
            productImage: 'https://media.mysockfactory.ch/1299-large_default/frat-boys-striped-socks.jpg',
            sockImages: [{
                    id: 0,
                    name: 'green',
                    image: 'https://media.mysockfactory.ch/1443-large_default/union-jack-cool-socks.jpg'
                },
                {
                    id: 1,
                    name: 'red',
                    image: 'https://media.mysockfactory.ch/1299-large_default/frat-boys-striped-socks.jpg'
                }
            ],
            currentImage: 0,
            features: [{
                    name: 'cotton',
                    score: 1
                },
                {
                    name: 'durable',
                    score: 6
                },
                {
                    name: 'quality',
                    score: 2
                },
                {
                    name: 'color',
                    score: 1
                },
                {
                    name: 'votes',
                    score: 4
                },
                {
                    name: 'customer review',
                    score: 3
                },
            ],

        }
    }
});



var ma = {
    el: '#app',
    data: {
        paidCustomer: false,
        cart: [],
    },
    methods: {
        addItemTocart(cartItem) {
            this.cart.push(cartItem);
        }
    }
}
var theapp = new Vue(ma);