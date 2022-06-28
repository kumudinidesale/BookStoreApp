<template>
  <header class="navbar">
    <div class="logo-content">
      <router-link to="/">
        <img src="../../assets/education.png" alt="booklogo"
      /></router-link>
      <div><span class="addressBook-text">Bookstore</span> <br /></div>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn1 btn-outline-info my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div class="cart">Cart</div>
      <router-link to="/cart"
        ><img class="img" src="../../assets/supermarket.png" alt="booklogo"
      /></router-link>
      <div class="cartbtn">{{ CartNo.length }}</div>
    </div>
  </header>
</template>
<script>
import BookStoreService from "../service/BookStoreService";
import CartService from "../service/CartService";
export default {
  name: "Header",

  data() {
    return {
      formValues: {
        userId: "",
        bookId: "",
        quantity: "",
      },
      CartNo: [],
      count: 0,
    };
  },

  methods: {
    getCart() {
      CartService.getAllCart().then((response) => {
        console.log(response.data.data);
        this.CartNo = response.data.data;
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style>
.cartbtn {
  border-radius: 1000px;

  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 20px;
  text-align: center;
  height: 20px;
  font-size: 15px;
  padding: 4px 8px;
  font-weight: bold;
}
.logo-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-left: 150px;
}

.addressBook-text {
  font: normal normal bold 25px/27px Montserrat;
  text-align: left;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  color: white;
  margin-left: 10px;
  margin-right: 20px;
}

.btn1 {
  margin-top: -20px;

  font: normal normal normal 15px/29px Roboto;
  background-color: #1073dc;
  border: none;
  color: white;
  text-align: center;
  /* font-size: 16px; */
  margin: 4px 15px;
  opacity: 1;
  transition: 0.3s;
  display: inline-flexbox;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
}

.form-inline[_ngcontent-rgt-c48] {
  display: flex;
  flex-direction: row;
  align-items: center;
}

form {
  display: contents;
  margin-top: 2.5em;
}
.form-control {
  /* display: block; */

  display: block;
  width: 440px;
  padding: 0.375rem 0.75rem;
  margin: 2px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.navbar {
  background-color: #a03037;
  height: 15mm;
}
.img {
  margin-left: 3mm;
}
.cart {
  color: white;
  top: 23px;
  margin-left: 300px;
  left: 1136px;
  width: 20px;
  height: 13px;
  /* UI Properties */
  text-align: left;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0.45px;
  color: #ffffff;
  opacity: 1;
}
</style>