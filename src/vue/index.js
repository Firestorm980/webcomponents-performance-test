import 'es6-object-assign/auto';
import Vue from 'vue';
import App from './components/App.vue';

new Vue( {
	render: h => h( App )
} ).$mount( '#root' );
