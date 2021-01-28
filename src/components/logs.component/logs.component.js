import axios from 'axios'
import React, { useState , useEffect } from 'react';

const LogComp = ({ token , myUser ,refreshToken}) => {
    const [followl, setfollowl] = useState(null);
    const [likel, setlikel] = useState(null);
    const [retwittl, setretwittl] = useState(null);

    useEffect(
        ()=>{
            const timer = setTimeout(function(){ 
                axios.get('http://twitterapifinal.pythonanywhere.com/account/myprofile/' , {headers : {'Authorization' : 'Bearer  '+token}}).then(
                                
                                res => {
                                    if(res.data.likel!= null){
                                        let temp=[...res.data.likel]
                                        setlikel([...temp])
                                    }
                                    if(res.data.followl !=null ){
                                        let temp=[...res.data.followl]
                                        setfollowl(temp)
                                    }
                                    if(res.data.retwittl != null){
                                        let temp=[...res.data.retwittl]
                                        setretwittl(temp)
                                    }
         
                                }
                            ).catch(err=>console.log(err))
             }, 15000);
        }
    )
   


    return(
    <div>
        <h3>likes log: </h3>
        {
            likel != null?
            likel.map(
                (item) => (
                    <div>
                        <span>tweet {item[0]} liked on {item[1]} by you</span>
                    </div>
                )
            )
            :
            <div>No like log</div>
        }
        <h3>follows log: </h3>
        {
            followl != null?
            followl.map(
                (item) => (
                    <div>
                        <span>you followed {item[0]} on {item[1]}  </span>
                    </div>
                )
            )
            :
            <div>No follow log</div>
        }
        <h3>retweet log: </h3>
        {
            retwittl != null?
            retwittl.map(
                (item) => (
                    <div>
                        <span>post {item[0]} retwitted on {item[1]} by you  </span>
                    </div>
                )
            )
            :
            <div>No follow log</div>
        }
    </div>
    )
}
export default LogComp