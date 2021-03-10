'use strict';

var DEFAULT_METHOD = '__graphql';
var DEFAULT_PUBLICATION = '__graphql-subscriptions';
var DEFAULT_SUBSCRIPTION_ID_KEY = 'subscriptionId';
var DEFAULT_CLIENT_CONTEXT_KEY = 'ddpContext';
var GRAPHQL_SUBSCRIPTION_MESSAGE_TYPE = 'graphql-sub-message';
var DEFAULT_PATH = '/graphql';
var DEFAULT_CREATE_CONTEXT = function DEFAULT_CREATE_CONTEXT(context) {
  return context;
};

var defaults = {
  DEFAULT_CLIENT_CONTEXT_KEY: DEFAULT_CLIENT_CONTEXT_KEY,
  DEFAULT_CREATE_CONTEXT: DEFAULT_CREATE_CONTEXT,
  DEFAULT_METHOD: DEFAULT_METHOD,
  DEFAULT_PATH: DEFAULT_PATH,
  DEFAULT_PUBLICATION: DEFAULT_PUBLICATION,
  DEFAULT_SUBSCRIPTION_ID_KEY: DEFAULT_SUBSCRIPTION_ID_KEY,
  GRAPHQL_SUBSCRIPTION_MESSAGE_TYPE: GRAPHQL_SUBSCRIPTION_MESSAGE_TYPE
};

module.exports = defaults;