/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FeatureApp_Test_QueryVariables = {
    slug: string;
};
export type FeatureApp_Test_QueryResponse = {
    readonly feature: {
        readonly " $fragmentRefs": FragmentRefs<"FeatureApp_feature">;
    } | null;
};
export type FeatureApp_Test_QueryRawResponse = {
    readonly feature: ({
        readonly name: string;
        readonly slug: string;
        readonly metaDescription: string | null;
        readonly image: ({
            readonly url: string | null;
            readonly cropped: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly subheadline: string | null;
        readonly description: string | null;
        readonly callout: string | null;
        readonly sets: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                    readonly name: string | null;
                    readonly description: string | null;
                    readonly itemType: string | null;
                    readonly orderedItems: {
                        readonly edges: ReadonlyArray<({
                            readonly node: ({
                                readonly __typename: "FeaturedLink";
                                readonly id: string | null;
                                readonly href: string | null;
                                readonly title: string | null;
                                readonly subtitle: string | null;
                                readonly description: string | null;
                                readonly image: ({
                                    readonly small: ({
                                        readonly src: string | null;
                                        readonly width: number | null;
                                        readonly height: number | null;
                                    }) | null;
                                    readonly medium: ({
                                        readonly src: string | null;
                                        readonly width: number | null;
                                        readonly height: number | null;
                                    }) | null;
                                    readonly large: ({
                                        readonly src: string | null;
                                        readonly width: number | null;
                                        readonly height: number | null;
                                    }) | null;
                                }) | null;
                            } | {
                                readonly __typename: "Artwork";
                                readonly id: string | null;
                                readonly internalID: string;
                                readonly title: string | null;
                                readonly image_title: string | null;
                                readonly image: ({
                                    readonly placeholder: string | null;
                                    readonly url: string | null;
                                    readonly aspect_ratio: number;
                                }) | null;
                                readonly href: string | null;
                                readonly date: string | null;
                                readonly sale_message: string | null;
                                readonly cultural_maker: string | null;
                                readonly artists: ReadonlyArray<({
                                    readonly id: string;
                                    readonly href: string | null;
                                    readonly name: string | null;
                                }) | null> | null;
                                readonly collecting_institution: string | null;
                                readonly partner: ({
                                    readonly name: string | null;
                                    readonly href: string | null;
                                    readonly id: string | null;
                                    readonly type: string | null;
                                }) | null;
                                readonly sale: ({
                                    readonly is_auction: boolean | null;
                                    readonly is_closed: boolean | null;
                                    readonly id: string | null;
                                    readonly is_live_open: boolean | null;
                                    readonly is_open: boolean | null;
                                    readonly is_preview: boolean | null;
                                    readonly display_timely_at: string | null;
                                }) | null;
                                readonly sale_artwork: ({
                                    readonly counts: ({
                                        readonly bidder_positions: number | null;
                                    }) | null;
                                    readonly highest_bid: ({
                                        readonly display: string | null;
                                    }) | null;
                                    readonly opening_bid: ({
                                        readonly display: string | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null;
                                readonly is_inquireable: boolean | null;
                                readonly slug: string;
                                readonly is_saved: boolean | null;
                                readonly is_biddable: boolean | null;
                                readonly is_acquireable: boolean | null;
                                readonly is_offerable: boolean | null;
                            } | {
                                readonly __typename: string;
                                readonly id: string | null;
                            }) | null;
                        }) | null> | null;
                    };
                }) | null;
            }) | null> | null;
        }) | null;
        readonly id: string | null;
    }) | null;
};
export type FeatureApp_Test_Query = {
    readonly response: FeatureApp_Test_QueryResponse;
    readonly variables: FeatureApp_Test_QueryVariables;
    readonly rawResponse: FeatureApp_Test_QueryRawResponse;
};



/*
query FeatureApp_Test_Query(
  $slug: ID!
) {
  feature(id: $slug) {
    ...FeatureApp_feature
    id
  }
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment FeatureApp_feature on Feature {
  ...FeatureMeta_feature
  ...FeatureHeader_feature
  description(format: HTML)
  callout(format: HTML)
  sets: setsConnection(first: 20) {
    edges {
      node {
        id
        ...FeatureSet_set
      }
    }
  }
}

fragment FeatureFeaturedLink_featuredLink on FeaturedLink {
  href
  title
  subtitle(format: HTML)
  description(format: HTML)
  image {
    small: cropped(width: 800, height: 1000, version: ["wide"]) {
      src: url
      width
      height
    }
    medium: cropped(width: 1092, height: 1365, version: ["wide"]) {
      src: url
      width
      height
    }
    large: cropped(width: 2224, height: 1252, version: ["wide"]) {
      src: url
      width
      height
    }
  }
}

fragment FeatureHeader_feature on Feature {
  name
  subheadline(format: HTML)
  image {
    cropped(width: 2000, height: 2000, version: "source") {
      url
    }
  }
}

fragment FeatureMeta_feature on Feature {
  name
  slug
  metaDescription: description(format: PLAIN)
  image {
    url(version: "large_rectangle")
  }
}

fragment FeatureSet_set on OrderedSet {
  id
  name
  description(format: HTML)
  itemType
  orderedItems: orderedItemsConnection(first: 20) {
    edges {
      node {
        __typename
        ... on FeaturedLink {
          id
        }
        ... on Artwork {
          id
        }
        ...GridItem_artwork
        ...FeatureFeaturedLink_featuredLink
        ... on Node {
          id
        }
      }
    }
  }
}

fragment GridItem_artwork on Artwork {
  internalID
  title
  image_title: imageTitle
  image {
    placeholder
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "HTML"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": (v4/*: any*/),
  "storageKey": "description(format:\"HTML\")"
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "Literal",
  "name": "version",
  "value": [
    "wide"
  ]
},
v11 = [
  {
    "kind": "ScalarField",
    "alias": "src",
    "name": "url",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "width",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "height",
    "args": null,
    "storageKey": null
  }
],
v12 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v13 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FeatureApp_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "feature",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Feature",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FeatureApp_feature",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FeatureApp_Test_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "feature",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Feature",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "metaDescription",
            "name": "description",
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "PLAIN"
              }
            ],
            "storageKey": "description(format:\"PLAIN\")"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "large_rectangle"
                  }
                ],
                "storageKey": "url(version:\"large_rectangle\")"
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cropped",
                "storageKey": "cropped(height:2000,version:\"source\",width:2000)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 2000
                  },
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "source"
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 2000
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "subheadline",
            "args": (v4/*: any*/),
            "storageKey": "subheadline(format:\"HTML\")"
          },
          (v5/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "callout",
            "args": (v4/*: any*/),
            "storageKey": "callout(format:\"HTML\")"
          },
          {
            "kind": "LinkedField",
            "alias": "sets",
            "name": "setsConnection",
            "storageKey": "setsConnection(first:20)",
            "args": (v6/*: any*/),
            "concreteType": "OrderedSetConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "OrderedSetEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OrderedSet",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "itemType",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "orderedItems",
                        "name": "orderedItemsConnection",
                        "storageKey": "orderedItemsConnection(first:20)",
                        "args": (v6/*: any*/),
                        "concreteType": "OrderedSetItemConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "OrderedSetItemEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": null,
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "__typename",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v7/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "type": "FeaturedLink",
                                    "selections": [
                                      (v8/*: any*/),
                                      (v9/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "subtitle",
                                        "args": (v4/*: any*/),
                                        "storageKey": "subtitle(format:\"HTML\")"
                                      },
                                      (v5/*: any*/),
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "image",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Image",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": "small",
                                            "name": "cropped",
                                            "storageKey": "cropped(height:1000,version:[\"wide\"],width:800)",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "height",
                                                "value": 1000
                                              },
                                              (v10/*: any*/),
                                              {
                                                "kind": "Literal",
                                                "name": "width",
                                                "value": 800
                                              }
                                            ],
                                            "concreteType": "CroppedImageUrl",
                                            "plural": false,
                                            "selections": (v11/*: any*/)
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": "medium",
                                            "name": "cropped",
                                            "storageKey": "cropped(height:1365,version:[\"wide\"],width:1092)",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "height",
                                                "value": 1365
                                              },
                                              (v10/*: any*/),
                                              {
                                                "kind": "Literal",
                                                "name": "width",
                                                "value": 1092
                                              }
                                            ],
                                            "concreteType": "CroppedImageUrl",
                                            "plural": false,
                                            "selections": (v11/*: any*/)
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": "large",
                                            "name": "cropped",
                                            "storageKey": "cropped(height:1252,version:[\"wide\"],width:2224)",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "height",
                                                "value": 1252
                                              },
                                              (v10/*: any*/),
                                              {
                                                "kind": "Literal",
                                                "name": "width",
                                                "value": 2224
                                              }
                                            ],
                                            "concreteType": "CroppedImageUrl",
                                            "plural": false,
                                            "selections": (v11/*: any*/)
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "type": "Artwork",
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "internalID",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v9/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": "image_title",
                                        "name": "imageTitle",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "image",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Image",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "placeholder",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "url",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "version",
                                                "value": "large"
                                              }
                                            ],
                                            "storageKey": "url(version:\"large\")"
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "aspect_ratio",
                                            "name": "aspectRatio",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      (v8/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "date",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "sale_message",
                                        "name": "saleMessage",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "cultural_maker",
                                        "name": "culturalMaker",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "artists",
                                        "storageKey": "artists(shallow:true)",
                                        "args": (v12/*: any*/),
                                        "concreteType": "Artist",
                                        "plural": true,
                                        "selections": [
                                          (v7/*: any*/),
                                          (v8/*: any*/),
                                          (v2/*: any*/)
                                        ]
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "collecting_institution",
                                        "name": "collectingInstitution",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "partner",
                                        "storageKey": "partner(shallow:true)",
                                        "args": (v12/*: any*/),
                                        "concreteType": "Partner",
                                        "plural": false,
                                        "selections": [
                                          (v2/*: any*/),
                                          (v8/*: any*/),
                                          (v7/*: any*/),
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "type",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "sale",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Sale",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_auction",
                                            "name": "isAuction",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_closed",
                                            "name": "isClosed",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          (v7/*: any*/),
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_live_open",
                                            "name": "isLiveOpen",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_open",
                                            "name": "isOpen",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_preview",
                                            "name": "isPreview",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "display_timely_at",
                                            "name": "displayTimelyAt",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": "sale_artwork",
                                        "name": "saleArtwork",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "SaleArtwork",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "counts",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkCounts",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": "bidder_positions",
                                                "name": "bidderPositions",
                                                "args": null,
                                                "storageKey": null
                                              }
                                            ]
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": "highest_bid",
                                            "name": "highestBid",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkHighestBid",
                                            "plural": false,
                                            "selections": (v13/*: any*/)
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": "opening_bid",
                                            "name": "openingBid",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkOpeningBid",
                                            "plural": false,
                                            "selections": (v13/*: any*/)
                                          },
                                          (v7/*: any*/)
                                        ]
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_inquireable",
                                        "name": "isInquireable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v3/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_saved",
                                        "name": "isSaved",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_biddable",
                                        "name": "isBiddable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_acquireable",
                                        "name": "isAcquireable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_offerable",
                                        "name": "isOfferable",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v7/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FeatureApp_Test_Query",
    "id": null,
    "text": "query FeatureApp_Test_Query(\n  $slug: ID!\n) {\n  feature(id: $slug) {\n    ...FeatureApp_feature\n    id\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FeatureApp_feature on Feature {\n  ...FeatureMeta_feature\n  ...FeatureHeader_feature\n  description(format: HTML)\n  callout(format: HTML)\n  sets: setsConnection(first: 20) {\n    edges {\n      node {\n        id\n        ...FeatureSet_set\n      }\n    }\n  }\n}\n\nfragment FeatureFeaturedLink_featuredLink on FeaturedLink {\n  href\n  title\n  subtitle(format: HTML)\n  description(format: HTML)\n  image {\n    small: cropped(width: 800, height: 1000, version: [\"wide\"]) {\n      src: url\n      width\n      height\n    }\n    medium: cropped(width: 1092, height: 1365, version: [\"wide\"]) {\n      src: url\n      width\n      height\n    }\n    large: cropped(width: 2224, height: 1252, version: [\"wide\"]) {\n      src: url\n      width\n      height\n    }\n  }\n}\n\nfragment FeatureHeader_feature on Feature {\n  name\n  subheadline(format: HTML)\n  image {\n    cropped(width: 2000, height: 2000, version: \"source\") {\n      url\n    }\n  }\n}\n\nfragment FeatureMeta_feature on Feature {\n  name\n  slug\n  metaDescription: description(format: PLAIN)\n  image {\n    url(version: \"large_rectangle\")\n  }\n}\n\nfragment FeatureSet_set on OrderedSet {\n  id\n  name\n  description(format: HTML)\n  itemType\n  orderedItems: orderedItemsConnection(first: 20) {\n    edges {\n      node {\n        __typename\n        ... on FeaturedLink {\n          id\n        }\n        ... on Artwork {\n          id\n        }\n        ...GridItem_artwork\n        ...FeatureFeaturedLink_featuredLink\n        ... on Node {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  internalID\n  title\n  image_title: imageTitle\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f39dc1e9525921a755f1c2e1b893837f';
export default node;
