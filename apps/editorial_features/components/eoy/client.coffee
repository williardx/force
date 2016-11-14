_ = require 'underscore'
Backbone = require 'backbone'

module.exports.EoyView = class EoyView extends Backbone.View

  initialize: ->
    $('.scroller__items section').attr('data-state', 'closed')
    @windowHeight = $(window).scrollTop()
    @setupSliderHeight()
    @getScrollZones()
    @trackDirection()
    @watchWindow()
    $('.scroller').fadeIn(500)

  watchWindow: =>
    $(window).scroll () =>
      _.debounce @trackDirection(), 50
    $(window).resize () =>
      @setupSliderHeight()

  getScrollZones: =>
    @scrollZones = []
    @scrollZones.push @firstHeight
    for i in [1..($('.scroller__items section').length - 1)]
      @scrollZones.push( (i * @activeHeight) + @firstHeight )
    return @scrollZones

  closestSection: (scrollTop) =>
    scrollZones = @getScrollZones()
    closest = Math.max.apply(null, scrollZones)
    for i in [0..scrollZones.length + 1]
      if scrollZones[i] >= scrollTop and scrollZones[i] < closest
        closest = i
    return closest

  trackDirection: =>
    scrollTop = $(window).scrollTop()
    if scrollTop == 0
      $('.scroller__items section[data-section!="0"]').attr('data-state', 'closed')
      $('.scroller__items section[data-section="0"]').attr('data-state', 'open').height(@firstHeight)
    else if scrollTop > @windowHeight
      #downscrolling
      @doSlider(scrollTop)
    else
    #upscrolling
      @doSlider(scrollTop)
    @windowHeight = scrollTop

  setupSliderHeight: =>
    #height of bounding box / title section
    @firstHeight = $(window).height() - 75 - 20
    #height of one section open
    @activeHeight = $(window).height() - 75 - ($(window).height() * .33)
    #bottom scroll border of header content
    @openHeight = (($('.scroller__items section').length - 1) * @activeHeight) - 20 - 75 + @firstHeight
    $('.eoy-feature__content').height(@openHeight)
    $('.scroller__items section').first().height(@firstHeight)
    $('.scroller__items section[data-section!="0"][data-state="open"]').css('max-height', @activeHeight)

  doSlider: (scrollTop) =>
    active = @closestSection(scrollTop)
    $primarySection = $('.scroller__items section[data-section="' + active + '"]').attr('data-state', 'open')
    nextHeight = @firstHeight - $primarySection.height() - @activeHeight
    diff = @getScrollZones()[active] - scrollTop
    if active < 1
      $primarySection.height(diff)
      if scrollTop < @activeHeight
        $primarySection.next().attr('data-state', 'open').height(scrollTop)
        $primarySection.next().next().attr('data-state', 'closed')
      else
        $primarySection.next().attr('data-state', 'open').height(@activeHeight)
        $primarySection.next().next().attr('data-state', 'open').height(nextHeight)
    else
      $primarySection.prev().attr('data-state', 'closed')
      $primarySection.height(diff)
      if diff + @activeHeight < @firstHeight
        $primarySection.next().attr('data-state', 'open').height(@activeHeight)
        $primarySection.next().next().attr('data-state', 'open').height(nextHeight)
      else
        $primarySection.next().height(@firstHeight - diff)
        $primarySection.next().next().attr('data-state', 'closed')

module.exports.init = ->
  new EoyView