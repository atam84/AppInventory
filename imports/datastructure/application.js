import { Tracker } from "meteor/tracker"
import SimpleSchema from "simpl-schema"
import { _ } from 'underscore'
//import { optionSelectRessources } from "../api/client/selectors"


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
		required: false
		/*autoform: {
			options: function() {
				return optionSelectRessources();
			}
		}*/
	},
	responsible:  {
		type: String,
		label: "Responsibles",
		required: false,
		autoform: {
			options: function() {
				return [{label: "cp001", value: "cp001"}]
			}
		}
	},
	technologie:  {
		type: String,
		label: "Technologies",
		required: false,
		autoform: {
			options: function() {
				return [{label: "tech001", value: "tech001"}]
			}
		}
	},
	project: {
		type: String,
		label: "Project",
		required: true
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
	info: {
		type: Object,
		required: false,
		blackbox: true
	},
	comment:  {
		type: String,
		label: "Comment",
		max: 2048
	}
}, { tracker: Tracker });
