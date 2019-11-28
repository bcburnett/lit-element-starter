import{html} from 'lit-element'

export const bcbNavbarStyle = html`

<!-- CSS -->
<style>

.main-nav {
  width: 100%;
  margin: 0;
  color: var(--primary-color);
  padding-top: .5rem;
  padding-bottom: .5rem;
  background-color: rgba(0,0,0,.2);
  background-image: var(--header-img);
  background-blend-mode:multiply;
  background-size: cover;
  background-position: center;
  height: 50px;
}

.main-nav__items {
  width: 98%;
  margin: 0;
  display: grid;
  grid-template-columns:  20px 1fr 1fr;
  align-content: center;
  list-style: none;
}

.main-nav__branding {
  position: relative;
  font-size: 2rem;
  border-radius: 10px;
}

.main-nav__menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items:flex-end;
  flex-wrap:nowrap;
   margin-top: 0.5rem;
   margin-right:1rem;
}

.main-nav__item {
      display: flex;
  flex-flow: column;
  align-content: flex-end;
  align-items: center;
  padding: 0.5vw 10px;
  margin: 0;

}

.main-nav__item button {

  border-color: var(--primary-light);
  margin:0;
  padding:5px;
  border-radius: 5px;
  border-top-left-radius: 25px;
}

.main-nav__item__link {
  text-decoration: none;
  color: var(--primary-color);
  background-color: var(--primary-light);
  cursor: pointer;
  transition: background-color 300ms ease-in;
  padding: 4px;
outline:none;
}

.main-nav__branding__link{
  text-decoration: none;
  color: var(--primary-color);
  cursor: pointer;
  transition: background-color 300ms ease-in;
  padding: 3px 2px 0 0;
  border-radius: 5px;
outline:none;
}


  .hide_me {
  display: inline-block;
}

.main-nav__item__link:hover,
.main-nav__branding__link:hover {
  background-color: var(--highlight-color);
  scale:1.2;

}

.dropdown {
  position: relative;
  display: var(--float-button);
  z-index: 100;
}

.dropdown-content {
  position: absolute;
  font-size:1.2rem;
  box-shadow: 0px 16px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--primary-color);
  text-align: left;
  visibility: hidden;
  left: 0px;
  top: 30px;
  opacity: 0;
  transition: opacity 400ms linear,
              visibility 400ms linear;
  text-align: left;
  width:max-content;

}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
}

.bars {
  display: flex;
  flex-flow: column;
  padding:10px 0;
  background-color:rgba(0, 0, 0, .75);
  padding:3px;
  border-radius:5px;
}

.bar {
    width: 20px;
    height: 2px;
    background-color:var(--primary-color);
    margin: 3px 0;
    border-radius: 50%;
}

.hidden{
  display:none;
}

@media (max-width: 1060px) {
  button {
  font: .7rem sans-serif;
}
}

@media (max-width: 730px) {

  .title{
    font-size: 1rem;
  }

  .hide_me {
  display: none;
}

  .main-nav__menu {
    margin: .5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    flex-wrap: wrap;

  }
  .main-nav__items {
  grid-template-columns: 20px 1fr;
  }
}

@media (max-width: 1287px) {
button {
  font: .9rem sans-serif;
}
}

@media (max-width: 1060px) {
  button {
  font: .75rem sans-serif;
}
}

@media (max-width: 400px) {
.main-nav__items {
  grid-template-columns:  20px 1fr;
  align-content: center;
  list-style: none;
}
}


.active{

}

span{
  display:block;
  margin:5px;
  padding:0;
}

.tooltip{
  position: relative;
  z-index: 20 ;
}

.tooltip > span{display:none}

.tooltip:hover{z-index: 21;}

.tooltip:hover > span{
  display:block;
  min-width:50px;
  padding:5px;
  color: #fff;
  background: rgba(0,0,0,.5);
  font-size: 11px;
  text-decoration:none;
  position:absolute;
  border-radius:5px;
  top:92%;
  left:50%;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: both;
  text-align:center;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.tooltip:hover > span:after{
  position: absolute;
  width: 10px;
  height: 10px;
  top:0;
  left: 50%;
  margin-left: -25px;
  content: '';
  transform: rotate(45deg);
  margin-top: -5px;
}

</style>
`
