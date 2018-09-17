import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const server = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50,
		required: true
	},
	ip: {
		type: String,
		regEx: SimpleSchema.RegEx.IP,
		label: "IP",
		required: true
	},
	hostname:  {
		type: String,
		label: "Hostname",
		max: 50,
		required: true
	},
	//alias: Array[String],
	type: {
		type: String,
		label: "Type",
		autoform: {
			options: function() {
				return 
			}
		}
	},
	os: {
		type: String,
		label: "Os",
		required: true
	},
	osVersion: {
		type: String,
		label: "Os version",
		required: true,
	},
	usage: {
		type: Array,
		label: "Usage",
		required: true
	},
	'usage.$': {
		type: String
	},
	localization: {
		type: String,
		label: "Localisation",
		required: false
	},
	responsible: {
		type: String,
		label: "Responsible",
		required: false
	},
	ressources: {
		type: Object,
		required: false
	},
	'ressources.cpu': {
		type: Number,
		label: "CPU",
	},
	'ressources.core': {
		type: Number,
		label: "Core",
	},
	'ressources.memory' : {
		type: Number,
		label: "Memory (GB)",
	},
	'ressources.diskspace': {
		type: Number,
		label: "Disks spaces (GB)",
	},
	comment: {
		type: String,
		label: "Comment",
		max: 255
	},
	info: {
		type: Object,
		required: false,
		blackbox: true
	}
}, { tracker: Tracker });
