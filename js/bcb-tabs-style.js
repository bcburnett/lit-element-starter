import { html } from 'lit-element'

export const Style = html`

<!-- CSS -->
<style>

    :host{
      position:relative;
      margin:0;
      border:0;
      top:-3px
    }

    button{
      background-color:rgba(50,50,50,1);
      border:1px solid black;
      border-top-left-radius:15px;
      border-top-right-radius:15px;
      float:left;
      font-size: 2.7vw;
      color:#a9acad;
      padding:5px;
      outline:none;
      width:max-content;
    }

    button:hover{
      color:orange;
      scale:1.2;
      background-color:#666;
    }

    .active{
      color:orange;
      background-color:#555;
    }

    .container{
      display: flex;
      flex-direction:row;
      align-items:center;
      background-color:black;
      margin-left:5px;
      border:0;
      border-top-left-radius:10px;
      border-top-right-radius:10px;
      width:100%;
    }

    @media screen and (min-width: 520px) {
  button {
     font-size: 14px;
  }

    </style>
  `
