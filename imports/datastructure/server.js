import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const server = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50
	},
	ip: {
		type: String,
		//regEx: SimpleSchema.RegEx.IP,
		label: "IP"
	},
	hostname:  {
		type: String,
		label: "Hostname",
		max: 50
	},
	//alias: Array[String],
	type: {
		type: String,
		label: "Project",
		autoform: {
			options: function() {
				return [{label: "Virtual Machine", value: "vm"},
						{label: "Physical Machine", value: "server"},
						{label: "Container", value: "container"}
				]
			}
		}
	},
	os: {
		type: String,
		label: "Project",
		autoform: {
			options: function() {
				return [{label: "os001", value: "os001"},
						{label: "os002", value: "os002"},
						{label: "os003", value: "os003"}
				]
			}
		}
	},
	usage: {
		type: String,
		label: "Usage",
		autoform: {
			options: function() {
				return [{label: "developpement", value: "dev"},
						{label: "integration", value: "int"},
						{label: "production", value: "prod"},
						{label: "pre-production", value: "pprod"}
				]
			}
		}
	},
	localisation: {
		type: String,
		label: "Localisation",
		autoform: {
			options: function() {
				return [{label: "ici", value: "ici"},
						{label: "here", value: "here"}
				]
			}
		}
	},
	responsible: {
		type: String,
		label: "Responsible",
		autoform: {
			options: function() {
				return [{label: "ici", value: "ici"},
						{label: "here", value: "here"}
				]
			}
		}
	},
	ressources: {
		type: String
	},
	"ressources.$.cpu": {
		type: String,
		label: "CPU",
		max: 3
	},
	"ressources.$" : {
		type: Object,
	},
	"ressources.$.core": {
		type: String,
		label: "Core",
		max: 3
	},
	"ressources.$.memory:" : {
		type: String,
		label: "Memory",
		max: 10
	},
	"ressources.$.diskspace": {
		type: String,
		label: "Disks spaces",
		max: 10
	},
	commet: {
		type: String,
		label: "Comment",
		max: 255
	}
}, { tracker: Tracker });
