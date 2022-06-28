<template>
<div>
<Header/>
  
<div class="container">
    <div class="order-image">
      <img src="../../public/assets/success.png" alt="success.png"/>
      
    </div>
    <div class="message" >
      Hurry!!!your order is confirmed<br/>
      the order id  is #123456 save the order id for <br/>
      further communication.
    </div>
    <div class="table-details">
      <table>
        <thead>
          <th>Email Us</th>
          <th>Contact Us</th>
          <th>Address</th>
        </thead>
        <tr>
          <td>kdesale1211@gmail.com</td>
          <td>+918010263658</td>
          <td>AT Post Kasare, Tal Sakri, Dist Dhule</td>
        </tr>
      </table>
    </div>
    <br>
   <div class="place-order" >
         <router-link to="/"><button type="button"  class="btn placeorder-button float-right" >Continue Shopping</button></router-link>
      </div> 
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "PlaceOrder",
  components: {
    Header,
  },
};
</script>
<style>
.order-image {
  position: relative;
  text-align: center;
  margin-top: 40px;
}
.order-heading {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.message {
  text-align: center;
  margin-top: 20px;
}
.table-details {
  margin-top: 30px;
  margin-left: 170px;
  margin-right: 170px;
}
th,
td {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px 100px 10px 100px;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
}
th {
  background-color: lightgray;
}
td {
  border: 1px solid gray;
}
.place-order {
  margin: 30px 20px 20px 750px;

  color: black;
  border-radius: 5px;
}
.btn {
  width: 180px;
  height: 40px;
  font-size: 20px;
  background-color: #008cff;
  border: none;
  color: white;
  text-align: center;
  margin: 4px 15px;
  opacity: 1;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: -800px;
}
</style>