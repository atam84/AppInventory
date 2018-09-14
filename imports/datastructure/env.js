import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';
import { collections } from './datastructure.js';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const env = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50,
		custom() {
			if(!this.field('name').value && !this.value) {
				return 'required';
			}
			if(Meteor.isServer) {
				let targetCheck = collections.envs.find({name: this.field('name').value}).fetch();
				if (targetCheck.lenght > 0) {
					if (this.isInsert) {
						return 'errDuplicate';
					} else if (this.isUpdate) {
						if (targetCheck.lenght == 1) {
							return undefined;
						} else {
							return 'errDuplicate';
						}
					} else {
						return undefined;
					}
				} else {
					return undefined;
				}
			}
		}
	},
	shortForm: {
		type: String,
		label: "Short name",
		max: 5,
	},
	setColor: {
		type: String,
		label: "Define background color",
		required: false,
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
	},
}, { tracker: Tracker });



