import { LitElement, html } from 'lit-element/lit-element.js'
import { afterNextRender, beforeNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { Style } from './bcb-tabs-style';
import { Tabs } from './bcb-tabs-data';

export class BcbTabs extends LitElement {
  static get properties(){
    return {
      arry: {
        type: Array,
        reflect: true,
        attribute: true
      },
      setactive:String
    }
  }

  constructor(){
    super()
    this.arry = Tabs
    beforeNextRender(this, e => {
      this.shadowRoot.getElementById([this.arry[0].id]).classList.add('active')
    })
  }

  render(){

    const tabs = () => {
      return this.arry.map(e => e ? html`
          <button @click="${e=>this.btnClick(e)}" data-setactive="${e.setactive}" class="${e.icon}" id="${e.id}">
            ${e.id}
          </button>`: '')
    }

    return html`
    ${Style}
  <div class="container">
    ${tabs()}
  </div>
    `
  }

  btnClick(e) {
    let setactive = e.path[0].dataset.setactive
    this.btnactive = e.path[0];
    if(setactive==='true')this.setactive(this.btnactive)
    let id = e.path[0].id
    this.dispatchEvent(new CustomEvent("bcbtabs", { detail:{
       id,
      elem:this }}))
  }

  setactive(active) {
    this.shadowRoot.querySelectorAll('button').forEach(button => {
      button.classList.remove('active')
    })
    let id = active.id
    active.classList.add('active')
  }

}

customElements.define('bcb-tabs',BcbTabs)
