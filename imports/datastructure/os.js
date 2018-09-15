import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const os = new SimpleSchema({
	osType: {
		type: String,
		label: "Type",
		required: true,
		autoform : { 
			options: [
				{label: "Unix", value: "unix"}, 
				{label: "Linux", value: "linux"},
				{label: "Windows", value: "windows"}, 
				{label: "Android", value: "android"},
				{label: "IOS", value: "ios"}, 
				{label: "MacOS", value: "macos"}, 
				{label: "Other", value: "other"}
			]
		}
	},
	osName: {
		type: String,
		label: "Os",
		max: 50,
		required: true
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
		max: 2048,
		required: false
	}
}, { tracker: Tracker });