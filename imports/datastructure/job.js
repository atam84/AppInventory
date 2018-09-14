import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const job = new SimpleSchema({
	jobTitle: {
		type: String,
		label: "Job name",
		max: 50,
		required: true
	},
	shortForm: {
		type: String,
		label: "Short job name",
		max: 8,
		required: true
	},
	comment: {
        type: String,
        label: "Comment",
		max: 2048,
		required: false
	},
	info: {
		type: Object,
		required: false,
		blackbox: true
	},
}, { tracker: Tracker });
