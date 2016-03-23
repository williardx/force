module.exports = """
  fragment images on Artwork {
    images {
      id
      url(version: ["larger", "large"])
      placeholder: resized(width: 30, height: 30, version: "small") {
        url
      }
    }
  }
"""
