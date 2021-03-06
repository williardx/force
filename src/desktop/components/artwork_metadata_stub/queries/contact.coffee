module.exports = """
  fragment artwork_metadata_stub_contact on Artwork {
    _id
    href
    is_inquireable
    is_acquireable
    sale {
      href
      is_auction
      is_closed
      is_live_open
      is_open
      is_preview
    }
    sale_artwork {
      highest_bid {
        display
      }
      opening_bid {
        display
      }
      counts {
        bidder_positions
      }
    }
    partner(shallow: true) {
      type
      href
    }
  }
"""
