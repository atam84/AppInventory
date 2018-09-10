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
	short_name: {
		type: String,
		label: "Short name",
		max: 5
	},
	comment: {
		type: String,
		label: "Comment",
		max: 2048
	}
}, { tracker: Tracker });