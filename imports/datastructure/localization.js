import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const localization = new SimpleSchema({
	label: {
		type: String,
		label: "Name",
		max: 50,
		required: true
	},
	address: {
		type: String,
		label: "Address",
		max: 500,
		required: false
	},
	comment: {
		type: String,
		label: "Comment",
		max: 255,
		required: false
	},
	info: {
		type: Object,
		required: false,
		blackbox: true
	},
}, { tracker: Tracker });
