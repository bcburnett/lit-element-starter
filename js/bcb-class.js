/* eslint-disable require-jsdoc */
import {LitElement, html, css} from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from './store.js';

export class BcbClass extends connect(store)( LitElement) {

  /**
   * lit-element observed properties
   */
  static get properties(){
    return {
      
    }
  }

  /**
   * lit-element styles array. external style sheets can be added here.
   */
static get styles() {
    return [css`

`]
}

/**
 * called when the component is created but before it is attached to the dom
 */
  constructor(){
    super()

  }

  /**
   * called after the first render, the shadow-dom is attached now.
   */
  firstUpdated(changedProperties){
    console.log('first updated', changedProperties)
  }

  /**
   *  Invoked when a component is added to the document’s DOM.
   */
  connectedCallback() {
    super.connectedCallback()
  
    console.log('connected')
  }

  /**
   *  Invoked when a component is removed from the document’s DOM.
   */
  disconnectedCallback() {
    super.disconnectedCallback()
  
    console.log('disconnected')
  }

  attributeChangedCallback(e){
    super.attributeChangedCallback();
    console.log('attribute changed', e)
  }

  render(){
    return html`
	<h1>bcb-class</h1>
    `
  }

stateChanged(state) {
console.log(state);
}

updated(changedProperties) {
  console.log(changedProperties)
}

}

customElements.define('bcb-class',BcbClass)
