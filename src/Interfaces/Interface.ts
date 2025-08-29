export interface Result {
  bill: Bill
}

export interface Bill {
  billNo: string
  billYear: string
  billType: string
  billTypeURI: string
  shortTitleEn: string
  shortTitleGa: string
  longTitleEn: string
  longTitleGa: string
  method: string
  methodURI: string
  source: string
  sourceURI: string
  lastUpdated: string
  originHouseURI: string
  originHouse: OriginHouse
  act: Act
  amendmentLists: AmendmentList[]
  debates: Debate[]
  events: Event[]
  mostRecentStage: MostRecentStage
  relatedDocs: RelatedDoc[]
}

export interface OriginHouse {
  showAs: string
  uri: string
}

export interface Act {
  actNo: string
  actYear: string
  dateSigned: string
  shortTitleEn: string
  shortTitleGa: string
  longTitleEn: string
  longTitleGa: string
  uri: string
  statutebookURI: string
}

export interface AmendmentList {
  amendmentList: AmendmentList2
}

export interface AmendmentList2 {
  amendmentTypeUri: AmendmentTypeUri
  chamber: Chamber
  date: string
  formats: Formats
  showAs: string
  stage: Stage
  stageNo: string
}

export interface AmendmentTypeUri {
  uri: string
}

export interface Chamber {
  showAs: string
  uri: string
}

export interface Formats {
  pdf: Pdf
  xml: Xml
}

export interface Pdf {
  uri: string
}

export interface Xml {
  uri: string
}

export interface Stage {
  showAs: string
  uri: string
}

export interface Debate {
  chamber: Chamber2
  date: string
  debateSectionId: string
  showAs: string
  uri: string
}

export interface Chamber2 {
  showAs: string
  uri: string
}

export interface Event {
  event: Event2
}

export interface Event2 {
  chamber: Chamber3
  dates: Date[]
  eventURI: string
  showAs: string
  uri: string
}

export interface Chamber3 {
  chamberCode: string
  showAs: string
  uri: string
}

export interface Date {
  date: string
}

export interface MostRecentStage {
  event: Event3
}

export interface Event3 {
  stageCompleted: boolean
  stageOutcome: string
  progressStage: number
  showAs: string
  stageURI: string
  uri: string
  dates: Date2[]
}

export interface Date2 {
  date: string
}

export interface RelatedDoc {
  relatedDoc: RelatedDoc2
}

export interface RelatedDoc2 {
  date: string
  docType: string
  lang: string
  showAs: string
  uri: string
  formats: Formats2
}

export interface Formats2 {
  pdf: Pdf2
  xml: Xml2
}

export interface Pdf2 {
  uri: string
}

export interface Xml2 {
  uri: string
}
