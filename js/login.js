footer {
  padding: 60px 0px 20px 0px;
  background: rgba(40, 56, 69, 0.8);
  color: white;
}

footer .row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 30px;
}

footer .row .footer-img {
  width: 30%;
  margin-bottom: 20px;
  margin-left: 50px;
}

@media screen and (max-width: 576px) {
  footer .row .footer-img {
    margin-left: 0%;
  }
}

footer .row .footer-img img {
  width: 100%;
}

footer .row .footer-text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #eaf4f4;
}

footer .row .footer-text i {
  font-size: 24px;
  border: 1px solid #eb5e28;
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background: #eb5e28;
  color: #f6fff8;
}

footer .row .footer-text p {
  width: 90%;
  margin-bottom: 0px;
}

footer .row .footer-item {
  line-height: 35px;
  font-size: 18px;
}

footer .row .footer-item h3 {
  margin-bottom: 20px;
  font-weight: 400;
  color: #f6fff8;
}

@media screen and (max-width: 992px) {
  footer .row .footer-item h3 {
    font-size: 22px;
  }
}

footer .row .footer-item i {
  margin-right: 5px;
}

footer .row .footer-item a {
  text-decoration: none;
  color: #eaf4f4;
  opacity: 0.85;
}

@media screen and (max-width: 992px) {
  footer .row .footer-item a {
    font-size: 16px;
  }
}

footer .row .footer-item a:hover {
  text-decoration: underline;
  opacity: 1;
}

.footer-coppyright {
  background-color: rgba(32, 44, 57, 0.8);
}

.footer-coppyright .row {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer-coppyright .row .coppyright-left {
  padding-top: 20px;
  color: white;
}

@media screen and (max-width: 992px) {
  .footer-coppyright .row .coppyright-left {
    text-align: center;
  }
}

.footer-coppyright .row .coppyright-left a {
  text-decoration: none;
  color: #eb5e28;
}

.footer-coppyright .row .coppyright-left a:hover {
  opacity: 0.75;
}

.footer-coppyright .row .coppyright-right {
  text-align: center;
  padding-left: 200px;
}

@media screen and (max-width: 992px) {
  .footer-coppyright .row .coppyright-right {
    display: none;
  }
}

.footer-coppyright .row .coppyright-right a {
  text-decoration: none;
  color: white;
  margin-right: 10px;
}

.footer-coppyright .row .coppyright-right a i {
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.footer-coppyright .row .coppyright-right a i:hover {
  background: #eb5e28;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}