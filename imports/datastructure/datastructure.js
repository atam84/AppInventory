import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';
import { _ } from 'underscore';


SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

import { project } from './project.js';
import { ressource } from './ressource.js';
import { job } from './job.js';
import { os } from './os.js';
import { env } from './env.js';
import { technology } from './technology.js';
import { application } from './application.js';
import { localization } from './localization.js';
import { server } from './server.js';


SimpleSchema.setDefaultMessages({
	messages: {
		en: {
			errDuplicate: "Duplicate unique field detected.",
		},
	},
});

export const dataStructure = {
	project: project,
	ressource: ressource,
	job: job,
	os: os,
	env: env,
	technology: technology,
	application: application,
	localization: localization,
	server: server
}

export const collections = {
	projects: new Mongo.Collection("projects"),
	ressources: new Mongo.Collection("humanRessources"),
	jobs: new Mongo.Collection("jobs"),
	os: new Mongo.Collection("operatingSystem"),
	envs: new Mongo.Collection("environnements"),
	technologies: new Mongo.Collection("technologies"),
	applications: new Mongo.Collection("applications"),
	localizations: new Mongo.Collection("localizations"),
	servers: new Mongo.Collection("servers")
}


collections.projects.attachSchema(dataStructure.project);
collections.ressources.attachSchema(dataStructure.ressource);
collections.jobs.attachSchema(dataStructure.job);
collections.os.attachSchema(dataStructure.os);
collections.envs.attachSchema(dataStructure.env);
collections.technologies.attachSchema(dataStructure.technology);
collections.applications.attachSchema(dataStructure.application);
collections.localizations.attachSchema(dataStructure.localization);
collections.servers.attachSchema(dataStructure.server);



_.each(collections, function(collectionObject, key) {
	console.log(collectionObject + '  -  ' + key);
	collections[key].allow({
		insert: function () { return true; },
		update: function () { return true; },
		remove: function () { return true; }
	});
});

if (Meteor.isServer) {
	Meteor.publish('projects', () => {
		return collections.projects.find({});
	});
	Meteor.publish('ressources', () => {
		return collections.ressources.find({});
	});
	Meteor.publish('jobs', () => {
		return collections.jobs.find({});
	});
	Meteor.publish('os', () => {
		return collections.os.find({});
	});
	Meteor.publish('envs', () => {
		return collections.envs.find({});
	});
	Meteor.publish('technologies', () => {
		return collections.technologies.find({});
	});
	Meteor.publish('applications', () => {
		return collections.applications.find({});
	});
	Meteor.publish('localizations', () => {
		return collections.localizations.find({});
	});
	Meteor.publish('servers', () => {
		return collections.servers.find({});
	});
}

if (Meteor.isClient) {
	Meteor.startup(() => {
		Tracker.autorun(() => {
			Meteor.subscribe('projects');
			Meteor.subscribe('ressources');
			Meteor.subscribe('jobs');
			Meteor.subscribe('os');
			Meteor.subscribe('envs');
			Meteor.subscribe('technologies');
			Meteor.subscribe('applications');
			Meteor.subscribe('localizations');
			Meteor.subscribe('servers');
		});
	});
}

console.log(' * loading datastruct : dataStruct.js');

