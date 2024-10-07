import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
function Form() {
  
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [quantity ,setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/additem',{name,price,quantity})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  };

  return (
    <>
  <meta charSet="utf-8" />
  <title>Stackfindover: Sign in</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    * {\n  padding: 0;\n  margin: 0;\n  color: #1a1f36;\n  box-sizing: border-box;\n  word-wrap: break-word;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;\n}\nbody {\n    min-height: 100%;\n    background-color: #ffffff;\n}\nh1 {\n    letter-spacing: -1px;\n}\na {\n  color: #5469d4;\n  text-decoration: unset;\n}\n.login-root {\n    background: #fff;\n    display: flex;\n    width: 100%;\n    min-height: 100vh;\n    overflow: hidden;\n}\n.loginbackground {\n    min-height: 692px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 0;\n    overflow: hidden;\n}\n.flex-flex {\n    display: flex;\n}\n.align-center {\n  align-items: center; \n}\n.center-center {\n  align-items: center;\n  justify-content: center;\n}\n.box-root {\n    box-sizing: border-box;\n}\n.flex-direction--column {\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n.loginbackground-gridContainer {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: [start] 1fr [left-gutter] (86.6px)[16] [left-gutter] 1fr [end];\n    grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];\n    -ms-grid-rows: [top] 1fr [top-gutter] (64px)[8] [bottom-gutter] 1fr [bottom];\n    grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];\n    justify-content: center;\n    margin: 0 -2%;\n    transform: rotate(-12deg) skew(-12deg);\n}\n.box-divider--light-all-2 {\n    box-shadow: inset 0 0 0 2px #e3e8ee;\n}\n.box-background--blue {\n    background-color: #5469d4;\n}\n.box-background--white {\n  background-color: #ffffff; \n}\n.box-background--blue800 {\n    background-color: #212d63;\n}\n.box-background--gray100 {\n    background-color: #e3e8ee;\n}\n.box-background--cyan200 {\n    background-color: #7fd3ed;\n}\n.padding-top--64 {\n  padding-top: 64px;\n}\n.padding-top--24 {\n  padding-top: 24px;\n}\n.padding-top--48 {\n  padding-top: 48px;\n}\n.padding-bottom--24 {\n  padding-bottom: 24px;\n}\n.padding-horizontal--48 {\n  padding: 48px;\n}\n.padding-bottom--15 {\n  padding-bottom: 15px;\n}\n\n\n.flex-justifyContent--center {\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.formbg {\n    margin: 0px auto;\n    width: 100%;\n    max-width: 448px;\n    background: white;\n    border-radius: 4px;\n    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;\n}\nspan {\n    display: block;\n    font-size: 20px;\n    line-height: 28px;\n    color: #1a1f36;\n}\nlabel {\n    margin-bottom: 10px;\n}\n.reset-pass a,label {\n    font-size: 14px;\n    font-weight: 600;\n    display: block;\n}\n.reset-pass > a {\n    text-align: right;\n    margin-bottom: 10px;\n}\n.grid--50-50 {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    align-items: center;\n}\n\n.field input {\n    font-size: 16px;\n    line-height: 28px;\n    padding: 8px 16px;\n    width: 100%;\n    min-height: 44px;\n    border: unset;\n    border-radius: 4px;\n    outline-color: rgb(84 105 212 / 0.5);\n    background-color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n}\n\ninput[type="submit"] {\n    background-color: rgb(84, 105, 212);\n    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, \n                rgb(84, 105, 212) 0px 0px 0px 1px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(0, 0, 0, 0) 0px 0px 0px 0px, \n                rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;\n    color: #fff;\n    font-weight: 600;\n    cursor: pointer;\n}\n.field-checkbox input {\n    width: 20px;\n    height: 15px;\n    margin-right: 5px; \n    box-shadow: unset;\n    min-height: unset;\n}\n.field-checkbox label {\n    display: flex;\n    align-items: center;\n    margin: 0;\n}\na.ssolink {\n    display: block;\n    text-align: center;\n    font-weight: 600;\n}\n.footer-link span {\n    font-size: 14px;\n    text-align: center;\n}\n.listing a {\n    color: #697386;\n    font-weight: 600;\n    margin: 0 10px;\n}\n\n.animationRightLeft {\n  animation: animationRightLeft 2s ease-in-out infinite;\n}\n.animationLeftRight {\n  animation: animationLeftRight 2s ease-in-out infinite;\n}\n.tans3s {\n  animation: animationLeftRight 3s ease-in-out infinite;\n}\n.tans4s {\n  animation: animationLeftRight 4s ease-in-out infinite;\n}\n\n@keyframes animationLeftRight {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(1000px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n} \n\n@keyframes animationRightLeft {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(-1000px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n} \n  '
    }}
  />
  <div className="login-root">
    <div
      className="box-root flex-flex flex-direction--column"
      style={{ minHeight: "100vh", flexGrow: 1 }}
    >
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div
            className="box-root flex-flex"
            style={{ gridArea: "top / start / 8 / end" }}
          >
            
          </div>  
        </div>
      </div>
      <div
        className="box-root padding-top--24 flex-flex flex-direction--column"
        style={{ flexGrow: 1, zIndex: 9 }}
      >
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>
            <a href="http://blog.stackfindover.com/" rel="dofollow">
              Add Product
            </a>
          </h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Add the Product </span>
              <form id="stripe-login" onSubmit={handleSubmit}>
              <div className="field padding-bottom--24">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="field padding-bottom--24">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                // value={formData.expname}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="field padding-bottom--24">
              <div className="grid--50-50">
                <label htmlFor="quantity">Quantity(Kg)</label>
                <div className="reset-pass"></div>
              </div>
              <input
                type="number"
                name="quantity"
                // value={formData.expamnt}
                onChange={(e)=>setQuantity(e.target.value)}
              />
            </div>
            <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                />{' '}
                Are you sure about your details
              </label>
            </div>
            <div className="field padding-bottom--24">
              <input type="submit" name="submit" value="Continue"/>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Form;
