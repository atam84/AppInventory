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
			console.dir(this.field('name'));
			console.dir(this.field('short_name'));
	
			if(!this.field('name').value && !this.value) {
				return 'required';
			}
			// verification server side
			if(Meteor.isServer) {
				let targetCheck = collections.envs.find({name: this.field('name').value}).fetch();
				if (targetCheck.lenght > 0) {
					if (this.isInsert) {
						return 'errDuplicate';
					}
					if (this.isUpdate) {
						if (targetCheck.lenght == 1) {
							return undefined;
						} else {
							return 'errDuplicate';
						}
					}
				} else {
					return undefined;
				}
			}
		}
	},
	short_name: {
		type: String,
		label: "Short name",
		max: 5,
	},
	set_color: {
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



