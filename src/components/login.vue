<template>
  <section class="bgColor">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="loginheader">Login</h2>
                <p class="text">Please enter your Email and password!</p>
                <br />

                <div class="textofButton">
                  <label class="form-label1" for="typeEmailX">Email</label>
                  <input
                    type="email"
                    id="typeEmailX"
                    placeholder="Example@123"
                    class="form-control form-control-lg"
                  />
                </div>

                <h6 style="color: red; margin-right: 85mm"></h6>

                <br />
                <div class="textofButton">
                  <label class="form-label" for="typePasswordX">Password</label>
                  <input
                    type="password"
                    id="typePasswordX"
                    placeholder="password"
                    class="form-control form-control-lg"
                  />
                </div>

                <h6 style="color: red; margin-right: 75mm"></h6>

                <button class="btn btn-outline-light btn-lg px-5" type="submit">
                  Login
                </button>
              </div>

              <div class="bottom">
                <span class="mb1">Don't have an account? </span>
                <button class="astext">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "login",
};
</script>
<style>
.mb-md-5 {
  padding: 60px;
}
.card {
  background-color: rgba(161, 199, 241, 0.5);
  width: 40%;
  height: 90%;
  margin-left: 400px;
}
.bgColor {
  background-color: white;
}
.mb {
  color: #3371b5;
}
.mb1 {
  color: #707070;
}

.loginheader {
  color: black;
}
.text {
  color: black;
}
.textofButton {
  color: black;
}
.astext {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: #3371b5;
}
.btn {
  width: 90px;
  height: 30px;
  margin-top: 40px;
}
input {
  margin-left: 30px;
}
</style>