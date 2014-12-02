// Create task collection
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // Only runs on client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });
}