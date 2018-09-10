import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const ressource = new SimpleSchema({
	firstName: {
        type: String,
        label: "First name",
        max: 50
    },
	lastName: {
        type: String,
        label: "Last name",
        max: 50
    },
	email: {
        type: String,
        //regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
	localization: {
        type: String,
        label: "Localisation",
        max: 50
    },
	job: {
        type: String,
        label: "Job title",
        max: 50
    },
	comment: {
        type: String,
        label: "Comment",
        max: 2048
    }
}, { tracker: Tracker });