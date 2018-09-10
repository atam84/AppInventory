import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const os = new SimpleSchema({
	os_name: {
        type: String,
        label: "Type",
        autoform : { 
			options: [
				{label: "Unix", value: "Unix"}, 
				{label: "Linux", value: "Linux"},
				{label: "Windows", value: "Windows"}, 
				{label: "Android", value: "Android"},
				{label: "IOS", value: "IOS"}, 
				{label: "MacOS", value: "MacOS"}, 
				{label: "Other", value: "Other"}
			]
		}
	},
	os_name: {
        type: String,
        label: "Os",
        max: 50
	},
	version: {
		type: String,
		label: "Version",
		max: 50
	},
	commet: {
        type: String,
        label: "Comment",
        max: 2048
    }
}, { tracker: Tracker });