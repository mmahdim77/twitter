import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './status.styles.css';
import 'antd/dist/antd.css';
import ProfileHeader from '../../components/profile-header.components/profile-header.components'
import { Input } from 'antd';
import Navbar from '../../components/navbar.components/navbar'
import Header from '../../components/header.components/header.components'
import { withRouter } from "react-router";
import PostCard from '../../components/post-card.components/post-card.components'
import CommonHashtags from '../../components/common-hashtags.component/common-hashtags.components'
import Search from '../../components/search.components/search.components'
import { Link, useParams } from 'react-router-dom'
import { Button, Avatar, Menu, Dropdown } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

 class Status extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainTweet : null,
        comments :[],
        username:"",
        idx : ""
      };
    }
    
    getComments = async ()=>{
        // console.log('start')
        await axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/'+this.state.idx ).then(
            res => {
                // console.log('main tweet')
                // console.log(res)
                this.setState({mainTweet:res.data})
                return res.data.comments
            }
        ).then(
            async (cmnts) => {
                // console.log("comments")
                // console.log(cmnts)
                let id
                let temp=[]
                for (let i =0; i<cmnts.length ; i+=1){
                    // console.log("for")
                    await axios.get('http://twitterapifinal.pythonanywhere.com/twitt/get/'+cmnts[i] ).then(
                        response => {
                            // console.log(response.data)
                            temp.push(response.data)
                        }
                    )
                }
                this.setState({comments:temp}  , ()=>console.log("state", this.state))
            }
        )
    }
    componentDidMount(){
        this.setState({idx :  this.props.match.params.idx}, () => this.getComments())
    }
    componentWillReceiveProps(newProps){
        this.setState({idx :newProps.match.params.idx}, () => this.getComments())
    }


    render() {  
      return (
        <div className="home">
            <div className="left-col">
                <Navbar myUser={this.props.myUser} refreshToken ={this.props.refreshToken} token={this.props.token}/>
            </div>
            {
                this.state.mainTweet?
                <div className="right-col">
                    <div className="responsive-nav-bar">
                        <div className="button">
                            <Link to={'/home'}>
                            <Button className="b" icon={<HomeOutlined />}>Home</Button>
                            </Link>
                        </div>
                        <div className="button">
                            <Link to={"/profile/" + this.props.myUser.username}>
                            <Button className="b" icon={<UserOutlined />}>Profile</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="responsive-search-col"  style={{marginTop :"20px"}}>
                        <Search myUser={this.props.myUser} token = {this.props.token}/>
                        <CommonHashtags />
                    </div>
                    <Header route="tweet" />
                    <PostCard
                        myUser ={this.props.myUser}
                        token ={this.props.token}
                        tweet ={this.state.mainTweet}
                    />

                    {
                        this.state.comments.length>0 ?
                        this.state.comments.map(
                            (tweet) =>{
                                // console.log("tweet")
                                // console.log(tweet)
                                return (
                                <div>
                                    <PostCard token ={this.props.token} myUser = {this.props.myUser} tweet = {tweet}/>
                                </div>
                                )
                            }
                        )
                        :
                        <div></div>
                    }
                </div>
                :
                <div></div>
            }
            <div className="search-col"  >
                <Search myUser={this.props.myUser} token = {this.props.token}/>
                <CommonHashtags />
            </div>
        </div>
      )
    }
  }
  
export default withRouter(Status);