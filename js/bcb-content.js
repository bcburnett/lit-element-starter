import { LitElement, html } from 'lit-element/lit-element.js'
import { setContent } from "./bcb-content-data";

export class BcbContent extends LitElement {

  static get properties() {return {slot:String}}

  constructor(){super();setContent()}

  render() {
    this.dispatchEvent(new CustomEvent('bcbcontent', { detail: this.slot }))
    return html`<slot name="${this.slot}">${this.slot}</slot>`}}

customElements.define('bcb-content', BcbContent)
