import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

export const project = new SimpleSchema({
    project: {
        type: String,
        label: 'Project name',
        max: 50,
        required: true
    },
    projectId: {
        type: String,
        label: 'Project ID',
        max: 8,
        required: true
    },
    projectCode: {
        type: String,
        label: 'Project code',
        max: 25,
        required: true
    },
    tags: {
        type: String,
        label: 'Tags',
        max: 255,
        required: true
	},
    startDate: {
        type: Date,
        label: 'Start date',
        required: false
    },
    endDate: {
        type: Date,
        label: 'End life',
        required: false
    },
    description: {
        type: String,
        label: 'Description',
        max: 255,
        required: false
    },
    comment: {
        type: String,
        label: 'Comment',
        max: 2048,
        required: false
    },
    info: {
		type: Object,
		required: false,
		blackbox: true
	},
}, { tracker: Tracker });