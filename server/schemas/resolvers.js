const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedBooks')

                return userData
            }
            throw new AuthenticationError('Not logged in')
        },
        books: async(parent, {})
    }
}