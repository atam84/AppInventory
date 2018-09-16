import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const ressource = new SimpleSchema({
	firstName: {
        type: String,
        label: "First name",
        max: 50,
        required: true
    },
	lastName: {
        type: String,
        label: "Last name",
        max: 50,
        required: true
    },
	email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address",
        required: true
    },
	localization: {
        type: String,
        label: "Localisation",
        max: 50,
        required: true
    },
	job: {
        type: String,
        label: "Job title",
        max: 50,
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