import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const application = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50
	},
	ressources:  {
		type: String,
		label: "Human ressources",
		autoform: {
			options: function() {
				return [{label: "dev001", value: "dev001"}]
			}
		}
	},
	responsible:  {
		type: String,
		label: "Responsibles",
		autoform: {
			options: function() {
				return [{label: "cp001", value: "cp001"}]
			}
		}
	},
	technologie:  {
		type: String,
		label: "Technologies",
		autoform: {
			options: function() {
				return [{label: "tech001", value: "tech001"}]
			}
		}
	},
	project: {
		type: String,
		label: "Project",
		autoform: {
			options: function() {
				return [{label: "project001", value: "project001"}]
			}
		}
	},
	description: {
		type: String,
		label: "Description",
		max: 255
	},
	endoflife: {
		type: String,
		label: "End of life",
		max: 255,
		optional: true
	},
	comment:  {
		type: String,
		label: "Comment",
		max: 2048
	}
}, { tracker: Tracker });
