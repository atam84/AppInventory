import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const job = new SimpleSchema({
	job_title: {
		type: String,
		label: "Job name",
		max: 50
	},
	short_job_title: {
		type: String,
		label: "Short job name",
		max: 8
	},
	comment: {
        type: String,
        label: "Comment",
        max: 2048
    }
}, { tracker: Tracker });
