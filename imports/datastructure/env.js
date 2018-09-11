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
	},
	short_name: {
		type: String,
		label: "Short name",
		max: 5,
	},
	comment: {
		type: String,
		label: "Comment",
		max: 255
	},
	/*custom() {
		console.dir(this.field('name'));
		console.dir(this.field('short_name'));

		if(!this.field('name').value && !this.value) {
			return 'required';
		}
		// verification server side
		if(Meteor.isServer) {
			let targetCheck = collections.envs.findOne({name: this.field('name').value})
			if (this.isInsert) {
				if(targetCheck !== undefined) {
					console.log(this._id + ' => value ' + this.value + ' existe !!!');
					return 'errDuplicate';
				} else {
					return undefined;
				}
			}
			if (this.isUpdate) {
				if (targetCheck !== this._id) {
					console.log(this._id + ' => value ' + this.value + ' existe !!!');
					console.log('Attempt to modify existing document by existing unique field');
					return 'errDuplicate';
				} else {
					return undefined;
				}
			}
		}
	}*/
}, { tracker: Tracker });

env.addValidator(() => {
	console.dir(this.field('name'));
	console.dir(this.field('short_name'));

	if(!this.field('name').value && !this.value) {
		return 'required';
	}
	// verification server side
	if(Meteor.isServer) {
		let targetCheck = collections.envs.findOne({name: this.field('name').value})
		if (this.isInsert) {
			if(targetCheck !== undefined) {
				console.log(this._id + ' => value ' + this.value + ' existe !!!');
				return 'errDuplicate';
			} else {
				return undefined;
			}
		}
		if (this.isUpdate) {
			if (targetCheck !== this._id) {
				console.log(this._id + ' => value ' + this.value + ' existe !!!');
				console.log('Attempt to modify existing document by existing unique field');
				return 'errDuplicate';
			} else {
				return undefined;
			}
		}
	}
});

//



