/**
 * This file is auto-generated from the ISDA Common Domain Model, do not edit.
 * Version: 2.40.2
 */

/**
 * The enumeration values to qualify the type of account.
 */
export enum AccountTypeEnum {

  /**
   * Aggregate client account, as defined under ESMA MiFIR.
   */
  AGGREGATE_CLIENT,

  /**
   * The account contains trading activity or positions that belong to a client of the firm that opened the account.
   */
  CLIENT,

  /**
   * The account contains proprietary trading activity or positions, belonging to the firm that is the owner of the account.
   */
  HOUSE
}
/**
 * The enumeration values to specify the actions associated with transactions.
 */
export enum ActionEnum {

  /**
   * A cancellation of a prior instance of the transaction event. The eventIdentifier has an associated version greater than 1.
   */
  CANCEL,

  /**
   * A correction of a prior instance of the transaction event. The eventIdentifier has an associated version greater than 1.
   */
  CORRECT,

  /**
   * A new instance of a transaction event, which is also characterized by the fact that the eventIdentifier has an associated version 1.
   */
  NEW
}
/**
 * The enumerated values to specify the Additional Type of transaction that can require the collection or delivery of initial margin under a given regulatory regime for the purposes of Covered Transactions, as specified in ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(B).
 */
export enum AdditionalTypeEnum {

  /**
   * Single stock equity option or index option transaction as referred to in the transitional provisions (if any) of the EMIR RTS.
   */
  EQUITY_OPTION_OR_INDEX_OPTION,

  /**
   * No Additional Type of transaction is applicable to the regulatory regulatory regime.
   */
  NOT_APPLICABLE,

  OTHER
}
/**
 * Enumeration for the different types of affirmation status.
 */
export enum AffirmationStatusEnum {

  AFFIRMED,

  UNAFFIRMED
}
/**
 * The enumerated values to specify the effective date of the Amendment to Termination Currency when specified as a specific date (e.g. the annex date). ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t).
 */
export enum AmendmentEffectiveDateEnum {

  /**
   * The effective date corresponds to the Amendment Effective Date (IM)
   */
  AMENDMENT_EFFECTIVE_DATE,

  /**
   * The effective date corresponds to the Annex date.
   */
  ANNEX_DATE,

  /**
   * The effective date corresponds to the Deed date.
   */
  DEED_DATE
}
/**
 * The enumerated values to specify the FpML asset class categorization.
 */
export enum AssetClassEnum {

  /**
   * Commodity.
   */
  COMMODITY,

  /**
   * Credit.
   */
  CREDIT,

  /**
   * Equity.
   */
  EQUITY,

  /**
   * ForeignExchange.
   */
  FOREIGN_EXCHANGE,

  /**
   * InterestRate.
   */
  INTEREST_RATE
}
/**
 * The qualification of the type of asset transfer.
 */
export enum AssetTransferTypeEnum {

  /**
   * The transfer of assets takes place without a corresponding exchange of payment.
   */
  FREE_OF_PAYMENT
}
/**
 * The enumerated values to specify the type of averaging used in an Asian option.
 */
export enum AveragingInOutEnum {

  /**
   * The average price is used to derive both the strike and the expiration price.
   */
  BOTH,

  /**
   * The average price is used to derive the strike price. Also known as 'Asian strike' style option.
   */
  IN,

  /**
   * The average price is used to derive the expiration price. Also known as 'Asian price' style option.
   */
  OUT
}
/**
 * The enumerated values to specify the method of calculation to be used when averaging rates. Per ISDA 2000 Definitions, Section 6.2. Certain Definitions Relating to Floating Amounts.
 */
export enum AveragingMethodEnum {

  /**
   * The arithmetic mean of the relevant rates for each reset date.
   */
  UNWEIGHTED,

  /**
   * The arithmetic mean of the relevant rates in effect for each day in a calculation period calculated by multiplying each relevant rate by the number of days such relevant rate is in effect, determining the sum of such products and dividing such sum by the number of days in the calculation period.
   */
  WEIGHTED
}
export enum BondTypeEnum {

  /**
   * Security: Asset Backed (ABS) A security which income payments and value derived from or backed by a specified pool of underlying assets
   */
  ASSET_BACKED,

  /**
   * Security: Bond that can be converted into a set of common shares or equities
   */
  CONVERTIBLE_BOND,

  /**
   * Security: Secured Bond backed by a separate entity or group of assets to cover exposure in the event of insolvency.
   */
  COVERED_BONDS,

  /**
   * Security: Asset secured by collection of mortgage loans
   */
  MORTGAGE_BACKED_SECURITY,

  /**
   * Security: Municipal Bonds
   */
  MUNICIPAL_BONDS,

  /**
   * Security: Treasury Bonds- Government issued Fixed income instrument of debt issued and securitized as a tradable asset
   */
  TREASURY_BONDS
}
/**
 * The enumerated values to specify the type of Broker Confirm that the FpML trade represents.
 */
export enum BrokerConfirmationTypeEnum {

  /**
   * Broker Confirmation Type representing ABX index trades.
   */
  ABX,

  /**
   * Broker Confirmation Type of Asia Corporate.
   */
  ASIA_CORPORATE,

  /**
   * Broker Confirmation Type of Asia Sovereign.
   */
  ASIA_SOVEREIGN,

  /**
   * Broker Confirmation Type of Australia Corporate.
   */
  AUSTRALIA_CORPORATE,

  /**
   * Broker Confirmation Type of Australia Sovereign.
   */
  AUSTRALIA_SOVEREIGN,

  /**
   * Broker Confirmation Type for use with Credit Derivative Transactions on Leveraged Loans.
   */
  CD_SON_LEVERAGED_LOANS,

  /**
   * Broker Confirmation Type for use with Credit Derivative Transactions on Mortgage-backed Security with Pay-As-You-Go or Physical Settlement.
   */
  CD_SON_MBS,

  /**
   * Broker Confirmation Type for CDX Emerging Markets Untranched Transactions.
   */
  CDX_EMERGING_MARKETS,

  /**
   * Broker Confirmation Type for CDX Emerging Markets Diversified Untranched Transactions.
   */
  CDX_EMERGING_MARKETS_DIVERSIFIED,

  /**
   * Broker Confirmation Type for CDX Swaption Transactions.
   */
  CDX_SWAPTION,

  /**
   * Broker Confirmation Type for Dow Jones CDX Tranche Transactions.
   */
  CDX_TRANCHE,

  /**
   * Broker Confirmation Type representing CMBX index trades.
   */
  CMBX,

  /**
   * Broker Confirmation Type for CDS Index trades relating to Dow Jones CDX.EM index series.
   */
  DJ_CDX_EM_,

  /**
   * Broker Confirmation Type for CDS Index trades relating to Dow Jones CDX.NA.IG and Dow Jones CDX.NA.HY index series.
   */
  DJ_CDX_NA,

  /**
   * Broker Confirmation Type of Emerging European and Middle Eastern Sovereign.
   */
  EMERGING_EUROPEAN_AND_MIDDLE_EASTERN_SOVEREIGN,

  /**
   * Broker Confirmation Type for EMERGING EUROPEAN CORPORATE.
   */
  EMERGING_EUROPEAN_CORPORATE,

  /**
   * Broker Confirmation Type for EMERGING EUROPEAN CORPORATE LPN.
   */
  EMERGING_EUROPEAN_CORPORATE_LPN,

  /**
   * Broker Confirmation Type for Single Name European CMBS Transactions.
   */
  EUROPEAN_CMBS,

  /**
   * Broker Confirmation Type of European Corporate.
   */
  EUROPEAN_CORPORATE,

  /**
   * Broker Confirmation Type for Single Name European RMBS Transactions.
   */
  EUROPEAN_RMBS,

  /**
   * Broker Confirmation Type of Japan Corporate.
   */
  JAPAN_CORPORATE,

  /**
   * Broker Confirmation Type of Japan Sovereign.
   */
  JAPAN_SOVEREIGN,

  /**
   * Broker Confirmation Type of Latin America Corporate.
   */
  LATIN_AMERICA_CORPORATE,

  /**
   * Broker Confirmation Type for LATIN AMERICA CORPORATE B.
   */
  LATIN_AMERICA_CORPORATE_BOND,

  /**
   * Broker Confirmation Type for LATIN AMERICA CORPORATE BL.
   */
  LATIN_AMERICA_CORPORATE_BOND_OR_LOAN,

  /**
   * Broker Confirmation Type of Latin America Sovereign.
   */
  LATIN_AMERICA_SOVEREIGN,

  /**
   * Broker Confirmation Type for MBX Transactions.
   */
  MBX,

  /**
   * Broker Confirmation Type for Municipal CDX Untranched Transactions.
   */
  MCDX,

  /**
   * Broker Confirmation Type of New Zealand Corporate.
   */
  NEW_ZEALAND_CORPORATE,

  /**
   * Broker Confirmation Type of New Zealand Sovereign.
   */
  NEW_ZEALAND_SOVEREIGN,

  /**
   * Broker ConfirmationType of North American Corporate.
   */
  NORTH_AMERICAN_CORPORATE,

  /**
   * Broker Confirmation Type for PO Index Transactions.
   */
  PO,

  /**
   * Broker Confirmation Type of Singapore Corporate.
   */
  SINGAPORE_CORPORATE,

  /**
   * Broker Confirmation Type of Singapore Sovereign.
   */
  SINGAPORE_SOVEREIGN,

  /**
   * Broker Confirmation Type of STANDARD ASIA CORPORATE.
   */
  STANDARD_ASIA_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD ASIA SOVEREIGN.
   */
  STANDARD_ASIA_SOVEREIGN,

  /**
   * Broker Confirmation Type of STANDARD AUSTRALIA CORPORATE.
   */
  STANDARD_AUSTRALIA_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD AUSTRALIA SOVEREIGN.
   */
  STANDARD_AUSTRALIA_SOVEREIGN,

  /**
   * Broker Confirmation Type for Standard CDX Tranche Transactions.
   */
  STANDARD_CDX_TRANCHE,

  /**
   * Broker Confirmation Type of STANDARD EMERGING EUROPEAN AND MIDDLE EASTERN SOVEREIGN.
   */
  STANDARD_EMERGING_EUROPEAN_AND_MIDDLE_EASTERN_SOVEREIGN,

  /**
   * Broker Confirmation Type of STANDARD EMERGING EUROPEAN CORPORATE.
   */
  STANDARD_EMERGING_EUROPEAN_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD EMERGING EUROPEAN CORPORATE LPN.
   */
  STANDARD_EMERGING_EUROPEAN_CORPORATE_LPN,

  /**
   * Broker Confirmation Type for STANDARD EUROPEAN CORPORATE.
   */
  STANDARD_EUROPEAN_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD JAPAN CORPORATE.
   */
  STANDARD_JAPAN_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD JAPAN SOVEREIGN.
   */
  STANDARD_JAPAN_SOVEREIGN,

  /**
   * Standard Syndicated Secured Loan Credit Default Swap Broker Confirmation Type.
   */
  STANDARD_LCDS,

  /**
   * Broker Confirmation Type for Standard Syndicated Secured Loan Credit Default Swap Bullet Transactions.
   */
  STANDARD_LCDS_BULLET,

  /**
   * Broker Confirmation Type for Standard Syndicated Secured Loan Credit Default Swap Index Bullet Transactions.
   */
  STANDARD_LCDX_BULLET,

  /**
   * Broker Confirmation Type for Standard Syndicated Secured Loan Credit Default Swap Index Bullet Tranche Transactions.
   */
  STANDARD_LCDX_BULLET_TRANCHE,

  /**
   * Broker Confirmation Type of STANDARD LATIN AMERICA CORPORATE B.
   */
  STANDARD_LATIN_AMERICA_CORPORATE_BOND,

  /**
   * Broker Confirmation Type of STANDARD LATIN AMERICA CORPORATE BL.
   */
  STANDARD_LATIN_AMERICA_CORPORATE_BOND_OR_LOAN,

  /**
   * Broker Confirmation Type of STANDARD LATIN AMERICA SOVEREIGN.
   */
  STANDARD_LATIN_AMERICA_SOVEREIGN,

  /**
   * Broker Confirmation Type of STANDARD NEW ZEALAND CORPORATE.
   */
  STANDARD_NEW_ZEALAND_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD NEW ZEALAND SOVEREIGN.
   */
  STANDARD_NEW_ZEALAND_SOVEREIGN,

  /**
   * Broker Confirmation Type for STANDARD NORTH AMERICAN CORPORATE.
   */
  STANDARD_NORTH_AMERICAN_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD SINGAPORE CORPORATE.
   */
  STANDARD_SINGAPORE_CORPORATE,

  /**
   * Broker Confirmation Type of STANDARD SINGAPORE SOVEREIGN.
   */
  STANDARD_SINGAPORE_SOVEREIGN,

  /**
   * Broker Confirmation Type for STANDARD SUBORDINATED EUROPEAN INSURANCE CORPORATE.
   */
  STANDARD_SUBORDINATED_EUROPEAN_INSURANCE_CORPORATE,

  /**
   * Broker Confirmation Type for STANDARD WESTERN EUROPEAN SOVEREIGN.
   */
  STANDARD_WESTERN_EUROPEAN_SOVEREIGN,

  /**
   * Broker Confirmation Type for Standard iTraxx Europe Tranched Transactions.
   */
  STANDARDI_TRAXX_EUROPE_TRANCHE,

  /**
   * Broker Confirmation Type of Subordinated European Insurance Corporate.
   */
  SUBORDINATED_EUROPEAN_INSURANCE_CORPORATE,

  /**
   * Broker Confirmation Type of SUKUK CORPORATE.
   */
  SUKUK_CORPORATE,

  /**
   * Broker Confirmation Type of SUKUK SOVEREIGN.
   */
  SUKUK_SOVEREIGN,

  /**
   * Syndicated Secured Loan Credit Default Swap Broker Confirmation Type.
   */
  SYNDICATED_SECURED_LOAN_CDS,

  /**
   * Broker Confirmation Type for TRX Transactions.
   */
  TRX,

  /**
   * Broker Confirmation Type for TRX.II Transactions.
   */
  TRX_II,

  /**
   * Broker Confirmation Type for U.S. MUNICIPAL FULL FAITH AND CREDIT.
   */
  US_MUNICIPAL_FULL_FAITH_AND_CREDIT,

  /**
   * Broker Confirmation Type for U.S. MUNICIPAL GENERAL FUND.
   */
  US_MUNICIPAL_GENERAL_FUND,

  /**
   * Broker Confirmation Type for U.S. MUNICIPAL REVENUE.
   */
  US_MUNICIPAL_REVENUE,

  /**
   * Broker Confirmation Type of Western European Sovereign.
   */
  WESTERN_EUROPEAN_SOVEREIGN,

  /**
   * Broker Confirmation Type for iTraxx Asia Excluding Japan.
   */
  I_TRAXX_ASIA_EX_JAPAN,

  /**
   * Broker Confirmation Type for iTraxx Asia Ex-Japan Swaption Transactions.
   */
  I_TRAXX_ASIA_EX_JAPAN_SWAPTION,

  /**
   * Broker Confirmation Type for iTraxx Asia Excluding Japan Tranched Transactions.
   */
  I_TRAXX_ASIA_EX_JAPAN_TRANCHE,

  /**
   * Broker Confirmation Type for iTraxx Australia.
   */
  I_TRAXX_AUSTRALIA,

  /**
   * Broker Confirmation Type for iTraxx Australia Swaption Transactions.
   */
  I_TRAXX_AUSTRALIA_SWAPTION,

  /**
   * Broker Confirmation Type for iTraxx Australia Tranched Transactions.
   */
  I_TRAXX_AUSTRALIA_TRANCHE,

  /**
   * Broker Confirmation Type for iTraxx CJ.
   */
  I_TRAXX_CJ,

  /**
   * Broker Confirmation Type for iTraxx CJ Tranched Transactions.
   */
  I_TRAXX_CJ_TRANCHE,

  /**
   * Broker Confirmation Type for iTraxx Europe Transactions
   */
  I_TRAXX_EUROPE,

  /**
   * Broker Confirmation Type for iTraxx Europe Swaption Transactions.
   */
  I_TRAXX_EUROPE_SWAPTION,

  /**
   * Broker Confirmation Type for iTraxx Europe Tranched Transactions.
   */
  I_TRAXX_EUROPE_TRANCHE,

  /**
   * Broker Confirmation Type for iTraxx Japan.
   */
  I_TRAXX_JAPAN,

  /**
   * Broker Confirmation Type for iTraxx Japan Swaption Transactions.
   */
  I_TRAXX_JAPAN_SWAPTION,

  /**
   * Broker Confirmation Type for iTraxx Japan Tranched Transactions.
   */
  I_TRAXX_JAPAN_TRANCHE,

  /**
   * Broker Confirmation Type for iTraxx LevX.
   */
  I_TRAXX_LEV_X,

  /**
   * Broker Confirmation Type for iTraxx SDI 75 Transactions.
   */
  I_TRAXX_SDI_75,

  /**
   * Broker Confirmation Type for iTraxx SovX.
   */
  I_TRAXX_SOV_X
}
/**
 * The enumerated values to specify the business centers.
 */
export enum BusinessCenterEnum {

  /**
   * Abu Dhabi, United Arab Emirates
   */
  AEAD,

  /**
   * Dubai, United Arab Emirates
   */
  AEDU,

  /**
   * Yerevan, Armenia
   */
  AMYE,

  /**
   * Luanda, Angola
   */
  AOLU,

  /**
   * Buenos Aires, Argentina
   */
  ARBA,

  /**
   * Vienna, Austria
   */
  ATVI,

  /**
   * Adelaide, Australia
   */
  AUAD,

  /**
   * Brisbane, Australia
   */
  AUBR,

  /**
   * Canberra, Australia
   */
  AUCA,

  /**
   * Darwin, Australia
   */
  AUDA,

  /**
   * Melbourne, Australia
   */
  AUME,

  /**
   * Perth, Australia
   */
  AUPE,

  /**
   * Sydney, Australia
   */
  AUSY,

  /**
   * Bridgetown, Barbados
   */
  BBBR,

  /**
   * Dhaka, Bangladesh
   */
  BDDH,

  /**
   * Brussels, Belgium
   */
  BEBR,

  /**
   * Sofia, Bulgaria
   */
  BGSO,

  /**
   * Manama, Bahrain
   */
  BHMA,

  /**
   * Hamilton, Bermuda
   */
  BMHA,

  /**
   * Bandar Seri Begawan, Brunei
   */
  BNBS,

  /**
   * La Paz, Bolivia
   */
  BOLP,

  /**
   * Brazil Business Day. This means a business day in any of Sao Paulo, Rio de Janeiro or Brasilia not otherwise declared as a financial market holiday by the Bolsa de Mercadorias & Futuros (BM&F)
   */
  BRBD,

  /**
   * Brasilia, Brazil
   */
  BRBR,

  /**
   * Rio de Janeiro, Brazil
   */
  BRRJ,

  /**
   * Sao Paulo, Brazil
   */
  BRSP,

  /**
   * Nassau, Bahamas
   */
  BSNA,

  /**
   * Gaborone, Botswana
   */
  BWGA,

  /**
   * Minsk, Belarus
   */
  BYMI,

  /**
   * Calgary, Canada
   */
  CACL,

  /**
   * Montreal, Canada
   */
  CAMO,

  /**
   * Ottawa, Canada
   */
  CAOT,

  /**
   * Toronto, Canada
   */
  CATO,

  /**
   * Vancouver, Canada
   */
  CAVA,

  /**
   * Winnipeg, Canada
   */
  CAWI,

  /**
   * Basel, Switzerland
   */
  CHBA,

  /**
   * Geneva, Switzerland
   */
  CHGE,

  /**
   * Zurich, Switzerland
   */
  CHZU,

  /**
   * Abidjan, Cote d'Ivoire
   */
  CIAB,

  /**
   * Santiago, Chile
   */
  CLSA,

  /**
   * Beijing, China
   */
  CNBE,

  /**
   * Shanghai, China
   */
  CNSH,

  /**
   * Bogota, Colombia
   */
  COBO,

  /**
   * San Jose, Costa Rica
   */
  CRSJ,

  /**
   * Nicosia, Cyprus
   */
  CYNI,

  /**
   * Prague, Czech Republic
   */
  CZPR,

  /**
   * Cologne, Germany
   */
  DECO,

  /**
   * Dusseldorf, Germany
   */
  DEDU,

  /**
   * Frankfurt, Germany
   */
  DEFR,

  /**
   * Hamburg, Germany
   */
  DEHH,

  /**
   * Leipzig, Germany
   */
  DELE,

  /**
   * Mainz, Germany
   */
  DEMA,

  /**
   * Munich, Germany
   */
  DEMU,

  /**
   * Stuttgart, Germany
   */
  DEST,

  /**
   * Copenhagen, Denmark
   */
  DKCO,

  /**
   * Santo Domingo, Dominican Republic
   */
  DOSD,

  /**
   * Algiers, Algeria
   */
  DZAL,

  /**
   * Tallinn, Estonia
   */
  EETA,

  /**
   * Cairo, Egypt
   */
  EGCA,

  /**
   * ESAS Settlement Day (as defined in 2006 ISDA Definitions Section 7.1 and Supplement Number 15 to the 2000 ISDA Definitions)
   */
  ESAS,

  /**
   * Barcelona, Spain
   */
  ESBA,

  /**
   * Madrid, Spain
   */
  ESMA,

  /**
   * Addis Ababa, Ethiopia
   */
  ETAA,

  /**
   * TARGET (euro 'Business Center')
   */
  EUTA,

  /**
   * Helsinki, Finland
   */
  FIHE,

  /**
   * Paris, France
   */
  FRPA,

  /**
   * Edinburgh, Scotland
   */
  GBED,

  /**
   * London, United Kingdom
   */
  GBLO,

  /**
   * Tbilisi, Georgia
   */
  GETB,

  /**
   * Saint Peter Port, Guernsey
   */
  GGSP,

  /**
   * Accra, Ghana
   */
  GHAC,

  /**
   * Athens, Greece
   */
  GRAT,

  /**
   * Hong Kong, Hong Kong
   */
  HKHK,

  /**
   * Tegucigalpa, Honduras
   */
  HNTE,

  /**
   * Zagreb, Republic of Croatia
   */
  HRZA,

  /**
   * Budapest, Hungary
   */
  HUBU,

  /**
   * Jakarta, Indonesia
   */
  IDJA,

  /**
   * Dublin, Ireland
   */
  IEDU,

  /**
   * Jerusalem, Israel
   */
  ILJE,

  /**
   * Tel Aviv, Israel
   */
  ILTA,

  /**
   * Bangalore, India
   */
  INBA,

  /**
   * Chennai, India
   */
  INCH,

  /**
   * Hyderabad, India
   */
  INHY,

  /**
   * Kolkata, India
   */
  INKO,

  /**
   * Mumbai, India
   */
  INMU,

  /**
   * New Delhi, India
   */
  INND,

  /**
   * Tehran, Iran
   */
  IRTE,

  /**
   * Reykjavik, Iceland
   */
  ISRE,

  /**
   * Milan, Italy
   */
  ITMI,

  /**
   * Rome, Italy
   */
  ITRO,

  /**
   * Turin, Italy
   */
  ITTU,

  /**
   * St. Helier, Channel Islands, Jersey
   */
  JESH,

  /**
   * Kingston, Jamaica
   */
  JMKI,

  /**
   * Amman, Jordan
   */
  JOAM,

  /**
   * Tokyo, Japan
   */
  JPTO,

  /**
   * Nairobi, Kenya
   */
  KENA,

  /**
   * Seoul, Republic of Korea
   */
  KRSE,

  /**
   * Kuwait City, Kuwait
   */
  KWKC,

  /**
   * George Town, Cayman Islands
   */
  KYGE,

  /**
   * Almaty, Kazakhstan
   */
  KZAL,

  /**
   * Beirut, Lebanon
   */
  LBBE,

  /**
   * Colombo, Sri Lanka
   */
  LKCO,

  /**
   * Luxembourg, Luxembourg
   */
  LULU,

  /**
   * Riga, Latvia
   */
  LVRI,

  /**
   * Casablanca, Morocco
   */
  MACA,

  /**
   * Rabat, Morocco
   */
  MARA,

  /**
   * Monaco, Monaco
   */
  MCMO,

  /**
   * Macau, Macao
   */
  MOMA,

  /**
   * Valletta, Malta
   */
  MTVA,

  /**
   * Port Louis, Mauritius
   */
  MUPL,

  /**
   * Male, Maldives
   */
  MVMA,

  /**
   * Lilongwe, Malawi
   */
  MWLI,

  /**
   * Mexico City, Mexico
   */
  MXMC,

  /**
   * Kuala Lumpur, Malaysia
   */
  MYKL,

  /**
   * Labuan, Malaysia
   */
  MYLA,

  /**
   * Windhoek, Namibia
   */
  NAWI,

  /**
   * Abuja, Nigeria
   */
  NGAB,

  /**
   * Lagos, Nigeria
   */
  NGLA,

  /**
   * Amsterdam, Netherlands
   */
  NLAM,

  /**
   * Rotterdam, Netherlands
   */
  NLRO,

  /**
   * Oslo, Norway
   */
  NOOS,

  /**
   * Kathmandu, Nepal
   */
  NPKA,

  /**
   * New York Fed Business Day (as defined in 2006 ISDA Definitions Section 1.9 and 2000 ISDA Definitions Section 1.9)
   */
  NYFD,

  /**
   * New York Stock Exchange Business Day (as defined in 2006 ISDA Definitions Section 1.10 and 2000 ISDA Definitions Section 1.10)
   */
  NYSE,

  /**
   * Auckland, New Zealand
   */
  NZAU,

  /**
   * Wellington, New Zealand
   */
  NZWE,

  /**
   * Muscat, Oman
   */
  OMMU,

  /**
   * Panama City, Panama
   */
  PAPC,

  /**
   * Lima, Peru
   */
  PELI,

  /**
   * Manila, Philippines
   */
  PHMA,

  /**
   * Makati, Philippines
   */
  PHMK,

  /**
   * Karachi, Pakistan
   */
  PKKA,

  /**
   * Warsaw, Poland
   */
  PLWA,

  /**
   * San Juan, Puerto Rico
   */
  PRSJ,

  /**
   * Lisbon, Portugal
   */
  PTLI,

  /**
   * Doha, Qatar
   */
  QADO,

  /**
   * Bucarest, Romania
   */
  ROBU,

  /**
   * Belgrade, Serbia
   */
  RSBE,

  /**
   * Moscow, Russian Federation
   */
  RUMO,

  /**
   * Abha, Saudi Arabia
   */
  SAAB,

  /**
   * Jeddah, Saudi Arabia
   */
  SAJE,

  /**
   * Riyadh, Saudi Arabia
   */
  SARI,

  /**
   * Stockholm, Sweden
   */
  SEST,

  /**
   * Singapore, Singapore
   */
  SGSI,

  /**
   * Ljubljana, Slovenia
   */
  SILJ,

  /**
   * Bratislava, Slovakia
   */
  SKBR,

  /**
   * Dakar, Senegal
   */
  SNDA,

  /**
   * San Salvador, El Salvador
   */
  SVSS,

  /**
   * Bangkok, Thailand
   */
  THBA,

  /**
   * Tunis, Tunisia
   */
  TNTU,

  /**
   * Ankara, Turkey
   */
  TRAN,

  /**
   * Istanbul, Turkey
   */
  TRIS,

  /**
   * Port of Spain, Trinidad and Tobago
   */
  TTPS,

  /**
   * Taipei, Taiwan
   */
  TWTA,

  /**
   * Dar es Salaam, Tanzania
   */
  TZDA,

  /**
   * Dodoma, Tanzania
   */
  TZDO,

  /**
   * Kiev, Ukraine
   */
  UAKI,

  /**
   * Kampala, Uganda
   */
  UGKA,

  /**
   * Boston, Massachusetts, United States
   */
  USBO,

  /**
   * Chicago, United States
   */
  USCH,

  /**
   * Charlotte, North Carolina, United States
   */
  USCR,

  /**
   * Washington, District of Columbia, United States
   */
  USDC,

  /**
   * Denver, United States
   */
  USDN,

  /**
   * Detroit, Michigan, United States
   */
  USDT,

  /**
   * U.S. Government Securities Business Day (as defined in 2006 ISDA Definitions Section 1.11 and 2000 ISDA Definitions Section 1.11)
   */
  USGS,

  /**
   * Honolulu, Hawaii, United States
   */
  USHL,

  /**
   * Houston, United States
   */
  USHO,

  /**
   * Los Angeles, United States
   */
  USLA,

  /**
   * Mobile, Alabama, United States
   */
  USMB,

  /**
   * Minneapolis, United States
   */
  USMN,

  /**
   * New York, United States
   */
  USNY,

  /**
   * Portland, Oregon, United States
   */
  USPO,

  /**
   * Sacramento, California, United States
   */
  USSA,

  /**
   * Seattle, United States
   */
  USSE,

  /**
   * Wichita, United States
   */
  USWT,

  /**
   * Montevideo, Uruguay
   */
  UYMO,

  /**
   * Caracas, Venezuela
   */
  VECA,

  /**
   * Road Town, Virgin Islands (British)
   */
  VGRT,

  /**
   * Hanoi, Vietnam
   */
  VNHA,

  /**
   * Ho Chi Minh (formerly Saigon), Vietnam
   */
  VNHC,

  /**
   * Aden, Yemen
   */
  YEAD,

  /**
   * Johannesburg, South Africa
   */
  ZAJO,

  /**
   * Lusaka, Zambia
   */
  ZMLU,

  /**
   * Harare, Zimbabwe
   */
  ZWHA
}
/**
 * The enumerated values to specify the convention for adjusting any relevant date if it would otherwise fall on a day that is not a valid business day.
 */
export enum BusinessDayConventionEnum {

  /**
   * The non-business date will be adjusted to the first following day that is a business day
   */
  FOLLOWING,

  /**
   * Per 2000 ISDA Definitions, Section 4.11. FRN Convention; Eurodollar Convention. FRN is included here as a type of business day convention although it does not strictly fall within ISDA's definition of a Business Day Convention and does not conform to the simple definition given above.
   */
  FRN,

  /**
   * The non-business date will be adjusted to the first following day that is a business day unless that day falls in the next calendar month, in which case that date will be the first preceding day that is a business day.
   */
  MODFOLLOWING,

  /**
   * The non-business date will be adjusted to the first preceding day that is a business day unless that day falls in the previous calendar month, in which case that date will be the first following day that us a business day.
   */
  MODPRECEDING,

  /**
   * The non-business date will be adjusted to the nearest day that is a business day - i.e. if the non-business day falls on any day other than a Sunday or a Monday, it will be the first preceding day that is a business day, and will be the first following business day if it falls on a Sunday or a Monday.
   */
  NEAREST,

  /**
   * The date will not be adjusted if it falls on a day that is not a business day.
   */
  NONE,

  /**
   * The date adjustments conventions are defined elsewhere, so it is not required to specify them here.
   */
  NOT_APPLICABLE,

  /**
   * The non-business day will be adjusted to the first preceding day that is a business day.
   */
  PRECEDING
}
/**
 * The enumerated values to specify how a calculation agent will be determined.
 */
export enum CalculationAgentPartyEnum {

  /**
   * The Calculation Agent is determined by reference to the relevant master agreement.
   */
  AS_SPECIFIED_IN_MASTER_AGREEMENT,

  /**
   * The Calculation Agent is determined by reference to the relevant standard terms supplement.
   */
  AS_SPECIFIED_IN_STANDARD_TERMS_SUPPLEMENT,

  /**
   * Both parties with joined rights to be a calculation agent.
   */
  BOTH,

  /**
   * The party that gives notice of exercise. Per 2000 ISDA Definitions, Section 11.1. Parties, paragraph (d).
   */
  EXERCISING_PARTY,

  /**
   * The party that is given notice of exercise. Per 2000 ISDA Definitions, Section 11.1. Parties, paragraph (e).
   */
  NON_EXERCISING_PARTY
}
/**
 * Identifies a party to the on-demand repo transaction that has a right to demand for termination of the repo transaction.
 */
export enum CallingPartyEnum {

  /**
   * As defined in Master Agreement.
   */
  AS_DEFINED_IN_MASTER_AGREEMENT,

  /**
   * Either, Buyer or Seller to the repo transaction.
   */
  EITHER,

  /**
   * Initial buyer to the repo transaction.
   */
  INITIAL_BUYER,

  /**
   * Initial seller to the repo transaction.
   */
  INITIAL_SELLER
}
/**
 * The qualification of the type of cash flows associated with OTC derivatives contracts and their lifecycle events.
 */
export enum CashflowTypeEnum {

  /**
   * A cash flow associated with an amendment lifecycle event.
   */
  AMENDMENT_FEE,

  /**
   * A cash flow resulting from the assignment of a contract to a new counterparty.
   */
  ASSIGNMENT_FEE,

  /**
   * The brokerage commission.
   */
  BROKERAGE_COMMISSION,

  /**
   * A cash flow corresponding to the periodic accrued interests.
   */
  COUPON,

  /**
   * A cashflow resulting from a credit event.
   */
  CREDIT_EVENT,

  /**
   * A cash flow corresponding to the synthetic dividend of an equity underlier asset traded through a derivative instrument.
   */
  DIVIDEND_RETURN,

  /**
   * A cash flow associated with an exercise lifecycle event.
   */
  EXERCISE_FEE,

  /**
   * A generic term for describing a non-scheduled cashflow that can be associated either with the initial contract, with some later corrections to it (e.g. a correction to the day count fraction that has a cashflow impact) or with some lifecycle events. Fees that are specifically associated with termination and partial termination, increase, amendment, and exercise events are qualified accordingly.
   */
  FEE,

  /**
   * A cash flow associated with an increase lifecycle event.
   */
  INCREASE_FEE,

  /**
   * Interest, without qualification as to whether it a gross or net interest relates cashflow.
   */
  INTEREST,

  /**
   * A cash flow corresponding to the return of the interest rate portion of a derivative instrument that has different types of underlying assets, such as a total return swap.
   */
  INTEREST_RETURN,

  /**
   * Net interest across payout components. Applicable to products such as interest rate swaps.
   */
  NET_INTEREST,

  /**
   * The novation fee.
   */
  NOVATION_FEE,

  /**
   * A cash flow associated with a partial termination lifecycle event.
   */
  PARTIAL_TERMINATION_FEE,

  /**
   * The premium associated with an OTC contract such as an option or a cap/floor.
   */
  PREMIUM,

  /**
   * A cash flow corresponding to the return of the price portion of a derivative instrument that has different types of underlying assets, such as a total return swap.
   */
  PRICE_RETURN,

  /**
   * A cash flow which amount typically corresponds to the notional of the contract and that is exchanged between the parties on trade inception and reverted back when the contract is terminated.
   */
  PRINCIPAL_EXCHANGE,

  /**
   * A cash flow associated with a termination lifecycle event.
   */
  TERMINATION_FEE,

  /**
   * An upfront cashflow associated to the swap to adjust for a difference between the swap price and the current market price.
   */
  UPFRONT_FEE
}
/**
 * The enumerated values to specify the type of organisation involved in the transaction.
 */
export enum CategoryEnum {

  /**
   * The trade or trade report represents the information from the perspective of the sender of the report, typically a clearing member firm or dealer (acting as an agent).
   */
  AGENT,

  /**
   * The trade or trade report represents the information from the perspective of the counterparty of the sender of the report, which is typically a clearing member firm or dealer.
   */
  COUNTERPARTY,

  /**
   * The trade or trade report represents the information from the perspective of a client opposite the sender of the report, which is typically a clearing member firm or dealer.
   */
  CUSTOMER,

  /**
   * The trade or trade report represents the information from the perspective of the sender of the report, typically a clearing member firm or dealer (acting as a principal).
   */
  PRINCIPAL
}
/**
 * The enumerated values to specify what led to the contract or execution closure.
 */
export enum ClosedStateEnum {

  /**
   * The execution or contract has been allocated.
   */
  ALLOCATED,

  /**
   * The execution or contract has been cancelled.
   */
  CANCELLED,

  /**
   * The (option) contract has been exercised.
   */
  EXERCISED,

  /**
   * The (option) contract has expired without being exercised.
   */
  EXPIRED,

  /**
   * The contract has reached its contractual termination date.
   */
  MATURED,

  /**
   * The contract has been novated. This state applies to the stepped-out contract component of the novation event.
   */
  NOVATED,

  /**
   * The contract has been subject of an early termination event.
   */
  TERMINATED
}
/**
 * The ISDA Collateral Assets Definitions as published by ISDA in the 2003 ISDA Collateral Asset Definitions.
 */
export enum CollateralAssetDefinitionsEnum {

  /**
   * Australian Dollar (AUD) Cash.
   */
  AU_CASH,

  /**
   * Australian Government Securities Capital-Indexed Bonds.
   */
  AU_CIB,

  /**
   * Australian Semi-Government Securities Fixed Interest Bonds.
   */
  AU_FIB,

  /**
   * Australian Government Securities Fixed Rate Bonds.
   */
  AU_FRB,

  /**
   * Australian Semi-Government Securities Index Linked Bonds.
   */
  AU_ILB,

  /**
   * Australian Government Securities Treasury Notes.
   */
  AU_NOTE,

  /**
   * Australian Semi-Government Securities Treasury Notes.
   */
  AU_STATENOTE,

  /**
   * Australian Government Securities Treasury Adjustable Rate Bonds.
   */
  AU_TAB,

  /**
   * BEL20 Equity Securities.
   */
  BE_BEL20,

  /**
   * Belgian Treasury Certificates.
   */
  BE_CERT,

  /**
   * Belgian Linear Obligations.
   */
  BE_LINEAR,

  /**
   * Belgian Treasury notes.
   */
  BE_NOTE,

  /**
   * Public sector issues guaranteed by Regional Authorities.
   */
  BE_REGIONGT,

  /**
   * Public sector issues guaranteed by the Belgian State.
   */
  BE_STATEGT,

  /**
   * Belgian State Loans.
   */
  BE_STATELOAN,

  /**
   * Canada Bonds.
   */
  CA_BOND,

  /**
   * Canadian Dollar (CAD) Cash.
   */
  CA_CASH,

  /**
   * Government of Canada Real Return Bonds.
   */
  CA_RRB,

  /**
   * Government of Canada Treasury Bills.
   */
  CA_TBILL,

  /**
   * Public Authority Bond.
   */
  CH_CANTON,

  /**
   * Swiss Franc (CHF) Cash.
   */
  CH_CASH,

  /**
   * Federal Bond.
   */
  CH_FEDBOND,

  /**
   * Unverzinsliche Schatzanweisungen (Bills).
   */
  DE_BILL,

  /**
   * Bundesanleihen (Bonds).
   */
  DE_BOND,

  /**
   * Negotiable Debt Obligations issued by or taken over and since serviced and managed by the Erblasttilgungsfond (Redemption Fund for Inherited Liabilities) backed by Federal Republic of Germany, including but not limited to former issues of the Treuhandanstalt, the Bundesbahn, the Bundespost, the Economic Recovery Program (ERP), the privatised Federal Railway (Bahn AG), the telecommunications element of the Federal Post Office (Telekom) and the German Unity Fund.
   */
  DE_ERBLAST,

  /**
   * Kommunalschuldverschreib  ungen (Municipal Bonds).
   */
  DE_MUNI,

  /**
   * Bundesschatzanweisungen (Notes).
   */
  DE_NOTE2,

  /**
   * Bundesobligationen (Notes).
   */
  DE_NOTE5_5,

  /**
   * Hypothekenpfandbriefe (Mortgage Bonds).
   */
  DE_PFAND,

  /**
   * Skatkammerbeviser (Treasury Bills).
   */
  DK_BILL,

  /**
   * BoligX obligationer.
   */
  DK_BOLIGX,

  /**
   * Statsobligationer (Government Bonds).
   */
  DK_BOND,

  /**
   * Callable Mortgage Bonds.
   */
  DK_CALLMORT,

  /**
   * Danish Krone (DKK) Cash.
   */
  DK_CASH,

  /**
   * KFX Equity Securities.
   */
  DK_KFX,

  /**
   * Non-callable Mortgage Bonds.
   */
  DK_MORT,

  /**
   * Statsgaeldsbeviser (Treasury Notes).
   */
  DK_NOTE,

  /**
   * Treasury Bills - Letras del Tesoro.
   */
  ES_BILL,

  /**
   * Public Government Debt.
   */
  ES_BOND,

  /**
   * Cedulas.
   */
  ES_CEDULAS,

  /**
   * Corporate Bonds.
   */
  ES_CORP,

  /**
   * Equity securities issued by a Spanish company, and listed as an IBEX 35 constituent company as reported by the Sociedad de Bolsas, each share representing the minimum unit of participation of a shareholder in the stock capital of the company.
   */
  ES_EQUITY,

  /**
   * Euro (EUR) Cash.
   */
  EU_CASH,

  /**
   * FTSE Euro 100 Index Equity Securities.
   */
  EU_EURO100,

  /**
   * FTSE Eurotop 300 Index Equity Securities.
   */
  EU_EUROTOP300,

  /**
   * EuroSTOXX 50 Index Equity Securities.
   */
  EU_STOXX50,

  /**
   * STOXX 600 Index Equity Securities.
   */
  EU_STOXX600,

  /**
   * Treasury bills.
   */
  FI_BILL,

  /**
   * Serial bonds (Finnish Government Bond).
   */
  FI_BOND,

  /**
   * HEX Equity Securities.
   */
  FI_HEX,

  /**
   * Commercial Paper: (Billet de Trésorerie).
   */
  FR_BDT,

  /**
   * Treasury Notes: Bons du Trésor à Taux Annuel (BTAN).
   */
  FR_BTAN,

  /**
   * Treasury Bills: Bons du Trésor à Taux Fixe (BTF).
   */
  FR_BTF,

  /**
   * Government bonds: Obligations Assimilables du Trésor (OAT).
   */
  FR_OAT,

  /**
   * STRIPS.
   */
  FR_STRIP,

  /**
   * Generally Accepted Australian Government Obligations.
   */
  GA_AU_GOV,

  /**
   * Generally Accepted Belgian Government Obligations.
   */
  GA_BE_GOV,

  /**
   * Generally Accepted Canadian Government Obligations.
   */
  GA_CA_GOV,

  /**
   * Generally Accepted Swiss Government Obligations.
   */
  GA_CH_GOV,

  /**
   * Generally Accepted German Government Obligations.
   */
  GA_DE_GOV,

  /**
   * Generally Accepted Danish Government Obligations.
   */
  GA_DK_GOV,

  /**
   * Generally Accepted Spanish Government Obligations.
   */
  GA_ES_GOV,

  /**
   * Generally Accepted Euro Zone Government Securities.
   */
  GA_EUROZONE_GOV,

  /**
   * Generally Accepted EU Member State Government Securities.
   */
  GA_EU_GOV,

  /**
   * Generally Accepted Finnish Government Obligations.
   */
  GA_FI_GOV,

  /**
   * Generally Accepted French Government Obligations.
   */
  GA_FR_GOV,

  /**
   * Generally Accepted G5 Government Obligations.
   */
  GA_G5_GOV,

  /**
   * Generally Accepted British Government Obligations.
   */
  GA_GB_GOV,

  /**
   * Generally Accepted Hong Kong Government Obligations.
   */
  GA_HK_GOV,

  /**
   * Generally Accepted Italian Government Obligations.
   */
  GA_IT_GOV,

  /**
   * Generally Accepted Japanese Government Obligations.
   */
  GA_JP_GOV,

  /**
   * Generally Accepted Korean Government Obligations.
   */
  GA_KR_GOV,

  /**
   * Generally Accepted Netherlands Government Obligations.
   */
  GA_NL_GOV,

  /**
   * Generally Accepted Norwegian Government Obligations.
   */
  GA_NO_GOV,

  /**
   * Generally Accepted New Zealand Government Obligations.
   */
  GA_NZ_GOV,

  /**
   * Generally Accepted Swedish Government Obligations.
   */
  GA_SE_GOV,

  /**
   * Generally Accepted Singaporean Government Obligations.
   */
  GA_SG_GOV,

  /**
   * Generally Accepted US Agency Obligations.
   */
  GA_US_AGENCY,

  /**
   * Generally Accepted US Government Obligations.
   */
  GA_US_GOV,

  /**
   * Generally Accepted US Mortgage-Backed Obligations.
   */
  GA_US_MORTGAGES,

  /**
   * British Pound Sterling (GBP) Cash.
   */
  GB_CASH,

  /**
   * Double-dated Gilts.
   */
  GB_DDGILT,

  /**
   * FTSE 100 Equity Securities.
   */
  GB_FT100,

  /**
   * FTSE 250 Equity Securities.
   */
  GB_FT250,

  /**
   * FTSE 350 Equity Securities.
   */
  GB_FT350,

  /**
   * Conventional Gilts.
   */
  GB_GILT,

  /**
   * Index-Linked Gilts.
   */
  GB_INDEXGILT,

  /**
   * Undated or Perpetual Gilts.
   */
  GB_PERPGILT,

  /**
   * Rump Stock.
   */
  GB_RUMPGILT,

  /**
   * Bank of England Euro Bills.
   */
  GB_SUPR1,

  /**
   * Bank of England Euro Notes.
   */
  GB_SUPR2,

  /**
   * UK Treasury Bills.
   */
  GB_TBILL,

  /**
   * Gilt Strips or Zero Coupon Gilts.
   */
  GB_ZEROGILT,

  /**
   * Hong Kong Government Exchange Fund Bills.
   */
  HK_BILL,

  /**
   * Hong Kong Dollar (HKD) Cash.
   */
  HK_CASH,

  /**
   * Hong Kong Government Exchange Fund Notes.
   */
  HK_NOTE,

  /**
   * Botbuoni Ordinari del Tesoro (BOT) zero coupon debt securities issued by the Italian Treasury with maturities up to 365 days.
   */
  IT_BOT,

  /**
   * Buoni del Tesoro Poliennali fixed interest semi-annual debt securities issued by the Italian Treasury with original maturities between 3 and 30 years.
   */
  IT_BTP,

  /**
   * Certificati di Credito del Tesoro a Cedola Variable (CCT) or floating rate interest bearing debt securities issued by the Italian Treasury.
   */
  IT_CCT,

  /**
   * Corporate bonds.
   */
  IT_CORP,

  /**
   * Certificati del Tesoro zero coupon debt securities issued by the Italian Treasury with maturities between 18 and 24 months.
   */
  IT_CTZ,

  /**
   * MIB30 Equity Securities.
   */
  IT_MIB30,

  /**
   * Debt securities issued and marketed by the Republic of Italy outside the Italian market, traded as Eurobonds.
   */
  IT_REP,

  /**
   * Japanese Yen (JPY) Cash.
   */
  JP_CASH,

  /**
   * Corporate bonds including straight bonds.
   */
  JP_CORPORATE,

  /**
   * Commercial Paper.
   */
  JP_CP,

  /**
   * Equity securities issued by a Japanese company, each share representing the minimum unit of participation of a partner in the stock capital of the company.
   */
  JP_EQUITY,

  /**
   * Yen-denominated foreign bonds.
   */
  JP_EUROBOND,

  /**
   * Japanese Government Bonds.
   */
  JP_JGB,

  /**
   * Korean Treasury Bonds.
   */
  KR_BOND,

  /**
   * Korean Won (KRW) Cash.
   */
  KR_CASH,

  /**
   * Non Korean Won denominated Export-Import Bank of Korea bonds.
   */
  KR_EXIM,

  /**
   * Korean Development Insurance Corporation Bonds (Korean Won denominated).
   */
  KR_KDICKRW,

  /**
   * Non-Korean Won denominated Korea Development Bank bonds (KDBs).
   */
  KR_KDR,

  /**
   * KEPCO bonds.
   */
  KR_KEPCO,

  /**
   * Monetary Stabilisation Bonds.
   */
  KR_MSB,

  /**
   * Non Korean Won denominated Korea National Housing Corporation bonds (KNHCs).
   */
  KR_NHC,

  /**
   * Non-Korean Won denominated Republic of Korea bonds (ROKs).
   */
  KR_ROK,

  /**
   * AEX Equity Securities.
   */
  NL_AEX,

  /**
   * Dutch Treasury Certificates.
   */
  NL_BILL,

  /**
   * Dutch State Loans.
   */
  NL_BOND,

  /**
   * Norwegian Government Bonds.
   */
  NO_BOND,

  /**
   * Norwegian Krone (NOK) Cash.
   */
  NO_CASH,

  /**
   * OBX Equity Securities.
   */
  NO_OBX,

  /**
   * Norwegian T-Bills.
   */
  NO_TBILL,

  /**
   * New Zealand Government Bonds.
   */
  NZ_BOND,

  /**
   * New Zealand Dollar (NZD) Cash.
   */
  NZ_CASH,

  /**
   * New Zealand Government Treasury Bills.
   */
  NZ_TBILL,

  /**
   * Swedish Krona (SEK) Cash.
   */
  SE_CASH,

  /**
   * Swedish Government Bonds (SGB).
   */
  SE_GOVT,

  /**
   * Swedish Index Linked Government bonds.
   */
  SE_ILGOVT,

  /**
   * Swedish Mortgage Bonds.
   */
  SE_MORT,

  /**
   * OMX Equity Securities.
   */
  SE_OMX,

  /**
   * Swedish Treasury Bills (STB).
   */
  SE_TBILL,

  /**
   * Singapore Government (SGS) Bonds.
   */
  SG_BOND,

  /**
   * Singapore Dollar (SGD) Cash.
   */
  SG_CASH,

  /**
   * Singapore Government T-Bills (T-Bills).
   */
  SG_TBILL,

  /**
   * Inter-American Development Bank Bonds.
   */
  SU_IADB,

  /**
   * International Bank for Reconstruction and Development (World Bank) Discount Notes.
   */
  SU_IBRDDN,

  /**
   * International Bank for Reconstruction and Development (World Bank or IBRD) Global Benchmark Bonds.
   */
  SU_IBRDGB,

  /**
   * Adjustable Rate Mortgage (ARM) Bonds.
   */
  US_ARM,

  /**
   * United States of America Dollar (USD) Cash.
   */
  US_CASH,

  /**
   * REMICs, CMOs and other derivative structures.
   */
  US_DERIV,

  /**
   * Dow Jones Industrial Average Equity Securities.
   */
  US_DOW,

  /**
   * Dow Jones Composite Average Equity Securities.
   */
  US_DOW_COMP,

  /**
   * Dow Jones Transportation  Average Equity Securities.
   */
  US_DOW_TRAN,

  /**
   * Dow Jones Utilities Average Equity Securities.
   */
  US_DOW_UTIL,

  /**
   * Federal Agricultural Mortgage Corp (Farmer Mac) Bonds.
   */
  US_FAMC,

  /**
   * Farm Credit System (FCS) Bonds.
   */
  US_FCS,

  /**
   * Farm Credit System Financial Assistance Corporation (FCSFAC) Bonds.
   */
  US_FCSFAC,

  /**
   * Callable Agency Debt – Federal Home Loan Bank (FHLB).
   */
  US_FHLB,

  /**
   * Non-Callable Federal Home Loan Bank Debt.
   */
  US_FHLBNC,

  /**
   * Non-Callable Federal Home Loan Bank Discount Notes.
   */
  US_FHLBNCDN,

  /**
   * Callable Agency Debt – the Federal Home Loan Mortgage Corporation (FHLMC or Freddie Mac).
   */
  US_FHLMC,

  /**
   * Federal Home Loan Mortgage Corporation Certificates – Mortgage Backed Securities.
   */
  US_FHLMCMBS,

  /**
   * Financing Corp (FICO) Bonds.
   */
  US_FICO,

  /**
   * Callable Agency Debt – Federal National Mortgage Association (FNMA or Fannie Mae).
   */
  US_FNMA,

  /**
   * Federal National Mortgage Association Certificates – Mortgage Backed Securities.
   */
  US_FNMAMBS,

  /**
   * Callable Agency Debt – Government National Mortgage Association (GNMA).
   */
  US_GNMA,

  /**
   * Government National Mortgage Association Certificates – Mortgage Backed Securities (GNMA or Ginnie Mae)
   */
  US_GNMAMBS,

  /**
   * Lehman Brothers Credit Bond Index Debt Securities.
   */
  US_LEHM_BOND,

  /**
   * NASDAQ-100 Index Equity Securities.
   */
  US_NAS_100,

  /**
   * NASDAQ Composite Index Equity Securities.
   */
  US_NAS_COMP,

  /**
   * Non-Callable Agency Debt – Various Issuers.
   */
  US_NCAD,

  /**
   * Non-Callable Agency Discount Notes – Various Issuers.
   */
  US_NCADN,

  /**
   * NYSE Composite Index Equity Securities.
   */
  US_NYSE_COMP,

  /**
   * Resolution Funding Corp (REFCorp) Bonds.
   */
  US_REFCORP,

  /**
   * Student Loan Marketing Association (Sallie Mae) Bonds.
   */
  US_SLMA,

  /**
   * US Treasury Strips.
   */
  US_STRIP,

  /**
   * Standard & Poor’s 100 Index Equity Securities.
   */
  US_S_P100,

  /**
   * Standard & Poor’s Midcap 400 Equity Securities. corporations that are included within the Standard And Poor's Midcap 400 Index published by Standard And Poor's, a division of The McGraw-Hill Companies, Inc.
   */
  US_S_P400,

  /**
   * Standard & Poor’s 500 Index Equity Securities.
   */
  US_S_P500,

  /**
   * Standard & Poor’s Smallcap 600 Index Equity Securities.
   */
  US_S_P600,

  /**
   * US Treasury Bills.
   */
  US_TBILL,

  /**
   * US Treasury Bonds.
   */
  US_TBOND,

  /**
   * US Treasury Inflation Protected Issues (TIPS).
   */
  US_TIPS,

  /**
   * US Treasury Notes.
   */
  US_TNOTE,

  /**
   * Tennessee Valley Authority (TVA) Bonds.
   */
  US_TVA
}
export enum CollateralProductTypeEnum {

  /**
   *  Cash in a currency form
   */
  CASH,

  /**
   *  Money Market Funds
   */
  MONEY_MARKET_FUNDS,

  /**
   * Other Collateral Products
   */
  OTHER,

  /**
   * Physical
   */
  PHYSICAL,

  /**
   * Negotiable financial instrument of monetary value with an issue ownership postiton
   */
  SECURITY
}
/**
 * The enumeration values to specify the Commodity Reference Prices specified in the Annex to the 2005 ISDA Commodity Definitions.
 */
export enum CommodityReferencePriceEnum {

  /**
   * Per 2005 ISDA Commodity Definitions, Sub-Annex A, Section 7.1 Commodity Reference Prices, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ALUMINIUM_ALLOY_LME_15_MONTH,

  /**
   * A code for the NYMEX Central Appalachian Coal commodity
   */
  COAL_CENTRAL_APPALACHIAN_NYMEX,

  /**
   * A code for the ICE Futures U.S. (‘ICUS’) Cocoa commodity
   */
  COCOA_ICE,

  /**
   * A code for the ICUS Coffee C commodity
   */
  COFFEE_ARABICA_ICE,

  /**
   * A code for the ICUS Coffee C commodity
   */
  COFFEE_ROBUSTA_ICE,

  /**
   * A code for the COMEX (‘CMX’) Copper Grade #1 commodity
   */
  COPPER_COMEX,

  /**
   * A code for the Chicago Board of Trade (‘CBOT’) Corn commodity
   */
  CORN_CBOT,

  /**
   * A code for the ICUS Cotton No. 2 commodity
   */
  COTTON_NO__2_ICE,

  /**
   * A code for the CBOT Ethanol commodity
   */
  ETHANOL_CBOT,

  /**
   * A code for the CME Feeder Cattle commodity
   */
  FEEDER_CATTLE_CME,

  /**
   * A code for the ICUS Frozen Concentrated Orange Juice commodity
   */
  FROZEN_CONCENTRATED_ORANGE_JUICE_NO__1_ICE,

  /**
   * A code for the NYMEX Gasoline Blendstock (RBOB) commodity
   */
  GASOLINE_RBOB_NEW_YORK_ICE,

  /**
   * A code for the NYMEX Gasoline Blendstock (RBOB) commodity
   */
  GASOLINE_RBOB_NEW_YORK_NYMEX,

  /**
   * A code for the CMX Gold commodity
   */
  GOLD_COMEX,

  /**
   * A code for the NYMEX No. 2 Heating Oil, New York Harbor commodity
   */
  HEATING_OIL_NEW_YORK_NYMEX,

  /**
   * A code for the CME Lean Hogs commodity
   */
  LEAN_HOGS_CME,

  /**
   * A code for the CME Live Cattle commodity
   */
  LIVE_CATTLE_CME,

  /**
   * A code for the CME Random Length Lumber commodity
   */
  LUMBER_CME,

  /**
   * A code for the CME Milk Class III commodity
   */
  MILK_CLASS_III_CME,

  /**
   * A code for the CME Non Fat Dry Milk commodity
   */
  MILK_NONFAT_DRY_CME,

  /**
   * A code for the NYMEX Natural Gas commodity
   */
  NATURAL_GAS_NYMEX,

  /**
   * A code for the NYMEX Panhandle Basis Swap commodity
   */
  NATURAL_GAS_PEPL__TEXOK_MAINLINE__INSIDE_FERC,

  /**
   * A code for the NYMEX Waha Basis Swap commodity
   */
  NATURAL_GAS_W__TEXAS__WAHA__INSIDE_FERC,

  /**
   * A code for the CBOT Oats commodity
   */
  OATS_CBOT,

  /**
   * A code for the NYMEX Crude Oil, Light Sweet commodity
   */
  OIL_WTI_NYMEX,

  /**
   * A code for the NYMEX Palladium commodity
   */
  PALLADIUM_NYMEX,

  /**
   * A code for the NYMEX Platinum commodity
   */
  PLATINUM_NYMEX,

  /**
   * A code for the CBOT Rough Rice commodity
   */
  RICE_CBOT,

  /**
   * A code for the CMX Silver commodity
   */
  SILVER_COMEX,

  /**
   * A code for the CBOT Soybeans commodity
   */
  SOYBEANS_CBOT,

  /**
   * A code for the CBOT Soybean Meal commodity
   */
  SOYBEAN_MEAL_CBOT,

  /**
   * A code for the CBOT Soybean Oil commodity
   */
  SOYBEAN_OIL_CBOT,

  /**
   * A code for the ICUS Sugar No. 11 commodity
   */
  SUGAR___11__WORLD__ICE,

  /**
   * A code for the ICUS Sugar No. 16 commodity
   */
  SUGAR___16__US__ICE,

  /**
   * A code for the CBOT Wheat commodity
   */
  WHEAT_CBOT,

  /**
   * A code for the Kansas City Board of Trade (‘KCBT’)Wheat commodity
   */
  WHEAT_HRW_KCBOT,

  /**
   * A code for the Wheat commodity
   */
  WHEAT_RED_SPRING_MGE
}
export enum CompareOp {

  EQUAL,

  GREATER
}
/**
 * The enumerated values to specify the type of compounding, e.g. flat, straight.
 */
export enum CompoundingMethodEnum {

  /**
   * Flat compounding. Compounding excludes the spread. Note that the first compounding period has it's interest calculated including any spread then subsequent periods compound this at a rate excluding the spread.
   */
  FLAT,

  /**
   * No compounding is to be applied.
   */
  NONE,

  /**
   * Spread Exclusive compounding.
   */
  SPREAD_EXCLUSIVE,

  /**
   * Straight compounding. Compounding includes the spread.
   */
  STRAIGHT
}
/**
 * The enumerated values to specify the Conditions Precedent applicanle to the...
 */
export enum ConditionsPrecedentEnum {

  /**
   * Conditions Precedent are not specified
   */
  NOT_SPECIFIED,

  /**
   * Paragraph 4(a) will not apply
   */
  PARAGRAPH_4_WILL_NOT_APPLY,

  /**
   * Other Conditions Precedent are specified
   */
  SPECIFIED
}
/**
 * Enumeration for the different types of confirmation status.
 */
export enum ConfirmationStatusEnum {

  CONFIRMED,

  UNCONFIRMED
}
/**
 * The enumerated values to specify a set of standard contract definitions relevant to the transaction.
 */
export enum ContractualDefinitionsEnum {

  /**
   * ISDA 1991 Definitions
   */
  ISDA1991,

  /**
   * ISDA 1993 Commodity Derivatives Definitions
   */
  ISDA_1993_COMMODITY,

  /**
   * ISDA 1996 Equity Derivatives Definitions
   */
  ISDA_1996_EQUITY,

  /**
   * ISDA 1997 Bullion Definitions
   */
  ISDA_1997_BULLION,

  /**
   * ISDA 1997 Government Bond Option Definitions
   */
  ISDA_1997_GOVERNMENT_BOND,

  /**
   * ISDA 1998 FX and Currency Option Definitions
   */
  ISDA1998FX,

  /**
   * ISDA 1999 Credit Derivatives Definitions
   */
  ISDA_1999_CREDIT,

  /**
   * ISDA 2000 Definitions
   */
  ISDA2000,

  /**
   * ISDA 2002 Equity Derivatives Definitions
   */
  ISDA_2002_EQUITY,

  /**
   * ISDA 2003 Credit Derivatives Definitions
   */
  ISDA_2003_CREDIT,

  /**
   * ISDA 2004 Novation Definitions
   */
  ISDA_2004_NOVATION,

  /**
   * ISDA 2005 Commodity Derivatives Definitions
   */
  ISDA_2005_COMMODITY,

  /**
   * ISDA 2006 Definitions
   */
  ISDA2006,

  /**
   * ISDA 2006 Inflation Derivatives Definitions
   */
  ISDA_2006_INFLATION,

  /**
   * ISDA 2008 Inflation Derivatives Definitions
   */
  ISDA_2008_INFLATION,

  /**
   * ISDA 2011 Equity Derivatives Definitions
   */
  ISDA_2011_EQUITY,

  /**
   * ISDA 2014 Credit Derivatives Definitions
   */
  ISDA_2014_CREDIT
}
/**
 * The enumerated values to define the supplements to a base set of ISDA Definitions that are applicable to the transaction.
 */
export enum ContractualSupplementEnum {

  /**
   * Standard Terms Supplement for ABX Transactions.
   */
  ABX,

  /**
   * Standard Terms Supplement for Asset-Backed Tranche Transactions.
   */
  ABX_TRANCHE,

  /**
   * ISDA Standard Terms Supplement for use with Credit Derivative Transactions on Leveraged Loans.
   */
  CD_SON_LEVERAGED_LOANS,

  /**
   * ISDA Standard Terms Supplement for use with Credit Derivative Transactions on Mortgage-backed Security with Pay-As-You-Go or Physical Settlement.
   */
  CD_SON_MBS,

  /**
   * Standard Terms Supplement for CDX Untranched Transactions.
   */
  CDX,

  /**
   * Standard Terms Supplement for CDX Emerging Markets Untranched Transactions.
   */
  CDX_EMERGING_MARKETS,

  /**
   * Standard Terms Supplement for CDX Emerging Markets Diversified Untranched Transactions..
   */
  CDX_EMERGING_MARKETS_DIVERSIFIED,

  /**
   * Standard Terms Supplement for CDX Swaption Transactions.
   */
  CDX_SWAPTION,

  /**
   * Standard Terms Supplement for Dow Jones CDX Tranche Transactions.
   */
  CDX_TRANCHE,

  /**
   * Standard Terms Supplement for CMBX Transactions.
   */
  CMBX,

  /**
   * Standard Terms Supplement for Single Name European CMBS Transactions.
   */
  EUROPEAN_CMBS,

  /**
   * Standard Terms Supplement for Single Name European RMBS Transactions.
   */
  EUROPEAN_RMBS,

  /**
   * Standard Terms Supplement for IOS Transactions.
   */
  IOS,

  /**
   * Supplement to the 1999 ISDA Credit Derivatives Definitions Relating to Convertible, Exchangeable or Accreting Obligations dated November 9, 2001.
   */
  ISDA_1999_CREDIT_CONVERTIBLE_EXCHANGEABLE_ACCRETING_OBLIGATIONS,

  /**
   * Restructuring Supplement to the 1999 ISDA Credit Derivatives Definitions dated May 11, 2001.
   */
  ISDA_1999_CREDIT_RESTRUCTURING,

  /**
   * Supplement Relating to Successor and Credit Events to the 1999 ISDA Credit Derivatives Definitions dated November 28, 2001.
   */
  ISDA_1999_CREDIT_SUCCESSOR_AND_CREDIT_EVENTS,

  /**
   * Additional Provisions for LPN dated December 6, 2007.
   */
  ISDA_2003_ADDITIONAL_PROVISIONS_LPN,

  /**
   * Additional Provisions for Contingent Credit Spread Transactions dated August 15, 2008.
   */
  ISDA_2003_CONTINGENT_CREDIT_SPREAD_TRANSACTION,

  /**
   * 2005 Matrix Supplement to the 2003 ISDA Credit Derivatives.
   */
  ISDA_2003_CREDIT_2005_MATRIX_SUPPLEMENT,

  /**
   * Additional Provisions for the Argentine Republic: Excluded Obligations and Excluded Deliverable Obligations dated December 21, 2005.
   */
  ISDA_2003_CREDIT_ARGENTINE_REPUBLIC,

  /**
   * ISDA Credit Derivatives Determinations Committees and Auction Settlement Supplement to the 2003 ISDA Credit Derivatives Definitions (published on [TBD]).
   */
  ISDA_2003_CREDIT_AUCTION_SUPPLEMENT,

  /**
   * May 2003 Supplement to the 2003 ISDA Credit Derivatives Definitions.
   */
  ISDA_2003_CREDIT_MAY_2003,

  /**
   * Additional Provisions for Physically Settled Default Swaps Monoline Insurer as Reference Entity dated May 9, 2003.
   */
  ISDA_2003_CREDIT_MONOLINE_INSURERS,

  /**
   * Additional Provisions for Physically Settled Default Swaps Monoline Insurer as Reference Entity dated January 21, 2005.
   */
  ISDA_2003_CREDIT_MONOLINE_INSURERS_2005,

  /**
   * Additional Provisions for the Republic of Hungary: Obligation Characteristics and Deliverable Obligation Characteristics dated August 13, 2004.
   */
  ISDA_2003_CREDIT_REPUBLIC_OF_HUNGARY,

  /**
   * Additional Provisions for the Republic of Hungary: Obligation Characteristics and Deliverable Obligation Characteristics dated February 14, 2005. 
   */
  ISDA_2003_CREDIT_REPUBLIC_OF_HUNGARY_2005,

  /**
   * Additional Provisions for the Russian Federation: Obligation Characteristics and Deliverable Obligation Characteristics dated August 13, 2004.
   */
  ISDA_2003_CREDIT_RUSSIAN_FEDERATION,

  /**
   * Additional Provisions for Credit Derivative Transactions - U.S. Municipal Entity as Reference Entity dated September 17, 2004.
   */
  ISDA_2003_CREDIT_US_MUNICIPALS,

  /**
   * Additional Provisions for STMicroelectronics NV dated December 6, 2007.
   */
  ISDA_2003_ST_MICROELECTRONICS_NV,

  /**
   * 2007 Full Lookthrough Depository Receipt Supplement to the 2002 Equity Derivatives Definitions.
   */
  ISDA_2007_FULL_LOOKTHROUGH_DEPOSITORY_RECEIPT_SUPPLEMENT,

  /**
   * 2007 Partial Lookthrough Depository Receipt Supplement to the 2002 ISDA Equity Derivatives Definitions.
   */
  ISDA_2007_PARTIAL_LOOKTHROUGH_DEPOSITORY_RECEIPT_SUPPLEMENT,

  /**
   * Additional Provisions for Physically Settled Default Swaps Monoline Insurer.
   */
  ISDA_CREDIT_MONOLINE_INSURERS,

  /**
   * Additional Provisions for Fixed Recovery Credit Default Swap Transactions
   */
  ISDA_DELIVERY_RESTRICTIONS,

  /**
   * Additional Provisions for Fixed Recovery Credit Default Swap Transactions.
   */
  ISDA_FIXED_RECOVERY,

  /**
   * Additional Provisions for LPN Reference Entities.
   */
  ISDALPN_REFERENCE_ENTITIES,

  /**
   * Canadian Supplement to the 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement dated March 29, 2004.
   */
  ISDA_MARCH_2004_EQUITY_CANADIAN_SUPPLEMENT,

  /**
   * Additional Provisions for Recovery Lock Credit Default Swap Transactions.
   */
  ISDA_RECOVERY_LOCK,

  /**
   * Additional Provisions for Secured Deliverable Obligation Characteristic.
   */
  ISDA_SECURED_DELIVERABLE_OBLIGATION_CHARACTERISTIC,

  /**
   * Standard Terms Supplement for Syndicated Secured Loan Credit Default Swap Index Transactions.
   */
  LCDX,

  /**
   * Standard Terms Supplement for Syndicated Secured Loan Credit Default Swap Index Tranche Transactions.
   */
  LCDX_TRANCHE,

  /**
   * Standard Terms Supplement for MBX Transactions.
   */
  MBX,

  /**
   * Standard Terms Supplement for Municipal CDX Untranched Transactions.
   */
  MCDX,

  /**
   * Standard Terms Supplement for PO Index Transactions.
   */
  PO,

  /**
   * Standard Terms Supplement for PrimeX Transactions.
   */
  PRIME_X,

  /**
   * Standard Terms Supplement for Standard CDX Tranche Transactions.
   */
  STANDARD_CDX_TRANCHE,

  /**
   * Standard Syndicated Secured Loan Credit Default Swap Standard Terms Supplement.
   */
  STANDARD_LCDS,

  /**
   * Standard Terms Supplement for Standard Syndicated Secured Loan Credit Default Swap Bullet Transactions.
   */
  STANDARD_LCDS_BULLET,

  /**
   * Standard Terms Supplement for Standard Syndicated Secured Loan Credit Default Swap Index Bullet Transactions.
   */
  STANDARD_LCDX_BULLET,

  /**
   * Standard Terms Supplement for Standard Syndicated Secured Loan Credit Default Swap Index Bullet Tranche Transactions.
   */
  STANDARD_LCDX_BULLET_TRANCHE,

  /**
   * Standard Terms Supplement for Standard iTraxx Europe Tranched Transactions.
   */
  STANDARDI_TRAXX_EUROPE_TRANCHE,

  /**
   * Syndicated Secured Loan Credit Default Swap Standard Terms Supplement.
   */
  SYNDICATED_SECURED_LOAN_CDS,

  /**
   * Standard Terms Supplement for TRX Transactions.
   */
  TRX,

  /**
   * Standard Terms Supplement for TRX.II Transactions.
   */
  TRX_II,

  /**
   * Standard Terms Supplement for iTraxx Asia Excluding Japan.
   */
  I_TRAXX_ASIA_EX_JAPAN,

  /**
   * Standard Terms Supplement for iTraxx Asia Ex-Japan Swaption Transactions.
   */
  I_TRAXX_ASIA_EX_JAPAN_SWAPTION,

  /**
   * Standard Terms Supplement for iTraxx Asia Excluding Japan Tranched Transactions.
   */
  I_TRAXX_ASIA_EX_JAPAN_TRANCHE,

  /**
   * Standard Terms Supplement for iTraxx Australia.
   */
  I_TRAXX_AUSTRALIA,

  /**
   * Standard Terms Supplement for iTraxx Australia Swaption Transactions.
   */
  I_TRAXX_AUSTRALIA_SWAPTION,

  /**
   * Standard Terms Supplement for iTraxx Australia Tranched Transactions.
   */
  I_TRAXX_AUSTRALIA_TRANCHE,

  /**
   * Standard Terms Supplement for iTraxx CJ.
   */
  I_TRAXX_CJ,

  /**
   * Standard Terms Supplement for iTraxx CJ Tranched Transactions.
   */
  I_TRAXX_CJ_TRANCHE,

  /**
   * Standard Terms Supplement for iTraxx Europe Transactions.
   */
  I_TRAXX_EUROPE,

  /**
   * Standard Terms Supplement for iTraxx Europe Dealer Form.
   */
  I_TRAXX_EUROPE_DEALER,

  /**
   * Standard Terms Supplement for iTraxx Europe Non-Dealer Form.
   */
  I_TRAXX_EUROPE_NON_DEALER,

  /**
   * Standard Terms Supplement for iTraxx Europe Swaption Transactions.
   */
  I_TRAXX_EUROPE_SWAPTION,

  /**
   * Standard Terms Supplement for iTraxx Europe Tranched Transactions.
   */
  I_TRAXX_EUROPE_TRANCHE,

  /**
   * Standard Terms Supplement for iTraxx Japan.
   */
  I_TRAXX_JAPAN,

  /**
   * Standard Terms Supplement for iTraxx Japan Swaption Transactions.
   */
  I_TRAXX_JAPAN_SWAPTION,

  /**
   * Standard Terms Supplement for iTraxx Japan Tranched Transactions.
   */
  I_TRAXX_JAPAN_TRANCHE,

  /**
   * Standard Terms Supplement for iTraxx LevX.
   */
  I_TRAXX_LEV_X,

  /**
   * Standard Terms Supplement for iTraxx SDI 75 Dealer Transactions.
   */
  I_TRAXX_SDI_75_DEALER,

  /**
   * Standard Terms Supplement for iTraxx SDI 75 Non-Dealer Transactions.
   */
  I_TRAXX_SDI_75_NON_DEALER,

  /**
   * Standard Terms Supplement for iTraxx SovX.
   */
  I_TRAXX_SOV_X
}
/**
 * The enumeration values to qualify the type of credit limits.
 */
export enum CreditLimitTypeEnum {

  /**
   * The type of credit line expressed in CS01. The sensitivity with respect to changes in the CDS spread.
   */
  CS01,

  /**
   * The type of credit line expressed in DV01. The dollar value of a one basis point decrease in interest rates. It shows the change in a bond's price compared to a decrease in the bond's yield.
   */
  DV01,

  /**
   * The type of credit line expressed in Initial Margin value.
   */
  IM,

  /**
   * The type of credit line expressed as a Net Present Value.
   */
  NPV,

  /**
   * The type of credit line expressed in Notional amount.
   */
  NOTIONAL,

  /**
   * The type of credit line expressed in PV01. The value of a one dollar or one basis point annuity.
   */
  PV01
}
/**
 * If several agency issue ratings but not equivalent, reference will be made to the lowest/highest available.
 */
export enum CreditNotationMismatchResolutionEnum {

  HIGHEST,

  LOWEST,

  REFERENCE_AGENCY
}
/**
 * The enumerated values to specify the rating agencies.
 */
export enum CreditRatingAgencyEnum {

  /**
   * A. M. Best
   */
  AM_BEST,

  /**
   * Canadian Bond Rating Service
   */
  CBRS,

  /**
   * Dominion Bond Rating Service
   */
  DBRS,

  /**
   * Fitch
   */
  FITCH,

  /**
   * Japan Credit Rating Agency, Ltd.
   */
  JAPAN_AGENCY,

  /**
   * Moody's
   */
  MOODYS,

  /**
   * Rating And Investment Information, Inc.
   */
  RATING_AND_INVESTMENT_INFORMATION,

  /**
   * Standard And Poor's
   */
  STANDARD_AND_POORS
}
/**
 * The enumerated values to specify the type of ISDA Credit Support Agreement governing the transaction.
 */
export enum CreditSupportAgreementTypeEnum {

  /**
   * The ISDA 1994 Credit Support Annex New York Law (pledge) applies.
   */
  ISDA_1994_CREDIT_SUPPORT_ANNEX_NEW_YORK_LAW,

  /**
   * The ISDA 1995 Credit Support Annex English Law (title transfer) applies.
   */
  ISDA_1995_CREDIT_SUPPORT_ANNEX_ENGLISH_LAW,

  /**
   * The ISDA 1995 Credit Support Annex Japanese Law applies.
   */
  ISDA_1995_CREDIT_SUPPORT_ANNEX_JAPANESE_LAW,

  /**
   * The ISDA 1995 Credit Support Deed English Law (charge) applies.
   */
  ISDA_1995_CREDIT_SUPPORT_DEED_ENGLISH_LAW,

  /**
   * The ISDA 2001 Margin Provisions applies.
   */
  ISDA_2001_MARGIN_PROVISIONS,

  /**
   * The ISDA 2013 Standard Credit Support Agreement.
   */
  ISDA_2013_STANDARD_CREDIT_SUPPORT_AGREEMENT,

  /**
   * The ISDA 2014 Standard Credit Support Agreement.
   */
  ISDA_2014_STANDARD_CREDIT_SUPPORT_AGREEMENT
}
/**
 * The enumerated values to specify the day count fraction.
 */
export enum DayCountFractionEnum {

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (e) or Annex to the 2000 ISDA Definitions (June 2000 Version), Section 4.16. Day Count Fraction, paragraph (d).
   */
  ACT_360,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (i).
   */
  ACT_365L,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (d) or Annex to the 2000 ISDA Definitions (June 2000 Version), Section 4.16. Day Count Fraction, paragraph (c).
   */
  ACT_365_FIXED,

  /**
   * The Fixed/Floating Amount will be calculated in accordance with the 'BASE EXACT/EXACT' day count fraction, as defined in the 'Definitions Communes plusieurs Additifs Techniques' published by the Association Francaise des Banques in September 1994.
   */
  ACT_ACT_AFB,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (c). This day count fraction code is applicable for transactions booked under the 2006 ISDA Definitions. Transactions under the 2000 ISDA Definitions should use the ACT/ACT.ISMA code instead.
   */
  ACT_ACT_ICMA,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (b) or Annex to the 2000 ISDA Definitions (June 2000 Version), Section 4.16. Day Count Fraction, paragraph (b). Note that going from FpML 2.0 Recommendation to the FpML 3.0 Trial Recommendation the code in FpML 2.0 'ACT/365.ISDA' became 'ACT/ACT.ISDA'.
   */
  ACT_ACT_ISDA,

  /**
   * The number of Business Days in the Calculation Period or Compounding Period in respect of which payment is being made divided by 252.
   */
  BUS_252,

  /**
   * Per 2006 ISDA Definitions Supplement number 43, Day Count Fraction, (k)  if “RBA Bond Basis (semi-annual)” is specified, 0.5. However, Actual/Actual (ISDA) applies to each of the first Calculation Period and the final Calculation Period if such Calculation Period is less than six months
   */
  RBA_BOND_BASIS_ANNUAL,

  /**
   * Per 2006 ISDA Definitions Supplement number 43, Day Count Fraction, if “RBA Bond Basis (quarter)” is specified, 0.25. However, Actual/Actual (ISDA) applies to each of the first Calculation Period and the final Calculation Period if such Calculation Period is less than three months
   */
  RBA_BOND_BASIS_QUARTER,

  /**
   * Per 2006 ISDA Definitions Supplement number 43, Day Count Fraction, if “RBA Bond Basis (semi-annual)” is specified, 0.5. However, Actual/Actual (ISDA) applies to each of the first Calculation Period and the final Calculation Period if such Calculation Period is less than six months
   */
  RBA_BOND_BASIS_SEMI_ANNUAL,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (a) or Annex to the 2000 ISDA Definitions (June 2000 Version), Section 4.16. Day Count Fraction, paragraph (a).
   */
  _1_1,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (g) or Annex to the 2000 ISDA Definitions (June 2000 Version), Section 4.16. Day Count Fraction, paragraph (f). Note that the algorithm defined for this day count fraction has changed between the 2000 ISDA Definitions and 2006 ISDA Definitions. See Introduction to the 2006 ISDA Definitions for further information relating to this change.
   */
  _30E_360,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (h). Note the algorithm for this day count fraction under the 2006 ISDA Definitions is designed to yield the same results in practice as the version of the 30E/360 day count fraction defined in the 2000 ISDA Definitions. See Introduction to the 2006 ISDA Definitions for further information relating to this change.
   */
  _30E_360_ISDA,

  /**
   * Per 2006 ISDA Definitions, Section 4.16. Day Count Fraction, paragraph (f) or Annex to the 2000 ISDA Definitions (June 2000 Version), Section 4.16. Day Count Fraction, paragraph (e).
   */
  _30_360
}
/**
 * The enumerated values to specify a day of the seven-day week.
 */
export enum DayOfWeekEnum {

  /**
   * Friday
   */
  FRI,

  /**
   * Monday
   */
  MON,

  /**
   * Saturday
   */
  SAT,

  /**
   * Sunday
   */
  SUN,

  /**
   * Thursday
   */
  THU,

  /**
   * Tuesday
   */
  TUE,

  /**
   * Wednesday
   */
  WED
}
/**
 * The enumerated values to specify the day type classification used in counting the number of days between two dates.
 */
export enum DayTypeEnum {

  /**
   * When calculating the number of days between two dates the count includes only business days.
   */
  BUSINESS,

  /**
   * When calculating the number of days between two dates the count includes all calendar days.
   */
  CALENDAR,

  /**
   * When calculating the number of days between two dates the count includes only commodity business days.
   */
  COMMODITY_BUSINESS,

  /**
   * When calculating the number of days between two dates the count includes only currency business days.
   */
  CURRENCY_BUSINESS,

  /**
   * When calculating the number of days between two dates the count includes only stock exchange business days.
   */
  EXCHANGE_BUSINESS,

  /**
   * When calculating the number of days between two dates the count includes only scheduled trading days.
   */
  SCHEDULED_TRADING_DAY
}
/**
 * The enumerated values to specify the application of Interest Amount with respect to the Delivery Amount through standard language. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
 */
export enum DeliveryAmountElectionEnum {

  /**
   * The delivery includes both `Transfer on last Local Business Day` and `Transfer a Delivery Amount (IM) consisting of cash on any Local Business Day.`
   */
  LAST_AND_ANY_LOCAL_BUSINESS_DAY,

  /**
   * The delivery only includes `Transfer on last Local Business Day`. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
   */
  LAST_LOCAL_BUSINESS_DAY
}
/**
 * Specifies delivery methods for securities transactions. This coding-scheme defines the possible delivery methods for securities.
 */
export enum DeliveryMethodEnum {

  /**
   * Indicates that a securities delivery must be made against payment in simultaneous transmissions and stipulate each other.
   */
  DELIVERY_VERSUS_PAYMENT,

  /**
   * Indicates that a securities delivery can be made without a simultaneous cash payment in exchange and not depending on if payment obligations are fulfilled or not and vice versa.
   */
  FREE_OF_PAYMENT,

  /**
   * Indicates that a securities delivery must be made in full before the payment for the securities; fulfillment of payment obligations depends on securities delivery obligations fulfillment.
   */
  PRE_DELIVERY,

  /**
   * Indicates that a payment in full amount must be made before the securities delivery; fulfillment of securities delivery obligations depends on payment obligations fulfillment.
   */
  PRE_PAYMENT
}
/**
 * The enumerated values to specify the method according to which an amount or a date is determined.
 */
export enum DeterminationMethodEnum {

  /**
   * Agreed separately between the parties.
   */
  AGREED_INITIAL_PRICE,

  /**
   * As specified in Master Confirmation.
   */
  AS_SPECIFIED_IN_MASTER_CONFIRMATION,

  /**
   * Determined by the Calculation Agent.
   */
  CALCULATION_AGENT,

  /**
   * Official Closing Price.
   */
  CLOSING_PRICE,

  /**
   * Determined by the Currency of Equity Dividends.
   */
  DIVIDEND_CURRENCY,

  /**
   * The initial Index Level is the level of the Expiring Contract as provided in the Master Confirmation.
   */
  EXPIRING_CONTRACT_LEVEL,

  /**
   * Determined by the Hedging Party.
   */
  HEDGE_EXECUTION,

  /**
   * Issuer Payment Currency.
   */
  ISSUER_PAYMENT_CURRENCY,

  /**
   * Net Asset Value.
   */
  NAV,

  /**
   * Official Settlement Price.
   */
  OSP_PRICE,

  /**
   * Opening Price of the Market.
   */
  OPEN_PRICE,

  /**
   * Settlement Currency.
   */
  SETTLEMENT_CURRENCY,

  /**
   * Date on which the strike is determined in respect of a forward starting swap.
   */
  STRIKE_DATE_DETERMINATION,

  /**
   * Official Trade-Weighted Average Price.
   */
  TWAP_PRICE,

  /**
   * Official Volume-Weighted Average Price.
   */
  VWAP_PRICE,

  /**
   * Price determined at valuation time.
   */
  VALUATION_TIME
}
/**
 * The enumerated values to specify the method of calculating discounted payment amounts. This enumerations combines the FpML DiscountingTypeEnum and FraDiscountingEnum enumerations.
 */
export enum DiscountingTypeEnum {

  /**
   * As specified by the the Australian Financial Markets Association (AFMA) OTC Financial Product Conventions. This discounting method should not be used for a trade documented under a legal framework where the 2006 ISDA Definitions have been incorporated.
   */
  AFMA,

  /**
   * As specified by the 2006 ISDA Definitions, Section 8.4. Discounting, paragraph (b).
   */
  FRA,

  /**
   * As specified by the 2006 ISDA Definitions, Section 8.4. Discounting, paragraph (e).
   */
  FRA_YIELD,

  /**
   * As specified by the 2006 ISDA Definitions, Section 8.4. Discounting, paragraph (a).
   */
  STANDARD
}
/**
 * The enumerated values to specify whether the dividend is paid with respect to the Dividend Period.
 */
export enum DividendAmountTypeEnum {

  /**
   * The Amount is determined as provided in the relevant Master Confirmation.
   */
  AS_SPECIFIED_IN_MASTER_CONFIRMATION,

  /**
   * The ex-date for a dividend occurs during a dividend period.
   */
  EX_AMOUNT,

  /**
   * The payment date for a dividend occurs during a dividend period.
   */
  PAID_AMOUNT,

  /**
   * The record date for a dividend occurs during a dividend period.
   */
  RECORD_AMOUNT
}
/**
 * The enumerated values to specify the date by reference to which the dividend will be paid.
 */
export enum DividendDateReferenceEnum {

  /**
   * The dividend date will be specified ad-hoc by the parties, typically on the dividend ex-date.
   */
  AD_HOC_DATE,

  /**
   * If 'Dividend Payment Date(s)' is specified in the Transaction Supplement as 'Cash Settlement Payment Date – Ex Dividend'', then the Dividend Payment Date in respect of a Dividend Amount shall be the Cash Settlement Payment Date relating to the end of the Dividend Period during which the Shares commenced trading 'ex' the relevant dividend on the Exchange.
   */
  CASH_SETTLE_PAYMENT_DATE_EX_DIV,

  /**
   * If 'Dividend Payment Date(s)' is specified in the Transaction Supplement as 'Cash Settlement Payment Date – Issuer Payment', then the Dividend Payment Date in respect of a Dividend Amount shall be the Cash Settlement Payment Date relating to the end of the Dividend Period during which the issuer pays the relevant dividend to a holder of record provided that in the case where the Equity Amount Payer is the party specified to be the sole Hedging Party and the Hedging Party has not received the Dividend Amount by such date, then the date falling a number of Currency Business Days as specified in the Cash Settlement Payment Date after actual receipt by the Hedging Party of the Received Ex Amount or Paid Ex Amount (as applicable).
   */
  CASH_SETTLE_PAYMENT_DATE_ISSUER_PAYMENT,

  /**
   * If 'Dividend Payment Date(s)' is specified in the Transaction Supplement as 'Cash Settlement Payment Date', then the Dividend Payment Date in respect of a Dividend Amount shall be the Cash Settlement Payment Date relating to the end of the Dividend Period during which the Shares commenced trading 'ex' the relevant dividend on the Exchange.
   */
  CASH_SETTLEMENT_PAYMENT_DATE,

  /**
   * Total of dividends which go ex, paid on next following Equity Payment Date, which is immediately following the Dividend Period during which the Shares commence trading ex-dividend on the Exchange.
   */
  CUMULATIVE_EQUITY_EX_DIV,

  /**
   * Total of paid dividends, paid on next following Equity Payment Date, which is immediately following the Dividend Ex Date, unless the Dividend Ex Date is between the Equity Valuation and Payment Date in which case the dividend is deferred to the following Equity Payment Date
   */
  CUMULATIVE_EQUITY_EX_DIV_BEFORE_RESET,

  /**
   * Total of paid dividends, paid on next following Equity Payment Date, which is immediately following the Dividend Period during which the dividend is paid by the Issuer to the holders of record of a Share.
   */
  CUMULATIVE_EQUITY_PAID,

  /**
   * Total of paid dividends, paid on next following Equity Payment Date, which is immediately following the Dividend Pay Date, unless the Dividend Pay Date is between the Equity Valuation and Payment Date (not including the Valuation Date) in which case the dividend is deferred to the following Equity Payment Date
   */
  CUMULATIVE_EQUITY_PAID_BEFORE_RESET,

  /**
   * Total of paid dividends, paid on next following Equity Payment Date, which is immediately following the Dividend Pay Date, unless the Dividend Pay Date is between the Equity Valuation and Payment Date (including the Valuation Date) in which case the dividend is deferred to the following Equity Payment Date
   */
  CUMULATIVE_EQUITY_PAID_INCL_RESET,

  /**
   * Total of dividends which go ex, paid on next following Interest Payment Date, which is immediately following the Dividend Period during which the Shares commence trading ex-dividend on the Exchange, or where the date on which the Shares commence trading ex-dividend is a Payment Date, such Payment Date.
   */
  CUMULATIVE_INTEREST_EX_DIV,

  /**
   * Total of paid dividends, paid on next following Interest Payment Date, which is immediately following the Dividend Period during which the dividend is paid by the Issuer to the holders of record of a Share.
   */
  CUMULATIVE_INTEREST_PAID,

  /**
   * Total of paid dividends, paid on next following Interest Payment Date, which is immediately following the Dividend Pay Date, unless the Dividend Pay Date is between the Equity Valuation and Payment Date (not including the Valuation Date) in which case the dividend is deferred to the following Interest Payment Date.
   */
  CUMULATIVE_INTEREST_PAID_BEFORE_RESET,

  /**
   * Total of paid dividends, paid on next following Interest Payment Date, which is immediately following the Dividend Pay Date, unless the Dividend Pay Date is between the Equity Valuation and Payment Date (including the Valuation Date) in which case the dividend is deferred to the following Interest Payment Date.
   */
  CUMULATIVE_INTEREST_PAID_INCL_RESET,

  /**
   * Date on which the dividend will be paid by the issuer.
   */
  DIVIDEND_PAYMENT_DATE,

  /**
   * In respect of each Dividend Period, the relevant Dividend Valuation Date.
   */
  DIVIDEND_VALUATION_DATE,

  /**
   * Equity payment date of the swap.
   */
  EQUITY_PAYMENT_DATE,

  /**
   * Date on which a holder of the security is entitled to the dividend.
   */
  EX_DATE,

  /**
   * If 'Dividend Payment Date(s)' is specified in the Transaction Supplement as 'Floating Amount Payment Date', then the Dividend Payment Date in respect of a Dividend Amount shall be the first Payment Date falling at least one Settlement Cycle after the date that the Shares have commenced trading 'ex' the relevant dividend on the Exchange.
   */
  FLOATING_AMOUNT_PAYMENT_DATE,

  /**
   * The next payment date of the swap.
   */
  FOLLOWING_PAYMENT_DATE,

  /**
   * Date on which the dividend will be recorded in the books of the paying agent.
   */
  RECORD_DATE,

  /**
   * If 'Dividend Payment Date(s)' is specified in the Transaction Supplement as 'Share Payment', then the Dividend Payment Date in respect of a Dividend Amount shall fall on a date on or before the date that is two (or any other number that is specified in the Transaction Supplement) Currency Business Days following the day on which the Issuer of the Shares pays the relevant dividend to holders of record of the Shares.
   */
  SHARE_PAYMENT,

  /**
   * Termination date of the swap.
   */
  TERMINATION_DATE,

  /**
   * Pays a fraction of the total on each Unwind Trade Settlement Date which occurs after the Dividend Ex Date, until trade is fully unwound.
   */
  UNWIND_EX_DIV,

  /**
   * Pays a fraction of the Dividend Amount on each Unwind Trade Settlement Date which occurs after the Dividend Ex Date, until position is fully unwound OR on the next Equity Pay Date after the Dividend Pay Date. This will be whichever date comes first or a combination of both.
   */
  UNWIND_OR_EQUITY_EX_DIV,

  /**
   * Pays a fraction of the Dividend Amount on each Unwind Trade Settlement Date which occurs after the Dividend Pay Date, until position is fully unwound OR on the next Equity Pay Date after the Dividend Pay Date. This will be whichever date comes first or a combination of both.
   */
  UNWIND_OR_EQUITY_PAID,

  /**
   * Pays a fraction of the Dividend Amount on each Unwind Trade Settlement Date which occurs after the Dividend Ex Date, until position is fully unwound OR on the next Interest Pay Date after the Dividend Ex Date. This will be whichever date comes first or a combination of both.
   */
  UNWIND_OR_INTEREST_EX_DIV,

  /**
   * Pays a fraction of the Dividend Amount on each Unwind Trade Settlement Date which occurs after the Dividend Pay Date, until position is fully unwound OR on the next Interest Pay Date after the Dividend Pay Date. This will be whichever date comes first or a combination of both.
   */
  UNWIND_OR_INTEREST_PAID,

  /**
   * Pays a fraction of the total on each Unwind Trade Settlement Date which occurs after the Dividend Pay Date, until trade is fully unwound.
   */
  UNWIND_PAID
}
/**
 * The enumerated values to specify the date on which the receiver of the equity payout is entitled to the dividend.
 */
export enum DividendEntitlementEnum {

  /**
   * Dividend entitlement is on the dividend ex-date.
   */
  EX_DATE,

  /**
   * Dividend entitlement is on the dividend record date.
   */
  RECORD_DATE
}
/**
 * 2002 ISDA Equity Derivatives Definitions: First Period, Second Period |
 */
export enum DividendPeriodEnum {

  /**
   * 2002 ISDA Equity Derivatives Definitions: First Period means each period from, and including, one Cash Settlement Payment Date or Settlement Date, as the case may be, to, but excluding, the next following Cash Settlement Payment Date or Settlement Date, as the case may be, except that (i) the initial Dividend Period will commence on, and include, the Clearance System Business Day that is one Settlement Cycle following the Trade Date and (ii) the final Dividend Period will end on, but exclude, the final Cash Settlement Payment Date or Settlement Date, as the case may be.
   */
  FIRST_PERIOD,

  /**
   * 2002 ISDA Equity Derivatives Definitions: Second Period means each period from, but excluding, one Valuation Date to, and including, the next Valuation Date, except that (i) the initial Dividend Period will commence on, but exclude, the Trade Date and (ii) the final Dividend Period will end on, and include, the final Valuation Date or, in respect of a Physically-settled Forward Transaction to which Variable Obligation is not applicable, the date that is one Settlement Cycle prior to the Settlement Date.
   */
  SECOND_PERIOD
}
/**
 * The enumerated values to specify the reference entity types corresponding to a list of types defined in the ISDA First to Default documentation.
 */
export enum EntityTypeEnum {

  /**
   * Entity Type of Asian.
   */
  ASIAN,

  /**
   * Entity Type of Australian and New Zealand.
   */
  AUSTRALIAN_AND_NEW_ZEALAND,

  /**
   * Entity Type of European Emerging Markets.
   */
  EUROPEAN_EMERGING_MARKETS,

  /**
   * Entity Type of Japanese.
   */
  JAPANESE,

  /**
   * Entity Type of North American High Yield.
   */
  NORTH_AMERICAN_HIGH_YIELD,

  /**
   * Entity Type of North American Insurance.
   */
  NORTH_AMERICAN_INSURANCE,

  /**
   * Entity Type of North American Investment Grade.
   */
  NORTH_AMERICAN_INVESTMENT_GRADE,

  /**
   * Entity Type of Singaporean.
   */
  SINGAPOREAN,

  /**
   * Entity Type of Western European.
   */
  WESTERN_EUROPEAN,

  /**
   * Entity Type of Western European Insurance.
   */
  WESTERN_EUROPEAN_INSURANCE
}
export enum EquityTypeEnum {

  /**
   * Equity type: Common stocks and shares
   */
  COMMON,

  /**
   * Equity type: Convertible Common, preference stock that can be converted by the election of the holder into common shares
   */
  CONVERTIBLE_COMMON,

  /**
   * Equity type: Depository Receipts – certificate to represent a share holding in a foreign listed company
   */
  DEPOSITORY_RECEIPTS,

  /**
   * Equity type: Exchange Traded Fund- Investment fund traded on a stock exchange
   */
  EXCHANGE_TRADED_FUND,

  /**
   * Equity type:  Freely Transferable Mutual Fund
   */
  FREELY_TRANSFERABLE_MUTUAL_FUND,

  /**
   * Equity type: Mutual Fund
   */
  MUTUAL_FUND,

  /**
   * Equity type: Non-Convertible Preference, Shares which hold priority to receive capital return in event of issuer liquidation
   */
  NON_CONVERTIBLE_PREFERENCE,

  /**
   * Equity type: Rights issue dividend of subscription right to additional shares in a company to existing holders
   */
  RIGHTSISSUE,

  /**
   * Equity type: Warrants –options on shares issued by issuer allowing holder to purchase a specified allocation of shares at determined price and time
   */
  WARRANTS
}
/**
 * The enumeration values to qualify the timestamps that can be associated with a lifecycle event. The reason for such approach is that the experience of integrating the DTCC and CME data representations suggests that a wide set of timestamps are currently utilized among service providers, while there is not at present an objective set of criteria that could help suggest a defined set of timestamps as part of the CDM. Implementers are expected to evaluate the current enumeration values to determine whether those meet their requirements. If not, they are expected to engage with the CDM team to evaluate the addition of further value(s) to this enumeration, which will then participate to the development of a compendium for further evaluation at a later point in order to determine whether this modeling is appropriate.
 */
export enum EventTimestampQualificationEnum {

  /**
   * The date and time on which trade was confirmed as cleared.
   */
  CLEARING_CONFIRMATION_DATE_TIME,

  /**
   * The date and time on the trade was cleared.
   */
  CLEARING_DATE_TIME,

  /**
   * The date and time on which the event was submitted for clearing.
   */
  CLEARING_SUBMISSION_DATE_TIME,

  /**
   * The date and time on which the event was created.
   */
  EVENT_CREATION_DATE_TIME,

  /**
   * The date and time on which the event will be considered expired.
   */
  EVENT_EXPIRATION_DATE_TIME,

  /**
   * The date and time on which the event was processed.
   */
  EVENT_PROCESSING_DATE_TIME,

  /**
   * The date and time on which the event was sent.
   */
  EVENT_SENT_DATE_TIME,

  /**
   * The date and time on which the event was submitted.
   */
  EVENT_SUBMITTED_DATE_TIME,

  /**
   * The date and time on which the trade execution was performed.
   */
  EXECUTION_DATE_TIME,

  /**
   * The date and time on which the transaction has been created. This timestamp is specified as such by the CME ClearPort Matched IRS Trade submission API specification: 'The transaction date time of the trade. Represents the date & time on which the trade was initially generated either by CME Clearing or firm. The transaction date time may be assigned by CME Clearing at the point the trade is reported as cleared. Transaction date time can also be provided by an external submitter of the trade at the point the trade is submitted.'
   */
  TRANSACTION_CREATION_DATE_TIME
}
/**
 * The enumerated values to specify how a contract has been executed, e.g. electronically, verbally, ...
 */
export enum ExecutionTypeEnum {

  /**
   * Execution via electronic execution facility, derivatives contract market, or other electronic message such as an instant message.
   */
  ELECTRONIC,

  /**
   * Bilateral execution between counterparties not pursuant to the rules of a SEF or DCM.
   */
  OFF_FACILITY
}
/**
 * The enumerated values to specify the list of floating rate index.
 */
export enum FloatingRateIndexEnum {

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AED_EBOR_REUTERS,

  AUD_AONIA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_AONIA_OIS_COMPOUND_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_BBR_AUBBSW,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_BBR_BBSW,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_BBR_BBSW_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_BBR_BBSY__BID_,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_BBR_ISDC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_QUARTERLY_SWAP_RATE_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_QUARTERLY_SWAP_RATE_ICAP_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_SEMI_ANNUAL_SWAP_RATE_BGCANTOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_SEMI_ANNUAL_SWAP_RATE_ICAP_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_SEMI_ANNUAL_SWAP_RATE_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  AUD_SWAP_RATE_REUTERS,

  /**
   * Refers to the Overnight Brazilian Interbank Deposit Rate Annualized known as the average (Media) of the DI-OVER-EXTRA Grupo as published by CETIP (Camara de Custodia e Liquidacao).
   */
  BRL_CDI,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_BA_CDOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_BA_CDOR_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_BA_ISDD,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_BA_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_BA_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_BA_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_CORRA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_ISDA_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_LIBOR_BBA_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_REPO_CORRA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_TBILL_ISDD,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_TBILL_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_TBILL_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CAD_TBILL_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_3_M_LIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_3_M_LIBOR_SWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_3_M_LIBOR_SWAP_EUREX_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_3_M_LIBOR_SWAP_EUREX_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_6_M_LIBORSWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_6_M_LIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_6_M_LIBOR_SWAP_EUREX_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_6_M_LIBOR_SWAP_EUREX_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_ANNUAL_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_ANNUAL_SWAP_RATE_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_BASIS_SWAP_3_M_VS_6_M_LIBOR_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_ISDAFIX_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_LIBOR_ISDA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_OIS_11_00_ICAP,

  /**
   * PPer 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_SARON_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_TOIS_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CHF_USD_BASIS_SWAPS_11_00_ICAP,

  /**
   * Refers to the Indice Camara Promedio ('ICP') rate for Chilean Pesos which, for a Reset Date, is determined and published by the Asociacion de Bancos e Instituciones Financieras de Chile A.G. ('ABIF') in accordance with the 'Reglamento Indice de Camara Promedio' of the ABIF as published in the Diario Oficial de la Republica de Chile (the 'ICP Rules') and which is reported on the ABIF website by not later than 10:00 a.m., Santiago time, on that Reset Date.
   */
  CLP_TNA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CL_CLICP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNH_HIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNH_HIBOR_TMA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_7_REPO_COMPOUNDING_DATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_CNREPOFIX_CFXS_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_PBOCB_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_QUARTERLY_7_DAY_REPO_NON_DELIVERABLE_SWAP_RATE_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_QUARTERLY_7_DAY_REPO_NON_DELIVERABLE_SWAP_RATE_TRADITION_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction..
   */
  CNY_SHIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CNY_SHIBOR_OIS_COMPOUNDING,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  COP_IBR_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CZK_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CZK_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CZK_PRIBOR_PRBO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  CZK_PRIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_CIBOR_2_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_CIBOR2_DKNA13,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_CIBOR_DKNA13,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_CIBOR_DKNA_13_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_CIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_CITA_DKNA14_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  DKK_DKKOIS_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_3_M_EURIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_3_M_EURIBOR_SWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_3_M_EURIBOR_SWAP_EUREX_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_3_M_EURIBOR_SWAP_EUREX_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_6_M_EURIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_6_M_EURIBOR_SWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_6_M_EURIBOR_SWAP_EUREX_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_6_M_EURIBOR_SWAP_EUREX_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_10_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_10_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_10_00_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_10_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_10_00_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_10_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_11_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_11_00_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_11_00_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_3_MONTH,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_3_MONTH_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_4_15_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_BASIS_SWAP_EONIA_VS_3_M_EUR_IBOR_SWAP_RATES_A_360_10_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_AVERAGE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_10_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_10_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_10_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_4_15_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_OIS_COMPOUND_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EONIA_SWAP_INDEX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_ACT_365,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_ACT_365_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_ANNUAL_BOND_SWAP_VS_1_M_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_BASIS_SWAP_1_M_VS_3_M_EURIBOR_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_BASIS_SWAP_3_M_VS_6_M_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURIBOR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_EURONIA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ISDA_EURIBOR_SWAP_RATE_11_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ISDA_EURIBOR_SWAP_RATE_12_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ISDA_LIBOR_SWAP_RATE_10_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_ISDA_LIBOR_SWAP_RATE_11_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TAM_CDC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TEC10_CNO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TEC_10_CNO_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TEC_10_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TEC5_CNO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TEC_5_CNO_SWAP_MARKER,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TEC_5_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_TMM_CDC_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  EUR_USD_BASIS_SWAPS_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_6_M_LIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_6_M_LIBOR_SWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_6_M_LIBOR_SWAP_EUREX_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_6_M_LIBOR_SWAP_EUREX_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_ISDA_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_LIBOR_ISDA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SONIA_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SONIA_OIS_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SONIA_OIS_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SONIA_OIS_4_15_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SEMI_ANNUAL_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SEMI_ANNUAL_SWAP_RATE_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SEMI_ANNUAL_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SEMI_ANNUAL_SWAP_RATE_4_15_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_SEMI_ANNUAL_SWAP_RATE_SWAP_MARKER_26,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_USD_BASIS_SWAPS_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_WMBA_RONIA_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GBP_WMBA_SONIA_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GRD_ATHIBOR_ATHIBOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GRD_ATHIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GRD_ATHIBOR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GRD_ATHIMID_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  GRD_ATHIMID_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HIBOR_HIBOR_,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HIBOR_HIBOR_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HIBOR_HKAB,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HIBOR_HKAB_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HIBOR_ISDC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_HONIX_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_ISDA_SWAP_RATE_11_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_ISDA_SWAP_RATE_4_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_ANNUAL_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_ANNUAL_SWAP_RATE_4_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_QUARTERLY_SWAP_RATE_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_QUARTERLY_SWAP_RATE_4_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HKD_QUARTERLY_QUARTERLY_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HUF_BUBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  HUF_BUBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_IDMA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_IDRFIX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_JIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_SBI_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_SOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_SOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_SOR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  IDR_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ILS_TELBOR_01_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ILS_TELBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_BMK,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_CMT,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_FBIL_MIBOR_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_INBMK_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_MIBOR_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_MIFOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_MIOIS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_MITOR_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_SEMI_ANNUAL_SWAP_RATE_11_30_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_SEMI_ANNUAL_SWAP_RATE_NON_DELIVERABLE_16_00_TULLETT_PREBON,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  INR_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ISK_REIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ISK_REIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_ANNUAL_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_ANNUAL_SWAP_RATE_3_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_BBSF_BLOOMBERG_10_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_BBSF_BLOOMBERG_15_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_ISDA_SWAP_RATE_10_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_ISDA_SWAP_RATE_15_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LIBOR_FRASETT,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LIBOR_ISDA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LTPR_MHCB,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_LTPR_TBC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_MUTANCALL_TONAR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_OIS_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_OIS_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_OIS_3_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_QUOTING_BANKS_LIBOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_STPR_QUOTING_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_17096,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_17097,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_DTIBOR01,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_TIBM,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_TIBM_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_TIBM_10_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_TIBM_5_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_TIBM_ALL_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_TIBM_ALL_BANKS_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TIBOR_ZTIBOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TONA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TSR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TSR_REUTERS_10_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TSR_REUTERS_15_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TSR_TELERATE_10_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_TSR_TELERATE_15_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  JPY_USD_BASIS_SWAPS_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  KRW_BOND_3222,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  KRW_CD_3220,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  KRW_CD_KSDA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  KRW_QUARTERLY_ANNUAL_SWAP_RATE_3_30_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MXN_TIIE_BANXICO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MXN_TIIE_BANXICO_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MXN_TIIE_BANXICO_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MYR_KLIBOR_BNM,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MYR_KLIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MYR_QUARTERLY_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  MYR_QUARTERLY_SWAP_RATE_TRADITION_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NOK_NIBOR_NIBR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NOK_NIBOR_NIBR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NOK_NIBOR_OIBOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NOK_NIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_BBR_BID,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_BBR_FRA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_BBR_ISDC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_BBR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_BBR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_NZIONA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_SEMI_ANNUAL_SWAP_RATE_BGCANTOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_SWAP_RATE_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  NZD_SWAP_RATE_ICAP_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  OIS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PHP_PHIREF_BAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PHP_PHIREF_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PHP_PHIREF_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PHP_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PHP_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PLN_POLONIA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PLN_WIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PLN_WIBOR_WIBO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PLZ_WIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  PLZ_WIBOR_WIBO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  REPOFUNDS_RATE_FRANCE_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  REPOFUNDS_RATE_GERMANY_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  REPOFUNDS_RATE_ITALY_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RON_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RON_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RON_RBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_ANNUAL_SWAP_RATE_12_45_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_ANNUAL_SWAP_RATE_4_15_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_ANNUAL_SWAP_RATE_TRADITION_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_MOSPRIME_NFEA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_MOSPRIME_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  RUB_RUONIA_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SAR_SRIOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SAR_SRIOR_SUAA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SEK_ANNUAL_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SEK_ANNUAL_SWAP_RATE_SESWFI,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SEK_SIOR_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SEK_STIBOR_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SEK_STIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SEK_STIBOR_SIDE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SIBOR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SONAR_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SONAR_OIS_VWAP_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SOR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SOR_VWAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SOR_VWAP_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_CURRENCY_BASIS_SWAP_RATE_11_00_TULLETT_PREBON,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_CURRENCY_BASIS_SWAP_RATE_16_00_TULLETT_PREBON,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_11_00_TULLETT_PREBON,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_16_00_TULLETT_PREBON,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_ICAP_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SGD_SEMI_ANNUAL_SWAP_RATE_TRADITION_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SKK_BRIBOR_BRBO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SKK_BRIBOR_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SKK_BRIBOR_NBSK07,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  SKK_BRIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_SOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_SOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_SOR_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_THBFIX_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  THB_THBFIX_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TRY_ANNUAL_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TRY_ANNUAL_SWAP_RATE_11_15_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TRY_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TRY_SEMI_ANNUAL_SWAP_RATE_TRADITION_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TRY_TRYIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TRY_TRYIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_QUARTERLY_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_QUARTERLY_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_REFERENCE_DEALERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_REUTERS_6165,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_TAIBIR01,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_TAIBIR02,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_TAIBOR_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_TAIBOR_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_TWCPBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  TWD_TELERATE_6165,

  /**
   * United Kingdom: GBP - Non-revised Retail Price Index Excluding Mortgage Interest Payments (UKRPIX)
   */
  UK_RPIX,

  /**
   * United States: USA - Non-revised Consumer Price Index - Urban (CPI-U)
   */
  USA_CPI_U,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_3_M_LIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_3_M_LIBOR_SWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_6_M_LIBOR_SWAP_CME_VS_LCH_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_6_M_LIBOR_SWAP_CME_VS_LCH_ICAP_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ANNUAL_SWAP_RATE_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ANNUAL_SWAP_RATE_4_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_BA_H_15,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_BA_REFERENCE_DEALERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_BMA_MUNICIPAL_SWAP_INDEX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CD_H_15,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CD_REFERENCE_DEALERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CMS_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CMS_REFERENCE_BANKS_ICAP_SWAP_PX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CMS_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CMS_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CMT_T7051,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CMT_T7052,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_COF11_FHLBSF,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_COF_11_REUTERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_COF_11_TELERATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CP_H_15,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_CP_REFERENCE_DEALERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_FFCB_DISCO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_FEDERAL_FUNDS_H_15,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_FEDERAL_FUNDS_H_15_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_FEDERAL_FUNDS_H_15_OIS_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_FEDERAL_FUNDS_REFERENCE_DEALERS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ISDAFIX_3_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ISDAFIX_3_SWAP_RATE_3_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ISDA_SWAP_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_ISDA_SWAP_RATE_3_00,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_LIBOR_BBA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_LIBOR_BBA_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_LIBOR_ISDA,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_LIBOR_LIBO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_LIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_MUNICIPAL_SWAP_LIBOR_RATIO_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_MUNICIPAL_SWAP_RATE_11_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_11_00_LON_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_11_00_NY_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_11_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_3_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_3_00_NY_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OIS_4_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_OVERNIGHT_BANK_FUNDING_RATE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_PRIME_H_15,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_PRIME_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_SIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_SIBOR_SIBO,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_SIFMA_MUNICIPAL_SWAP_INDEX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_SOFR_COMPOUND,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_S_P_INDEX_HIGH_GRADE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TBILL_H_15,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TBILL_H_15_BLOOMBERG,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TBILL_SECONDARY_MARKET,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TIBOR_ISDC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TIBOR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TREASURY_19901_3_00_ICAP,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TREASURY_RATE_ICAP_BROKER_TEC,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TREASURY_RATE_SWAP_MARKER_100,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TREASURY_RATE_SWAP_MARKER_99,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TREASURY_RATE_T_19901,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  USD_TREASURY_RATE_T_500,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  VND_SEMI_ANNUAL_SWAP_RATE_11_00_BGCANTOR,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  VND_SEMI_ANNUAL_SWAP_RATE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_DEPOSIT_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_DEPOSIT_SAFEX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_JIBAR_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_JIBAR_SAFEX,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_PRIME_AVERAGE,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_PRIME_AVERAGE_REFERENCE_BANKS,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_QUARTERLY_SWAP_RATE_1_00_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_QUARTERLY_SWAP_RATE_5_30_TRADITION,

  /**
   * Per 2006 ISDA Definitions or Annex to the 2000 ISDA Definitions, Section 7.1 Rate Options, as amended and supplemented through the date on which parties enter into the relevant transaction.
   */
  ZAR_QUARTERLY_SWAP_RATE_TRADITION_REFERENCE_BANKS,

  STYLE
}
/**
 * The enumerated values to specify the law governing the contract or legal document.
 */
export enum GoverningLawEnum {

  /**
   * The Governing Law is determined by reference to the relevant master agreement.
   */
  AS_SPECIFIED_IN_MASTER_AGREEMENT,

  /**
   * Alberta law
   */
  CAAB,

  /**
   * British Columbia Law
   */
  CABC,

  /**
   * Manitoba law
   */
  CAMN,

  /**
   * Ontario law
   */
  CAON,

  /**
   * Quebec law
   */
  CAQC,

  /**
   * German law
   */
  DE,

  /**
   * French law
   */
  FR,

  /**
   * English law
   */
  GBEN,

  /**
   * The law of the island of Guernsey
   */
  GBGY,

  /**
   * The law of the Isle of Man
   */
  GBIM,

  /**
   * The law of the island of Jersey
   */
  GBJY,

  /**
   * Scottish law
   */
  GBSC,

  /**
   * Japanese law
   */
  JP,

  /**
   * Californian law
   */
  USCA,

  /**
   * Delaware law
   */
  USDE,

  /**
   * Illinois law
   */
  USIL,

  /**
   * New York law
   */
  USNY
}
/**
 * The enumerated values to specify condition(s) required by a party from the other party to hold its posted collateral. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h)(i): Eligibility to Hold Posted Collateral (VM); Custodians (VM).
 */
export enum HoldingPostedCollateralEnum {

  /**
   * The custodian is acceptable to the other party to the agreement.
   */
  ACCEPTABLE_CUSTODIAN,

  /**
   * The provisions specified in Paragraph 6 (c) of the SDA 2016 Credit Support Annex for Variation Margin apply as such.
   */
  NO_ELECTION
}
/**
 * The enumerated values to specify the instances where the independent amount eligible collateral is not defined as a set of eligible collateral assets. 
 */
export enum IndependentAmountEligibilityEnum {

  /**
   * None.
   */
  NONE,

  /**
   * None, unless otherwise specified in a Confirmation.
   */
  NONE_UNLESS_SPECIFIED_IN_CONFIRMATION
}
/**
 * The enumerated values to specify the CDX index annex source.
 */
export enum IndexAnnexSourceEnum {

  /**
   * As defined in the relevant form of Master Confirmation applicable to the confirmation of Dow Jones CDX indices.
   */
  MASTER_CONFIRMATION,

  /**
   * As defined in the relevant form of Master Confirmation applicable to the confirmation of Dow Jones CDX indices.
   */
  PUBLISHER
}
/**
 * The enumerated values to specify the consequences of Index Events.
 */
export enum IndexEventConsequenceEnum {

  /**
   * Calculation Agent Adjustment.
   */
  CALCULATION_AGENT_ADJUSTMENT,

  /**
   * Cancellation and Payment.
   */
  CANCELLATION_AND_PAYMENT,

  /**
   * Negotiated Close Out.
   */
  NEGOTIATED_CLOSE_OUT,

  /**
   * Related Exchange.
   */
  RELATED_EXCHANGE
}
/**
 * The enumerated values to specify the list of information providers.
 */
export enum InformationProviderEnum {

  /**
   * The Association of Banks in Singapore.
   */
  ASSOC_BANKS_SINGAPORE,

  /**
   * The central bank of Canada.
   */
  BANK_OF_CANADA,

  /**
   * The Bank Of England.
   */
  BANK_OF_ENGLAND,

  /**
   * The central bank of Japan.
   */
  BANK_OF_JAPAN,

  /**
   * Bloomberg LP.
   */
  BLOOMBERG,

  /**
   * The European Central Bank.
   */
  EURO_CENTRAL_BANK,

  /**
   * The Federal Home Loan Bank of San Francisco, or its successor.
   */
  FHLBSF,

  /**
   * The Federal Reserve, the central bank of the United States.
   */
  FEDERAL_RESERVE,

  /**
   * International Swaps and Derivatives Association, Inc.
   */
  ISDA,

  OTHER,

  /**
   * The Reserve Bank of Australia.
   */
  RESERVE_BANK_AUSTRALIA,

  /**
   * The Reserve Bank of New Zealand.
   */
  RESERVE_BANK_NEW_ZEALAND,

  /**
   * Reuters Group Plc.
   */
  REUTERS,

  /**
   * South African Futures Exchange, or its successor.
   */
  SAFEX,

  /**
   * Telerate, Inc.
   */
  TELERATE
}
/**
 * The enumeration values to qualify the intent associated with a transaction event.
 */
export enum IntentEnum {

  /**
   * The intent is to correct the event or associated execution/contract.
   */
  CORRECTION,

  /**
   * The intent is to increase the notional or quantity associated with the contract or execution.
   */
  INCREASE,

  /**
   * The intent is to reduce the notional or quantity associated with the contract (a.k.a. partially terminate it).
   */
  PARTIAL_TERMINATION,

  /**
   * The intent is to re-negotiate some of the terms of the contract.
   */
  RENEGOTIATION,

  /**
   * The intent is to terminate the contract.
   */
  TERMINATION
}
/**
 * The enumerated values to specify the interest adjustment periodicity election through standard language. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii). 
 */
export enum InterestAdjustmentPeriodicityEnum {

  /**
   * The interest adjustment takes place each day.
   */
  EACH_DAY,

  /**
   * The interest adjustment takes place on the last local business day of each calendar month
   */
  LAST_LOCAL_BUSINESS_DAY_OF_MONTH
}
/**
 * The enumerated values to specify the interest shortfall cap, applicable to mortgage derivatives.
 */
export enum InterestShortfallCapEnum {

  FIXED,

  VARIABLE
}
/**
 * The enumerated values to specify the interpolation method, e.g. linear.
 */
export enum InterpolationMethodEnum {

  /**
   * Linear Interpolation applicable.
   */
  LINEAR_ZERO_YIELD,

  /**
   * No Interpolation applicable.
   */
  NONE
}
/**
 * Origin of entity issuing the collateral.
 */
export enum IssuerTypeClassificationEnum {

  /**
   * Debt issued Securities by corporate bodies including Banks
   */
  CORPORATE,

  /**
   * Debt issues by institutions or bodies, typically constituted by statute, with a function mandated by the government and subject to government supervision inclusive of profit- and non-profit making bodies. Includes the US Agencies and GSEs and the EU concept of public sector entities.  Excluding any entities which are also Regional Government
   */
  QUASI_GOVERNMENT,

  /**
   * Regional Government Issued Debt including states within countries, local authorities and municipalities
   */
  REGIONAL_GOVERNMENT,

  /**
   * Sovereign, Government Debt Securities including Central Banks
   */
  SOVEREIGN_GOVERNMENT_CENTRAL_BANK,

  /**
   * Debt issued by international organisations and multilateral banks, entities constituted by treaties or with multiple sovereign members includes Multilateral development Banks
   */
  SUPRA_NATIONAL
}
/**
 * The enumerated values to specify the legal agreement name.
 */
export enum LegalAgreementNameEnum {

  /**
   * A Credit Support Annex legal agreement.
   */
  CREDIT_SUPPORT_ANNEX,

  /**
   * A Credit Support Deed legal agreement.
   */
  CREDIT_SUPPORT_DEED,

  /**
   * A Master Agreement.
   */
  MASTER_AGREEMENT,

  /**
   * An Standard Credit Support Annex.
   */
  STANDARD_CREDIT_SUPPORT_ANNEX
}
/**
 * The enumerated values to specify the legal agreement publisher.
 */
export enum LegalAgreementPublisherEnum {

  /**
   * Association Française des Banques.
   */
  AFB,

  /**
   * International Swaps and Derivatives Association, Inc.
   */
  ISDA
}
/**
 * The enumerated values to specify the length unit in the Resource type.
 */
export enum LengthUnitEnum {

  PAGES,

  TIME_UNIT
}
/**
 * The enumeration values to specify the level at which the limit is set: customer business, proprietary business or account level. This is part of the CME specification for clearing credit limits, although not specified as a set of enumerated values as part of the clearing confirmation specification.
 */
export enum LimitLevelEnum {

  /**
   * The limit is set in relation to the proprietary business undertaken by the clearing counterparty.
   */
  ACCOUNT,

  /**
   * The limit is set in relation to the customer business undertaken by the clearing counterparty.
   */
  CUSTOMER,

  /**
   * The limit is set at the account level in relation to the clearing counterparty.
   */
  HOUSE
}
export enum MarginApproachEnum {

  ALLOCATED,

  DISTINCT,

  GREATER_OF
}
/**
 * This indicator defines which type of assets (cash or securities) is specified to apply as margin to the repo transaction.
 */
export enum MarginTypeEnum {

  /**
   * When the margin type is Cash, the margin factor is applied to the cash value of the transaction.
   */
  CASH,

  /**
   * When the margin type is Instrument, the margin factor is applied to the instrument value for the transaction. In the “instrument” case, the haircut would be applied to the securities.
   */
  INSTRUMENT
}
/**
 * The enumerated values to specify the handling of an averaging date market disruption for an equity derivative transaction.
 */
export enum MarketDisruptionEnum {

  /**
   * As defined in section 6.7 paragraph (c) sub-paragraph (iii) of the ISDA 2002 Equity Derivative definitions.
   */
  MODIFIED_POSTPONEMENT,

  /**
   * As defined in section 6.7 paragraph (c) sub-paragraph (i) of the ISDA 2002 Equity Derivative definitions.
   */
  OMISSION,

  /**
   * As defined in section 6.7 paragraph (c) sub-paragraph (ii) of the ISDA 2002 Equity Derivative definitions.
   */
  POSTPONEMENT
}
/**
 * The enumerated values to specify the type of the master agreement governing the transaction.
 */
export enum MasterAgreementTypeEnum {

  /**
   * AFB Master Agreement for Foreign Exchange and Derivatives Transactions
   */
  AFB,

  /**
   * A Bespoke (custom) Master Agreement, including one-off agreements for transactions
   */
  BESPOKE,

  /**
   * Clearing Master Agreement
   */
  CMA,

  /**
   * Contrato Marco de Operaciones Financieras
   */
  CMOF,

  /**
   * EEI Master Power Purchase and Sale Agreement
   */
  EEI_POWER,

  /**
   * EFET General Agreement Concerning the Delivery and Acceptance of Electricity
   */
  EFET_ELECTRICITY,

  /**
   * EFET General Agreement Concerning The Delivery And Acceptance of Natural Gas
   */
  EFET_GAS,

  /**
   * European Master Agreement and the Derivatives Annex (Banking Federation of the European Union)
   */
  EMA,

  /**
   * Master Agreement Relating to transactions on Forward Financial Instruments (Federation Bancaire Francaise)
   */
  FBF,

  /**
   * ICMA Global Master Agreement for REPO Trades
   */
  GMRA,

  /**
   * ISLA Global Master Agreement for Securities Lending
   */
  GMSLA,

  /**
   * FOA Grid Trade Master Agreement
   */
  GTMA,

  /**
   * GasEDI Base Contract for Short-term Sale and Purchase of Natural Gas
   */
  GAS_EDI,

  /**
   * German Master Agreement for Financial derivatives and Addendum for Options on Stock Exchange Indices or Securities
   */
  GERMAN,

  /**
   * International Currency Options Market Master Agreement
   */
  ICOM,

  /**
   * International Emissions Trading Association Emissions Reduction Purchase Agreement
   */
  IETA_ERPA,

  /**
   * International Emissions Trading Association Emissions Trading Master Agreement
   */
  IETA_ETMA,

  /**
   * International Emissions Trading Association International Emissions Trading Master Agreement
   */
  IETA_IETMA,

  /**
   * International Foreign Exchange Master Agreement
   */
  IFEMA,

  /**
   * International Foreign Exchange and Options Master Agreement
   */
  IFEOMA,

  /**
   * ISDA Master Agreement
   */
  ISDA,

  /**
   * ISDA-FIA Cleared Derivatives Execution Agreement
   */
  ISDAFIA_CDEA,

  /**
   * Master agreement of Japan Securities Clearing Corporation
   */
  JSCC,

  /**
   * International Bullion Master Agreement Terms published by the London Bullion Market Association
   */
  LBMA,

  /**
   * Leadership in Energy Automated Processing
   */
  LEAP,

  /**
   * CTA Master Coal Purchase and Sales Agreement
   */
  MCPSA,

  /**
   * NAESB Base Contract for Sale and Purchase of Natural Gas
   */
  NAESB_GAS,

  /**
   * Short Term Flat NBP Trading Terms and Conditions
   */
  NBP,

  /**
   * Standard Documentation for Derivative Transactions on the Russian Financial Markets
   */
  RUSSIAN_DERIVATIVES,

  /**
   * Master Agreement and Contractual Terms for Repurchase Agreements on the Russian Financial Market
   */
  RUSSIAN_REPO,

  /**
   * globalCOAL Standard Coal Trading Agreement
   */
  S_CO_TA,

  /**
   * Swiss Master Agreement for OTC Derivatives Instruments
   */
  SWISS,

  /**
   * TTF Hub Natural Gas Trading Terms and Conditions
   */
  TTF,

  /**
   * Zeebrugge Hub Natural Gas Trading Terms and Conditions
   */
  ZBT
}
/**
 * The enumerated values to specify the type of annex to be used with master confirmation agreement governing the transaction.
 */
export enum MasterConfirmationAnnexTypeEnum {

  /**
   * The Index Variance Swap 2004 Annex to the ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement and to the Revised ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2004_INDEX_VARIANCE_SWAP_AMERICAS_INTERDEALER,

  /**
   * The Share Variance Swap 2004 Annex to the ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement and to the Revised ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2004_SHARE_VARIANCE_SWAP_AMERICAS_INTERDEALER,

  /**
   * The Dispersion Variance Swap Annex to the Revised 2007 ISDA European Variance Swap Master Confirmation Agreement applies.
   */
  ISDA_2007_DISPERSION_VARIANCE_SWAP_EUROPEAN,

  /**
   * The EFS (Equity Share Finance Swap) 2007 Annex to the ISDA 2007 European Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2007_EQUITY_FINANCE_SWAP_EUROPEAN,

  /**
   * The Index Variance Swap 2007 Annex to the Revised ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2007_INDEX_VARIANCE_SWAP_AMERICAS_INTERDEALER,

  /**
   * The Share Variance Swap 2007 Annex to the Revised ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2007_SHARE_VARIANCE_SWAP_AMERICAS_INTERDEALER,

  /**
   * The Variance Option Standard Terms Appendix to the Revised ISDA 2007 European Variance Swap Master Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_OPTION_EUROPEAN,

  /**
   * The Cash-settled Open Market EFS (Equity Finance Share Swap) 2008 Annex to the ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_FINANCE_SWAP_ASIA_EXCLUDING_JAPAN,

  /**
   * The Cash-settled Open Market EFS (Equity Finance Share Swap) Annex to the Revised ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_FINANCE_SWAP_ASIA_EXCLUDING_JAPAN_REV_1,

  /**
   * The Open Market Equity Option 2008 Annex to the ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_OPTION_ASIA_EXCLUDING_JAPAN,

  /**
   * The Open Market Equity Option Annex to the Revised ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_OPTION_ASIA_EXCLUDING_JAPAN_REV_1,

  /**
   * The Equity Option 2008 Annex to the ISDA 2008 Japanese Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_OPTION_JAPAN,

  /**
   * The Cash-settled Closed Market Index and Share Options 2009 Annex to the Revised ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_CLOSED_MARKETS_OPTIONS_ASIA_EXCLUDING_JAPAN,

  /**
   * The Index Swap 2009 Annex to the ISDA 2007 European Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_EQUITY_EUROPEAN_IS,

  /**
   * The Interdealer Share Swap 2009 Annex to the ISDA 2009 European Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_EQUITY_EUROPEAN_INTERDEALER_SS,

  /**
   * The Index and Share Options 2009 Annex to the ISDA 2009 Americas Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_INDEX_SHARE_OPTION_AMERICAS,

  /**
   * The Interdealer Index Swap 2009 Annex to the ISDA 2009 European Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_INDEX_SWAP_EUROPEAN_INTERDEALER,

  /**
   * The Index Swap 2009 Annex to the ISDA 2009 Pan-Asia Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_INDEX_SWAP_PAN_ASIA_INTERDEALER,

  /**
   * The Share Swap 2009 Annex to the ISDA 2009 Pan-Asia Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_SHARE_SWAP_PAN_ASIA,

  /**
   * The Fair Value Interdealer Share Swap 2010 Annex to the ISDA 2009 European Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2010_FAIR_VALUE_SHARE_SWAP_EUROPEAN_INTERDEALER,

  /**
   * The Cash-settled Index Option/Cash/Physically-settled Share Option 2010 Annex to the ISDA 2010 EMEA EM Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2010_INDEX_SHARE_OPTION_EMEA_INTERDEALER
}
/**
 * The enumerated values to specify the type of master confirmation agreement governing the transaction. While FpML positions the date a prefix, the CDM positions it as the suffix to handle grammar type constraints.
 */
export enum MasterConfirmationTypeEnum {

  /**
   * Used for CDS Index trades executed under the Dow Jones CDX Emerging Markets Master Confirmation.
   */
  DJ_CDX_EM,

  /**
   * Used for CDS Index trades executed under the Dow Jones CDX Emerging Markets Diversified Master Confirmation.
   */
  DJ_CDX_EM_DIV,

  /**
   * Used for CDS Index trades executed under the Dow Jones CDX Master Confirmation that covers CDX.NA.IG, CDX.NA.HY, and CDX.NA.XO.
   */
  DJ_CDX_NA,

  /**
   * Used for CDS Index trades executed under the Dow Jones iTraxx Europe Master Confirmation Agreement.
   */
  DJ_I_TRAXX_EUROPE,

  /**
   * A general reference to the types of Americas Master Confirmation Agreements. Use the more specific values to reference a specific type of Americas Master Confirmation Agreement.
   */
  EQUITY_AMERICAS,

  /**
   * A general reference to the types of Asia Master Confirmation Agreements. Use the more specific values to reference a specific type of Asia Master Confirmation Agreement.
   */
  EQUITY_ASIA,

  /**
   * A general reference to the types of European Master Confirmation Agreements. Use the more specific values to reference a specific type of European Master Confirmation Agreement.
   */
  EQUITY_EUROPEAN,

  /**
   * ISDA 1999 Master Credit Derivatives Confirmation Agreement.
   */
  ISDA_1999_CREDIT,

  /**
   * ISDA 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Asia had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2003_CREDIT_ASIA,

  /**
   * ISDA 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Australia and New Zealand had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2003_CREDIT_AUSTRALIA_NEW_ZEALAND,

  /**
   * ISDA 2003 Master Credit Derivatives Confirmation Agreement interpreted as if European had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2003_CREDIT_EUROPEAN,

  /**
   * ISDA 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Japan had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2003_CREDIT_JAPAN,

  /**
   * ISDA 2003 Master Credit Derivatives Confirmation Agreement interpreted as if North American had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2003_CREDIT_NORTH_AMERICAN,

  /**
   * ISDA 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Singapore had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2003_CREDIT_SINGAPORE,

  /**
   * ISDA Sovereign 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Asia had been specified as the relevant Transaction Type in the Transaction Supplement. The 2003 Sovereign Master Confirmation has been superceded by the 2004.
   */
  ISDA_2003_CREDIT_SOVEREIGN_ASIA,

  /**
   * ISDA Sovereign 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Central and Eastern Europe had been specified as the relevant Transaction Type in the Transaction Supplement. The 2003 Sovereign Master Confirmation has been superceded by the 2004.
   */
  ISDA_2003_CREDIT_SOVEREIGN_CENTRAL_AND_EASTERN_EUROPE,

  /**
   * ISDA Sovereign 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Japan had been specified as the relevant Transaction Type in the Transaction Supplement. The 2003 Sovereign Master Confirmation has been superceded by the 2004.
   */
  ISDA_2003_CREDIT_SOVEREIGN_JAPAN,

  /**
   * ISDA Sovereign 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Latin America had been specified as the relevant Transaction Type in the Transaction Supplement. The 2003 Sovereign Master Confirmation has been superceded by the 2004.
   */
  ISDA_2003_CREDIT_SOVEREIGN_LATIN_AMERICA,

  /**
   * ISDA Sovereign 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Middle East had been specified as the relevant Transaction Type in the Transaction Supplement. The 2003 Sovereign Master Confirmation has been superceded by the 2004.
   */
  ISDA_2003_CREDIT_SOVEREIGN_MIDDLE_EAST,

  /**
   * ISDA Sovereign 2003 Master Credit Derivatives Confirmation Agreement interpreted as if Western Europe had been specified as the relevant Transaction Type in the Transaction Supplement. The 2003 Sovereign Master Confirmation has been superceded by the 2004.
   */
  ISDA_2003_CREDIT_SOVEREIGN_WESTERN_EUROPE,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAsiaCorporate.
   */
  ISDA_2003_STANDARD_CREDIT_ASIA,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAustraliaCorporate/Sovereign and StandardNewZealandCorporate/Sovereign.
   */
  ISDA_2003_STANDARD_CREDIT_AUSTRALIA_NEW_ZEALAND,

  /**
   * Dummy MCA value mirroring the matrix term value StandardEuropeanCorporate.
   */
  ISDA_2003_STANDARD_CREDIT_EUROPEAN,

  /**
   * Dummy MCA value mirroring the matrix term values StandardJapanCorporate.
   */
  ISDA_2003_STANDARD_CREDIT_JAPAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardNorthAmericanCorporate.
   */
  ISDA_2003_STANDARD_CREDIT_NORTH_AMERICAN,

  /**
   * Dummy MCA value mirroring the matrix term values StandardSingaporeCorporate/Sovereign.
   */
  ISDA_2003_STANDARD_CREDIT_SINGAPORE,

  /**
   * ISDA Sovereign 2004 Master Credit Derivatives Confirmation Agreement interpreted as if Asia had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2004_CREDIT_SOVEREIGN_ASIA,

  /**
   * ISDA Sovereign 2004 Master Credit Derivatives Confirmation Agreement interpreted as if Emerging European and Middle Eastern had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2004_CREDIT_SOVEREIGN_EMERGING_EUROPEAN_AND_MIDDLE_EASTERN,

  /**
   * ISDA Sovereign 2004 Master Credit Derivatives Confirmation Agreement interpreted as if Japan had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2004_CREDIT_SOVEREIGN_JAPAN,

  /**
   * ISDA Sovereign 2004 Master Credit Derivatives Confirmation Agreement interpreted as if Latin American had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2004_CREDIT_SOVEREIGN_LATIN_AMERICAN,

  /**
   * ISDA Sovereign 2004 Master Credit Derivatives Confirmation Agreement interpreted as if Western European had been specified as the relevant Transaction Type in the Transaction Supplement.
   */
  ISDA_2004_CREDIT_SOVEREIGN_WESTERN_EUROPEAN,

  /**
   * The ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2004_EQUITY_AMERICAS_INTERDEALER,

  /**
   * The Revised ISDA 2004 Americas Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2004_EQUITY_AMERICAS_INTERDEALER_REV_1,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAsiaSovereign.
   */
  ISDA_2004_STANDARD_CREDIT_SOVEREIGN_ASIA,

  /**
   * Dummy MCA value mirroring the matrix term value StandardEmergingEuropeanAndMiddleEasternSovereign.
   */
  ISDA_2004_STANDARD_CREDIT_SOVEREIGN_EMERGING_EUROPEAN_AND_MIDDLE_EASTERN,

  /**
   * Dummy MCA value mirroring the matrix term values StandardJapanSovereign.
   */
  ISDA_2004_STANDARD_CREDIT_SOVEREIGN_JAPAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardLatinAmericaSovereign.
   */
  ISDA_2004_STANDARD_CREDIT_SOVEREIGN_LATIN_AMERICAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardWesternEuropeanSovereign.
   */
  ISDA_2004_STANDARD_CREDIT_SOVEREIGN_WESTERN_EUROPEAN,

  /**
   * ISDA 2005 AEJ (Asia Excluding Japan) Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2005_EQUITY_ASIA_EXCLUDING_JAPAN_INTERDEALER,

  /**
   * Second Revised ISDA 2005 AEJ (Asia Excluding Japan) Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2005_EQUITY_ASIA_EXCLUDING_JAPAN_INTERDEALER_REV_2,

  /**
   * The ISDA 2005 Japanese Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2005_EQUITY_JAPANESE_INTERDEALER,

  /**
   * ISDA 2006 Variance Swap Japanese Confirmation Agreement applies.
   */
  ISDA_2006_VARIANCE_SWAP_JAPANESE,

  /**
   * ISDA 2006 Variance Swap Japanese Interdealer Confirmation Agreement applies.
   */
  ISDA_2006_VARIANCE_SWAP_JAPANESE_INTERDEALER,

  /**
   * The ISDA 2007 European Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2007_EQUITY_EUROPEAN,

  /**
   * The ISDA 2007 Americas Master Variance Swap Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_SWAP_AMERICAS,

  /**
   * The ISDA 2007 AEJ Master Variance Swap Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_SWAP_ASIA_EXCLUDING_JAPAN,

  /**
   * The Revised ISDA 2007 AEJ Master Variance Swap Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_SWAP_ASIA_EXCLUDING_JAPAN_REV_1,

  /**
   * The Second Revised ISDA 2007 AEJ Master Variance Swap Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_SWAP_ASIA_EXCLUDING_JAPAN_REV_2,

  /**
   * The ISDA 2007 European Variance Swap Master Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_SWAP_EUROPEAN,

  /**
   * The Revised ISDA 2007 European Variance Swap Master Confirmation Agreement applies.
   */
  ISDA_2007_VARIANCE_SWAP_EUROPEAN_REV_1,

  /**
   * The ISDA 2008 Japanese Dividend Swap Master Confirmation Agreement applies.
   */
  ISDA_2008_DIVIDEND_SWAP_JAPAN,

  /**
   * The Revised ISDA 2008 Japanese Dividend Swap Master Confirmation Agreement applies.
   */
  ISDA_2008_DIVIDEND_SWAP_JAPANESE_REV_1,

  /**
   * The ISDA 2008 Americas Master Designated/Exchange-Traded Contract Option Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_AMERICAS,

  /**
   * The ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_ASIA_EXCLUDING_JAPAN,

  /**
   * The Revised ISDA 2008 AEJ (Asia Excluding Japan) Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_ASIA_EXCLUDING_JAPAN_REV_1,

  /**
   * The ISDA 2008 Japanese Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2008_EQUITY_JAPAN,

  /**
   * The ISDA 2009 Americas Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_EQUITY_AMERICAS,

  /**
   * The ISDA 2009 European Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_EQUITY_EUROPEAN_INTERDEALER,

  /**
   * 2009 Pan-Asia Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2009_EQUITY_PAN_ASIA,

  /**
   * The ISDA 2010 EMEA EM Interdealer Master Equity Derivatives Confirmation Agreement applies.
   */
  ISDA_2010_EQUITY_EMEA_INTERDEALER,

  /**
   * The ISDA 2013 Americas Master Volatility Swap Confirmation Agreement applies.
   */
  ISDA_2013_VOLATILITY_SWAP_AMERICAS,

  /**
   * The ISDA 2013 AEJ Master Volatility Swap Confirmation Agreement applies.
   */
  ISDA_2013_VOLATILITY_SWAP_ASIA_EXCLUDING_JAPAN,

  /**
   * The ISDA 2013 European Volatility Swap Master Confirmation Agreement applies.
   */
  ISDA_2013_VOLATILITY_SWAP_EUROPEAN,

  /**
   * The ISDA 2013 Volatility Swap Japanese Confirmation Agreement applies.
   */
  ISDA_2013_VOLATILITY_SWAP_JAPANESE,

  /**
   * Used for CDS Index trades. Relevant Master Confirmation determined by the contents of the creditDefaultSwap element. Best practice is to use the most specific code that applies.
   */
  _2003_CREDIT_INDEX,

  /**
   * A privately negotiated European Interdealer Master Confirmation Agreement applies.
   */
  _2004_EQUITY_EUROPEAN_INTERDEALER,

  /**
   * A privately negotiated European Interdealer Master Confirmation Agreement applies.
   */
  _2005_VARIANCE_SWAP_EUROPEAN_INTERDEALER,

  /**
   * A European Interdealer Master Confirmation Agreement not defined by ISDA, and modified by the parties to the transaction applies.
   */
  _2006_DIVIDEND_SWAP_EUROPEAN,

  /**
   * A European Interdealer Master Confirmation Agreement not defined by ISDA applies.
   */
  _2006_DIVIDEND_SWAP_EUROPEAN_INTERDEALER,

  /**
   * Dummy MCA value mirroring the matrix term value AsiaCorporate.
   */
  _2014_CREDIT_ASIA,

  /**
   * Dummy MCA value mirroring the matrix term value AsiaFinancialCorporate.
   */
  _2014_CREDIT_ASIA_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value AustraliaCorporate/NewZealandCorporate.
   */
  _2014_CREDIT_AUSTRALIA_NEW_ZEALAND,

  /**
   * Dummy MCA value mirroring the matrix term value AustraliaFinancialCorporate/NewZealandFinancialCorporate.
   */
  _2014_CREDIT_AUSTRALIA_NEW_ZEALAND_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value EuropeanCorporate.
   */
  _2014_CREDIT_EUROPEAN,

  /**
   * Dummy MCA value mirroring the matrix term value EuropeanCoCoFinancialCorporate.
   */
  _2014_CREDIT_EUROPEAN_CO_CO_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value EuropeanFinancialCorporate.
   */
  _2014_CREDIT_EUROPEAN_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value JapanCorporate.
   */
  _2014_CREDIT_JAPAN,

  /**
   * Dummy MCA value mirroring the matrix term value JapanFinancialCorporate.
   */
  _2014_CREDIT_JAPAN_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value NorthAmericanCorporate.
   */
  _2014_CREDIT_NORTH_AMERICAN,

  /**
   * Dummy MCA value mirroring the matrix term value NorthAmericanFinancialCorporate.
   */
  _2014_CREDIT_NORTH_AMERICAN_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term values SingaporeCorporate.
   */
  _2014_CREDIT_SINGAPORE,

  /**
   * Dummy MCA value mirroring the matrix term values SingaporeFinancialCorporate.
   */
  _2014_CREDIT_SINGAPORE_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value AsiaSovereign.
   */
  _2014_CREDIT_SOVEREIGN_ASIA,

  /**
   * Dummy MCA value mirroring the matrix term value EmergingEuropeanAndMiddleEasternSovereign.
   */
  _2014_CREDIT_SOVEREIGN_EMERGING_EUROPEAN_AND_MIDDLE_EASTERN,

  /**
   * Dummy MCA value mirroring the matrix term value JapanSovereign.
   */
  _2014_CREDIT_SOVEREIGN_JAPAN,

  /**
   * Dummy MCA value mirroring the matrix term value LatinAmericaSovereign.
   */
  _2014_CREDIT_SOVEREIGN_LATIN_AMERICAN,

  /**
   * Dummy MCA value mirroring the matrix term value WesternEuropeanSovereign.
   */
  _2014_CREDIT_SOVEREIGN_WESTERN_EUROPEAN,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAsiaCorporate.
   */
  _2014_STANDARD_CREDIT_ASIA,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAsiaFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_ASIA_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAustraliaCorporate and StandardNewZealandCorporate.
   */
  _2014_STANDARD_CREDIT_AUSTRALIA_NEW_ZEALAND,

  /**
   * Dummy MCA value mirroring the matrix term values StandardAustraliaFinancialCorporate and StandardNewZealandFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_AUSTRALIA_NEW_ZEALAND_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value StandardEuropeanCorporate.
   */
  _2014_STANDARD_CREDIT_EUROPEAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardEuropeanCoCoFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_EUROPEAN_CO_CO_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value StandardEuropeanFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_EUROPEAN_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term values StandardJapanCorporate.
   */
  _2014_STANDARD_CREDIT_JAPAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardJapanFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_JAPAN_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value StandardNorthAmericanCorporate.
   */
  _2014_STANDARD_CREDIT_NORTH_AMERICAN,

  /**
   * Dummy MCA value mirroring the matrix term value standardNorthAmericanFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_NORTH_AMERICAN_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term values StandardSingaporeCorporate.
   */
  _2014_STANDARD_CREDIT_SINGAPORE,

  /**
   * Dummy MCA value mirroring the matrix term value StandardSingaporeFinancialCorporate.
   */
  _2014_STANDARD_CREDIT_SINGAPORE_FINANCIAL,

  /**
   * Dummy MCA value mirroring the matrix term value StandardAsiaSovereign.
   */
  _2014_STANDARD_CREDIT_SOVEREIGN_ASIA,

  /**
   * Dummy MCA value mirroring the matrix term value StandardEmergingEuropeanAndMiddleEasternSovereign.
   */
  _2014_STANDARD_CREDIT_SOVEREIGN_EMERGING_EUROPEAN_AND_MIDDLE_EASTERN,

  /**
   * Dummy MCA value mirroring the matrix term values StandardJapanSovereign.
   */
  _2014_STANDARD_CREDIT_SOVEREIGN_JAPAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardLatinAmericaSovereign.
   */
  _2014_STANDARD_CREDIT_SOVEREIGN_LATIN_AMERICAN,

  /**
   * Dummy MCA value mirroring the matrix term value StandardWesternEuropeanSovereign.
   */
  _2014_STANDARD_CREDIT_SOVEREIGN_WESTERN_EUROPEAN
}
/**
 * The enumerated values to specify a scheme of transaction types specified in the Equity Derivatives Settlement Matrix.
 */
export enum MatrixTermEnum {

  /**
   * Matrix Transaction Type of ASIA CORPORATE.
   */
  ASIA_CORPORATE,

  /**
   * Matrix Transaction Type of ASIA FINANCIAL CORPORATE.
   */
  ASIA_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of ASIA SOVEREIGN.
   */
  ASIA_SOVEREIGN,

  /**
   * Matrix Transaction Type of AUSTRALIA CORPORATE.
   */
  AUSTRALIA_CORPORATE,

  /**
   * Matrix Transaction Type of AUSTRALIA FINANCIAL CORPORATE.
   */
  AUSTRALIA_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of AUSTRALIA SOVEREIGN.
   */
  AUSTRALIA_SOVEREIGN,

  /**
   * Matrix Transaction Type of EMERGING EUROPEAN AND MIDDLE EASTERN SOVEREIGN.
   */
  EMERGING_EUROPEAN_AND_MIDDLE_EASTERN_SOVEREIGN,

  /**
   * Matrix Transaction Type of EMERGING EUROPEAN CORPORATE.
   */
  EMERGING_EUROPEAN_CORPORATE,

  /**
   * Matrix Transaction Type of EMERGING EUROPEAN CORPORATE LPN.
   */
  EMERGING_EUROPEAN_CORPORATE_LPN,

  /**
   * Matrix Transaction Type of EMERGING EUROPEAN FINANCIAL CORPORATE.
   */
  EMERGING_EUROPEAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of EMERGING EUROPEAN FINANCIAL CORPORATE LPN.
   */
  EMERGING_EUROPEAN_FINANCIAL_CORPORATE_LPN,

  /**
   * Matrix Transaction Type of EUROPEAN COCO FINANCIAL CORPORATE.
   */
  EUROPEAN_CO_CO_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of EUROPEAN CORPORATE.
   */
  EUROPEAN_CORPORATE,

  /**
   * Matrix Transaction Type of EUROPEAN FINANCIAL CORPORATE.
   */
  EUROPEAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of EUROPEAN SENIOR NON PREFERRED FINANCIAL CORPORATE.
   */
  EUROPEAN_SENIOR_NON_PREFERRED_FINANCIAL_CORPORATE,

  /**
   * The ISDA-published 2011 Index Volatility Swap Agreement for Open Markets.
   */
  IVS_1_OPEN_MARKETS,

  /**
   * Matrix Transaction Type of JAPAN CORPORATE.
   */
  JAPAN_CORPORATE,

  /**
   * Matrix Transaction Type of JAPAN FINANCIAL CORPORATE.
   */
  JAPAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of JAPAN SOVEREIGN.
   */
  JAPAN_SOVEREIGN,

  /**
   * Matrix Transaction Type of LATIN AMERICA CORPORATE.
   */
  LATIN_AMERICA_CORPORATE,

  /**
   * Matrix Transaction Type of LATIN AMERICA CORPORATE B.
   */
  LATIN_AMERICA_CORPORATE_BOND,

  /**
   * Matrix Transaction Type of LATIN AMERICA CORPORATE BL.
   */
  LATIN_AMERICA_CORPORATE_BOND_OR_LOAN,

  /**
   * Matrix Transaction Type of LATIN AMERICA FINANCIAL CORPORATE B.
   */
  LATIN_AMERICA_FINANCIAL_CORPORATE_BOND,

  /**
   * Matrix Transaction Type of LATIN AMERICA FINANCIAL CORPORATE BL.
   */
  LATIN_AMERICA_FINANCIAL_CORPORATE_BOND_OR_LOAN,

  /**
   * Matrix Transaction Type of LATIN AMERICA SOVEREIGN.
   */
  LATIN_AMERICA_SOVEREIGN,

  /**
   * Matrix Transaction Type of NEW ZEALAND CORPORATE.
   */
  NEW_ZEALAND_CORPORATE,

  /**
   * Matrix Transaction Type of NEW ZEALAND FINANCIAL CORPORATE.
   */
  NEW_ZEALAND_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of NEW ZEALAND SOVEREIGN.
   */
  NEW_ZEALAND_SOVEREIGN,

  /**
   * Matrix Transaction Type of NORTH AMERICAN CORPORATE.
   */
  NORTH_AMERICAN_CORPORATE,

  /**
   * Matrix Transaction Type of NORTH AMERICAN FINANCIAL CORPORATE.
   */
  NORTH_AMERICAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of SINGAPORE CORPORATE.
   */
  SINGAPORE_CORPORATE,

  /**
   * Matrix Transaction Type of SINGAPORE FINANCIAL CORPORATE.
   */
  SINGAPORE_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of SINGAPORE SOVEREIGN.
   */
  SINGAPORE_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD ASIA CORPORATE.
   */
  STANDARD_ASIA_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD ASIA FINANCIAL CORPORATE.
   */
  STANDARD_ASIA_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD ASIA SOVEREIGN.
   */
  STANDARD_ASIA_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD AUSTRALIA CORPORATE.
   */
  STANDARD_AUSTRALIA_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD AUSTRALIA FINANCIAL CORPORATE.
   */
  STANDARD_AUSTRALIA_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD AUSTRALIA SOVEREIGN.
   */
  STANDARD_AUSTRALIA_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD EMERGING EUROPEAN AND MIDDLE EASTERN SOVEREIGN.
   */
  STANDARD_EMERGING_EUROPEAN_AND_MIDDLE_EASTERN_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD EMERGING EUROPEAN CORPORATE.
   */
  STANDARD_EMERGING_EUROPEAN_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD EMERGING EUROPEAN CORPORATE LPN.
   */
  STANDARD_EMERGING_EUROPEAN_CORPORATE_LPN,

  /**
   * Matrix Transaction Type of STANDARD EMERGING EUROPEAN FINANCIAL CORPORATE.
   */
  STANDARD_EMERGING_EUROPEAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD EMERGING EUROPEAN FINANCIAL CORPORATE LPN.
   */
  STANDARD_EMERGING_EUROPEAN_FINANCIAL_CORPORATE_LPN,

  /**
   * Matrix Transaction Type of STANDARD EUROPEAN COCO FINANCIAL CORPORATE.
   */
  STANDARD_EUROPEAN_CO_CO_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD EUROPEAN CORPORATE.
   */
  STANDARD_EUROPEAN_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD EUROPEAN FINANCIAL CORPORATE.
   */
  STANDARD_EUROPEAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD EUROPEAN SENIOR NON PREFERRED FINANCIAL CORPORATE.
   */
  STANDARD_EUROPEAN_SENIOR_NON_PREFERRED_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD JAPAN CORPORATE.
   */
  STANDARD_JAPAN_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD JAPAN FINANCIAL CORPORATE.
   */
  STANDARD_JAPAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD JAPAN SOVEREIGN.
   */
  STANDARD_JAPAN_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD LATIN AMERICA CORPORATE B.
   */
  STANDARD_LATIN_AMERICA_CORPORATE_BOND,

  /**
   * Matrix Transaction Type of STANDARD LATIN AMERICA CORPORATE BL.
   */
  STANDARD_LATIN_AMERICA_CORPORATE_BOND_OR_LOAN,

  /**
   * Matrix Transaction Type of STANDARD LATIN AMERICA FINANCIAL CORPORATE B.
   */
  STANDARD_LATIN_AMERICA_FINANCIAL_CORPORATE_BOND,

  /**
   * Matrix Transaction Type of STANDARD LATIN AMERICA FINANCIAL CORPORATE BL.
   */
  STANDARD_LATIN_AMERICA_FINANCIAL_CORPORATE_BOND_OR_LOAN,

  /**
   * Matrix Transaction Type of STANDARD LATIN AMERICA SOVEREIGN.
   */
  STANDARD_LATIN_AMERICA_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD NEW ZEALAND CORPORATE.
   */
  STANDARD_NEW_ZEALAND_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD NEW ZEALAND FINANCIAL CORPORATE.
   */
  STANDARD_NEW_ZEALAND_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD NEW ZEALAND SOVEREIGN.
   */
  STANDARD_NEW_ZEALAND_SOVEREIGN,

  /**
   * Matrix Transaction Type of STANDARD NORTH AMERICAN CORPORATE.
   */
  STANDARD_NORTH_AMERICAN_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD NORTH AMERICAN FINANCIAL CORPORATE.
   */
  STANDARD_NORTH_AMERICAN_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD SINGAPORE CORPORATE.
   */
  STANDARD_SINGAPORE_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD SINGAPORE FINANCIAL CORPORATE.
   */
  STANDARD_SINGAPORE_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD SINGAPORE SOVEREIGN.
   */
  STANDARD_SINGAPORE_SOVEREIGN,

  /**
   * Transaction Type of STANDARD SUBORDINATED EUROPEAN INSURANCE CORPORATE.
   */
  STANDARD_SUBORDINATED_EUROPEAN_INSURANCE_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD SUKUK FINANCIAL CORPORATE.
   */
  STANDARD_SUKUK_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of STANDARD U.S. MUNICIPAL FULL FAITH AND CREDIT.
   */
  STANDARD_US_MUNICIPAL_FULL_FAITH_AND_CREDIT,

  /**
   * Matrix Transaction Type of STANDARD U.S. MUNICIPAL GENERAL FUND.
   */
  STANDARD_US_MUNICIPAL_GENERAL_FUND,

  /**
   * Matrix Transaction Type of STANDARD U.S. MUNICIPAL REVENUE.
   */
  STANDARD_US_MUNICIPAL_REVENUE,

  /**
   * Matrix Transaction Type of STANDARD WESTERN EUROPEAN SOVEREIGN.
   */
  STANDARD_WESTERN_EUROPEAN_SOVEREIGN,

  /**
   * Matrix Transaction Type of SUBORDINATED EUROPEAN INSURANCE CORPORATE.
   */
  SUBORDINATED_EUROPEAN_INSURANCE_CORPORATE,

  /**
   * Matrix Transaction Type of SUKUK CORPORATE.
   */
  SUKUK_CORPORATE,

  /**
   * Matrix Transaction Type of SUKUK FINANCIAL CORPORATE.
   */
  SUKUK_FINANCIAL_CORPORATE,

  /**
   * Matrix Transaction Type of SUKUK SOVEREIGN.
   */
  SUKUK_SOVEREIGN,

  /**
   * Matrix Transaction Type of U.S. MUNICIPAL FULL FAITH AND CREDIT.
   */
  US_MUNICIPAL_FULL_FAITH_AND_CREDIT,

  /**
   * Matrix Transaction Type of U.S. MUNICIPAL GENERAL FUND.
   */
  US_MUNICIPAL_GENERAL_FUND,

  /**
   * Matrix Transaction Type of U.S. MUNICIPAL REVENUE.
   */
  US_MUNICIPAL_REVENUE,

  /**
   * Matrix Transaction Type of WESTERN EUROPEAN SOVEREIGN.
   */
  WESTERN_EUROPEAN_SOVEREIGN
}
/**
 * The enumerated values to specify the identification the form of applicable matrix.
 */
export enum MatrixTypeEnum {

  /**
   * The ISDA-published Credit Derivatives Physical Settlement Matrix.
   */
  CREDIT_DERIVATIVES_PHYSICAL_SETTLEMENT_MATRIX,

  /**
   * The ISDA-published Equity Derivatives Matrix.
   */
  EQUITY_DERIVATIVES_MATRIX,

  /**
   * The ISDA-published 2000 ISDA Definitions Settlement Matrix for Early Terminations and Swaptions.
   */
  SETTLEMENT_MATRIX
}
/**
 * The enumerated values to specify a mortgage typology.
 */
export enum MortgageSectorEnum {

  /**
   * Asset Backed Security.
   */
  ABS,

  /**
   * Collateralized Debt Obligation.
   */
  CDO,

  /**
   * Commercial Mortgage Backed Security.
   */
  CMBS,

  /**
   * Residential Mortgage Backed Security.
   */
  RMBS
}
/**
 * Defines the consequences of nationalization, insolvency and delisting events relating to the underlying.
 */
export enum NationalizationOrInsolvencyOrDelistingEventEnum {

  /**
   * The trade is terminated.
   */
  CANCELLATION_AND_PAYMENT,

  /**
   * The parties may, but are not obliged, to terminate the transaction on mutually acceptable terms and if the terms are not agreed then the transaction continues.
   */
  NEGOTIATED_CLOSEOUT
}
/**
 * The enumerated values for the natural person's role.
 */
export enum NaturalPersonRoleEnum {

  /**
   * The person who arranged with a client to execute the trade.
   */
  BROKER,

  /**
   * Acquirer of the legal title to the financial instrument.
   */
  BUYER,

  /**
   * The party or person with legal responsibility for authorization of the execution of the transaction.
   */
  DECISION_MAKER,

  /**
   * Person within the firm who is responsible for execution of the transaction.
   */
  EXECUTION_WITHIN_FIRM,

  /**
   * Person who is responsible for making the investment decision.
   */
  INVESTMENT_DECISION_MAKER,

  /**
   * Seller of the legal title to the financial instrument.
   */
  SELLER,

  /**
   * The person who executed the trade.
   */
  TRADER
}
/**
 * The enumerated values to specify the method of calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).
 */
export enum NegativeInterestRateTreatmentEnum {

  /**
   * Negative Interest Rate Method. Per 2000 ISDA Definitions, Section 6.4 Negative Interest Rates, paragraphs (b) and (c).
   */
  NEGATIVE_INTEREST_RATE_METHOD,

  /**
   * Zero Interest Rate Method. Per 2000 ISDA Definitions, Section 6.4. Negative Interest Rates, paragraphs (d) and (e).
   */
  ZERO_INTEREST_RATE_METHOD
}
/**
 * The enumerated value to specify the fact that no threshold applies.
 */
export enum NoThresholdEnum {

  ZERO
}
/**
 * The enumerated values to specify the conditions that govern the adjustment to the number of units of the return swap.
 */
export enum NotionalAdjustmentEnum {

  /**
   * The adjustments to the number of units are governed by an execution clause.
   */
  EXECUTION,

  /**
   * The adjustments to the number of units are governed by a portfolio rebalancing clause.
   */
  PORTFOLIO_REBALANCING,

  /**
   * The adjustments to the number of units are not governed by any specific clause.
   */
  STANDARD
}
/**
 * The enumerated values used in both the obligations and deliverable obligations of the credit default swap to represent a class or type of securities which apply.
 */
export enum ObligationCategoryEnum {

  /**
   * ISDA term 'Bond'.
   */
  BOND,

  /**
   * ISDA term 'Bond or Loan'.
   */
  BOND_OR_LOAN,

  /**
   * ISDA term 'Borrowed Money'.
   */
  BORROWED_MONEY,

  /**
   * ISDA term 'Loan'.
   */
  LOAN,

  /**
   * ISDA term 'Payment'.
   */
  PAYMENT,

  /**
   * ISDA term 'Reference Obligations Only'.
   */
  REFERENCE_OBLIGATIONS_ONLY
}
/**
 * The enumerated values to specify the type of the option. In FpML, OptionTypeEnum is a union with PutCallEnum, which specifies whether the option is a put or a call.
 */
export enum OptionTypeEnum {

  /**
   * A call option gives the holder the right to buy the underlying asset by a certain date for a certain price.
   */
  CALL,

  /**
   * A 'payer' option: If you buy a 'payer' option you have the right but not the obligation to enter into the underlying swap transaction as the 'fixed' rate/price payer and receive float.
   */
  PAYER,

  /**
   * A put option gives the holder the right to sell the underlying asset by a certain date for a certain price.
   */
  PUT,

  /**
   * A 'receiver' option: If you buy a 'receiver' option you have the right but not the obligation to enter into the underlying swap transaction as the 'fixed' rate/price receiver and pay float.
   */
  RECEIVER,

  /**
   * A straddle strategy, which involves the simultaneous buying of a put and a call of the same underlier, at the same strike and same expiration date
   */
  STRADDLE
}
/**
 * The enumeration values to specify the originating event that gave way to the trade.
 */
export enum OriginatingEventEnum {

  /**
   * The trade results from an allocation event.
   */
  ALLOCATION,

  /**
   * The trade results from a trade amendment.
   */
  AMENDMENT,

  /**
   * The trade results from a clearing event.
   */
  CLEARING,

  /**
   * The trade results from a compression event.
   */
  COMPRESSION,

  /**
   * The trade results from an exercise event.
   */
  EXERCISE,

  /**
   * The trade results from a new trade event.
   */
  NEW_TRADE,

  /**
   * The trade presented results from a novation event.
   */
  NOVATION,

  /**
   * The trade results from a partial exercise event.
   */
  PARTIAL_EXERCISE,

  /**
   * The trade results from a partial novation event.
   */
  PARTIAL_NOVATION,

  /**
   * The trade results from a transfer.
   */
  TRANSFER
}
/**
 * The enumerated values to specify the type of package transaction.
 */
export enum PackageTypeEnum {

  /**
   * A strategy in which a firm either pays or receives fixed for intermediate term (the 'body'), and does the opposite (receives or pays fixed) for a short and a long term (the 'wings'').
   */
  BUTTERFLY,

  /**
   * A strategy in which a swap is used to Roll from one IMM date into another IMM swap.
   */
  CALENDAR_ROLL,

  /**
   * A strategy in which 2 trades on different dates are done at the same time, e.g., Sept vs June.
   */
  CALENDAR_SPREAD,

  /**
   * A package created for a particular client need e.g. portfolioCompression, termination.
   */
  CUSTOM,

  /**
   * A strategy in which a firms buys new version of index and sells and old version of the same index.
   */
  INDEX_ROLL,

  /**
   * A package in which only a maximum of one of the components will be executed (used for credit limit checking/orders).
   */
  ONE_CANCELS_OTHERS,

  /**
   * A strategy in which a firm either buys a treasury and enters a payer swap, or sells treasury and enters a receiver swap.
   */
  SWAP_SPREAD,

  /**
   * A strategy in which a firm either pays or receives fixed for some term versus the opposite (receives or pays fixed) for different term. Typically the second term starts at the completion of the first.
   */
  SWITCH
}
/**
 * The enumeration values associated with party identifier sources.
 */
export enum PartyIdSourceEnum {

  /**
   * Alien Registration Number, number assigned by a social security agency to identify a non-resident person.
   */
  ARNU,

  /**
   * The Bank Identifier Code.
   */
  BIC,

  /**
   * Passport Number, number assigned by an authority to identify the passport number of a person.
   */
  CCPT,

  /**
   * Customer Identification Number, number assigned by an issuer to identify a customer.
   */
  CUST,

  /**
   * Drivers License Number, number assigned by an authority to identify a driver's license.
   */
  DRLC,

  /**
   * Employee Identification Number, number assigned by a registration authority to an employee.
   */
  EMPL,

  /**
   * The ISO 17442:2012 Legal Entity Identifier.
   */
  LEI,

  /**
   * National Identity Number, number assigned by an authority to identify the national identity number of a person..
   */
  NIDN,

  /**
   * Social Security Number, number assigned by an authority to identify the social security number of a person.
   */
  SOSE,

  /**
   * Tax Identification Number, number assigned by a tax authority to identify a person.
   */
  TXID
}
/**
 * The enumerated values for the party role. The enumerated values go beyond the FpML partyRoleScheme as they also include elements that are part of the FpML Trade, such as the Barrier Determination Agent and the Hedging Party.
 */
export enum PartyRoleEnum {

  /**
   * Organization responsible for preparing the accounting for the trade.
   */
  ACCOUNTANT,

  /**
   * The organization responsible for supplying the allocations for a trade to be allocated to multiple accounts/organizations.
   */
  ALLOCATION_AGENT,

  /**
   * The organization that arranged the trade, i.e. brought together the counterparties.  Synonyms/Alternatives: Inter-dealer broker, agent.
   */
  ARRANGING_BROKER,

  /**
   * The party specified in the related confirmation as Barrier Determination Agent.
   */
  BARRIER_DETERMINATION_AGENT,

  /**
   * Organization that suffers the economic benefit of the trade.  The beneficiary may be distinct from the principal/counterparty - an example occurs when a hedge fund trades via a prime broker; in this case the principal is the prime broker, but the beneficiary is the hedge fund.  This can be represented as a payer/receiver account in the name of the hedge fund, but it is also possible to add the party role of 'Beneficiary' at the partyTradeInformation level.
   */
  BENEFICIARY,

  /**
   * The entity for which the organization supporting the trade's processing has booked/recorded the trade. This is used in non-reporting workflows situations in which the trade doesn't need to be reported but a firm still wants to specify their own side.
   */
  BOOKING_PARTY,

  /**
   * Acquirer of the legal title to the financial instrument. In the case of an option, the buyer is the holder of the option. In the case of a swap or forward, the buyer will be determined by industry best practice.  This does not refer to an investor or investment manager or other organization on what is typically called  the 'Buy side'; for that, see the 'Client' role. Corresponds to 'Buyer' as defined in certain regulations such as ESMA MiFID II/MIFIR RTS 22 field 9.
   */
  BUYER,

  /**
   * The party or person who, having legal authority to act on behalf of the trade counterparty acting as Buyer as defined in this coding scheme, made the decision to acquire the financial instrument. Corresponds to 'buyer decision maker' as defined in ESMA's MIFIR RTS 23 report. This does not refer to the decision maker for what is traditionally called the 'Buy side'; for that, see the 'Client Decision Maker' role.
   */
  BUYER_DECISION_MAKER,

  /**
   * The party that provides credit support under English Law.
   */
  CHARGOR,

  /**
   * An organization that clears trades through a clearing house, via a clearing broker (member of the clearing house) who acts as an agent on its behalf. The term 'client' refers to the organization's role in the clearing process in relation to its clearing broker, and not whether it is a price maker or taker in the execution process.
   */
  CLEARING_CLIENT,

  /**
   * A party to the trade that claims a clearing exception, such as an end-user exception under Dodd-Frank Act provisions.
   */
  CLEARING_EXCEPTION_PARTY,

  /**
   * Organization that submits the trade to a clearing house on behalf of the principal. Synonyms/alternates: Futures Commission Merchant (FCM), Clearing Broker, Clearing Member Firm. Some implementations use 'Clearing Broker' as synonym.
   */
  CLEARING_FIRM,

  /**
   * The organization that acts as a central counterparty to clear a derivatives contract.  This is used to represent the role of Central Counterparties (CCPs) or Derivative Clearing Organizations (DCOs).  Sometimes called 'ClearingService'. Some implementations also use the term 'Clearer'.
   */
  CLEARING_ORGANIZATION,

  /**
   * Client as defined under ESMA MIFIR. This is generally the investor or other client of an investment firm, and is synonymous with the Beneficiary in many circumstances.
   */
  CLIENT,

  /**
   * The party or person who, having legal authority to act on behalf of a trade counterparty, made the decision to acquire or sell the financial instrument.
   */
  CLIENT_DECISION_MAKER,

  /**
   * Organization serving as a financial intermediary for the purposes of electronic confirmation or providing services for post-processing of transactional data.
   */
  CONFIRMATION_PLATFORM,

  /**
   * A party to a contractual document.  If the intended usage relates to the context of the trade lifecycle, more specific annotations have been defined which might be more appropriate.
   */
  CONTRACTUAL_PARTY,

  /**
   * Organization officially attached to the counterparty. e.g. partner, branch, subsidiary.
   */
  COUNTER_PARTY_AFFILIATE,

  /**
   * The topmost entity or organization, within the corporate hierarchy, responsible for the reporting party.
   */
  COUNTER_PARTY_ULTIMATE_PARENT,

  /**
   * An economic counterparty to the trade. Synonym: principal.
   */
  COUNTERPARTY,

  /**
   * Organization that enhances the credit of another organization (similar to guarantor, but may not fully guarantee the obligation).
   */
  CREDIT_SUPPORT_PROVIDER,

  /**
   * Organization that maintains custody of the asset represented by the trade on behalf of the owner/principal.
   */
  CUSTODIAN,

  /**
   * Entity submitting the transaction report to the competent authority.
   */
  DATA_SUBMITTER,

  /**
   * The party referenced is specified in the contract confirmation as Determination Party.
   */
  DETERMINING_PARTY,

  /**
   * Organization that is disputing the trade or transaction.
   */
  DISPUTING_PARTY,

  /**
   * A marketplace organization which purpose is to maintain document records.  If the intended usage relates to the context of the trade lifecycle, more specific annotations have been defined which might be more appropriate.
   */
  DOCUMENT_REPOSITORY,

  /**
   * The (generally sell-side) organization that executed the trade; the price-making party.
   */
  EXECUTING_BROKER,

  /**
   * Entity executing the transaction.  If the transaction is executed directly by the reporting party, it will be the reporting party.  If it is executed by an execution agent or an affiliated party on behalf of the reporting party, it will be that affiliate or agent.
   */
  EXECUTING_ENTITY,

  /**
   * The (generally buy-side) organization that acts to execute trades on behalf of an investor. Typically this is an investment manager or asset manager, and also makes the investment decisions for the investor. If required, a separate InvestmentDecision role can be specified to distinguish that the party making the investment decision is different.
   */
  EXECUTION_AGENT,

  /**
   * The facility, exchange, or market where the trade was executed. Synonym: Swap Execution Facility, Designated Contract Market, Execution Venue.
   */
  EXECUTION_FACILITY,

  /**
   * Organization that backs (guarantees) the credit risk of the trade.
   */
  GUARANTOR,

  /**
   * The ISDA Hedging Party that is specified in the related confirmation as Hedging, or if no Hedging Party is specified, either party to the contract.
   */
  HEDGING_PARTY,

  /**
   * The entity transmitting the order to the reporting firm. Synonym: Transmitting Firm.
   */
  ORDER_TRANSMITTER,

  /**
   * The party that provides credit support under New York Law.
   */
  PLEDGOR,

  /**
   * The organization that takes on or took on the credit risk for this trade by stepping in between the two economic parties (without a central counterparty clearing mechanism).
   */
  PRIME_BROKER,

  /**
   * The trade repository at which the trade was reported previous to the current trade repository.
   */
  PRIOR_TRADE_REPOSITORY,

  /**
   * The reporting service (whether trade repository, market data service, or exchange/facility/venue data distribution service) that published the report of this trade.
   */
  PUBLICATION_VENUE,

  /**
   * The party with the regulatory responsibility to report this trade.
   */
  REPORTING_PARTY,

  /**
   * Organization officially attached to the reporting party  e.g. partner, branch, subsidiary.
   */
  REPORTING_PARTY_AFFILIATE,

  /**
   * The topmost entity or organization, within the corporate hierarchy, responsible for the reporting party.
   */
  REPORTING_PARTY_ULTIMATE_PARENT,

  /**
   * The party that receives credit support under New York or English Law.
   */
  SECURED_PARTY,

  /**
   * A counterparty in a trade, which performs in one of the following capacities: 1) it transfers or agrees to transfer in the future an instrument or title to that instrument in exchange for payment, 2) it writes a derivatives instrument such as an option or a swap in which it provides risk protection to the buyer. This does not refer to the broker/dealer or other organization on what is typically called  the 'Sell side'; for that, see the 'Executing Broker' role. Corresponds to 'Seller' as defined in certain regulations such as ESMA MiFID II/MIFIR RTS 22 field 16.
   */
  SELLER,

  /**
   * The party or person who, having legal authority to act on behalf of the trade counterparty acting as Seller as defined in this coding scheme, made the decision to sell the financial instrument. Corresponds to 'seller decision maker' as defined in ESMA's MIFIR RTS 23 report. This does not refer to the decision maker for what is traditionally called the 'Sell side'; for that, see the 'Trader' person role.
   */
  SELLER_DECISION_MAKER,

  /**
   * The organization that makes or receives payments on behalf of the given principal party.
   */
  SETTLEMENT_AGENT,

  /**
   * An organization that maintains records of the trade for regulatory reporting purposes.
   */
  TRADE_REPOSITORY,

  /**
   * The organization that originally supplied the record of the trade. In the context of regulatory reporting, it is the submitter of the trade record to a regulator or TR.
   */
  TRADE_SOURCE,

  /**
   * The entity responsible for managing the assets/investments of this party.  Synonym:  Asset Manager, Investment Manager, Trading Advisory.
   */
  TRADING_MANAGER,

  /**
   * An entity with which this party trades from time to time, ie. with which it acts as a counterparty on some transactions.   This role is used for static reference data, not individual transactions.
   */
  TRADING_PARTNER
}
/**
 * The enumerated values to specify whether payments occur relative to the calculation period start date or end date, each reset date, valuation date or the last pricing date.
 */
export enum PayRelativeToEnum {

  /**
   * Payments will occur relative to the last day of each calculation period.
   */
  CALCULATION_PERIOD_END_DATE,

  /**
   * Payments will occur relative to the first day of each calculation period.
   */
  CALCULATION_PERIOD_START_DATE,

  /**
   * Payments will occur relative to the last Pricing Date of each Calculation Period.
   */
  LAST_PRICING_DATE,

  /**
   * Payments will occur relative to the reset date.
   */
  RESET_DATE,

  /**
   * Payments will occur relative to the valuation date.
   */
  VALUATION_DATE
}
/**
 * The enumerated values to specify an interest rate stream payer or receiver party.
 */
export enum PayerReceiverEnum {

  /**
   * The party identified as the stream payer.
   */
  PAYER,

  /**
   * The party identified as the stream receiver.
   */
  RECEIVER
}
/**
 * The enumeration values to specify the payment status.
 */
export enum PaymentStatusEnum {

  /**
   * The payment is disputed.
   */
  DISPUTED,

  /**
   * The payment has been instructed.
   */
  INSTRUCTED,

  /**
   * The payment is pending instruction.
   */
  PENDING,

  /**
   * The payment has been settled.
   */
  SETTLED
}
/**
 * The enumeration values to specify the type of payment.
 */
export enum PaymentTypeEnum {

  /**
   * A cash flow associated with an amendment lifecycle event.
   */
  AMENDMENT_FEE,

  /**
   * A cash flow resulting from the assignment of a contract to a new counterparty.
   */
  ASSIGNMENT_FEE,

  /**
   * The brokerage commission.
   */
  BROKERAGE_COMMISSION,

  /**
   * A cash flow corresponding to the periodic accrued interests.
   */
  COUPON,

  /**
   * A cashflow resulting from a credit event.
   */
  CREDIT_EVENT,

  /**
   * A cash flow corresponding to the synthetic dividend of an equity underlier asset traded through a derivative instrument.
   */
  DIVIDEND_RETURN,

  /**
   * A cash flow associated with an exercise lifecycle event.
   */
  EXERCISE_FEE,

  /**
   * A generic term for describing a non-scheduled cashflow that can be associated either with the initial contract, with some later corrections to it (e.g. a correction to the day count fraction that has a cashflow impact) or with some lifecycle events. Fees that are specifically associated with termination and partial termination, increase, amendment, and exercise events are qualified accordingly.
   */
  FEE,

  /**
   * A cash flow associated with an increase lifecycle event.
   */
  INCREASE_FEE,

  /**
   * Interest, without qualification as to whether it a gross or net interest relates cashflow.
   */
  INTEREST,

  /**
   * A cash flow corresponding to the return of the interest rate portion of a derivative instrument that has different types of underlying assets, such as a total return swap.
   */
  INTEREST_RETURN,

  NET_CASHFLOW,

  /**
   * Net interest across payout components. Applicable to products such as interest rate swaps.
   */
  NET_INTEREST,

  /**
   * The novation fee.
   */
  NOVATION_FEE,

  /**
   * A cash flow associated with a partial termination lifecycle event.
   */
  PARTIAL_TERMINATION_FEE,

  /**
   * The premium associated with an OTC contract such as an option or a cap/floor.
   */
  PREMIUM,

  /**
   * A cash flow corresponding to the return of the price portion of a derivative instrument that has different types of underlying assets, such as a total return swap.
   */
  PRICE_RETURN,

  /**
   * A cash flow which amount typically corresponds to the notional of the contract and that is exchanged between the parties on trade inception and reverted back when the contract is terminated.
   */
  PRINCIPAL_EXCHANGE,

  /**
   * A cash flow associated with a termination lifecycle event.
   */
  TERMINATION_FEE,

  /**
   * An upfront cashflow associated to the swap to adjust for a difference between the swap price and the current market price.
   */
  UPFRONT_FEE
}
/**
 * The enumerated values to specify the period, e.g. day, week.
 */
export enum PeriodEnum {

  /**
   * Day
   */
  D,

  /**
   * Month
   */
  M,

  /**
   * Week
   */
  W,

  /**
   * Year
   */
  Y
}
/**
 * The enumerated values to specify a time period containing the additional value of Term.
 */
export enum PeriodExtendedEnum {

  /**
   * Day
   */
  D,

  /**
   * Month
   */
  M,

  /**
   * Term. The period commencing on the effective date and ending on the termination date. The T period always appears in association with periodMultiplier = 1, and the notation is intended for use in contexts where the interval thus qualified (e.g. accrual period, payment period, reset period, ...) spans the entire term of the trade.
   */
  T,

  /**
   * Week
   */
  W,

  /**
   * Year
   */
  Y
}
/**
 * The enumeration values to specify a time period containing additional values such as Term.
 */
export enum PeriodTimeEnum {

  /**
   * Period measured in hours.
   */
  HOUR,

  /**
   * Period measured in minutes.
   */
  MINUTE,

  /**
   * Period measured in seconds.
   */
  SECOND
}
/**
 * Enumeration to describe the different (risk) states of a Position, whether executed, settled, matured...etc
 */
export enum PositionStatusEnum {

  /**
   * The position has been cancelled, in case of a cancellation event following an execution.
   */
  CANCELLED,

  /**
   * The position has been executed, which is the point at which risk has been transferred.
   */
  EXECUTED,

  /**
   * Contract has been formed, in case position is on a contractual product.
   */
  FORMED,

  /**
   * The position has settled, in case product is subject to settlement after execution, such as securities.
   */
  SETTLED
}
/**
 * The enumerated values to specify the premium type for forward start options.
 */
export enum PremiumTypeEnum {

  FIXED,

  POST_PAID,

  PRE_PAID,

  VARIABLE
}
/**
 * he enumerated values to specify whether the price is expressed in absolute or relative terms.
 */
export enum PriceExpressionEnum {

  /**
   * The price is expressed as an absolute amount.
   */
  ABSOLUTE_TERMS,

  /**
   * The price is expressed in percentage of the notional amount.
   */
  PERCENTAGE_OF_NOTIONAL
}
/**
 * The enumerated values to specify the product identifier source. FpML doesn't specify a list of values.
 */
export enum ProductIdSourceEnum {

  /**
   * Bloomberg global ID- 12 digit alpha numeric randomly generated ID covering active and non-active securities.
   */
  BBGID,

  /**
   * The Committee on Uniform Security Identification Procedures.
   */
  CUSIP,

  /**
   * The Financial Instrument Global Identifier.
   */
  FIGI,

  /**
   * The ISO 6166 product identifier.
   */
  ISIN,

  /**
   * The Reuters Instrument Code.
   */
  RIC,

  /**
   * The Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.
   */
  SEDOL,

  /**
   * The identification code issued by the French Société Interprofessionnelle pour la Compensation des Valeurs Mobilières.
   */
  SICOVAM,

  /**
   * The Bloomberg identification short code to identify publicly trades shares of a particular stock.
   */
  TICKER,

  /**
   * The German Wertpapierkennnummer securities identification code. It is composed of six digits or capital letters (excluding I and O), and no check digit.
   */
  WERTPAPIER
}
/**
 * The enumerated values to specify a logical quantification, i.e. either All or Any.
 */
export enum QuantifierEnum {

  /**
   * The condition in the scope of the quantifier is true of every member of the domain i.e. every one of the elements in scope.
   */
  ALL,

  /**
   * The condition in the scope of the quantifier is true of at least one member of the domain i.e. one or more of the elements in scope.
   */
  ANY
}
export enum QuasiGovernmentIssuerTypeClassificationEnum {

  /**
   * Debt issued by government backed agency credit institution
   */
  AGENCY_CREDIT_INSTITUTION,

  /**
   * Debt issued by private agency non-credit institution
   */
  AGENCY_NON_CREDIT_INSTITUTION,

  /**
   * Debt issued by government sponsored enterprise GSE
   */
  GOVERNMENT_SPONSORED_ENTERPRISE,

  /**
   * Debt issued by Public Sector bodies
   */
  PUBLIC_SECTOR,

  /**
   * Debt issued by US Agency department
   */
  US_AGENCY
}
/**
 * The enumerated values to specify the type of quotation rate to be obtained from each cash settlement reference bank.
 */
export enum QuotationRateTypeEnum {

  /**
   * An ask rate.
   */
  ASK,

  /**
   * A bid rate.
   */
  BID,

  /**
   * If optional early termination is applicable to a swap transaction, the rate, which may be a bid or ask rate, which would result, if seller is in-the-money, in the higher absolute value of the cash settlement amount, or, is seller is out-of-the-money, in the lower absolute value of the cash settlement amount.
   */
  EXERCISING_PARTY_PAYS,

  /**
   * A mid-market rate.
   */
  MID
}
/**
 * The enumerated values to specify the side from which perspective a value is quoted.
 */
export enum QuotationSideEnum {

  /**
   * A value 'asked' by a seller for an asset, i.e. the value at which a seller is willing to sell.
   */
  ASK,

  /**
   * A value 'bid' by a buyer for an asset, i.e. the value a buyer is willing to pay.
   */
  BID,

  /**
   * A value midway between the bid and the ask value.
   */
  MID
}
/**
 * The enumerated values to specify the actual quotation style (e.g. PointsUpFront, TradedSpread) used to quote a credit default swap fee leg.
 */
export enum QuotationStyleEnum {

  /**
   * When quotation style is 'PointsUpFront', the initialPoints element of the Credit Default Swap feeLeg should be populated
   */
  POINTS_UP_FRONT,

  /**
   * When quotation style is 'Price', the marketPrice element of the Credit Default Swap feeLeg should be populated
   */
  PRICE,

  /**
   * When quotation style is 'TradedSpread', the marketFixedRate element of the Credit Default Swap feeLeg should be populated
   */
  TRADED_SPREAD
}
/**
 * The enumerated values to specify how an exchange rate is quoted.
 */
export enum QuoteBasisEnum {

  /**
   * The amount of currency1 for one unit of currency2
   */
  CURRENCY_1_PER_CURRENCY_2,

  /**
   * The amount of currency2 for one unit of currency1
   */
  CURRENCY_2_PER_CURRENCY_1
}
/**
 * The enumerated values to specify the methods for converting rates from one basis to another.
 */
export enum RateTreatmentEnum {

  /**
   * Bond Equivalent Yield. Per Annex to the 2000 ISDA Definitions (June 2000 Version), Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraph (g).
   */
  BOND_EQUIVALENT_YIELD,

  /**
   * Money Market Yield. Per Annex to the 2000 ISDA Definitions (June 2000 Version), Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraph (h).
   */
  MONEY_MARKET_YIELD
}
/**
 * The enumerated values to specify the Recalculation of Value Terms applicable to the...
 */
export enum RecalculationOfValueElectionEnum {

  /**
   * The parties agree to consult
   */
  CONSULATION_PROCEDURE,

  /**
   * Description to be added
   */
  NOT_APPLICABLE,

  /**
   * The procedures specified in an Other Regulatory CSA
   */
  OTHER_REGULATORY_CSA_PROCEDURE
}
export enum RegionalGovernmentIssuerTypeClassificationEnum {

  /**
   * Local Authority - debt security issued by a government agency
   */
  LOCAL_AUTHORITY,

  /**
   * Municipal Services- debt issued by municipality to fund specific public projects
   */
  MUNICIPAL_SERVICES
}
/**
 * The enumerated values to specify the regulatory regimes. The display name corresponds to the regulatory regime name or acronym specified as part of the Regime table in the ISDA CSA for Initial Margin, paragraph 13, General Principles. 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles: Regime. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles: Regime.
 */
export enum RegulatoryRegimeEnum {

  /**
   * Australian Prudential Standard CPS 226 Margining and risk mitigation for non-centrally cleared derivatives. 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  AUSTRALIA_MARGIN_RULES,

  /**
   * Margin requirements adopted by the U.S. Commodity Futures Trading Commission pursuant to CEA § 4s(e). 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  CFTC_MARGIN_RULES,

  /**
   * Guideline E-22, Margin Requirements for Non-Centrally Cleared Derivatives issued by the Canadian Office of the Superintendent of Financial Institutions in February 2016. 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  CANADA_MARGIN_RULES,

  /**
   * Regulation (EU) No 648/2012 of the European Parliament and of the Council of 4 July 2012 on OTC derivatives, central counterparties and trade repositories (including the EMIR RTS, which means the published regulatory technical standards on risk-mitigation techniques for OTC-derivative contracts not cleared by a CCP under Article 11(15) of EMIR). 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  EMIR_MARGIN_RULES,

  /**
   * Chapter CR-G-14 'Non-centrally Cleared OTC Derivatives Transactions – Margin and Other Risk Mitigation Standards' in the Banking Supervisory Policy Manual issued by the Hong Kong Monetary Authority. 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  HONG_KONG_MARGIN_RULES,

  /**
   * Margin rules adopted by the Financial Services Agency of Japan pursuant to Article 40, Item 2 of the Financial Instruments and Exchange Act (kin’yuu shouhin torihiki hou) (Act No. 25 of 1948) and by the Ministry of Agriculture, Forestry and Fisheries and the Ministry of Economy, Trade and Industry pursuant to the Commodity Derivatives Act (shouhin sakimono torihiki hou) (Act No. 239 of 1950) (including their subordinated regulations and the related supervisory guidelines). 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  JAPAN_MARGIN_RULES,

  /**
   * Margin requirements adopted by the U.S. Securities and Exchange Commission pursuant to Exchange Act § 15F(e). 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  SEC_MARGIN_RULES,

  /**
   * Guidelines on Margin Requirements for Non-centrally Cleared OTC Derivatives Contracts issued by the Monetary Authority of Singapore (MAS) pursuant to section 321 of the Securities and Futures Act, Chapter 289 of Singapore. 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  SINGAPORE_MARGIN_RULES,

  /**
   * Margin rules adopted by the Swiss Federal Council pursuant to Article 110-111 of the Financial Market Infrastructure Act as well as Articles 100 to 107 and Annexes 3 to 5 of the Financial Market Infrastructure Ordinance. 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  SWITZERLAND_MARGIN_RULES,

  /**
   * Margin requirements adopted by a 'prudential regulator' (as defined in CEA § 1a(39)) pursuant to CEA § 4s(e) and Exchange Act § 15F(e). 2016 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles. | 2018 ISDA Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  US_PRUDENTIAL_MARGIN_RULES
}
/**
 * A duration code for a Repo (or Securities Lending) transaction. There are many business and market rules that are derived from the duration of the transaction.
 */
export enum RepoDurationEnum {

  /**
   * Indicates that a contract is classified as overnight, meaning that there is one business day difference between the start and end date of the contract. Business rule: When the repo is overnight, the number of business days between the spot and forward value dates must be one. Forward leg must be specified.
   */
  OVERNIGHT,

  /**
   * Indicates that a contract is a regular term contract, with a start date and an end date. Business rule: When the repo is 'Term', both spot and forward legs must be specified.
   */
  TERM
}
/**
 * The enumerated values to specify whether resets occur relative to the first or last day of a calculation period.
 */
export enum ResetRelativeToEnum {

  /**
   * Resets occur relative to the last day of a calculation period.
   */
  CALCULATION_PERIOD_END_DATE,

  /**
   * Resets occur relative to the first day of a calculation period.
   */
  CALCULATION_PERIOD_START_DATE
}
/**
 * The enumerated values to specify the type of a resource (e.g. document).
 */
export enum ResourceTypeEnum {

  /**
   * Document describing the legal terms of a transaction.
   */
  CONFIRMATION,

  /**
   * Document providing supplemental material economic terms to the FpML data representation. The initial intended usage is to fulfill the CFTC Part 45 rule requirement to report ‘Any other terms(s) of the swap matched or affirmed by the counterparties in verifying the swap’ when the reporting is done via the generic FpML representation.
   */
  SUPPLEMENTAL_MATERIAL_ECONOMIC_TERMS,

  /**
   * Document describing the economic characteristics of a transaction.
   */
  TERM_SHEET
}
/**
 * The enumerated values to specify the form of the restructuring credit event that is applicable to the credit default swap.
 */
export enum RestructuringEnum {

  /**
   * Restructuring (Section 4.7) and Modified Restructuring Maturity Limitation and Conditionally Transferable Obligation (2014 Definitions: Section 3.31, 2003 Definitions: 2.32) apply.
   */
  MOD_MOD_R,

  /**
   * Restructuring (Section 4.7) and Restructuring Maturity Limitation and Fully Transferable Obligation (2014 Definitions: Section 3.31, 2003 Definitions: 2.32) apply.
   */
  MOD_R,

  /**
   * Restructuring as defined in the applicable ISDA Credit Derivatives Definitions. (2003 or 2014).
   */
  R
}
/**
 * The enumerated values to specify the type of return associated the equity payout.
 */
export enum ReturnTypeEnum {

  /**
   * Dividend return, i.e. excluding price variations.
   */
  DIVIDEND,

  /**
   * Price return, i.e. excluding dividends.
   */
  PRICE,

  /**
   * Total return, i.e. including dividend and price components.
   */
  TOTAL,

  /**
   * Variance return.
   */
  VARIANCE,

  /**
   * Volatility return.
   */
  VOLATILITY
}
/**
 * The enumerated values to specify the period term as part of a periodic schedule, i.e. the calculation period end date within the regular part of the calculation period. The value could be a rule, e.g. IMM Settlement Dates, which is the 3rd Wednesday of the month, or it could be a specific day of the month, such as the first day of the applicable month.
 */
export enum RollConventionEnum {

  /**
   * Rolls on month end dates irrespective of the length of the month and the previous roll day.
   */
  EOM,

  /**
   * Rolling weekly on a Friday
   */
  FRI,

  /**
   * Roll days are determined according to the FRN Convention or Euro-dollar Convention as described in ISDA 2000 definitions.
   */
  FRN,

  /**
   * IMM Settlement Dates. The third Wednesday of the (delivery) month.
   */
  IMM,

  /**
   * The last trading day of the Sydney Futures Exchange 90 Day Bank Accepted Bills Futures contract (see http://www.sfe.com.au/content/sfe/trading/con_specs.pdf). One Sydney business day preceding the second Friday of the relevant settlement.
   */
  IMMAUD,

  /**
   * The last trading day/expiration day of the Canadian Derivatives Exchange (Bourse de Montreal Inc) Three-month Canadian Bankers' Acceptance Futures (Ticker Symbol BAX). The second London banking day prior to the third Wednesday of the contract month. If the determined day is a Bourse or bank holiday in Montreal or Toronto, the last trading day shall be the previous bank business day. Per Canadian Derivatives Exchange BAX contract specification.
   */
  IMMCAD,

  /**
   * The last trading day of the Sydney Futures Exchange NZ 90 Day Bank Bill Futures contract (see http://www.sfe.com.au/content/sfe/trading/con_specs.pdf). The first Wednesday after the ninth day of the relevant settlement month.
   */
  IMMNZD,

  /**
   * Rolling weekly on a Monday.
   */
  MON,

  /**
   * The roll convention is not required. For example, in the case of a daily calculation frequency.
   */
  NONE,

  /**
   * Rolling weekly on a Saturday
   */
  SAT,

  /**
   * Sydney Futures Exchange 90-Day Bank Accepted Bill Futures Settlement Dates. The second Friday of the (delivery) month
   */
  SFE,

  /**
   * Rolling weekly on a Sunday
   */
  SUN,

  /**
   * 13-week and 26-week U.S. Treasury Bill Auction Dates. Each Monday except for U.S. (New York) holidays when it will occur on a Tuesday.
   */
  TBILL,

  /**
   * Rolling weekly on a Thursday
   */
  THU,

  /**
   * Rolling weekly on a Tuesday
   */
  TUE,

  /**
   * Rolling weekly on a Wednesday
   */
  WED,

  /**
   * Rolls on the 1st day of the month.
   */
  _1,

  /**
   * Rolls on the 10th day of the month.
   */
  _10,

  /**
   * Rolls on the 11th day of the month.
   */
  _11,

  /**
   * Rolls on the 12th day of the month.
   */
  _12,

  /**
   * Rolls on the 13th day of the month.
   */
  _13,

  /**
   * Rolls on the 14th day of the month.
   */
  _14,

  /**
   * Rolls on the 15th day of the month.
   */
  _15,

  /**
   * Rolls on the 16th day of the month.
   */
  _16,

  /**
   * Rolls on the 17th day of the month.
   */
  _17,

  /**
   * Rolls on the 18th day of the month.
   */
  _18,

  /**
   * Rolls on the 19th day of the month.
   */
  _19,

  /**
   * Rolls on the 2nd day of the month.
   */
  _2,

  /**
   * Rolls on the 20th day of the month.
   */
  _20,

  /**
   * Rolls on the 21st day of the month.
   */
  _21,

  /**
   * Rolls on the 22nd day of the month.
   */
  _22,

  /**
   * Rolls on the 23rd day of the month.
   */
  _23,

  /**
   * Rolls on the 24th day of the month.
   */
  _24,

  /**
   * Rolls on the 25th day of the month.
   */
  _25,

  /**
   * Rolls on the 26th day of the month.
   */
  _26,

  /**
   * Rolls on the 27th day of the month.
   */
  _27,

  /**
   * Rolls on the 28th day of the month.
   */
  _28,

  /**
   * Rolls on the 29th day of the month.
   */
  _29,

  /**
   * Rolls on the 3rd day of the month.
   */
  _3,

  /**
   * Rolls on the 30th day of the month.
   */
  _30,

  /**
   * Rolls on the 4th day of the month.
   */
  _4,

  /**
   * Rolls on the 5th day of the month.
   */
  _5,

  /**
   * Rolls on the 6th day of the month.
   */
  _6,

  /**
   * Rolls on the 7th day of the month.
   */
  _7,

  /**
   * Rolls on the 8th day of the month.
   */
  _8,

  /**
   * Rolls on the 9th day of the month.
   */
  _9
}
/**
 * The enumerated values to specify the rounding direction and precision to be used in the rounding of a rate.
 */
export enum RoundingDirectionEnum {

  /**
   * A fractional number will be rounded down to the specified number of decimal places (the precision). For example, 5.29 and 5.25 rounded down to 1 decimal place are 5.2 and 5.2 respectively.
   */
  DOWN,

  /**
   * A fractional number will be rounded either up or down to the specified number of decimal places (the precision) depending on its value. For example, 5.24 would be rounded down to 5.2 and 5.25 would be rounded up to 5.3 if a precision of 1 decimal place were specified.
   */
  NEAREST,

  /**
   * A fractional number will be rounded up to the specified number of decimal places (the precision). For example, 5.21 and 5.25 rounded up to 1 decimal place are 5.3 and 5.3 respectively.
   */
  UP
}
export enum RoundingModeEnum {

  DOWN,

  UP
}
export enum SecurityTypeEnum {

  /**
   * Security: Bonds- Fixed income instrument of debt issued and securitized as a tradable asset
   */
  BOND,

  /**
   * Security: Certificate of Deposit- Agreed fixed maturity and interest rate deposit
   */
  CERTIFICATE_OF_DEPOSIT,

  /**
   * Security: Equity value of holding of shares in listed company
   */
  EQUITY
}
/**
 * The enumerated values to specify the methodology according to which sensitivities to (i) equity indices, funds and ETFs, and (ii) commodity indices are computed. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (gg)(2).
 */
export enum SensitivitiesEnum {

  /**
   * The parties agree that in respect of the relevant sensitivities, the delta is allocated back to individual constituents.
   */
  ALTERNATIVE,

  /**
   * The relevant sensitivities are addressed by the standard preferred approach where the entire delta is put into the applicable asset class/category.
   */
  STANDARD
}
/**
 * The enumerated values to specify the relevant settled entity matrix source.
 */
export enum SettledEntityMatrixSourceEnum {

  /**
   * The Relevant Settled Entity Matrix shall be the list agreed for this purpose by the parties. The list is not included as part of the electronic confirmation.
   */
  CONFIRMATION_ANNEX,

  /**
   * The term is not applicable.
   */
  NOT_APPLICABLE,

  /**
   * The Settled Entity Matrix published by the Index Publisher.
   */
  PUBLISHER
}
/**
 * The enumerated values to specify the settlement rate options as specified in the Annex A to the 1998 FX and Currency Options Definitions.
 */
export enum SettlementRateOptionEnum {

  /**
   * The Spot Rate for a Rate Calculation Date will be the Argentine Peso/U.S. Dollar Specified Rate, expressed as the amount of Argentine Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Buenos Aires and New York) which appears on the Reuters Screen BNAR Page at the close of business in Buenos Aires on that Rate Calculation Date.
   */
  ARS_BNAR_ARS01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Argentine Peso/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Argentine Pesos per one U.S. Dollar, for settlement on the same day, as published on EMTA's web site (www.emta.org) at approximately 1:00 p.m. (Buenos Aires time), or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA ARS Indicative Survey Methodology (which means a methodology, dated as of January 2, 2003, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Argentine Peso/U.S. Dollar markets for the purpose of determining the EMTA ARS Indicative Survey Rate).
   */
  ARS_EMTA_INDICATIVE_SURVEY_RATE_ARS04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Argentine Peso/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Argentine Pesos per one U.S. Dollar, for settlement on the same day, as published on EMTA's web site (www.emta.org) at approximately 1:00 p.m. (Buenos Aires time), or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA ARS Industry Survey Methodology (which means a methodology, dated as of January 2, 2003, as amended from time to time, for a centralized industry-wide survey of financial institutions in Buenos Aires that are active participants in the Argentine Peso/U.S. Dollar spot markets for the purpose of determining the EMTA ARS Industry Survey Rate).
   */
  ARS_EMTA_INDUSTRY_SURVEY_RATE_ARS03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the volume weighted average Argentine Peso/U.S. Dollar Rate of all trades executed in the electronic market for a Rate Calculation Day expressed as the amount of Argentine Pesos per one U.S. Dollar, for settlement on the same day, reported by the Mercado Abierto Electronico (the 'MAE') at approximately 3:00 pm, Buenos Aires time, and published on the FOREX-MAE Page as the 'PPN' rate ('Promedio Ponderado Noticiado') on www.mae.com.ar on that Rate Calculation Date.
   */
  ARS_MAE_ARS05,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Argentine Peso/U.S. Dollar offered rate for U.S. Dollars, expressed as the amount of Argentine Pesos per one U.S. Dollar, for settlement on the same day quoted by Banco de la Nacion (in accordance with the Convertibility Law of March 27, 1991 and Regulatory Decree No. 529/91 of April 1, 1991, as may be amended from time to time) for that Rate Calculation Date.
   */
  ARS_OFFICIAL_RATE_ARS02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar Specified Rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) which appears on the Reuters Screen BRBY Page under the caption 'INTBK FLTING (LAST)' at approximately 11:00 a.m., Sao Paulo time, on that Rate Calculation Date.
   */
  BRL_BRBY_BRL01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days, as published on EMTA's web site (www.emta.org) at approximately 12:00 p.m. (Sao Paulo time), or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA BRL Indicative Survey Methodology (which means a methodology, dated as of March 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Brazilian Real/U.S. Dollar markets for the purpose of determining the EMTA BRL Indicative Survey Rate).
   */
  BRL_EMTA_INDICATIVE_SURVEY_RATE_BRL13,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days, as published on EMTA's web site (www.emta.org) at approximately 3:45 p.m. (Sao Paulo time), or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA BRL Industry Survey Methodology (which means a methodology, dated as of March 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions in Brazil that are active participants in the Brazilian Real/U.S. Dollar spot markets for the purpose of determining the EMTA BRL Industry Survey Rate).
   */
  BRL_EMTA_INDUSTRY_SURVEY_RATE_BRL12,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar Specified Rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil in the 'Diario Oficial da Uniao' on the first Business Day following that Rate Calculation Date.
   */
  BRL_OFFICIAL_RATE_BRL02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar commercial rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil on SISBACEN Data System under transaction code PCOT- 390, Option 3, at the Specified Time, if any, on that Rate Calculation Date.
   */
  BRL_PCOT_COMMERCIAL_BRL03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar floating rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil on SISBACEN Data System under transaction code PCOT- 390, Option 3, at the Specified Time, if any, on that Rate Calculation Date.
   */
  BRL_PCOT_FLOATING_BRL04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar offered rate for U.S. Dollars, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days reported by the Banco Central do Brasil on SISBACEN Data System under transaction code PTAX-800 ('Consulta de Cambio' or Exchange Rate Inquiry), Option 5 ('Cotacoes para Contabilidade' or 'Rates for Accounting Purposes') by approximately 6:00 p.m., Sao Paulo time, on that Rate Calculation Date.
   */
  BRL_PTAX_BRL09,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar commercial rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil which appears on the Reuters Screen BRFR Page at PTAX-800 as of 11:00 a.m., Sao Paulo time, on the first Business Day following that Rate Calculation Date. 23
   */
  BRL_PTAX_COMMERCIAL_BRFR_BRL06,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar commercial rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil on SISBACEN Data System under transaction code PTAX- 800 ('Consultas de Cambio' or Exchange Rate Inquiry), Option 5 ('Cotacoes para Contabilidad' or Rates for Accounting Purposes) market type 'L' (corresponding to U.S. Dollars traded in the foreign exchange market segment officially denominated 'Livre' and commonly known as 'Comercial') as of 7:30 p.m., Sao Paulo time, on that Rate Calculation Date.
   */
  BRL_PTAX_COMMERCIAL_BRL05,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar floating rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil on the SISBACEN Data System which appears on the Reuters Screen BRFR Page at PTAX-800 as of 11:00 a.m., Sao Paulo time, on the first Business Day following that Rate Calculation Date.
   */
  BRL_PTAX_FLOATING_BRFR_BRL08,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Brazilian Real/U.S. Dollar floating rate, expressed as the amount of Brazilian Reais per one U.S. Dollar, for settlement in two Business Days (where such days are Business Days in both Sao Paulo and New York) reported by the Banco Central do Brasil on SISBACEN Data System under transaction code PTAX- 800 ('Consultas de Cambio' or Exchange Rate Inquiry), Option 5 ('Cotacoes para Contabilidad' or Rates for Accounting Purposes) market type 'F' (corresponding to U.S. Dollars traded in the foreign exchange market segment officially denominated 'Flutuante') as of 7:30 p.m., Sao Paulo time, on that Rate Calculation Date.
   */
  BRL_PTAX_FLOATING_BRL07,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar observado rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) reported by the Banco Central de Chile which appears on the Reuters Screen BCCH Page under the caption 'OBSERVADO' at 10:00 a.m., Santiago time, on the first Business Day following that Rate Calculation Date.
   */
  CLP_BCCH_CLP01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar informal rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) of the informal exchange market which appears on the Reuters Screen CHILD Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  CLP_CHILD_INFORMAL_CLP02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar interbank rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) reported by the Banco Central de Chile for the formal exchange market which appears on the Reuters Screen CHILD Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  CLP_CHILD_INTERBANK_CLP03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar observado rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) reported by the Banco Central de Chile which appears on the Reuters Screen CHILD Page on the first Business Day following that Rate Calculation Date.
   */
  CLP_CHILD_OBSERVADO_CLP04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar informal rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) of the informal exchange market which appears on the Reuters Screen CHILG Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  CLP_CHILG_INFORMAL_CLP05,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar interbank rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) reported by the Banco Central de Chile for the formal exchange market which appears on the Reuters Screen CHILG Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  CLP_CHILG_INTERBANK_CLP06,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar observado rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) reported by the Banco Central de Chile which appears on the Reuters Screen CHILG Page under 'OBSERVADO' at the Specified Time, if any, on the first Business Day following that Rate Calculation Date.
   */
  CLP_CHILG_OBSERVADO_CLP07,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar 'observado' rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement in one Business Day reported by the Banco Central de Chile (www.bcentral.cl) as the 'Dolar Observado' (Dollar Observado) rate by not later than 10:30 a.m., Santiago time, on the first Business Day following that Rate Calculation Date.
   */
  CLP_DOLAR_OBS_CLP10,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day, as published on EMTA's web site (www.emta.org) at approximately 11:00 a.m., Santiago time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA CLP Indicative Survey Methodology (which means a methodology, dated as of August 1, 2006, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Chilean Peso/U.S. Dollar markets for the purpose of determining the EMTA CLP Indicative Survey Rate).
   */
  CLP_EMTA_INDICATIVE_SURVEY_RATE_CLP11,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar Specified Rate, expressed as the amount of Chilean Pesos per one U.S. Dollar (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York), calculated in accordance with Title I, Chapter 1 Number 6 of the Compendium of International Exchange Norms of the Banco Central de Chile and published by the Banco Central de Chile at the Specified Time, if any, on the first Business Day following that Rate Calculation Date.
   */
  CLP_OFFICIAL_RATE_CLP08,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chilean Peso/U.S. Dollar observado rate, expressed as the amount of Chilean Pesos per one U.S. Dollar, for settlement on the same day (or, if such day is not a Business Day in New York, for settlement on the first succeeding day that is a Business Day in both Santiago and New York) reported by the Banco Central de Chile which appears on the Telerate Page 38942 opposite the caption 'Observado' at the Specified Time, if any, on the first Business Day following the Rate Calculation Date.
   */
  CLP_TELERATE_38942_CLP09,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chinese Renminbi/U.S. Dollar official fixing rate, expressed as the amount of Chinese Renminbi per one U.S. Dollar, for settlement in two Business Days reported by the People's Bank of China, Beijing, People's Republic of China, which appears on the Reuters Screen 'SAEC' Page opposite the symbol 'USDCNY=' at approximately 9:15 a.m., Beijing time, on that Rate Calculation Date.
   */
  CNY_SAEC_CNY01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Chinese Renminbi/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Chinese Renminbi per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m. (Singapore time), or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC CNY Indicative Survey Methodology (which means a methodology, dated as of December 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Chinese Renminbi/U.S. Dollar markets for the purpose of determining the SFEMC CNY Indicative Survey Rate).
   */
  CNY_SFEMC_INDICATIVE_SURVEY_RATE_CNY02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Colombian Peso/U.S. Dollar fixing rate, expressed as the amount of Colombian Pesos per one U.S. Dollar, for settlement on the same day (unless such day is not a Business Day in New York, then for settlement on the first succeeding day that is a Business Day in Bogota and New York) reported by the Colombian Banking Superintendency which appears on the Reuters Screen CO/COL03 Page opposite the caption 'TRCM' ('Tasa de Cierre Representative del Mercado' or closing market price) at 12:00 noon, Bogota time, on the first Business Day following that Rate Calculation Date.
   */
  COP_CO_COL03_COP01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Colombian Peso/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Colombian Pesos per one U.S. Dollar, for settlement on the same day, as published on EMTA's web site (www.emta.org) at approximately 11:30 a.m., Bogota time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA COP Indicative Survey Methodology (which means a methodology, dated as of August 1, 2006, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Colombian Peso/U.S. Dollar markets for the purpose of determining the EMTA COP Indicative Survey Rate).
   */
  COP_EMTA_INDICATIVE_SURVEY_RATE_COP03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Colombian Peso/U.S. Dollar fixing rate, expressed as the amount of Colombian Pesos per one U.S. Dollar, for settlement on the same day reported by the Colombian Financial Superintendency (www.banrep.gov.co) as the 'Tasa Representativa del Mercado (TRM)' (also referred to as the 'Tasa de Cambio Representativa del Mercado' (TCRM)) by not later than 10:30 a.m., Bogota time, on the first Business Day following that Rate Calculation Date.
   */
  COP_TRM_COP02,

  /**
   * the Spot Rate for a Rate Calculation Date will be the Reference Currency/U.S. Dollar exchange rate, expressed as the amount of Reference Currency per one U.S. Dollar, determined on the basis of quotations provided by Reference Dealers on that Rate Calculation Date of that day's price of a Specified Company's American Depositary Receipt or American Depositary Receipts (the 'ADR' or 'ADRs', as appropriate) and the price of the local share or shares of such Specified Company of the same type and in the same quantity represented by such ADR or ADRs, as the case may be (the 'Share' or 'Shares', as appropriate). The Calculation Agent will request each of the Reference Dealers to provide a firm quotation of (A) in the case where one ADR represents less than one Share, its bid and offer price (in the Reference Currency) for one Share and its bid and offer price (in U.S. Dollars) for the number of ADRs which represent such Share and (B) in all other cases, its bid and
             offer price (in the Reference Currency) for the Share or Shares, as the case may be, and its bid and offer price (in U.S. Dollars) for one ADR. If one or more quotations are provided, the rate for a Rate Calculation Date will equal the ratio of (1) the arithmetic mean of the midpoint of the bid and offer prices quoted in the Reference Currency by each Reference Dealer for such Share or Shares, as the case may be, and (2) the arithmetic mean of the midpoint of the bid and offer prices quoted in U.S. Dollars by each Reference Dealer for such ADR or ADRs, as the case may be, subject to an adjustment, if any, by the Calculation Agent to reduce the effect of momentary disparities in the prices of the Share or Shares and the ADR or ADRs, as appropriate. The quotations used to determine the Spot Rate for a Rate Calculation Date will be determined in each case at the Specified Time on the Rate Calculation Date or, if no such time is specified, the time chosen by the
             Calculation Agent.
   */
  CURRENCY_IMPLIED_RATE__ADR__CURA1,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Reference Currency/Settlement Currency exchange rate, expressed as the amount of Reference Currency per one unit of Settlement Currency, determined on the basis of quotations provided by Reference Dealers on that Rate Calculation Date for that day's price of Local Assets. The Calculation Agent will request each of the Reference Dealers to provide a firm quotation of its bid and offer price (in both the Reference Currency and the Settlement Currency) for an amount of Local Assets whose face value equals the Specified Amount. If one or more quotations are provided, the rate for a Rate Calculation Date will equal the ratio of (A) the arithmetic mean of the midpoint of the bid and offer prices quoted in the Reference Currency by each Reference Dealer for such Local Assets and (B) the arithmetic mean of the midpoint of the bid and offer prices quoted in the Settlement Currency by each Reference Dealer for such
             Local Assets. The quotations used to determine the Spot Rate for a Rate Calculation Date will be determined in each case at the Specified Time on the Rate Calculation Date or, if no such time is specified, the time chosen by the Calculation Agent.
   */
  CURRENCY_IMPLIED_RATE__LOCAL_ASSET__CURA2,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Reference Currency/Settlement Currency Specified Rate, expressed as the amount of the Reference Currency per one unit of Settlement Currency, for settlement on the Settlement Date agreed upon by the parties on or prior to that Rate Calculation Date (or, if different, the day on which rates for that date would, in the ordinary course, be published or announced).
   */
  CURRENCY_MUTUAL_AGREEMENT_CURA3,

  /**
   * The Spot Rate for a Rate Calculation Date will be determined on the basis of quotations provided by Reference Dealers on that Rate Calculation Date of that day's Specified Rate, expressed as the amount of Reference Currency per one unit of Settlement Currency, for settlement on the Settlement Date. The Calculation Agent will request the Specified Office of each of the Reference Dealers to provide a firm quotation of its Specified Rate for a transaction where the amount of Reference Currency equals the Specified Amount. If four quotations are provided, the rate for a Rate Calculation Date will be the arithmetic mean of the Specified Rates, without regard to the Specified Rates having the highest and lowest value. If exactly three quotations are provided, the rate for a Rate Calculation Date will be the Specified Rate provided by the Reference Dealer that remains after disregarding the Specified Rates having the highest and lowest values. For this purpose, if
             more than one quotation has the same highest value or lowest value, then the Specified Rate of one of such quotations shall be disregarded. If exactly two quotations are provided, the rate for a Rate Calculation Date will be the arithmetic mean of the Specified Rates. If only one quotation is provided, the rate for a Rate Calculation Date will be the Specified Rate quoted by that Reference Dealer. The quotations used to determine the Spot Rate for a Rate Calculation Date will be determined in each case at the Specified Time on that Rate Calculation Date or, if no such time is specified, the time chosen by the Calculation Agent.
   */
  CURRENCY_REFERENCE_DEALERS_CURA4,

  /**
   * The Spot Rate for a Rate Calculation Date will be determined by the Calculation Agent on the basis of that day's Specified Rate, expressed as the amount of Reference Currency per one unit of Settlement Currency, in a legal and customary wholesale market in which there is no, or minimal, Governmental Authority controls or interference, except as a participant in such market.
   */
  CURRENCY_WHOLESALE_MARKET_CURA5,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Ecuadorian Sucre/U.S. Dollar Specified Rate, expressed as the amount of Ecuadorian Sucres per one U.S. Dollar, for settlement in one Business Day (where such day is a Business Day in Guayaquil and New York) which appears on Reuters Screen DNRP Page at 12:00 noon, Guayaquil time, on that Rate Calculation Date.
   */
  ECS_DNRP_ECS01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indonesian Rupiah/U.S. Dollar spot rate at 11:00 a.m., Singapore time, expressed as the amount of Indonesian Rupiah per one U.S. Dollar, for settlement in two Business Days, reported by the Association of Banks in Singapore which appears on the Telerate Page 50157 to the right of the caption 'Spot' under the column 'IDR' at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  IDR_ABS_IDR01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indonesian Rupiah/U.S. Dollar weighted average spot rate in the interbank market based on traded IDR/USD spot foreign exchange transactions during a specified time period which are captured on a real time basis, expressed as the amount of Indonesian Rupiah per one U.S. Dollar, for settlement in two Business Days, published by Bank Indonesia at approximately 10:00 a.m., Jakarta time, on that Rate Calculation Date as the Jakarta Interbank Spot Dollar Rate USD - IDR on Bank Indonesia's website or otherwise made available by Bank Indonesia (or its successor as administrator).
   */
  IDR_JISDOR_IDR04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indonesian Rupiah/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Indonesian Rupiah per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m., Singapore time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC IDR Indicative Survey Methodology (which means a methodology, dated as of December 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Indonesian Rupiah/U.S. Dollar markets for the purpose of determining the SFEMC IDR Indicative Survey Rate).
   */
  IDR_SFEMC_INDICATIVE_SURVEY_RATE_IDR02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indonesian Rupiah/U.S. Dollar implied spot rate expressed as the amount of Indonesian Rupiah per one U.S. Dollar, for settlement in two Business Days, reported by ABS Benchmarks Administration Co Pte. Ltd. (or its successor as administrator or sponsor of that rate), which appears on Thomson Reuters Screen ABSFIX01 Page at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  IDR_VWAP_IDR03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Israeli Shekel/U.S. Dollar Specified Rate, expressed as the amount of Israeli Shekels per one U.S. Dollar, for settlement in two Business Days which appears on the Reuters Screen BOIJ Page as of 1:00 p.m., Tel Aviv time, on that Rate Calculation Date.
   */
  ILS_BOIJ_ILS01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Israeli Shekel/U.S. Dollar Specified Rate, expressed as the amount of Israeli Shekels per one U.S. Dollar, for settlement in two Business Days which appears on the Reuters Screen FXIL Page as of 1:00 p.m., Tel Aviv time, on that Rate Calculation Date.
   */
  ILS_FXIL_ILS02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indian Rupee/U.S. Dollar reference rate, expressed as the amount of Indian Rupee per one U.S. Dollar, for settlement in two Business Days, reported by Financial Benchmarks India Pvt. Ltd. (www.fbil.org.in) at approximately 1:30 p.m., Mumbai time, or as soon thereafter as practicable, on that Rate Calculation Date.
   */
  INR_FBIL_INR01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indian Rupee/U.S. Dollar reference rate, expressed as the amount of Indian Rupee per one U.S. Dollar, for settlement in two Business Days reported by the Reserve Bank of India which appears on the Reuters Screen RBIB Page at approximately 12:30 p.m., Mumbai time, or as soon thereafter as practicable, on that Rate Calculation Date.
   */
  INR_RBIB_INR01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Indian Rupee/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Indian Rupee per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m. (Singapore time), or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC INR Indicative Survey Methodology (which means a methodology, dated as of December 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Indian Rupee/U.S. Dollar markets for the purpose of determining the SFEMC INR Indicative Survey Rate).
   */
  INR_SFEMC_INDICATIVE_SURVEY_RATE_INR02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Korean Won/U.S. Dollar Specified Rate, expressed as the amount of Korean Won per one U.S. Dollar, for settlement in two Business Days which appears on the Reuters Screen KEBEY Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  KRW_KEBEY_KRW01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Korean Won/U.S. Dollar market average rate, expressed as the amount of Korean Won per one U.S. Dollar, for settlement in two Business Days reported by the Korea Financial Telecommunications and Clearing Corporation which appears on the Reuters Screen KFTC18 Page to the right of the caption 'USD Today' that is available at approximately 3:30 p.m., Seoul time, on the Rate Calculation Date or as soon thereafter as practicable.
   */
  KRW_KFTC18_KRW02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Korean Won/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Korean Won per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m., Singapore time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC KRW Indicative Survey Methodology (which means a methodology, dated as of December 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Korean Won/U.S. Dollar markets for the purpose of determining the SFEMC KRW Indicative Survey Rate).
   */
  KRW_SFEMC_INDICATIVE_SURVEY_RATE_KRW04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Korean Won/U.S. Dollar market average rate, expressed as the amount of Korean Won per one U.S. Dollar, for settlement in two Business Days reported by the Korea Financial Telecommunications and Clearing Corporation which appears on Telerate Page 45644 to the right of the caption 'USD Today' that is available at approximately 3:30 p.m., Seoul time, on the Rate Calculation Date or as soon thereafter as practicable.
   */
  KRW_TELERATE_45644_KRW03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Kazakhstan Tenge / U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Kazakhstan Tenge per one U.S. Dollar, for settlement on the same Business Day, as published on EMTA's website (www.emta.org) at approximately 1:00 p.m., Almaty time, or as soon thereafter as practicable, on that Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA KZT Indicative Survey Methodology (which means a methodology, dated as of March 16, 2009, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Kazakhstan Tenge/U.S. Dollar markets for the purpose of determining the EMTA KZT Indicative Survey Rate).
   */
  KZT_EMTA_INDICATIVE_SURVEY_RATE_KZT02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Kazakhstan Tenge / U.S. Dollar weighted average rate, expressed as the amount of Kazakhstan Tenge per one U.S. Dollar, for settlement on the same Business Day reported by the Kazakhstan Stock Exchange (www.kase.kz) at approximately 11:00 am, Almaty time, on that Rate Calculation Date.
   */
  KZT_KASE_KZT01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Lebanese Pound/U.S. Dollar Specified Rate, expressed as the amount of Lebanese Pounds per one U.S. Dollar, for settlement in two Business Days which appears on the Reuters Screen BDLX Page as of 12:00 noon, Beirut time, on that Rate Calculation Date.
   */
  LBP_BDLX_LBP01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Moroccan Dirham/U.S. Dollar Specified Rate, expressed as the amount of Moroccan Dirham per one U.S. Dollar, for settlement in two Business Days reported by the Central Bank of Morocco as of 1:00 p.m., Rabat time, on that Rate Calculation Date.
   */
  MAD_OFFICIAL_RATE_MAD01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Mexican Pesos/U.S. Dollar Specified rate, expressed as the amount of Mexican Pesos per one U.S. Dollar, for settlement in two Business Days reported by Banco de Mexico which appears on the Reuters Screen BNMX Page opposite the caption 'Fix' at the close of business in Mexico City on that Rate Calculation Date.
   */
  MXP_BNMX_MXP01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Mexican Peso/U.S. Dollar fixing rate, expressed as the amount of Mexican Pesos per one U.S. Dollar, for settlement in two Business Days which is published by Banco de Mexico in the Official Gazette of the Federation pursuant to the 'Disposiciones aplicables a la determinacion del tipo de Cambio para solventar obligaciones denominadas en moneda extranjera pagaderas en la Republica Mexicana' (Rules applicable to determine the exchange rate to pay obligations denominated in foreign currency payable in Mexico) on the first Business Day following that Rate Calculation Date.
   */
  MXP_FIXING_RATE_MXP02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Mexican Peso/U.S. Dollar fixing rate, expressed as the amount of Mexican Pesos per one U.S. Dollar, for settlement in two Business Days reported by Banco de Mexico which appears on Reuters Screen MEX01 Page under the heading 'MXNFIX=RR', at the close of business in Mexico City on that Rate Calculation Date.
   */
  MXP_MEX01_MXP03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Mexican Peso/U.S. Dollar fixing rate, expressed as the amount of Mexican Pesos per one U.S. Dollar, for settlement in two Business Days which is published by the Bolsa Mexicana de Valores, S.A. de C.V. (as established in Section 2 of the 'Resolution concerning the exchange rate applicable for calculating the Mexican Peso equivalent of principal and interest of Mexican Treasury Notes denominated in foreign currency and payable in Mexican Pesos' published in the Diario Oficial de la Federacion on November 11, 1991) in the Movimiento Diario del Mercado de Valores de la Bolsa Mexicana de Valores, S.A. de C.V. under the heading 'Movimiento Diario del Mercado de Valores' on that Rate Calculation Date.
   */
  MXP_PUBLISHED_MXP04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Malaysian Ringgit/U.S. Dollar spot rate at 11:00 a.m., Singapore time, expressed as the amount of Malaysian Ringgit per one U.S. Dollar, for settlement in two Business Days, reported by the Association of Banks in Singapore, which appears on the Telerate Page 50157 to the right of the caption 'Spot' under the column 'MYR' at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  MYR_ABS_MYR01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Malaysian Ringgit/U.S. Dollar reference rate, expressed as the amount of Malaysian Ringgit per one U.S. Dollar, for settlement in two Business Days, calculated and reported by Bank Negara Malaysia as its Kuala Lumpur USD/MYR Reference Rate, which appears on Thomson Reuters Screen MYRFIX2 Page at approximately 3:30 p.m., Kuala Lumpur time, on that Rate Calculation Date.
   */
  MYR_KL_REF_MYR04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Malaysian Ringgit/U.S. Dollar spot rate expressed as the amount of Malaysian Ringgit per one U.S. Dollar, for settlement in two Business Days, reported by Persatuan Pasaran Kewangan Malaysia (ACI - Malaysia), which appears on Thomson Reuters Screen MYRFIX2 Page at approximately 11:10 a.m., Kuala Lumpur time, on that Rate Calculation Date.
   */
  MYR_PPKM_MYR03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Malaysian Ringgit/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Malaysian Ringgit per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m., Singapore time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC MYR Indicative Survey Methodology (which means a methodology, dated as of July 15, 2005, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Malaysian Ringgit/U.S. Dollar markets for the purpose of determining the SFEMC MYR Indicative Survey Rate).
   */
  MYR_SFEMC_INDICATIVE_SURVEY_RATE_MYR02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Peruvian Sol/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Peruvian Soles per one U.S. Dollar, for settlement on the same day, as published on EMTA's web site (www.emta.org) at approximately 11:00 a.m., Lima time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA PEN Indicative Survey Methodology (which means a methodology, dated as of August 1, 2006, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Peruvian Sol/U.S. Dollar markets for the purpose of determining the EMTA PEN Indicative Survey Rate).
   */
  PEN_EMTA_INDICATIVE_SURVEY_RATE_PEN04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Peruvian Sol/U.S. Dollar average exchange rate in the interbank market expressed as the amount of Peruvian New Soles per one U.S. Dollar for settlement on the same day reported by the Banco Central de Reserva del Peru (www.bcrp.gob.pe) as the 'Tipo de Cambio Interbancario Promedio' at approximately 2:00 p.m., Lima time, on that Rate Calculation Date.
   */
  PEN_INTERBANK_AVE_PEN05,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Peruvian Sol/U.S. Dollar fixing rate (mid market last), expressed as the amount of Peruvian Sols per one U.S. Dollar, for settlement on that same day which appears on the Reuters Screen PDSB Page opposite the caption 'PEN=' as of 12:00 noon, Lima time, on that Rate Calculation Date.
   */
  PEN_PDSB_PEN01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the midpoint of the Peruvian Sol/U.S. Dollar closing weighted average bid and offer ('compra y venta') exchange rates expressed as the amount of Peruvian New Soles per one U.S. Dollar for settlement on the same day, reported by the Superintendencia de Banca, Seguros y AFP (www.sbs.gob.pe) of the Republic of Peru at approximately 5:00 p.m., Lima time, on that Rate Calculation Date.
   */
  PEN_WT_AVE_PEN03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Philippine Peso/U.S. Dollar morning weighted average rate for that Rate Calculation Date, expressed as the amount of Philippine Pesos per one U.S. Dollar, for settlement in one Business Day, sponsored by Bankers Association of the Philippines (www.bap.org.ph) as its 'BAP AM Weighted Average Rate' at approximately 11:30 a.m., Manila time, or as soon thereafter as practicable, on that Rate Calculation Date.
   */
  PHP_BAPPESO_PHP06,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Philippine Peso/U.S. Dollar morning weighted average rate for that Rate Calculation Date, expressed as the amount of Philippine Pesos per one U.S. Dollar, for settlement in one Business Day reported by the Philippine Dealing System PDEX which appears on the Reuters Screen PDSPESO Page to the right of the caption 'AM WT AVE' at approximately 11:30 a.m., Manila time, or as soon thereafter as practicable, on that Rate Calculation Date.
   */
  PHP_PDSPESO_PHP06,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Philippine Peso/U.S. Dollar tom rate (mid market), expressed as the amount of Philippine Pesos per one U.S. Dollar, for settlement in one Business Day which appears on the Reuters Screen PHPESO Page at approximately 11:00 a.m., Manila time, on that Rate Calculation Date.
   */
  PHP_PHPESO_PHP01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Philippine Peso/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Philippine Pesos per one U.S. Dollar, for settlement in one Business Day, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m., Singapore time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC PHP Indicative Survey Methodology (which means a methodology, dated as of December 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Philippine Peso/U.S. Dollar markets for the purpose of determining the SFEMC PHP Indicative Survey Rate).
   */
  PHP_SFEMC_INDICATIVE_SURVEY_RATE_PHP05,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Philippine Peso/U.S. Dollar tom rate (mid market), expressed as the amount of Philippine Pesos per one U.S. Dollar, for settlement in one Business Day which appears on the Telerate Page 15439 at approximately 11:00 a.m., Manila time, on that Rate Calculation Date.
   */
  PHP_TELERATE_15439_PHP03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Philippine Peso/U.S. Dollar Specified Rate, expressed as the amount of Philippine Pesos per one U.S. Dollar, for settlement in one Business Day which appears on the Telerate Page 2920 at the Specified Time, if any, on that Rate Calculation Date.
   */
  PHP_TELERATE_2920_PHP02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Pakistani Rupee/U.S. Dollar reference rate expressed as the amount of Pakistani Rupees per one U.S. Dollar, for settlement in two Business Days reported by the State Bank of Pakistan (www.sbp.org.pk) at approximately 2:30 pm, Karachi time, on that Rate Calculation Date.
   */
  PKR_SBPK_PKR01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Pakistani Rupee/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Pakistani Rupees per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m. Singapore time, or as soon thereafter as practicable, on that Rate Calculation Date. The Spot Rate shall be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC PKR Indicative Survey Methodology (which means a methodology, dated as of July 14, 2008, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Pakistani Rupee/U.S. Dollar markets for the purpose of determining the SFEMC PKR Indicative Survey Rate).
   */
  PKR_SFEMC_INDICATIVE_SURVEY_RATE_PKR02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Polish Zloty/U.S. Dollar Specified Rate, expressed as the amount of Polish Zloty per one U.S. Dollar, for settlement in two Business Days reported by the National Bank of Poland which appears on the Reuters Screen NBPQ Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  PLZ_NBPQ_PLZ01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Polish Zloty/U.S. Dollar fixing rate, expressed as the amount of Polish Zloty per one U.S. Dollar, for settlement in two Business Days reported by the National Bank of Poland which appears on the Reuters Screen NBPR Page at the Specified Time, if any, on that Rate Calculation Date.
   */
  PLZ_NBPR_PLZ02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Russian Ruble/U.S. Dollar Specified Rate, expressed as the amount of Russian Rubles per one U.S. Dollar, for settlement in one Business Day, calculated by the Chicago Mercantile Exchange ('CME') and as published on CME's website, which appears on the Reuters Screen EMTA Page, at approximately 1:30 p.m., Moscow time, on that Rate Calculation Date. The Spot Rate shall be calculated by the CME pursuant to the Chicago Mercantile Exchange / EMTA, Inc. Daily Russian Ruble Per U.S. Dollar Reference Rate Methodology (which means a methodology, effective as of June 16, 2005, as amended from time to time, for a centralized industry-wide survey of financial institutions in Russia that are active participants in the Russian Ruble/U.S. Dollar spot market for the purpose of determining the RUB CME-EMTA Rate).
   */
  RUB_CME_EMTA_RUB03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Russian Ruble/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Russian Rubles per one U.S. Dollar, for settlement in one Business Day, as published on EMTA's web site (www.emta.org) at approximately 2:45 p.m., Moscow time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA RUB Indicative Survey Methodology (which means a methodology dated as of June 16, 2005, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Russian Ruble/U.S. Dollar spot market for the purpose of determining the EMTA RUB Indicative Survey Rate).
   */
  RUB_EMTA_INDICATIVE_SURVEY_RATE_RUB04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Russian Ruble/U.S. Dollar Specified Rate, expressed as the amount of Russian Rubies per one U.S. Dollar, for settlement on the same day reported by the Moscow Interbank Currency Exchange which appears on the Reuters Screen MICEXFRX Page as of 10:30 a.m., Moscow time, on that Rate Calculation Date.
   */
  RUB_MICEXFRX_RUB01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Russian Ruble/U.S. Dollar Specified Rate, expressed as the amount of Russian Rubies per one U.S. Dollar, for settlement on the same day reported by the Moscow Interbank Currency Exchange which appears on the Reuters Screen MMVB Page as of 10:30 a.m., Moscow time, on that Rate Calculation Date.
   */
  RUB_MMVB_RUB02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Singapore Dollar/U.S. Dollar spot rate expressed as the amount of Singapore Dollar per one U.S. Dollar for settlement in two Business Days, reported by ABS Benchmarks Administration Co Pte. Ltd. (or its successor as administrator or sponsor of the rate), which appears on Thomson Reuters Screen ABSFIX01 Page at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  SGD_VWAP_SGD3,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Slovak Koruna/U.S. Dollar Specified Rate, expressed as the amount of Slovak Koruna per one U.S. Dollar, for settlement in two Business Days reported by the National Bank of Slovakia which appears on the Reuters Screen NBSB Page as of 11:40 a.m., Bratislava time, on that Rate Calculation Date.
   */
  SKK_NBSB_SKK01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Thai Baht/U.S. Dollar spot rate at 11:00 a.m., Singapore time, expressed as the amount of Thai Bhaht per one U.S. Dollar, for settlement in two Business Days, reported by the Association of Banks in Singapore which appears on the Reuters Screen ABSIRFIX01 Page to the right of the caption 'Spot' under the column 'THB' at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  THB_ABS_THB01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Thai Baht / U.S. Dollar spot rate expressed as the amount of Thai Baht per one U.S. Dollar for settlement in two Business Days, reported by ABS Benchmarks Administration Co Pte. Ltd. (or its successor as administrator or sponsor of the rate), which appears on Thomson Reuters Screen ABSFIX01 Page at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  THB_VWAP_THB01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Taiwanese Dollar/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Taiwanese Dollars per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m., Singapore time, or as soon thereafter as practicable, on such Rate Calculation Date. The Spot Rate will be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC TWD Indicative Survey Methodology (which means a methodology, dated as of December 1, 2004, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Taiwanese Dollar/U.S. Dollar markets for the purpose of determining the SFEMC TWD Indicative Survey Rate).
   */
  TWD_SFEMC_INDICATIVE_SURVEY_RATE_TWD04,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Taiwanese Dollar/U.S. Dollar spot rate, expressed as the amount of Taiwanese Dollars per one U.S. Dollar, for settlement in two Business Days, reported by the Taipei Forex Inc. which appears on the Reuters Screen TAIFX1 Page under the heading 'Spot' as of 11:00 a.m. Taipei time, on that Rate Calculation Date, or if no rate appears as of 11:00 a.m., Taipei time, the rate that first appears in any of the next succeeding 15 minute intervals after such time, up to and including 12:00 noon, Taipei time on that Rate Calculation Date.
   */
  TWD_TAIFX1_TWD03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Taiwanese Dollar/U.S. Dollar spot rate, expressed as the amount of Taiwanese Dollars per one U.S. Dollar, for settlement in two Business Days, reported by the Taipei Forex Inc. which appears on the Telerate Page 6161 under the heading 'Spot' as of 11:00 a.m., Taipei time, on that Rate Calculation Date, or if no rate appears as of 11:00 a.m., Taipei time, the rate that first appears in any of the next succeeding 15 minute intervals after such time, up to and including 12:00 noon, Taipei time, on that Rate Calculation Date.
   */
  TWD_TELERATE_6161_TWD01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Taiwanese Dollar/U.S. Dollar Specified Rate, expressed as the amount of Taiwanese Dollars per one U.S. Dollar, for settlement in two Business Days which appears on the Reuters Screen TFEMA Page as of 11:00 a.m., Taipei time, on that Rate Calculation Date.
   */
  TWD_TFEMA_TWD02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Ukrainian Hryvnia/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Ukrainian Hryvnia per one U.S. Dollar, for settlement on the same Business Day, as published on EMTA's website (www.emta.org) at approximately 2:00 p.m., Kiev time, or as soon thereafter as practicable, on that Rate Calculation Date. The Spot Rate shall be calculated by EMTA (or a service provider EMTA may select in its sole discretion) pursuant to the EMTA UAH Indicative Survey Methodology (which means a methodology, dated as of March 16, 2009, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Ukrainian Hryvnia / U.S. Dollar markets for the purpose of determining the EMTA UAH Indicative Survey Rate).
   */
  UAH_EMTA_INDICATIVE_SURVEY_RATE_UAH03,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Ukrainian Hryvnia/U.S. Dollar Specified Rate for U.S. Dollars expressed as the amount of Ukrainian Hryvnia per one U.S. Dollar, for settlement on the same Business Day calculated by Thomson Reuters pursuant to the EMTA UAH Industry Survey Methodology, which rate appears on EMTA's website (www.emta.org) and on Thomson Reuters Page EMTAUAHFIX at approximately 11:30 am, Kiev time, on that Rate Calculation Date. The 'EMTA UAH Industry Survey Methodology' as used herein means the methodology dated as of March 16, 2009, for a centralized industry wide survey of financial institutions in the Ukrainian Hryvnia/U.S. Dollar spot market for the purposes of determining the EMTA UAH Industry Survey Rate.
   */
  UAH_EMTA_INDUSTRY_SURVEY_RATE_UAH02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Ukrainian Hryvnia/U.S. Dollar spot rate, expressed as the amount of Ukrainian Hryvnia per one U.S. Dollar, for settlement on the same Business Day reported by GFI Brokers on Thomson Reuters Page GFIU by 9:30 am, London time, on that Rate Calculation Date.
   */
  UAH_GFI_UAH01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the midpoint of the Venezuelan Bolivar /U.S. Dollar Tipo de Cambio De Referencia buying and selling rates, expressed as the amount of Venezuelan Bolivar per one U.S. Dollar, for settlement in two Business Days reported by the Banco Central de Venezuela (www.bcv.org.ve) at approximately 5:00 p.m., Caracas time, on that Rate Calculation Date.
   */
  VEF_FIX_VEF01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Vietnamese Dong/U.S. Dollar spot rate at 11:00 a.m., Singapore time, expressed as the amount of Vietnamese Dong per one U.S. Dollar, for settlement in two Business Days reported by the Association of Banks in Singapore, which appears on the Reuters Screen ABSIRFIX01 Page to the right of the caption 'Spot' under the column 'VND' at approximately 11:30 a.m., Singapore time, on that Rate Calculation Date.
   */
  VND_ABS_VND01,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Vietnamese Dong/U.S. Dollar spot rate expressed as the amount of Vietnamese Dong per one U.S. Dollar, for settlement in two Business Days which appears on Reuters Screen VNDFIX=VN Page under the caption 'Spot' and to the right of the caption 'Average' at approximately 11:00 am, Hanoi time, on that Rate Calculation Date.
   */
  VND_FX_VND02,

  /**
   * The Spot Rate for a Rate Calculation Date will be the Vietnamese Dong/U.S. Dollar Specified Rate for U.S. Dollars, expressed as the amount of Vietnamese Dong per one U.S. Dollar, for settlement in two Business Days, as published on SFEMC's website (www.sfemc.org) at approximately 3:30 p.m., Singapore time, or as soon as thereafter as practicable, on that Rate Calculation Date. The Spot Rate shall be calculated by SFEMC (or a service provider SFEMC may select in its sole discretion) pursuant to the SFEMC VND Indicative Survey Methodology (which means a methodology, dated as of July 14, 2008, as amended from time to time, for a centralized industry-wide survey of financial institutions that are active participants in the Vietnamese Dong/U.S. Dollar markets for the purpose of determining the SFEMC VND Indicative Survey Rate).
   */
  VND_SFEMC_INDICATIVE_SURVEY_RATE_VND03
}
/**
 * The enumeration values to specify how the option is to be settled when exercised.
 */
export enum SettlementTypeEnum {

  /**
   * The intrinsic value of the option will be delivered by way of a cash settlement amount determined, (i) by reference to the differential between the strike price and the settlement price; or (ii) in accordance with a bilateral agreement between the parties.
   */
  CASH,

  /**
   * Allow use of either Cash or Physical settlement without prior Election.
   */
  CASH_OR_PHYSICAL,

  /**
   * Allow Election of either Cash or Physical settlement.
   */
  ELECTION,

  /**
   * The securities underlying the transaction will be delivered by (i) in the case of a call, the seller to the buyer, or (ii) in the case of a put, the buyer to the seller versus a settlement amount equivalent to the strike price per share.
   */
  PHYSICAL
}
/**
 * The enumerated values to specify the consequences of extraordinary events relating to the underlying.
 */
export enum ShareExtraordinaryEventEnum {

  /**
   * The trade continues such that the underlying now consists of the New Shares and/or the Other Consideration, if any, and the proceeds of any redemption, if any, that the holder of the underlying Shares would have been entitled to.
   */
  ALTERNATIVE_OBLIGATION,

  /**
   * The Calculation Agent will determine what adjustment is required to offset any change to the economics of the trade. If the Calculation Agent cannot achieve this, the trade goes to Cancellation and Payment with the Calculation Agent deciding on the value of the cancellation fee. Adjustments may not be made to account solely for changes in volatility, expected dividends, stock loan rate or liquidity.
   */
  CALCULATION_AGENT,

  /**
   * The trade is cancelled and a cancellation fee will be paid by one party to the other.
   */
  CANCELLATION_AND_PAYMENT,

  /**
   * If this is a Share-for-Combined merger event (Shares are replaced with New Shares and Other Consideration), then different treatment can be applied to each component if the parties have specified this.
   */
  COMPONENT,

  /**
   * The Calculation Agent will determine what adjustment is required to offset any change to the economics of the trade. If the Calculation Agent cannot achieve this, the trade goes to Cancellation and Payment with the Calculation Agent deciding on the value of the cancellation fee. Adjustments to account for changes in volatility, expected dividends, stock loan rate or liquidity are allowed.
   */
  MODIFIED_CALCULATION_AGENT,

  /**
   * The trade will be adjusted by the Calculation Agent in accordance with the adjustments made by any exchange on which options on the underlying are listed.
   */
  OPTIONS_EXCHANGE,

  /**
   * Applies to Basket Transactions. The portion of the Basket made up by the affected Share will be cancelled and a cancellation fee will be paid from one party to the other. The remainder of the trade continues.
   */
  PARTIAL_CANCELLATION_AND_PAYMENT
}
/**
 * ...
 */
export enum SimmExceptionApplicableEnum {

  /**
   * The ISDA Standard Initial Margin Model exception is applicable as a Fallback to Mandatory Method. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  FALL_BACK_TO_MANDATORY_METHOD,

  /**
   * The ISDA Standard Initial Margin Model exception is applicable as a Mandatory Method. This means that the method applicable is to determine the Margin Amount (IM) by reference to the methodology prescribed pursuant to the applicable regulatory regime which uses a standardized initial margin schedule (such that prescribed percentages are applied to notional amounts before being adjusted, including by a net-to-gross ratio (NGR)). ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  MANDATORY_METHOD
}
/**
 * The enumerated values to specify the SIMM normalized exceptions applicable to the ISDA 2018 Standard CSA. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles. | ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles.
 */
export enum SimmExceptionEnum {

  /**
   * The ISDA Standard Initial Margin Model exception is applicable. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles. | ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  APPLICABLE,

  /**
   * The ISDA Standard Initial Margin Model exception is not applicable. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles. | ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles.
   */
  NOT_APPLICABLE
}
/**
 * The enumerated values to specify a long or short spread value.
 */
export enum SpreadScheduleTypeEnum {

  /**
   * Represents a Long Spread Schedule. Spread schedules defined as 'Long' will be applied to Long Positions.
   */
  LONG,

  /**
   * Represents a Short Spread Schedule. Spread schedules defined as 'Short' will be applied to Short Positions.
   */
  SHORT
}
/**
 * The enumerated values to specify whether a trade is settling using standard settlement instructions as well as whether it is a candidate for settlement netting.
 */
export enum StandardSettlementStyleEnum {

  /**
   * This trade is a candidate for settlement netting.
   */
  NET,

  /**
   * This trade will settle using standard predetermined funds settlement instructions.
   */
  STANDARD,

  /**
   * This trade will settle using standard predetermined funds settlement instructions and is a candidate for settlement netting.
   */
  STANDARD_AND_NET
}
/**
 * The enumerated values to specify how to deal with a non standard calculation period within a swap stream.
 */
export enum StubPeriodTypeEnum {

  /**
   * If there is a non regular period remaining it is placed at the end of the stream and combined with the adjacent calculation period to give a long last calculation period.
   */
  LONG_FINAL,

  /**
   * If there is a non regular period remaining it is placed at the start of the stream and combined with the adjacent calculation period to give a long first calculation period.
   */
  LONG_INITIAL,

  /**
   * If there is a non regular period remaining it is left shorter than the streams calculation period frequency and placed at the end of the stream.
   */
  SHORT_FINAL,

  /**
   * If there is a non regular period remaining it is left shorter than the streams calculation period frequency and placed at the start of the stream.
   */
  SHORT_INITIAL
}
export enum SupraNationalIssuerTypeClassificationEnum {

  /**
   * International Financial Institution
   */
  INTERNATIONAL_FINANCIAL_INSTITUTIONS,

  /**
   * Multilateral Bank 
   */
  MULTILATERAL_BANK,

  /**
   * Multilateral Development Bank
   */
  MULTILATERAL_DEVELOPMENT_BANK
}
/**
 * The enumerated values to specify taxonomy sources.
 */
export enum TaxonomySourceEnum {

  /**
   * The ISO 10962 Classification of Financial Instruments code
   */
  CFI,

  /**
   * ISDA Collateral Asset Definition Idenifier code.
   */
  ICAD,

  /**
   * The ISDA product taxonomy
   */
  ISDA
}
/**
 * The enumerated values to specify the type of telephone number, e.g. work vs. mobile.
 */
export enum TelephoneTypeEnum {

  /**
   * A number used primarily for work-related facsimile transmissions.
   */
  FAX,

  /**
   * A number on a mobile telephone that is often or usually used for work-related calls. This type of number can be used for urgent work related business when a work number is not sufficient to contact the person or firm.
   */
  MOBILE,

  /**
   * A number used primarily for non work-related calls. (Normally this type of number would be used only as an emergency backup number, not as a regular course of business).
   */
  PERSONAL,

  /**
   * A number used primarily for work-related calls. Includes home office numbers used primarily for work purposes.
   */
  WORK
}
/**
 * The enumerated values to specify points in the day when option exercise and valuation can occur.
 */
export enum TimeTypeEnum {

  /**
   * The time is determined as provided in the relevant Master Confirmation.
   */
  AS_SPECIFIED_IN_MASTER_CONFIRMATION,

  /**
   * The official closing time of the exchange on the valuation date.
   */
  CLOSE,

  /**
   * The official closing time of the derivatives exchange on which a derivative contract is listed on that security underlier.
   */
  DERIVATIVES_CLOSE,

  /**
   * The time at which the official settlement price is determined.
   */
  OSP,

  /**
   * The official opening time of the exchange on the valuation date.
   */
  OPEN,

  /**
   * The time specified in the element equityExpirationTime or valuationTime (as appropriate).
   */
  SPECIFIC_TIME,

  /**
   * The time at which the official settlement price (following the auction by the exchange) is determined by the exchange.
   */
  XETRA
}
/**
 * The enumeration values to qualify the allowed units of time.
 */
export enum TimeUnitEnum {

  /**
   * Day
   */
  DAY,

  /**
   * Hour
   */
  HOUR,

  /**
   * Minute
   */
  MINUTE,

  /**
   * Month
   */
  MONTH,

  /**
   * Second
   */
  SECOND,

  /**
   * Week
   */
  WEEK,

  /**
   * Year
   */
  YEAR
}
/**
 * The enumeration values to specify how the transfer will settle, e.g. DvP.
 */
export enum TransferSettlementEnum {

  /**
   * Simultaneous transfer of two assets, typically securities, as a way to avoid settlement risk.
   */
  DELIVERY_VERSUS_DELIVERY,

  /**
   * Settlement in which the transfer of the asset and the cash settlement are simultaneous.
   */
  DELIVERY_VERSUS_PAYMENT,

  /**
   * No central settlement.
   */
  NOT_CENTRAL_SETTLEMENT,

  /**
   * Simultaneous transfer of cashflows.
   */
  PAYMENT_VERSUS_PAYMENT
}
/**
 * The enumeration values to specify the transfer status.
 */
export enum TransferStatusEnum {

  /**
   * The transfer is disputed.
   */
  DISPUTED,

  /**
   * The transfer has been instructed.
   */
  INSTRUCTED,

  /**
   * The transfer is pending instruction.
   */
  PENDING,

  /**
   * The transfer has been settled.
   */
  SETTLED
}
/**
 * The enumerated values to specify the time of day which would be considered for valuing the knock event.
 */
export enum TriggerTimeTypeEnum {

  /**
   * At any time during the Knock Determination period (continuous barrier).
   */
  ANYTIME,

  /**
   * The close of trading on a day would be considered for valuation.
   */
  CLOSING
}
/**
 * The enumerated values to specify whether an option will trigger or expire depending upon whether the spot rate is above or below the barrier rate.
 */
export enum TriggerTypeEnum {

  /**
   * The underlier price must be equal to the Trigger level.
   */
  EQUAL,

  /**
   * The underlier price must be equal to or greater than the Trigger level.
   */
  EQUAL_OR_GREATER,

  /**
   * The underlier price must be equal to or less than the Trigger level.
   */
  EQUAL_OR_LESS,

  /**
   * The underlier price must be greater than the Trigger level.
   */
  GREATER,

  /**
   * The underlier price must be less than the Trigger level.
   */
  LESS
}
/**
 * The enumeration values to qualify the units of measure. FpML makes use of the priceQuoteUnitsScheme for specifying the units as part of its commodity implementation. Its scope is however deemed too broad for the CDM, as it includes values such as Amount and BasisPoints.  As a result, it is deemed inappropriate as a reference scheme for that enumeration.
 */
export enum UnitEnum {

  /**
   * Barrel
   */
  BBL,

  /**
   * Bushel
   */
  BSH,

  /**
   * Gallon
   */
  GAL,

  /**
   * Million British thermal units
   */
  MMBTU,

  /**
   * Megawatt-hour
   */
  M_WH
}
/**
 * The enumerated values to specify the ISDA defined methodology for determining the final price of the reference obligation for purposes of cash settlement.
 */
export enum ValuationMethodEnum {

  AVERAGE_BLENDED_HIGHEST,

  AVERAGE_BLENDED_MARKET,

  AVERAGE_HIGHEST,

  AVERAGE_MARKET,

  BLENDED_HIGHEST,

  BLENDED_MARKET,

  HIGHEST,

  MARKET
}
export enum WarehouseIdentityEnum {

  /**
   * The DTCC Trade Information Warehouse Gold service
   */
  DTCC_TIW_GOLD
}
/**
 * The enumerated values to specify the weekly roll day.
 */
export enum WeeklyRollConventionEnum {

  /**
   * Friday
   */
  FRI,

  /**
   * Monday
   */
  MON,

  /**
   * Saturday
   */
  SAT,

  /**
   * Sunday
   */
  SUN,

  /**
   * 13-week and 26-week U.S. Treasury Bill Auction Dates. Each Monday except for U.S. (New York) holidays when it will occur on a Tuesday
   */
  TBILL,

  /**
   * Thursday
   */
  THU,

  /**
   * Tuesday
   */
  TUE,

  /**
   * Wednesday
   */
  WED
}
export enum WorkflowStatusEnum {

  ACCEPTED,

  AFFIRMED,

  ALLEGED,

  AMENDED,

  CANCELLED,

  CERTAIN,

  CLEARED,

  CONFIRMED,

  PENDING,

  REJECTED,

  SUBMITTED,

  TERMINATED,

  UNCERTAIN,

  UNCONFIRMED
}
