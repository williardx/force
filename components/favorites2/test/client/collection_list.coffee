_ = require 'underscore'
benv = require 'benv'
sinon = require 'sinon'
Backbone = require 'backbone'
CurrentUser = require '../../../../models/current_user'
{ stubChildClasses } = require '../../../../test/helpers/stubs'
{ fabricate } = require 'antigravity'
{ resolve } = require 'path'
{ ArtworkCollection } = ArtworkCollections = require '../../../../collections/artwork_collections.coffee'

describe 'CollectionList', ->

  beforeEach (done) ->
    benv.setup =>
      benv.expose { $: benv.require 'jquery' }
      Backbone.$ = $
      sinon.stub Backbone, 'sync'
      user = new CurrentUser id: 'craig'
      collections = new ArtworkCollections [{ id: 'cat-portraits' }], { user: user }
      benv.render resolve(__dirname, '../../templates/collection_list.jade'), {
        sd: {}
        collections: collections.models
      }, =>
        CollectionList = benv.require resolve(__dirname, '../../client/collection_list')
        @view = new CollectionList
          el: $('body')
          user: user
          collections: collections
          artwork: new Backbone.Model fabricate 'artwork'
          collection: new ArtworkCollection { id: 'saved-artwork' }, user_id: user
        done()

  afterEach ->
    benv.teardown()
    Backbone.sync.restore()

  describe '#moveArtwork', ->

    it 'removes it from the current set and adds it to another', ->
      @view.moveArtwork { currentTarget: $('li').first() }
      Backbone.sync.args[0][0].should.equal 'delete'
      Backbone.sync.args[0][2].url.should.include '/collection/saved-artwork/artwork'
      Backbone.sync.args[1][0].should.equal 'create'
      Backbone.sync.args[1][2].url.should.include '/collection/cat-portraits/artwork'

  describe '#newCollection', ->

    it 'creates a new collection and moved the artwork to it', ->
      @view.$('.favorites2-collection-list-create input').val('Foo Bar')
      @view.newCollection()
      _.last(Backbone.sync.args)[0].should.equal 'create'
      _.last(Backbone.sync.args)[2].url.should
        .include 'collection/cat-portraits/artwork/skull'