<template>
  <form class="form1" action="#" @submit="submitForm">
    <Header />
    <div class="logo-content">
      <div>
        <span class="addressBook-text1">Books</span>
        ({{ count }}Items)
      </div>
    </div>
    <div class="column-content">
      <select name="sort" id="sort">
        <option value="default" selected>Sort By Relevance</option>
        <option value="Ascending" @click="getsortBook">
          Price:Low to High
        </option>
        <option value="Descending" @click="getsortBooks">
          Price:High to Low
        </option>
      </select>
    </div>
    <div class="book-container" v-for="BookInfos in BookInfo" :key="BookInfos">
      <img
        src="../../assets/Image 11.png"
        class="card-img-top"
        alt="Book Image"
      />

      <h5 class="card-title">{{ BookInfos.bookName }}</h5>
      <p class="card-text" style="font-weight: lighter; font-size: smaller">
        by {{ BookInfos.authorName }}
      </p>
      <p class="card-text">price:Rs {{ BookInfos.price }}</p>
      <button
        type="button"
        class="button"
        @click="AddtoCart(BookInfos.bookId, BookInfos.price)"
      >
        Add to Bag
      </button>
      <button type="button" class="button wishlist">Wishlist</button>
    </div>
  </form>
</template>

<script>
import BookStoreService from "../service/BookStoreService";
import CartService from "../service/CartService";
import Header from "./Header.vue";

export default {
  name: "HomePage",
  components: {
    Header,
  },

  data() {
    return {
      formValues: {
        userId: "",
        bookId: "",
        quantity: "",
        total: "",
      },
      BookInfo: [],
      count: 0,
    };
  },
  methods: {
    getBook() {
      BookStoreService.getAllBooks().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },
    getContactCount() {
      BookStoreService.getContactCount().then((response) => {
        console.log(response.data.data);
        this.count = response.data.data;
      });
    },
    getsortBook() {
      BookStoreService.getsortBook().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },
    getsortBooks() {
      BookStoreService.getsortBooks().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },

    AddtoCart(id, total) {
      console.log(this.BookInfo.bookId);
      console.log(id);
      this.formValues.bookId = id;
      this.formValues.userId = 23;
      this.formValues.quantity = 1;
      this.formValues.total = total;
      console.log(this.formValues);
      const data = this.formValues;
      CartService.addCart(data)
        .then((response) => {
          console.log(response);
          // this.BookInfo = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while adding the Added person !");
        });
    },
  },

  created() {
    this.getBook();
    this.getContactCount();
  },
};
</script>


<style>
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

.btn {
  font: normal normal normal 22px/29px Roboto;
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
.addressBook-text1 {
  font: bold 25px / 27px Montserrat;
  text-align: left;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  color: black;
  margin-left: 10px;
  margin-right: 20px;
}
.column-content {
  margin-left: 1100px;
  margin-top: -20px;
  top: 91px;
  left: 1046px;
  width: 91px;
  height: 15px;
  /* UI Properties */
  text-align: left;
  font: normal normal normal 12px/15px Lato;
  letter-spacing: 0px;
  color: #0a0102;
  opacity: 1;
}
.book-container {
  display: block;
  float: left;

  margin-top: 16px;
  margin-left: 22mm;

  top: 132px;
  left: 174px;
  width: 235px;
  height: 315px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  opacity: 1;
}

.card-text {
  font-size: 13px;
}

.button {
  font-size: 10px;
  color: white;
  background-color: #a03037;
  height: 30px;
  width: 80px;
  border-color: lightgray;
  border-radius: 5px;
}
.wishlist {
  margin-left: 7px;
  background-color: white;
  color: black;
}
</style>