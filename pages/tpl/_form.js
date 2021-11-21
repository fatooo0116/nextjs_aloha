
import React from 'react'
// import Menu from './_menu'
// import Link from 'next/link'


class Form extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          menuOpen:0,
          menuCloseAni:0,
          msgContent:''
      }    
  }




  registerUser = async event => {
    event.preventDefault()

    let formData = new FormData();
    formData.append('yourname', event.target.yourname.value);
    formData.append('tel425', event.target.tel425.value);
    formData.append('youremail', event.target.youremail.value);
    formData.append('yourmessage', event.target.yourmessage.value);

    const res = await fetch('https://api.aloha-tech.com/wp-json/contact-form-7/v1/contact-forms/89/feedback', {
      
        body: formData,
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'

    console.log(result);

    if(result.status=='mail_sent'){
     // alert('感謝您已寄出');
      this.setState({
        msgContent:'感謝您訊息已寄出'
      });
    }else{
      this.setState({
        msgContent:'發生錯誤'
      });
    }
    
  }




  render(){

    return(
        
        <form  className="contact_form" onSubmit={this.registerUser}>  

            {(this.state.msgContent)? <div className="w100">{this.state.msgContent}</div>:''}

            <input id="name" name="yourname" type="text"  placeholder="姓名"  required />
            <input id="tel" name="tel425" type="text"  placeholder="電話"  required />
            <input id="email" name="youremail" type="email"  placeholder="Email"   />            
            <textarea name="yourmessage" placeholder="您的訊息" ></textarea>
            <button type="submit">送出</button>
        </form>    
    
    )
}
}

export default Form 