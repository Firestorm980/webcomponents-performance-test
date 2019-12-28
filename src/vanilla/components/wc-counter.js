/**
 * Component
 */
class Counter extends HTMLElement {

	/**
	 * Constructor
	 */
	constructor() {
		super();

		// template
		const template = document.getElementById( 'wc-counter' );
		const templateContent = template.content;

		this.attachShadow( {mode: 'open'} ).appendChild(
			templateContent.cloneNode( true )
		);

		// state
		this._value = 0;

		// bind
		this.increment = this.increment.bind( this );
		this.decrement = this.decrement.bind( this );
	}

	/**
	 * Increment the count
	 */
	increment() {
		this._value = this._value + 1;
		this.update();
	}

	/**
	 * Decrement the count
	 */
	decrement() {
		this._value = this._value - 1;
		this.update();
	}

	/**
	 * Update the UI based on the count
	 */
	update() {
		const input = this.shadowRoot.querySelector( '[data-wc-counter-input]' );

		input.value = this._value;
	}

	/**
	 * Lifecycle Connected
	 */
	connectedCallback() {
		const up = this.shadowRoot.querySelector( '[data-wc-counter-up]' );
		const down = this.shadowRoot.querySelector( '[data-wc-counter-down]' );

		up.addEventListener( 'click', this.increment, false );
		down.addEventListener( 'click', this.decrement, false );

		this.update();
	}
}

customElements.define( 'wc-counter', Counter );
