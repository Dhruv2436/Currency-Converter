const countryList = {
  AED: "AE", // United Arab Emirates Dirham
  AFN: "AF", // Afghanistan Afghani
  ALL: "AL", // Albania Lek
  AMD: "AM", // Armenia Dram
  ANG: "NL", // Netherlands Antillean Guilder (used in Curaçao & Sint Maarten)
  AOA: "AO", // Angola Kwanza
  ARS: "AR", // Argentina Peso
  AUD: "AU", // Australia Dollar
  AWG: "AW", // Aruba Florin
  AZN: "AZ", // Azerbaijan Manat
  BAM: "BA", // Bosnia and Herzegovina Convertible Mark
  BBD: "BB", // Barbados Dollar
  BDT: "BD", // Bangladesh Taka
  BGN: "BG", // Bulgaria Lev
  BHD: "BH", // Bahrain Dinar
  BIF: "BI", // Burundi Franc
  BMD: "BM", // Bermuda Dollar
  BND: "BN", // Brunei Darussalam Dollar
  BOB: "BO", // Bolivia Boliviano
  BRL: "BR", // Brazil Real
  BSD: "BS", // Bahamas Dollar
  BTN: "BT", // Bhutan Ngultrum
  BWP: "BW", // Botswana Pula
  BYN: "BY", // Belarus Ruble
  BZD: "BZ", // Belize Dollar
  CAD: "CA", // Canada Dollar
  CDF: "CD", // Congo Franc
  CHF: "CH", // Switzerland Franc
  CLP: "CL", // Chile Peso
  CNY: "CN", // China Yuan Renminbi
  COP: "CO", // Colombia Peso
  CRC: "CR", // Costa Rica Colon
  CUP: "CU", // Cuba Peso
  CVE: "CV", // Cabo Verde Escudo
  CZK: "CZ", // Czechia Koruna
  DJF: "DJ", // Djibouti Franc
  DKK: "DK", // Denmark Krone
  DOP: "DO", // Dominican Republic Peso
  DZD: "DZ", // Algeria Dinar
  EGP: "EG", // Egypt Pound
  ERN: "ER", // Eritrea Nakfa
  ETB: "ET", // Ethiopia Birr
  EUR: "EU", // European Union Euro
  FJD: "FJ", // Fiji Dollar
  FKP: "FK", // Falkland Islands Pound
  FOK: "FO", // Faroe Islands Króna
  GBP: "GB", // United Kingdom Pound
  GEL: "GE", // Georgia Lari
  GGP: "GG", // Guernsey Pound
  GHS: "GH", // Ghana Cedi
  GIP: "GI", // Gibraltar Pound
  GMD: "GM", // Gambia Dalasi
  GNF: "GN", // Guinea Franc
  GTQ: "GT", // Guatemala Quetzal
  GYD: "GY", // Guyana Dollar
  HKD: "HK", // Hong Kong Dollar
  HNL: "HN", // Honduras Lempira
  HRK: "HR", // Croatia Kuna
  HTG: "HT", // Haiti Gourde
  HUF: "HU", // Hungary Forint
  IDR: "ID", // Indonesia Rupiah
  ILS: "IL", // Israel Shekel
  IMP: "IM", // Isle of Man Pound
  INR: "IN", // India Rupee
  IQD: "IQ", // Iraq Dinar
  IRR: "IR", // Iran Rial
  ISK: "IS", // Iceland Krona
  JEP: "JE", // Jersey Pound
  JMD: "JM", // Jamaica Dollar
  JOD: "JO", // Jordan Dinar
  JPY: "JP", // Japan Yen
  KES: "KE", // Kenya Shilling
  KGS: "KG", // Kyrgyzstan Som
  KHR: "KH", // Cambodia Riel
  KID: "KI", // Kiribati Dollar
  KMF: "KM", // Comoros Franc
  KRW: "KR", // Korea (South) Won
  KWD: "KW", // Kuwait Dinar
  KYD: "KY", // Cayman Islands Dollar
  KZT: "KZ", // Kazakhstan Tenge
  LAK: "LA", // Lao Kip
  LBP: "LB", // Lebanon Pound
  LKR: "LK", // Sri Lanka Rupee
  LRD: "LR", // Liberia Dollar
  LSL: "LS", // Lesotho Loti
  LYD: "LY", // Libya Dinar
  MAD: "MA", // Morocco Dirham
  MDL: "MD", // Moldova Leu
  MGA: "MG", // Madagascar Ariary
  MKD: "MK", // North Macedonia Denar
  MMK: "MM", // Myanmar Kyat
  MNT: "MN", // Mongolia Tugrik
  MOP: "MO", // Macao Pataca
  MRU: "MR", // Mauritania Ouguiya
  MUR: "MU", // Mauritius Rupee
  MVR: "MV", // Maldives Rufiyaa
  MWK: "MW", // Malawi Kwacha
  MXN: "MX", // Mexico Peso
  MYR: "MY", // Malaysia Ringgit
  MZN: "MZ", // Mozambique Metical
  NAD: "NA", // Namibia Dollar
  NGN: "NG", // Nigeria Naira
  NIO: "NI", // Nicaragua Cordoba
  NOK: "NO", // Norway Krone
  NPR: "NP", // Nepal Rupee
  NZD: "NZ", // New Zealand Dollar
  OMR: "OM", // Oman Rial
  PAB: "PA", // Panama Balboa
  PEN: "PE", // Peru Sol
  PGK: "PG", // Papua New Guinea Kina
  PHP: "PH", // Philippines Peso
  PKR: "PK", // Pakistan Rupee
  PLN: "PL", // Poland Zloty
  PYG: "PY", // Paraguay Guarani
  QAR: "QA", // Qatar Riyal
  RON: "RO", // Romania Leu
  RSD: "RS", // Serbia Dinar
  RUB: "RU", // Russia Ruble
  RWF: "RW", // Rwanda Franc
  SAR: "SA", // Saudi Arabia Riyal
  SBD: "SB", // Solomon Islands Dollar
  SCR: "SC", // Seychelles Rupee
  SDG: "SD", // Sudan Pound
  SEK: "SE", // Sweden Krona
  SGD: "SG", // Singapore Dollar
  SHP: "SH", // Saint Helena Pound
  SLE: "SL", // Sierra Leone Leone
  SOS: "SO", // Somalia Shilling
  SRD: "SR", // Suriname Dollar
  SSP: "SS", // South Sudan Pound
  STN: "ST", // São Tomé and Príncipe Dobra
  SYP: "SY", // Syrian Pound
  SZL: "SZ", // Eswatini Lilangeni
  THB: "TH", // Thailand Baht
  TJS: "TJ", // Tajikistan Somoni
  TMT: "TM", // Turkmenistan Manat
  TND: "TN", // Tunisia Dinar
  TOP: "TO", // Tonga Paʻanga
  TRY: "TR", // Türkiye Lira
  TTD: "TT", // Trinidad and Tobago Dollar
  TVD: "TV", // Tuvalu Dollar
  TWD: "TW", // Taiwan Dollar
  TZS: "TZ", // Tanzania Shilling
  UAH: "UA", // Ukraine Hryvnia
  UGX: "UG", // Uganda Shilling
  USD: "US", // United States Dollar
  UYU: "UY", // Uruguay Peso
  UZS: "UZ", // Uzbekistan Som
  VES: "VE", // Venezuela Bolívar
  VND: "VN", // Viet Nam Dong
  VUV: "VU", // Vanuatu Vatu
  WST: "WS", // Samoa Tala
  XAF: "CM", // Central African CFA Franc (multiple countries use it)
  XCD: "AG", // East Caribbean Dollar (multiple Caribbean nations use it)
  XOF: "SN", // West African CFA Franc (multiple countries use it)
  XPF: "PF", // CFP Franc (French Polynesia, New Caledonia, Wallis & Futuna)
  YER: "YE", // Yemen Rial
  ZAR: "ZA", // South Africa Rand
  ZMW: "ZM", // Zambia Kwacha
  ZWL: "ZW"  // Zimbabwe Dollar
};
