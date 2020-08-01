//import React from 'react';
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './chatbot.css';
 
var flg = 0;
var test = '';
export default class Todo extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            ID:''
        };
    }

    renderText = (value) => {
        var 
        loginID = "12345";
        if(value===loginID){
            return true;    
        }else{
            return false;
        }
    }

    render() {
        var msg = "";
        return (<div>
            <ChatBot className="chatbot"
                headerTitle="チャットbot"
                recognitionEnable={true}
                steps={[
                {
                    id:'1',
                    message:'こんにちは！！　〇〇登録局です',
                    trigger:'2',
                },
                {
                    id:'2',
                    message:'ログインをお願いします',
                    trigger:'login',
                },
                {
                    id:'login',
                    options:[
                        {value:'login',label:'ログイン',trigger:'3'},
                        {value:'shinki',label:'新規登録',trigger:'5'},
                    ]
                },
                {
                    id:'3',
                    message:'ログインIDを入力してください',
                    trigger:'4',
                },
                {
                    id:'4',
                    user:true,
                    validator:(value) => {
                        var ret = this.renderText(value);
                        console.log("ret is " + ret);
                        test = 'finish';
                        if(ret){
                            flg=1;
                            console.log("test is ",test);
                            return true;
                        }else{
                            flg=0;
                            console.log("test is ",test);
                            return true;
                        }
                    },
                    trigger:(value)=>{
                        if(flg===1){
                            return 'finish';
                        }else{
                            return 'wrong';
                        }
                        
                    } 
                },
                {
                    id:'finish',
                    message:'ログイン成功しました',
                    end:true,
                },
                {
                    id:'wrong',
                    message:'IDが間違っています',
                    trigger: 'login'
                },
                {
                    id: '5',
                    message: 'お名前は?',
                    trigger: '6',
                },
                {
                    id: '6',
                    user: true,
                    validator:(value) => {
                        this.setState({
                            name: value
                        });
                        return true;
                    },
                    trigger: '7',
                },
                {
                    id: '7',

                    message: '{previousValue}さん,はじめまして!',
                    trigger: '8',
                },
                {
                    id: '8',
                    message: 'IDを入力して',
                    trigger: '9',                  
                },
                {
                    id: '9',
                    user: true,
                    validator:(value) => {
                        this.setState({
                            ID: value
                        });
                        return true;
                    },
                    trigger: '10',                 
                },
                {
                    id: '10',
                    message: ()=>{
                        const {name} = this.state;
                        const {ID} = this.state;
                        var ret = 'こちらで登録します   名前：' + name + '    ID：' + ID;
                        return ret;
                    },
                    trigger: '11',  
                },
                {
                    id: '11',
                    options:[
                        {value:'OK',label:'OK',trigger:'12'},
                        {value:'Cancel',label:'Cancel',trigger:'5'},
                    ]
                },
                {
                    id:'12',
                    message:'登録完了',
                    end:true,
                },
            ]}
        />
        </div>

    )}
}