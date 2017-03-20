/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card-header-text';

const { Component } = Ember;

/**
 * @class PaperCardheaderText
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'md-card-header-text'
});
