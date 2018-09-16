import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const technology = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50
	},
	shortForm: {
		type: String,
		label: "Short name",
		max: 5
	},
	versions: {
		type: Array,
		required: false,
		blackbox: true
	},
	'versions.$': {
		type: String,
		required: false,
		blackbox: true
	},
	info: {
		type: Object,
		required: false,
		blackbox: true
	},
	comment: {
		type: String,
		label: "Comment",
		max: 2048
	}
}, { tracker: Tracker });