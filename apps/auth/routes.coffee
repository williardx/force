@index = (req, res) ->
  res.render 'template'

@submitLogin = (req, res) ->
  res.send { success: true }