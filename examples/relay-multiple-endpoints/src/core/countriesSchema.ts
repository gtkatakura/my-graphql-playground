export const countriesSchema = `
    directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE

    enum CacheControlScope {
    PUBLIC
    PRIVATE
    }

    type Continent {
    code: ID!
    name: String!
    countries: [Country!]!
    }

    input ContinentFilterInput {
    code: StringQueryOperatorInput
    }

    type Country {
    code: ID!
    name: String!
    native: String!
    phone: String!
    continent: Continent!
    capital: String
    currency: String
    languages: [Language!]!
    emoji: String!
    emojiU: String!
    states: [State!]!
    }

    input CountryFilterInput {
    code: StringQueryOperatorInput
    currency: StringQueryOperatorInput
    continent: StringQueryOperatorInput
    }

    type Language {
    code: ID!
    name: String
    native: String
    rtl: Boolean!
    }

    input LanguageFilterInput {
    code: StringQueryOperatorInput
    }

    type Query {
    continents(filter: ContinentFilterInput): [Continent!]!
    continent(code: ID!): Continent
    countries(filter: CountryFilterInput): [Country!]!
    country(code: ID!): Country
    languages(filter: LanguageFilterInput): [Language!]!
    language(code: ID!): Language
    }

    type State {
    code: String
    name: String!
    country: Country!
    }

    input StringQueryOperatorInput {
    eq: String
    ne: String
    in: [String]
    nin: [String]
    regex: String
    glob: String
    }

    """The \`Upload\` scalar type represents a file upload."""
    scalar Upload



    # enum Language {
    #   af
    #   al
    #   ar
    #   az
    #   bg
    #   ca
    #   cz
    #   da
    #   de
    #   el
    #   en
    #   eu
    #   fa
    #   fi
    #   fr
    #   gl
    #   he
    #   hi
    #   hr
    #   hu
    #   id
    #   it
    #   ja
    #   kr
    #   la
    #   lt
    #   mk
    #   no
    #   nl
    #   pl
    #   pt
    #   pt_br
    #   ro
    #   ru
    #   sv
    #   se
    #   sk
    #   sl
    #   sp
    #   es
    #   sr
    #   th
    #   tr
    #   ua
    #   uk
    #   vi
    #   zh_cn
    #   zh_tw
    #   zu
    # }

    enum Unit {
    metric
    imperial
    kelvin
    }
`