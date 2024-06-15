import { decodeEntities } from '@wordpress/html-entities';
const { registerPaymentMethod } = window.wc.wcBlocksRegistry
const { getSetting } = window.wc.wcSettings
const settings = getSetting( 'thawani_gw_data', {} );

const label = decodeEntities( settings.title )

const Content = () => {
	return decodeEntities( settings.description || 'tghis is description' )
}

const Label = ( props ) => {
	const { PaymentMethodLabel } = props.components
	return <PaymentMethodLabel text={ label } />
}

registerPaymentMethod( {
	name: "thawani_gw",
	label: <Label />,
	content: <Content />,
	edit: <Content />,
	canMakePayment: () => true,
	ariaLabel: label,
	supports: {
		features: settings.supports,
	}
} )
