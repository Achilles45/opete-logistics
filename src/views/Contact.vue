<template>
  <div class="contact">
    <Topbar />
    <Navbar />
   <div class="contact__wrapper">
     <div class="container">
      <div class="row">
        <div class="col-12 text-center heading">
          <h1>CONTACT US TODAY</h1>
        </div>
      </div>
      <div class="row body pt-5">
        <div class="col-md-5">
          <h3 class="pb-3">Get in touch with us 24 X 7</h3>
          <h6><i class="fa fa-home"></i>&nbsp; Corporate Office</h6>
          <p>Dubia Creek, AI Seef District</p><br>
          <h6><i class="fa fa-envelope"></i>&nbsp; Support Mail</h6>
           <p><a href="mailto:worldglobalexpressx6@yahoo.com" class="">worldglobalexpressx6@yahoo.com</a></p><br>
        </div>
        <div class="col-md-5">
          <form @submit.prevent="sendMessage()">
             <div v-if="err" class="error">
              {{ err }}
            </div>
             <div v-if="success" class="alert alert-success">
              {{ success }}
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Full Name" v-model="name"> 
            </div>
             <div class="form-group">
              <input type="text" class="form-control" placeholder="Email Address" v-model="email"> 
            </div>
             <div class="form-group">
              <input type="tel" class="form-control" placeholder="Mobile No:" v-model="phone"> 
            </div>
            <textarea name="" id="" cols="10" rows="5" class="form-control" placeholder="Your Message" v-model="message">
            </textarea>
            <button type="submit" class="submit__btn">SUBMIT</button>
          </form>
        </div>
      </div>
     </div>
   </div>
    <Footer />
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Topbar,
    Navbar,
    Footer
  },
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null,
      err: null,
      success: null
    }
  },
  methods: {
    sendMessage() {
    //Check if the user has filled in the form
    if(!this.name || !this.email || !this.phone || !this.message){
      this.err = 'Oops! Please completely fill out the form and try again!'
    }else{
      //Now send the message into firebase for admin
      db.collection('messages').add({
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
      this.success = "Thank you for contacting us. We'll get back to you soon!"
    }
    },
    removeAlert() {
      setTimeout(() => {
        document.querySelector('.alert').remove()
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.contact__wrapper{
  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('../assets/images/tech5.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: #fff;
  .heading h1{
    padding-top: 3.5rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: #FB7E12;
    font-size: 2rem;
  }
  .fa-home, .fa-envelope{
    color: #FB7E12;
  }
  h6{
    color: #FB7E12;
  }
  form{
    input{
      background: transparent;
      border-radius: 0px;
      height: 3.5rem;
      box-shadow: none !important;
      color: #fff;
      border: 1px solid #fff;
      font-size: .9rem;
      &::placeholder{
        color: #fff;
        font-size: .8rem;
        opacity: .8;
      }
    }
    textarea{
       background: transparent;
      border-radius: 0px;
      box-shadow: none !important;
      color: #fff;
      border: 1px solid #fff;
      font-size: .9rem;
      &::placeholder{
        color: #fff;
        font-size: .8rem;
        opacity: .8;
      }
    }
    .submit__btn{
      background: #FB7E12;
      border: none;
      margin-top: 2rem;
      padding: .9rem 3rem;
      color: #fff;
      font-size: .9rem;
      margin-bottom: 2rem;
    }
  }
}
.error{
  background: #dc3232;
  color: #fff;
  font-size: .9rem;
  padding: 1rem;
  border-radius: 0px;
  margin-bottom: 1rem;
}
a{
  color: #fff;
  margin-bottom: 2rem !important;
}
</style>
