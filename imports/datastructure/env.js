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
		unique: true
		/*custom() {
			//console.dir(this.field('name').value);
			if(this.value === collections.envs.findOne({name: this.field('name').value}).name) {
				console.log('value ' + this.value + 'existe !!!');
				return "err";
			}
			return undefined;
		}*/
	},
	short_name: {
		type: String,
		label: "Short name",
		max: 5,
		unique: true
	},
	comment: {
		type: String,
		label: "Comment",
		max: 255
	},
}, { tracker: Tracker });



