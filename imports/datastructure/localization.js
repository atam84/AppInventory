import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const localization = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50
	},
	commet: {
		type: String,
		label: "Comment",
		max: 255
	}
}, { tracker: Tracker });
