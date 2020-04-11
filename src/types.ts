/**
 * This file is auto-generated from the ISDA Common Domain Model, do not edit.
 * Version: 2.40.2
 */

import { ReferenceWithMeta, FieldWithMeta, MetaFields } from './metatypes';
import {
  InterpolationMethodEnum, FloatingRateIndexEnum, QuotationSideEnum, CashflowTypeEnum, TimeUnitEnum, UnitEnum, AssetTransferTypeEnum, CommodityReferencePriceEnum, ActionEnum, IntentEnum,
  EventTimestampQualificationEnum, WorkflowStatusEnum, CreditLimitTypeEnum, LimitLevelEnum, WarehouseIdentityEnum, PeriodTimeEnum, ConfirmationStatusEnum, AffirmationStatusEnum, BusinessCenterEnum, CategoryEnum,
  DeterminationMethodEnum, DividendDateReferenceEnum, DividendAmountTypeEnum, DividendEntitlementEnum, DividendPeriodEnum, ShareExtraordinaryEventEnum, TimeTypeEnum, NationalizationOrInsolvencyOrDelistingEventEnum, IndexEventConsequenceEnum, StubPeriodTypeEnum,
  CallingPartyEnum, QuotationRateTypeEnum, DayCountFractionEnum, DiscountingTypeEnum, SettlementRateOptionEnum, BusinessDayConventionEnum, DayTypeEnum, PeriodEnum, AveragingMethodEnum, NegativeInterestRateTreatmentEnum,
  RateTreatmentEnum, ResetRelativeToEnum, AveragingInOutEnum, MarketDisruptionEnum, SettlementTypeEnum, TransferSettlementEnum, RestructuringEnum, TriggerTimeTypeEnum, TriggerTypeEnum, BrokerConfirmationTypeEnum,
  CalculationAgentPartyEnum, RollConventionEnum, PeriodExtendedEnum, MatrixTermEnum, MatrixTypeEnum, ContractualSupplementEnum, CreditSupportAgreementTypeEnum, ContractualDefinitionsEnum, InformationProviderEnum, MasterAgreementTypeEnum,
  MasterConfirmationAnnexTypeEnum, MasterConfirmationTypeEnum, PayRelativeToEnum, PremiumTypeEnum, QuoteBasisEnum, WeeklyRollConventionEnum, ResourceTypeEnum, LengthUnitEnum, SpreadScheduleTypeEnum, PayerReceiverEnum,
  PartyRoleEnum, AccountTypeEnum, NaturalPersonRoleEnum, TelephoneTypeEnum, AdditionalTypeEnum, AmendmentEffectiveDateEnum, RegulatoryRegimeEnum, ConditionsPrecedentEnum, CreditRatingAgencyEnum, DeliveryAmountElectionEnum,
  HoldingPostedCollateralEnum, InterestAdjustmentPeriodicityEnum, ReturnTypeEnum, GoverningLawEnum, LegalAgreementNameEnum, LegalAgreementPublisherEnum, QuantifierEnum, CreditNotationMismatchResolutionEnum, SensitivitiesEnum, SimmExceptionApplicableEnum,
  SimmExceptionEnum, MarginApproachEnum, RecalculationOfValueElectionEnum, MortgageSectorEnum, ProductIdSourceEnum, TaxonomySourceEnum, ObligationCategoryEnum, TransferStatusEnum, PriceExpressionEnum, ValuationMethodEnum,
  IndexAnnexSourceEnum, InterestShortfallCapEnum, EntityTypeEnum, SettledEntityMatrixSourceEnum, RoundingDirectionEnum, IssuerTypeClassificationEnum, QuasiGovernmentIssuerTypeClassificationEnum, RegionalGovernmentIssuerTypeClassificationEnum, SupraNationalIssuerTypeClassificationEnum, BondTypeEnum,
  EquityTypeEnum, CollateralProductTypeEnum, SecurityTypeEnum, ClosedStateEnum, ExecutionTypeEnum, CompoundingMethodEnum, OptionTypeEnum, DeliveryMethodEnum, RepoDurationEnum, MarginTypeEnum,
  NotionalAdjustmentEnum, AssetClassEnum, QuotationStyleEnum, PositionStatusEnum
    } from './enums';

/**
 * A class to specify an account as an account number alongside, optionally. an account name, an account type, an account beneficiary and a servicing party.
 */
export interface Account {
  /**
   * A reference to the party beneficiary of the account.
   */
  accountBeneficiary?: ReferenceWithMeta<Party>;
  /**
   * The name by which the account is known.
   */
  accountName?: FieldWithMeta<String>;
  /**
   * The account number.
   */
  accountNumber?: FieldWithMeta<String>;
  /**
   * The type of account, e.g. client, house.
   */
  accountType?: FieldWithMeta<AccountTypeEnum>;
  meta?: MetaFields;
  /**
   * The reference to the legal entity that services the account, i.e. in the books of which the account is held.
   */
  servicingParty?: ReferenceWithMeta<Party>;
}
  
export interface AcctOwnr {
  id?: Id;
}
  
export interface ActualPrice {
  amount?: number;
  /**
   * Specifies the currency associated with the net price. This element is not present if the price is expressed in percentage terms (as specified through the priceExpression element).
   */
  currency?: FieldWithMeta<String>;
  /**
   * Specifies whether the price is expressed in absolute or relative terms.
   */
  priceExpression?: PriceExpressionEnum;
}
  
/**
 * A type for defining the Additional Disruption Events.
 */
export interface AdditionalDisruptionEvents {
  /**
   * 2002 ISDA Equity Derivatives Definitions: Change in Law | 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Change In Law | If true, then change in law is applicable.
   */
  changeInLaw?: boolean;
  /**
   * A reference to the party which determines additional disruption events.
   */
  determiningPartyReference?: ReferenceWithMeta<Party>;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Failure to Deliver | Where the underlying is shares and the transaction is physically settled, then, if true, a failure to deliver the shares on the settlement date will not be an event of default for the purposes of the master agreement.
   */
  failureToDeliver?: boolean;
  /**
   * If true, then foreign ownership event is applicable.
   */
  foreignOwnershipEvent?: boolean;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Hedging Disruption | If true, then hedging disruption is applicable.
   */
  hedgingDisruption?: boolean;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Increased Cost of Hedging | If true, then increased cost of hedging is applicable.
   */
  increasedCostOfHedging?: boolean;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Increased Cost of Stock Borrow | If true, then increased cost of stock borrow is applicable.
   */
  increasedCostOfStockBorrow?: boolean;
  /**
   * Specifies the initial stock loan rate for Increased Cost of Stock Borrow. A percentage of 5% is represented as 0.05.
   */
  initialStockLoanRate?: number;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Insolvency Filing | If true, then insolvency filing is applicable.
   */
  insolvencyFiling?: boolean;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Loss of Stock Borrow | If true, then loss of stock borrow is applicable.
   */
  lossOfStockBorrow?: boolean;
  /**
   * Specifies the maximum stock loan rate for Loss of Stock Borrow. A percentage of 5% is represented as 0.05.
   */
  maximumStockLoanRate?: number;
}
  
/**
 * A class to specify the events that will give rise to the payment additional fixed payments.
 */
export interface AdditionalFixedPayments {
  /**
   * An additional Fixed Payment Event. Corresponds to the payment by or on behalf of the Issuer of an actual interest amount in respect to the reference obligation that is greater than the expected interest amount. ISDA 2003 Term: Interest Shortfall Reimbursement.
   */
  interestShortfallReimbursement?: boolean;
  /**
   * An additional Fixed Payment Event. Corresponds to the payment by or on behalf of the Issuer of an actual principal amount in respect to the reference obligation that is greater than the expected principal amount. ISDA 2003 Term: Principal Shortfall Reimbursement.
   */
  principalShortfallReimbursement?: boolean;
  /**
   * An Additional Fixed Payment. Corresponds to the payment by or on behalf of the issuer of an amount in respect to the reference obligation in reduction of the prior writedowns. ISDA 2003 Term: Writedown Reimbursement.
   */
  writedownReimbursement?: boolean;
}
  
/**
 * A class to specify the additional regulatory regime(s) that might be elected by the parties to a legal agreement where such provision exists, such as the ISDA 2016 and 2018 CSA for Initial Margin.
 */
export interface AdditionalRegime {
  /**
   * The additional regulatory regime as specified by the parties.
   */
  regime?: string;
  /**
   * The regulatory regime terms which are referred to as part of certain legal agreements, such as such as the ISDA 2016 and 2018 CSA for Initial Margin.
   */
  regimeTerms?: RegimeTerms[];
}
  
/**
 * A class to specify the Additional Representation. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s).
 */
export interface AdditionalRepresentation {
  /**
   * A supplemental custom election that might be specified by the parties for the purpose of specifying the Additional Representation.
   */
  customElection?: string;
  /**
   * A qualification as to whether the Additional Representation is applicable.
   */
  partyElection?: AdditionalRepresentationElection[];
}
  
/**
 * A class to specify the parties' Additional Representation(s) election.
 */
export interface AdditionalRepresentationElection {
  /**
   * The Additional Representation is applicable when True, and not applicable when False.
   */
  isApplicable?: boolean;
  /**
   * The elective party.
   */
  party?: string;
}
  
/**
 * A class to specify the Pledgor/Obligor/Chargor Additional Rights Event election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (k): Chargor Additional Rights Event. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (k): Obligor Additional Rights Event. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (k): Pledgor Additional Rights Event.
 */
export interface AdditionalRightsEvent {
  /**
   * The Pledgor Additional Rights Event election is applicable when True, and not applicable when False.
   */
  isApplicable?: boolean;
  /**
   * The qualification of the Pledgor Additional Rights Event election, when specified.
   */
  qualification?: string;
}
  
/**
 * A class to specify an optional termination event, additional to the Termination Events that will be deemed an Access Condition (Initial Margin CSA) or a Specified Condition (Variation Margin CSA)
 */
export interface AdditionalTerminationEvent {
  /**
   * Whether the additional termination event is applicable for the relevant party
   */
  applicable?: boolean;
  /**
   * The name of the additional termination event
   */
  name?: string;
}
  
/**
 * The specification of the Additional Type of transaction that can require the collection or delivery of initial margin under a given regulatory regime for the purposes of Covered Transactions, as specified in ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(B).
 */
export interface AdditionalType {
  /**
   * The qualification of the Additional Type of transaction that can require the collection or delivery of initial margin when specified as a custom value by the parties to the legal agreement.
   */
  customValue?: string;
  /**
   * The qualification of the Additional Type of transaction that can require the collection or delivery of initial margin when specified as a standard value.
   */
  standardValue?: AdditionalTypeEnum;
}
  
/**
 * A class to specify a post or street address.
 */
export interface Address {
  /**
   * The city component of the postal address.
   */
  city?: string;
  /**
   * The ISO 3166 standard code for the country within which the postal address is located.
   */
  country?: FieldWithMeta<String>;
  /**
   * The code, required for computerized mail sorting systems, that is allocated to a physical address by a national postal authority.
   */
  postalCode?: string;
  /**
   * A country subdivision used in postal addresses in some countries. For example, US states, Canadian provinces, Swiss cantons, ...
   */
  state?: string;
  /**
   * The set of street and building number information that identifies a postal address within a city.
   */
  street?: string[];
}
  
export interface AddtlAttrbts {
  rskRdcgTx?: string;
  sctiesFincgTxInd?: string;
}
  
/**
 * A class for defining a date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.
 */
export interface AdjustableDate {
  /**
   * The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: FieldWithMeta<Date>;
  /**
   * The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.
   */
  dateAdjustments?: BusinessDayAdjustments;
  /**
   * A pointer style reference to date adjustments defined elsewhere in the document.
   */
  dateAdjustmentsReference?: ReferenceWithMeta<BusinessDayAdjustments>;
  meta?: MetaFields;
  /**
   * A date subject to adjustment. While in FpML this date is required, this cardinality constraint has been relaxed as part of the CDM in order to support the FRA representation, which effective and termination dates are specified in FpML as adjusted dates.
   */
  unadjustedDate?: Date;
}
  
/**
 * A class for defining a series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the dates.
 */
export interface AdjustableDates {
  /**
   * The date(s) once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: FieldWithMeta<Date>[];
  /**
   * The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.
   */
  dateAdjustments?: BusinessDayAdjustments;
  meta?: MetaFields;
  /**
   * A date subject to adjustment.
   */
  unadjustedDate?: Date[];
}
  
/**
 * A class for defining a date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.
 */
export interface AdjustableOrAdjustedDate {
  /**
   * The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: FieldWithMeta<Date>;
  /**
   * The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.
   */
  dateAdjustments?: BusinessDayAdjustments;
  meta?: MetaFields;
  /**
   * A date subject to adjustment.
   */
  unadjustedDate?: Date;
}
  
/**
 * This Rosetta class specifies the date as either an unadjusted, adjusted or relative date. It supplements the features of the AdjustableOrAdjustedDate to support the credit default swap option premium, which uses the relative date construct.
 */
export interface AdjustableOrAdjustedOrRelativeDate {
  /**
   * The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: FieldWithMeta<Date>;
  /**
   * The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.
   */
  dateAdjustments?: BusinessDayAdjustments;
  /**
   * A date specified as some offset to another date (the anchor date).
   */
  relativeDate?: RelativeDateOffset;
  /**
   * A date subject to adjustment.
   */
  unadjustedDate?: Date;
}
  
/**
 * A class giving the choice between defining a date as an explicit date together with applicable adjustments or as relative to some other (anchor) date.
 */
export interface AdjustableOrRelativeDate {
  /**
   * A date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.
   */
  adjustableDate?: AdjustableDate;
  meta?: MetaFields;
  /**
   * A date specified as some offset to another date (the anchor date).
   */
  relativeDate?: AdjustedRelativeDateOffset;
}
  
/**
 * A class giving the choice between defining a series of dates as an explicit list of dates together with applicable adjustments or as relative to some other series of (anchor) dates.
 */
export interface AdjustableOrRelativeDates {
  /**
   * A series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.
   */
  adjustableDates?: AdjustableDates;
  meta?: MetaFields;
  /**
   * A series of dates specified as some offset to another series of dates (the anchor dates).
   */
  relativeDates?: RelativeDates;
}
  
/**
 * A type defining a date (referred to as the derived date) as a relative offset from another date (referred to as the anchor date) plus optional date adjustments.
 */
export interface AdjustedRelativeDateOffset extends RelativeDateOffset {
  /**
   * The business day convention and financial business centers used for adjusting the relative date if it would otherwise fall on a day that is not a business date in the specified business centers.
   */
  relativeDateAdjustments?: BusinessDayAdjustments;
  /**
   * The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: Date;
  businessCenters?: BusinessCenters;
  /**
   * A pointer style reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.
   */
  businessCentersReference?: ReferenceWithMeta<BusinessCenters>;
  /**
   * The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).
   */
  businessDayConvention?: BusinessDayConventionEnum;
  /**
   * Specifies the anchor as an href attribute. The href attribute value is a pointer style reference to the element or component elsewhere in the document where the anchor date is defined.
   */
  dateRelativeTo?: ReferenceWithMeta<Date>;
  /**
   * In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.
   */
  dayType?: DayTypeEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).
   */
  period?: PeriodEnum;
  /**
   * A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.
   */
  periodMultiplier?: number;
}
  
/**
 * A class to specify a trade affirmation.
 */
export interface Affirmation {
  /**
   * The identifier(s) associated with the trade and resulting confirmation.
   */
  identifier?: Identifier[];
  /**
   * The lineage attribute provides a linkage to previous lifecycle events and associated data.
   */
  lineage?: Lineage;
  /**
   * The parties associated with the trade.
   */
  party?: Party[];
  /**
   * The role(s) that party(ies) may have in relation to the trade
   */
  partyRole?: PartyRole[];
  status?: AffirmationStatusEnum;
}
  
export interface AgencyRating {
  /**
   * Agency rating based on default risk and creditors claim in event of default associated with specific instrument.
   */
  instrumentAgencyRating?: CreditNotations;
  /**
   * Agency rating based on default risk and creditors claim in event of default associated with issuer of asset.
   */
  issuerAgencyRating?: CreditNotations;
  /**
   * Agency rating based on default risk of country.
   */
  sovereignAgencyRating?: CreditNotations;
}
  
/**
 *  Parameters to be used to filter events that are relevant to a given portfolio in order to calculate the state of this portfolio. The attributes correspond to all the possible aggregation criteria that can be used and these criteria can be combined. All the attributes are optional.
 */
export interface AggregationParameters {
  /**
   * To aggregate based only on given Contract(s).
   */
  contractReference?: ReferenceWithMeta<Contract>[];
  /**
   * To aggregate as of a particular date
   */
  dateTime?: Date;
  /**
   * To aggregate based only on given Execution(s).
   */
  executionReference?: ReferenceWithMeta<Execution>[];
  /**
   * To aggregate based on a selection of party(ies) / legal entity(ies).
   */
  party?: ReferenceWithMeta<Party>[];
  /**
   * To aggregate based on position status (EXECUTED, SETTLED etc)
   */
  positionStatus?: PositionStatusEnum;
  /**
   * To aggregate based on a selection of products.
   */
  product?: Product[];
  /**
   * To aggregate based on a selection of product type(s).
   */
  productQualifier?: string[];
  /**
   * Specifies whether to calculate total position to given date, or only daily position for the given date.
   */
  totalPosition?: boolean;
}
  
export interface AllocationBreakdown {
  /**
   * The account to allocate the trade into
   */
  account?: Account;
  /**
   * The identifier to be assigned to the new trade post allocation
   */
  allocationTradeId?: Identifier[];
  /**
   * The sum that must be posted upfront to collateralize against counterparty credit risk.
   */
  collateral?: Collateral;
  /**
   * Reference to the party to specify the account.
   */
  partyReference?: ReferenceWithMeta<Party>;
  /**
   * The quantity to be allocated to the party.
   */
  quantity?: QuantityNotation;
}
  
export interface AllocationInstruction {
  /**
   * The set of allocation breakdowns to be applied to a block trade
   */
  breakdowns?: AllocationBreakdown[];
}
  
/**
 * A class to specify the allocated outcome as the combination of the previous Trade, which is either an execution or a contract and which state is specified as 'Allocated', and a set of Trade(s) of the same execution or contract type as before allocation. The allocation to one single trade is deemed appropriate: e.g. the trade could be effectively allocated from the fund manager doing the execution to a single fund entity.
 */
export interface AllocationOutcome {
  allocatedTrade?: Trade[];
  originalTrade?: Trade;
}
  
/**
 * The primitive event to represent a split/allocation of a trade. As part of this primitive event the type of trade, either an execution or a contract, does not get altered. In the case of an execution, the further transformation of each split execution into a contract will be the purpose of the ContractFormation primitive.
 */
export interface AllocationPrimitive {
  /**
   * Outcome of the allocation as a list of Trades, which is either a split execution or a split contract, plus a pointer to the previous execution or contract marked as 'Allocated'.
   */
  after?: AllocationOutcome;
  /**
   * The trade before allocation, which is either an execution if allocation happens before the contract is formed, or an already formed contract.
   */
  before?: ReferenceWithMeta<Trade>;
}
  
/**
 * A class to specify the effective date of the Amendment to Termination Currency. This date can be specified as either an actual date, a specific date (e.g. the annex date) or as a custom provision. 
 */
export interface AmendmentEffectiveDate {
  /**
   * The effective date of the Amendment to Termination Currency when specified as a non normalized custom provision.
   */
  customProvision?: string;
  /**
   * The effective date of the Amendment to Termination Currency when specified as an actual date.
   */
  date?: Date;
  /**
   * The effective date of the Amendment to Termination Currency when specified as a specific date (e.g. the annex date).
   */
  specificDate?: AmendmentEffectiveDateEnum;
}
  
/**
 * A class defining the exercise period for an American style option together with any rules governing the notional amount of the underlying which can be exercised on any given exercise date and any associated exercise fees.
 */
export interface AmericanExercise {
  /**
   * The first day of the exercise period for an American style option.
   */
  commencementDate?: AdjustableOrRelativeDate;
  /**
   * The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) to, and including, the expiration date.
   */
  earliestExerciseTime?: BusinessCenterTime;
  /**
   * The fees associated with an exercise date. The fees are conditional on the exercise occurring. The fees can be specified as actual currency amounts or as percentages of the notional amount being exercised.
   */
  exerciseFeeSchedule?: ExerciseFeeSchedule;
  /**
   * The last day within an exercise period for an American style option. For a European style option it is the only day within the exercise period.
   */
  expirationDate?: AdjustableOrRelativeDate;
  /**
   * The latest time for exercise on expirationDate.
   */
  expirationTime?: BusinessCenterTime;
  /**
   * For a Bermuda or American style option, the latest time on an exercise business day (excluding the expiration date) within the exercise period that notice can be given by the buyer to the seller or seller's agent. Notice of exercise given after this time will be deemed to have been given on the next exercise business day.
   */
  latestExerciseTime?: BusinessCenterTime;
  meta?: MetaFields;
  /**
   * As defined in the 2000 ISDA Definitions, Section 12.4. Multiple Exercise, the buyer of the option has the right to exercise all or less than all the unexercised notional amount of the underlying swap on one or more days in the exercise period, but on any such day may not exercise less than the minimum notional amount or more that the maximum notional amount, and if an integral multiple amount is specified, the notional amount exercised must be equal to, or be an integral multiple of, the integral multiple amount.
   */
  multipleExercise?: MultipleExercise;
  /**
   * The date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date).
   */
  relevantUnderlyingDate?: AdjustableOrRelativeDates;
}
  
/**
 * A class to specify a currency amount or a currency amount schedule.
 */
export interface AmountSchedule extends Schedule {
  /**
   * The currency in which the amount schedule is denominated. The currency is specified outside of the actual schedule in order to be applied uniformly to it. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>[];
  /**
   * The initial rate or amount, as the case may be. An initial rate of 5% would be represented as 0.05.
   */
  initialValue?: number;
  /**
   * The schedule of step date and value pairs. On each step date the associated step value becomes effective A list of steps may be ordered in the document by ascending step date. An FpML document containing an unordered list of steps is still regarded as a conformant document.
   */
  step?: Step[];
}
  
/**
 * A class to specify the applicable regulatory regime(s) that parties to a legal agreement, such as the ISDA 2016 and 2018 CSA for Initial Margin, might be subject to.
 */
export interface ApplicableRegime {
  /**
   * The applicable regulatory regime, as specified through an enumeration.
   */
  regime?: RegulatoryRegimeEnum;
  /**
   * The regulatory regime terms which are referred to as part of certain legal agreements, such as such as the ISDA 2016 and 2018 CSA for Initial Margin.
   */
  regimeTerms?: RegimeTerms[];
}
  
/**
 * A class to specify the Valuation of Appropriate Collateral that is applicable to the English Law ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (u): Valuation of Appropriated Collateral.
 */
export interface AppropriatedCollateralValuation {
  /**
   * The parties' election that qualify the Valuation of Appropriate Collateral in the case where it is deemed applicable.
   */
  election?: string;
  /**
   * The qualification of whether the Valuation of Appropriate Collateral provision is applicable (True) or not applicable (False).
   */
  isSpecified?: boolean;
}
  
/**
 * As per ISDA 2002 Definitions.
 */
export interface Asian {
  averagingInOut?: AveragingInOutEnum;
  /**
   * The averaging in period.
   */
  averagingPeriodIn?: AveragingPeriod;
  /**
   * The averaging out period.
   */
  averagingPeriodOut?: AveragingPeriod;
  /**
   * The factor of strike.
   */
  strikeFactor?: number;
}
  
/**
 * Generic object to specify an identifier for a quantifiable object, which can either be a product, a currency or a rate option.
 */
export interface AssetIdentifier {
  /**
   * Currency identifier, when the quantifiable asset is a currency.
   */
  currency?: FieldWithMeta<String>;
  /**
   * Product identifier, when the quantifiable asset is a product.
   */
  productIdentifier?: ProductIdentifier;
  /**
   * Rate option identifier, when the quantifiable asset is a floating rate.
   */
  rateOption?: FloatingRateOption;
}
  
/**
 * Characterizes the asset pool behind an asset backed bond.
 */
export interface AssetPool {
  /**
   * The part of the mortgage that is currently outstanding. It is expressed similarly to the initial factor, as factor multiplier to the mortgage. This term is formally defined as part of the 'ISDA Standard Terms Supplement for use with credit derivatives transactions on mortgage-backed security with pas-as-you-go or physical settlement'.
   */
  currentFactor?: number;
  /**
   * Optionally it is possible to specify a version effective date when a version is supplied.
   */
  effectiveDate?: Date;
  /**
   * The part of the mortgage that is outstanding on trade inception, i.e. has not been repaid yet as principal. It is expressed as a multiplier factor to the mortgage: 1 means that the whole mortgage amount is outstanding, 0.8 means that 20% has been repaid.
   */
  initialFactor?: number;
  /**
   * The asset pool version.
   */
  version?: string;
}
  
/**
 * A class to specify the identifier value and its associated version.
 */
export interface AssignedIdentifier {
  /**
   * The identifier value.
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The identifier version, which is specified as an integer and is meant to be incremented each time the transaction terms (whether contract or event) change. This version is made option to support the use case where the identifier is referenced without the version. The constraint that a contract and a lifecycle event need to have an associated version is enforced through data rules.
   */
  version?: number;
}
  
/**
 * A type to define automatic exercise of a swaption. With automatic exercise the option is deemed to have exercised if it is in the money by more than the threshold amount on the exercise date.
 */
export interface AutomaticExercise {
  /**
   * A threshold rate. The threshold of 0.10% would be represented as 0.001
   */
  thresholdRate?: number;
}
  
/**
 * An unordered list of weighted averaging observations.
 */
export interface AveragingObservationList {
  /**
   * A single weighted averaging observation.
   */
  averagingObservation?: WeightedAveragingObservation[];
}
  
/**
 * Period over which an average value is taken.
 */
export interface AveragingPeriod {
  /**
   * An unweighted list of averaging observation date and times.
   */
  averagingDateTimes?: DateTimeList;
  /**
   * A weighted list of averaging observation date and times.
   */
  averagingObservations?: AveragingObservationList;
  /**
   * The market disruption event as defined by ISDA 2002 Definitions.
   */
  marketDisruption?: FieldWithMeta<MarketDisruptionEnum>;
  /**
   * A schedule for generating averaging observation dates.
   */
  schedule?: AveragingSchedule[];
}
  
/**
 * Class to representing a method for generating a series of dates.
 */
export interface AveragingSchedule {
  /**
   * The frequency at which averaging period occurs with the regular part of the valuation schedule and their roll date convention.
   */
  averagingPeriodFrequency?: CalculationPeriodFrequency;
  /**
   * Date on which this period ends.
   */
  endDate?: Date;
  /**
   * Date on which this period begins.
   */
  startDate?: Date;
}
  
/**
 * As per ISDA 2002 Definitions.
 */
export interface Barrier {
  /**
   * A trigger level approached from beneath.
   */
  barrierCap?: TriggerEvent;
  /**
   * A trigger level approached from above.
   */
  barrierFloor?: TriggerEvent;
}
  
/**
 * CDS Basket Reference Information.
 */
export interface BasketReferenceInformation {
  /**
   * A CDS basket identifier.
   */
  basketId?: FieldWithMeta<String>[];
  /**
   * The name of the basket expressed as a free format string. FpML does not define usage rules for this element.
   */
  basketName?: FieldWithMeta<String>;
  /**
   * M th reference obligation to default to allow representation of N th to M th defaults.
   */
  mthToDefault?: number;
  /**
   * N th reference obligation to default triggers payout.
   */
  nthToDefault?: number;
  /**
   * This element contains all the reference pool items to define the reference entity and reference obligation(s) in the basket.
   */
  referencePool?: ReferencePool;
  /**
   * This element contains CDS tranche terms.
   */
  tranche?: Tranche;
}
  
/**
 * A class defining the Bermuda option exercise dates and the expiration date together with any rules governing the notional amount of the underlying which can be exercised on any given exercise date and any associated exercise fee.
 */
export interface BermudaExercise {
  /**
   * The dates that define the Bermuda option exercise dates and the expiration date. The last specified date is assumed to be the expiration date. The dates can either be specified as a series of explicit dates and associated adjustments or as a series of dates defined relative to another schedule of dates, for example, the calculation period start dates. Where a relative series of dates are defined the first and last possible exercise dates can be separately specified.
   */
  bermudaExerciseDates?: AdjustableOrRelativeDates;
  /**
   * The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) on each Bermuda option exercise date and the expiration date.
   */
  earliestExerciseTime?: BusinessCenterTime;
  /**
   * The fees associated with an exercise date. The fees are conditional on the exercise occurring. The fees can be specified as actual currency amounts or as percentages of the notional amount being exercised.
   */
  exerciseFeeSchedule?: ExerciseFeeSchedule;
  /**
   * The latest time for exercise on expirationDate.
   */
  expirationTime?: BusinessCenterTime;
  /**
   * For a Bermuda or American style option, the latest time on an exercise business day (excluding the expiration date) within the exercise period that notice can be given by the buyer to the seller or seller's agent. Notice of exercise given after this time will be deemed to have been given on the next exercise business day.
   */
  latestExerciseTime?: BusinessCenterTime;
  meta?: MetaFields;
  /**
   * As defined in the 2000 ISDA Definitions, Section 12.4. Multiple Exercise, the buyer of the option has the right to exercise all or less than all the unexercised notional amount of the underlying swap on one or more days in the exercise period, but on any such day may not exercise less than the minimum notional amount or more that the maximum notional amount, and if an integral multiple amount is specified, the notional amount exercised must be equal to, or be an integral multiple of, the integral multiple amount.
   */
  multipleExercise?: MultipleExercise;
  /**
   * The date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date).
   */
  relevantUnderlyingDate?: AdjustableOrRelativeDates;
}
  
/**
 * A class to specify a bond as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface Bond extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 *  Either a bond or convertible bond.
 */
export interface BondChoiceModel {
  bond?: Bond;
  convertibleBond?: ConvertibleBond;
}
  
/**
 *  Bond equity model to value convertible bonds and modelled onto BondEquity.model in FpML.
 */
export interface BondEquityModel {
  /**
   * Either the bond or convertible bond.
   */
  bondchoiceModel?: BondChoiceModel;
  /**
   * The equity.
   */
  equity?: Equity;
}
  
/**
 * A class to specify the strike of a bond or convertible bond option.
 */
export interface BondOptionStrike {
  price?: OptionStrike;
  /**
   * The strike of an option when expressed by reference to a swap curve. (Typically the case for a convertible bond option.)
   */
  referenceSwapCurve?: ReferenceSwapCurve;
}
  
/**
 *  Bond price and yield valuation model for the security leg in a securities financing transaction, closely modelled onto the BondPriceAndYield.model in FpML.
 */
export interface BondPriceAndYieldModel {
  /**
   * Bond all-in-price which is a price that includes all relevant price adjustments (i.e. accrued interest, haircut or margin ratio, inflation factor,etc.). It expresses a price in terms of percentage of nominal amount.
   */
  allInPrice?: number;
  /**
   * Either the clean or dirty price of the bond.
   */
  cleanOrDirtyPrice?: CleanOrDirtyPrice;
  /**
   * The inflation factor is specified for inflation-linked products which require some additional elements to calculate prices correctly.
   */
  inflationFactor?: number;
  /**
   * Bond price relative to a Benchmark.
   */
  relativePrice?: RelativePrice;
  /**
   * Price specified as a yield to maturity.
   */
  yieldToMaturity?: number;
}
  
/**
 * Reference to a bond underlier to represent an asset swap or Condition Precedent Bond.
 */
export interface BondReference {
  /**
   * Reference to a bond underlier.
   */
  bond?: ProductIdentifier;
  /**
   * To indicate whether the Condition Precedent Bond is applicable. The swap contract is only valid if the bond is issued and if there is any dispute over the terms of fixed stream then the bond terms would be used.
   */
  conditionPrecedentBond?: boolean;
  /**
   * To indicate whether the Discrepancy Clause is applicable.
   */
  discrepancyClause?: boolean;
}
  
/**
 *  Bond valuation model for the security leg in a securities financing transaction, closely modelled onto the BondCollateral.model in FpML.
 */
export interface BondValuationModel {
  /**
   * Accruals amount for the bond in the security leg
   */
  accrualsAmount?: Money;
  /**
   * Price and yield model for valuing a bond security leg.
   */
  bondPriceAndYieldModel?: BondPriceAndYieldModel;
  /**
   * The quantity of the underlier expressed as a nominal amount.
   */
  nominalAmount?: Money;
}
  
/**
 * A class to specify the currency election in the case of a Termination Event where there are two Affected Parties.
 */
export interface BothPartiesElection {
  /**
   * The Termination Currency associated with the party that referenced as part of this class. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * The qualification of whether the Termination Currency is specified in this document (True) or in an Eligible Support Credit Support (IM) Schedule (False)
   */
  isSpecified?: boolean;
}
  
/**
 * Identifies the market sector in which the trade has been arranged.
 */
export interface BrokerConfirmation {
  /**
   * The type of broker confirmation executed between the parties.
   */
  brokerConfirmationType?: FieldWithMeta<BrokerConfirmationTypeEnum>;
}
  
/**
 * A class for defining a time with respect to a business day calendar location. For example, 11:00:00 GBLO.
 */
export interface BusinessCenterTime {
  /**
   * A code identifying a business day calendar location. A business day calendar location is drawn from the list identified by the business day calendar location enumeration.
   */
  businessCenter?: FieldWithMeta<BusinessCenterEnum>;
  /**
   * A time specified in hh:mm:ss format where the second component must be '00', e.g. 11am would be represented as 11:00:00.
   */
  hourMinuteTime?: string;
}
  
/**
 * A class for specifying the business day calendar location used in determining whether a day is a business day or not, either by specifying this business center by reference to an enumerated list that is maintained by the FpML standard, or by reference to such specification when it exists elsewhere as part of the instance document. This class corresponds to the FpML BusinessCentersOrReference.model.
 */
export interface BusinessCenters {
  /**
   * A code identifying one or several business day calendar location(s). The set of business day calendar locations are specified by the business day calendar location enumeration which is maintained by the FpML standard.
   */
  businessCenter?: FieldWithMeta<BusinessCenterEnum>[];
  /**
   * A reference to a financial business center location specified elsewhere in the instance document.
   */
  businessCentersReference?: ReferenceWithMeta<BusinessCenters>;
  meta?: MetaFields;
}
  
/**
 * A class defining a range of contiguous business days by defining an unadjusted first date, an unadjusted last date and a business day convention and business centers for adjusting the first and last dates if they would otherwise fall on a non business day in the specified business centers. The days between the first and last date must also be good business days in the specified centers to be counted in the range.
 */
export interface BusinessDateRange extends DateRange {
  /**
   * The business center(s), specified either explicitly or by reference to those specified somewhere else in the instance document.
   */
  businessCenters?: BusinessCenters;
  /**
   * The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).
   */
  businessDayConvention?: BusinessDayConventionEnum;
  /**
   * The first date of a date range.
   */
  unadjustedFirstDate?: Date;
  /**
   * The last date of a date range.
   */
  unadjustedLastDate?: Date;
}
  
/**
 * A class defining the business day convention and financial business centers used for adjusting any relevant date if it would otherwise fall on a day that is not a business day in the specified business center.
 */
export interface BusinessDayAdjustments {
  /**
   * The business center(s), specified either explicitly or by reference to those specified somewhere else in the instance document.
   */
  businessCenters?: BusinessCenters;
  /**
   * The convention for adjusting a date if it would otherwise fall on a day that is not a business day.
   */
  businessDayConvention?: BusinessDayConventionEnum;
  meta?: MetaFields;
}
  
/**
 * A business event represents a life cycle event of a trade and consists of a series of primitive events. The combination of the state changes results in a qualifiable life cycle event. An example of a Business Event is a PartialTermination which is a defined by a quantity change primitive event.
 */
export interface BusinessEvent {
  /**
   * The date on which the event contractually takes effect, when different from the event date.
   */
  effectiveDate?: Date;
  /**
   * The date on which the event is taking place. This is the equivalent of the trade date in the case of an execution or a contract.
   */
  eventDate?: Date;
  /**
   * The set of effects associated with the lifecycle event, i.e. generated cashflows, contracts (from, say, novation events), listed products (from, say, a bond option exercise event) values and more. Those are represented through a set of rosettaKey references. This attribute is optional in order to provide implementers with the ability not to make use of this feature.
   */
  eventEffect?: EventEffect;
  /**
   * The CDM event qualifier, which corresponds to the outcome of the isEvent qualification logic which qualifies the lifecycle event as a function of its features (e.g. PartialTermination, ClearingSubmission, Novation, ...).
   */
  eventQualifier?: string;
  /**
   * This is placeholder concept for a function call into a calculation that will return an outcome. This concept needs to be further firmed out.
   */
  functionCall?: string;
  /**
   * The intent attribute is meant to be specified when the event qualification cannot be programmatically inferred from the event features. As a result it is only associated with those primitives that can give way to such ambiguity, the quantityChange being one of those. An example of such is a reduction in the trade notional, which could be interpreted as either a trade correction (unless a maximum period of time post-event is specified as part of the qualification), a partial termination or a portfolio rebalancing in the case of an equity swap. On the other hand, an event such as the exercise is not expected to have an associated intent as there should not be ambiguity.
   */
  intent?: IntentEnum;
  meta?: MetaFields;
  /**
   * The elemental component(s) that specify the lifecycle events. Each of the primitive/elemental components listed as part of the PrimitiveEvent class has distinctive features that allow to specify the lifecycle event, either by itself or in combination with some other of such components.
   */
  primitives?: PrimitiveEvent[];
  /**
   * The event workflow information, i.e. the workflow status, the associated comment and the partyCustomisedWorkflow which purpose is to provide the ability to associate custom workflow information to the CDM.
   */
  workflowEventState?: WorkflowStepState;
}
  
/**
 * A class to specify an organizational unit.
 */
export interface BusinessUnit {
  /**
   * The contact information for such business unit, when different from the contact information associated with the party.
   */
  contactInformation?: ContactInformation;
  /**
   * An identifier used to uniquely identify the organizational unit
   */
  identifier?: Identifier;
  meta?: MetaFields;
  /**
   * A name used to describe the organizational unit
   */
  name?: string;
}
  
/**
 * This class corresponds to the FpML BuyerSeller.model construct.
 */
export interface BuyerSeller {
  /**
   * A reference to the account that buys this instrument.
   */
  buyerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.
   */
  buyerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that sells this instrument.
   */
  sellerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.
   */
  sellerPartyReference?: ReferenceWithMeta<Party>;
}
  
export interface Buyr {
  acctOwnr?: AcctOwnr;
}
  
/**
 * A class defining the ISDA calculation agent responsible for performing duties as defined in the applicable product definitions.
 */
export interface CalculationAgent {
  /**
   * The city in which the office through which ISDA Calculation Agent is acting for purposes of the transaction is located The short-form confirm for a trade that is executed under a Sovereign or Asia Pacific Master Confirmation Agreement ( MCA ), does not need to specify the Calculation Agent. However, the confirm does need to specify the Calculation Agent City. This is due to the fact that the MCA sets the value for Calculation Agent but does not set the value for Calculation Agent City.
   */
  calculationAgentBusinessCenter?: FieldWithMeta<BusinessCenterEnum>;
  /**
   * The ISDA calculation agent responsible for performing duties as defined in the applicable product definitions. For example, the Calculation Agent may be defined as being the Non-exercising Party.
   */
  calculationAgentParty?: CalculationAgentPartyEnum;
  /**
   * In FpML, a pointer style reference to a party identifier defined elsewhere in the document. The party referenced is the ISDA Calculation Agent for the trade. If more than one party is referenced then the parties are assumed to be co-calculation agents, i.e. they have joint responsibility.
   */
  calculationAgentPartyReference?: ReferenceWithMeta<Party>[];
}
  
/**
 * A class to select Calculation Agent for purposes of IM
 */
export interface CalculationAgentIm {
  /**
   * The Calculation Agent (IM) terms when specified
   */
  calculationAgentTerms?: string;
  /**
   * The party which is specified as Calculation Agent for IM.
   */
  party?: ReferenceWithMeta<String>[];
}
  
/**
 * This class corresponds to the FpML CalculationAgent.model.
 */
export interface CalculationAgentModel {
  /**
   * The ISDA calculation agent responsible for performing duties as defined in the applicable product definitions.
   */
  calculationAgent?: CalculationAgent;
  /**
   * The city in which the office through which ISDA Calculation Agent is acting for purposes of the transaction is located. The short-form confirm for a trade that is executed under a Sovereign or Asia-Pacific Master Confirmation Agreement (MCA), does not need to specify the Calculation Agent. However, the confirm does need to specify the Calculation Agent city. This is due to the fact that the MCA sets the value for Calculation Agent but does not set the value for Calculation Agent city.
   */
  calculationAgentBusinessCenter?: BusinessCenterEnum;
}
  
export interface CalculationAmount extends Money {
  /**
   * A schedule of step date and value pairs. On each step date the associated step value becomes effective. A list of steps may be ordered in the document by ascending step date. FpML specifies that an FpML document containing an unordered list of steps is still regarded as a conformant document.
   */
  step?: Step[];
  /**
   * The monetary quantity in currency units.
   */
  amount?: number;
  /**
   * The currency in which the associated amount is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  meta?: MetaFields;
}
  
/**
 * A class to specify the SIMM Calculation Currency elections by each party to the agreement.
 */
export interface CalculationCurrencyElection {
  /**
   * The parties' SIMM Calculation Currency election.
   */
  partyElection?: SimmCalculationCurrency[];
}
  
/**
 * A class to specify additional Calculation Date terms for the purposes of Initial Margin
 */
export interface CalculationDateIm {
  /**
   * The Additional Calculation Date terms for the purposes of Initial Margin
   */
  calculationDateImTerms?: string;
  /**
   * Additional Calculation Date terms are applicable when True and not applicable when False
   */
  isApplicable?: boolean;
}
  
/**
 * A class to specify the Calculation Date Location election for the respective parties to the legal agreement. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
 */
export interface CalculationDateLocation {
  /**
   * The parties' calculation date location election.
   */
  partyElection?: CalculationDateLocationElection[];
}
  
/**
 * A class to specify each of the party elections with respect to the Calculation Date Location. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
 */
export interface CalculationDateLocationElection {
  /**
   * The Calculation Date Location when specified as a business center which corresponds to the FpML list of business centers or can be mapped to it.
   */
  businessCenter?: FieldWithMeta<BusinessCenterEnum>;
  /**
   * The Calculation Date Location when specified a location which doesn't correspond to the FpML list of business centers or cannot be mapped to it.
   */
  customLocation?: string;
  /**
   * The elective party.
   */
  party?: string;
}
  
/**
 * A data defining:  the parameters used in the calculation of a fixed or floating rate calculation period amount. This data forms:  part of cashflows representation of a swap stream.
 */
export interface CalculationPeriod extends CalculationPeriodBase {
  /**
   * The number of days from the adjusted effective / start date to the adjusted termination / end date calculated in accordance with the applicable day count fraction.
   */
  calculationPeriodNumberOfDays?: number;
  /**
   * The year fraction value of the calculation period, result of applying the ISDA rules for day count fraction defined in the ISDA Annex.
   */
  dayCountYearFraction?: number;
  /**
   * The calculation period fixed rate. A per annum rate, expressed as a decimal. A fixed rate of 5% would be represented as 0.05.
   */
  fixedRate?: number;
  /**
   * The floating rate reset information for the calculation period.
   */
  floatingRateDefinition?: FloatingRateDefinition;
  /**
   * The amount representing the forecast of the accrued value of the calculation period. An intermediate value used to generate the forecastPaymentAmount in the PaymentCalculationPeriod.
   */
  forecastAmount?: Money;
  /**
   * A value representing the forecast rate used to calculate the forecast future value of the accrual period. This is a calculated rate determined based on averaging the rates in the rateObservation elements, and incorporates all of the rate treatment and averaging rules. A value of 1% should be represented as 0.01.
   */
  forecastRate?: number;
  /**
   * The amount that a cashflow will accrue interest on. This is the calculated amount of the FX linked - i.e. the other currency notional amount multiplied by the appropriate FX spot rate.
   */
  fxLinkedNotionalAmount?: FxLinkedNotionalAmount;
  /**
   * The amount that a cashflow will accrue interest on.
   */
  notionalAmount?: number;
  /**
   * The calculation end date, unadjusted.
   */
  unadjustedEndDate?: Date;
  /**
   * The calculation start date, unadjusted.
   */
  unadjustedStartDate?: Date;
  /**
   * The calculation period end date, adjusted according to any relevant business day convention.
   */
  adjustedEndDate?: Date;
  /**
   * The calculation period start date, adjusted according to any relevant business day convention.
   */
  adjustedStartDate?: Date;
  meta?: MetaFields;
}
  
/**
 * The calculation period adjusted start and end dates, which are the baseline arguments needed to compute an interest accrual calculation.
 */
export interface CalculationPeriodBase {
  /**
   * The calculation period end date, adjusted according to any relevant business day convention.
   */
  adjustedEndDate?: Date;
  /**
   * The calculation period start date, adjusted according to any relevant business day convention.
   */
  adjustedStartDate?: Date;
  meta?: MetaFields;
}
  
export interface CalculationPeriodData {
  daysInLeapYearPeriod?: number;
  daysInPeriod?: number;
  endDate?: Date;
  isFirstPeriod?: boolean;
  isLastPeriod?: boolean;
  startDate?: Date;
}
  
/**
 * A data for:  defining the parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods. A calculation period schedule consists of an optional initial stub calculation period, one or more regular calculation periods and an optional final stub calculation period. In the absence of any initial or final stub calculation periods, the regular part of the calculation period schedule is assumed to be between the effective date and the termination date. No implicit stubs are allowed, i.e. stubs must be explicitly specified using an appropriate combination of firstPeriodStartDate, firstRegularPeriodStartDate and lastRegularPeriodEndDate.
 */
export interface CalculationPeriodDates {
  /**
   * The specification of the business day convention and financial business centers used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.
   */
  calculationPeriodDatesAdjustments?: BusinessDayAdjustments;
  /**
   * The frequency at which calculation period end dates occur with the regular part of the calculation period schedule and their roll date convention.
   */
  calculationPeriodFrequency?: CalculationPeriodFrequency;
  /**
   * The first day of the terms of the trade. This day may be subject to adjustment in accordance with a business day convention.
   */
  effectiveDate?: AdjustableOrRelativeDate;
  /**
   * The end date of the initial compounding period when compounding is applicable. It must only be specified when the compoundingMethod element is present and not equal to a value of None. This date may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.
   */
  firstCompoundingPeriodEndDate?: Date;
  /**
   * The start date of the calculation period. FpML specifies that for interest rate swaps this date must only be specified if it is not equal to the effective date. It is always specified in the case of equity swaps and credit default swaps with periodic payments. This date may be subject to adjustment in accordance with a business day convention.
   */
  firstPeriodStartDate?: AdjustableDate;
  /**
   * The start date of the regular part of the calculation period schedule. It must only be specified if there is an initial stub calculation period. This day may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.
   */
  firstRegularPeriodStartDate?: Date;
  /**
   * The end date of the regular part of the calculation period schedule. It must only be specified if there is a final stub calculation period. This day may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.
   */
  lastRegularPeriodEndDate?: Date;
  meta?: MetaFields;
  /**
   * Method to allocate any irregular period remaining after regular periods have been allocated between the effective and termination date.
   */
  stubPeriodType?: StubPeriodTypeEnum;
  /**
   * The last day of the terms of the trade. This date may be subject to adjustments in accordance with the business day convention. It can also be specified in relation to another scheduled date (e.g. the last payment date).
   */
  terminationDate?: AdjustableOrRelativeDate;
}
  
/**
 * A class to specify the frequency at which calculation period end dates occur within the regular part of the calculation period schedule and their roll date convention.
 */
export interface CalculationPeriodFrequency extends Frequency {
  /**
   * The roll convention specifies the period term as part of a periodic schedule, i.e. the calculation period end date within the regular part of the calculation period. The value could be a rule, e.g. IMM Settlement Dates, which is the 3rd Wednesday of the month, or it could be a specific day of the month, such as the first day of the applicable month. It is used in conjunction with a frequency and the regular period start date of a calculation period.
   */
  rollConvention?: RollConventionEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month, year or term of the stream.
   */
  period?: PeriodExtendedEnum;
  /**
   * A time period multiplier, e.g. 1, 2, or 3. If the period value is T (Term) then period multiplier must contain the value 1.
   */
  periodMultiplier?: number;
}
  
/**
 * A class to specify additional Calculation Time terms for the purposes of Initial Margin
 */
export interface CalculationTimeIm {
  /**
   * If set to True, the Calculation Time for Initial Margin is the time as of which the Calculation Agent (IM) computes its end of day valuations of derivatives transactions
   */
  asCalculationAgentIm?: boolean;
  /**
   * Additional Terms applicable to Calculation Time for Initial Margin
   */
  calculationTimeImTerms?: string;
}
  
/**
 * A type for defining a calendar spread feature.
 */
export interface CalendarSpread {
  expirationDateTwo?: AdjustableOrRelativeDate;
}
  
/**
 * A data defining:  the right of a party to cancel a swap transaction on the specified exercise dates. The provision is for 'walk-away' cancellation (i.e. the fair value of the swap is not paid). A fee payable on exercise can be specified. As a difference from the FpML construct, the canonical model extends the BuyerSeller class.
 */
export interface CancelableProvision extends BuyerSeller {
  /**
   * American exercise. FpML implementations consists in an exercise substitution group.
   */
  americanExercise?: AmericanExercise;
  /**
   * Bermuda exercise. FpML implementations consists in an exercise substitution group.
   */
  bermudaExercise?: BermudaExercise;
  callingParty?: CallingPartyEnum;
  /**
   * The adjusted dates associated with a cancelable provision. These dates have been adjusted for any applicable business day convention.
   */
  cancelableProvisionAdjustedDates?: CancelableProvisionAdjustedDates;
  /**
   * European exercise. FpML implementations consists in an exercise substitution group.
   */
  europeanExercise?: EuropeanExercise;
  /**
   * Definition of the party to whom notice of exercise should be given.
   */
  exerciseNotice?: ExerciseNotice;
  /**
   * Business date convention adjustment to final payment period per leg (swapStream) upon exercise event. The adjustments can be made in-line with leg level BDC's or they can be specified separately.
   */
  finalCalculationPeriodDateAdjustment?: FinalCalculationPeriodDateAdjustment[];
  /**
   * A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.
   */
  followUpConfirmation?: boolean;
  /**
   * An initial fee for the cancelable option.
   */
  initialFee?: SimplePayment;
  /**
   * A reference to the account that buys this instrument.
   */
  buyerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.
   */
  buyerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that sells this instrument.
   */
  sellerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.
   */
  sellerPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A data to:  define the adjusted dates for a cancelable provision on a swap transaction.
 */
export interface CancelableProvisionAdjustedDates {
  /**
   * The adjusted dates for an individual cancellation date.
   */
  cancellationEvent?: CancellationEvent[];
}
  
/**
 * The adjusted dates for a specific cancellation date, including the adjusted exercise date and adjusted termination date.
 */
export interface CancellationEvent {
  /**
   * The early termination date that is applicable if an early termination provision is exercised. This date should already be adjusted for any applicable business day convention.
   */
  adjustedEarlyTerminationDate?: Date;
  /**
   * The date on which option exercise takes place. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExerciseDate?: Date;
  meta?: MetaFields;
}
  
/**
 * The cash exercise specifies the cashflow using the cashflow payout and a given quantity.
 */
export interface CashExercise {
  /**
   * Cashflow payout specification, excluding the quantity.
   */
  cashflow?: Cashflow;
  /**
   * Quantity of the cashflow payout.
   */
  quantity?: QuantityNotation;
}
  
/**
 * Describes a price component as a cash amount, which can either represent cash proceeds for a security purchase or a cashflow that is embedded as part of a contractual product: for instance an upfront fee.
 */
export interface CashPrice {
  /**
   * Specifies the accrued interest that are part of the dirty price in the case of a fixed income security or a convertible bond. Expressed in percentage of the notional.
   */
  accruedInterest?: number;
  /**
   * Specifies the price as a cashflow amount embedded as part of a a contractual product.
   */
  cashflowAmount?: Money;
  /**
   * Specifies the clean price of the underlier (e.g. excluding accrued interest), net of commissions.
   */
  cleanNetPrice?: ActualPrice;
  /**
   * Specifies the price of the underlier, before commissions.
   */
  grossPrice?: ActualPrice;
  /**
   * Specifies the dirty price of the underlier (e.g. including accrued interest), net of commissions.
   */
  netPrice?: ActualPrice;
}
  
/**
 * A type defining the parameters necessary for each of the ISDA cash price methods for cash settlement.
 */
export interface CashPriceMethod {
  /**
   * The currency in which the cash settlement amount will be calculated and settled. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  cashSettlementCurrency?: FieldWithMeta<String>;
  /**
   * A container for a set of reference institutions. These reference institutions may be called upon to provide rate quotations as part of the method to determine the applicable cash settlement amount. If institutions are not specified, it is assumed that reference institutions will be agreed between the parties on the exercise date, or in the case of swap transaction to which mandatory early termination is applicable, the cash settlement valuation date.
   */
  cashSettlementReferenceBanks?: CashSettlementReferenceBanks;
  /**
   * Which rate quote is to be observed, either Bid, Mid, Offer or Exercising Party Pays. The meaning of Exercising Party Pays is defined in the 2000 ISDA Definitions, Section 17.2. Certain Definitions Relating to Cash Settlement, paragraph (j).
   */
  quotationRateType?: QuotationRateTypeEnum;
}
  
/**
 * A data defining:  the cash settlement payment date(s) as either a set of explicit dates, together with applicable adjustments, or as a date relative to some other (anchor) date, or as any date in a range of contiguous business days.
 */
export interface CashSettlementPaymentDate {
  /**
   * A series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.
   */
  adjustableDates?: AdjustableDates;
  /**
   * A range of contiguous business days.
   */
  businessDateRange?: BusinessDateRange;
  meta?: MetaFields;
  /**
   * A date specified as some offset to another date (the anchor date).
   */
  relativeDate?: RelativeDateOffset;
}
  
/**
 * A class defining the list of reference institutions polled for relevant rates or prices when determining the cash settlement amount for a product where cash settlement is applicable.
 */
export interface CashSettlementReferenceBanks {
  /**
   * An institution (party) identified by means of a coding scheme and an optional name.
   */
  referenceBank?: ReferenceBank[];
}
  
/**
 * In FpML, PhysicalSettlementTerms and CashSettlementTerms extend SettlementTerms. In the CDM, this extension paradigm has not been used because SettlementTerms class has been used for purposes related to securities transactions, while it is not used as such in the FpML standard (i.e. only as an abstract construct.
 */
export interface CashSettlementTerms extends SettlementBase {
  /**
   * Indicates whether accrued interest is included (true) or not (false). For cash settlement this specifies whether quotations should be obtained inclusive or not of accrued interest. For physical settlement this specifies whether the buyer should deliver the obligation with an outstanding principal balance that includes or excludes accrued interest. ISDA 2003 Term: Include/Exclude Accrued Interest.
   */
  accruedInterest?: boolean;
  /**
   * The amount paid by the seller to the buyer for cash settlement on the cash settlement date. If not otherwise specified, would typically be calculated as 100 (or the Reference Price) minus the price of the Reference Obligation (all expressed as a percentage) times Floating Rate Payer Calculation Amount. ISDA 2003 Term: Cash Settlement Amount.
   */
  cashSettlementAmount?: Money;
  /**
   * The number of business days used in the determination of the cash settlement payment date. If a cash settlement amount is specified, the cash settlement payment date will be this number of business days following the calculation of the final price. If a cash settlement amount is not specified, the cash settlement payment date will be this number of business days after all conditions to settlement are satisfied. ISDA 2003 Term: Cash Settlement Date.
   */
  cashSettlementBusinessDays?: number;
  /**
   * A dealer from whom quotations are obtained by the calculation agent on the reference obligation for purposes of cash settlement. ISDA 2003 Term: Dealer.
   */
  dealer?: string;
  /**
   * Used for Recovery Lock, to indicate whether fixed Settlement is Applicable or Not Applicable. If Buyer fails to deliver an effective Notice of Physical Settlement on or before the Buyer NOPS Cut-off Date, and if Seller fails to deliver an effective Seller NOPS on or before the Seller NOPS Cut-off Date, then either: (a) if Fixed Settlement is specified in the related Confirmation as not applicable, then the Seller NOPS Cut-off Date shall be the Termination Date; or (b) if Fixed Settlement is specified in the related Confirmation as applicable, then: (i) if the Fixed Settlement Amount is a positive number, Seller shall, subject to Section 3.1 (except for the requirement of satisfaction of the Notice of Physical Settlement Condition to Settlement), pay the Fixed Settlement Amount to Buyer on the Fixed Settlement Payment Date; and (ii) if the Fixed Settlement Amount is a negative number, Buyer shall, subject to Section 3.1 (except for the requirement of satisfaction of the Notice of Physical Settlement Condition to Settlement), pay the absolute value of the Fixed Settlement Amount to Seller on the Fixed Settlement Payment Date.
   */
  fixedSettlement?: boolean;
  /**
   * In the determination of a cash settlement amount, if weighted average quotations are to be obtained, the minimum quotation amount specifies a minimum intended threshold amount of outstanding principal balance of the reference obligation for which the quote should be obtained. If not specified, the ISDA definitions provide for a fallback amount of the lower of either USD 1,000,000 (or its equivalent in the relevant obligation currency) or the quotation amount. ISDA 2003 Term: Minimum Quotation Amount.
   */
  minimumQuotationAmout?: Money;
  /**
   * In the determination of a cash settlement amount, if weighted average quotations are to be obtained, the quotation amount specifies an upper limit to the outstanding principal balance of the reference obligation for which the quote should be obtained. If not specified, the ISDA definitions provide for a fallback amount equal to the floating rate payer calculation amount. ISDA 2003 Term: Quotation Amount.
   */
  quotationAmount?: Money;
  /**
   * The type of price quotations to be requested from dealers when determining the market value of the reference obligation for purposes of cash settlement. For example, Bid, Offer or Mid-market. ISDA 2003 Term: Quotation Method.
   */
  quotationMethod?: QuotationRateTypeEnum;
  /**
   * Used for fixed recovery, specifies the recovery level, determined at contract inception, to be applied on a default. Used to calculate the amount paid by the seller to the buyer for cash settlement on the cash settlement date. Amount calculation is (1 minus the Recovery Factor) multiplied by the Floating Rate Payer Calculation Amount. The currency will be derived from the Floating Rate Payer Calculation Amount.
   */
  recoveryFactor?: number;
  /**
   * The number of business days after conditions to settlement have been satisfied when the calculation agent obtains a price quotation on the Reference Obligation for purposes of cash settlement. There may be one or more valuation dates. This is typically specified if the cash settlement amount is not a fixed amount. ISDA 2003 Term: Valuation Date.
   */
  valuationDate?: ValuationDate;
  /**
   * The ISDA defined methodology for determining the final price of the reference obligation for purposes of cash settlement. (ISDA 2003 Term: Valuation Method). For example, Market, Highest etc.
   */
  valuationMethod?: ValuationMethodEnum;
  /**
   * The time of day in the specified business center when the calculation agent seeks quotations for an amount of the reference obligation for purposes of cash settlement. ISDA 2003 Term: Valuation Time.
   */
  valuationTime?: BusinessCenterTime;
  meta?: MetaFields;
  /**
   * The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
export interface CashTransferBreakdown extends TransferBreakdown {
  /**
   * The currency amount of the payment.
   */
  amount?: Money;
  /**
   * The qualification of the type of cashflow, when not inferred from a derived through lineage e.g. brokerage fee, premium, upfront fee etc.
   */
  cashflowType?: CashflowTypeEnum;
  /**
   * The payer and receiver party information.
   */
  payerReceiver?: PayerReceiver;
  /**
   * The lineage into the transfer components that might be associated with each of the transfer components.
   */
  lineage?: Lineage[];
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
export interface CashTransferComponent extends TransferBase {
  /**
   * The currency amount.
   */
  amount?: Money;
  /**
   * The cash transfer breakdown, when the transfer corresponds to a net amount across several components which breakdown is deemed relevant (e.g. the net cash transfer related to several contracts, or to the net proceeds across several payout components).
   */
  breakdown?: CashTransferBreakdown[];
  /**
   * The qualification of the type of cashflow, when not inferred from a derived through lineage e.g. brokerage fee, premium, upfront fee etc.
   */
  cashflowType?: CashflowTypeEnum;
  /**
   * The payer and receiver party information.
   */
  payerReceiver?: PayerReceiver;
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
/**
 * Class to specify a cashflow, i.e. the outcome of either of computation (e.g. interest accrual) or an assessment of some sort (e.g. a fee). The cashflow can then be turned into a cash transfer, artefact to be used as the input to a payment system or the outcome of it. The associated rosettaKey denotes the ability to associate a hash value to the Cashflow instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface Cashflow extends PayoutBase {
  /**
   * SCHEDULED FOR DEPRECATION, QUANTITY HANDLED IN PAYOUTBASE. The currency amount of the payment.
   */
  cashflowAmount?: Money;
  /**
   * This is a conceptual placeholder for providing the breakdown into the cashflow calculation components, leveraging the fact that the CDM provides calculation components, starting with the FixedAmount and the FloatingAmount. Further evaluation of expected usage needs to take place to confirm and prioritize such implementation.
   */
  cashflowCalculation?: string;
  cashflowDate?: AdjustableOrAdjustedOrRelativeDate;
  /**
   * The qualification of the type of cashflow, e.g. brokerage fee, premium, upfront fee etc. Particularly relevant when it cannot be inferred directly through lineage.
   */
  cashflowType?: CashflowTypeEnum;
  /**
   * The value representing the discount factor used to calculate the present value of the cashflow.
   */
  discountFactor?: number;
  meta?: MetaFields;
  payerReceiver?: PayerReceiver;
  /**
   * Applicable to CDS on MBS to specify whether payment delays are applicable to the fixed Amount. RMBS typically have a payment delay of 5 days between the coupon date of the reference obligation and the payment date of the synthetic swap. CMBS do not, on the other hand, with both payment dates being on the 25th of each month.
   */
  paymentDelay?: boolean;
  /**
   * FpML specifies the FpML PaymentDiscounting.model group for representing the discounting elements that can be associated with a payment.
   */
  paymentDiscounting?: PaymentDiscounting;
  /**
   * FpML specifies the Premium.model group for representing the option premium when expressed in a way other than an amount.
   */
  premiumExpression?: PremiumExpression;
  /**
   * The amount representing the present value of the forecast payment.
   */
  presentValueAmount?: Money;
  /**
   * Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).
   */
  payoutQuantity?: ResolvablePayoutQuantity;
}
  
/**
 * A data defining:  the cashflow representation of a swap trade.
 */
export interface CashflowRepresentation {
  /**
   * A true/false flag to indicate whether the cashflows match the parametric definition of the stream, i.e. whether the cashflows could be regenerated from the parameters without loss of information.
   */
  cashflowsMatchParameters?: boolean;
  /**
   * The adjusted payment date and associated calculation period parameters required to calculate the actual or projected payment amount. A list of payment calculation period elements may be ordered in the document by ascending adjusted payment date. An FpML document containing an unordered list of payment calculation periods is still regarded as a conformant document.
   */
  paymentCalculationPeriod?: PaymentCalculationPeriod[];
  /**
   * The initial, intermediate and final principal exchange amounts. Typically required on cross currency interest rate swaps where actual exchanges of principal occur. A list of principal exchange elements may be ordered in the document by ascending adjusted principal exchange date. An FpML document containing an unordered principal exchange list is still regarded as a conformant document.
   */
  principalExchange?: PrincipalExchange[];
}
  
/**
 * A class to specify the chargor(s) collateral posting obligations as specified under the terms of the English Law ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii).
 */
export interface ChargorPostingObligations {
  chargor?: string;
  /**
   * The chargor party(ies) to which the posting obligations apply to, which can be either one of the parties to the legal agreement, or both of those.
   */
  partyElection?: PostingObligationsElection[];
}
  
/**
 * A class to specify party specific Secured Party Rights Event language.
 */
export interface ChargorRightsEventElection {
  /**
   * The elective party.
   */
  party?: string;
  rightsEvent?: boolean;
}
  
/**
 *  Class specifying the bond price as either clean or dirty in a bond valuation model.
 */
export interface CleanOrDirtyPrice {
  /**
   * The clean price and accruals presented separately.
   */
  cleanPrice?: CleanPrice;
  /**
   * The dirty price presented as a single number.
   */
  dirtyPrice?: number;
}
  
/**
 *  Class to specify the clean price of a bond in a bond valuation model, with accruals presented separately, and modelled onto the cleanPrice model in BonPriceAndYield.model in FpML.
 */
export interface CleanPrice {
  /**
   * The accruals as a number.
   */
  accruals?: number;
  /**
   * The clean price as a number.
   */
  cleanPrice?: number;
  /**
   * Placeholder for a calculation of dirtyPrice based on cleanPrice and accruals.
   */
  dirtyPrice?: string;
}
  
/**
 * All information required to perform the clear life cycle event
 */
export interface ClearingInstruction {
  alphaContract?: ReferenceWithMeta<Contract>;
  clearingParty?: Party;
}
  
/**
 *  A class to qualify the closed state of an execution or a contract through the combination or a state (e.g. terminated, novated) and a set of dates: activity date, effective date and, when relevant, last payment date.
 */
export interface ClosedState {
  /**
   * The activity date on which the closing state took place, i.e. either the event date of the closing event (e.g. option exercise, contract early termination) or the contractual termination date.
   */
  activityDate?: Date;
  /**
   * The date on which the closing event contractually takes effect, when different from the activity date. When an explicit event effective date attribute is associated with the closing event, it will be that date. In the case of a cancellation event, it will be the date on which the cancelled event took place.
   */
  effectiveDate?: Date;
  /**
   * The date associated with the last payment in relation to the artefact (e.g. contract) to which this closed state applies. As an example, in the case of an early termination event, it would be the settlement date of the associated fee, if applicable.
   */
  lastPaymentDate?: Date;
  /**
   * The qualification of what gave way to the contract or execution closure, e.g. allocation, termination, ...
   */
  state?: ClosedStateEnum;
}
  
/**
 * A type for defining the obligations of the counterparty subject to credit support requirements.
 */
export interface Collateral {
  /**
   * Independent Amount is an amount that usually less creditworthy counterparties are asked to provide. It can either be a fixed amount or a percentage of the Transaction's value. The Independent Amount can be: (i) transferred before any trading between the parties occurs (as a deposit at a third party's account or with the counterparty) or (ii) callable after trading has occurred (typically because a downgrade has occurred). In situation (i), the Independent Amount is not included in the calculation of Exposure, but in situation (ii), it is included in the calculation of Exposure. Thus, for situation (ii), the Independent Amount may be transferred along with any collateral call. Independent Amount is a defined term in the ISDA Credit Support Annex. ('with respect to a party, the amount specified as such for that party in Paragraph 13; if no amount is specified, zero').
   */
  independentAmount?: IndependentAmount;
}
  
/**
 * A class to specify Collateral Access Breach language
 */
export interface CollateralAccessBreach {
  /**
   * The business date following the related Collateral Access Breach when the additional terms end 
   */
  cabEndDate?: number;
  /**
   * Determination of whether the Collateral Access Breach end date is a number of days (True) or specified (False)
   */
  cabEndDateElection?: boolean;
  /**
   * Specific terms for when Collateral Access Breach terms end
   */
  cabEndDateTerms?: string;
  /**
   * Collateral Access Breach terms are applicable when True and not applicable when False
   */
  isApplicable?: boolean;
}
  
/**
 * COLLATERAL ISSUE INFORMATION.
 */
export interface CollateralInstrumentInformation {
  /**
   * Definition of collateral type.
   */
  collateralProductType?: CollateralProductType;
  /**
   * Is asset issued by posting entity or member of corporate family - note: not permitted under specific regulations.
   */
  counterpartyOwnIssue?: boolean;
  instrumentIdentifier?: ProductIdentifier[];
  /**
   * The issuer entity country of origin.
   */
  issuerCountryOfOrigin?: FieldWithMeta<String>;
  /**
   * Origin of entity issuing the asset.
   */
  issuerType?: CollateralIssuerTypeClassification;
}
  
export interface CollateralIssuerTypeClassification {
  issuerType?: IssuerTypeClassificationEnum;
  quasiGovernmentType?: QuasiGovernmentIssuerTypeClassificationEnum;
  regionalGovernmentType?: RegionalGovernmentIssuerTypeClassificationEnum;
  supraNationalType?: SupraNationalIssuerTypeClassificationEnum;
}
  
/**
 * A class to specify the Collateral Management Agreement election by the respective parties to a Japanese Law ISDA CSA. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(i): Collateral Management Agreement.
 */
export interface CollateralManagementAgreement {
  /**
   * The parties' Collateral Management Agreement election.
   */
  partyElection?: CollateralManagementAgreementElection[];
}
  
/**
 * A class to specify the Collateral Management Agreement election by each party as the Obligee. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b(i): Collateral Management Agreement.
 */
export interface CollateralManagementAgreementElection {
  /**
   * The designated Collateral Management Agreement with respect to the elective party as the Obligee.
   */
  collateralManagementAgreement?: string;
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify the Collateral Management Arrangement elections in accordance with the ISDA Japanese Law CSA. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m): Collateral Management Arrangement.
 */
export interface CollateralManagementArrangement {
  /**
   * The Collateral Management Event applicability and end-date terms. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m)(ii): Collateral Manager Event.
   */
  collateralManagerEvent?: CustodianEvent;
  /**
   * Collateral Management Agreement language is specified when True, not specified when False.
   */
  hasCollateralManagementLanguage?: boolean;
  /**
   * Unless specified as True, the Collateral Management Agreement is not a Credit Support Document under the agreement with respect to a party. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 6 (e): The Collateral Management Agreement as a Credit Support Document.
   */
  isCreditSupportDocument?: boolean;
  /**
   * The party-specific election with respect to the Custodian and Segregated Account details and the Custodian Risk provision.
   */
  partyElection?: CollateralManagementArrangementElection;
}
  
/**
 * A class to specify the election to specify the Collateral Management Arrangement.
 */
export interface CollateralManagementArrangementElection {
  /**
   * The qualification of the Collateral Manager Risk. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m)(i): Collateral Manager Risk.
   */
  collateralManagerRisk?: CustodianRisk;
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify the Collateral Manager election by the respective parties to a Japanese Law ISDA CSA. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii): Collateral Manager.
 */
export interface CollateralManager {
  /**
   * The parties' Collateral Manager election.
   */
  partyElection?: CollateralManagerElection;
}
  
/**
 * A class to specify the Collateral Manager election by each party as the Obligee. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b(ii): Collateral Manager.
 */
export interface CollateralManagerElection {
  /**
   * The designated Collateral Manager with respect to the elective party as the Obligee.
   */
  collateralManager?: string;
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
}
  
export interface CollateralProductType {
  bondType?: BondTypeEnum;
  equityType?: EquityTypeEnum;
  productType?: CollateralProductTypeEnum;
  securityType?: SecurityTypeEnum;
}
  
/**
 * A class to specify the rounding methodology applicable to the Delivery Amount and the Return Amount in terms of nearest integral multiple of Base Currency units. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vi)(C): Rounding. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(vi)(C): Rounding. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vi)(C): Rounding.
 */
export interface CollateralRounding {
  /**
   * The rounding methodology applicable to the Delivery Amount in terms of nearest integral multiple of Base Currency units.
   */
  deliveryAmount?: number;
  /**
   * The rounding methodology applicable to the Return Amount in terms of nearest integral multiple of Base Currency units.
   */
  returnAmount?: number;
}
  
/**
 * COLLATERAL HAIRCUT.
 */
export interface CollateralValuationPercentage {
  /**
   * If pledgor eligible collateral is not denominated in the termination currency of the secured parties agreement an FX haircut is applied, expressed as a valuation comprised between 0.0 and 100.0
   */
  fxHaircutPercentage?: number;
  /**
   * Percentage value of asset to be used as collateral once assets discounted haircut take into consideration, expressed as a valuation comprised between 0.0 and 100.0.
   */
  valuationPercentage?: number;
}
  
/**
 * A class to specify a commodity asset.
 */
export interface Commodity {
}
  
export interface CommoditySet {
  commodity?: Commodity;
  quantity?: number;
  timeUnit?: TimeUnitEnum;
  /**
   * The unit of measure, applicable to physical assets.
   */
  unit?: UnitEnum;
}
  
export interface CommodityTransferBreakdown extends TransferBreakdown {
  commodity?: Commodity;
  quantity?: number;
  timeUnit?: TimeUnitEnum;
  /**
   * The transferee and transferor party information.
   */
  transferorTransferee?: TransferorTransferee;
  /**
   * The unit of measure, applicable to physical assets.
   */
  unit?: UnitEnum;
  /**
   * The lineage into the transfer components that might be associated with each of the transfer components.
   */
  lineage?: Lineage[];
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
export interface CommodityTransferComponent extends TransferBase {
  /**
   * The type of transfer, e.g. Free of Payment.
   */
  assetTransferType?: AssetTransferTypeEnum;
  /**
   * The security transfer breakdown, when the transfer corresponds to a net transfer across several components which breakdown is deemed relevant (e.g. the net security transfer related to several contracts).
   */
  breakdown?: CommodityTransferBreakdown[];
  commodity?: Commodity;
  quantity?: number;
  timeUnit?: TimeUnitEnum;
  /**
   * The transferee and transferor party information.
   */
  transferorTransferee?: TransferorTransferee;
  /**
   * The unit of measure, applicable to physical assets.
   */
  unit?: UnitEnum;
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
/**
 * Specifies the conditions to be applied for converting into a reference currency when the actual currency rate is not determined upfront.
 */
export interface Composite {
  /**
   * Specifies the method according to which an amount or a date is determined.
   */
  determinationMethod?: DeterminationMethodEnum;
  /**
   * Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.
   */
  fxSpotRateSource?: FxSpotRateSource;
  /**
   * A date specified as some offset to another date (the anchor date).
   */
  relativeDate?: RelativeDateOffset;
}
  
/**
 * A class to specify the outcome of a computed amount, for testing purposes.
 */
export interface ComputedAmount {
  amount?: number;
  callFunction?: string;
  /**
   * The currency in which the computed amount is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
}
  
/**
 * A class to specify each party's election with respect to the Termination Events that will be deemed an Access Condition (Initial Margin CSA) or a Specified Condition (Variation Margin CSA). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(ii). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
 */
export interface Conditions {
  /**
   * The parties' Access Condition (Initial Margin CSA) or a Specified Condition (Variation Margin CSA) election.
   */
  partyElection?: ConditionsElections[];
}
  
/**
 * A class to specify the Termination Events that will be deemed an Access Condition (Initial Margin CSA) or a Specified Condition (Variation Margin CSA). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(ii). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
 */
export interface ConditionsElections {
  additionalLanguage?: string;
  additionalTerminationEvents?: boolean;
  creditEventUponMerger?: boolean;
  forceMajeure?: boolean;
  illegality?: boolean;
  /**
   * The elective party.
   */
  party?: string;
  taxEvent?: boolean;
  taxEventUponMerger?: boolean;
}
  
/**
 * A class to specify the two set of elections that may overwrite the default Condition Precedent provision as specified in Paragraph 4, (a) of the ISDA 2016 Credit Support Annex for Initial Margin and the ISDA 2016 Credit Support Annex for Variation Margin. | ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
 */
export interface ConditionsPrecedent {
  /**
   * The parties' election with respect to the Termination Events that will be deemed an Access Condition (Initial Margin CSA) or a Specified Condition (Variation Margin CSA). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(ii). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditions?: Conditions;
  /**
   * The custom provisions that might be specified by the parties to the agreement for the purpose of overwriting the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin and the ISDA 2016 Credit Support Annex for Variation Margin, Paragraph 4, (a). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e)(i). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f)(i). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, : Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  customProvision?: string;
  /**
   * The enumeration of the Conditions Precedent election
   */
  election?: ConditionsPrecedentEnum;
}
  
/**
 * A class to specify a trade confirmation.
 */
export interface Confirmation {
  /**
   * The identifier(s) associated with the trade and resulting confirmation.
   */
  identifier?: Identifier[];
  /**
   * The lineage attribute provides a linkage to previous lifecycle events and associated data.
   */
  lineage?: Lineage;
  /**
   * The parties associated with the trade.
   */
  party?: Party[];
  /**
   * The role(s) that party(ies) may have in relation to the trade
   */
  partyRole?: PartyRole[];
  status?: ConfirmationStatusEnum;
}
  
/**
 * A class describing the weight of each of the underlier constituent within the basket, either in absolute or relative terms.
 */
export interface ConstituentWeight {
  /**
   * The relative weight of each respective basket constituent, expressed in percentage. A basket percentage of 5% would be represented as 0.05.
   */
  basketPercentage?: number;
  /**
   * The number of units (index or securities) that constitute the underlier of the swap. In the case of a basket swap, this element is used to reference both the number of basket units, and the number of each asset components of the basket when these are expressed in absolute terms.
   */
  openUnits?: number;
}
  
/**
 * A class to specify the parties' election to specify contact information, in relation to elections such as the Addresses for Transfer or the Demand and Notices as specified in the ISDA Credit Support Annex agreement.
 */
export interface ContactElection {
  /**
   * The parties' contact information election.
   */
  partyElection?: PartyContactInformation[];
}
  
/**
 * A class to specify contact information associated with a party: telephone, postal/street address, email and web page.
 */
export interface ContactInformation {
  /**
   * The street/postal address.
   */
  address?: Address[];
  /**
   * The email address.
   */
  email?: string[];
  /**
   * The telephone number.
   */
  telephone?: TelephoneNumber[];
  /**
   * The web page. This attribute is not specified as part of the FpML ContactInformation complex type.
   */
  webPage?: string[];
}
  
/**
 *  A class to specify a financial contract object, which can be invoked either within the context of an event, or independently from it. It corresponds to the FpML Trade in the Confirmation view (while the CDM Execution class corresponds to the FpML trade in the Pre-Trade view). The associated rosettaKey denotes the ability to associate a hash value to the Contract instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface Contract {
  /**
   * Optional account information.
   */
  account?: Account[];
  /**
   * The ISDA calculation agent responsible for performing duties as defined in the applicable product definitions.
   */
  calculationAgent?: CalculationAgent;
  /**
   * If the trade was cleared (novated) through a central counterparty clearing service, this represents the date the trade was cleared (transferred to the central counterparty).
   */
  clearedDate?: Date;
  /**
   * The qualification of what led to the contract closure alongside with the dates on which this closure took effect.
   */
  closedState?: ClosedState;
  /**
   * Defines the collateral obligations of a party.
   */
  collateral?: Collateral;
  /**
   * The identifier(s) that uniquely identify a contract, and which can be qualified by referencing or defining the issuer(s) of such identifier(s). There can be several contract identifier, an example of such being a contract is reportable to both the CFTC and ESMA and then has an associated USI (Unique Swap Identifier) UTI (Unique Trade Identifier).
   */
  contractIdentifier?: Identifier[];
  /**
   * Specifies the document(s) that govern the document, either as a reference to such documents when specified as part of the CDM, or through identification of some of the key terms of those documents, such as the type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentation?: Documentation;
  /**
   * Identification of the law governing the contract.
   */
  governingLaw?: FieldWithMeta<GoverningLawEnum>;
  meta?: MetaFields;
  /**
   * The parties to the contract. The cardinality is optional to address the case where the contract object is part of an event record, in which case the party is specified as part of that object. In that respect, the CDM approach is distinct from FpML, where party information is specified as part of a wrapper alongside the trade object.
   */
  party?: Party[];
  /**
   * Additional contract information that may be provided by each involved party.
   */
  partyContractInformation?: PartyContractInformation[];
  /**
   * The role(s) that party(ies) may have in relation to the contract, further to the principal parties (i.e payer/receive or buyer/seller) to it.
   */
  partyRole?: PartyRole[];
  /**
   * The tradable product information that is associated with the contract, which combines quantity and price together with the product's economic terms, identification and taxonomy. The corresponding FpML construct is the product abstract element and the associated substitution group.
   */
  tradableProduct?: TradableProduct;
  /**
   * The date on which the contract has been executed.
   */
  tradeDate?: TradeDate;
}
  
/**
 * Specification of the primitive event for the formation of a contract, with 'before' state being an 'ExecutionState' and 'after' state being a 'PostInceptionState'. This primitive combined with the 'ExecutionPrimitive' supersedes the earlier 'Inception' primitive, which had both the the execution and the contract formation bundled together, and as such was only applicable to contractual products. This intends to provide for properly atomic primitives.
 */
export interface ContractFormationPrimitive {
  /**
   * The after state corresponds to the new contract being formed between the parties, plus some additional trade workflow information.
   */
  after?: PostInceptionState;
  /**
   * The before state corresponds to the output of an execution between the parties.
   */
  before?: ReferenceWithMeta<ExecutionState>;
}
  
/**
 * A class to specify a contract state instantiation with respect to the before and/or after state of lifecycle events.
 */
export interface ContractState {
  /**
   * Reference to the original contract, such that the contract state can be resolved by super-imposing the updated values on top of the original contract.
   */
  contract?: Contract;
  meta?: MetaFields;
  /**
   * The state of the contract, represented as a replica of the original contract with updated values where applicable, e.g. in the case of resets.
   */
  updatedContract?: Contract;
}
  
export interface ContractualMatrix {
  /**
   * Defines any applicable key into the relevant matrix. For example, the Transaction Type would be the single term required for the Credit Derivatives Physical Settlement Matrix. This element should be omitted in the case of the 2000 ISDA Definitions Settlement Matrix for Early Termination and Swaptions.
   */
  matrixTerm?: FieldWithMeta<MatrixTermEnum>;
  /**
   * Identifies the form of applicable matrix.
   */
  matrixType?: FieldWithMeta<MatrixTypeEnum>;
  /**
   * Specifies the publication date of the applicable version of the matrix. When this element is omitted, the ISDA supplemental language for incorporation of the relevant matrix will generally define rules for which version of the matrix is applicable.
   */
  publicationDate?: Date;
}
  
/**
 *  A class to specify the contractual products' economic terms, alongside their product identification and product taxonomy. The contractual product class is meant to be used across the pre-execution, execution and (as part of the Contract) post-execution lifecycle contexts.
 */
export interface ContractualProduct {
  /**
   * The economic terms associated with a contractual product, i.e. the set of features that are price-forming.
   */
  economicTerms?: EconomicTerms;
  /**
   * The product identification value(s) that might be associated with a contractual product. The CDM provides the ability to associate several product identification methods with a product.
   */
  productIdentification?: ProductIdentification;
  /**
   * The product taxonomy value(s) associated with a contractual product.
   */
  productTaxonomy?: ProductTaxonomy[];
}
  
/**
 * A contractual supplement (such as those published by ISDA) and its publication date that will apply to the trade.
 */
export interface ContractualTermsSupplement {
  /**
   * Identifies the form of applicable contractual supplement.
   */
  contractualTermsSupplementType?: FieldWithMeta<ContractualSupplementEnum>;
  /**
   * Specifies the publication date of the applicable version of the contractual supplement.
   */
  publicationDate?: Date;
}
  
/**
 * A class to specify Control Agreement language related to delivery of a Notice of Exclusive Control
 */
export interface ControlAgreementNecEvent {
  controlAgreementNecEventElection?: ControlAgreementNecEventElection[];
}
  
/**
 * A class to specify party specific Control Agreement language related to delivery of a Notice of Exclusive Control
 */
export interface ControlAgreementNecEventElection {
  necEvent?: boolean;
  /**
   * The elective party.
   */
  party?: string;
}
  
/**
 * A class to specify a convertible bond as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface ConvertibleBond extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 *  The credit default payout specification provides the details necessary for determining when a credit payout will be triggered as well as the parameters for calculating the payout and the settlement terms. The associated rosettaKey denotes the ability to associate a hash value to the CreditDefaultPayout instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface CreditDefaultPayout {
  /**
   * Specifies the terms applicable to the cash settlement of a credit event.
   */
  cashSettlementTerms?: CashSettlementTerms[];
  /**
   * The specification of the non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms.
   */
  generalTerms?: GeneralTerms;
  meta?: MetaFields;
  /**
   * Specifies the terms applicable to the physical settlement of a credit event.
   */
  physicalSettlementTerms?: PhysicalSettlementTerms[];
  /**
   * Specifies the terms for calculating a payout to protect the buyer of the swap in the case of a qualified credit event. These terms include the notional amount, the applicable credit events, the reference obligation, and in the case of a CDS on mortgage-backed securities, the floatingAmountEvents.
   */
  protectionTerms?: ProtectionTerms[];
  /**
   * The qualification of the price at which the contract has been transacted, in terms of market fixed rate, initial points, market price and/or quotation style. In FpML, those attributes are positioned as part of the fee leg.
   */
  transactedPrice?: TransactedPrice;
}
  
export interface CreditEventNotice {
  /**
   * Inclusion of this business center element implies that Greenwich Mean Time in Section 3.3 of the 2003 ISDA Credit Derivatives Definitions is replaced by the local time of the city indicated by the businessCenter element value.
   */
  businessCenter?: BusinessCenterEnum;
  /**
   * The notifying party is the party that notifies the other party when a credit event has occurred by means of a credit event notice. If more than one party is referenced as being the notifying party then either party may notify the other of a credit event occurring. ISDA 2003 Term: Notifying Party.
   */
  notifyingParty?: NotifyingParty;
  /**
   * A specified condition to settlement. Publicly available information means information that reasonably confirms any of the facts relevant to determining that a credit event or potential repudiation/moratorium, as applicable, has occurred. The ISDA defined list (2003) is the market standard and is considered comprehensive, and a minimum of two differing public sources must have published the relevant information, to declare a Credit Event. ISDA 2003 Term: Notice of Publicly Available Information Applicable.
   */
  publiclyAvailableInformation?: PubliclyAvailableInformation;
}
  
/**
 * A class to specify the applicable Credit Events that would trigger a settlement, as specified in the related Confirmation and defined in the ISDA 2014 Credit Definition article IV section 4.1.
 */
export interface CreditEvents {
  /**
   * A credit event. The reference entity has been dissolved or has become insolvent. It also covers events that may be a precursor to insolvency such as instigation of bankruptcy or insolvency proceedings. Sovereign trades are not subject to Bankruptcy as 'technically' a Sovereign cannot become bankrupt. ISDA 2003 Term: Bankruptcy.
   */
  bankruptcy?: boolean;
  /**
   * A specified condition to settlement. An irrevocable written or verbal notice that describes a credit event that has occurred. The notice is sent from the notifying party (either the buyer or the seller) to the counterparty. It provides information relevant to determining that a credit event has occurred. This is typically accompanied by Publicly Available Information. ISDA 2003 Term: Credit Event Notice.
   */
  creditEventNotice?: CreditEventNotice;
  /**
   * In relation to certain credit events, serves as a threshold for Obligation Acceleration, Obligation Default, Repudiation/Moratorium and Restructuring. Market standard is USD 10,000,000 (JPY 1,000,000,000 for all Japanese Yen trades). This is applied on an aggregate or total basis across all Obligations of the Reference Entity. Used to prevent technical/operational errors from triggering credit events. ISDA 2003 Term: Default Requirement.
   */
  defaultRequirement?: Money;
  /**
   * A credit event. Results from the fact that the rating of the reference obligation is down-graded to a distressed rating level. From a usage standpoint, this credit event is typically not applicable in case of RMBS trades.
   */
  distressedRatingsDowngrade?: boolean;
  /**
   * A credit event. This credit event triggers, after the expiration of any applicable grace period, if the reference entity fails to make due payments in an aggregate amount of not less than the payment requirement on one or more obligations (e.g. a missed coupon payment). ISDA 2003 Term: Failure to Pay.
   */
  failureToPay?: FailureToPay;
  /**
   * A credit event. Corresponds to the failure by the Reference Entity to pay an expected interest amount or the payment of an actual interest amount that is less than the expected interest amount. ISDA 2003 Term: Failure to Pay Interest.
   */
  failureToPayInterest?: boolean;
  /**
   * A credit event. Corresponds to the failure by the Reference Entity to pay an expected principal amount or the payment of an actual principal amount that is less than the expected principal amount. ISDA 2003 Term: Failure to Pay Principal.
   */
  failureToPayPrincipal?: boolean;
  /**
   * A credit event. A governmental intervention is an event resulting from an action by a governmental authority that materially impacts the reference entity's obligations, such as an interest rate reduction, principal reduction, deferral of interest or principal, change in priority ranking, or change in currency or composition of payment. ISDA 2014 Term: Governmental Intervention.
   */
  governmentalIntervention?: boolean;
  /**
   * A credit event. Results from the fact that losses occur to the underlying instruments that do not result in reductions of the outstanding principal of the reference obligation.
   */
  impliedWritedown?: boolean;
  /**
   * A credit event. Results from the fact that the underlier fails to make principal payments as expected.
   */
  maturityExtension?: boolean;
  meta?: MetaFields;
  /**
   * A credit event. One or more of the obligations have been declared due and payable before they would otherwise have been due and payable as a result of, or on the basis of, the occurrence of a default, event of default or other similar condition or event other than failure to pay (preferred by the market over Obligation Default, because more definitive and encompasses the definition of Obligation Default - this is more favorable to the Seller). Subject to the default requirement amount. ISDA 2003 Term: Obligation Acceleration.
   */
  obligationAcceleration?: boolean;
  /**
   * A credit event. One or more of the obligations have become capable of being declared due and payable before they would otherwise have been due and payable as a result of, or on the basis of, the occurrence of a default, event of default or other similar condition or event other than failure to pay. ISDA 2003 Term: Obligation Default.
   */
  obligationDefault?: boolean;
  /**
   * A credit event. The reference entity, or a governmental authority, either refuses to recognise or challenges the validity of one or more obligations of the reference entity, or imposes a moratorium thereby postponing payments on one or more of the obligations of the reference entity. Subject to the default requirement amount. ISDA 2003 Term: Repudiation/Moratorium.
   */
  repudiationMoratorium?: boolean;
  /**
   * A credit event. A restructuring is an event that materially impacts the reference entity's obligations, such as an interest rate reduction, principal reduction, deferral of interest or principal, change in priority ranking, or change in currency or composition of payment. ISDA 2003 Term: Restructuring.
   */
  restructuring?: Restructuring;
  /**
   * A credit event. Results from the fact that the underlier writes down its outstanding principal amount.
   */
  writedown?: boolean;
}
  
/**
 * A class to represent the credit limit utilisation information.
 */
export interface CreditLimitInformation {
  limitApplicable?: LimitApplicableExtended[];
}
  
/**
 * Credit limit utilisation breakdown by executed trades and pending orders.
 */
export interface CreditLimitUtilisation {
  /**
   * Credit limit utilisation attributable to executed trades.
   */
  executed?: CreditLimitUtilisationPosition;
  /**
   * Credit limit utilisation attributable to pending unexecuted orders.
   */
  pending?: CreditLimitUtilisationPosition;
}
  
export interface CreditLimitUtilisationPosition {
  /**
   * Global credit limit utilisation amount, agnostic of long/short position direction.
   */
  global?: number;
  /**
   * Credit limit utilisation attributable to long positions.
   */
  longPosition?: number;
  /**
   * Credit limit utilisation attributable to short positions.
   */
  shortPosition?: number;
}
  
/**
 * A class to specify the credit notation as the combination of agency, notation, scale and debt type qualifications.
 */
export interface CreditNotation {
  /**
   * The credit agency to which the other variables (notation, scale, debt type) refer to.
   */
  agency?: FieldWithMeta<CreditRatingAgencyEnum>;
  /**
   * The credit rating debt type (e.g. long term, high yield, deposits, ...) associated with the credit rating notation and scale.
   */
  debt?: CreditRatingDebt;
  /**
   * The credit rating notation. As it varies among credit rating agencies, FpML doesn't specify a default scheme.
   */
  notation?: FieldWithMeta<String>;
  /**
   * The credit rating scale, with a typical distinction between short term, long term. FpML doesn't specify a default scheme, which is hence not specified as an enumeration as part of the CDM.
   */
  scale?: FieldWithMeta<String>;
}
  
/**
 * The credit rating notation higher level construct, which provides the ability to specify multiple rating notations.
 */
export interface CreditNotations {
  /**
   * This attribute is specified when only one credit notation is determined.
   */
  creditNotation?: CreditNotation;
  /**
   * This attribute provides the ability to specify several credit notations, alongside an 'any' or 'all' or all condition.
   */
  creditNotations?: MultipleCreditNotations;
}
  
/**
 * The credit rating debt type(s) associated with the credit rating notation and scale. When several debt types are specified, they must be qualified through an 'any' or 'all'.
 */
export interface CreditRatingDebt {
  /**
   * This attribute is to be specified when only one debt type is specified. FpML doesn't specify values in relation to the associated scheme, which is hence not specified as an enumeration as part of the CDM.
   */
  debtType?: FieldWithMeta<String>;
  /**
   * This attribute provides the ability to specify several debt types, alongside an 'any' or 'all' or all condition. As an example, Baa1 rating is required for any long term debt and deposit.
   */
  debtTypes?: MultipleDebtTypes;
}
  
/**
 * The agreement executed between the parties and intended to govern collateral arrangement for all OTC derivatives transactions between those parties.
 */
export interface CreditSupportAgreement {
  /**
   * The type of ISDA Credit Support Agreement.
   */
  creditSupportAgreementType?: FieldWithMeta<CreditSupportAgreementTypeEnum>;
  /**
   * The date of the agreement executed between the parties and intended to govern collateral arrangements for all OTC derivatives transactions between those parties.
   */
  date?: Date;
  /**
   * An identifier used to uniquely identify the CSA. FpML specifies the type as creditSupportAgreementIdScheme, but without proposing any value.  As far as e understand, no scheme has yet been developed at this point.
   */
  identifierValue?: string;
}
  
/**
 * A class to specify the Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d): Credit Support Obligations. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations.
 */
export interface CreditSupportObligationsInitialMargin {
  /**
   * The net amount of exposure reached before collateral has to be posted or returned. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vi)(B): Minimum Transfer Amount. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(vi)(B): Minimum Transfer Amount. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vi)(B): Minimum Transfer Amount.
   */
  minimumTransferAmount?: MinimumTransferAmount;
  /**
   * The rounding methodology applicable to the Delivery Amount and the Return Amount in terms of nearest integral multiple of Base Currency units. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vi)(C): Rounding. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(vi)(C): Rounding. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vi)(C): Rounding.
   */
  rounding?: CollateralRounding;
  /**
   * The amount of net exposure that a party is willing to bear in relation to the other party before it requires asking for collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vi)(A): Threshold. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(vi)(A): Threshold. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vi)(A): Threshold.
   */
  threshold?: Threshold;
}
  
/**
 * A class to specify the Credit Support Obligations applicable to the Variation Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c): Credit Support Obligations.
 */
export interface CreditSupportObligationsVariationMargin {
  /**
   * The eligible collateral elections by the parties to the Credit Support Annex for Variation Margin. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(ii): Eligible Collateral (VM).
   */
  eligibleCollateral?: EligibleCollateralVariationMargin;
  /**
   * The FX haircut percentage that applies to each party (as the pledgor/chargor/obligor) and item of Eligible Collateral unless this item is denominated in a Major Currency or in the Base Currency. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(v)(B): FX Haircut Percentage.
   */
  fxHaircut?: number;
  /**
   * The parties to which the provisions of Paragraph 11(g) of the ISDA 2016 Credit Support Annex for Variation Margin will apply to. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(iii): Legally Ineligible Credit Support (VM).
   */
  ineligibleCreditSupport?: IneligibleCreditSupport;
  /**
   * The set of currencies that are specified as Major Currency for the purpose of applying the FX Haircut Percentage. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(v)(B): FX Haircut Percentage.
   */
  majorCurrency?: FieldWithMeta<String>[];
  /**
   * The net amount of exposure reached before collateral has to be posted or returned. ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (c)(vii)(A): Minimum Transfer Amount.
   */
  minimumTransferAmount?: MinimumTransferAmount;
  /**
   * The rounding methodology applicable to the Delivery Amount and the Return Amount in terms of nearest integral multiple of Base Currency units. ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (c)(vii)(B): Rounding.
   */
  rounding?: CollateralRounding;
}
  
/**
 * A data to:  represent the cash settlement method defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (g) (published in Supplement number 28).
 */
export interface CrossCurrencyMethod {
  /**
   * The currency, or currencies, in which the cash settlement amount(s) will be calculated and settled. While the order in which the currencies are stated is unimportant, the cash settlement currency or currencies must correspond to one or both of the constituent currencies of the swap transaction. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  cashSettlementCurrency?: FieldWithMeta<String>[];
  /**
   * A container for a set of institutions that may be called upon to provide rate quotations as part of the method to determine the applicable cash settlement amount. If institutions are not specified, it is assumed that reference institutions will be agreed between the parties on the exercise date, or in the case of swap transaction to which mandatory early termination is applicable, the cash settlement valuation date.
   */
  cashSettlementReferenceBanks?: CashSettlementReferenceBanks[];
  /**
   * Which rate quote is to be observed, either Bid, Mid, Offer or Exercising Party Pays. The meaning of Exercising Party Pays is defined in the 2000 ISDA Definitions, Section 17.2. Certain Definitions Relating to Cash Settlement, paragraph (j).
   */
  quotationRateType?: QuotationRateTypeEnum;
}
  
export interface CrossCurrencyTerms {
  principalExchanges?: PrincipalExchanges;
  settlementProvision?: SettlementProvision;
}
  
/**
 * A class that is used for including the currency exchange rates used to cross between the traded currencies for non-base currency FX contracts.
 */
export interface CrossRate extends QuotedCurrencyPair {
  /**
   * An optional element used for deals consummated in the FX Forwards market. Forward points represent the interest rate differential between the two currencies traded and are quoted as a premium or a discount. Forward points are added to, or subtracted from, the spot rate to create the rate of the forward trade.
   */
  forwardPoints?: number;
  /**
   * The exchange rate used to cross between the traded currencies.
   */
  rate?: number;
  /**
   * An optional element used for FX forwards and certain types of FX OTC options. For deals consummated in the FX Forwards Market, this represents the current market rate for a particular currency pair.
   */
  spotRate?: number;
  /**
   * The first currency specified when a pair of currencies is to be evaluated.
   */
  currency1?: FieldWithMeta<String>;
  /**
   * The second currency specified when a pair of currencies is to be evaluated.
   */
  currency2?: FieldWithMeta<String>;
  /**
   * The method by which the exchange rate is quoted.
   */
  quoteBasis?: QuoteBasisEnum;
}
  
/**
 * An abstract class to specify the provisions for a ISDA Credit Support Annex that are common among vintages, governing laws and across IM and VM.
 */
export interface Csa {
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * An abstract class to specify the provisions for the 2016 ISDA Credit Support Annex that are common among governing laws and across Initial and Variation Margin.
 */
export interface Csa2016 extends Csa {
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * An abstract class to specify the provisions for the 2018 ISDA Credit Support Annex that are common among governing laws and across Initial and Variation Margin.
 */
export interface Csa2018 extends Csa {
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2018 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2018 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2018 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * An abstract class to specify the provisions for the 2016 ISDA Credit Support Annex for Initial Margin that are common among governing laws.
 */
export interface CsaInitialMargin2016 extends Csa2016 {
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The reference currency for the purpose of specifying the FX Haircut relating to a posting obligation, as being either the Termination Currency or an FX Designated Currency.
   */
  fxHaircutCurrency?: FxHaircutCurrency;
  /**
   * The qualification of whether cross-currency swaps need to be identified in the Confirmation so that the obligations to exchange principal be disregarded for the purpose of determining the Delivery Amount or Return Amount. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (gg)(1).
   */
  identifiedCrossCurrencySwap?: boolean;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2016 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2016 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * A class to specify the provisions that are specific to the Japanese Law version of the ISDA 2016 Credit Support Annex for Initial Margin.
 */
export interface CsaInitialMargin2016JapaneseLaw extends CsaInitialMargin2016 {
  /**
   * The Automatic Set-Off provision applies when the value is set to True. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (l): Modification to Obligor’s Rights and Remedies.
   */
  automaticSetOff?: boolean;
  /**
   * Cash Settlement Day has the meaning specified in ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, Paragraph 4(b)(i), unless otherwise specified as part of this attribute. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(iv): Cash Settlement Day.
   */
  cashSettlementDay?: string;
  /**
   * ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(i): Collateral Management Agreement.
   */
  collateralManagementAgreeement?: CollateralManagementAgreement;
  /**
   * ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m): Collateral Management Arrangement.
   */
  collateralManagementArrangement?: CollateralManagementArrangement;
  /**
   * ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii): Collateral Manager.
   */
  collateralManager?: CollateralManager;
  /**
   * The Distributions and Interest Payment as part of the Japanese Law ISDA CSA. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n): Distributions and Interest Payment (IM).
   */
  distributionAndInterestPayment?: DistributionAndInterestPayment;
  /**
   * The qualification of whether Japanese Law CSA (VM) are specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (s)(ii): Japanese Law CSA (VM).
   */
  japaneseLawCsa?: RelatedAgreement;
  /**
   * The Obligor Additional Rights Event election. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (k): Obligor Additional Rights Event.
   */
  obligorAdditionalRightsEvent?: AdditionalRightsEvent;
  /**
   * The obligor's posting obligations. This term of obligor is the equivalent of the chargor in the English Law CSA and the pledgor in the New York Law CSA, i.e. it's the party that will post/pledge collateral to the other party. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii).
   */
  obligorPostingObligations?: ObligorPostingObligations;
  /**
   * The Obligor Rights Event election. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (k): Obligor Rights Event.
   */
  obligorRightsEvent?: RightsEvent;
  /**
   * The qualification of whether Other CSA are specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (s)(i): Other CSA.
   */
  otherCsa?: RelatedAgreement;
  /**
   * The Other Eligible Support elections associated with margin agreements. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p): Other Eligible Support (IM) and Other Posted Support (IM).
   */
  otherEligibleAndPostedSupport?: OtherEligibleAndPostedSupport;
  /**
   * The Other Eligible Support election. If not specified, this election is deemed as not applicable. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iv).
   */
  otherEligibleSupport?: string;
  /**
   * Securities Settlement Day has the meaning specified in ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, Paragraph 12, unless otherwise specified as part of this attribute. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(v): Securities Settlement Day.
   */
  securitiesSettlementDay?: string;
  /**
   * The qualification of whether Trust Scheme Addendum is applicable (True) or not applicable (False).
   */
  trustSchemeAddendum?: boolean;
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The reference currency for the purpose of specifying the FX Haircut relating to a posting obligation, as being either the Termination Currency or an FX Designated Currency.
   */
  fxHaircutCurrency?: FxHaircutCurrency;
  /**
   * The qualification of whether cross-currency swaps need to be identified in the Confirmation so that the obligations to exchange principal be disregarded for the purpose of determining the Delivery Amount or Return Amount. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (gg)(1).
   */
  identifiedCrossCurrencySwap?: boolean;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2016 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2016 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * A class to specify the provisions that are specific to the New York Law version of the ISDA 2016 Credit Support Annex for Initial Margin.
 */
export interface CsaInitialMargin2016NewYorkLaw extends CsaInitialMargin2016 {
  /**
   * The Custodian and Segregated Account details in respect of each party as the Pledgor. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n): Custody Arrangements.
   */
  custodyArrangements?: CustodyArrangements;
  /**
   * The Delivery in Lieu Right provision applies when the value is set to True. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m): Modification to Pledgor’s Rights and Remedies.
   */
  deliveryInLieuRight?: boolean;
  /**
   * The Japanese Securities Provisions election. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (v): Japanese Securities Provisions (Shichiken).
   */
  japaneseSecuritiesProvisions?: JapaneseSecuritiesProvisions;
  /**
   * The Other Eligible Support elections associated with margin agreements. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p): Other Eligible Support (IM) and Other Posted Support (IM).
   */
  otherEligibleAndPostedSupport?: OtherEligibleAndPostedSupport;
  /**
   * The Other Eligible Support election. If not specified, this election is deemed as not applicable. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(iv).
   */
  otherEligibleSupport?: string;
  /**
   * The Pledgor Additional Rights Event election. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (k): Pledgor Additional Rights Event.
   */
  pledgorAdditionalRightsEvent?: AdditionalRightsEvent;
  /**
   * The pledgor's posting obligations. This term of pledgor is the equivalent of the chargor in the English Law CSA and the obligor in the Japanese Law CSA, i.e. it's the party that will post/pledge collateral to the other party. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii).
   */
  pledgorPostingObligations?: PledgorPostingObligations;
  /**
   * The Pledgor Rights Event election. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (j): Pledgor Rights Event.
   */
  pledgorRightsEvent?: RightsEvent;
  /**
   * The time by which the transfer of collateral must take place when different from the Regular Settlement Day as a result of parties' election. ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vii): Transfer Timing.
   */
  transferTiming?: string;
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The reference currency for the purpose of specifying the FX Haircut relating to a posting obligation, as being either the Termination Currency or an FX Designated Currency.
   */
  fxHaircutCurrency?: FxHaircutCurrency;
  /**
   * The qualification of whether cross-currency swaps need to be identified in the Confirmation so that the obligations to exchange principal be disregarded for the purpose of determining the Delivery Amount or Return Amount. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (gg)(1).
   */
  identifiedCrossCurrencySwap?: boolean;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2016 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2016 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * An abstract class to specify the provisions for the 2018 ISDA Credit Support Annex for Initial Margin that are common among governing laws.
 */
export interface CsaInitialMargin2018 extends Csa2018 {
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2018 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2018 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2018 CSA for Initial Margin. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2018 and 2018 CSA for Initial Margin. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2018 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2018 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2018 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * A class to specify the provisions that are specific to the English Law version of the ISDA 2018 Credit Support Deed for Initial Margin.
 */
export interface CsaInitialMargin2018NewYorkLaw extends CsaInitialMargin2018 {
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2018 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2018 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2018 CSA for Initial Margin. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2018 and 2018 CSA for Initial Margin. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2018 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2018 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2018 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * An abstract class to specify the provisions for the 2016 ISDA Credit Support Annex for Variation Margin that are common among governing laws.
 */
export interface CsaVariationMargin2016 extends Csa2016 {
  /**
   * The Credit Support Obligations applicable to the Variation Margin Credit Support Annex. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c): Credit Support Obligations.
   */
  creditSupportObligations?: CreditSupportObligationsVariationMargin;
  /**
   * When True the Credit Support Offsets provisions in Paragraph 11(j) of the ISDA 2016 Credit Support Annex for Variation Margin apply. They don't apply when False. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (j): Credit Support Offsets.
   */
  creditSupportOffsets?: boolean;
  /**
   * The elections for the holding and using of posted collateral by the respective parties to the Credit Support Annex for Variation Margin. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h): Holding and Using Posted Collateral (VM).
   */
  holdingAndUsingPostedCollateral?: HoldingAndUsingPostedCollateral;
  /**
   * The extend of time by which a demand for the Transfer of Eligible Credit Support (VM) or Posted Credit Support (VM) needs to be made after the relevant Valuation Time in order for the transfer to take place. This time is expressed in a number of minutes. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(iv): Notification Time.
   */
  notificationTime?: number;
  /**
   * The qualification of whether Other CSA are specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (o): Other CSA.
   */
  otherCsa?: RelatedAgreement;
  /**
   * The Valuation Agent as specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(i): Valuation Agent.
   */
  valuationAgent?: ReferenceWithMeta<Party>;
  /**
   * The business location elected by the respective parties to the agreement as the Valuation Date Location. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(ii): Valuation Date Location.
   */
  valuationDateLocation?: CalculationDateLocation;
  /**
   * ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(iii): Valuation Time.
   */
  valuationTime?: BusinessCenterTime[];
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * A class to specify the provisions that are specific to the New York Law version of the ISDA 2016 Credit Support Annex for Variation Margin.
 */
export interface CsaVariationMargin2016NewYorkLaw extends CsaVariationMargin2016 {
  /**
   * The Other Eligible Support elections associated with margin agreements. ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (l): Other Eligible Support (VM) and Other Posted Support (VM).
   */
  otherEligibleAndPostedSupport?: OtherEligibleAndPostedSupport;
  /**
   * The Other Eligible Support election. If not specified, this election is deemed as not applicable. ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (c)(vi): Other Eligible Support (VM).
   */
  otherEligibleSupport?: string;
  /**
   * The time by which the transfer of collateral must take place after the Notification Time on the Regular Settlement Day. ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (c)(viii): Transfer Timing.
   */
  transferTiming?: string;
  /**
   * The Credit Support Obligations applicable to the Variation Margin Credit Support Annex. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c): Credit Support Obligations.
   */
  creditSupportObligations?: CreditSupportObligationsVariationMargin;
  /**
   * When True the Credit Support Offsets provisions in Paragraph 11(j) of the ISDA 2016 Credit Support Annex for Variation Margin apply. They don't apply when False. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (j): Credit Support Offsets.
   */
  creditSupportOffsets?: boolean;
  /**
   * The elections for the holding and using of posted collateral by the respective parties to the Credit Support Annex for Variation Margin. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h): Holding and Using Posted Collateral (VM).
   */
  holdingAndUsingPostedCollateral?: HoldingAndUsingPostedCollateral;
  /**
   * The extend of time by which a demand for the Transfer of Eligible Credit Support (VM) or Posted Credit Support (VM) needs to be made after the relevant Valuation Time in order for the transfer to take place. This time is expressed in a number of minutes. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(iv): Notification Time.
   */
  notificationTime?: number;
  /**
   * The qualification of whether Other CSA are specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (o): Other CSA.
   */
  otherCsa?: RelatedAgreement;
  /**
   * The Valuation Agent as specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(i): Valuation Agent.
   */
  valuationAgent?: ReferenceWithMeta<Party>;
  /**
   * The business location elected by the respective parties to the agreement as the Valuation Date Location. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(ii): Valuation Date Location.
   */
  valuationDateLocation?: CalculationDateLocation;
  /**
   * ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (d)(iii): Valuation Time.
   */
  valuationTime?: BusinessCenterTime[];
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * A class to specify the provisions that are specific to the English Law version of the ISDA 2016 Credit Support Deed for Initial Margin.
 */
export interface CsdInitialMargin2016EnglishLaw extends CsaInitialMargin2016 {
  /**
   * The election for the Valuation of Appropriate Collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (u): Valuation of Appropriated Collateral.
   */
  appropriatedCollateralValuation?: AppropriatedCollateralValuation;
  /**
   * The Chargor Additional Rights Event election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (k): Chargor Additional Rights Event.
   */
  chargorAdditionalRightsEvent?: AdditionalRightsEvent;
  /**
   * The chargor's posting obligations. This term of chargor is the equivalent of the pledgor in the New York Law CSA and the obligor in the Japanese Law CSA, i.e. it's the party that will post/pledge collateral to the other party. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (ii).
   */
  chargorPostingObligations?: ChargorPostingObligations;
  /**
   * The Chargor Rights Event election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (j): Chargor Rights Event.
   */
  chargorRightsEvent?: RightsEvent;
  /**
   * The Custodian and Segregated Account details in respect of each party as the Pledgor. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (n): Custody Arrangements.
   */
  custodyArrangements?: CustodyArrangements;
  /**
   * The Delivery in Lieu Right provision applies when the value is set to True. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (m): Modification to Chargor’s Rights and Remedies.
   */
  deliveryInLieuRight?: boolean;
  /**
   * ISDA 2016 English Credit Support Annex for Initial Margin, paragraph 13, General Principles, (x): Japanese Securities Provisions (Shichiken).
   */
  japaneseSecuritiesProvisions?: boolean;
  /**
   * The Process Agent that might be appointed by the parties to the agreement in accordance with the ISDA 2016 English Law CSA, paragraph 11(h). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (t): Process Agent.
   */
  processAgent?: ProcessAgent;
  /**
   * The time by which the transfer of collateral must take place when different from the Regular Settlement Day as a result of parties' election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vii): Transfer Timing.
   */
  transferTiming?: string;
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The reference currency for the purpose of specifying the FX Haircut relating to a posting obligation, as being either the Termination Currency or an FX Designated Currency.
   */
  fxHaircutCurrency?: FxHaircutCurrency;
  /**
   * The qualification of whether cross-currency swaps need to be identified in the Confirmation so that the obligations to exchange principal be disregarded for the purpose of determining the Delivery Amount or Return Amount. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (gg)(1).
   */
  identifiedCrossCurrencySwap?: boolean;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2016 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2016 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2016 and 2018 CSA for Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2016 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (o): Additional Representation(s). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (k): Additional Representation(s).
   */
  additionalRepresentation?: AdditionalRepresentation;
  /**
   * The address for transfer as specified by the respective parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (r): Addresses for Transfers. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (n): Addresses for Transfers.
   */
  addressesForTransfer?: ContactElection;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2016 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2016 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The bespoke provision that might be specified by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (u)(iii): Other Provisions. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (p): Other Provisions.
   */
  bespokeProvision?: string;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2016 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
/**
 * A class to specify the provisions that are specific to the English Law version of the ISDA 2018 Credit Support Deed for Initial Margin.
 */
export interface CsdInitialMargin2018EnglishLaw extends CsaInitialMargin2018 {
  /**
   * Any additional amendments that might be specified by the parties to the agreement applicable to Paragraphs 1-12.
   */
  additionalAmendments?: string;
  /**
   * The qualification of whether Additional Information related to Regulatory Compliance and Concentration Limits is applicable or not
   */
  additionalInformation?: boolean;
  /**
   * Any additional amendments that might be specified applicable to this deed.
   */
  additionalTerms?: string;
  /**
   * The election for the Valuation of Appropriate Collateral. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (u): Valuation of Appropriated Collateral.
   */
  appropriatedCollateralValuation?: AppropriatedCollateralValuation;
  /**
   * Description to be added
   */
  calculationAgentIM?: CalculationAgentIm;
  /**
   * Description to be added
   */
  calculationDateIM?: CalculationDateIm;
  /**
   * Description to be added
   */
  calculationTimeIm?: CalculationTimeIm;
  /**
   * The chargor's posting obligations. This term of chargor is the equivalent of the pledgor in the New York Law CSA and the obligor in the Japanese Law CSA, i.e. it's the party that will post/pledge collateral to the other party. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (ii).
   */
  chargorPostingObligations?: ChargorPostingObligations;
  /**
   * The Chargor Rights Event election. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (j): Chargor Rights Event.
   */
  chargorRightsEvent?: RightsEvent;
  /**
   * Description to be added
   */
  controlAgreementNecEvent?: ControlAgreementNecEvent;
  /**
   * The Custodian and Segregated Account details in respect of each party as the Pledgor. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (n): Custody Arrangements.
   */
  custodyArrangements?: CustodyArrangements;
  /**
   * The Delivery in Lieu Right provision applies when the value is set to True. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (m): Modification to Chargor’s Rights and Remedies.
   */
  deliveryInLieuRight?: boolean;
  /**
   * Description to be added
   */
  fallbacktoMandatoryMethod?: FallbackToMandatoryMethodDays;
  /**
   * The bespoke provision that might be specified by the parties to the agreement applicable to Paragraph 11(j).
   */
  interpretationParagraphEleven?: string;
  /**
   * ISDA 2018 English Credit Support Annex for Initial Margin, paragraph 13, General Principles, (x): Japanese Securities Provisions (Shichiken).
   */
  japaneseSecuritiesProvisions?: JapaneseSecuritiesProvisions;
  /**
   * Description to be added
   */
  marginApproach?: MarginApproach;
  /**
   * Description to be added
   */
  minimumTransferAmountAmendment?: MinimumTransferAmountAmendment;
  /**
   * The Process Agent that might be appointed by the parties to the agreement in accordance with the ISDA 2018 English Law CSA, paragraph 11(h). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (t): Process Agent.
   */
  processAgent?: ProcessAgent;
  /**
   * Description to be added
   */
  recalculationOfValue?: RecalculationOfValue;
  /**
   * Description to be added
   */
  securedPartyRightsEvent?: SecuredPartyRightsEvent;
  /**
   * Description to be added
   */
  simmVersion?: SimmVersion;
  /**
   * Description to be added
   */
  substitutedRegime?: SubstitutedRegime;
  /**
   * The time by which the transfer of collateral must take place when different from the Regular Settlement Day as a result of parties' election. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vii): Transfer Timing.
   */
  transferTiming?: string;
  /**
   * The specified location where the credit exposure will be calculated by the respective parties. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(i): Calculation Date Location. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(i): Calculation Date Location.
   */
  calculationDateLocation?: CalculationDateLocation;
  /**
   * The Credit Support Obligations applicable to the Initial Margin Credit Support Annex and which are common among the English, Japanese and New York governing laws. This excludes the Other Eligible Support election (which only applies to the Japanese Law and New York Law agreements) and the Transfer Timing election (which only applies to the English Law and the New York Law agreements). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c): Credit Support Obligations. 
   */
  creditSupportObligations?: CreditSupportObligationsInitialMargin;
  /**
   * The specification of the ISDA SIMM Method for all Covered Transactions with respect to all Regimes. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
   */
  method?: Method;
  /**
   * The time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii).
   */
  notificationTime?: NotificationTime;
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false) as specified by ISDA 2018 CSA for Initial Margin, Paragraph 13, (aa).
   */
  oneWayProvisions?: OneWayProvisions;
  /**
   * The Regime Table provision as specified by the ISDA 2018 CSA for Initial Margin, Paragraph 13 General Principles, which determines the regulatory regime(s) applicable to each of the parties to the CSA in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law), with one set of values per counterparty. As specified in the CSA, the applicability of a regime shall not be construed as a representation, admission or acknowledgement that either party is actually regulated under such regime.
   */
  regime?: Regime;
  /**
   * The methodology to compute sensitivities to commodity indices for the purpose of the ISDA 2018 CSA for Initial Margin. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(B).
   */
  sensitivityToCommodity?: SensitivityMethodology;
  /**
   * The methodology to compute sensitivities to equity indices, funds and ETFs for the purpose of the ISDA 2018 and 2018 CSA for Initial Margin. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles (gg)(2)(A).
   */
  sensitivityToEquity?: SensitivityMethodology;
  /**
   * The Amendment to Termination Currency elections by the parties to the agreement. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (v): Amendment to Termination Currency. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
   */
  terminationCurrency?: TerminationCurrencyAmendment;
  /**
   * The additional obligations that might be specified by the parties to an ISDA CSA. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(ii). | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(ii). | ISDA 2018 New York Law Credit Support Annex for Variation Margin, paragraph 13, (b)(ii).
   */
  additionalObligations?: string;
  /**
   * The base currency for the Credit Support Annex document as elected by the parties to the agreement. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes. ISDA 2018 CSA for Initial Margin, Paragraph 13 (a) | ISDA 2018 CSA for Variation Margin, Paragraph 13 (a).
   */
  baseCurrency?: FieldWithMeta<String>;
  /**
   * The set of elections specified in Paragraph 13 that may overwrite the default Condition Precedent provision as specified in ISDA 2018 Credit Support Annex for Initial Margin, Paragraph 4, (a), and the set of provisions that are deemed Access Condition (Initial Margin) and Specified Condition (Variation Margin). ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Conditions Precedent. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e): Conditions Precedent. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (e): Conditions Precedent and Secured Party’s Rights and Remedies.
   */
  conditionsPrecedent?: ConditionsPrecedent;
  /**
   * The address where the demands, specifications and notices will be communicated to within each of the parties to the agreement. ISDA 2018 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (q): Demands and Notices. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (m): Demands and Notices.
   */
  demandsAndNotices?: ContactElection;
  /**
   * The election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (g): Dispute Resolution.
   */
  disputeResolution?: DisputeResolution;
  /**
   * The conditions under which the Pledgor/Obligor/Chargor can substitute posted collateral. ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Substitution. | ISDA 2018 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2018 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitution.
   */
  substitution?: Substitution;
  /**
   * The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).
   */
  umbrellaAgreement?: UmbrellaAgreement;
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
}
  
export interface Curve {
  commodityCurve?: FieldWithMeta<CommodityReferencePriceEnum>;
  interestRateCurve?: InterestRateCurve;
}
  
/**
 * A class to specify the Custodian Event (English Law & New York Law ISDA CSA) and the Collateral Manager Event (Japanese Law ISDA CSA) in terms of applicability and end-date. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (n)(iii): Custodian Event. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m)(ii): Collateral Manager Event. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(iii): Custodian Event.
 */
export interface CustodianEvent {
  /**
   * The qualification of the Custodian Event (English Law & New York Law ISDA CSA) or Collateral Manager Event (Japanese Law ISDA CSA) End Date.
   */
  endDate?: CustodianEventEndDate;
  /**
   * The qualification as to whether the Custodian Event (English Law & New York Law ISDA CSA) or the Collateral Manager Event (Japanese Law ISDA CSA) is applicable.
   */
  isApplicable?: boolean;
}
  
/**
 * A class to specify the Custodian Event (English Law & New York Law ISDA CSA) or Collateral Manager Event (Japanese Law ISDA CSA) End Date. Its qualification is function of three elective periods: either (i) a specified number of days after the occurrence of the Custodian Event (the daysAfterCustodianEvent attribute), or (ii) the number of days prior to the date on which the Control Agreement will terminate, with in this latter case (iii) the further qualification of the number of days prior to the Release Date if only one party has effectively provided the Timely Statement to the other party. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (n)(iii): CE End Date. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m)(ii): CME End Date. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(iii): CE End Date.
 */
export interface CustodianEventEndDate {
  /**
   * The parties' election to specify the number of days one party has effectively provided the Timely Statement to the other party.
   */
  dateOfTimelyStatement?: CustomisableOffset;
  /**
   * The parties' election to specify the number of days after the occurrence of the Custodian Event (English Law & New York Law ISDA CSA) or the Collateral Management Event (Japanese Law ISDA CSA) for the purpose of qualifying the CE/CME End Date.
   */
  daysAfterCustodianEvent?: CustomisableOffset;
  /**
   * The parties' election to specify the number of days prior to the termination of the Control Agreement (English Law & New York Law ISDA CSA) or the Collateral Management Event (Japanese Law ISDA CSA) for the purpose of qualifying the CE/CME End Date, in the case where advance notice is given.
   */
  releaseDate?: CustomisableOffset;
}
  
/**
 * A class to specify the Custodian Risk (English Law and New York Law ISDA CSA) and the Collateral Manager Risk (Japanese Law ISDA CSA) election. | ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (n)(ii): Custodian (IM) Risk. | ISDA 2018 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (n)(ii): Custodian (IM) Risk. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m)(i): Collateral Manager Risk. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii): Custodian (IM) Risk.
 */
export interface CustodianRisk {
  /**
   * The qualification as to whether the risk is deemed as Specified.
   */
  isSpecified?: boolean;
  /**
   * The Custodian Risk (English Law and New York Law ISDA CSA) or Collateral Manager Risk (Japanese Law ISDA CSA) qualification. This attribute is optional because the Custodian Risk provision can be deemed as 'Specified', although not be qualified through this attribute.
   */
  qualification?: string;
}
  
/**
 * A class to specify the requirements applicable to the custodian with respect to the holding of posted collateral. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h)(i): Eligibility to Hold Posted Collateral (VM) Custodians (VM).
 */
export interface CustodianTerms {
  /**
   * The 2016 ISDA CSA for Variation Margin provides the ability for the parties to specify the initial custodian.
   */
  initialDesignation?: LegalEntity;
  /**
   * The minimal level of assets requirement with respect to the custody agent.
   */
  minimumAssets?: Money;
  /**
   * The minimal rating requirement with respect to the custody agent.
   */
  minimumRating?: CreditNotations;
}
  
/**
 * A class to specify the Custody Arrangements for the English Law and New York Law ISDA Credit Support Annex. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n): Custody Arrangements.
 */
export interface CustodyArrangements {
  /**
   * The elections specific to Collateral Access Breach language
   */
  collateralAccessBreach?: CollateralAccessBreach;
  /**
   * When specified as True, means that the Custodian Events specified in Paragraph 13 General Principles, (m)(iii) will constitute an Additional Termination Event. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (m)(iii): Custodian Event.
   */
  custodianEvent?: CustodianEvent;
  /**
   * Control Agreement language is specified when True.
   */
  hasControlAgreementLanguage?: boolean;
  /**
   * Unless specified as True, the Control Agreement is not a Credit Support Document under the agreement with respect to a party. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 6 (e): The Control Agreement as a Credit Support Document.
   */
  isCreditSupportDocument?: boolean;
  /**
   * ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(vii): Other Provisions.
   */
  otherProvisions?: string;
  /**
   * The party-specific election with respect to the Custodian and Segregated Account details and the Custodian Risk provision.
   */
  partyElection?: CustodyArrangementsElection[];
}
  
/**
 * A class to specify the Custody Arrangements election by each party to the agreement: custody agent and account(s) identification, as well as custodian risk qualification.
 */
export interface CustodyArrangementsElection {
  /**
   * Unless specified as inapplicable in the event of any inconsistency between this Deed and the Control Agreement, this Deed will prevail over the Control Agreement
   */
  consistencyWithControlAgreement?: boolean;
  /**
   * The identification of whether the Control Agreement is a Credit Support Document with respect to each party
   */
  controlAgreementAsCsd?: boolean;
  /**
   * The custody agent. While ISDA Create only specifies the custodian's name, specifying the legal entity as part of the CDM is deemed more appropriate, while this will still provide the ability to accommodate situations where only the entity name is available, as the entityId attribute is optional as part of the LegalEntity class.
   */
  custodian?: LegalEntity;
  /**
   * The qualification of the Custodian Risk. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii): Custodian (IM) Risk.
   */
  custodianRisk?: CustodianRisk;
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
  /**
   * Unless specified as inapplicable the parties recognise that the Control Agreement is a means by which the parties can perform their obligations.
   */
  relationshipWithControlAgreement?: boolean;
  /**
   * The identification of the segregated cash account for the purpose of holding cash collateral.
   */
  segregatedCashAccount?: Account;
  /**
   * The identification of the segregated security account for the purpose of holding security collateral.
   */
  segregatedSecurityAccount?: Account;
}
  
/**
 * A class to specify an offset either as a normalized [multiplier, period, dayType] or as a custom provision of type string.
 */
export interface CustomisableOffset {
  customProvision?: string;
  offset?: Offset;
}
  
/**
 * In its initial iteration, this class is meant to support the DTCC TIW workflow information.
 */
export interface CustomisedWorkflow {
  /**
   * In this initial iteration, this corresponds to the DTCC TIW element name.
   */
  itemName?: string;
  /**
   * In this initial iteration, this corresponds to the DTCC value.
   */
  itemValue?: string;
}
  
export interface DateGroup {
  dates?: Date[];
}
  
/**
 * List of dates.
 */
export interface DateList {
  date?: Date[];
}
  
/**
 * A class defining a contiguous series of calendar dates. The date range is defined as all the dates between and including the first and the last date. The first date must fall before the last date.
 */
export interface DateRange {
  /**
   * The first date of a date range.
   */
  unadjustedFirstDate?: Date;
  /**
   * The last date of a date range.
   */
  unadjustedLastDate?: Date;
}
  
/**
 * A data to:  provide the ability to point to multiple payment nodes in the document through the unbounded paymentDatesReference.
 */
export interface DateRelativeToCalculationPeriodDates {
  /**
   * A set of href pointers to calculation period dates defined somewhere else in the document.
   */
  calculationPeriodDatesReference?: ReferenceWithMeta<CalculationPeriodDates>[];
}
  
/**
 * A data to:  provide the ability to point to multiple payment nodes in the document through the unbounded paymentDatesReference.
 */
export interface DateRelativeToPaymentDates {
  /**
   * A set of href pointers to payment dates defined somewhere else in the document.
   */
  paymentDatesReference?: ReferenceWithMeta<PaymentDates>[];
}
  
/**
 * List of dateTimes.
 */
export interface DateTimeList {
  /**
   * The CDM specifies that the zoned date time is to be expressed in accordance with ISO 8601, either as UTC as an offset to UTC.
   */
  dateTime?: Date[];
}
  
/**
 * A class to specify all the ISDA terms relevant to defining the deliverable obligations.
 */
export interface DeliverableObligations {
  /**
   * A deliverable obligation characteristic. An obligation at time of default is due to mature and due to be repaid, or as a result of downgrade/bankruptcy is due to be repaid as a result of an acceleration clause. ISDA 2003 Term: Accelerated or Matured.
   */
  acceleratedOrMatured?: boolean;
  /**
   * Indicates whether accrued interest is included (true) or not (false). For cash settlement this specifies whether quotations should be obtained inclusive or not of accrued interest. For physical settlement this specifies whether the buyer should deliver the obligation with an outstanding principal balance that includes or excludes accrued interest. ISDA 2003 Term: Include/Exclude Accrued Interest.
   */
  accruedInterest?: boolean;
  /**
   * A deliverable obligation characteristic. A loan that is freely assignable to a bank or financial institution without the consent of the Reference Entity or the guarantor, if any, of the loan (or the consent of the applicable borrower if a Reference Entity is guaranteeing the loan) or any agent. ISDA 2003 Term: Assignable Loan.
   */
  assignableLoan?: PCDeliverableObligationCharac;
  /**
   * Used in both obligations and deliverable obligations to represent a class or type of securities which apply. ISDA 2003 Term: Obligation Category/Deliverable Obligation Category.
   */
  category?: ObligationCategoryEnum;
  /**
   * A deliverable obligation characteristic. A loan that is capable of being assigned with the consent of the Reference Entity or the guarantor, if any, of the loan or any agent. ISDA 2003 Term: Consent Required Loan.
   */
  consentRequiredLoan?: PCDeliverableObligationCharac;
  /**
   * A deliverable obligation characteristic. A loan with a participation agreement whereby the buyer is capable of creating, or procuring the creation of, a contractual right in favour of the seller that provides the seller with recourse to the participation seller for a specified share in any payments due under the relevant loan which are received by the participation seller. ISDA 2003 Term: Direct Loan Participation.
   */
  directLoanParticipation?: LoanParticipation;
  /**
   * A free format string to specify any excluded obligations or deliverable obligations, as the case may be, of the reference entity or excluded types of obligations or deliverable obligations. ISDA 2003 Term: Excluded Obligations/Excluded Deliverable Obligations.
   */
  excluded?: string;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: Full Faith and Credit Obligation Liability.
   */
  fullFaithAndCreditObLiability?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: General Fund Obligation Liability.
   */
  generalFundObligationLiability?: boolean;
  /**
   * ISDA 1999 Term: Indirect Loan Participation. NOTE: Only applicable as a deliverable obligation under ISDA Credit 1999.
   */
  indirectLoanParticipation?: LoanParticipation;
  /**
   * An obligation and deliverable obligation characteristic. Indicates whether or not the obligation is quoted, listed or ordinarily purchased and sold on an exchange. ISDA 2003 Term: Listed.
   */
  listed?: boolean;
  /**
   * A deliverable obligation characteristic. An obligation that has a remaining maturity from the Physical Settlement Date of not greater than the period specified. ISDA 2003 Term: Maximum Maturity.
   */
  maximumMaturity?: Period;
  /**
   * A deliverable obligation characteristic. Any obligation that is not a bearer instrument. This applies to Bonds only and is meant to avoid tax, fraud and security/delivery provisions that can potentially be associated with Bearer Bonds. ISDA 2003 Term: Not Bearer.
   */
  notBearer?: boolean;
  /**
   * A deliverable obligation characteristic. In essence Not Contingent means the repayment of principal cannot be dependant on a formula/index, i.e. to prevent the risk of being delivered an instrument that may never pay any element of principal, and to ensure that the obligation is interest bearing (on a regular schedule). ISDA 2003 Term: Not Contingent.
   */
  notContingent?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Any obligation that is payable in any currency other than the domestic currency. Domestic currency is either the currency so specified or, if no currency is specified, the currency of (a) the reference entity, if the reference entity is a sovereign, or (b) the jurisdiction in which the relevant reference entity is organised, if the reference entity is not a sovereign. ISDA 2003 Term: Not Domestic Currency.
   */
  notDomesticCurrency?: NotDomesticCurrency;
  /**
   * An obligation and deliverable obligation characteristic. Any obligation other than an obligation that was intended to be offered for sale primarily in the domestic market of the relevant Reference Entity. This specifies that the obligation must be an internationally recognised bond. ISDA 2003 Term: Not Domestic Issuance.
   */
  notDomesticIssuance?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. If the reference entity is a Sovereign, this means any obligation that is not subject to the laws of the reference entity. If the reference entity is not a sovereign, this means any obligation that is not subject to the laws of the jurisdiction of the reference entity. ISDA 2003 Term: Not Domestic Law.
   */
  notDomesticLaw?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Any obligation that is not primarily (majority) owed to a Sovereign or Supranational Organisation. ISDA 2003 Term: Not Sovereign Lender.
   */
  notSovereignLender?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. An obligation that ranks at least equal with the most senior Reference Obligation in priority of payment or, if no Reference Obligation is specified in the related Confirmation, the obligations of the Reference Entity that are senior. ISDA 2003 Term: Not Subordinated.
   */
  notSubordinated?: boolean;
  /**
   * This element is used to specify any other obligations of a reference entity in both obligations and deliverable obligations. The obligations can be specified free-form. ISDA 2003 Term: Other Obligations of a Reference Entity.
   */
  othReferenceEntityObligations?: string;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: Revenue Obligation Liability.
   */
  revenueObligationLiability?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. The currency or currencies in which an obligation or deliverable obligation must be payable. ISDA 2003 Term: Specified Currency.
   */
  specifiedCurrency?: SpecifiedCurrency;
  /**
   * A deliverable obligation characteristic. An obligation that is transferable to institutional investors without any contractual, statutory or regulatory restrictions. ISDA 2003 Term: Transferable.
   */
  transferable?: boolean;
}
  
/**
 * A class to specify the application of Interest Amount with respect the Delivery Amount. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
 */
export interface DeliveryAmount {
  /**
   * The custom election that might be specified by the parties to the agreement.
   */
  customElection?: string;
  /**
   * The standard election as specified by an enumeration.
   */
  standardElection?: DeliveryAmountElectionEnum;
}
  
export interface DerivInstrmAttrbts {
  dlvryTp?: string;
  pricMltplr?: string;
  undrlygInstrm?: UndrlygInstrm;
  xpryDt?: string;
}
  
/**
 * The purpose of this class is to be extended by the Price and EquityValuation classes.
 */
export interface DeterminationMethod {
  /**
   * Specifies the method according to which an amount or a date is determined.
   */
  determinationMethod?: DeterminationMethodEnum;
}
  
/**
 * A data defining:  discounting information. The 2000 ISDA definitions, section 8.4. discounting (related to the calculation of a discounted fixed amount or floating amount) apply. This type must only be included if discounting applies.
 */
export interface DiscountingMethod {
  /**
   * A discount rate, expressed as a decimal, to be used in the calculation of a discounted amount. A discount amount of 5% would be represented as 0.05.
   */
  discountRate?: number;
  /**
   * A discount day count fraction to be used in the calculation of a discounted amount.
   */
  discountRateDayCountFraction?: FieldWithMeta<DayCountFractionEnum>;
  /**
   * The discounting method that is applicable.
   */
  discountingType?: DiscountingTypeEnum;
}
  
/**
 * A class to specify the election terms under which a party disputes (i) the Calculation Agent’s calculation of a Delivery Amount or a Return Amount, or (ii) the Value of any Transfer of Eligible Credit Support or Posted Credit Support. Parties can specify such election either through a business center time or through a custom election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (h): Dispute Resolution. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g): Dispute Resolution.
 */
export interface DisputeResolution {
  /**
   * The custom Resolution Time election that might be specified by the parties.
   */
  otherTerms?: string;
  /**
   * The time by which the dispute needs to be resolved, failure of which would trigger a recalculation alongside a process that is specified as part of the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (g)(i): Resolution Time. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (g)(i): Resolution Time.
   */
  resolutionTime?: BusinessCenterTime;
}
  
/**
 * A class to specify the Distributions and Interest Payment provisions applicable to the Japanese Law ISDA 2016 CSA for Initial Margin and the New York Law ISDA 2016 CSA for Variation Margin. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n): Distributions and Interest Payment (IM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i): Distributions and Interest Payment (VM).
 */
export interface DistributionAndInterestPayment {
  /**
   * When the alternative provision clause is specified, it means that the ISDA CSA Japanese Law provisions specified in Paragraph 6(c)(ii) don't apply and are overwritten by this election. When it is not specified, it means that the ISDA CSA Japanese Law provisions specified in Paragraph 6(c)(ii) apply. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(iv): Alternative to Interest Amount (IM) and Interest Payment (IM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(iv): Alternative to Interest Amount (VM) and Interest Payment (VM).
   */
  alternativeProvision?: string;
  /**
   * Daily interest compounding is applicable when True, and not applicable when False. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(iii): Other Interest Elections. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(iii): Other Interest Elections.
   */
  dailyInterestCompounding?: boolean;
  /**
   * To election to specify whether the Interest Adjustment is applicable and what its periodicity is. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(ii): Transfer of Interest Payment (VM) or application of Interest Amount (VM).
   */
  interestAdjustment?: InterestAdjustment;
  /**
   * The application of Interest Amount with respect to the Delivery Amount and the Return Amount. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
   */
  interestAmount?: InterestAmount;
  /**
   * The Interest Payment Netting is applicable when True. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii): Transfer of Interest Payment (IM) or application of Interest Amount (IM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(ii): Transfer of Interest Payment (VM) or application of Interest Amount (VM).
   */
  interestPaymentNetting?: boolean;
  /**
   * The Interest Payment Transfer is applicable when True. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii): Transfer of Interest Payment (IM) or application of Interest Amount (IM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(ii): Transfer of Interest Payment (VM) or application of Interest Amount (VM).
   */
  interestPaymentTransfer?: boolean;
  /**
   * The interest rate associated with initial or variation margin collateral, depending upon the type of credit agreement that this election is associated with. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(i): Interest Rate (IM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(i): Interest Rate (VM).
   */
  interestRate?: EligibleCurrencyInterestRate[];
  /**
   * Negative Interest is applicable when True, and not applicable when False. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(iii): Other Interest Elections. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (i)(iii): Other Interest Elections.
   */
  negativeInterest?: boolean;
}
  
/**
 * A class to specify the currency in which the dividends will be denominated, i.e. either in the dividend currency or in a currency specified as part of the contract.
 */
export interface DividendCurrency {
  /**
   * The currency in which the dividend is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * Reference to a currency specified elsewhere in the document
   */
  currencyReference?: ReferenceWithMeta<String>;
  /**
   * Specifies the method according to which the dividend is determined, e.g. the dividend currency.
   */
  determinationMethod?: DeterminationMethodEnum;
}
  
/**
 * A class to specify the dividend date by reference to another date, with the ability to apply and offset. This class doesn't exist in FpML and is meant to simplify the choice constraint associated with the DividendPaymentDate class.
 */
export interface DividendDateReference {
  /**
   * Specification of the dividend date using an enumeration, with values such as the pay date, the ex-date or the record date.
   */
  dateReference?: DividendDateReferenceEnum;
  /**
   * Only to be used when SharePayment has been specified in the dividendDateReference element. The number of Currency Business Days following the day on which the Issuer of the Shares pays the relevant dividend to holders of record of the Shares.
   */
  paymentDateOffset?: Offset;
}
  
/**
 * A class describing the date on which the dividend will be paid/received. This class is also used to specify the date on which the FX rate will be determined, when applicable.
 */
export interface DividendPaymentDate {
  adjustableDate?: AdjustableDate;
  dividendDateReference?: DividendDateReference;
}
  
/**
 * A class describing the dividend payout ratio associated with an equity underlier. In certain cases the actual ratio is not known on trade inception, and only general conditions are then specified.
 */
export interface DividendPayout {
  /**
   * Specifies the total actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.
   */
  dividendPayoutRatio?: number;
  /**
   * Specifies the cash actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.
   */
  dividendPayoutRatioCash?: number;
  /**
   * Specifies the non cash actual dividend payout ratio associated with the equity underlier. A ratio of 90% should be expressed at 0.90.
   */
  dividendPayoutRatioNonCash?: number;
}
  
/**
 * A class describing the conditions governing the payment of dividends to the receiver of the equity return, with the exception of the dividend payout ratio, which is defined for each of the underlying components.
 */
export interface DividendReturnTerms {
  /**
   * Specifies whether the dividend is paid with respect to the Dividend Period.
   */
  dividendAmountType?: DividendAmountTypeEnum;
  /**
   * Specifies the currency in which the dividend will be denominated, e.g. the dividend currency, or a specified currency. This class is not specified as such in FpML, which makes use of the CurrencyAndDeterminationMethod.model to specify such terms.
   */
  dividendCurrency?: DividendCurrency;
  /**
   * Defines the date on which the receiver of the equity return is entitled to the dividend.
   */
  dividendEntitlement?: DividendEntitlementEnum;
  /**
   * Specifies when the dividend will be paid to the receiver of the equity return. Has the meaning as defined in the ISDA 2002 Equity Derivatives Definitions. Is not applicable in the case of a dividend reinvestment election.
   */
  dividendPaymentDate?: DividendPaymentDate;
  /**
   * Specifies the dividend payout ratio associated with the underlier. In FpML 5.10 the payout is positioned at the underlier level, although there is an intent to reconsider this approach and position it at the leg level. This is approach adopted by the CDM.
   */
  dividendPayout?: DividendPayout;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Dividend Period as either the First Period or the Second Period. | 
   */
  dividendPeriod?: DividendPeriodEnum;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Dividend Period as such other period determined as provided in the related Confirmation. | 
   */
  dividendPeriodEffectiveDate?: ReferenceWithMeta<Date>;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Dividend Period as such other period determined as provided in the related Confirmation.
   */
  dividendPeriodEndDate?: ReferenceWithMeta<Date>;
  /**
   * Boolean element that defines whether the dividend will be reinvested or not.
   */
  dividendReinvestment?: boolean;
  /**
   * Determination of Gross Cash Dividend per Share.
   */
  excessDividendAmount?: DividendAmountTypeEnum;
  /**
   * Reference to the party which determines if dividends are extraordinary in relation to normal levels.
   */
  extraordinaryDividendsParty?: ReferenceWithMeta<Party>;
}
  
export interface Document {
  finInstrmRptgTxRpt?: FinInstrmRptgTxRpt;
}
  
/**
 * A class for specifying the legal agreements that govern the contract, either as a reference to such agreements when specified as part of the CDM, or through identification of some of the key terms of those documents, such as the type of document, the document identifier, the publisher, the document vintage and the agreement date.
 */
export interface Documentation {
  /**
   * The identification of the legal document(s) that govern the contract through some of the key terms of such document(s): type of document, the document identifier, the publisher, the document vintage and the agreement date.
   */
  documentationIdentification?: DocumentationIdentification;
  /**
   * The legal agreement(s) that govern the contract, when such agreement is specified as a reference part of the CDM.
   */
  legalAgreement?: ReferenceWithMeta<LegalAgreement>[];
}
  
/**
 * A class for defining the definitions that govern the document and should include the year and type of definitions referenced, along with any relevant documentation (such as master agreement) and the date it was signed.
 */
export interface DocumentationIdentification {
  /**
   * A human readable document related to this transaction, for example a confirmation.
   */
  attachment?: Resource[];
  /**
   * Specifies the details for a broker confirm.
   */
  brokerConfirmation?: BrokerConfirmation;
  /**
   * The definitions such as those published by ISDA that will define the terms of the trade.
   */
  contractualDefinitions?: FieldWithMeta<ContractualDefinitionsEnum>[];
  /**
   * A reference to a contractual matrix of elected terms/values (such as those published by ISDA) that shall be deemed to apply to the trade. The applicable matrix is identified by reference to a name and optionally a publication date. Depending on the structure of the matrix, an additional term (specified in the matrixTerm element) may be required to further identify a subset of applicable terms/values within the matrix.
   */
  contractualMatrix?: ContractualMatrix[];
  /**
   * A contractual supplement (such as those published by ISDA) that will apply to the trade.
   */
  contractualTermsSupplement?: ContractualTermsSupplement[];
  /**
   * The agreement executed between the parties and intended to govern collateral arrangement for all OTC derivatives transactions between those parties.
   */
  creditSupportAgreement?: CreditSupportAgreement;
  /**
   * The agreement executed between the parties and intended to govern all OTC derivatives transactions between those parties.
   */
  masterAgreement?: MasterAgreement;
  masterConfirmation?: MasterConfirmation;
  /**
   * Any other agreement executed between the parties.
   */
  otherAgreement?: OtherAgreement[];
}
  
/**
 * A data to:  define the adjusted dates associated with an early termination provision.
 */
export interface EarlyTerminationEvent {
  /**
   * The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business date convention.
   */
  adjustedCashSettlementPaymentDate?: Date;
  /**
   * The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.
   */
  adjustedCashSettlementValuationDate?: Date;
  /**
   * The early termination date that is applicable if an early termination provision is exercised. This date should already be adjusted for any applicable business day convention.
   */
  adjustedEarlyTerminationDate?: Date;
  /**
   * The date on which option exercise takes place. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExerciseDate?: Date;
  /**
   * The date on which the exercise fee amount is paid. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExerciseFeePaymentDate?: Date;
  meta?: MetaFields;
}
  
/**
 * A data defining:  an early termination provision for a swap. This early termination is at fair value, i.e. on termination the fair value of the product must be settled between the parties.
 */
export interface EarlyTerminationProvision {
  /**
   * A mandatory early termination provision to terminate the swap at fair value.
   */
  mandatoryEarlyTermination?: MandatoryEarlyTermination;
  /**
   * Period after trade date of the mandatory early termination date.
   */
  mandatoryEarlyTerminationDateTenor?: Period;
  meta?: MetaFields;
  /**
   * An option for either or both parties to terminate the swap at fair value.
   */
  optionalEarlyTermination?: OptionalEarlyTermination;
  /**
   * Definition of the first early termination date and the frequency of the termination dates subsequent to that. American exercise is defined by having a frequency of one day.
   */
  optionalEarlyTerminationParameters?: ExercisePeriod;
}
  
/**
 *  This class represents the full set of price-forming features associated with a contractual product: the payout component, the notional/quantity, the effective and termination date and the date adjustment provisions when applying uniformily across the payout components. This class also includes the legal provisions which have valuation implications: cancelable provision, extendible provision, early termination provision and extraordinary events specification. A rosettaKeyValue is associated to the contractual product economic terms for the purpose of supporting hash-based reconciliations thanks to the fact that its computation doesn't include meta data, such as identifiers, references, schemes and other rosettaKey artefacts. The rosettaKeyValue default implementation is available as part of the generated code as org.isda.cdm.rosettakey.RosettaKeyValueHashFunction.
 */
export interface EconomicTerms {
  /**
   * The business day adjustment convention when it applies across all the payout components. This specification of the business day convention and financial business centers is used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.
   */
  dateAdjustments?: BusinessDayAdjustments;
  /**
   * Parameters specifying provisions relating to the optional and mandatory early termination of a swap transaction.
   */
  earlyTerminationProvision?: EarlyTerminationProvision;
  /**
   * The first day of the terms of the trade. This day may be subject to adjustment in accordance with a business day convention.
   */
  effectiveDate?: AdjustableOrRelativeDate;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Extraordinary Events.
   */
  extraordinaryEvents?: ExtraordinaryEvents;
  /**
   * Cancelable and/or extendible provisions.
   */
  optionProvision?: OptionProvision;
  /**
   * The payout specifies the future cashflow computation methodology which characterizes a financial product.
   */
  payout?: Payout;
  rosettaKeyValue?: string;
  /**
   * The last day of the terms of the trade. This date may be subject to adjustments in accordance with the business day convention. It can also be specified in relation to another scheduled date (e.g. the last payment date).
   */
  terminationDate?: AdjustableOrRelativeDate;
}
  
/**
 * A class to specify the party elective amounts which can be used for the purpose of specifying elections such as the ISDA CSA Threshold and Minimum Transfer Amount.
 */
export interface ElectiveAmountElection {
  /**
   * The elective amount when expressed as a currency amount. The associated PartyElectiveAmount_amount data rule enforces that the currency amount is actually greater than 0.
   */
  amount?: Money;
  /**
   * The elective amount when expressed as a custom election by the party.
   */
  customElection?: string;
  /**
   * The elective amount when specified as 0 with no associated currency. The associated PartyElectiveAmount_noAmount data rule enforces that the number is actually equal to 0.
   */
  noAmount?: number;
  /**
   * The elective party.
   */
  party?: string;
}
  
/**
 * A class to specify the conditions under which a party and its custodian(s) are entitled to hold collateral. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h)(i): Eligibility to Hold Posted Collateral (VM) Custodians (VM).
 */
export interface EligibilityToHoldCollateral {
  /**
   * The restrictions that might be required by a party from the other party's custodian agent to hold its posted collateral.
   */
  custodianTerms?: CustodianTerms;
  /**
   * The restrictions that might be required by a party from the other party in terms of country(ies) where collateral can be held.
   */
  eligibleCountry?: FieldWithMeta<String>[];
  /**
   * The condition(s) required by a party from the other party to hold its posted collateral.
   */
  partyTerms?: HoldingPostedCollateralEnum[];
}
  
/**
 * The collateral eligibility as a function of the types of asset, the maturity and rating terms.
 */
export interface EligibleCollateral {
  agencyRating?: AgencyRating;
  /**
   * Underlying denominated currency of instrument.
   */
  denominatedCurrency?: FieldWithMeta<String>[];
  instrumentInformation?: CollateralInstrumentInformation;
  maturityRange?: PeriodRange;
  valuationPercentage?: CollateralValuationPercentage;
}
  
/**
 * A class to specify the eligible collateral elections by the respective parties to the Credit Support Annex for Variation Margin. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(ii): Eligible Collateral (VM).
 */
export interface EligibleCollateralVariationMargin {
  /**
   * The parties' eligible collateral elections.
   */
  partyElection?: EligibleCollateralVariationMarginElection;
}
  
/**
 * A class to specify the parties' elections with respect to the eligible collateral for each of the respective parties when acting as a pledgor/chargor/obligor. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(ii): Eligible Collateral (VM).
 */
export interface EligibleCollateralVariationMarginElection {
  /**
   * The eligible collateral for the specified party (acting as the Pledgor in the New York Law agreement, as the Chargor in the English Law deed and as the Obligor in the Japanese Law agreement). ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(ii): Eligible Collateral (VM).
   */
  eligibleCollateral?: EligibleCollateral[];
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify the interest rate associated with initial margin collateral. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n): Distributions and Interest Payment (IM).
 */
export interface EligibleCurrencyInterestRate {
  actual365Currency?: string;
  /**
   * The eligible currency.
   */
  currency?: FieldWithMeta<String>;
  /**
   * The interest rate associated with the eligible currency.
   */
  interestRate?: number;
}
  
/**
 * A class to specify an equity as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface Equity extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 * A class for defining the merger events and their treatment.
 */
export interface EquityCorporateEvents {
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Merger Event (S-F-C) shall occur if a Merger Event occurs and the consideration for the relevant Security consists solely of Combined Consideration. | The consideration paid for the original shares following the Merger Event consists of both cash/securities and new shares.
   */
  shareForCombined?: ShareExtraordinaryEventEnum;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Merger Event (S-F-O) shall occur if a Merger Event occurs and the consideration for the relevant Security consists solely of Other Consideration. | The consideration paid for the original shares following the Merger Event consists wholly of cash/securities other than new shares.
   */
  shareForOther?: ShareExtraordinaryEventEnum;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Merger Event (S-F-S) shall occur if a Merger Event occurs and the consideration for the relevant Security consists solely of Combined Consideration. | The consideration paid for the original shares following the Merger Event consists wholly of new shares.
   */
  shareForShare?: ShareExtraordinaryEventEnum;
}
  
/**
 * Specification for General Terms and Elections of an Equity Master Confirmation that is applicable across multiple Equity confirmations and is referenced by each of these confirmations, an example of which being the 2018 ISDA CDM Equity Confirmation for Security Equity Swap.
 */
export interface EquityMasterConfirmation extends MasterConfirmationBase {
}
  
/**
 *  The equity payout specification terms. The associated rosettaKey denotes the ability to associate a hash value to the EquityPayout instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface EquityPayout extends PayoutBase {
  /**
   * The calculation period dates schedule.
   */
  calculationPeriodDates?: CalculationPeriodDates;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Dividend Obligations
   */
  dividendReturnTerms?: DividendReturnTerms;
  meta?: MetaFields;
  payerReceiver?: PayerReceiver;
  /**
   * The payment date schedule, as defined by the parameters that are needed to specify it, either in a parametric way or by reference to another schedule of dates (e.g. the valuation dates).
   */
  paymentDates?: PaymentDates;
  /**
   * Performance calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 75. 'Equity Performance'. Cumulative performance is used as a notional multiplier factor on both legs of an Equity Swap.
   */
  performance?: number;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing
   */
  priceReturnTerms?: PriceReturnTerms;
  /**
   * Rate of Return calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 139. 'Rate Of Return'.
   */
  rateOfReturn?: number;
  /**
   * Specifies the type of return associated with the equity payout.
   */
  returnType?: ReturnTypeEnum;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Settlement.
   */
  settlementTerms?: SettlementTerms;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Security
   */
  underlier?: Underlier;
  /**
   * Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).
   */
  payoutQuantity?: ResolvablePayoutQuantity;
}
  
/**
 * Specification for the General Terms and Relationship Supplement Elections as provided in the 2018 ISDA CDM Equity Confirmation for Security Equity Swap.
 */
export interface EquitySwapMasterConfirmation2018 extends EquityMasterConfirmation {
  /**
   * The parameters used to generate the 'Equity Valuation Dates' schedule, including the Effective Date and Termination Date for the Swap.
   */
  equityCalculationPeriod?: CalculationPeriodDates;
  /**
   * The parameters used to generate the payment date schedule, relative to the equityCalculationPeriod. Part 1 Section 12, 'Definitions', of the 2018 ISDA CDM Equity Confirmation. Para 73: 'Equity Cash Settlement Date' means each date falling one Settlement Cycle after an Equity Valuation Date; provided that if any such date is not a Settlement Currency Business Day, then such date shall be adjusted per Following Day Adjustment.
   */
  equityCashSettlementDates?: PaymentDates;
  /**
   * Part 1 Section 3, 'Floating Obligations', of the 2018 ISDA CDM Equity Confirmation. Para 3.3, 'Linear Interpolation': If the initial Calculation Period is not equal to the Designated Maturity, then the Linear Interpolation Election shall be as specified in the Relationship Supplement, unless otherwise specified in the Transaction Supplement.
   */
  linearInterpolationElection?: InterpolationMethodEnum;
  /**
   * Part 1 Section 5, 'Pricing', of the 2018 ISDA CDM Equity Confirmation, Para 5.1, 'Determining Prices': Each price in relation to a Pricing Date shall be determined pursuant to the specified Pricing Method. The relevant price specified under the column header 'Price' for a corresponding Pricing Date specified under the column header 'Pricing Date' shall be determined using the corresponding method specified under the column header 'Pricing Method'. Pricing Method for the final Equity Valuation Date shall be specified by the Final EVD Pricing Election and Pricing Method for any other Equity Valaution Date shall be 'Securities Close Pricing (Official)'
   */
  pricingMethodElection?: PriceReturnTerms;
  /**
   * Part 1 Section 8, 'Settlement', of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap. All Settlements are in Cash.
   */
  settlementTerms?: SettlementTerms;
  /**
   * Part 1 Section 4, 'Dividend Obligations', of the 2018 ISDA CDM Equity Confirmation, Para 4.2 'Dividend Returns': The Type Of Swap Election shall be 'Total Return', unless otherwise specified (as alternative 'Price Return') in the Transaction Supplement.
   */
  typeOfSwapElection?: ReturnTypeEnum;
}
  
/**
 * A class for defining how and when an equity option or equity swap is to be valued.
 */
export interface EquityValuation extends CashPrice {
  /**
   * Specifies the method according to which an amount or a date is determined.
   */
  determinationMethod?: DeterminationMethodEnum;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date
   */
  valuationDate?: AdjustableOrRelativeDate;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date
   */
  valuationDates?: AdjustableOrRelativeDates;
  /**
   * The specific time of day at which the calculation agent values the underlying. The SpecificTime is the only case when the valuationTime (time + business center location – e.g. 10:00:00 USNY) should be provided. You should be able to provide just the valuationTime without valuationTimeType, which infer that this is a specific time.
   */
  valuationTime?: BusinessCenterTime;
  /**
   * The time of day at which the calculation agent values the underlying, for example the official closing time of the exchange.
   */
  valuationTimeType?: TimeTypeEnum;
  /**
   * Specifies the accrued interest that are part of the dirty price in the case of a fixed income security or a convertible bond. Expressed in percentage of the notional.
   */
  accruedInterest?: number;
  /**
   * Specifies the price as a cashflow amount embedded as part of a a contractual product.
   */
  cashflowAmount?: Money;
  /**
   * Specifies the clean price of the underlier (e.g. excluding accrued interest), net of commissions.
   */
  cleanNetPrice?: ActualPrice;
  /**
   * Specifies the price of the underlier, before commissions.
   */
  grossPrice?: ActualPrice;
  /**
   * Specifies the dirty price of the underlier (e.g. including accrued interest), net of commissions.
   */
  netPrice?: ActualPrice;
}
  
/**
 * A class defining the exercise period for a European style option together with any rules governing the notional amount of the underlying which can be exercised on any given exercise date and any associated exercise fees.
 */
export interface EuropeanExercise {
  /**
   * The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) on the expiration date.
   */
  earliestExerciseTime?: BusinessCenterTime;
  /**
   * A fee to be paid on exercise. This could be represented as an amount or a rate and notional reference on which to apply the rate.
   */
  exerciseFee?: ExerciseFee;
  /**
   * The last day within an exercise period for an American style option. For a European style option it is the only day within the exercise period.
   */
  expirationDate?: AdjustableOrRelativeDate;
  /**
   * The latest time for exercise on expirationDate.
   */
  expirationTime?: BusinessCenterTime;
  meta?: MetaFields;
  /**
   * As defined in the 2000 ISDA Definitions, Section 12.3. Partial Exercise, the buyer of the option has the right to exercise all or less than all the notional amount of the underlying swap on the expiration date, but may not exercise less than the minimum notional amount, and if an integral multiple amount is specified, the notional amount exercised must be equal to, or be an integral multiple of, the integral multiple amount.
   */
  partialExercise?: PartialExercise;
  /**
   * The date on the underlying set by the exercise of an option. What this date is depends on the option (e.g. in a swaption it is the swap effective date, in an extendible/cancelable provision it is the swap termination date).
   */
  relevantUnderlyingDate?: AdjustableOrRelativeDates;
}
  
/**
 * The set of operational and positional effects associated with a lifecycle event, alongside the reference to the contract reference(s) that is subject to the event (and is positioned in the before state of the event primitive).
 */
export interface EventEffect {
  /**
   * A pointer to the contract effect(s), an example of such being the outcome of a new trade, swaption exercise or novation event.
   */
  contract?: ReferenceWithMeta<Contract>[];
  /**
   * A pointer to the contract(s) to which the event effect(s) apply, i.e. in the before event state.
   */
  effectedContract?: ReferenceWithMeta<Contract>[];
  /**
   * A pointer to the execution(s) to which the event effect(s) apply, i.e. in the before event state.
   */
  effectedExecution?: ReferenceWithMeta<Execution>[];
  /**
   * A pointer to the execution effect(s), an example of such being a clearing submission event when taking place on the back of an execution.
   */
  execution?: ReferenceWithMeta<Execution>[];
  /**
   * A pointer to the product identifier effect(s), an example of such being the outcome of the physical exercise of a bond option.
   */
  productIdentifier?: ReferenceWithMeta<ProductIdentifier>[];
  /**
   * A pointer to the transfer effect(s), either a cash, security or other asset.
   */
  transfer?: ReferenceWithMeta<TransferPrimitive>[];
}
  
/**
 * A class which combines several events for testing purposes.
 */
export interface EventTestBundle {
  computedAmount?: ComputedAmount[];
  event?: WorkflowStep[];
}
  
/**
 * A class to represent the various set of timestamps that can be associated with lifecycle events, as a collection of [dateTime, qualifier].
 */
export interface EventTimestamp {
  /**
   * The CDM specifies that the zoned date time is to be expressed in accordance with ISO 8601, either as UTC as an offset to UTC.
   */
  dateTime?: Date;
  /**
   * The timestamp qualifier is specified through an enumeration because the experience of integrating the DTCC and CME data representations suggests that a wide set of timestamps are currently utilized among service providers, while there is not at present an objective set of criteria that could help suggest a defined set of timestamps as part of the CDM. At some future point, one possible baseline could be developed from the review of the set of timestamps specified across regulatory regimes and regulations (incl. regulations such as high frequency trading). Also, the integration with a further set of implementations and the specification of business workflows such as clearing as part of the CDM development should help confirm the implementation approach in this respect.
   */
  qualification?: EventTimestampQualificationEnum;
}
  
/**
 * A class that is used for describing the exchange rate for a particular transaction.
 */
export interface ExchangeRate {
  /**
   * An optional element that allow for definition of the currency exchange rates used to cross between the traded currencies for non-base currency FX contracts.
   */
  crossRate?: CrossRate[];
  /**
   * An optional element used for deals consummated in the FX Forwards market. Forward points represent the interest rate differential between the two currencies traded and are quoted as a premium or a discount. Forward points are added to, or subtracted from, the spot rate to create the rate of the forward trade.
   */
  forwardPoints?: number;
  /**
   * An optional element that documents the size of point (pip) in which a rate was quoted (or in this case, forwardPoints are calculated). Point (pip) size varies by currency pair: major currencies are all traded in points of 0.0001, with the exception of JPY which has a point size of 0.01. The FpML PointValue type is constrained such that the factor can only be values of 10^n, where n <= 0, this constraint is not enforced here and is left to the implementor.
   */
  pointValue?: number;
  /**
   * Defines the two currencies for an FX trade and the quotation relationship between the two currencies.
   */
  quotedCurrencyPair?: QuotedCurrencyPair;
  /**
   * The rate of exchange between the two currencies of the leg of a deal. Must be specified with a quote basis.
   */
  rate?: number;
  /**
   * An element used for FX forwards and certain types of FX OTC options. For deals consummated in the FX Forwards Market, this represents the current market rate for a particular currency pair. For barrier and digital/binary options, it can be useful to include the spot rate at the time the option was executed to make it easier to know whether the option needs to move 'up' or 'down' to be triggered.
   */
  spotRate?: number;
}
  
/**
 * A class to specify an ETF as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface ExchangeTradedFund extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
export interface ExctgPrsn {
  prsn?: Prsn;
}
  
export interface ExecutingEntity {
  addressOfBranch?: Address;
  addressOfIncorporation?: Address;
  isInvestmentFirm?: boolean;
}
  
/**
 *  A class to specify an execution, which consists essentially in the economic terms which are agreed between the parties, alongside with the qualification of the type of execution. The associated rosettaKey denotes the ability to associate a hash value to the respective Execution instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface Execution {
  /**
   * The qualification of what led to the execution closure alongside with the dates on which this closure takes effect.
   */
  closedState?: ClosedState;
  /**
   * Specifies the type of execution, e.g. via voice, electronically...
   */
  executionType?: ExecutionTypeEnum;
  /**
   * The execution venue identification, when applicable.
   */
  executionVenue?: LegalEntity;
  /**
   * The identifier(s) associated with the execution.
   */
  identifier?: Identifier[];
  meta?: MetaFields;
  /**
   * The party reference is optional because positioned as part of the Event class when the execution is specified as part of such context.
   */
  party?: ReferenceWithMeta<Party>[];
  /**
   * The role(s) that party(ies) may have in relation to the execution, further to the principal parties (i.e payer/receive or buyer/seller) to it.
   */
  partyRole?: PartyRole[];
  /**
   * The execution settlement terms, which is applicable for products such as securities
   */
  settlementTerms?: SettlementTerms;
  /**
   * The product traded as part of this execution, including quantity and price
   */
  tradableProduct?: TradableProduct;
  /**
   * The trade/execution date.
   */
  tradeDate?: FieldWithMeta<Date>;
}
  
/**
 * Specification of the primitive event for an execution, with 'after' state being an ExecutionState and the 'before' state being Null. It is expected that the 'before' state will be adjusted or deprecated once the CDM scope is extended to the pre-execution space.
 */
export interface ExecutionPrimitive {
  /**
   * The after state corresponds to the execution between the parties. In the case of an execution on a contractual product, some additional characteristics may need to be specified to get a fully-formed contract, for instance when the executing party acts as an agent, as is the case in an allocation scenario. This is the purpose of the 'ContractFormation' primitive event.
   */
  after?: ExecutionState;
  /**
   * The 0 cardinality reflects the fact that there is no execution in the before state of an execution primitive. As noted in the definition associated with the class, this is expected to change once the CDM scope is extended to the pre-execution space.
   */
  before?: ReferenceWithMeta<ExecutionState>[];
}
  
/**
 * A class to specify an execution instantiation with respect to the before and/or after state of lifecycle events.
 */
export interface ExecutionState {
  execution?: Execution;
  meta?: MetaFields;
}
  
/**
 * A data defining:  the adjusted dates associated with a particular exercise event.
 */
export interface ExerciseEvent {
  /**
   * The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business day convention.
   */
  adjustedCashSettlementPaymentDate?: Date;
  /**
   * The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.
   */
  adjustedCashSettlementValuationDate?: Date;
  /**
   * The date on which the option exercise takes place. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExerciseDate?: Date;
  /**
   * The date on which the exercise fee amount is paid. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExerciseFeePaymentDate?: Date;
  /**
   * The effective date of the underlying swap associated with a given exercise date. This date should already be adjusted for any applicable business day convention.
   */
  adjustedRelevantSwapEffectiveDate?: Date;
  meta?: MetaFields;
}
  
/**
 * A class defining the fee payable on exercise of an option. This fee may be defined as an amount or a percentage of the notional exercised. As a difference with FpML, it extends the BuyerSeller class.
 */
export interface ExerciseFee extends BuyerSeller {
  /**
   * The amount of fee to be paid on exercise. The fee currency is that of the referenced notional.
   */
  feeAmount?: number;
  /**
   * The date on which exercise fee(s) will be paid. It is specified as a relative date.
   */
  feePaymentDate?: RelativeDateOffset;
  /**
   * A fee represented as a percentage of some referenced notional. A percentage of 5% would be represented as 0.05.
   */
  feeRate?: number;
  /**
   * A pointer style reference to the associated notional schedule defined elsewhere in the document.
   */
  notionalReference?: ReferenceWithMeta<Money>;
  /**
   * A reference to the account that buys this instrument.
   */
  buyerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.
   */
  buyerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that sells this instrument.
   */
  sellerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.
   */
  sellerPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to define a fee or schedule of fees to be payable on the exercise of an option. This fee may be defined as an amount or a percentage of the notional exercised. As a difference with FpML, it extends the BuyerSeller class.
 */
export interface ExerciseFeeSchedule extends PayerReceiver {
  /**
   * The exercise fee amount schedule. The fees are expressed as currency amounts. The currency of the fee is assumed to be that of the notional schedule referenced.
   */
  feeAmountSchedule?: AmountSchedule;
  /**
   * The date on which exercise fee(s) will be paid. It is specified as a relative date.
   */
  feePaymentDate?: RelativeDateOffset;
  /**
   * The exercise free rate schedule. The fees are expressed as percentage rates of the notional being exercised. The currency of the fee is assumed to be that of the notional schedule referenced.
   */
  feeRateSchedule?: Schedule;
  /**
   * A pointer style reference to the associated notional schedule defined elsewhere in the document.
   */
  notionalReference?: ReferenceWithMeta<Money>;
  /**
   * A reference to the account responsible for making the payments defined by this structure.
   */
  payerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party responsible for making the payments defined by this structure.
   */
  payerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that receives the payments corresponding to this structure.
   */
  receiverAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that receives the payments corresponding to this structure.
   */
  receiverPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class defining to whom and where notice of execution should be given. The partyReference refers to one of the principal parties of the trade. If present the exerciseNoticePartyReference refers to a party, other than the principal party, to whom notice should be given.
 */
export interface ExerciseNotice {
  /**
   * The business center.
   */
  businessCenter?: FieldWithMeta<BusinessCenterEnum>;
  /**
   * The party referenced is the party to which notice of exercise should be given by the buyer.
   */
  exerciseNoticePartyReference?: ReferenceWithMeta<Party>;
  /**
   * The party referenced has allocated the trade identifier.
   */
  partyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * The exercise outcome combines the option contract (which states would be 'Exercised' in case of a full exercise and which would have a reduced notional in case of partial exercise) and either a physical or partial exercise.
 */
export interface ExerciseOutcome {
  cashExercise?: CashExercise;
  contract?: Contract;
  physicalExercise?: PhysicalExercise;
}
  
/**
 * This defines the time interval to the start of the exercise period, i.e. the earliest exercise date, and the frequency of subsequent exercise dates (if any).
 */
export interface ExercisePeriod {
  /**
   * The time interval to the first (and possibly only) exercise date in the exercise period.
   */
  earliestExerciseDateTenor?: Period;
  /**
   * The frequency of subsequent exercise dates in the exercise period following the earliest exercise date. An interval of 1 day should be used to indicate an American style exercise period.
   */
  exerciseFrequency?: Period;
  meta?: MetaFields;
}
  
/**
 * This primitive leverages the FpML OptionExercise construct, except for the exerciseTiming which is deemed as associated to a request for exercise that is meant to take place, as opposed to the actual exercise event.
 */
export interface ExercisePrimitive {
  after?: ExerciseOutcome;
  before?: ReferenceWithMeta<ContractState>;
  exerciseDate?: AdjustableOrAdjustedDate;
  exerciseTime?: BusinessCenterTime;
  fullExercise?: boolean;
}
  
/**
 * A class describing how notice of exercise should be given. This can be either manual or automatic.
 */
export interface ExerciseProcedure {
  /**
   * If automatic is specified, then the notional amount of the underlying swap not previously exercised under the swaption will be automatically exercised at the expiration time on the expiration date if at such time the buyer is in-the-money, provided that the difference between the settlement rate and the fixed rate under the relevant underlying swap is not less than the specified threshold rate. The term in-the-money is assumed to have the meaning defining in the 2000 ISDA Definitions, Section 17.4 In-the-money.
   */
  automaticExercise?: AutomaticExercise;
  /**
   * A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.
   */
  followUpConfirmation?: boolean;
  /**
   * Has the meaning defined as part of the 1997 ISDA Government Bond Option Definitions, section 4.5 Limited Right to Confirm Exercise. If present, (i) the Seller may request the Buyer to confirm its intent if not done on or before the expiration time on the Expiration date (ii) specific rules will apply in relation to the settlement mode.
   */
  limitedRightToConfirm?: boolean;
  /**
   * Specifies that the notice of exercise must be given by the buyer to the seller or seller's agent.
   */
  manualExercise?: ManualExercise;
  /**
   * Typically applicable to the physical settlement of bond and convertible bond options. If present, means that the party required to deliver the bonds will divide those to be delivered as notifying party desires to facilitate delivery obligations.
   */
  splitTicket?: boolean;
}
  
/**
 * A data defining:  an option to extend an existing swap transaction on the specified exercise dates for a term ending on the specified new termination date. As a difference from FpML, it extends the BuyerSeller class, which represents the BuyerSeller.model.
 */
export interface ExtendibleProvision extends BuyerSeller {
  /**
   * American exercise. FpML implementations consists in an exercise substitution group.
   */
  americanExercise?: AmericanExercise;
  /**
   * Bermuda exercise. FpML implementations consists in an exercise substitution group.
   */
  bermudaExercise?: BermudaExercise;
  callingParty?: CallingPartyEnum;
  /**
   * European exercise. FpML implementations consists in an exercise substitution group.
   */
  europeanExercise?: EuropeanExercise;
  /**
   * Definition of the party to whom notice of exercise should be given.
   */
  exerciseNotice?: ExerciseNotice;
  /**
   * The adjusted dates associated with an extendible provision. These dates have been adjusted for any applicable business day convention.
   */
  extendibleProvisionAdjustedDates?: ExtendibleProvisionAdjustedDates;
  /**
   * A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.
   */
  followUpConfirmation?: boolean;
  /**
   * A reference to the account that buys this instrument.
   */
  buyerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.
   */
  buyerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that sells this instrument.
   */
  sellerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.
   */
  sellerPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A data defining:  the adjusted dates associated with a provision to extend a swap.
 */
export interface ExtendibleProvisionAdjustedDates {
  /**
   * The adjusted dates associated with a single extendible exercise date.
   */
  extensionEvent?: ExtensionEvent[];
}
  
/**
 * A data to:  define the adjusted dates associated with an individual extension event.
 */
export interface ExtensionEvent {
  /**
   * The date on which option exercise takes place. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExerciseDate?: Date;
  /**
   * The termination date if an extendible provision is exercised. This date should already be adjusted for any applicable business day convention.
   */
  adjustedExtendedTerminationDate?: Date;
  meta?: MetaFields;
}
  
/**
 * Where the underlying is shares, defines market events affecting the issuer of those shares that may require the terms of the transaction to be adjusted.
 */
export interface ExtraordinaryEvents {
  /**
   * 2002 ISDA Equity Derivatives Definitions: Additional Disruption Events | 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Additional Disruption Events means each Additional Disruption Event specified in the Confirmation Side Letter. For the avoidance of doubt, each Additional Disruption Event shall be an Extraordinary Event.
   */
  additionalDisruptionEvents?: AdditionalDisruptionEvents;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Composition of Combined Consideration | 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Combined Consideration | If present and true, then composition of combined consideration is applicable.
   */
  compositionOfCombinedConsideration?: boolean;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Delisting | 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Delisting means Delisting (Broad Relisting) or Delisting (Narrow Relisting), as specified in the Relationship Supplement.
   */
  delisting?: NationalizationOrInsolvencyOrDelistingEventEnum;
  /**
   * If true, failure to deliver is applicable.
   */
  failureToDeliver?: boolean;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Adjustments to Indices | 
   */
  indexAdjustmentEvents?: IndexAdjustmentEvents;
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Merger Event shall occur if a Merger occurs and the Merger Date is on or before the final Equity Valuation Date | Occurs when the underlying ceases to exist following a merger between the Issuer and another company.
   */
  mergerEvents?: EquityCorporateEvents;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Nationalization and Insolvency | 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Nationalization shall occur if all the Securities or all or substantially all the assets of an Issuer are nationalized, expropriated or are otherwise required to be transferred to any governmental agency, authority, entity or instrumentality thereof. Insolvency Filing means as defined in the Confirmation Side Letter.
   */
  nationalizationOrInsolvency?: NationalizationOrInsolvencyOrDelistingEventEnum;
  representations?: Representations;
  /**
   * 2002 ISDA Equity Derivatives Definitions: Tender Offers | 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Tender Offer Event
   */
  tenderOfferEvents?: EquityCorporateEvents;
}
  
export interface FailureToPay {
  /**
   * Indicates whether the failure to pay provision is applicable.
   */
  applicable?: boolean;
  /**
   * If this element is specified, indicates whether or not a grace period extension is applicable. ISDA 2003 Term: Grace Period Extension Applicable.
   */
  gracePeriodExtension?: GracePeriodExtension;
  /**
   * Specifies a threshold for the failure to pay credit event. Market standard is USD 1,000,000 (JPY 100,000,000 for Japanese Yen trades) or its equivalent in the relevant obligation currency. This is applied on an aggregate basis across all Obligations of the Reference Entity. Intended to prevent technical/operational errors from triggering credit events. ISDA 2003 Term: Payment Requirement
   */
  paymentRequirement?: Money;
}
  
/**
 * The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.
 */
export interface FallbackReferencePrice {
  /**
   * The calculation agent will decide the rate.
   */
  calculationAgentDetermination?: CalculationAgent;
  /**
   * This settlement rate option will be used in its place.
   */
  fallBackSettlementRateOption?: FieldWithMeta<SettlementRateOptionEnum>[];
  /**
   * Request rate quotes from the market. This element is set as type Empty in FpML. When present, the FpML synonym is mapped to a value True in the CDM.
   */
  fallbackSurveyValuationPostponement?: boolean;
  /**
   * Specifies how long to wait to get a quote from a settlement rate option upon a price source disruption.
   */
  valuationPostponement?: ValuationPostponement;
}
  
/**
 * Description to be added
 */
export interface FallbackToMandatoryMethodDays {
  /**
   * The number of days after which Mandatory Method becomes applicable
   */
  fallbackToMandatoryMethodDays?: number;
}
  
/**
 * Payment made following trigger occurrence.
 */
export interface FeaturePayment {
  /**
   * The monetary quantity in currency units.
   */
  amount?: number;
  /**
   * The currency in which an amount is denominated.
   */
  currency?: FieldWithMeta<String>;
  /**
   * The trigger level percentage.
   */
  levelPercentage?: number;
  meta?: MetaFields;
  /**
   * This attribute doesn't exist as part of the FpML construct, which makes use of the PayerReceiver.model group.
   */
  payerReceiver?: PayerReceiver;
  /**
   * The feature payment date.
   */
  paymentDate?: AdjustableOrRelativeDate;
  /**
   * The feature payment time.
   */
  time?: TimeTypeEnum;
}
  
export interface FinInstrm {
  othr?: Othr;
}
  
export interface FinInstrmGnlAttrbts {
  clssfctnTp?: string;
  fullNm?: string;
  ntnlCcy?: string;
}
  
export interface FinInstrmRptgTxRpt {
  tx?: Tx;
}
  
/**
 * A data to:  define business date convention adjustment to final payment period per leg.
 */
export interface FinalCalculationPeriodDateAdjustment {
  /**
   * Override business date convention. This takes precedence over leg level information.
   */
  businessDayConvention?: BusinessDayConventionEnum;
  /**
   * Reference to the unadjusted cancellation effective dates.
   */
  relevantUnderlyingDateReference?: ReferenceWithMeta<AdjustableOrRelativeDates>;
  /**
   * Reference to the leg, where date adjustments may apply.
   */
  swapStreamReference?: ReferenceWithMeta<InterestRatePayout>;
}
  
/**
 * Data to specify a fixed interest rate price.
 */
export interface FixedInterestRate {
  rate?: number;
}
  
/**
 * Type defining the specification for a fixed rate.
 */
export interface FixedRateSpecification extends RateSpecificationBase {
  meta?: MetaFields;
  /**
   * The fixed rate or fixed rate schedule expressed as explicit fixed rates and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.
   */
  rateSchedule?: Schedule;
  assetIdentifier?: AssetIdentifier;
}
  
/**
 * A class to specify the ISDA terms relating to the floating rate payment events and the implied additional fixed payments, applicable to the credit derivatives transactions on mortgage-backed securities with pay-as-you-go or physical settlement.
 */
export interface FloatingAmountEvents {
  /**
   * Specifies the events that will give rise to the payment additional fixed payments.
   */
  additionalFixedPayments?: AdditionalFixedPayments;
  /**
   * A floating rate payment event. Corresponds to the failure by the Reference Entity to pay an expected principal amount or the payment of an actual principal amount that is less than the expected principal amount. ISDA 2003 Term: Failure to Pay Principal.
   */
  failureToPayPrincipal?: boolean;
  /**
   * Specifies the floating amount provisions associated with the floatingAmountEvents.
   */
  floatingAmountProvisions?: FloatingAmountProvisions;
  /**
   * A floating rate payment event. Results from the fact that losses occur to the underlying instruments that do not result in reductions of the outstanding principal of the reference obligation.
   */
  impliedWritedown?: boolean;
  /**
   * A floating rate payment event. With respect to any Reference Obligation Payment Date, either (a) the non-payment of an Expected Interest Amount or (b) the payment of an Actual Interest Amount that is less than the Expected Interest Amount. ISDA 2003 Term: Interest Shortfall.
   */
  interestShortfall?: InterestShortFall;
  /**
   * A floating rate payment event. Results from the fact that the underlier writes down its outstanding principal amount. ISDA 2003 Term: Writedown.
   */
  writedown?: boolean;
}
  
export interface FloatingAmountProvisions {
  /**
   * As specified by the ISDA Standard Terms Supplement for use with trades on mortgage-backed securities. The presence of the element with value set to 'true' signifies that the provision is applicable. If applicable, the applicable step-up terms are specified as part of that ISDA Standard Terms Supplement. From a usage standpoint, this provision is typically applicable in the case of RMBS and not applicable in case of CMBS trades.
   */
  stepUpProvision?: boolean;
  /**
   * As specified by the ISDA Supplement for use with trades on mortgage-backed securities, 'WAC Cap' means a weighted average coupon or weighted average rate cap provision (however defined in the Underlying Instruments) of the Underlying Instruments that limits, increases or decreases the interest rate or interest entitlement, as set out in the Underlying Instruments on the Effective Date without regard to any subsequent amendment The presence of the element with value set to 'true' signifies that the provision is applicable. From a usage standpoint, this provision is typically applicable in the case of CMBS and not applicable in case of RMBS trades.
   */
  wacCapInterestProvision?: boolean;
}
  
/**
 * A class defining a floating interest rate through the specification of the floating rate index, the tenor, the multiplier schedule, the spread, the qualification of whether a specific rate treatment and/or a cap or floor apply.
 */
export interface FloatingRate extends RateSpecificationBase {
  /**
   * The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.
   */
  capRateSchedule?: StrikeSchedule[];
  /**
   * A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.
   */
  floatingRateMultiplierSchedule?: Schedule;
  /**
   * The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.
   */
  floorRateSchedule?: StrikeSchedule[];
  meta?: MetaFields;
  /**
   * The specification of any rate conversion which needs to be applied to the observed rate before being used in any calculations. The two common conversions are for securities quoted on a bank discount basis which will need to be converted to either a Money Market Yield or Bond Equivalent Yield. See the Annex to the 2000 ISDA Definitions, Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraphs (g) and (h) for definitions of these terms.
   */
  rateTreatment?: RateTreatmentEnum;
  /**
   * The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.
   */
  spreadSchedule?: SpreadSchedule[];
  assetIdentifier?: AssetIdentifier;
}
  
/**
 * A data defining:  parameters associated with a floating rate reset. This data forms:  part of the cashflows representation of a stream.
 */
export interface FloatingRateDefinition {
  /**
   * The final calculated rate for a calculation period after any required averaging of rates A calculated rate of 5% would be represented as 0.05.
   */
  calculatedRate?: number;
  /**
   * The cap rate, if any, which applies to the floating rate for the calculation period. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain strike level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.
   */
  capRate?: Strike[];
  /**
   * A rate multiplier to apply to the floating rate. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one).
   */
  floatingRateMultiplier?: number;
  /**
   * The floor rate, if any, which applies to the floating rate for the calculation period. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. The floor rate of 5% would be represented as 0.05.
   */
  floorRate?: Strike[];
  /**
   * The details of a particular rate observation, including the fixing date and observed rate. A list of rate observation elements may be ordered in the document by ascending adjusted fixing date. An FpML document containing an unordered list of rate observations is still regarded as a conformant document.
   */
  rateObservation?: RateObservation[];
  /**
   * The ISDA Spread, if any, which applies for the calculation period. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.
   */
  spread?: number;
}
  
/**
 * Specification of a floating rate option as a floating rate index and tenor.
 */
export interface FloatingRateOption {
  /**
   * The reference index that is used to specify the floating interest rate. The FpML standard maintains the list of such indices, which are positioned as enumeration values as part of the CDM.
   */
  floatingRateIndex?: FieldWithMeta<FloatingRateIndexEnum>;
  /**
   * The ISDA Designated Maturity, i.e. the floating rate tenor.
   */
  indexTenor?: Period;
}
  
/**
 * A class to specify the floating interest rate by extending the floating rate definition with a set of attributes that specify such rate: the initial value specified as part of the trade, the rounding convention, the averaging method and the negative interest rate treatment.
 */
export interface FloatingRateSpecification extends FloatingRate {
  /**
   * If averaging is applicable, this component specifies whether a weighted or unweighted average method of calculation is to be used. The component must only be included when averaging applies.
   */
  averagingMethod?: AveragingMethodEnum;
  /**
   * The rounding convention to apply to the final rate used in determination of a calculation period amount.
   */
  finalRateRounding?: Rounding;
  /**
   * The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05.
   */
  initialRate?: number;
  /**
   * The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).
   */
  negativeInterestRateTreatment?: NegativeInterestRateTreatmentEnum;
  /**
   * The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.
   */
  capRateSchedule?: StrikeSchedule[];
  /**
   * A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.
   */
  floatingRateMultiplierSchedule?: Schedule;
  /**
   * The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.
   */
  floorRateSchedule?: StrikeSchedule[];
  meta?: MetaFields;
  /**
   * The specification of any rate conversion which needs to be applied to the observed rate before being used in any calculations. The two common conversions are for securities quoted on a bank discount basis which will need to be converted to either a Money Market Yield or Bond Equivalent Yield. See the Annex to the 2000 ISDA Definitions, Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraphs (g) and (h) for definitions of these terms.
   */
  rateTreatment?: RateTreatmentEnum;
  /**
   * The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.
   */
  spreadSchedule?: SpreadSchedule[];
  assetIdentifier?: AssetIdentifier;
}
  
/**
 * From FpML: A type defining either a spot or forward FX transactions.
 */
export interface ForeignExchange {
  /**
   * ATTRIBUTE SCHEDULED FOR DEPRECATION. The rate of exchange between the two currencies.
   */
  exchangeRate?: ExchangeRate;
  /**
   * This is the first of the two currency flows that define a single leg of a standard foreign exchange transaction.
   */
  exchangedCurrency1?: Cashflow;
  /**
   * This is the second of the two currency flows that define a single leg of a standard foreign exchange transaction.
   */
  exchangedCurrency2?: Cashflow;
  /**
   * A tenor expressed as a period type and multiplier (e.g. 1D, 1Y, etc.)
   */
  tenorPeriod?: Period;
}
  
/**
 * Representation of a forward settling payout. The 'Underlier' attribute captures the underlying payout, which is settled according to the 'SettlementTerms' attribute. Both FX Spot and FX Forward should use this componen, while distinction between the two will be handled via product qualification.
 */
export interface ForwardPayout {
  /**
   * Settlement terms for the underlier that include the settlement date, settlement method etc.
   */
  settlementTerms?: OptionSettlement;
  /**
   * Underlying product that the forward is written on, which can be of any type: FX, a contractual product, a security, etc.
   */
  underlier?: Underlier;
}
  
/**
 * A class for defining a date frequency, e.g. one day, three months, through the combination of an integer value and a standardized period value that is specified as part of an enumeration.
 */
export interface Frequency {
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month, year or term of the stream.
   */
  period?: PeriodExtendedEnum;
  /**
   * A time period multiplier, e.g. 1, 2, or 3. If the period value is T (Term) then period multiplier must contain the value 1.
   */
  periodMultiplier?: number;
}
  
/**
 * A class defining a currency and a future value date.
 */
export interface FutureValueAmount {
  /**
   * The number of days from the adjusted calculation period start date to the adjusted value date, calculated in accordance with the applicable day count fraction.
   */
  calculationPeriodNumberOfDays?: number;
  /**
   * The currency in which the an amount is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * Adjusted value date of the future value amount.
   */
  valueDate?: Date;
}
  
/**
 * A class that is used for describing cash settlement of an option / non deliverable forward. It includes the currency to settle into together with the fixings required to calculate the currency amount.
 */
export interface FxCashSettlement {
  /**
   * Specifies the source for and timing of a fixing of an exchange rate. This is used in the agreement of non-deliverable forward trades as well as various types of FX OTC options that require observations against a particular rate. This element is optional, permitting it to be omitted where fixing details are unavailable at the point of message creation. It has multiple occurrence to support the case where fixing details must be specified for more than one currency pair e.g. on an option settled into a third currency (that is not one of the option currencies).
   */
  fixing?: FxFixing[];
  /**
   * Specifies the source for and timing of a fixing of an exchange rate. This is used in the agreement of non-deliverable forward trades as well as various types of FX OTC options that require observations against a particular rate. This element is optional, permitting it to be omitted where fixing details are unavailable at the point of message creation. It has multiple occurrence to support the case where fixing details must be specified for more than one currency pair e.g. on an option settled into a third currency (that is not one of the option currencies).
   */
  rateSourceFixing?: FxRateSourceFixing[];
  referenceCurrency?: FieldWithMeta<String>;
  /**
   * The currency in which cash settlement occurs for non-deliverable forwards and cash-settled options (non-deliverable or otherwise).
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
/**
 * A type for defining FX Features.
 */
export interface FxFeature {
  /**
   * If 'Composite' is specified as the Settlement Type in the relevant Transaction Supplement, an amount in the Settlement Currency, determined by the Calculation Agent as being equal to the number of Options exercised or deemed exercised, multiplied by: (Settlement Price – Strike Price) / (Strike Price – Settlement Price) x Multiplier provided that if the above is equal to a negative amount the Option Cash Settlement Amount shall be deemed to be zero.
   */
  composite?: Composite;
  /**
   * If 'Cross-Currency' is specified as the Settlement Type in the relevant Transaction Supplement, an amount in the Settlement Currency, determined by the Calculation Agent as being equal to the number of Options exercised or deemed exercised, multiplied by: (Settlement Price – Strike Price) / (Strike Price – Settlement Price) x Multiplier x one unit of the Reference Currency converted into an amount in the Settlement Currency using the rate of exchange of the Settlement Currency as quoted on the Reference Price Source on the Valuation Date, provided that if the above is equal to a negative amount the Option Cash Settlement Amount shall be deemed to be zero.
   */
  crossCurrency?: Composite;
  /**
   * If 'Quanto' is specified as the Settlement Type in the relevant Transaction Supplement, an amount, as determined by the Calculation Agent in accordance with the Section 8.2 of the Equity Definitions.
   */
  quanto?: Quanto;
  /**
   * Specifies the reference currency of the trade.
   */
  referenceCurrency?: FieldWithMeta<String>;
}
  
/**
 * A class that specifies the source for and timing of a fixing of an exchange rate. This is used in the agreement of non-deliverable forward trades as well as various types of FX OTC options that require observations against a particular rate.
 */
export interface FxFixing {
  /**
   * Describes the specific date when a non-deliverable forward or cash-settled option will 'fix' against a particular rate, which will be used to compute the ultimate cash settlement. This element should be omitted where a single, discrete fixing date cannot be identified e.g. on an american option, where fixing may occur at any date on a continuous range.
   */
  fixingDate?: Date;
  /**
   * Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.
   */
  fxSpotRateSource?: FxSpotRateSource;
  /**
   * Defines the two currencies for an FX trade and the quotation relationship between the two currencies.
   */
  quotedCurrencyPair?: QuotedCurrencyPair;
}
  
/**
 * A data that:  is extending the Offset structure for providing the ability to specify an FX fixing date as an offset to dates specified somewhere else in the document.
 */
export interface FxFixingDate extends Offset {
  businessCenters?: BusinessCenters;
  /**
   * A reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.
   */
  businessCentersReference?: ReferenceWithMeta<BusinessCenters>;
  /**
   * The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).
   */
  businessDayConvention?: BusinessDayConventionEnum;
  /**
   * The calculation period references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure. Implemented for Brazilian-CDI swaps where it will refer to the termination date of the appropriate leg.
   */
  dateRelativeToCalculationPeriodDates?: DateRelativeToCalculationPeriodDates;
  /**
   * The payment date references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure.
   */
  dateRelativeToPaymentDates?: DateRelativeToPaymentDates;
  /**
   * In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.
   */
  dayType?: DayTypeEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).
   */
  period?: PeriodEnum;
  /**
   * A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.
   */
  periodMultiplier?: number;
}
  
/**
 * A class to specify the reference currency for the purpose of specifying the FX Haircut relating to a posting obligation, as being either the Termination Currency or an FX Designated Currency.
 */
export interface FxHaircutCurrency {
  /**
   * When specified, the reference currency for the purpose of specifying the FX Haircut relating to a posting obligation. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  fxDesignatedCurrency?: FieldWithMeta<String>;
  /**
   * The reference currency for the purpose of specifying the FX Haircut relating to a posting obligation is the Termination Currency when the Boolean value is set to True.
   */
  isTerminationCurrency?: boolean;
}
  
/**
 * Information source specific to Foreign Exchange products.
 */
export interface FxInformationSource extends InformationSource {
  /**
   * The time that the fixing will be taken along with a business center to define the time zone.
   */
  fixingTime?: BusinessCenterTime;
  /**
   * A specific page for the source for obtaining a market data point. In FpML, this is specified as a scheme, rateSourcePageScheme, for which no coding Scheme or URI is specified.
   */
  sourcePage?: FieldWithMeta<String>;
  /**
   * The heading for the source on a given source page.
   */
  sourcePageHeading?: string;
  /**
   * An information source for obtaining a market data point. For example Bloomberg, Reuters, Telerate, etc.
   */
  sourceProvider?: FieldWithMeta<InformationProviderEnum>;
}
  
/**
 * A data to:  describe the cashflow representation for FX linked notionals.
 */
export interface FxLinkedNotionalAmount {
  /**
   * The date on which the FX spot rate is observed. This date should already be adjusted for any applicable business day convention.
   */
  adjustedFxSpotFixingDate?: Date;
  /**
   * The calculation period notional amount.
   */
  notionalAmount?: number;
  /**
   * The actual observed FX spot rate.
   */
  observedFxSpotRate?: number;
  /**
   * The reset date.
   */
  resetDate?: Date;
}
  
/**
 * A data to:  describe a notional schedule where each notional that applies to a calculation period is calculated with reference to a notional amount or notional amount schedule in a different currency by means of a spot currency exchange rate which is normally observed at the beginning of each period.
 */
export interface FxLinkedNotionalSchedule {
  /**
   * The information source and time at which the spot currency exchange rate will be observed.
   */
  fxSpotRateSource?: FxSpotRateSource;
  /**
   * The initial currency amount for the varying notional. This may be omitted for a forward starting swap if the FX-linked notional value is not known at deal inception.
   */
  initialValue?: number;
  /**
   * The currency of the varying notional amount, i.e. the notional amount being determined periodically based on observation of a spot currency exchange rate. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  varyingNotionalCurrency?: FieldWithMeta<String>;
  /**
   * The dates on which spot currency exchange rates are observed for purposes of determining the varying notional currency amount that will apply to a calculation period.
   */
  varyingNotionalFixingDates?: RelativeDateOffset;
  /**
   * The dates on which interim exchanges of notional are paid. Interim exchanges will arise as a result of changes in the spot currency exchange amount or changes in the constant notional schedule (e.g. amortisation).
   */
  varyingNotionalInterimExchangePaymentDates?: RelativeDateOffset;
}
  
/**
 * A class describing the rate of a currency conversion: pair of currency, quotation mode and exchange rate.
 */
export interface FxRate {
  /**
   * Defines the two currencies for an FX trade and the quotation relationship between the two currencies.
   */
  quotedCurrencyPair?: QuotedCurrencyPair;
  /**
   * The rate of exchange between the two currencies of the leg of a deal. Must be specified with a quote basis.
   */
  rate?: number;
}
  
/**
 * Describes a rate source to be fixed and the date the fixing occurs
 */
export interface FxRateSourceFixing {
  /**
   * The date on which the fixing is scheduled to occur.
   */
  fixingDate?: AdjustableDate;
  settlementRateSource?: FxSettlementRateSource;
}
  
/**
 * The source of the Foreign Exchange settlement rate.
 */
export interface FxSettlementRateSource {
  /**
   * Indicates that a non-standard rate source will be used for the fixing.
   */
  nonstandardSettlementRate?: FxInformationSource;
  /**
   * Indicates that an officially defined rate settlement rate option will be the used for the fixing.
   */
  settlementRateOption?: FieldWithMeta<String>;
}
  
/**
 * A class defining the rate source and fixing time for an FX rate.
 */
export interface FxSpotRateSource {
  /**
   * The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.
   */
  fixingTime?: BusinessCenterTime;
  /**
   * The primary source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.
   */
  primaryRateSource?: InformationSource;
  /**
   * An alternative, or secondary, source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.
   */
  secondaryRateSource?: InformationSource;
}
  
/**
 *  A class specifying a set of non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms. The CDM GeneralTerms class corresponds to the FpML GeneralTerms complex type, except that the effectiveDate and scheduledTerminationDate have been positioned as part of the InterestRatePayout class in the CDM instead of in GeneralTerms.
 */
export interface GeneralTerms {
  /**
   * This attribute is used for representing information contained in the Additional Terms field of the 2003 Master Credit Derivatives confirm.
   */
  additionalTerm?: FieldWithMeta<String>[];
  /**
   * This attribute contains all the terms relevant to defining the Credit Default Swap Basket.
   */
  basketReferenceInformation?: BasketReferenceInformation;
  /**
   * The credit default payout buyer/seller parties.
   */
  buyerSeller?: BuyerSeller;
  /**
   * This attribute contains all the terms relevant to defining the Credit DefaultSwap Index.
   */
  indexReferenceInformation?: IndexReferenceInformation;
  /**
   * Value of this attribute set to 'true' indicates that modified equity delivery is applicable.
   */
  modifiedEquityDelivery?: boolean;
  /**
   * This attribute contains all the terms relevant to defining the reference entity and reference obligation(s).
   */
  referenceInformation?: ReferenceInformation;
  /**
   * Value of this attribute set to 'true' indicates that substitution is applicable.
   */
  substitution?: boolean;
}
  
export interface GracePeriodExtension {
  /**
   * Indicates whether the grace period extension provision is applicable.
   */
  applicable?: boolean;
  /**
   * The number of calendar or business days after any due date that the reference entity has to fulfil its obligations before a failure to pay credit event is deemed to have occurred. ISDA 2003 Term: Grace Period.
   */
  gracePeriod?: Offset;
}
  
/**
 * A class to specify the elections for the holding and using of posted collateral by the respective parties to the Credit Support Annex for Variation Margin. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h): Holding and Using Posted Collateral (VM).
 */
export interface HoldingAndUsingPostedCollateral {
  /**
   * The parties' elections for the holding and using of posted collateral.
   */
  partyElection?: HoldingAndUsingPostedCollateralElection;
}
  
/**
 * A class to specify the parties' elections related to the holding and using of posted collateral. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h): Holding and Using Posted Collateral (VM).
 */
export interface HoldingAndUsingPostedCollateralElection {
  /**
   * The specification of the conditions under which a party and its custodian(s) are entitled to hold posted collateral.
   */
  eligibilityToHoldCollateral?: EligibilityToHoldCollateral;
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
  /**
   * Specifies whether the party to the agreement has the right to rehypothecate the collateral held (True), i.e. whether the condition specified in Paragraph 6, (c) of the ISDA 2016 Credit Support Annex for Variation Margin apply. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (h)(ii): Use of Posted Collateral (VM).
   */
  useOfPostedCollateral?: boolean;
}
  
export interface Id {
  lei?: string;
}
  
/**
 * An abstract class to specify a product which terms are abstracted through reference data.
 */
export interface IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 * A class to specify a generic identifier, applicable to CDM artefacts such as executions, contracts, lifecycle events and legal documents. An issuer can be associated with the actual identifier value as a way to properly qualify it.
 */
export interface Identifier {
  /**
   * The identifier value. This level of indirection between the issuer and the identifier and its version provides the ability to associate multiple identifiers to one issuer, consistently with the FpML PartyTradeIdentifier.
   */
  assignedIdentifier?: AssignedIdentifier[];
  /**
   * The identifier issuer, when specified explicitly alongside the identifier value (instead of being specified by reference to a party).
   */
  issuer?: FieldWithMeta<String>;
  /**
   * The identifier issuer, when specified by reference to a party specified as part of the transaction.
   */
  issuerReference?: ReferenceWithMeta<Party>;
  meta?: MetaFields;
}
  
/**
 * The primitive event for the inception of a new contract between parties. It is expected that this primitive will be adjusted or deprecated once the CDM scope is extended to the pre-execution space.
 */
export interface InceptionPrimitive {
  /**
   * The after state corresponds to the new contract between the parties.
   */
  after?: PostInceptionState;
  /**
   * The (0..0) cardinality reflects the fact that there is no contract in the before state of an inception primitive. As noted in the definition associated with the class, this is expected to change once the CDM scope is extended to the pre-execution space.
   */
  before?: ReferenceWithMeta<ContractState>[];
}
  
/**
 * A class specifying the Independent Amount as the combination of a payer/receiver, a payment amount, a payment date and an associated payment calculation rule.
 */
export interface IndependentAmount extends PayerReceiver {
  /**
   * An attribute that specifies a payment as the combination of a payment amount, a payment date and an associated payment calculation rule.
   */
  paymentDetail?: PaymentDetail[];
  /**
   * A reference to the account responsible for making the payments defined by this structure.
   */
  payerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party responsible for making the payments defined by this structure.
   */
  payerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that receives the payments corresponding to this structure.
   */
  receiverAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that receives the payments corresponding to this structure.
   */
  receiverPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify an index as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface Index extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 * Defines the specification of the consequences of Index Events as defined by the 2002 ISDA Equity Derivatives Definitions.
 */
export interface IndexAdjustmentEvents {
  /**
   * Consequence of index cancellation.
   */
  indexCancellation?: IndexEventConsequenceEnum;
  /**
   * Consequence of index disruption.
   */
  indexDisruption?: IndexEventConsequenceEnum;
  /**
   * Consequence of index modification.
   */
  indexModification?: IndexEventConsequenceEnum;
}
  
/**
 * A class defining a Credit Default Swap Index.
 */
export interface IndexReferenceInformation {
  /**
   * Excluded reference entity.
   */
  excludedReferenceEntity?: LegalEntity[];
  /**
   * A CDS index series annex date.
   */
  indexAnnexDate?: Date;
  /**
   * A CDS index series annex source.
   */
  indexAnnexSource?: FieldWithMeta<IndexAnnexSourceEnum>;
  /**
   * A CDS index series version identifier, e.g. 1, 2, 3 etc.
   */
  indexAnnexVersion?: number;
  /**
   * A CDS index identifier (e.g. RED pair code).
   */
  indexId?: FieldWithMeta<String>[];
  /**
   * The name of the index expressed as a free format string with an associated scheme.
   */
  indexName?: FieldWithMeta<String>;
  /**
   * A CDS index series identifier, e.g. 1, 2, 3 etc.
   */
  indexSeries?: number;
  meta?: MetaFields;
  /**
   * Used to specify the Relevant Settled Entity Matrix when there are settled entities at the time of the trade.
   */
  settledEntityMatrix?: SettledEntityMatrix;
  /**
   * This element contains CDS tranche terms.
   */
  tranche?: Tranche;
}
  
export interface Indx {
  nm?: Nm;
}
  
/**
 * A class to specify the parties to which the provisions of Paragraph 11(g) of the ISDA 2016 Credit Support Annex for Variation Margin will apply to. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(iii): Legally Ineligible Credit Support (VM).
 */
export interface IneligibleCreditSupport {
  /**
   * The parties to which the provisions of Paragraph 11(g) of the ISDA 2016 Credit Support Annex for Variation Margin will apply to, as the Secured Party. ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (c)(iii): Legally Ineligible Credit Support (VM).
   */
  specifiedParty?: ReferenceWithMeta<Party>[];
}
  
/**
 * A data to:  specify the inflation rate.
 */
export interface InflationRateSpecification extends FloatingRateSpecification {
  /**
   * The applicability of a fallback bond as defined in the 2006 ISDA Inflation Derivatives Definitions, sections 1.3 and 1.8.
   */
  fallbackBondApplicable?: boolean;
  /**
   * The reference source such as Reuters or Bloomberg. FpML specifies indexSource to be of type rateSourcePageScheme, but without specifying actual values.
   */
  indexSource?: FieldWithMeta<String>;
  /**
   * An off-setting period from the payment date which determines the reference period for which the inflation index is observed.
   */
  inflationLag?: Offset;
  /**
   * Initial known index level for the first calculation period.
   */
  initialIndexLevel?: number;
  /**
   * The method used when calculating the Inflation Index Level from multiple points. The most common is Linear.
   */
  interpolationMethod?: FieldWithMeta<InterpolationMethodEnum>;
  /**
   * The current main publication source such as relevant web site or a government body. FpML specifies mainPublication to be of type mainPublicationSource, but without specifying actual values.
   */
  mainPublication?: FieldWithMeta<String>;
  /**
   * If averaging is applicable, this component specifies whether a weighted or unweighted average method of calculation is to be used. The component must only be included when averaging applies.
   */
  averagingMethod?: AveragingMethodEnum;
  /**
   * The rounding convention to apply to the final rate used in determination of a calculation period amount.
   */
  finalRateRounding?: Rounding;
  /**
   * The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05.
   */
  initialRate?: number;
  /**
   * The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).
   */
  negativeInterestRateTreatment?: NegativeInterestRateTreatmentEnum;
  /**
   * The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.
   */
  capRateSchedule?: StrikeSchedule[];
  /**
   * A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.
   */
  floatingRateMultiplierSchedule?: Schedule;
  /**
   * The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.
   */
  floorRateSchedule?: StrikeSchedule[];
  meta?: MetaFields;
  /**
   * The specification of any rate conversion which needs to be applied to the observed rate before being used in any calculations. The two common conversions are for securities quoted on a bank discount basis which will need to be converted to either a Money Market Yield or Bond Equivalent Yield. See the Annex to the 2000 ISDA Definitions, Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraphs (g) and (h) for definitions of these terms.
   */
  rateTreatment?: RateTreatmentEnum;
  /**
   * The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.
   */
  spreadSchedule?: SpreadSchedule[];
  assetIdentifier?: AssetIdentifier;
}
  
/**
 * A class defining the source for a piece of information (e.g. a rate fix or an FX fixing). The attribute names have been adjusted from FpML to address the fact that the information is not limited to rates.
 */
export interface InformationSource {
  /**
   * A specific page for the source for obtaining a market data point. In FpML, this is specified as a scheme, rateSourcePageScheme, for which no coding Scheme or URI is specified.
   */
  sourcePage?: FieldWithMeta<String>;
  /**
   * The heading for the source on a given source page.
   */
  sourcePageHeading?: string;
  /**
   * An information source for obtaining a market data point. For example Bloomberg, Reuters, Telerate, etc.
   */
  sourceProvider?: FieldWithMeta<InformationProviderEnum>;
}
  
/**
 * A CDM class which purpose is to specify the initial fixing date either alongside the FpML interest rate specification as an offset of another date, or alongside the credit derivative specification as an unadjusted date.
 */
export interface InitialFixingDate {
  initialFixingDate?: Date;
  relativeDateOffset?: RelativeDateOffset;
}
  
/**
 *  Defines initial margin applied to a repo transaction. Initial margin is an agreed premium to the Purchase Price of a repo to determine the required Market Value of the collateral to be delivered on the Purchase Date. It reflects quality of the collateral. Its aim is to calculate the risk-adjusted or liquidation value of collateral.
 */
export interface InitialMargin {
  /**
   * Initial margin calculation for a collateral asset. Initial margin requirements may be specified for multiple pieces of collateral.
   */
  margin?: InitialMarginCalculation[];
  /**
   * An element defining a margin threshold which is the Net Exposure of a trade below which parties agree they will not call a margin from each other.
   */
  marginThreshold?: Money;
  /**
   * An element defining the type of assets (cash or securities) specified to apply as margin to the repo transaction. See GMRA 2011 paragraph 2(h) for 'Cash Margin' and GMRA 2011 paragraph 2(cc) for 'Margin Securities'.
   */
  marginType?: MarginTypeEnum;
  /**
   * An element defining a minimum transfer amount which is the minimum margin call parties will make once the margin threshold (or margin ratio threshold / haircut threshold) has been exceeded.
   */
  minimumTransferAmount?: Money;
}
  
/**
 *  Defines the initial margin calculation applicable to a single piece of collateral.
 */
export interface InitialMarginCalculation {
  /**
   * An element defining a haircut expressed as the percentage difference between the Market Value of the collateral and the Purchase Price of the repo and calculated as 100 multiplied by a ratio of the difference between the Market Value of the collateral and the Purchase Price of the repo to the Market Value of the collateral. Haircut is alternative way to adjust the value of collateral sold in a repurchase agreement to initial margin ratio. Because an initial margin is a percentage of the Purchase Price, while a haircut is a percentage of the Market Value of collateral, the arithmetic of initial margins and haircuts is slightly different. For example, an initial margin of 102% is not equivalent to a haircut of 2%, but to 1.961% (ie 100/102%). See GMRA 2011 paragraph 2(aa).
   */
  haircut?: number;
  /**
   * An element defining a haircut percentage threshold which is the value above (when it's lower than initial haircut) or below (when it's higher than initial haircut) which parties agree they will not call a margin from each other.
   */
  haircutThreshold?: number[];
  /**
   * An element defining an initial margin expressed as a ratio of the Market Value of the collateral to the Purchase Price. A default value of initial margin ratio of 1.00 means there is no margin and thus no risk related with the collateral. See GMRA 2000 paragraph 2(z) and GMRA 2011 paragraph 2(bb).
   */
  marginRatio?: number;
  /**
   * An element defining a margin ratio threshold which is the value above (when it's lower than initial margin ratio) or below (when it's higher than initial margin ratio) which parties agree they will not call a margin from each other.
   */
  marginRatioThreshold?: number[];
}
  
/**
 * Instruction to a function that will be used to perform a business event
 */
export interface Instruction {
  /**
   * Instruction to allocate
   */
  allocation?: AllocationInstruction;
  /**
   * Instruction to clear
   */
  clearing?: ClearingInstruction;
  /**
   * Name of the function that will be called
   */
  instructionFunction?: string;
}
  
/**
 * A class to specify whether the Interest Adjustment is applicable and what its periodicity is. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
 */
export interface InterestAdjustment {
  /**
   * The Interest Adjustment is applicable when True and not applicable when False
   */
  isApplicable?: boolean;
  /**
   * The qualification of the Interest Adjustment periodicity.
   */
  periodicity?: InterestAdjustmentPeriodicity;
}
  
/**
 * A class to specify the Interest Adjustment periodicity either through a standardized election or a custom one. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
 */
export interface InterestAdjustmentPeriodicity {
  /**
   * The Interest Adjustment periodicity when specified through a custom election.
   */
  customElection?: string;
  /**
   * The Interest Adjustment periodicity when specified through a standardized election.
   */
  standardElection?: InterestAdjustmentPeriodicityEnum;
}
  
/**
 * A class to specify the application of Interest Amount with respect to the Delivery Amount and the Return Amount. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
 */
export interface InterestAmount {
  /**
   * The application of Interest Amount with respect the Delivery Amount. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
   */
  deliveryAmount?: DeliveryAmount;
  /**
   * The application of Interest Amount with respect the Return Amount. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
   */
  returnAmount?: ReturnAmount;
}
  
export interface InterestRateCurve {
  floatingRateIndex?: FieldWithMeta<FloatingRateIndexEnum>;
  tenor?: Period;
}
  
/**
 *  A class to specify all of the terms necessary to define and calculate a cash flow based on a fixed, a floating or an inflation index rate. The interest rate payout can be applied to interest rate swaps and FRA (which both have two associated interest rate payouts), credit default swaps (to represent the fee leg when subject to periodic payments) and equity swaps (to represent the funding leg). The associated rosettaKey denotes the ability to associate a hash value to the InterestRatePayout instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface InterestRatePayout extends PayoutBase {
  /**
   * Reference to a bond underlier to represent an asset swap or Condition Precedent Bond.
   */
  bondReference?: BondReference;
  /**
   * The parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods.
   */
  calculationPeriodDates?: CalculationPeriodDates;
  /**
   * The cashflow representation of the swap stream.
   */
  cashflowRepresentation?: CashflowRepresentation;
  /**
   * If one or more calculation period contributes to a single payment amount this element specifies whether compounding is applicable and, if so, what compounding method is to be used. This element must only be included when more than one calculation period contributes to a single payment amount.
   */
  compoundingMethod?: CompoundingMethodEnum;
  /**
   * The specification of the principle exchange and settlement provision terms.
   */
  crossCurrencyTerms?: CrossCurrencyTerms;
  /**
   * The day count fraction. The cardinality has been relaxed when compared with the FpML interest rate swap for the purpose of accommodating standardized credit default swaps which DCF is not explicitly stated as part of the economic terms. The data rule InterestRatePayout_dayCountFraction requires that the DCF be stated for interest rate products.
   */
  dayCountFraction?: FieldWithMeta<DayCountFractionEnum>;
  /**
   * The parameters specifying any discounting conventions that may apply. This element must only be included if discounting applies.
   */
  discountingMethod?: DiscountingMethod;
  /**
   * Fixed Amount Calculation
   */
  fixedAmount?: string;
  /**
   * Floating Amount Calculation
   */
  floatingAmount?: string;
  meta?: MetaFields;
  /**
   * The payer/seller paradigm applies to swap products, whether interest rate swaps or the fee leg of credit default swaps.
   */
  payerReceiver?: PayerReceiver;
  /**
   * The payment date, where only one date is specified, as for the FRA product.
   */
  paymentDate?: AdjustableDate;
  /**
   * The payment date schedule, as defined by the parameters that are needed to specify it, either in a parametric way or by reference to another schedule of dates (e.g. the reset dates).
   */
  paymentDates?: PaymentDates;
  /**
   * Applicable to CDS on MBS to specify whether payment delays are applicable to the fixed Amount. RMBS typically have a payment delay of 5 days between the coupon date of the reference obligation and the payment date of the synthetic swap. CMBS do not, on the other hand, with both payment dates being on the 25th of each month.
   */
  paymentDelay?: boolean;
  /**
   * The specification of the rate value(s) applicable to the contract using either a floating rate calculation, a single fixed rate, a fixed rate schedule, or an inflation rate calculation.
   */
  rateSpecification?: RateSpecification;
  /**
   * The reset dates schedule, i.e. the dates on which the new observed index value is applied for each period and the interest rate hence begins to accrue.
   */
  resetDates?: ResetDates;
  /**
   * The stub calculation period amount parameters. This element must only be included if there is an initial or final stub calculation period. Even then, it must only be included if either the stub references a different floating rate tenor to the regular calculation periods, or if the stub is calculated as a linear interpolation of two different floating rate tenors, or if a specific stub rate or stub amount has been negotiated.
   */
  stubPeriod?: StubPeriod;
  /**
   * Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).
   */
  payoutQuantity?: ResolvablePayoutQuantity;
}
  
/**
 * Data to specify an interest rate spread.
 */
export interface InterestRateSpread {
  capRate?: number;
  floorRate?: number;
  rate?: number;
  spread?: number;
}
  
/**
 * A class to specify the interest shortfall floating rate payment event.
 */
export interface InterestShortFall {
  compounding?: boolean;
  /**
   * Specifies the nature of the interest Shortfall cap (i.e. Fixed Cap or Variable Cap) in the case where it is applicable. ISDA 2003 Term: Interest Shortfall Cap.
   */
  interestShortfallCap?: InterestShortfallCapEnum;
  /**
   * The rate source in the case of a variable cap.
   */
  rateSource?: FieldWithMeta<FloatingRateIndexEnum>;
}
  
export interface InvstmtDcsnPrsn {
  prsn?: Prsn;
}
  
/**
 * A class for a two-parts identifier, such as a USI.
 */
export interface IssuerTradeId {
  /**
   * The identifier value. The CDM uses a neutral identifier attribute name rather than the FpML trade qualifier because of the focus that includes the pre-execution lifecycle, at which point a trade doesn't exist yet.
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The party that assigns the trade identifier.
   */
  issuer?: FieldWithMeta<String>;
}
  
/**
 * A class to specify Japanese Securities Provision elections.
 */
export interface JapaneseSecuritiesProvisions {
  /**
   * Additional Amendments to Japanese Securities Provisions are specified when True, and not specified when False
   */
  amendmentsToJapaneseProvisions?: boolean;
  /**
   * Specific terms applicable to Additional Amendments to Japanese Securities Provisions
   */
  amendmentsToJapaneseProvisionsTerms?: string;
  /**
   * Japanese Securities Provisions are applicable when True and Not Applicable when False
   */
  isApplicable?: boolean;
  /**
   * Recommended Japanese Securities Provisions are applicable when True, additional Provisions are specified when False
   */
  relevantProvisionsElection?: boolean;
  /**
   * Specific terms applicable to Recommended Japanese Securities Provisions
   */
  relevantProvisionsTerms?: string;
}
  
/**
 * Knock In means option to exercise comes into existence. Knock Out means option to exercise goes out of existence.
 */
export interface Knock {
  /**
   * The knock in.
   */
  knockIn?: TriggerEvent;
  /**
   * The knock out.
   */
  knockOut?: TriggerEvent;
}
  
/**
 * A class which purpose is to provide the ability into the seemingly incompatible representations of the interest rate and equity last payment date.
 */
export interface LastRegularPaymentDate {
  /**
   * The last payment when specified as an adjustable or relative date, as in the FpML total return construct.
   */
  finalPaymentDate?: AdjustableOrRelativeDate;
  /**
   * The last regular payment date when specified as a date, as in the FpML interest rate construct. FpML specifies that this date may be subject to adjustment in accordance with any business day convention specified in the paymentDatesAdjustments attribute.
   */
  lastRegularPaymentDate?: Date;
}
  
/**
 * A class to specify the elections and variables that characterize a legal agreement.
 */
export interface LegalAgreement extends LegalAgreementBase {
  /**
   * The elections and variables specified in Paragraph 13 of the ISDA 2016 Credit Support Annex for Initial Margin, Japanese Law.
   */
  csaInitialMargin2016JapaneseLaw?: CsaInitialMargin2016JapaneseLaw;
  /**
   * The elections and variables specified in Paragraph 13 of the ISDA 2016 Credit Support Annex for Initial Margin, New York Law.
   */
  csaInitialMargin2016NewYorkLaw?: CsaInitialMargin2016NewYorkLaw;
  /**
   * The elections and variables specified in Paragraph 13 of the ISDA 2018 Credit Support Annex for Initial Margin, New York Law.
   */
  csaInitialMargin2018NewYorkLaw?: CsaInitialMargin2018NewYorkLaw;
  /**
   * The elections and variables specified in Paragraph 13 of the ISDA 2016 Credit Support Annex for Variation Margin, New York Law.
   */
  csaVariationMargin2016NewYorkLaw?: CsaVariationMargin2016NewYorkLaw;
  /**
   * The elections and variables specified in Paragraph 13 of the ISDA 2016 Credit Support Deed for Initial Margin, English Law.
   */
  csdInitialMargin2016EnglishLaw?: CsdInitialMargin2016EnglishLaw;
  /**
   * The elections and variables specified in Paragraph 13 of the ISDA 2018 Credit Support Deed for Initial Margin, English Law.
   */
  csdInitialMargin2018EnglishLaw?: CsdInitialMargin2018EnglishLaw;
  /**
   * The General Terms and Relationship Supplement Elections specified in the 2018 ISDA CDM Equity Confirmation for Security Equity Swap.
   */
  equitySwapMasterConfirmation2018?: EquitySwapMasterConfirmation2018;
  meta?: MetaFields;
  /**
   * The date on which the legal agreement has been agreed between the parties. This corresponds to the Date of Deed in an English Law document.
   */
  agreementDate?: Date;
  /**
   * The type of legal agreement, identified via a set of distinct attributes: name, publisher, governing law and version, e.g. ISDA 2013 Standard Credit Support Annex English Law.
   */
  agreementType?: LegalAgreementType;
  /**
   * The two contractual parties to the legal agreement, which reference information is positioned as part of the partyInformation attribute.
   */
  contractualParty?: ReferenceWithMeta<Party>[];
  /**
   * The date on which the agreement is effective, if different from the agreement date. It is expected that it will most often correspond to the agreement date, although there could be situations where the parties will explicitly agree on a distinct effective date.
   */
  effectiveDate?: Date;
  /**
   * The legal agreement identifier. Several identifiers can be specified.
   */
  identifier?: Identifier[];
  /**
   * The lineage into prior versions of this legal agreement or into other legal agreements that might be referenced by it.
   */
  lineage?: Lineage;
  /**
   * The role(s) that other party(ies) may have in relation to the legal agreement, further to the contractual parties.
   */
  otherParty?: PartyRole[];
  /**
   * The information about the parties involved with the legal agreements, which consists of both the contractual parties and the parties that might be involved in relation to some other roles (e.g. custody agent).
   */
  partyInformation?: Party[];
}
  
/**
 * A class describing the legal agreement baseline information, other than the specialized elections: type of legal agreement, agreement date and effective date, parties to the agreement, ... The purpose of this abstract class is to provide the ability to associate a 'one of' feature to the LegalAgreement class as a way to enforce a systematic choice between its attributes.
 */
export interface LegalAgreementBase {
  /**
   * The date on which the legal agreement has been agreed between the parties. This corresponds to the Date of Deed in an English Law document.
   */
  agreementDate?: Date;
  /**
   * The type of legal agreement, identified via a set of distinct attributes: name, publisher, governing law and version, e.g. ISDA 2013 Standard Credit Support Annex English Law.
   */
  agreementType?: LegalAgreementType;
  /**
   * The two contractual parties to the legal agreement, which reference information is positioned as part of the partyInformation attribute.
   */
  contractualParty?: ReferenceWithMeta<Party>[];
  /**
   * The date on which the agreement is effective, if different from the agreement date. It is expected that it will most often correspond to the agreement date, although there could be situations where the parties will explicitly agree on a distinct effective date.
   */
  effectiveDate?: Date;
  /**
   * The legal agreement identifier. Several identifiers can be specified.
   */
  identifier?: Identifier[];
  /**
   * The lineage into prior versions of this legal agreement or into other legal agreements that might be referenced by it.
   */
  lineage?: Lineage;
  /**
   * The role(s) that other party(ies) may have in relation to the legal agreement, further to the contractual parties.
   */
  otherParty?: PartyRole[];
  /**
   * The information about the parties involved with the legal agreements, which consists of both the contractual parties and the parties that might be involved in relation to some other roles (e.g. custody agent).
   */
  partyInformation?: Party[];
}
  
/**
 * A class to specify the type of legal agreement, which is extended by each legal agreement instance, such as the ISDA 2016 CSA for Initial Margin.
 */
export interface LegalAgreementType {
  /**
   * The law governing the legal agreement, e.g. English Law, New York Law or Japanese Law.
   */
  governingLaw?: GoverningLawEnum;
  /**
   * The legal agreement name, e.g. Credit Support Annex for Variation Margin.
   */
  name?: LegalAgreementNameEnum;
  /**
   * The legal agreement publisher, e.g. ISDA.
   */
  publisher?: LegalAgreementPublisherEnum;
  /**
   * In the case where successive definitions of the legal agreement have been developed, the vintage identification. This is typically (but not necessarily) done by referencing the year, e.g. 2013 in the case of the ISDA 2013 Standard Credit Support Annex.
   */
  vintage?: string;
}
  
/**
 * A class to specify a legal entity, with a required name and an optional entity identifier (such as the LEI).
 */
export interface LegalEntity {
  /**
   * A legal entity identifier (e.g. RED entity code).
   */
  entityId?: FieldWithMeta<String>[];
  meta?: MetaFields;
  /**
   * The legal entity name.
   */
  name?: FieldWithMeta<String>;
}
  
export interface LimitApplicable {
  /**
   * The limit remaining for the limit level and limit type. This does not take into account any pending trades. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.
   */
  amountRemaining?: number;
  /**
   * The limit utilised by all the cleared trades for the limit level and limit type. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.
   */
  amountUtilized?: number;
  /**
   * This element is required in FpML, optional in CDM for the purpose of accommodating the CME data representation while making reference to the FpML one.
   */
  clipSize?: number;
  /**
   * The currency in which the applicable limit is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * Standard code to indicate which type of credit line is being referred to - i.e. IM, DV01, PV01, CS01, Notional, Clip Size, Notional, maximumOrderQuantity.
   */
  limitType?: FieldWithMeta<CreditLimitTypeEnum>;
  utilization?: CreditLimitUtilisation;
  velocity?: Velocity;
}
  
/**
 * A class to represent the CDM attributes that are not part of the FpML standard. Once broader usage is confirmed, it is expected that those two classes can be collapsed.
 */
export interface LimitApplicableExtended extends LimitApplicable {
  /**
   * The total limit available for the limit level and limit type. While the attribute is of type integer in the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.
   */
  limitAmount?: number;
  /**
   * The limit utilized by this specific trade. While the attribute is of type integer in the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.
   */
  limitImpactDueToTrade?: number;
  /**
   * The level at which the limit is set: customer business, proprietary business or account level. This attribute is specified as a string as part of the CME clearing confirmation specification.
   */
  limitLevel?: FieldWithMeta<LimitLevelEnum>;
  /**
   * The limit remaining for the limit level and limit type. This does not take into account any pending trades. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.
   */
  amountRemaining?: number;
  /**
   * The limit utilised by all the cleared trades for the limit level and limit type. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.
   */
  amountUtilized?: number;
  /**
   * This element is required in FpML, optional in CDM for the purpose of accommodating the CME data representation while making reference to the FpML one.
   */
  clipSize?: number;
  /**
   * The currency in which the applicable limit is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * Standard code to indicate which type of credit line is being referred to - i.e. IM, DV01, PV01, CS01, Notional, Clip Size, Notional, maximumOrderQuantity.
   */
  limitType?: FieldWithMeta<CreditLimitTypeEnum>;
  utilization?: CreditLimitUtilisation;
  velocity?: Velocity;
}
  
/**
 * A class to provide lineage information across lifecycle events through a pointer or set of pointers into the event(s), contract(s) and, possibly, payout components that the event is dependent on or relates to. As an example, if an inception event is corrected, the correction event will have a lineage into the initial event, which takes the form of a rosettaKey into that initial inception event. Two referencing mechanisms are provided as part of the CDM: either the rosettaKey, which corresponds to the hash value of the CDM class which is referred to, or a reference qualifier which is meant to provide support for the ingestion of xml documents with id/href mechanisms. The CDM recommends the use of the rosettaKey and provides a default implementation which is accessible in the generated code through org.isda.cdm.rosettakey.RosettaKeyValueHashFunction. If implementers want to use an alternative hashing mechanism, the API in which they need to plug it is com.rosetta.model.lib.HashFunction.
 */
export interface Lineage {
  /**
   * The reference to the instantiation of a Cashflow payout component object. An expected typical usage is to provide lineage for the payment of, say, the option premium or the swap initial fee. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  cashflowReference?: ReferenceWithMeta<Cashflow>[];
  /**
   * The reference to the instantiation of a Contract object. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  contractReference?: ReferenceWithMeta<Contract>[];
  /**
   * The reference to the instantiation of a CreditdefaultPayout component object. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  creditDefaultPayoutReference?: ReferenceWithMeta<CreditDefaultPayout>[];
  /**
   * The reference to the instantiation of a EquityPayout object. An expected typical usage is to provide lineage for the payment of, say, an equity dividend. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  equityPayoutReference?: ReferenceWithMeta<EquityPayout>[];
  /**
   * The reference to the instantiation of an Event object, either through a rosettaKey or an xml-derived id/href mechanism. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  eventReference?: ReferenceWithMeta<WorkflowStep>[];
  /**
   * The reference to the instantiation of a Execution object. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  executionReference?: ReferenceWithMeta<Execution>[];
  /**
   * The reference to the instantiation of a InterestRatePayout component object. An expected typical usage is to provide lineage for the payment of, say, an interest rate swap reset, with the ability to relate the gross cashflow amounts to the respective payout components. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  interestRatePayoutReference?: ReferenceWithMeta<InterestRatePayout>[];
  /**
   * The reference to the instantiation of a Legal Agreement object. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  legalAgreement?: ReferenceWithMeta<LegalAgreement>[];
  /**
   * The reference to the instantiation of a OptionPayout component object. The definition associated to the Lineage class provides more details with respect to those referencing approaches, their expected usage and available implementation.
   */
  optionPayoutReference?: ReferenceWithMeta<OptionPayout>[];
  /**
   * The refence to the previous state of a Portfolio, in a chain of Events leading up to a build of that Portfolio as the holding of Product(s) in specific Quantity(ies). As part of the PortfolioState object, a pointer to the previous PortfolioState is provided through a Lineage object, together with pointer(s) to the Event or set of Events leading up to the current (new) state.
   */
  portfolioStateReference?: ReferenceWithMeta<PortfolioState>[];
  /**
   * The reference to the instantiation of a TransferPrimitive object.
   */
  transferReference?: ReferenceWithMeta<TransferPrimitive>[];
}
  
export interface Loan extends IdentifiedProduct {
  /**
   * Specifies the borrower. There can be more than one borrower. It is meant to be used in the event that there is no Bloomberg Id or the Secured List isn't applicable.
   */
  borrower?: LegalEntity[];
  /**
   * The credit agreement date is the closing date (the date where the agreement has been signed) for the loans in the credit agreement. Funding of the facilities occurs on (or sometimes a little after) the Credit Agreement date. This underlier attribute is used to help identify which of the company's outstanding loans are being referenced by knowing to which credit agreement it belongs. ISDA Standards Terms Supplement term: Date of Original Credit Agreement.
   */
  creditAgreementDate?: Date;
  /**
   * The type of loan facility (letter of credit, revolving, ...).
   */
  facilityType?: FieldWithMeta<String>;
  /**
   * Specifies the seniority level of the lien.
   */
  lien?: FieldWithMeta<String>;
  /**
   * The loan tranche that is subject to the derivative transaction. It will typically be referenced as the Bloomberg tranche number. ISDA Standards Terms Supplement term: Bloomberg Tranche Number.
   */
  tranche?: FieldWithMeta<String>;
  productIdentifier?: ProductIdentifier;
}
  
/**
 * A class to specify loan with a participation agreement whereby the buyer is capable of creating, or procuring the creation of, a contractual right in favour of the seller that provides the seller with recourse to the participation seller for a specified share in any payments due under the relevant loan which are received by the participation seller. ISDA 2003 Term: Direct Loan Participation.
 */
export interface LoanParticipation extends PCDeliverableObligationCharac {
  /**
   * If Direct Loan Participation is specified as a deliverable obligation characteristic, this specifies any requirements for the Qualifying Participation Seller. The requirements may be listed free-form. ISDA 2003 Term: Qualifying Participation Seller.
   */
  qualifyingParticipationSeller?: string;
  /**
   * Indicates whether the provision is applicable.
   */
  applicable?: boolean;
  /**
   * Specifies whether either 'Partial Cash Settlement of Assignable Loans', 'Partial Cash Settlement of Consent Required Loans' or 'Partial Cash Settlement of Participations' is applicable. If this element is specified and Assignable Loan is a Deliverable Obligation Characteristic, any Assignable Loan that is deliverable, but where a non-receipt of Consent by the Physical Settlement Date has occurred, the Loan can be cash settled rather than physically delivered. If this element is specified and Consent Required Loan is a Deliverable Obligation Characteristic, any Consent Required Loan that is deliverable, but where a non-receipt of Consent by the Physical Settlement Date has occurred, the Loan can be cash settled rather than physically delivered. If this element is specified and Direct Loan Participation is a Deliverable Obligation Characteristic, any Participation that is deliverable, but where this participation has not been effected (has not come into effect) by the Physical Settlement Date, the participation can be cash settled rather than physically delivered.
   */
  partialCashSettlement?: boolean;
}
  
/**
 * A class to specify the amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date (typically applicable to the convertible bond options).
 */
export interface MakeWholeAmount extends SwapCurveValuation {
  /**
   * Date prior to which the option buyer will have to pay a Make Whole Amount to the option seller if he/she exercises the option.
   */
  earlyCallDate?: FieldWithMeta<Date>;
  /**
   * The type of interpolation method that the calculation agent reserves the right to use.
   */
  interpolationMethod?: InterpolationMethodEnum;
  floatingRateIndex?: FloatingRateIndexEnum;
  /**
   * The ISDA Designated Maturity, i.e. the tenor of the floating rate.
   */
  indexTenor?: Period;
  /**
   * The side (bid/mid/ask) of the measure.
   */
  side?: QuotationSideEnum;
  /**
   * Spread in basis points over the floating rate index.
   */
  spread?: number;
}
  
/**
 * A data to:  define an early termination provision for which exercise is mandatory.
 */
export interface MandatoryEarlyTermination {
  /**
   * The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.
   */
  calculationAgent?: CalculationAgent;
  /**
   * If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.
   */
  cashSettlement?: OptionCashSettlement;
  /**
   * The adjusted dates associated with a mandatory early termination provision. These dates have been adjusted for any applicable business day convention.
   */
  mandatoryEarlyTerminationAdjustedDates?: MandatoryEarlyTerminationAdjustedDates;
  /**
   * The early termination date associated with a mandatory early termination of a swap.
   */
  mandatoryEarlyTerminationDate?: AdjustableDate;
  meta?: MetaFields;
}
  
/**
 * A data defining:  the adjusted dates associated with a mandatory early termination provision.
 */
export interface MandatoryEarlyTerminationAdjustedDates {
  /**
   * The date on which the cash settlement amount is paid. This date should already be adjusted for any applicable business date convention.
   */
  adjustedCashSettlementPaymentDate?: Date;
  /**
   * The date by which the cash settlement amount must be agreed. This date should already be adjusted for any applicable business day convention.
   */
  adjustedCashSettlementValuationDate?: Date;
  /**
   * The early termination date that is applicable if an early termination provision is exercised. This date should already be adjusted for any applicable business day convention.
   */
  adjustedEarlyTerminationDate?: Date;
}
  
/**
 * A class defining manual exercise, i.e. that the option buyer counterparty must give notice to the option seller of exercise.
 */
export interface ManualExercise {
  /**
   * Definition of the party to whom notice of exercise should be given.
   */
  exerciseNotice?: ExerciseNotice;
  /**
   * If fallback exercise is specified then the notional amount of the underlying swap, not previously exercised under the swaption, will be automatically exercised at the expiration time on the expiration date if at such time the buyer is in-the-money, provided that the difference between the settlement rate and the fixed rate under the relevant underlying swap is not less than one tenth of a percentage point (0.10% or 0.001). The term in-the-money is assumed to have the meaning defined in the 2000 ISDA Definitions, Section 17.4. In-the-money.
   */
  fallbackExercise?: boolean;
}
  
/**
 * A class for selection of Margin Approach.
 */
export interface MarginApproach {
  marginApproach?: MarginApproachEnum;
}
  
/**
 * A class for defining the agreement executed between the parties and intended to govern all OTC derivatives transactions between those parties.
 */
export interface MasterAgreement {
  /**
   * The date on which the master agreement was signed.
   */
  masterAgreementDate?: Date;
  /**
   * An identifier that has been created to identify the master agreement.
   */
  masterAgreementId?: FieldWithMeta<String>;
  /**
   * The agreement executed between the parties and intended to govern product-specific derivatives transactions between those parties.
   */
  masterAgreementType?: FieldWithMeta<MasterAgreementTypeEnum>;
  /**
   * The version of the master agreement.
   */
  masterAgreementVersion?: FieldWithMeta<String>;
}
  
/**
 * A class for defining the master confirmation agreement executed between the parties.
 */
export interface MasterConfirmation {
  /**
   * The date that an annex to the master confirmation was executed between the parties.
   */
  masterConfirmationAnnexDate?: Date;
  /**
   * The type of master confirmation annex executed between the parties.
   */
  masterConfirmationAnnexType?: FieldWithMeta<MasterConfirmationAnnexTypeEnum>;
  /**
   * The date of the confirmation executed between the parties and intended to govern all relevant transactions between those parties.
   */
  masterConfirmationDate?: Date;
  /**
   * The type of master confirmation executed between the parties.
   */
  masterConfirmationType?: FieldWithMeta<MasterConfirmationTypeEnum>;
}
  
/**
 * Legal agreement specification for General Terms and Elections that are applicable across multiple confirmations and are referenced by these confirmations.
 */
export interface MasterConfirmationBase {
}
  
/**
 * This class corresponds to the components of the FpML MessageHeader.model.
 */
export interface MessageInformation {
  /**
   * A unique identifier (within the specified coding scheme) giving the details of some party to whom a copy of this message will be sent for reference.
   */
  copyTo?: FieldWithMeta<String>[];
  /**
   * A unique identifier assigned to the message.
   */
  messageId?: FieldWithMeta<String>;
  /**
   * The identifier for the originator of a message instance.
   */
  sentBy?: FieldWithMeta<String>;
  /**
   * The identifier(s) for the recipient(s) of a message instance.
   */
  sentTo?: FieldWithMeta<String>[];
}
  
/**
 * A class to specify the ISDA SIMM as the Method for all Covered Transactions with respect to all Regimes. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee).
 */
export interface Method {
  /**
   * The SIMM Calculation Currency, as specified for each of the parties to the CSA Initial Margin. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ee)(3).
   */
  calculationCurrency?: SimmCalculationCurrency[];
  /**
   * The qualification of the ISDA SIMM version that is specified for all Covered Transactions as specified by ISDA 2018 CSA for Initial Margin, Paragraph 13, General Principles, (ee)(1).
   */
  version?: SimmVersion;
}
  
/**
 * A class to specify amount of exposure reached before collateral has to be posted or returned. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vi)(B): Minimum Transfer Amount. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(vi)(B): Minimum Transfer Amount. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vi)(B): Minimum Transfer Amount.
 */
export interface MinimumTransferAmount {
  /**
   * The parties' minimum transfer amount elections.
   */
  partyElection?: ElectiveAmountElection[];
}
  
/**
 *  A class to specify whether Minimum Transfer Amount language is applicable or not
 */
export interface MinimumTransferAmountAmendment {
  effectiveDate?: AmendmentEffectiveDate;
  /**
   * Minimum Transfer Amount terms are applicable when True and Not Applicable when False
   */
  isApplicable?: boolean;
  partyElections?: ElectiveAmountElection[];
}
  
/**
 * A class defining a currency amount.
 */
export interface Money {
  /**
   * The monetary quantity in currency units.
   */
  amount?: number;
  /**
   * The currency in which the associated amount is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  meta?: MetaFields;
}
  
export interface MortgageBackedSecurity extends ProductIdentifier {
  /**
   * The mortgage pool that is underneath the mortgage obligation.
   */
  pool?: AssetPool;
  /**
   * The sector classification of the mortgage obligation.
   */
  sector?: FieldWithMeta<MortgageSectorEnum>;
  /**
   * The mortgage obligation tranche that is subject to the derivative transaction.
   */
  tranche?: string;
  /**
   *  A unique identifier of an asset provided by a public source that is specified in the source attribute.
   */
  identifier?: FieldWithMeta<String>[];
  meta?: MetaFields;
  /**
   * The product taxonomy value(s) associated with a product.
   */
  productTaxonomy?: ProductTaxonomy[];
  /**
   * The identifier source.
   */
  source?: ProductIdSourceEnum;
}
  
/**
 * A class to specify multiple credit notations alongside a conditional 'any' or 'all' qualifier.
 */
export interface MultipleCreditNotations {
  /**
   * An enumerated element, to qualify whether All or Any credit notation applies.
   */
  condition?: QuantifierEnum;
  /**
   * At least two credit notations much be specified.
   */
  creditNotation?: FieldWithMeta<CreditNotation>[];
  mismatchResolution?: CreditNotationMismatchResolutionEnum;
  referenceAgency?: CreditRatingAgencyEnum;
}
  
/**
 * A class to specify multiple credit debt types alongside a conditional 'any' or 'all' qualifier.
 */
export interface MultipleDebtTypes {
  /**
   * An enumerated attribute, to qualify whether All or Any debt type applies.
   */
  condition?: QuantifierEnum;
  /**
   * The type of debt, e.g. long term debt, deposit, ... FpML doesn't specific a scheme value, hence no enumeration is specified as part of the CDM. At least two debt types much be specified.
   */
  debtType?: FieldWithMeta<String>[];
}
  
/**
 * A class defining multiple exercises. As defined in the 2000 ISDA Definitions, Section 12.4. Multiple Exercise, the buyer of the option has the right to exercise all or less than all the unexercised notional amount of the underlying swap on one or more days in the exercise period, but on any such day may not exercise less than the minimum notional amount or more than the maximum notional amount, and if an integral multiple amount is specified, the notional exercised must be equal to or, be an integral multiple of, the integral multiple amount. In FpML, MultipleExercise is built upon the PartialExercise.model.
 */
export interface MultipleExercise extends PartialExercise {
  /**
   * The maximum notional amount that can be exercised on a given exercise date.
   */
  maximumNotionalAmount?: number;
  /**
   * The maximum number of options that can be exercised on a given exercise date. If the number is not specified, it means that the maximum number of options corresponds to the remaining unexercised options.
   */
  maximumNumberOfOptions?: number;
  /**
   * A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised.
   */
  integralMultipleAmount?: number;
  /**
   * The minimum notional amount that can be exercised on a given exercise date. See multipleExercise.
   */
  minimumNotionalAmount?: number;
  /**
   * The minimum number of options that can be exercised on a given exercise date.
   */
  minimumNumberOfOptions?: number;
  /**
   * A pointer style reference to the associated notional schedule defined elsewhere in the document. This element has been made optional as part of its integration in the OptionBaseExtended, because not required for the options on securities.
   */
  notionaReference?: ReferenceWithMeta<Money>;
}
  
export interface MultipleValuationDates extends SingleValuationDate {
  /**
   * The number of business days between successive valuation dates when multiple valuation dates are applicable for cash settlement. ISDA 2003 Term: Business Days thereafter.
   */
  businessDaysThereafter?: number;
  /**
   * Where multiple valuation dates are specified as being applicable for cash settlement, this element specifies (a) the number of applicable valuation dates, and (b) the number of business days after satisfaction of all conditions to settlement when the first such valuation date occurs, and (c) the number of business days thereafter of each successive valuation date. ISDA 2003 Term: Multiple Valuation Dates.
   */
  numberValuationDates?: number;
  /**
   * A number of business days. Its precise meaning is dependant on the context in which this element is used. ISDA 2003 Term: Business Day.
   */
  businessDays?: number;
}
  
/**
 * A class to specify a mutual fund as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface MutualFund extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 * A class to represent the attributes that are specific to a natural person.
 */
export interface NaturalPerson {
  /**
   * The natural person's date of birth.
   */
  dateOfBirth?: Date;
  /**
   * The natural person's first name. It is optional in FpML.
   */
  firstName?: string;
  /**
   * An honorific title, such as Mr., Ms., Dr. etc.
   */
  honorific?: string;
  initial?: string[];
  meta?: MetaFields;
  middleName?: string[];
  /**
   * Name suffix, such as Jr., III, etc.
   */
  suffix?: string;
  /**
   * The natural person's surname.
   */
  surname?: string;
}
  
/**
 * A class to specify the role(s) that natural person(s) may have in relation to the contract.
 */
export interface NaturalPersonRole {
  /**
   * A reference to the natural person to whom the role refers to.
   */
  personReference?: ReferenceWithMeta<NaturalPerson>;
  /**
   * FpML specifies a person role that is distinct from the party role.
   */
  role?: FieldWithMeta<NaturalPersonRoleEnum>;
}
  
export interface New {
  addtlAttrbts?: AddtlAttrbts;
  buyr?: Buyr;
  exctgPrsn?: ExctgPrsn;
  exctgPty?: string;
  finInstrm?: FinInstrm;
  invstmtDcsnPrsn?: InvstmtDcsnPrsn;
  invstmtPtyInd?: string;
  ordrTrnsmssn?: OrdrTrnsmssn;
  sellr?: Sellr;
  submitgPty?: string;
  tx?: Tx;
  txId?: string;
}
  
export interface Nm {
  refRate?: RefRate;
  term?: Term;
}
  
/**
 * A data defining:  the parameters used when the reference currency of the payout is non-deliverable.
 */
export interface NonDeliverableSettlement {
  /**
   * The date, when expressed as a relative date, on which the currency rate will be determined for the purpose of specifying the amount in deliverable currency.
   */
  fxFixingDate?: FxFixingDate;
  /**
   * The date, when expressed as a schedule of date(s), on which the currency rate will be determined for the purpose of specifying the amount in deliverable currency.
   */
  fxFixingSchedule?: AdjustableDates;
  /**
   * An attribute defining the parameters to get a new quote when a settlement rate option is disrupted.
   */
  priceSourceDisruption?: PriceSourceDisruption;
  /**
   * The currency in which the swap stream is denominated, which is distinct from the currency in which the cashflows will be settled. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  referenceCurrency?: FieldWithMeta<String>;
  /**
   * The rate source for the conversion to the settlement currency. This source is specified through a scheme that reflects the terms of the Annex A to the 1998 FX and Currency Option Definitions.
   */
  settlementRateOption?: FieldWithMeta<SettlementRateOptionEnum>;
}
  
/**
 *  Class to specify a quantity as a non-negative number, which condition is enforced through a data rule that only applies to the extending class.
 */
export interface NonNegativeQuantity extends Quantity {
  /**
   * The amount to quantify 
   */
  amount?: number;
  /**
   * The unit of measure, applicable to physical assets, e.g. MWh or MMBTU.
   */
  unit?: UnitEnum;
}
  
/**
 * Class to specify a non-negative quantity schedule, which is used to define the quantity of a payout leg. This quantity cannot be negative, while direction is specified through a BuyerSeller or PayerReceiver attribute. The only available schedule implementation is a step schedule, specified as a set of date-value pairs. The non-negativity is enforced by using the non-negative quantity and step schedule classes.
 */
export interface NonNegativeQuantitySchedule {
  /**
   * The base quantity represented as a single, non-negative number plus some (optional) unit. This attribute is ignored when mapping existing FpML messages, where quantity is abstracted away at a higher level.
   */
  quantity?: NonNegativeQuantity;
  /**
   * The schedule specified as a set of date-value pairs. Attribute is optional, to represent the case where no schedule is specified so quantity is just constant over time.
   */
  stepSchedule?: NonNegativeStepSchedule;
}
  
/**
 * A class defining a step date and non-negative step value pair. This step definitions are used to define varying rate or amount schedules, e.g. a notional amortisation or a step-up coupon schedule.
 */
export interface NonNegativeStep {
  meta?: MetaFields;
  /**
   * The date on which the associated stepValue becomes effective. This day may be subject to adjustment in accordance with a business day convention.
   */
  stepDate?: Date;
  /**
   * The non-negative rate or amount which becomes effective on the associated stepDate. A rate of 5% would be represented as 0.05.
   */
  stepValue?: number;
}
  
/**
 *  Class to specify a non-negative schedule as a schedule of steps, typically used to define a payout leg with variable quantity. This quantity cannot be negative, while direction is specified through a BuyerSeller or PayerReceiver attribute. The non-negativity is enforced by making use of the non-negative step class.
 */
export interface NonNegativeStepSchedule {
  /**
   * The schedule of step date and non-negative value pairs. On each step date the associated step value becomes effective. A list of steps may be ordered in the document by ascending step date. An FpML document containing an unordered list of steps is still regarded as a conformant document.
   */
  step?: NonNegativeStep[];
}
  
/**
 * A class to specify the ISDA 2003 Term: Not Domestic Currency.
 */
export interface NotDomesticCurrency {
  /**
   * Indicates whether the Not Domestic Currency provision is applicable.
   */
  applicable?: boolean;
  /**
   * An explicit specification of the domestic currency. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
}
  
/**
 * A class to specify the time by which a demand for the Transfer of Eligible Credit Support (IM) or Posted Credit Support (IM) needs to be made in order for the transfer to take place in accordance with the Transfer Timing provisions. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(iii): Notification Time. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(iii): Notification Time. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii): Notification Time.
 */
export interface NotificationTime {
  /**
   * The parties' Notification Time election.
   */
  partyElections?: NotificationTimeElection[];
}
  
/**
 * A class to specify the notification time election by the respective parties to the agreement. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (d)(iii): Notification Time. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (e)(iii): Notification Time. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(iii): Notification Time.
 */
export interface NotificationTimeElection {
  /**
   * The Notification Time as a custom election.
   */
  customNotification?: string;
  /**
   * The Notification Time as a time that is qualified as a standard business center.
   */
  notificationTime?: BusinessCenterTime;
  /**
   * The elective party.
   */
  party?: string;
}
  
export interface NotifyingParty {
  buyerPartyReference?: ReferenceWithMeta<Party>;
  sellerPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify the underlying obligations of the reference entity on which protection is purchased or sold through the Credit Default Swap.
 */
export interface Obligations {
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published Standard Terms Supplement for use with CDS Transactions on Leveraged Loans. ISDA 2003 Term: Cash Settlement Only.
   */
  cashSettlementOnly?: boolean;
  /**
   * Used in both obligations and deliverable obligations to represent a class or type of securities which apply. ISDA 2003 Term: Obligation Category/Deliverable Obligation Category.
   */
  category?: ObligationCategoryEnum;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published Standard Terms Supplement for use with CDS Transactions on Leveraged Loans. ISDA 2003 Term: Continuity.
   */
  continuity?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published Standard Terms Supplement for use with CDS Transactions on Leveraged Loans. ISDA 2003 Term: Delivery of Commitments.
   */
  deliveryOfCommitments?: boolean;
  /**
   * Applies to Loan CDS, to indicate what lien level is appropriate for a deliverable obligation. Applies to European Loan CDS, to indicate the Ranking of the obligation. Example: a 2nd lien Loan CDS would imply that the deliverable obligations are 1st or 2nd lien loans.
   */
  designatedPriority?: FieldWithMeta<String>;
  /**
   * A free format string to specify any excluded obligations or deliverable obligations, as the case may be, of the reference entity or excluded types of obligations or deliverable obligations. ISDA 2003 Term: Excluded Obligations/Excluded Deliverable Obligations.
   */
  excluded?: string;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: Full Faith and Credit Obligation Liability.
   */
  fullFaithAndCreditObLiability?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: General Fund Obligation Liability.
   */
  generalFundObligationLiability?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Indicates whether or not the obligation is quoted, listed or ordinarily purchased and sold on an exchange. ISDA 2003 Term: Listed.
   */
  listed?: boolean;
  /**
   * OTE: Only allowed as an obligation characteristic under ISDA Credit 1999. In essence Not Contingent means the repayment of principal cannot be dependent on a formula/index, i.e. to prevent the risk of being delivered an instrument that may never pay any element of principal, and to ensure that the obligation is interest bearing (on a regular schedule). ISDA 2003 Term: Not Contingent.
   */
  notContingent?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Any obligation that is payable in any currency other than the domestic currency. Domestic currency is either the currency so specified or, if no currency is specified, the currency of (a) the reference entity, if the reference entity is a sovereign, or (b) the jurisdiction in which the relevant reference entity is organised, if the reference entity is not a sovereign. ISDA 2003 Term: Not Domestic Currency.
   */
  notDomesticCurrency?: NotDomesticCurrency;
  /**
   * An obligation and deliverable obligation characteristic. Any obligation other than an obligation that was intended to be offered for sale primarily in the domestic market of the relevant Reference Entity. This specifies that the obligation must be an internationally recognised bond. ISDA 2003 Term: Not Domestic Issuance.
   */
  notDomesticIssuance?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. If the reference entity is a Sovereign, this means any obligation that is not subject to the laws of the reference entity. If the reference entity is not a sovereign, this means any obligation that is not subject to the laws of the jurisdiction of the reference entity. ISDA 2003 Term: Not Domestic Law.
   */
  notDomesticLaw?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. Any obligation that is not primarily (majority) owed to a Sovereign or Supranational Organisation. ISDA 2003 Term: Not Sovereign Lender.
   */
  notSovereignLender?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. An obligation that ranks at least equal with the most senior Reference Obligation in priority of payment or, if no Reference Obligation is specified in the related Confirmation, the obligations of the Reference Entity that are senior. ISDA 2003 Term: Not Subordinated.
   */
  notSubordinated?: boolean;
  /**
   * This element is used to specify any other obligations of a reference entity in both obligations and deliverable obligations. The obligations can be specified free-form. ISDA 2003 Term: Other Obligations of a Reference Entity.
   */
  othReferenceEntityObligations?: string;
  /**
   * An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: Revenue Obligation Liability.
   */
  revenueObligationLiability?: boolean;
  /**
   * An obligation and deliverable obligation characteristic. The currency or currencies in which an obligation or deliverable obligation must be payable. ISDA 2003 Term: Specified Currency.
   */
  specifiedCurrency?: SpecifiedCurrency;
}
  
/**
 * A class to specify the obligor(s) collateral posting obligations in accordance with the terms of the Japanese Law ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii).
 */
export interface ObligorPostingObligations {
  /**
   * The obligor party(ies) to which the posting obligations apply to, which can be either one or both parties to the legal agreement.
   */
  partyElection?: ReferenceWithMeta<PostingObligationsElection>[];
}
  
/**
 * A class to specify the primitive object to specify market observation events, which is applicable across all asset classes.
 */
export interface ObservationPrimitive {
  /**
   * The observation date.
   */
  date?: Date;
  /**
   * The observed value.
   */
  observation?: number;
  /**
   * The side (bid/mid/ask) of the observation, when applicable.
   */
  side?: QuotationSideEnum;
  /**
   * The observation source, such as an interest rate curve or an information provider.
   */
  source?: ObservationSource;
  /**
   * The observation time.
   */
  time?: TimeZone;
}
  
/**
 * The observation source can be composed of an curve and/or and information source.
 */
export interface ObservationSource {
  curve?: Curve;
  informationSource?: InformationSource;
}
  
/**
 * A class defining an offset used in calculating a new date relative to a reference date, e.g. calendar days, business days, commodity Business days, etc.
 */
export interface Offset extends Period {
  /**
   * In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.
   */
  dayType?: DayTypeEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).
   */
  period?: PeriodEnum;
  /**
   * A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.
   */
  periodMultiplier?: number;
}
  
/**
 * A class to specify whether One Way Provisions apply in relation to the ISDA CSA for Initial Margin and, if yes, to specify the Posting Party. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles (aa): One Way Provisions.
 */
export interface OneWayProvisions {
  /**
   * The determination of whether the One Way Provisions are applicable (true) or not applicable (false).
   */
  isApplicable?: boolean;
  /**
   * The Posting Party for the purposes of One Way Provisions. It is specified in the case where the One Way Provision is deemed applicable.
   */
  postingParty?: string;
}
  
/**
 * A data to:  define the cash settlement terms for a product where cash settlement is applicable.
 */
export interface OptionCashSettlement {
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (b).
   */
  cashPriceAlternateMethod?: CashPriceMethod;
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (a).
   */
  cashPriceMethod?: CashPriceMethod;
  /**
   * The date on which the cash settlement amount will be paid, subject to adjustment in accordance with any applicable business day convention. This component would not be present for a mandatory early termination provision where the cash settlement payment date is the mandatory early termination date.
   */
  cashSettlementPaymentDate?: CashSettlementPaymentDate;
  /**
   * The date on which the cash settlement amount will be determined according to the cash settlement method if the parties have not otherwise been able to agree the cash settlement amount.
   */
  cashSettlementValuationDate?: RelativeDateOffset;
  /**
   * The time of the cash settlement valuation date when the cash settlement amount will be determined according to the cash settlement method if the parties have not otherwise been able to agree the cash settlement amount.
   */
  cashSettlementValuationTime?: BusinessCenterTime;
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (g) (published in Supplement number 28).
   */
  collateralizedCashPriceMethod?: YieldCurveMethod;
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (f) (published in Supplement number 23).
   */
  crossCurrencyMethod?: CrossCurrencyMethod;
  meta?: MetaFields;
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (c).
   */
  parYieldCurveAdjustedMethod?: YieldCurveMethod;
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (e).
   */
  parYieldCurveUnadjustedMethod?: YieldCurveMethod;
  /**
   * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (d).
   */
  zeroCouponYieldAdjustedMethod?: YieldCurveMethod;
}
  
/**
 * Class which corresponds to the FpML OptionDenomination.model group.
 */
export interface OptionDenomination {
  /**
   * The currency in which the option is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  entitlementCurrency?: FieldWithMeta<String>;
  /**
   * The number of options comprised in the option transaction.
   */
  numberOfOptions?: number;
  /**
   * The number of units of underlier per option comprised in the option transaction.
   */
  optionEntitlement?: number;
}
  
/**
 *  A class to represent the applicable terms to qualify an option exercise: the option style (e.g. American style option), the exercise procedure (e.g. manual exercise) and the settlement terms (e.g. physical vs. cash).
 */
export interface OptionExercise {
  /**
   * The set of parameters defining the procedure associated with the exercise, e.g. manual exercise.
   */
  exerciseProcedure?: ExerciseProcedure;
  /**
   * The option exercise can be of American style, Bermuda style or European style. The FpML implementation makes use of a substitution group.
   */
  optionStyle?: OptionStyle;
  /**
   * The option settlement terms, such as cash vs. physical, the settlement date, the settlement currency and/or amount. FpML represents this information as part of the OptionSettlement.model.
   */
  settlement?: OptionSettlement;
  /**
   * Specifies the strike of the option on credit default swap.
   */
  strike?: OptionStrike;
}
  
/**
 * A class for defining option features.
 */
export interface OptionFeature {
  /**
   * An option where and average price is taken on valuation.
   */
  asian?: Asian;
  /**
   * An option with a barrier feature.
   */
  barrier?: Barrier;
  /**
   * A quanto or composite FX feature.
   */
  fxFeature?: FxFeature;
  /**
   * A knock feature.
   */
  knock?: Knock;
  /**
   * Pass-through payments from the underlier, such as dividends.
   */
  passThrough?: PassThrough;
  /**
   * A simple strategy feature.
   */
  strategyFeature?: StrategyFeature;
}
  
/**
 *  The option payout specification terms. The associated rosettaKey denotes the ability to associate a hash value to the respective OptionPayout instantiation for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface OptionPayout extends PayoutBase {
  buyerSeller?: BuyerSeller;
  /**
   * The denomination qualifies the number of units of underlier per option and the number of options comprised in the option transaction. FpML represents this information as part of the OptionDenomination.model.
   */
  denomination?: OptionDenomination;
  /**
   * The terms for exercising the option, which include the option style (e.g. American style option), the exercise procedure (e.g. manual exercise) and the settlement terms (e.g. physical vs. cash).
   */
  exerciseTerms?: OptionExercise;
  /**
   * The option feature, such as quanto, Asian, barrier, knock.
   */
  feature?: OptionFeature;
  meta?: MetaFields;
  /**
   * The type of option transaction. From a usage standpoint, put/call is the default option type, while payer/receiver indicator is used for options on index credit default swaps, consistently with the industry practice. Straddle is used for the case of straddle strategy, that combine a call and a put with the same strike.
   */
  optionType?: OptionTypeEnum;
  /**
   * The product underlying the option, which can be of any type including ContractualProduct or Security.
   */
  underlier?: Underlier;
  /**
   * Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).
   */
  payoutQuantity?: ResolvablePayoutQuantity;
}
  
export interface OptionPhysicalSettlement {
  /**
   * Specifies whether the swap resulting from physical settlement of the swaption transaction will clear through a clearing house. The meaning of Cleared Physical Settlement is defined in the 2006 ISDA Definitions, Section 15.2 (published in Supplement number 28).
   */
  clearedPhysicalSettlement?: boolean;
  /**
   * A reference to the clearing organization (CCP, DCO) to which the trade should be cleared.
   */
  predeterminedClearingOrganizationPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class for defining option provisions.
 */
export interface OptionProvision {
  /**
   * A provision that allows the specification of an embedded option within a swap giving the buyer of the option the right to terminate the swap, in whole or in part, on the early termination date.
   */
  cancelableProvision?: CancelableProvision;
  /**
   * A provision that allows the specification of an embedded option with a swap giving the buyer of the option the right to extend the swap, in whole or in part, to the extended termination date.
   */
  extendibleProvision?: ExtendibleProvision;
}
  
/**
 * The option settlement terms, which can either be cash, physical, or fx-based cash-settlement. This class can be used for both the settlement of options or forwards.
 */
export interface OptionSettlement extends SettlementTerms {
  /**
   * Specifies the parameters associated with the cash settlement procedure.
   */
  cashSettlementTerms?: OptionCashSettlement;
  /**
   * Specifies the cash settlement of a non deliverable fx option / forward. It includes the currency to settle into together with the fixings required to calculate the currency amount
   */
  fxSettlementTerms?: FxCashSettlement;
  /**
   * Specifies the physical settlement terms which apply to the transaction.
   */
  physicalSettlementTerms?: OptionPhysicalSettlement;
  /**
   * The Settlement Amount, when known in advance.
   */
  settlementAmount?: Money;
  settlementDate?: AdjustableOrRelativeDate;
  /**
   * Whether the settlement will be cash, physical, by election, ...
   */
  settlementType?: SettlementTypeEnum;
  /**
   * The qualification as to how the transfer will settle, e.g. a DvP settlement.
   */
  transferSettlementType?: TransferSettlementEnum;
  /**
   * The settlement date for a forward settling product. For Foreign Exchange contracts, this represents a common settlement date between both currency legs. To specify different settlement dates for each currency leg, see the ForeignExchange class. This attribute is meant to be merged with the 'settlementDate' at some future point noce we refactor 'Date' to use a single complex type across the model.
   */
  valueDate?: Date;
  meta?: MetaFields;
  /**
   * The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
/**
 * A class to specify the option strike.
 */
export interface OptionStrike {
  /**
   * The currency in which the option strike is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * The price or level expressed as a percentage of the forward starting spot price.
   */
  percentage?: number;
  /**
   * The strike of a credit default swap option or credit swaption when expressed as in reference to the price of the underlying obligation(s) or index.
   */
  price?: number;
  /**
   * The strike of an option when expressed by reference to a swap curve. (Typically the case for a convertible bond option.)
   */
  referenceSwapCurve?: ReferenceSwapCurve;
  /**
   * The strike of a credit default swap option or credit swaption when expressed as a spread per annum.
   */
  spread?: number;
  /**
   * The strike of an option on a credit default swap when expressed in reference to the spread of the underlying swap (typical practice in the case of credit single name swaps).
   */
  strikeReference?: ReferenceWithMeta<FixedRateSpecification>;
}
  
/**
 * The qualification of the option style: American, Bermuda or European. FpML implements those features as part of a substitution group.
 */
export interface OptionStyle {
  americanExercise?: AmericanExercise;
  bermudaExercise?: BermudaExercise;
  europeanExercise?: EuropeanExercise;
}
  
/**
 * A data defining:  an early termination provision where either or both parties have the right to exercise.
 */
export interface OptionalEarlyTermination {
  /**
   * American exercise. FpML implementations consists in an exercise substitution group.
   */
  americanExercise?: AmericanExercise;
  /**
   * Bermuda exercise. FpML implementations consists in an exercise substitution group.
   */
  bermudaExercise?: BermudaExercise;
  /**
   * The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.
   */
  calculationAgent?: CalculationAgent;
  /**
   * If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.
   */
  cashSettlement?: OptionCashSettlement;
  /**
   * European exercise. FpML implementations consists in an exercise substitution group.
   */
  europeanExercise?: EuropeanExercise;
  /**
   * Definition of the party to whom notice of exercise should be given.
   */
  exerciseNotice?: ExerciseNotice[];
  /**
   * A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.
   */
  followUpConfirmation?: boolean;
  /**
   * An early termination provision to terminate the trade at fair value where one or both parties have the right to decide on termination.
   */
  optionalEarlyTerminationAdjustedDates?: OptionalEarlyTerminationAdjustedDates;
  /**
   * If optional early termination is not available to both parties then this component specifies the buyer and seller of the option. In FpML, this attribute is of type SinglePsrtyOption, which actually consists of the BuyerSeller.model.
   */
  singlePartyOption?: BuyerSeller;
}
  
/**
 * A data defining:  the adjusted dates associated with an optional early termination provision.
 */
export interface OptionalEarlyTerminationAdjustedDates {
  /**
   * The adjusted dates associated with an individual early termination date.
   */
  earlyTerminationEvent?: EarlyTerminationEvent[];
}
  
export interface OrdrTrnsmssn {
  trnsmssnInd?: string;
}
  
/**
 * A class for defining an agreement executed between parties.
 */
export interface OtherAgreement {
  /**
   * The date on which the agreement was signed.
   */
  date?: Date;
  /**
   * An identifier that has been created to identify the agreement.
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The agreement executed between the parties and intended to govern product-specific derivatives transactions between those parties.
   */
  otherAgreementType?: FieldWithMeta<String>;
  /**
   * The version of the agreement.
   */
  version?: FieldWithMeta<String>;
}
  
/**
 * A class to specify the Other Eligible Support elections associated with Japanese and New York Law Initial and Variation margin agreements. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p): Other Eligible Support (IM) and Other Posted Support (IM). | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p): Other Eligible Support (IM) and Other Posted Support (IM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (l): Other Eligible Support (VM) and Other Posted Support (VM).
 */
export interface OtherEligibleAndPostedSupport {
  /**
   * ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p)(ii): Transfer. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p)(ii): Transfer.
   */
  applicableTransfer?: boolean;
  /**
   * ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p)(i): Value. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (p)(i): Value.
   */
  applicableValue?: boolean;
}
  
export interface Othr {
  derivInstrmAttrbts?: DerivInstrmAttrbts;
  finInstrmGnlAttrbts?: FinInstrmGnlAttrbts;
  id?: string;
  schmeNm?: SchmeNm;
}
  
/**
 * A class to specify the Partial Cash Deliverable Obligation Characteristic.
 */
export interface PCDeliverableObligationCharac {
  /**
   * Indicates whether the provision is applicable.
   */
  applicable?: boolean;
  /**
   * Specifies whether either 'Partial Cash Settlement of Assignable Loans', 'Partial Cash Settlement of Consent Required Loans' or 'Partial Cash Settlement of Participations' is applicable. If this element is specified and Assignable Loan is a Deliverable Obligation Characteristic, any Assignable Loan that is deliverable, but where a non-receipt of Consent by the Physical Settlement Date has occurred, the Loan can be cash settled rather than physically delivered. If this element is specified and Consent Required Loan is a Deliverable Obligation Characteristic, any Consent Required Loan that is deliverable, but where a non-receipt of Consent by the Physical Settlement Date has occurred, the Loan can be cash settled rather than physically delivered. If this element is specified and Direct Loan Participation is a Deliverable Obligation Characteristic, any Participation that is deliverable, but where this participation has not been effected (has not come into effect) by the Physical Settlement Date, the participation can be cash settled rather than physically delivered.
   */
  partialCashSettlement?: boolean;
}
  
/**
 * A class defining additional information that may be recorded alongside a transaction package.
 */
export interface PackageInformation {
  category?: CategoryEnum[];
  /**
   * specifies whether the transaction package is anticipated to be allocated.
   */
  intentToAllocate?: boolean;
  /**
   * This may be used to identify one or more parties that perform a role as part of the transaction.
   */
  relatedParty?: RelatedParty[];
}
  
/**
 * A class defining partial exercise. As defined in the 2000 ISDA Definitions, Section 12.3 Partial Exercise, the buyer of the option may exercise all or less than all the notional amount of the underlying swap but may not be less than the minimum notional amount (if specified) and must be an integral multiple of the integral multiple amount if specified.
 */
export interface PartialExercise {
  /**
   * A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised.
   */
  integralMultipleAmount?: number;
  /**
   * The minimum notional amount that can be exercised on a given exercise date. See multipleExercise.
   */
  minimumNotionalAmount?: number;
  /**
   * The minimum number of options that can be exercised on a given exercise date.
   */
  minimumNumberOfOptions?: number;
  /**
   * A pointer style reference to the associated notional schedule defined elsewhere in the document. This element has been made optional as part of its integration in the OptionBaseExtended, because not required for the options on securities.
   */
  notionaReference?: ReferenceWithMeta<Money>;
}
  
/**
 * A class to specify a party, without a qualification as to whether this party is a legal entity or a natural person, although the model provides the ability to associate a person (or set of persons) to a party, which use case would imply that such party would be a legal entity (even if not formally specified as such). 
 */
export interface Party {
  /**
   * The account that might be associated with the party. At most one account can be specified, as it is expected that this information is used in the context of a contract or legal document where only one account per party can be associated with such object.
   */
  account?: Account;
  meta?: MetaFields;
  /**
   * The party name.
   */
  name?: FieldWithMeta<String>;
  /**
   * The identifier associated with a party, e.g. the 20 digits LEI code.
   */
  partyId?: FieldWithMeta<String>[];
  /**
   * The person(s) who might be associated with the party as part of the execution, contract or legal document.
   */
  person?: NaturalPerson[];
}
  
/**
 * A class defining a legal agreement identifier issued by the indicated party.
 */
export interface PartyAgreementIdentifier {
  /**
   * While FpML specifies the document identifier with a value and an associated scheme, the CDM makes use of the Identifier, which has an explicit issuer. The issuer of this identifier is not necessarily the same as the party reference.
   */
  documentIdentifier?: FieldWithMeta<Identifier>[];
  meta?: MetaFields;
  /**
   * Reference to the party that issued the document identifier.
   */
  partyReference?: string;
}
  
/**
 * A class to specify contact information within a party: address and, optionally, associated business unit and person. This class also supports the ISDA CSA representation as a single string, through the address attribute.
 */
export interface PartyContactInformation {
  /**
   * The address specified as a string to support non-normalized contact information, such as in the case of ISDA Create.
   */
  address?: string;
  /**
   * Optional organization unit information used to describe the organization units (e.g. trading desks) involved in a transaction or business process, incl. the contact information (when relevant).
   */
  businessUnit?: BusinessUnit[];
  /**
   * The postal/street address, telephone number, email address and/or web page. If the contact information is specific to the associated business unit(s), it should be associated with those.
   */
  contactInformation?: ContactInformation;
  /**
   * The reference to the party to which the contact information refers to.
   */
  partyReference?: ReferenceWithMeta<Party>;
  /**
   * Optional information about people involved in a transaction or business process. (These are employees of the party.)
   */
  person?: NaturalPerson[];
}
  
/**
 * A class defining party-specific additional information that may be recorded with respect to a contract.
 */
export interface PartyContractInformation {
  /**
   * Reference to an account.
   */
  accountReference?: ReferenceWithMeta<Account>;
  /**
   * The qualification of the trade by the counterparty, e.g. customer or principal. This information is relevant for a number of marketplace processes, such as regulatory reporting or clearing.
   */
  category?: FieldWithMeta<CategoryEnum>;
  /**
   * The role(s) that natural person(s) may have in relation to the contract.
   */
  naturalPersonRole?: NaturalPersonRole[];
  /**
   * The reference to the party that owns this party contract information or, in the case of shared trades information, the reference that originated such information.
   */
  partyReference?: ReferenceWithMeta<Party>;
  relatedParty?: RelatedParty;
}
  
/**
 * A class to specify a party-related, non-standardized data in a generic form.
 */
export interface PartyCustomisedWorkflow {
  /**
   * Non-standardized data in a generic form.
   */
  customisedWorkflow?: CustomisedWorkflow[];
  /**
   * The party name to which the workflow pertains to.
   */
  partyName?: string;
  /**
   * Reference to the party to which the workflow pertains to.
   */
  partyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify the role(s) that party(ies) may have in relation to the execution, contract or other legal agreement.
 */
export interface PartyRole {
  /**
   * A reference to the party that has ownership of this party role information. FpML specifies that For shared trade information, this attribute will reference the originator of the data (for example, an execution facility or clearing house).
   */
  ownershipPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the party to which the role refers to.
   */
  partyReference?: ReferenceWithMeta<Party>;
  /**
   * The party role.
   */
  role?: PartyRoleEnum;
}
  
/**
 * Type which contains pass through payments.
 */
export interface PassThrough {
  /**
   * One to many pass through payment items.
   */
  passThroughItem?: PassThroughItem[];
}
  
/**
 * Class to represent a single pass through payment.
 */
export interface PassThroughItem {
  /**
   * Percentage of payments from the underlier which are passed through.
   */
  passThroughPercentage?: number;
  /**
   * This attribute doesn't exists in the FpML construct, which makes use of the PayerReceiver.model group.
   */
  payerReceiver?: PayerReceiver;
}
  
/**
 * A class to represent the FpML PayerReceiver.model.
 */
export interface PayerReceiver {
  /**
   * A reference to the account responsible for making the payments defined by this structure.
   */
  payerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party responsible for making the payments defined by this structure.
   */
  payerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that receives the payments corresponding to this structure.
   */
  receiverAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that receives the payments corresponding to this structure.
   */
  receiverPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A data defining:  the adjusted payment date and associated calculation period parameters required to calculate the actual or projected payment amount. This data forms:  part of the cashflow representation of a swap stream.
 */
export interface PaymentCalculationPeriod {
  /**
   * The adjusted payment date. This date should already be adjusted for any applicable business day convention. This component is not intended for use in trade confirmation but may be specified to allow the fee structure to also serve as a cashflow type component.
   */
  adjustedPaymentDate?: Date;
  /**
   * The parameters used in the calculation of a fixed or floating rate calculation period amount. A list of calculation period elements may be ordered in the document by ascending start date. An FpML document which contains an unordered list of calculation periods is still regarded as a conformant document.
   */
  calculationPeriod?: CalculationPeriod[];
  /**
   * A decimal value representing the discount factor used to calculate the present value of cash flow.
   */
  discountFactor?: number;
  /**
   * A known fixed payment amount.
   */
  fixedPaymentAmount?: number;
  /**
   * A monetary amount representing the forecast of the future value of the payment.
   */
  forecastPaymentAmount?: Money;
  meta?: MetaFields;
  /**
   * A monetary amount representing the present value of the forecast payment.
   */
  presentValueAmount?: Money;
  /**
   * The unadjusted payment date.
   */
  unadjustedPaymentDate?: Date;
}
  
/**
 * A class to specify the parameters to generate the payment date schedule, either through a parametric representation or by reference to other dates specified in the instance document (e.g. the reset dates or valuation dates). The CDM representation combines the FpML payment dates representation for interest rate and total return swap products by providing the ability to specify the payment dates as a function of some other dates specified in the instance document.
 */
export interface PaymentDates {
  /**
   * The anchor date when the payment dates are specified by reference to a set of dates specified somewhere else in the instance document/transaction, e.g. the valuation dates as typically the case for equity swaps.  When this attribute is specified, the paymentDaysOffset and the paymentDatesAdjustments also need to specified.
   */
  dateRelativeTo?: ReferenceWithMeta<Date>;
  /**
   * The first unadjusted payment date. This day may be subject to adjustment in accordance with any business day convention specified in paymentDatesAdjustments. This element must only be included if there is an initial stub. This date will normally correspond to an unadjusted calculation period start or end date. This is true even if early or delayed payment is specified to be applicable since the actual first payment date will be the specified number of days before or after the applicable adjusted calculation period start or end date with the resulting payment date then being adjusted in accordance with any business day convention specified in paymentDatesAdjustments.
   */
  firstPaymentDate?: Date;
  /**
   * The last payment date. In the case of interest rate swaps, FpML specifies that this date must only be included if there is a final stub, with all calculation periods after this date contributing to the final payment.
   */
  lastPaymentDate?: LastRegularPaymentDate;
  meta?: MetaFields;
  /**
   * Specifies whether the payments occur relative to each adjusted calculation period start date or end date, each reset date, valuation date or the last pricing date. Calculation period start date means relative to the start of the first calculation period contributing to a given payment. Similarly, calculation period end date means the end of the last calculation period contributing to a given payment. The valuation date is applicable for Brazilian-CDI and equity swaps.
   */
  payRelativeTo?: PayRelativeToEnum;
  /**
   * The definition of the business day convention and financial business centers used for adjusting the payment date if it would otherwise fall on a day that is not a business day in the specified business center.
   */
  paymentDatesAdjustments?: BusinessDayAdjustments;
  /**
   * If early payment or delayed payment is required, specifies the number of days offset that the payment occurs relative to what would otherwise be the unadjusted payment date. The offset can be specified in terms of either calendar or business days. Even in the case of a calendar days offset, the resulting payment date, adjusted for the specified calendar days offset, will still be adjusted in accordance with the specified payment dates adjustments. This element should only be included if early or delayed payment is applicable, i.e. if the periodMultiplier element value is not equal to zero. An early payment would be indicated by a negative periodMultiplier element value and a delayed payment (or payment lag) would be indicated by a positive periodMultiplier element value.
   */
  paymentDaysOffset?: Offset;
  /**
   * The frequency at which regular payment dates occur. If the payment frequency is equal to the frequency defined in the calculation period dates component then one calculation period contributes to each payment amount. If the payment frequency is less frequent than the frequency defined in the calculation period dates component then more than one calculation period will contribute to the payment amount. A payment frequency more frequent than the calculation period frequency or one that is not a multiple of the calculation period frequency is invalid. If the payment frequency is of value T (term), the period is defined by the effectiveDate and the terminationDate.
   */
  paymentFrequency?: Frequency;
}
  
export interface PaymentDetail {
  meta?: MetaFields;
  /**
   * A fixed payment amount.
   */
  paymentAmount?: Money;
  paymentDate?: AdjustableOrRelativeDate;
  /**
   * The calculation rule.
   */
  paymentRule?: PaymentRule;
}
  
/**
 * This class corresponds to the FpML PaymentDiscounting.model group for representing the discounting elements that can be associated with a payment.
 */
export interface PaymentDiscounting {
  /**
   * The value representing the discount factor used to calculate the present value of the cash flow.
   */
  discountFactor?: number;
  /**
   * The amount representing the present value of the forecast payment.
   */
  presentValueAmount?: Money;
}
  
/**
 * A class defining the payment calculation rule. As of FpML 5.10, percentage rule is the only calculation rule that has been specified as part of the standard.
 */
export interface PaymentRule {
  /**
   * This attribute is not present as part of the FpML construct, as the payment rule is specialised by means of runtime type extension through the xsi:type.
   */
  percentageRule?: PercentageRule;
}
  
/**
 *  A class to represent the set of future cashflow methodologies in the form of specific payout class(es) that can be associated for the purpose of specifying a financial product. For example, two interest rate payouts can be combined to specify an interest rate swap, or one interest rate payout can be combined with a credit default payout to specify a credit default swap.
 */
export interface Payout {
  /**
   * A cashflow between the parties to the trade. For interest rate and equity products, this corresponds to the FpML additionalPayment element. For credit default swaps, this corresponds to the FpML initialPayment element and the singlePayment element of the fee leg. For option products, it represents the FpML premium element.
   */
  cashflow?: Cashflow[];
  /**
   * The credit default payout, which provides the details necessary for determining when a credit payout will be triggered as well as the parameters for calculating the payout and the settlement terms.
   */
  creditDefaultPayout?: CreditDefaultPayout;
  /**
   * The equity payout, which encompasses the equity price returns, dividend returns, volatility and variance return provisions.
   */
  equityPayout?: EquityPayout[];
  forwardPayout?: ForwardPayout[];
  /**
   * All of the terms necessary to define and calculate a cash flow based on a fixed, a floating or an inflation index rate. The interest rate payout can be applied to interest rate swaps and FRA (which both have two associated interest rate payouts), credit default swaps (to represent the fee leg when subject to periodic payments) and equity swaps (to represent the funding leg).
   */
  interestRatePayout?: InterestRatePayout[];
  /**
   * The option payout.
   */
  optionPayout?: OptionPayout[];
  /**
   * The security payout when the product involves some form of securities, such as collateral in a securities financing transaction
   */
  securityPayout?: SecurityPayout[];
}
  
/**
 *  Base class that all payout types should extend. Use case is that some validation rules may need to apply across all payout types, for which the data rule can be written at the base class level
 */
export interface PayoutBase {
  /**
   * Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).
   */
  payoutQuantity?: ResolvablePayoutQuantity;
}
  
/**
 * A class defining a content model for a calculation rule defined as percentage of the notional amount.
 */
export interface PercentageRule {
  /**
   * A reference to the notional amount.
   */
  notionalAmountReference?: ReferenceWithMeta<Money>;
  /**
   * A percentage of the notional amount.
   */
  paymentPercent?: number;
}
  
/**
 * A class to define recurring periods or time offsets.
 */
export interface Period {
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).
   */
  period?: PeriodEnum;
  /**
   * A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.
   */
  periodMultiplier?: number;
}
  
/**
 * The period bound is defined as a period and whether the bound is inclusive.
 */
export interface PeriodBound {
  /**
   * Whether the period bound is inclusive, e.g. for a lower bound, false would indicate greater than, whereas true would indicate greater than or equal to.
   */
  inclusive?: boolean;
  /**
   * The period to be used as the bound, e.g. 5Y.
   */
  period?: Period;
}
  
/**
 * The period range defined as either a lower and upper period bound, or both.
 */
export interface PeriodRange {
  /**
   * The lower bound of a period range, e.g. greater than or equal to 5Y.
   */
  lowerBound?: PeriodBound;
  /**
   * The upper bound of a period range, e.g. less than to 10Y.
   */
  upperBound?: PeriodBound;
}
  
/**
 * The physical exercise results into a financial product which is represented through the Product class, with an associated quantity and cashflow (e.g. a physical exercise of a bond option will result into a bond with a cash proceed which will be a function of the option strike price).
 */
export interface PhysicalExercise {
  /**
   * The cashflow component of the physical exercise.
   */
  cashflow?: Cashflow;
  product?: Product;
  /**
   * The quantity associated the asset that is physically settled. This quantity should only be associated with non-contractual products, as it is then expressed as part of the contractual terms.
   */
  quantity?: Quantity;
  /**
   * Complex attribute to specify the quantity of the contractual product that is being exercised. This temporarily makes uses of the 'ExecutionQuantity' class, until such time when the latter can be renamed as, and supersede, the existing 'ContractualQuantity' class. To be later merged with the 'quantity' attribute to have consistent mechanism between contractual and non-contractual products.
   */
  quantityNotation?: QuantityNotation[];
}
  
export interface PhysicalSettlementPeriod {
  /**
   * A number of business days. Its precise meaning is dependant on the context in which this element is used. ISDA 2003 Term: Business Day.
   */
  businessDays?: number;
  /**
   * An explicit indication that a number of business days are not specified and therefore ISDA fallback provisions should apply.
   */
  businessDaysNotSpecified?: boolean;
  /**
   * A maximum number of business days. Its precise meaning is dependant on the context in which this element is used. Intended to be used to limit a particular ISDA fallback provision.
   */
  maximumBusinessDays?: number;
}
  
/**
 * In FpML, PhysicalSettlementTerms and CashSettlementTerms extend SettlementTerms.  In the CDM, this extension paradigm has not been used because SettlementTerms class has been used for purposes related to securities transactions, while it is not used as such in the FpML standard (i.e. only as an abstract construct.
 */
export interface PhysicalSettlementTerms extends SettlementBase {
  /**
   * This element contains all the ISDA terms relevant to defining the deliverable obligations.
   */
  deliverableObligations?: DeliverableObligations;
  /**
   * If this element is specified and set to 'true', indicates that physical settlement must take place through the use of an escrow agent. (For Canadian counterparties this is always 'Not Applicable'. ISDA 2003 Term: Escrow.
   */
  escrow?: boolean;
  /**
   * The number of business days used in the determination of the physical settlement date. The physical settlement date is this number of business days after all applicable conditions to settlement are satisfied. If a number of business days is not specified fallback provisions apply for determining the number of business days. If Section 8.5/8.6 of the 1999/2003 ISDA Definitions are to apply the businessDaysNotSpecified element should be included. If a specified number of business days are to apply these should be specified in the businessDays element. If Section 8.5/8.6 of the 1999/2003 ISDA Definitions are to apply but capped at a maximum number of business days then the maximum number should be specified in the maximumBusinessDays element. ISDA 2003 Term: Physical Settlement Period.
   */
  physicalSettlementPeriod?: PhysicalSettlementPeriod;
  /**
   * If this element is specified and set to 'true', for a transaction documented under the 2003 ISDA Credit Derivatives Definitions, has the effect of incorporating the language set forth below into the confirmation. The section references are to the 2003 ISDA Credit Derivatives Definitions. Notwithstanding Section 1.7 or any provisions of Sections 9.9 or 9.10 to the contrary, but without prejudice to Section 9.3 and (where applicable) Sections 9.4, 9.5 and 9.6, if the Termination Date has not occurred on or prior to the date that is 60 Business Days following the Physical Settlement Date, such 60th Business Day shall be deemed to be the Termination Date with respect to this Transaction except in relation to any portion of the Transaction (an 'Affected Portion') in respect of which: (1) a valid notice of Buy-in Price has been delivered that is effective fewer than three Business Days prior to such 60th Business Day, in which case the Termination Date for that Affected Portion shall be the third Business Day following the date on which such notice is effective; or (2) Buyer has purchased but not Delivered Deliverable Obligations validly specified by Seller pursuant to Section 9.10(b), in which case the Termination Date for that Affected Portion shall be the tenth Business Day following the date on which Seller validly specified such Deliverable Obligations to Buyer.
   */
  sixtyBusinessDaySettlementCap?: boolean;
  meta?: MetaFields;
  /**
   * The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
/**
 * A class to specify the pledgor(s) collateral posting obligations as specified under the terms of the New York Law ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii).
 */
export interface PledgorPostingObligations {
  /**
   * The pledgor party(ies) to which the posting obligations apply to, which can be either one of the parties to the legal agreement, or both of those.
   */
  partyElection?: ReferenceWithMeta<PostingObligationsElection>[];
}
  
/**
 *  A Portfolio represents an aggregation of multiple Positions, by describing the parameters that this Portfolio should be aggregated based on. The resulting PortfolioState is calculated using these aggregation parameters as inputs, by aggregating all the Events that are relevant to this Portfolio. The concept of Portfolio works at all levels in the model: from the highest for a given LegalEntity for instance, to the lowest to account for security substitutions in a secutity financing transaction. As such, Portfolio can be used either above or below the Contract level.
 */
export interface Portfolio {
  /**
   * Describes the portfolio by describing how to aggregate all its relevant Events.
   */
  aggregationParameters?: AggregationParameters;
  /**
   * Describes the state of the Portfolio as a list of Positions resulting from the aggregation.
   */
  portfolioState?: PortfolioState;
}
  
/**
 *  State-full representation of a Portfolio that describes all the positions held at a given time, in various states which can be either traded, settled, etc., with lineage information to the previous state
 */
export interface PortfolioState {
  /**
   * Pointer to the previous PortfolioState and new Event(s) leading to the current (new) state. Previous PortfolioState in the Lineage can be Null in case this is the start of the chain of Events.
   */
  lineage?: Lineage;
  meta?: MetaFields;
  /**
   * The list of positions, each containing a Quantity and a Product.
   */
  positions?: Position[];
}
  
/**
 *  A Position describes how much of a given Product is being held and constitutes the atomic element of a Portfolio.
 */
export interface Position {
  /**
   * The aggregate cost of proceeds
   */
  cashBalance?: Money;
  /**
   * Reference to the Contract, in case product is contractual and the contract has been formed
   */
  contractReference?: ReferenceWithMeta<Contract>;
  /**
   * Qualifier for the state of the Position, to distinguish if just executed, formed, already settled, closed etc.
   */
  positionStatus?: PositionStatusEnum;
  /**
   * The product underlying the position, which can either be a contractual product or securities.
   */
  product?: Product;
  /**
   * The quantity of the product, which can be a negative number in case of a short position.
   */
  quantity?: Quantity;
}
  
export interface PostInceptionState extends ContractState {
  /**
   * Credit limit utilization information.
   */
  creditLimitInformation?: CreditLimitInformation;
  /**
   * Information related to trade warehouse workflow.
   */
  tradeWarehouseWorkflow?: TradeWarehouseWorkflow;
  /**
   * Reference to the original contract, such that the contract state can be resolved by super-imposing the updated values on top of the original contract.
   */
  contract?: Contract;
  meta?: MetaFields;
  /**
   * The state of the contract, represented as a replica of the original contract with updated values where applicable, e.g. in the case of resets.
   */
  updatedContract?: Contract;
}
  
/**
 * A class to specify the collateral posting obligations as specified under the terms of the ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii).
 */
export interface PostingObligationsElection {
  /**
   * The additional language that might be specified by the parties to the legal agreement.
   */
  additionalLanguage?: string;
  /**
   * If set to True, the Control Agreement is a Credit Support Document with respect to the party(ies). ISDA 2016 Credit Support Annex for Initial Margin, paragraph 6, (e).
   */
  asPermitted?: boolean;
  /**
   * The eligible collateral as specified in relation to the pledgor/chargor/obligor(s) posting obligation. ISDA 2016 Credit Support Annex for Initial Margin, Eligible Credit Support (IM) Schedule.
   */
  eligibleCollateral?: EligibleCollateral[];
  /**
   * The excluded collateral as specified in relation to the pledgor/chargor/obligor(s) posting obligation. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (ii)(B)(i).
   */
  excludedCollateral?: string;
  /**
   * The elective party.
   */
  party?: string;
}
  
/**
 * This class corresponds to the FpML Premium.model group for representing the option premium when expressed in a way other than an amount.
 */
export interface PremiumExpression {
  /**
   * The amount of premium to be paid expressed as a percentage of the notional value of the transaction. A percentage of 5% would be expressed as 0.05.
   */
  percentageOfNotional?: number;
  /**
   * Forward start premium type
   */
  premiumType?: PremiumTypeEnum;
  /**
   * The amount of premium to be paid expressed as a function of the number of options.
   */
  pricePerOption?: Money;
}
  
export interface Pric {
  bsisPts?: string;
  pric?: Pric;
}
  
/**
 * Generic description of the price concept applicable across product types, which can be expressed in a number of ways other than simply cash price
 */
export interface Price {
  /**
   * Price specified in cash terms, e.g. for securities proceeds or fee payment in a contractual product.
   */
  cashPrice?: CashPrice;
  /**
   * Price specified as an exchange rate between two currencies.
   */
  exchangeRate?: ExchangeRate;
  /**
   * Price specified as a fixed interest rate.
   */
  fixedInterestRate?: FixedInterestRate;
  /**
   * Price specified as a spread on top of a floating interest rate.
   */
  interestRateSpread?: InterestRateSpread;
}
  
/**
 * Object to specify the price of a product as a single number, which can be negative in some cases, and asset identifier so that it can be positioned in the product. For some product cases, several price notations can be associated with a single product: e.g. for an Equity Swap, both the initial equity price and the rate spread can be specified, which allows factoring of the product definition.
 */
export interface PriceNotation {
  /**
   * Identifier for the asset being priced.
   */
  assetIdentifier?: AssetIdentifier;
  /**
   * Price expressed as a number.
   */
  price?: Price;
}
  
export interface PriceReturnTerms {
  /**
   * 2018 ISDA CDM Equity Confirmation for Security Equity Swap: Final Price | Specifies the final valuation price of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.
   */
  valuationPriceFinal?: EquityValuation;
  /**
   * Specifies the interim valuation price(s) of the underlier. This price can be expressed either as an actual amount/currency, as a determination method, or by reference to another value specified in the swap document.
   */
  valuationPriceInterim?: EquityValuation;
}
  
/**
 * A data defining:  the parameters used to get a price quote to replace the settlement rate option that is disrupted.
 */
export interface PriceSourceDisruption {
  /**
   * The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.
   */
  fallbackReferencePrice?: FallbackReferencePrice;
}
  
/**
 * A primitive event is defined by one and only one atomic change in state of a trade. An example of this is a contract formation where the legal terms of the contact are added to the trade. A Primitive event contains a before and after state where the before is a reference to another after state of a primitive event in order to preserve lineage.
 */
export interface PrimitiveEvent {
  allocation?: AllocationPrimitive;
  contractFormation?: ContractFormationPrimitive;
  execution?: ExecutionPrimitive;
  exercise?: ExercisePrimitive;
  inception?: InceptionPrimitive;
  observation?: ObservationPrimitive;
  quantityChange?: QuantityChangePrimitive;
  reset?: ResetPrimitive;
  termsChange?: TermsChangePrimitive;
  transfer?: TransferPrimitive;
}
  
/**
 * A data for:  defining a principal exchange amount and adjusted exchange date. This data forms:  part of the cashflow representation of a swap stream.
 */
export interface PrincipalExchange {
  /**
   * The adjusted principal exchange date. This date should already be adjusted for any applicable business day convention.
   */
  adjustedPrincipalExchangeDate?: Date;
  /**
   * The value representing the discount factor used to calculate the present value of the principal exchange amount.
   */
  discountFactor?: number;
  meta?: MetaFields;
  /**
   * The amount representing the present value of the principal exchange.
   */
  presentValuePrincipalExchangeAmount?: Money;
  /**
   * The principal exchange amount. This amount should be positive if the stream payer is paying the exchange amount and signed negative if they are receiving it.
   */
  principalExchangeAmount?: number;
  /**
   * The non adjusted principal exchange date.
   */
  unadjustedPrincipalExchangeDate?: Date;
}
  
/**
 * A class defining which principal exchanges occur for the stream.
 */
export interface PrincipalExchanges {
  /**
   * A true/false flag to indicate whether there is a final exchange of principal on the termination date.
   */
  finalExchange?: boolean;
  /**
   * A true/false flag to indicate whether there is an initial exchange of principal on the effective date.
   */
  initialExchange?: boolean;
  /**
   * A true/false flag to indicate whether there are intermediate or interim exchanges of principal during the term of the swap.
   */
  intermediateExchange?: boolean;
  meta?: MetaFields;
}
  
/**
 * A class to specify the Process Agent that might be appointed by the parties to the agreement in accordance with the ISDA 2016 English Law CSA, paragraph 11(h). ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (t): Process Agent.
 */
export interface ProcessAgent {
  /**
   * The parties' Process Agent election.
   */
  partyElection?: ProcessAgentElection[];
}
  
/**
 * A class to specify the parties' respective elections with respect to the Process Agent as part of the English Law ISDA CSA.
 */
export interface ProcessAgentElection {
  /**
   * The qualification of whether the Process Agent is applicable (True) or not applicable (False).
   */
  isApplicable?: boolean;
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
  /**
   * The elective party as string.
   */
  partyName?: string;
  /**
   * The Process Agent specification, when applicable.
   */
  specification?: string;
}
  
/**
 *  A class to represent a financial product. With respect to contractual products, this class specifies the pre-execution product characteristics (the ContractualProduct class). This class is used as underlying for the option exercise representation, which makes use of the contractualProduct attribute to support the swaption use case, with the exercise into a swap. In a complete workflow, the swaption contract itself then needs to be superseded by a swap contract underpinned by the exercised swap as a contractualProduct.
 */
export interface Product {
  contractualProduct?: ContractualProduct;
  foreignExchange?: ForeignExchange;
  index?: Index;
  loan?: Loan;
  meta?: MetaFields;
  security?: Security;
}
  
/**
 *  A class to combine the CDM product qualifier with other product qualifiers, such as the FpML ones. While the CDM product qualifier is derived by the CDM from the product payout features, the other product identification elements are assigned by some external sources and correspond to values specified by other data representation protocols.
 */
export interface ProductIdentification {
  /**
   *  A classification of the most important risk class of the trade. FpML defines a simple asset class categorisation using a coding scheme.
   */
  primaryAssetdata?: FieldWithMeta<AssetClassEnum>;
  /**
   * A product reference identifier. The product Id is an identifier that describes the key economic characteristics of the trade type, with the exception of concepts such as size (notional, quantity, number of units) and price (fixed rate, strike, etc.) that are negotiated for each transaction. It can be used to hold identifiers such as the 'UPI' (universal product identifier) required by certain regulatory reporting rules. It can also be used to hold identifiers of benchmark products or product temnplates used by certain trading systems or facilities. FpML does not define the domain values associated with this element. Note that the domain values for this element are not strictly an enumerated list.
   */
  productId?: FieldWithMeta<String>[];
  /**
   * The CDM product qualifier, which corresponds to the outcome of the isProduct qualification logic. This value is derived by the CDM from the product payout features.
   */
  productQualifier?: string;
  /**
   * A classification of the type of product. FpML defines a simple product categorisation using a coding scheme.
   */
  productType?: FieldWithMeta<String>[];
  /**
   *  A classification of additional risk classes of the trade, if any. FpML defines a simple asset class categorisation using a coding scheme.
   */
  secondaryAssetdata?: FieldWithMeta<AssetClassEnum>[];
}
  
/**
 * The product identifier, composed of an identifier, a source and a product taxonomy. The source is optional because it can be specified through the scheme that is associated with the identifier. As FpML doesn't specify a scheme as part of the standard, that scheme cannot be mapped to the CDM ProductIdSourceEnum. The associated rosettaKey denotes the ability to associate a hash value to the ProductIdentifier instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface ProductIdentifier {
  /**
   *  A unique identifier of an asset provided by a public source that is specified in the source attribute.
   */
  identifier?: FieldWithMeta<String>[];
  meta?: MetaFields;
  /**
   * The product taxonomy value(s) associated with a product.
   */
  productTaxonomy?: ProductTaxonomy[];
  /**
   * The identifier source.
   */
  source?: ProductIdSourceEnum;
}
  
/**
 * The product taxonomy, which is composed of a taxonomy value and a taxonomy source.
 */
export interface ProductTaxonomy {
  /**
   * The taxonomy source.
   */
  taxonomySource?: TaxonomySourceEnum;
  /**
   * The taxonomy value.
   */
  taxonomyValue?: string;
}
  
/**
 * A class to specify the terms for calculating a payout to protect the buyer of the swap in the case of a qualified credit event. These terms include the notional amount, the applicable credit events, the reference obligation, and in the case of a CDS on mortgage-backed securities, the floatingAmountEvents.
 */
export interface ProtectionTerms extends PayoutBase {
  /**
   * Specifies the applicable Credit Events that would trigger a settlement, as specified in the related Confirmation and defined in the ISDA 2014 Credit Definition article IV section 4.1.
   */
  creditEvents?: CreditEvents;
  /**
   * This element contains the ISDA terms relating to the floating rate payment events and the implied additional fixed payments, applicable to the credit derivatives transactions on mortgage-backed securities with pay-as-you-go or physical settlement.
   */
  floatingAmountEvents?: FloatingAmountEvents;
  meta?: MetaFields;
  /**
   * The underlying obligations of the reference entity on which you are buying or selling protection. The credit events Failure to Pay, Obligation Acceleration, Obligation Default, Restructuring, Repudiation/Moratorium are defined with respect to these obligations.
   */
  obligations?: Obligations;
  /**
   * Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).
   */
  payoutQuantity?: ResolvablePayoutQuantity;
}
  
export interface Prsn {
  ctryOfBrnch?: string;
  othr?: Othr;
}
  
export interface PubliclyAvailableInformation {
  /**
   * A public information source, e.g. a particular newspaper or electronic news service, that may publish relevant information used in the determination of whether or not a credit event has occurred. ISDA 2003 Term: Public Source.
   */
  publicSource?: string[];
  /**
   * The minimum number of the specified public information sources that must publish information that reasonably confirms that a credit event has occurred. The market convention is two. ISDA 2003 Term: Specified Number.
   */
  specifiedNumber?: number;
  /**
   * If this element is specified and set to 'true', indicates that ISDA defined Standard Public Sources are applicable.
   */
  standardPublicSources?: boolean;
}
  
export interface Qty {
  unit?: string;
}
  
/**
 *  A class to specify an amount/number of securities or tangible assets such as a commodity product. The units qualifier is not used if the Quantity class is applied to securities.
 */
export interface Quantity {
  /**
   * The amount to quantify 
   */
  amount?: number;
  /**
   * The unit of measure, applicable to physical assets, e.g. MWh or MMBTU.
   */
  unit?: UnitEnum;
}
  
/**
 * The primitive event to represent a change in quantity or notional.
 */
export interface QuantityChangePrimitive {
  /**
   * The state of the trade (either an execution or a contract, as a follow-up from the event.
   */
  after?: Trade;
  /**
   * The state of the trade (either an execution or a contract, before the event.
   */
  before?: ReferenceWithMeta<Trade>;
}
  
export interface QuantityGroup {
  amount?: number[];
  currency?: string;
}
  
export interface QuantityGroups {
  quantityGroups?: QuantityGroup[];
}
  
/**
 *  Class to specify a mechanism for a quantity to be set as a multiplier to another (reference) quantity, based on a price observation. At the moment this class only supports FX or Equity-linked notional and re-uses existing building blocks for those 2 cases, until such time when component can be made more generic. This captures the case of resetting cross-currency swaps and resetting equity swaps.
 */
export interface QuantityMultiplier {
  /**
   * Multiplier specified as an FX-linked schedule, e.g. for a resetting cross-currency swap..
   */
  fxLinkedNotionalSchedule?: FxLinkedNotionalSchedule;
  multiplierValue?: number;
}
  
/**
 * Specification of a product's quantity as a single, non-negative amount. The asset identifier qualifies the quantity being specified and can be used as a referencing mechanism in the underlying payout legs to 'resolve' the product, by fetching the actual amount from the appropriate quantity notation. For some product cases, several quantity notations can be associated with a single product: e.g. for an Equity Swap, both the notional and (optionally) the number of securities can be specified, with a validation to check that they are consistent in relation to the equity price. 
 */
export interface QuantityNotation {
  /**
   * identifier for the asset being quantified, allowing it to be positioned in the product definition.
   */
  assetIdentifier?: AssetIdentifier;
  /**
   * The quantity as a non-negative amount.
   */
  quantity?: NonNegativeQuantity;
}
  
/**
 * Determines the currency rate that the seller of the equity amounts will apply at each valuation date for converting the respective amounts into a currency that is different from the currency denomination of the underlier.
 */
export interface Quanto {
  /**
   * Specifies a currency conversion rate.
   */
  fxRate?: FxRate[];
  /**
   * Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.
   */
  fxSpotRateSource?: FxSpotRateSource;
}
  
/**
 * A class that describes the composition of a rate that has been quoted or is to be quoted. This includes the two currencies and the quotation relationship between the two currencies and is used as a building block throughout the FX specification.
 */
export interface QuotedCurrencyPair {
  /**
   * The first currency specified when a pair of currencies is to be evaluated.
   */
  currency1?: FieldWithMeta<String>;
  /**
   * The second currency specified when a pair of currencies is to be evaluated.
   */
  currency2?: FieldWithMeta<String>;
  /**
   * The method by which the exchange rate is quoted.
   */
  quoteBasis?: QuoteBasisEnum;
}
  
/**
 * A class defining parameters associated with an individual observation or fixing. This class forms part of the cashflow representation of a stream.
 */
export interface RateObservation {
  /**
   * The adjusted fixing date, i.e. the actual date the rate is observed. The date should already be adjusted for any applicable business day convention.
   */
  adjustedFixingDate?: Date;
  /**
   * The value representing the forecast rate used to calculate the forecast future value of the accrual period.A value of 1% should be represented as 0.01.
   */
  forecastRate?: number;
  meta?: MetaFields;
  /**
   * The number of days weighting to be associated with the rate observation, i.e. the number of days such rate is in effect. This is applicable in the case of a weighted average method of calculation where more than one reset date is established for a single calculation period.
   */
  observationWeight?: number;
  /**
   * The actual observed rate before any required rate treatment is applied, e.g. before converting a rate quoted on a discount basis to an equivalent yield. An observed rate of 5% would be represented as 0.05.
   */
  observedRate?: number;
  /**
   * A pointer style reference to a floating rate component defined as part of a stub calculation period amount component. It is only required when it is necessary to distinguish two rate observations for the same fixing date which could occur when linear interpolation of two different rates occurs for a stub calculation period.
   */
  rateReference?: ReferenceWithMeta<RateObservation>;
  /**
   * The reset date.
   */
  resetDate?: Date;
  /**
   * The value representing the forecast rate after applying rate treatment rules. A value of 1% should be represented as 0.01.
   */
  treatedForecastRate?: number;
  /**
   * The observed rate after any required rate treatment is applied. A treated rate of 5% would be represented as 0.05.
   */
  treatedRate?: number;
}
  
/**
 *  A class to specify the fixed interest rate, floating interest rate or inflation rate.
 */
export interface RateSpecification {
  /**
   * The fixed rate or fixed rate specification expressed as explicit fixed rates and dates.
   */
  fixedRate?: FixedRateSpecification;
  /**
   * The floating interest rate specification, which includes the definition of the floating rate index. the tenor, the initial value, and, when applicable, the spread, the rounding convention, the averaging method and the negative interest rate treatment.
   */
  floatingRate?: FloatingRateSpecification;
  /**
   * An inflation rate calculation definition.
   */
  inflationRate?: InflationRateSpecification;
}
  
export interface RateSpecificationBase {
  assetIdentifier?: AssetIdentifier;
}
  
/**
 * A class to specify dispute resolution terms for Recalculation of Value
 */
export interface RecalculationOfValue {
  /**
   * The parties' Recalculation of Value terms.
   */
  partyElection?: RecalculationOfValueElection[];
}
  
/**
 * A class to specify Recalculation of Value terms that will be applicable
 */
export interface RecalculationOfValueElection {
  /**
   * The elective party.
   */
  party?: string;
  recalculationOfValueElection?: RecalculationOfValueElectionEnum;
  /**
   * Additional Recalculation of Value terms when specified
   */
  recalculationOfValueTerms?: string;
}
  
export interface RefRate {
  indx?: string;
  nm?: string;
}
  
/**
 * A class to describe an institution (party) identified by means of a coding scheme and an optional name.
 */
export interface ReferenceBank {
  /**
   * An institution (party) identifier, e.g. a bank identifier code (BIC). FpML specifies a referenceBankIdScheme.
   */
  referenceBankId?: FieldWithMeta<String>;
  /**
   * The name of the institution (party). A free format string. FpML does not define usage rules for the element.
   */
  referenceBankName?: string;
}
  
/**
 * A class specifying the Credit Default Swap Reference Information.
 */
export interface ReferenceInformation {
  /**
   * Indicates whether an obligation of the Reference Entity, guaranteed by the Reference Entity on behalf of a non-Affiliate, is to be considered an Obligation for the purpose of the transaction. It will be considered an obligation if allGuarantees is applicable (true) and not if allGuarantees is inapplicable (false). ISDA 2003 Term: All Guarantees.
   */
  allGuarantees?: boolean;
  /**
   * Used to indicate that there is no Reference Obligation associated with this Credit Default Swap and that there will never be one.
   */
  noReferenceObligation?: boolean;
  /**
   * The corporate or sovereign entity which is subject to the swap transaction and any successor that assumes all or substantially all of its contractual and other obligations. Reference Entities cannot be senior or subordinated. It is the obligations of the Reference Entities that can be senior or subordinated. ISDA 2014 Credit definitions article II section 2.1: `Reference Entity` means the entity specified as such in the related Confirmation.
   */
  referenceEntity?: LegalEntity;
  /**
   * The Reference Obligation is a financial instrument that is either issued or guaranteed by the reference entity. It serves to clarify the precise reference entity protection is being offered upon, and its legal position with regard to other related firms (parents/subsidiaries). Furthermore the Reference Obligation is ALWAYS deliverable and establishes the Pari Passu ranking (as the deliverable bonds must rank equal to the reference obligation). ISDA 2003 Term: Reference Obligation.
   */
  referenceObligation?: ReferenceObligation[];
  /**
   * Applicable to the transactions on mortgage-backed security, which can make use of a reference policy. Presence of the element with value set to 'true' indicates that the reference policy is applicable; absence implies that it is not.
   */
  referencePolicy?: boolean;
  /**
   * Used to determine (a) for physically settled trades, the Physical Settlement Amount, which equals the Floating Rate Payer Calculation Amount times the Reference Price and (b) for cash settled trades, the Cash Settlement Amount, which equals the greater of (i) the difference between the Reference Price and the Final Price and (ii) zero. ISDA 2003 Term: Reference Price.
   */
  referencePrice?: number;
  /**
   * With respect to any day, the list of Syndicated Secured Obligations of the Designated Priority of the Reference Entity published by Markit Group Limited or any successor thereto appointed by the Specified Dealers (the 'Secured List Publisher') on or most recently before such day, which list is currently available at [http://www.markit.com]. ISDA 2003 Term: Relevant Secured List.
   */
  securedList?: boolean;
  /**
   * Used to indicate that the Reference obligation associated with the Credit Default Swap is currently not known. This is not valid for Legal Confirmation purposes, but is valid for earlier stages in the trade life cycle (e.g. Broker Confirmation).
   */
  unknownReferenceObligation?: boolean;
}
  
/**
 * A class to specify the reference obligation that is associated with a credit derivative instrument.
 */
export interface ReferenceObligation {
  /**
   * Identifies the underlying asset when it is a series or a class of bonds. As a difference with FpML, the CDM specifies the bond only with this product identifier attribute. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
   */
  bond?: Bond;
  /**
   * Identifies the underlying asset when it is a convertible bond. As a difference with FpML, the CDM specifies the convertible bond only with this product identifier attribute. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
   */
  convertibleBond?: ConvertibleBond;
  /**
   * The party that guarantees by way of a contractual arrangement to pay the debts of an obligor if the obligor is unable to make the required payments itself. ISDA 2003 Term: Guarantor.
   */
  guarantor?: LegalEntity;
  /**
   * A pointer style reference to a reference entity defined elsewhere in the document. Used when the reference entity is the guarantor.
   */
  guarantorReference?: string;
  /**
   * Identifies the underlying asset when it is a loan.
   */
  loan?: Loan;
  /**
   * Identifies the underlying asset when it is a mortgage backed security.
   */
  mortgageBackedSecurity?: MortgageBackedSecurity;
  /**
   * The entity primarily responsible for repaying debt to a creditor as a result of borrowing or issuing bonds. ISDA 2003 Term: Primary Obligor.
   */
  primaryObligor?: LegalEntity;
  /**
   * A pointer style reference to a reference entity defined elsewhere in the document. Used when the reference entity is the primary obligor.
   */
  primaryObligorReference?: ReferenceWithMeta<LegalEntity>;
  /**
   * Indicates if the reference obligation is a Standard Reference Obligation. ISDA 2014 Term: Standard Reference Obligation.
   */
  standardReferenceObligation?: boolean;
}
  
export interface ReferencePair {
  /**
   * Defines the reference entity types corresponding to a list of types in the ISDA First to Default documentation.
   */
  entityType?: FieldWithMeta<EntityTypeEnum>;
  /**
   * Used to indicate that there is no Reference Obligation associated with this Credit Default Swap and that there will never be one.
   */
  noReferenceObligation?: boolean;
  /**
   * The corporate or sovereign entity on which you are buying or selling protection and any successor that assumes all or substantially all of its contractual and other obligations. It is vital to use the correct legal name of the entity and to be careful not to choose a subsidiary if you really want to trade protection on a parent company. Please note, Reference Entities cannot be senior or subordinated. It is the obligations of the Reference Entities that can be senior or subordinated. ISDA 2003 Term: Reference Entity.
   */
  referenceEntity?: LegalEntity;
  /**
   * The Reference Obligation is a financial instrument that is either issued or guaranteed by the reference entity. It serves to clarify the precise reference entity protection is being offered upon, and its legal position with regard to other related firms (parents/subsidiaries). Furthermore the Reference Obligation is ALWAYS deliverable and establishes the Pari Passu ranking (as the deliverable bonds must rank equal to the reference obligation). ISDA 2003 Term: Reference Obligation.
   */
  referenceObligation?: ReferenceObligation;
}
  
/**
 * This type contains all the reference pool items to define the reference entity and reference obligation(s) in the basket.
 */
export interface ReferencePool {
  /**
   * This type contains all the constituent weight and reference information.
   */
  referencePoolItem?: ReferencePoolItem[];
}
  
/**
 * This type contains all the constituent weight and reference information.
 */
export interface ReferencePoolItem {
  /**
   * Reference to the cash settlement terms applicable to this item.
   */
  cashSettlementTermsReference?: ReferenceWithMeta<CashSettlementTerms>;
  /**
   * Describes the weight of each of the constituents within the basket. If not provided, it is assumed to be equal weighted.
   */
  constituentWeight?: ConstituentWeight;
  /**
   * Reference to the physical settlement terms applicable to this item.
   */
  physicalSettlementTermsReference?: ReferenceWithMeta<PhysicalSettlementTerms>;
  /**
   * Reference to the documentation terms applicable to this item.
   */
  protectionTermsReference?: ReferenceWithMeta<ProtectionTerms>;
  referencePair?: ReferencePair;
}
  
/**
 * A complex type used to specify the option and convertible bond option strike when expressed in reference to a swap curve.
 */
export interface ReferenceSwapCurve {
  /**
   * Amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date. (The market practice in the convertible bond option space being that the buyer should be penalised if he/she exercises the option early on.)
   */
  makeWholeAmount?: MakeWholeAmount;
  swapUnwindValue?: SwapCurveValuation;
}
  
/**
 * A class to specify the regulatory regimes elections by the respective parties a legal agreement. 2016 ISDA Credit Support Annex for Initial Margin: Regime.
 */
export interface Regime {
  /**
   * The parties' regulatory regime election.
   */
  partyElection?: RegimeElection[];
}
  
/**
 * A class to specify the parties' respective elections with respect to the applicable regulatory regime(s) in their capacity as Secured Party (English Law & New York Law) or Obligee (Japanese Law).
 */
export interface RegimeElection {
  /**
   * The additional regulatory regime(s) that might be specified by the parties to a legal agreement. ISDA 2016 Credit Support Annex for Initial Margin paragraph 13, General Principles, (ll): The parties may from time to time agree in writing that other regimes also comprise `Regimes` and that the General Principles be adopted and/or amended to accommodate such additional Regimes.
   */
  additionalRegime?: AdditionalRegime[];
  /**
   * The set of regulatory regimes and associated provisions applicable to the respective parties to the legal agreement.
   */
  applicableRegime?: ApplicableRegime[];
  /**
   * The elective party.
   */
  party?: ReferenceWithMeta<Party>;
}
  
/**
 * A class that is used by the ApplicableRegime and the AdditionalRegime classes to specify the regulatory regime terms which are referred to as part of certain legal agreements, such as such as the ISDA 2016 and 2018 CSA for Initial Margin.
 */
export interface RegimeTerms {
  /**
   * The Additional Type of transaction that can require the collection or delivery of initial margin under the specified regulatory regime for the purposes of Covered Transactions, as specified in ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (b)(B).
   */
  additionalType?: AdditionalTypeEnum;
  /**
   * Other specified terms applicable to Regime elections
   */
  asSpecified?: string;
  /**
   * A boolean flag to specify whether the regulatory regime is applicable.
   */
  isApplicable?: boolean;
  /**
   * The party to which the regime terms apply to.
   */
  party?: string;
  /**
   * ISDA 2016 CSA for Initial Margin, paragraph 13 (b)(i): if `Retrospective Effect` is specified as applicable to a Regime (a `Retrospective Regime`) then all Covered Transactions (IM) under all other Regimes with an earlier Regime Effective Time will, to the extent that they would have been Covered Transactions (IM) under such Retrospective Regime had such Transactions been entered into at or after the Regime Effective Time of the Retrospective Regime, be deemed to be Covered Transactions (IM) for such Retrospective Regime.
   */
  retrospectiveEffect?: boolean;
  /**
   * The election for SIMM exception to the regulatory regime clause of the ISDA 2016 and 2018 CSA for Initial Margin as either a normalized value specified as part of an enumeration or a customized value specified of type string. ISDA 2016 Credit Support Annex for Initial Margin paragraph 13, Regime: SIMM Exception.
   */
  simmException?: SimmException;
}
  
/**
 * A class to specify a related legal agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (s): Other CSA and Japanese Law CSA (VM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (o): Other CSA.
 */
export interface RelatedAgreement {
  /**
   * The qualification of whether some other related agreement is specified (True) or not (False).
   */
  isSpecified?: boolean;
  /**
   * The specification of this other agreement, when the qualification is True.
   */
  legalDocument?: string;
}
  
export interface RelatedParty {
  /**
   * Reference to an account.
   */
  accountReference?: ReferenceWithMeta<Account>;
  /**
   * Reference to a party.
   */
  partyReference?: ReferenceWithMeta<Party>;
  /**
   * The category of the relationship. The related party performs the role specified in this field for the base party. For example, if the role is ,Guarantor,, the related party acts as a guarantor for the base party.
   */
  role?: PartyRoleEnum;
}
  
/**
 * A class defining a date (referred to as the derived date) as a relative offset from another date (referred to as the anchor date). If the anchor date is itself an adjustable date then the offset is assumed to be calculated from the adjusted anchor date. A number of different scenarios can be supported, namely; 1) the derived date may simply be a number of calendar periods (days, weeks, months or years) preceding or following the anchor date; 2) the unadjusted derived date may be a number of calendar periods (days, weeks, months or years) preceding or following the anchor date with the resulting unadjusted derived date subject to adjustment in accordance with a specified business day convention, i.e. the derived date must fall on a good business day; 3) the derived date may be a number of business days preceding or following the anchor date. Note that the businessDayConvention specifies any required adjustment to the unadjusted derived date. A negative or positive value in the periodMultiplier indicates whether the unadjusted derived precedes or follows the anchor date. The businessDayConvention should contain a value NONE if the day type element contains a value of Business (since specifying a negative or positive business days offset would already guarantee that the derived date would fall on a good business day in the specified business centers).
 */
export interface RelativeDateOffset extends Offset {
  /**
   * The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: Date;
  businessCenters?: BusinessCenters;
  /**
   * A pointer style reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.
   */
  businessCentersReference?: ReferenceWithMeta<BusinessCenters>;
  /**
   * The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).
   */
  businessDayConvention?: BusinessDayConventionEnum;
  /**
   * Specifies the anchor as an href attribute. The href attribute value is a pointer style reference to the element or component elsewhere in the document where the anchor date is defined.
   */
  dateRelativeTo?: ReferenceWithMeta<Date>;
  /**
   * In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.
   */
  dayType?: DayTypeEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).
   */
  period?: PeriodEnum;
  /**
   * A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.
   */
  periodMultiplier?: number;
}
  
/**
 * A class describing a set of dates defined as relative to another set of dates.
 */
export interface RelativeDates extends RelativeDateOffset {
  /**
   * The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1.
   */
  periodSkip?: number;
  /**
   * The first and last dates of a schedule. This can be used to restrict the range of values in a reference series of dates.
   */
  scheduleBounds?: DateRange;
  /**
   * The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).
   */
  adjustedDate?: Date;
  businessCenters?: BusinessCenters;
  /**
   * A pointer style reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.
   */
  businessCentersReference?: ReferenceWithMeta<BusinessCenters>;
  /**
   * The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).
   */
  businessDayConvention?: BusinessDayConventionEnum;
  /**
   * Specifies the anchor as an href attribute. The href attribute value is a pointer style reference to the element or component elsewhere in the document where the anchor date is defined.
   */
  dateRelativeTo?: ReferenceWithMeta<Date>;
  /**
   * In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.
   */
  dayType?: DayTypeEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).
   */
  period?: PeriodEnum;
  /**
   * A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.
   */
  periodMultiplier?: number;
}
  
/**
 *  Bond price relative to a benchmark, as in a convertible bond.
 */
export interface RelativePrice {
  /**
   * Bond equity model for convertible bonds.
   */
  bondEquityModel?: BondEquityModel[];
  /**
   * The spread to a benchmark.
   */
  spread?: number;
}
  
export interface Representations {
  /**
   * If true, then additional acknowledgements are applicable.
   */
  additionalAcknowledgements?: boolean;
  /**
   * If true, then agreements regarding hedging are applicable.
   */
  agreementsRegardingHedging?: boolean;
  /**
   * If present and true, then index disclaimer is applicable.
   */
  indexDisclaimer?: boolean;
  /**
   * If true, then non reliance is applicable.
   */
  nonReliance?: boolean;
}
  
/**
 * A data defining:  the parameters used to generate the reset dates schedule and associated fixing dates. The reset dates are the dates on which the new index value (which is observed on the fixing date) is applied for each period and on which the interest rate hence begins to accrue.
 */
export interface ResetDates {
  /**
   * A pointer style reference to the associated calculation period dates component defined elsewhere in the document.
   */
  calculationPeriodDatesReference?: ReferenceWithMeta<CalculationPeriodDates>;
  /**
   * This attribute is not part of the FpML ResetDate, and has been added as part of the CDM to support the credit derivatives final fixing date.
   */
  finalFixingDate?: AdjustableDate;
  /**
   * The fixing dates are the dates on which the index values are observed. The fixing dates are specified by reference to the reset date through business days offset and an associated set of financial business centers. Normally these offset calculation rules will be those specified in the ISDA definition for the relevant floating rate index (ISDA's Floating Rate Option). However, non-standard offset calculation rules may apply for a trade if mutually agreed by the principal parties to the transaction.
   */
  fixingDates?: RelativeDateOffset;
  /**
   * The initial fixing date.
   */
  initialFixingDate?: InitialFixingDate;
  meta?: MetaFields;
  /**
   * Specifies the number of business days before the period end date when the rate cut-off date is assumed to apply. The financial business centers associated with determining the rate cut-off date are those specified in the reset dates adjustments. The rate cut-off number of days must be a negative integer (a value of zero would imply no rate cut off applies in which case the rateCutOffDaysOffset element should not be included). The relevant rate for each reset date in the period from, and including, a rate cut-off date to, but excluding, the next applicable period end date (or, in the case of the last calculation period, the termination date) will (solely for purposes of calculating the floating amount payable on the next applicable payment date) be deemed to be the relevant rate in effect on that rate cut-off date. For example, if rate cut-off days for a daily averaging deal is -2 business days, then the refix rate applied on (period end date - 2 days) will also be applied as the reset on (period end date - 1 day), i.e. the actual number of reset dates remains the same but from the rate cut-off date until the period end date, the same refix rate is applied. Note that in the case of several calculation periods contributing to a single payment, the rate cut-off is assumed only to apply to the final calculation period contributing to that payment. The day type associated with the offset must imply a business days offset.
   */
  rateCutOffDaysOffset?: Offset;
  /**
   * The definition of the business day convention and financial business centers used for adjusting the reset date if it would otherwise fall on a day that is not a business day in the specified business center.
   */
  resetDatesAdjustments?: BusinessDayAdjustments;
  /**
   * The frequency at which the reset dates occur. In the case of a weekly reset frequency, also specifies the day of the week that the reset occurs. If the reset frequency is greater than the calculation period frequency then this implies that more than one reset is established for each calculation period and some form of rate averaging is applicable.
   */
  resetFrequency?: ResetFrequency;
  /**
   * Specifies whether the reset dates are determined with respect to each adjusted calculation period start date or adjusted calculation period end date. If the reset frequency is specified as daily this element must not be included.
   */
  resetRelativeTo?: ResetRelativeToEnum;
}
  
/**
 * A class defining the reset frequency. In the case of a weekly reset, also specifies the day of the week that the reset occurs. If the reset frequency is greater than the calculation period frequency the this implies that more or more reset dates is established for each calculation period and some form of rate averaging is applicable. The specific averaging method of calculation is specified in FloatingRateCalculation. In case the reset frequency is of value T (term), the period is defined by the swap/swapStream/calculationPerioDates/effectiveDate and the swap/swapStream/calculationPerioDates/terminationDate.
 */
export interface ResetFrequency extends Frequency {
  /**
   * The day of the week on which a weekly reset date occurs. This element must be included if the reset frequency is defined as weekly and not otherwise.
   */
  weeklyRollConvention?: WeeklyRollConventionEnum;
  meta?: MetaFields;
  /**
   * A time period, e.g. a day, week, month, year or term of the stream.
   */
  period?: PeriodExtendedEnum;
  /**
   * A time period multiplier, e.g. 1, 2, or 3. If the period value is T (Term) then period multiplier must contain the value 1.
   */
  periodMultiplier?: number;
}
  
/**
 * The primitive event to represent a reset.
 */
export interface ResetPrimitive {
  /**
   * Contract state after the reset, that embeds the reset value as an updated field on the contract state.
   */
  after?: ContractState;
  /**
   * Contract state before the reset, as per previous events processed on the contract.
   */
  before?: ReferenceWithMeta<ContractState>;
}
  
/**
 *  Generic class to specify the quantity for different payout legs in a contractual product, when that quantity can vary across payout legs or across time. A resolvable quantity can always be resolved into one number based on: (i) the quantity notation that must be specified alongside the contractual product description and (ii) a given date, where applicable. In addition to the base case where quantity is directly specified as a number as part of the quantity notation, the use cases are: (i) quantity based on some pre-defined schedule (eg amortising notional), (ii) quantity based on some pre-defined events (eg resetting cross-currency notional), or quantity set as reference to another quantity (eg equity notional as no. securities x price).
 */
export interface ResolvablePayoutQuantity {
  /**
   * Identifier for the asset being quantified.
   */
  assetIdentifier?: AssetIdentifier;
  /**
   * The future value notional is specific to BRL CDI swaps, and is specified alongside the notional amount. The value is calculated as follows: Future Value Notional = Notional Amount * (1 + Fixed Rate) ^ (Fixed Rate Day Count Fraction). The currency should always match that expressed in the notional schedule. The value date should match the adjusted termination date.
   */
  futureValueNotional?: FutureValueAmount;
  meta?: MetaFields;
  /**
   * Quantity multiplier is specified on top of a reference quantity and is used as a multiplying factor when resolving the quantity. A quantity multiplier can only exist when the resolvable quantity specifies a reference quantity.
   */
  quantityMultiplier?: QuantityMultiplier;
  /**
   * Reference quantity when resolvable quantity is defined as relative to another (resolvable) quantity. A resolvable quantity needs to contain either an absolute quantity or a reference to another (resolvable) quantity. This requirement is captured by a choice rule on the class.
   */
  quantityReference?: ReferenceWithMeta<ResolvablePayoutQuantity>;
  /**
   * Quantity specified as an absolute number, (possibly) with some step schedule, (possibly) with some unit, such as the currency in the case of a notional. This attribute is optional, as long as a quantity notation tag is specified so that quantity can be resolved. There needs to be at least 1 such absolutely defined quantity across payout legs of a product, to define an anchor that other payout quantities can refer to. This is enforced by a data rule on the Payout class.
   */
  quantitySchedule?: NonNegativeQuantitySchedule;
  /**
   * Whether the quantity is resettable
   */
  reset?: boolean;
}
  
/**
 * Describes the resource that contains the media representation of a business event (i.e used for stating the Publicly Available Information). For example, can describe a file or a URL that represents the event. This type is an extended version of a type defined by RIXML (www.rixml.org).  Rosetta restricts the FpML implementation by not providing the ability to associated a document in hexadecimalBinary or base64Binary until such time that actual use cases will come up.
 */
export interface Resource {
  /**
   * Any additional comments that are deemed necessary. For example, which software version is required to open the document? Or, how does this resource relate to the others for this event?
   */
  comments?: string;
  /**
   * Indicates the language of the resource, described using the ISO 639-2/T Code.
   */
  language?: FieldWithMeta<String>;
  /**
   * Indicates the length of the resource. For example, if the resource were a PDF file, the length would be in pages.
   */
  length?: ResourceLength;
  /**
   * Indicates the type of media used to store the content. mimeType is used to determine the software product(s) that can read the content. MIME Types are described in RFC 2046.
   */
  mimeType?: FieldWithMeta<String>;
  /**
   * The name of the resource.  It is specified as a NormalizedString in FpML.
   */
  name?: string;
  /**
   * The unique identifier of the resource within the event. FpML specifies this element of type resourceIdScheme but with no specified value.
   */
  resourceId?: FieldWithMeta<String>;
  /**
   * A description of the type of the resource, e.g. a confirmation.
   */
  resourceType?: FieldWithMeta<ResourceTypeEnum>;
  /**
   * Indicates the size of the resource in bytes. It could be used by the end user to estimate the download time and storage needs.
   */
  sizeInBytes?: number;
  /**
   * Provides extra information as string. In case the extra information is in XML format, a CDATA section must be placed around the source message to prevent its interpretation as XML content.
   */
  string?: string;
  /**
   * Indicates where the resource can be found, as a URL that references the information on a web server accessible to the message recipient.
   */
  url?: string;
}
  
/**
 * A class to indicate the length of the resource.
 */
export interface ResourceLength {
  /**
   * The length unit of the resource. For example, pages (pdf, text documents) or time (audio, video files).
   */
  lengthUnit?: LengthUnitEnum;
  /**
   * The length value of the resource.
   */
  lengthValue?: number;
}
  
export interface Restructuring {
  /**
   * Indicates whether the restructuring provision is applicable.
   */
  applicable?: boolean;
  /**
   * Presence of this element and value set to 'true' indicates that Section 3.9 of the 2003 Credit Derivatives Definitions shall apply. Absence of this element indicates that Section 3.9 shall not apply. NOTE: Not allowed under ISDA Credit 1999.
   */
  multipleCreditEventNotices?: boolean;
  /**
   * In relation to a restructuring credit event, unless multiple holder obligation is not specified restructurings are limited to multiple holder obligations. A multiple holder obligation means an obligation that is held by more than three holders that are not affiliates of each other and where at least two thirds of the holders must agree to the event that constitutes the restructuring credit event. ISDA 2003 Term: Multiple Holder Obligation.
   */
  multipleHolderObligation?: boolean;
  /**
   * Specifies the type of restructuring that is applicable.
   */
  restructuringType?: FieldWithMeta<RestructuringEnum>;
}
  
/**
 * A class to specify the application of Interest Amount with respect the Return Amount. ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (n)(ii).
 */
export interface ReturnAmount {
  /**
   * Custom election that might be specified by the parties to the agreement.
   */
  customElection?: string;
  /**
   * Default language is included when True, and excluded when False.
   */
  includesDefaultLanguage?: boolean;
}
  
/**
 * A class to specify the Pledgor/Obligor/Chargor Rights Event election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (j): Chargor Rights Event. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (j): Obligor Rights Event. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (j): Pledgor Rights Event.
 */
export interface RightsEvent {
  /**
   * If specified as applicable here, a Chargor Rights Event will not occur unless the Chargor (A) has provided a statement to the Secured Party in respect of such Early                       Termination Date
   */
  chargorFullDischarge?: boolean;
  /**
   * A custom Pledgor/Obligor/Chargor Rights Event election might be specified by the parties.
   */
  customElection?: string;
  /**
   * The Pledgor/Obligor/Chargor Rights Event election includes cooling off language when the attribute is set of True.
   */
  includeCoolingOffLanguage?: boolean;
  partyElection?: ChargorRightsEventElection[];
}
  
/**
 * A class defining a rounding direction and precision to be used in the rounding of a rate.
 */
export interface Rounding {
  /**
   * Specifies the rounding precision in terms of a number of decimal places. Note how a percentage rate rounding of 5 decimal places is expressed as a rounding precision of 7 in the FpML document since the percentage is expressed as a decimal, e.g. 9.876543% (or 0.09876543) being rounded to the nearest 5 decimal places is 9.87654% (or 0.0987654).
   */
  precision?: number;
  /**
   * Specifies the rounding direction.
   */
  roundingDirection?: RoundingDirectionEnum;
}
  
/**
 * A class defining a schedule of rates or amounts in terms of an initial value and then a series of step date and value pairs. On each step date the rate or amount changes to the new step value. The series of step date and value pairs are optional. If not specified, this implies that the initial value remains unchanged over time.
 */
export interface Schedule {
  /**
   * The initial rate or amount, as the case may be. An initial rate of 5% would be represented as 0.05.
   */
  initialValue?: number;
  /**
   * The schedule of step date and value pairs. On each step date the associated step value becomes effective A list of steps may be ordered in the document by ascending step date. An FpML document containing an unordered list of steps is still regarded as a conformant document.
   */
  step?: Step[];
}
  
export interface SchmeNm {
  prtry?: string;
}
  
/**
 * A class to specify Secured Party Rights Event language
 */
export interface SecuredPartyRightsEvent {
  earlyTerminationDateOptionalLanguage?: boolean;
  failureToPayEarlyTermination?: boolean;
  securedPartyRightsEventElection?: SecuredPartyRightsEventElection[];
}
  
/**
 * A class to specify party specific Secured Party Rights Event language
 */
export interface SecuredPartyRightsEventElection {
  /**
   * The elective party.
   */
  party?: string;
  rightsEvent?: boolean;
}
  
export interface Security {
  bond?: Bond;
  convertibleBond?: ConvertibleBond;
  equity?: Equity;
  exchangeTradedFund?: ExchangeTradedFund;
  mortgageBackedSecurity?: MortgageBackedSecurity;
  mutualFund?: MutualFund;
  warrant?: Warrant;
}
  
/**
 *  Terms defining a security leg in a securities financing transaction, which can either be the near leg or the far leg and is closely modelled onto the nearLeg and farLeg types in FpML
 */
export interface SecurityLeg {
  /**
   * Whether the leg is a buyer or seller of security
   */
  buyerSeller?: BuyerSeller;
  /**
   * Delivery Date for the transaction. Delivery Date can be populated when it is not equal to the Settlement Date.
   */
  deliveryDate?: AdjustableOrRelativeDate;
  /**
   * Specifies a delivery method for the security transaction.
   */
  deliveryMethod?: DeliveryMethodEnum;
  /**
   * FX rate in case when cash settlement amount is in a different currency to the security.
   */
  fxRate?: ExchangeRate;
  meta?: MetaFields;
  /**
   * Settlement amount for the security leg
   */
  settlementAmount?: Money;
  /**
   * Settlement Currency for use where the Settlement Amount cannot be known in advance.
   */
  settlementCurrency?: string;
  /**
   * Settlement or Payment Date for the security leg
   */
  settlementDate?: AdjustableOrRelativeDate;
}
  
/**
 *  Security payout specification in case the product payout involves some form of security collateral, as in a securities financing transaction.
 */
export interface SecurityPayout {
  /**
   * RepoDurationEnum.
   */
  initialMargin?: InitialMargin;
  meta?: MetaFields;
  /**
   * A duration code for the repo transaction. This defines a type of a repo transaction with fixed duration.
   */
  repoDuration?: RepoDurationEnum;
  /**
   * Each SecurityLeg represent a buy/sell at different dates, typically 1 near leg and 1 far leg in a securities financing transaction.
   */
  securityLeg?: SecurityLeg[];
  /**
   * The underlying securities and their valuation for the security leg.
   */
  securityValuation?: SecurityValuation[];
}
  
export interface SecurityTransferBreakdown {
  quantity?: number;
  /**
   * The securities that are being transfered
   */
  security?: Security[];
  /**
   * The transferee and transferor party information.
   */
  transferorTransferee?: TransferorTransferee;
}
  
export interface SecurityTransferComponent extends TransferBase {
  assetTransferType?: AssetTransferTypeEnum;
  /**
   * The security transfer breakdown, when the transfer corresponds to a net transfer across several components which breakdown is deemed relevant (e.g. the net security transfer related to several contracts).
   */
  breakdown?: SecurityTransferBreakdown[];
  quantity?: number;
  /**
   * The security that is being transfered
   */
  security?: Security;
  /**
   * The transferee and transferor party information.
   */
  transferorTransferee?: TransferorTransferee;
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
/**
 *  Terms defining the security valuation method as part of a security leg in a securities fianncing transaction and closely modelled onto the CollateralValuation type in FpML.
 */
export interface SecurityValuation {
  /**
   * The security valuation model choice, based on either a nominal amount or a number of units.
   */
  securityValuationModel?: SecurityValuationModel;
  /**
   * The underlying security of the security leg.
   */
  underlier?: Security;
}
  
/**
 *  The security valuation model choice, which can either be based on nominal amount as for a bond, or on the number of contract units as for equity.
 */
export interface SecurityValuationModel {
  /**
   * The valuation model when the security is a bond.
   */
  bondValuationModel?: BondValuationModel;
  /**
   * The valuation model when the security is a unit contract like equity.
   */
  unitContractValuationModel?: UnitContractValuationModel;
}
  
export interface Sellr {
  acctOwnr?: AcctOwnr;
}
  
/**
 * A class to specify the methodology according to which sensitivities to (i) equity indices, funds and ETFs, and (ii) commodity indices are computed. This specification is done either through a normalized election as part of the specifiedMethodology, or through a custom election via the customMethodology attribute. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (gg)(2).
 */
export interface SensitivityMethodology {
  /**
   * The methodology according to which sensitivities will be computed, when specified through a custom election.
   */
  customMethodology?: string;
  /**
   * The methodology according to which sensitivities will be computed, when specified through a normalized election.
   */
  specifiedMethodology?: SensitivitiesEnum;
}
  
/**
 * A class to specify the Relevant Settled Entity Matrix.
 */
export interface SettledEntityMatrix {
  /**
   * Relevant settled entity matrix source.
   */
  matrixSource?: FieldWithMeta<SettledEntityMatrixSourceEnum>;
  /**
   * Specifies the publication date of the applicable version of the matrix. When this element is omitted, the Standard Terms Supplement defines rules for which version of the matrix is applicable.
   */
  publicationDate?: Date;
}
  
/**
 * A base class to be extended by the SettlementTerms, CashSettlementTerms and PhysicalSettlementTerms classes.
 */
export interface SettlementBase {
  meta?: MetaFields;
  /**
   * The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
/**
 * A data defining:  the specification of settlement terms, occurring when the settlement currency is different to the notional currency of the trade.
 */
export interface SettlementProvision {
  /**
   * The specification of the non-deliverable settlement provision.
   */
  nonDeliverableSettlement?: NonDeliverableSettlement;
  /**
   * The currency that the payout are settled in when the currency in which the payout is specified is non-deliverable. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
/**
 * A class describing the method for obtaining a settlement rate.
 */
export interface SettlementRateSource {
  /**
   * A container for a set of reference institutions that may be called upon to provide rate quotations as part of the method to determine the applicable cash settlement amount. If institutions are not specified, it is assumed that reference institutions will be agreed between the parties on the exercise date, or in the case of swap transaction to which mandatory early termination is applicable, the cash settlement valuation date.
   */
  cashSettlementReferenceBanks?: CashSettlementReferenceBanks;
  /**
   * The information source where a published or displayed market rate will be obtained, e.g. Telerate Page 3750.
   */
  informationSource?: InformationSource;
}
  
/**
 * A class to specify the settlement terms. This class reflects the FpML OptionSettlement.model, although with no option reference.
 */
export interface SettlementTerms extends SettlementBase {
  /**
   * The Settlement Amount, when known in advance.
   */
  settlementAmount?: Money;
  settlementDate?: AdjustableOrRelativeDate;
  /**
   * Whether the settlement will be cash, physical, by election, ...
   */
  settlementType?: SettlementTypeEnum;
  /**
   * The qualification as to how the transfer will settle, e.g. a DvP settlement.
   */
  transferSettlementType?: TransferSettlementEnum;
  /**
   * The settlement date for a forward settling product. For Foreign Exchange contracts, this represents a common settlement date between both currency legs. To specify different settlement dates for each currency leg, see the ForeignExchange class. This attribute is meant to be merged with the 'settlementDate' at some future point noce we refactor 'Date' to use a single complex type across the model.
   */
  valueDate?: Date;
  meta?: MetaFields;
  /**
   * The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  settlementCurrency?: FieldWithMeta<String>;
}
  
/**
 * A class to specify the ISDA SIMM Calculation Currency as either the Base Currency or an alternative currency. ISDA 2016 CSA for Initial Margin, Paragraph 13, General Principles (ee)(3). | ISDA 2018 CSA for Initial Margin, Paragraph 13, General Principles (ee)(3).
 */
export interface SimmCalculationCurrency {
  /**
   * The currency in which the ISDA SIMM Calculation is denominated, when different from the Base Currency. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * The SIMM Calculation Currency (also known as SIMM Reporting Currency) means the Base Currency when True. It means a different currency when False. In that latter case, the SIMM Calculation Currency is specified as part of the currency attribute.
   */
  isBaseCurrency?: boolean;
  /**
   * The party which the SIMM Calculation Currency qualification applies to.
   */
  party?: string;
}
  
/**
 * A class to specify the SIMM exception to the regulatory regime clause of the ISDA 2016 and 2018 CSA for Initial Margin as either a normalized value specified as part of an enumeration or a customized value specified of type string. ISDA 2016 Credit Support Annex for Initial Margin paragraph 13, Regime: SIMM Exception.
 */
export interface SimmException {
  /**
   * The Standard Initial Margin Model exception when specified as a customized approach by the party.
   */
  asSpecified?: string;
  /**
   * ...
   */
  simmExceptionApplicable?: SimmExceptionApplicableEnum;
  /**
   * The Standard Initial Margin Model exception when specified by the party according to one of the enumerated values.
   */
  standardisedException?: SimmExceptionEnum;
}
  
/**
 * A class to specify the ISDA SIMM version that applies to the ISDA 2018 CSA for Initial Margin. According to the ISDA 2018 CSA for Initial Margin, Paragraph 13, General Principles (ee) (1) provisions, the SIMM version is either not specified, or references a version used by one of the parties to the agreement.
 */
export interface SimmVersion {
  /**
   * A boolean attribute to determine whether the SIMM version is specified for the purpose of the legal agreement.
   */
  isSpecified?: boolean;
  /**
   * When the SIMM version is specified, it will reference the party that uses such version.
   */
  version?: SpecifiedSimmVersion;
}
  
/**
 * A class to specified payments in a simpler fashion than the Payment type. This construct should be used from the FpML version 4.3 onwards.
 */
export interface SimplePayment extends PayerReceiver {
  meta?: MetaFields;
  /**
   * The payment amount.
   */
  paymentAmount?: Money;
  /**
   * The payment date. This date is subject to adjustment in accordance with any applicable business day convention.
   */
  paymentDate?: AdjustableOrRelativeDate;
  /**
   * A reference to the account responsible for making the payments defined by this structure.
   */
  payerAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party responsible for making the payments defined by this structure.
   */
  payerPartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account that receives the payments corresponding to this structure.
   */
  receiverAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that receives the payments corresponding to this structure.
   */
  receiverPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * A class to specify the number of business days after satisfaction of all conditions to settlement.
 */
export interface SingleValuationDate {
  /**
   * A number of business days. Its precise meaning is dependant on the context in which this element is used. ISDA 2003 Term: Business Day.
   */
  businessDays?: number;
}
  
export interface Sngl {
  indx?: Indx;
  isin?: string;
}
  
export interface SpecifiedCurrency {
  /**
   * Indicates whether the specified currency provision is applicable.
   */
  applicable?: boolean;
  /**
   * The currency in which the the specified currency is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
}
  
/**
 * A class to specify the ISDA SIMM version applicable to one of the parties to the CSA agreement that will then be the relevant version for that CSA.
 */
export interface SpecifiedSimmVersion {
  /**
   * The party which the specified SIMM version applies to.
   */
  party?: ReferenceWithMeta<Party>;
  /**
   * The applicable ISDA SIMM version.
   */
  simmVersion?: string;
}
  
/**
 * Adds an optional spread type element to the Schedule to identify a long or short spread value.
 */
export interface SpreadSchedule extends Schedule {
  /**
   * An element which purpose is to identify a long or short spread value.
   */
  spreadScheduleType?: FieldWithMeta<SpreadScheduleTypeEnum>;
  /**
   * The initial rate or amount, as the case may be. An initial rate of 5% would be represented as 0.05.
   */
  initialValue?: number;
  /**
   * The schedule of step date and value pairs. On each step date the associated step value becomes effective A list of steps may be ordered in the document by ascending step date. An FpML document containing an unordered list of steps is still regarded as a conformant document.
   */
  step?: Step[];
}
  
/**
 * A class defining a step date and step value pair. This step definitions are used to define varying rate or amount schedules, e.g. a notional amortisation or a step-up coupon schedule.
 */
export interface Step {
  meta?: MetaFields;
  /**
   * The date on which the associated step value becomes effective.
   */
  stepDate?: Date;
  /**
   * The rate of amount which becomes effective on the associated step date. A rate of 5% would be represented as 0.05.
   */
  stepValue?: number;
}
  
/**
 * Data required to perform a stock split business event.
 */
export interface StockSplitInstruction {
  adjustmentRatio?: number;
  date?: Date;
  /**
   * Contract to be split.
   */
  trade?: Trade;
}
  
/**
 * A class for defining option strategy features.
 */
export interface StrategyFeature {
  /**
   * Definition of the later expiration date in a calendar spread.
   */
  calendarSpread?: CalendarSpread;
  /**
   * Definition of the upper strike in a strike spread.
   */
  strikeSpread?: StrikeSpread;
}
  
/**
 * A class describing a single cap or floor rate.
 */
export interface Strike {
  /**
   * The buyer of the option.
   */
  buyer?: PayerReceiverEnum;
  meta?: MetaFields;
  /**
   * The party that has sold.
   */
  seller?: PayerReceiverEnum;
  /**
   * The rate for a cap or floor.
   */
  strikeRate?: number;
}
  
/**
 * A class describing a schedule of cap or floor rates.
 */
export interface StrikeSchedule extends Schedule {
  /**
   * The buyer of the option.
   */
  buyer?: PayerReceiverEnum;
  /**
   * The party that has sold.
   */
  seller?: PayerReceiverEnum;
  /**
   * The initial rate or amount, as the case may be. An initial rate of 5% would be represented as 0.05.
   */
  initialValue?: number;
  /**
   * The schedule of step date and value pairs. On each step date the associated step value becomes effective A list of steps may be ordered in the document by ascending step date. An FpML document containing an unordered list of steps is still regarded as a conformant document.
   */
  step?: Step[];
}
  
/**
 * A class for defining a strike spread feature.
 */
export interface StrikeSpread {
  /**
   * Upper strike in a strike spread.
   */
  upperStrike?: OptionStrike;
  /**
   * Number of options at the upper strike price in a strike spread.
   */
  upperStrikeNumberOfOptions?: number;
}
  
/**
 * A data defining:  how the initial or final stub calculation period amounts is calculated. For example, the rate to be applied to the initial or final stub calculation period may be the linear interpolation of two different tenors for the floating rate index specified in the calculation period amount component, e.g. A two month stub period may used the linear interpolation of a one month and three month floating rate. The different rate tenors would be specified in this component. Note that a maximum of two rate tenors can be specified. If a stub period uses a single index tenor and this is the same as that specified in the calculation period amount component then the initial stub or final stub component, as the case may be, must not be included.
 */
export interface StubCalculationPeriodAmount {
  /**
   * A pointer style reference to the associated calculation period dates component defined elsewhere in the document.
   */
  calculationPeriodDatesReference?: ReferenceWithMeta<CalculationPeriodDates>;
  /**
   * Specifies how the final stub amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating tenors may be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3. Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.
   */
  finalStub?: StubValue;
  /**
   * Specifies how the initial stub amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating tenors may be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3. Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.
   */
  initialStub?: StubValue;
}
  
/**
 * A class defining a floating rate.
 */
export interface StubFloatingRate {
  /**
   * The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.
   */
  capRateSchedule?: StrikeSchedule[];
  /**
   * The floating rate index.
   */
  floatingRateIndex?: FloatingRateIndexEnum;
  /**
   * A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.
   */
  floatingRateMultiplierSchedule?: Schedule;
  /**
   * The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.
   */
  floorRateSchedule?: StrikeSchedule[];
  /**
   * The ISDA Designated Maturity, i.e. the tenor of the floating rate.
   */
  indexTenor?: Period;
  /**
   * The specification of any rate conversion which needs to be applied to the observed rate before being used in any calculations. The two common conversions are for securities quoted on a bank discount basis which will need to be converted to either a Money Market Yield or Bond Equivalent Yield. See the Annex to the 2000 ISDA Definitions, Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraphs (g) and (h) for definitions of these terms.
   */
  rateTreatment?: RateTreatmentEnum;
  /**
   * The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.
   */
  spreadSchedule?: SpreadSchedule[];
}
  
/**
 *  A class defining how the initial or final stub calculation period amounts is calculated. For example, the rate to be applied to the initial or final stub calculation period may be the linear interpolation of two different tenors for the floating rate index specified in the calculation period amount component, e.g. A two month stub period may used the linear interpolation of a one month and three month floating rate. The different rate tenors would be specified in this component. Note that a maximum of two rate tenors can be specified. If a stub period uses a single index tenor and this is the same as that specified in the calculation period amount component then the initial stub or final stub component, as the case may be, must not be included.
 */
export interface StubPeriod {
  /**
   * A pointer style reference to the associated calculation period dates component defined elsewhere in the document.
   */
  calculationPeriodDatesReference?: ReferenceWithMeta<CalculationPeriodDates>;
  /**
   * Specifies how the final stub amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating tenors may be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3. Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.
   */
  finalStub?: StubValue;
  /**
   * Specifies how the initial stub amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating tenors may be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3. Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.
   */
  initialStub?: StubValue;
}
  
/**
 * A type defining how a stub calculation period amount is calculated. A single floating rate tenor different to that used for the regular part of the calculation periods schedule may be specified, or two floating rate tenors many be specified. If two floating rate tenors are specified then Linear Interpolation (in accordance with the 2000 ISDA Definitions, Section 8.3 Interpolation) is assumed to apply. Alternatively, an actual known stub rate or stub amount may be specified.
 */
export interface StubValue {
  /**
   * The rates to be applied to the initial or final stub may be the linear interpolation of two different rates. While the majority of the time, the rate indices will be the same as that specified in the stream and only the tenor itself will be different, it is possible to specift two different rates. For example, a 2 month stub period may use the linear interpolation of a 1 month and 3 month rate. The different rates would be specified in this component. Note that a maximum of two rates can be specified. If a stub period uses the same floating rate index, including tenor, as the regular calculation periods then this should not be specified again within this component, i.e. the stub calculation period amount component may not need to be specified even if there is an initial or final stub period. If a stub period uses a different floating rate index compared to the regular calculation periods then this should be specified within this component. If specified here, they are likely to have id attributes, allowing them to be referenced from within the cashflows component.
   */
  floatingRate?: StubFloatingRate[];
  /**
   * An actual amount to apply for the initial or final stub period may have been agreed between the two parties. If an actual stub amount has been agreed then it would be included in this component.
   */
  stubAmount?: Money;
  /**
   * An actual rate to apply for the initial or final stub period may have been agreed between the principal parties (in a similar way to how an initial rate may have been agreed for the first regular period). If an actual stub rate has been agreed then it would be included in this component. It will be a per annum rate, expressed as a decimal. A stub rate of 5% would be represented as 0.05.
   */
  stubRate?: number;
}
  
/**
 * A class to specify each party's election with respect to the Substituted Regimes that will be applicable...
 */
export interface SubstitutedRegime {
  /**
   * The parties' Substituted Regime election.
   */
  partyElection?: SubstitutedRegimes[];
}
  
/**
 * A class to specify the Substituted Regimes that will be deemed applicable...
 */
export interface SubstitutedRegimes {
  australia?: boolean;
  canada?: boolean;
  cftc?: boolean;
  emir?: boolean;
  hong_kong?: boolean;
  japan?: boolean;
  /**
   * The elective party.
   */
  party?: string;
  prudential?: boolean;
  sec?: boolean;
  singapore?: boolean;
  switzerland?: boolean;
}
  
/**
 * A class to specify the conditions under which the Pledgor can substitute posted collateral. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f): Substitution. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f): Substitutions.
 */
export interface Substitution {
  /**
   * The election as to whether the Pledgor/Obligor/Chargor must obtain the Secured Party’s consent for any collateral substitution. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (f)(ii): Consent. | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (f)(ii): Consent.
   */
  needsConsent?: boolean;
  /**
   * Specific consent language might be specified by the parties.
   */
  specificConsentLanguage?: string;
}
  
/**
 * A class to specify a valuation swap curve, which is used as part of the strike construct for the bond and convertible bond options.
 */
export interface SwapCurveValuation {
  floatingRateIndex?: FloatingRateIndexEnum;
  /**
   * The ISDA Designated Maturity, i.e. the tenor of the floating rate.
   */
  indexTenor?: Period;
  /**
   * The side (bid/mid/ask) of the measure.
   */
  side?: QuotationSideEnum;
  /**
   * Spread in basis points over the floating rate index.
   */
  spread?: number;
}
  
export interface Swp {
  swpIn?: SwpIn;
  swpOut?: SwpOut;
}
  
export interface SwpIn {
  sngl?: Sngl;
}
  
export interface SwpOut {
  sngl?: Sngl;
}
  
/**
 * A class to specify a telephone number as a type of phone number (e.g. work, personal, ...) alongside with the actual number.
 */
export interface TelephoneNumber {
  /**
   * The actual telephone number.
   */
  number?: string;
  /**
   * The type of telephone number, e.g. work, mobile.
   */
  telephoneNumberType?: TelephoneTypeEnum;
}
  
export interface Term {
  unit?: string;
  val?: string;
}
  
/**
 * A class to specify the Termination Amendment Currency election by the respective parties to the agreement.
 */
export interface TerminationAmendmentCurrency {
  /**
   * The parties' Amendment Currency election.
   */
  partyElection?: TerminationCurrencyElection[];
}
  
/**
 * A class to specify the Amendment to Termination Currency elections by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t): Amendment to Termination Currency.
 */
export interface TerminationCurrencyAmendment {
  /**
   * The election in the case of a Termination Event where there are two Affected Parties.
   */
  bothPartiesCurrency?: BothPartiesElection;
  /**
   * The effective date of the Amendment to Termination Currency. This date can be specified as either an actual date, a specific date (e.g. the annex date) or as a custom provision.
   */
  effectiveDate?: AmendmentEffectiveDate;
  /**
   * The qualification of whether the Amendment to Termination Currency is deemed applicable by the parties (True) or not (False).
   */
  isApplicable?: boolean;
  /**
   * The parties' election with respect to the Termination Currency.
   */
  terminationCurrency?: TerminationAmendmentCurrency;
}
  
/**
 * A class to specify the Amendment to Termination Currency election by the parties to the agreement. ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (t) (A) & (B).
 */
export interface TerminationCurrencyElection {
  /**
   * The Termination Currency associated with the party that referenced as part of this class. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.
   */
  currency?: FieldWithMeta<String>;
  /**
   * The qualification of whether the Termination Currency is specified in this document (True) or in an Eligible Support Credit Support (IM) Schedule (False)
   */
  isSpecified?: boolean;
  /**
   * The elective party.
   */
  party?: string;
}
  
/**
 * The primitive event to represent change(s) to the contractual terms and the clearing submission and acceptance process.
 */
export interface TermsChangePrimitive {
  after?: Trade;
  before?: ReferenceWithMeta<Trade>;
}
  
/**
 * A class to specify the unsecured credit exposure that each party to the agreement is prepared to accept before asking for collateral. This threshold is specified either as an amount or as a custom election. ISDA 2016 English Law Credit Support Deed for Initial Margin, paragraph 13, General Principles, (c)(vi)(A): Threshold. | ISDA 2016 Japanese Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (d)(vi)(A): Threshold. | ISDA 2016 New York Law Credit Support Annex for Initial Margin, paragraph 13, General Principles, (c)(vi)(A): Threshold.
 */
export interface Threshold {
  /**
   * The parties' Threshold election.
   */
  partyElection?: ElectiveAmountElection[];
}
  
/**
 * The time alongside with the timezone location information. This class makes use of the FpML TimezoneLocation construct.
 */
export interface TimeZone {
  /**
   * FpML specifies the timezoneLocationScheme by reference to the Time Zone Database (a.k.a. tz database) maintained by IANA, the Internet Assigned Numbers Authority.
   */
  location?: FieldWithMeta<String>;
  /**
   * The observation time.
   */
  time?: string;
}
  
/**
 * Definition of a product as ready to be traded, i.e. included in an execution or contract, by associating a specific price and quantity to this product plus an (optional) mechanism for any potential future quantity adjustment.
 */
export interface TradableProduct {
  /**
   * Specifies the conditions that govern the adjustment to the quantity of a product being traded: e.g. execution, portfolio rebalancing etc. It is typically used in the context of Equity Swaps.
   */
  adjustment?: NotionalAdjustmentEnum;
  /**
   * Price of the underlying product to be included in a contract or execution. Contractual products are defined as price-less in the CDM, with the actual price number(s) abstracted away from the product definition. Multiple price notations can be specified and the notation specifies the tags (e.g. asset identifier) allowing price to be then appropriately positioned in the contractual product. The synonym paths to FpML will tend to be quite deep, as we are extacting those values from where they are embedded within the product definition.
   */
  priceNotation?: PriceNotation[];
  /**
   * The underlying product to be included in a contract or execution.
   */
  product?: Product;
  /**
   * Quantity of the underlying product to be included in a contract or execution. Products, including contractual products, are defined as a unit in CDM, with quantity schedule and cross-referencing mechanisms handled as part of the underlying payout legs, so that the overall quantity can be abstracted away from the product definition. Multiple quantity notations can be specified, as in the case of cross-currency products. Each quantity notation includes a tag (e.g. asset identifier) that can referenced by the underlying payout legs to resolve that product by fetching the actual amount from the appropriate quantity notation. The synonym paths to FpML will tend to be quite deep, as we need to extact those values from where they are embedded within the product definition.
   */
  quantityNotation?: QuantityNotation[];
}
  
/**
 * A class to represent the general trade concept, which can either be an execution or a contract. The execution consists essentially in the economic terms which are agreed between the parties. The contract will further qualify those with the legal entities (think of the allocation case, which execution state can involve the investment adviser rather not the actual funds) while not specify the master agreement or collateral terms which might be associated with the subsequent contract.
 */
export interface Trade {
  /**
   * The contract differs from the execution by the fact that its legal terms are fully specified. This includes the legal entities that are associated to it as well as any associated legal agreement, e.g. master agreement, credit and collateral terms, ... 
   */
  contract?: Contract;
  /**
   * The execution corresponds to economic terms that are agreed between parties, but which legal terms are not yet specified. The execution attribute applies to the post-execution scenario of a product that is subject to the clearing mandate and is then routed to the CCP as an execution.
   */
  execution?: Execution;
  meta?: MetaFields;
}
  
/**
 * A class to specify the contract's trade date alongside an identifier.
 */
export interface TradeDate {
  /**
   * The trade date associated with the contract. In the case of a novated trade, this date corresponds to the novation date.
   */
  date?: Date;
  meta?: MetaFields;
}
  
/**
 * A class to specify trade warehouse workflow information: the identity of the trade warehouse, the contract status at the warehouse and party-specific workflow information.
 */
export interface TradeWarehouseWorkflow {
  /**
   * Non-standardized workflow data related to a party.
   */
  partyCustomisedWorkflow?: PartyCustomisedWorkflow[];
  warehouseIdentity?: WarehouseIdentityEnum;
  warehouseStatus?: WorkflowStatusEnum;
}
  
/**
 * The class to represent a CDS Tranche.
 */
export interface Tranche {
  /**
   * Lower bound percentage of the loss that the Tranche can endure, expressed as a decimal. An attachment point of 5% would be represented as 0.05. The difference between Attachment and Exhaustion points is called the width of the Tranche.
   */
  attachmentPoint?: number;
  /**
   * Upper bound percentage of the loss that the Tranche can endure, expressed as a decimal. An exhaustion point of 5% would be represented as 0.05. The difference between Attachment and Exhaustion points is call the width of the Tranche.
   */
  exhaustionPoint?: number;
  /**
   * Outstanding Swap Notional Amount is defined at any time on any day, as the greater of: (a) Zero; If Incurred Recovery Amount Applicable: (b) The Original Swap Notional Amount minus the sum of all Incurred Loss Amounts and all Incurred Recovery Amounts (if any) determined under this Confirmation at or prior to such time.Incurred Recovery Amount not populated: (b) The Original Swap Notional Amount minus the sum of all Incurred Loss Amounts determined under this Confirmation at or prior to such time.
   */
  incurredRecoveryApplicable?: boolean;
}
  
/**
 *  A class to represent the transacted price attributes that are positioned as part of the FpML FeeLeg.
 */
export interface TransactedPrice {
  /**
   * An optional element that contains the up-front points expressed as a percentage of the notional. An initialPoints value of 5% would be represented as 0.05. The initialPoints element is an alternative to marketFixedRate in quoting the traded level of a trade. When initialPoints is used, the traded level is the sum of fixedRate and initialPoints. The initialPoints is one of the items that are factored into the initialPayment calculation and is payable by the Buyer to the Seller. Note that initialPoints and marketFixedRate may both be present in the same document when both implied values are desired.
   */
  initialPoints?: number;
  /**
   * An optional element that only has meaning in a credit index trade. This element contains the credit spread ('fair value') at which the trade was executed. Unlike the fixedRate of an index, the marketFixedRate varies over the life of the index depending on market conditions. The marketFixedRate is the price of the index as quoted by trading desks.
   */
  marketFixedRate?: number;
  /**
   * An optional element that only has meaning in a credit index trade. This element contains the price at which the trade was executed and is used instead of marketFixedRate on credit trades on certain indicies which are quoted using a price rather than a spread.
   */
  marketPrice?: number;
  /**
   * An optional element that contains the up-front points expressed as a percentage of the notional. An initialPoints value of 5% would be represented as 0.05. The initialPoints element is an alternative to marketFixedRate in quoting the traded level of a trade. When initialPoints is used, the traded level is the sum of fixedRate and initialPoints. The initialPoints is one of the items that are factored into the initialPayment calculation and is payable by the Buyer to the Seller. Note that initialPoints and marketFixedRate may both be present in the same document when both implied values are desired.
   */
  quotationStyle?: QuotationStyleEnum;
}
  
export interface TransferBase {
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
export interface TransferBreakdown extends TransferBase {
  /**
   * The lineage into the transfer components that might be associated with each of the transfer components.
   */
  lineage?: Lineage[];
  /**
   * The identifier that can be associated with each of the transfer components
   */
  identifier?: FieldWithMeta<String>;
  /**
   * The calculation details underlying the transfer amount, when applicable.
   */
  transferCalculation?: TransferCalculation;
}
  
export interface TransferCalculation {
  /**
   * This is a conceptual placeholder for providing the breakdown into the cashflow calculation components, leveraging the fact that the CDM provides calculation components, starting with the FixedAmount and the FloatingAmount. Further evaluation of expected usage needs to take place to confirm and prioritize such implementation.
   */
  calculationOutcome?: string;
  /**
   * The lineage into the components used for the calculation.
   */
  lineage?: Lineage[];
  /**
   * The period adjusted start and end dates.
   */
  period?: CalculationPeriodBase;
}
  
/**
 * A class to specify the transfer of assets between parties, those assets being either cash, securities or physical assets. This class combines components that are cross-assets (settlement date, settlement type, status, ...) and some other which are specialized by asset class (e.g. the payer/receiver amount and cashflow type for a cash transfer, the transferor/transferee, security indication, quantity, and asset transfer type qualification for the case of a security). The associated rosettaKey denotes the ability to associate a hash value to the respective Execution instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.
 */
export interface TransferPrimitive {
  /**
   * The cash transfer component of the transfer. In the case where several currencies are involved in the transfer, several components should be used, as the component supports one single currency amount.
   */
  cashTransfer?: CashTransferComponent[];
  commodityTransfer?: CommodityTransferComponent[];
  /**
   * The identifier which might be associated with the transfer.
   */
  identifier?: FieldWithMeta<String>;
  meta?: MetaFields;
  /**
   * The security transfer component of the transfer. In the case where several securities are involved in the transfer, several components should be used, as the component supports one single security.
   */
  securityTransfer?: SecurityTransferComponent[];
  settlementDate?: AdjustableOrAdjustedOrRelativeDate;
  /**
   * The settlement reference, when applicable.
   */
  settlementReference?: string;
  /**
   * The qualification as to how the transfer will settle, e.g. a DvP settlement.
   */
  settlementType?: TransferSettlementEnum;
  /**
   * The transfer status, e.g. Instructed, Settled, ...
   */
  status?: TransferStatusEnum;
}
  
/**
 * A class mimicking the PayerReceiver, which is itself derived from the FpML PayerReceiver.model, to represent the transferee and transferor party information in relation to the transfer of security or commodities.
 */
export interface TransferorTransferee {
  /**
   * A reference to the account that receives the payments corresponding to this structure.
   */
  transfereeAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party that receives the payments corresponding to this structure.
   */
  transfereePartyReference?: ReferenceWithMeta<Party>;
  /**
   * A reference to the account responsible for making the payments defined by this structure.
   */
  transferorAccountReference?: ReferenceWithMeta<Account>;
  /**
   * A reference to the party responsible for making the payments defined by this structure.
   */
  transferorPartyReference?: ReferenceWithMeta<Party>;
}
  
/**
 * Trigger point at which feature is effective.
 */
export interface Trigger {
  creditEvents?: CreditEvents;
  creditEventsReference?: ReferenceWithMeta<CreditEvents>;
  /**
   * The trigger level.
   */
  level?: number;
  /**
   * The trigger level percentage.
   */
  levelPercentage?: number;
  /**
   * The valuation time type of knock condition.
   */
  triggerTimeType?: TriggerTimeTypeEnum;
  /**
   * The Triggering condition.
   */
  triggerType?: TriggerTypeEnum;
}
  
/**
 * Observation point for trigger.
 */
export interface TriggerEvent {
  /**
   * The feature payment, i.e. the payment made following trigger occurrence.
   */
  featurePayment?: FeaturePayment;
  /**
   * A derivative schedule.
   */
  schedule?: AveragingSchedule[];
  /**
   * The trigger level
   */
  trigger?: Trigger;
  /**
   * The trigger Dates.
   */
  triggerDates?: DateList;
}
  
export interface Tx {
  ctryOfBrnch?: string;
  newTx?: New;
  pric?: Pric;
  qty?: Qty;
  tradDt?: string;
  tradVn?: string;
  tradgCpcty?: string;
}
  
/**
 * A class to specify a set of legal entities which are part of a legal agreement beyond the two contracting parties to that agreement. This data representation reflects the ISDA Create representation.
 */
export interface UmbrellaAgreement {
  /**
   * The determination of whether Umbrella Agreement terms are Applicable (True), or Not Applicable (False)
   */
  isApplicable?: boolean;
  /**
   * The language associated with the umbrella agreement, and which applies to all the parties to the umbrella agreement.
   */
  language?: string;
  /**
   * The parties to the umbrella agreement.
   */
  parties?: UmbrellaAgreementEntity[];
}
  
/**
 * A class to specify the legal entities that are part of the umbrella agreement.
 */
export interface UmbrellaAgreementEntity extends LegalEntity {
  /**
   * The terms that might be associated with each party to the umbrella agreement.
   */
  terms?: string;
  /**
   * A legal entity identifier (e.g. RED entity code).
   */
  entityId?: FieldWithMeta<String>[];
  meta?: MetaFields;
  /**
   * The legal entity name.
   */
  name?: FieldWithMeta<String>;
}
  
/**
 * A class describing the whole set of possible underliers: single underliers or multiple underliers, each of these having either security or index components.
 */
export interface Underlier {
  /**
   * Specifies the underlying product. As a difference with FpML, and for the purpose of also supporting swaption and options on CDS through a generic construct, its scope also includes the contract and contractualProduct.
   */
  underlyingProduct?: Product;
}
  
export interface UndrlygInstrm {
  swp?: Swp;
}
  
/**
 *  Unit contract model for security valuation, e.g. for equity, modelled onto UnitContract.model in FpML.
 */
export interface UnitContractValuationModel {
  /**
   * The number of units (index or securities).
   */
  numberOfUnits?: Quantity;
  /**
   * The price of each unit.
   */
  unitPrice?: Money;
}
  
export interface ValuationDate {
  /**
   * Where multiple valuation dates are specified as being applicable for cash settlement, this element specifies (a) the number of applicable valuation dates, and (b) the number of business days after satisfaction of all conditions to settlement when the first such valuation date occurs, and (c) the number of business days thereafter of each successive valuation date. ISDA 2003 Term: Multiple Valuation Dates.
   */
  multipleValuationDates?: MultipleValuationDates;
  /**
   * Where single valuation date is specified as being applicable for cash settlement, this element specifies the number of business days after satisfaction of all conditions to settlement when such valuation date occurs. ISDA 2003 Term: Single Valuation Date.
   */
  singleValuationDate?: SingleValuationDate;
}
  
/**
 * Specifies how long to wait to get a quote from a settlement rate option upon a price source disruption.
 */
export interface ValuationPostponement {
  /**
   * The maximum number of days to wait for a quote from the disrupted settlement rate option before proceeding to the next method.
   */
  maximumDaysOfPostponement?: number;
}
  
export interface Velocity {
  period?: PeriodTimeEnum;
  periodMultiplier?: number;
}
  
/**
 * A class to specify a warrant as having a product identifier. As a difference versus the FpML standard, the CDM structure of this class only includes the productIdentifier class, which consists of an identifier, productTaxonomy, and source of the identifier. The reason for this approach is to avoid the potential for conflicting information between the information associated with the contractual product and the reference information maintained by the relevant service provider.
 */
export interface Warrant extends IdentifiedProduct {
  productIdentifier?: ProductIdentifier;
}
  
/**
 * A single weighted averaging observation.
 */
export interface WeightedAveragingObservation {
  /**
   * Observation date time, which should be used when literal observation dates are required. The CDM specifies that the zoned date time is to be expressed in accordance with ISO 8601, either as UTC as an offset to UTC.
   */
  dateTime?: Date;
  /**
   * Observation number, which should be unique, within a series generated by a date schedule.
   */
  observationNumber?: number;
  /**
   * Observation weight, which is used as a multiplier for the observation value.
   */
  weight?: number;
}
  
/**
 * A collection of workflow steps which together makeup an entire workflow sequence.
 */
export interface Workflow {
  steps?: WorkflowStep[];
}
  
/**
 * A workflow step represents the state of a business event. The workflow step contains a reference to a previous WorkflowStep in order to preserve lineage. A workflow step is accepted if it contains a business event, proposed if proposedInstruction is present and is rejected if the rejected flag is set.
 */
export interface WorkflowStep {
  /**
   * Optional account information that could be associated to the event.
   */
  account?: Account[];
  /**
   * Specifies whether the event is a new, a correction or a cancellation.
   */
  action?: ActionEnum;
  /**
   * Life cycle event for the step. The businessEvent is optional when a proposedInstruction or rejection are present.
   */
  businessEvent?: BusinessEvent;
  /**
   * The identifier(s) that uniquely identify a lifecycle event. The unbounded cardinality is meant to provide the ability to associate identifiers that are issued by distinct parties. As an example, each of the parties to the event may choose to associate their own identifiers to the event.
   */
  eventIdentifier?: Identifier[];
  /**
   * The lineage attribute provides a linkage among lifecycle events through the rosettaKey hash value. One example is when a given lifecycle event is being corrected or cancelled. In such case, each subsequent event will have lineage into the prior version of that event. The second broad use case is when an event has a dependency upon either another event (e.g. the regular payment associated with a fix/float swap will have a lineage into the reset event, which will in turn have a lineage into the observation event for the floating rate and the contract) or a contract (e.g. the exercise of an option has a lineage into that option).
   */
  lineage?: Lineage;
  /**
   * Contains all information pertaining the FpML messaging header 
   */
  messageInformation?: MessageInformation;
  meta?: MetaFields;
  /**
   * The specification of the event parties. This attribute is optional, as not applicable to certain events (e.g. most of the observations).
   */
  party?: Party[];
  /**
   * Optional previous workflow step that provides lineage to workflow steps that precedes it.
   */
  previousWorkflowStep?: ReferenceWithMeta<WorkflowStep>;
  /**
   * The proposed instruction for the next workflow step. The proposedInstruction is optional when the businessEvent or rejection are present
   */
  proposedInstruction?: Instruction;
  /**
   * Flags this step as rejected.
   */
  rejected?: boolean;
  /**
   * The set of timestamp(s) associated with the event as a collection of [dateTime, qualifier].
   */
  timestamp?: EventTimestamp[];
}
  
/**
 * A class to specify workflow information, which is conceptually applicable to all lifecycle events.
 */
export interface WorkflowStepState {
  /**
   * A comment field to be associated with the workflow, e.g. to specify why a transaction event was rejected by a party.
   */
  comment?: string;
  /**
   * Workflow data that is specific to certain market participants and is expressed as part of the CDM in a very generic manner, which can be party-specific. The initial use cases have been derived from the CME clearing and the DTCC TIW submissions.
   */
  partyCustomisedWorkflow?: PartyCustomisedWorkflow[];
  /**
   * The workflow status indicator, e.g. Accepted, Rejected, ...
   */
  workflowStatus?: WorkflowStatusEnum[];
}
  
/**
 * A data defining:  the parameters required for each of the ISDA defined yield curve methods for cash settlement.
 */
export interface YieldCurveMethod {
  /**
   * Which rate quote is to be observed, either Bid, Mid, Offer or Exercising Party Pays. The meaning of Exercising Party Pays is defined in the 2000 ISDA Definitions, Section 17.2. Certain Definitions Relating to Cash Settlement, paragraph (j).
   */
  quotationRateType?: QuotationRateTypeEnum;
  /**
   * The method for obtaining a settlement rate. This may be from some information source (e.g. Reuters) or from a set of reference banks.
   */
  settlementRateSource?: SettlementRateSource;
}
  
