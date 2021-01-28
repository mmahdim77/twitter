import axios from 'axios'
import React, { useState , useEffect } from 'react';

const Event = ({ token , myUser ,refreshToken}) => {
    const [followl, setfollowl] = useState(null);
    const [likel, setlikel] = useState(null);
    const [retwittl, setretwittl] = useState(null);

    useEffect(
        ()=>{
            const timer = setTimeout(function(){ 
                axios.get('http://twitterapifinal.pythonanywhere.com/account/event/' , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                                
                                res => {
                                    if(res.data.likes!= null){
                                        let temp=[...res.data.likes]
                                        setlikel([...temp])
                                    }
                                    if(res.data.follow !=null ){
                                        let temp=[...res.data.follow]
                                        setfollowl(temp)
                                    }
                                    if(res.data.retwitt != null){
                                        let temp=[...res.data.retwitt]
                                        setretwittl(temp)
                                    }
         
                                }
                            ).catch(err=>console.log(err))
             }, 15000);
        }
    )
   


    return(
    <div>
        <h3>like event: </h3>
        {
            likel != null?
            likel.map(
                (item) => (
                    <div>
                        <span>{item[0]} liked your post on {item[1]}</span>
                    </div>
                )
            )
            :
            <div></div>
        }
        <h3>follows event: </h3>
        {
            followl != null?
            followl.map(
                (item) => (
                    <div>
                        <span>you followed by {item[0]} on {item[1]}  </span>
                    </div>
                )
            )
            :
            <div></div>
        }
        <h3>retweet event: </h3>
        {
            retwittl != null?
            retwittl.map(
                (item) => (
                    <div>
                        <span>your post retwitted by {item[0]} on {item[1]}  </span>
                    </div>
                )
            )
            :
            <div></div>
        }
    </div>
    )
}
export default Event