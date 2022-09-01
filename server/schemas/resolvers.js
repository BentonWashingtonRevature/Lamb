const { AuthenticationError } = require('apollo-server-express');
const { Request, Category, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('requests');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('requests');
        },

        requests: async () => {
            return await Request.find({});
        },

    },

    Mutation: {
        login: async (parent, { email, password }) => {
            console.log(email, password);
            const user = await User.findOne({ email });
            

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            

            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            console.log(username, email, password);
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        deleteUser: async (parent, { }) => {
            return await User.findByIdAndDelete({ _id: userId })
        },
        addRequest: async (parent, { title, description, details, }, context) => {
            if (context.user) {
                const request = await Request.create({
                    title,
                    description,
                    details,
                    requestAuthor: context.user.username,
            
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { requests: request._id } }
                );

                return request;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateRequest: async (parent, { description, details }, context) => {
            if (context.user) {
                const request = await Request.findByIdAndUpdate(
                    { description },
                    { details },
                    { new: true }
                );

                return request;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteRequest: async (parent, { requestId }, context) => {
            if (context.user) {
                const request = await Request.findOneAndDelete({
                    _id: requestId,
                    requestAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { requests: request._id } }
                );

                return request;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;