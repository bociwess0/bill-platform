export interface Result {
  bill: Bill;
  billSort: BillSort;
  contextDate: string;
}

export interface Bill {
  act: Act;
  amendmentLists: AmendmentList[];
  billNo: string;
  billType: string;
  billTypeURI: string;
  billYear: string;
  debates: Debate[];
  events: Event[];
  lastUpdated: string;
  longTitleEn: string;
  longTitleGa: string;
  method: string;
  methodURI: string;
  mostRecentStage: MostRecentStage;
  originHouse: OriginHouse;
  originHouseURI: string;
  relatedDocs: RelatedDoc[];
  shortTitleEn: string;
  shortTitleGa: string;
  source: string;
  sourceURI: string;
  sponsors: Sponsor[];
  stages: Stage2[];
  status: string;
  statusURI: string;
  uri: string;
  versions: Version[];
}

export interface Act {
  actNo: string;
  actYear: string;
  dateSigned: string;
  longTitleEn: string;
  longTitleGa: string;
  shortTitleEn: string;
  shortTitleGa: string;
  statutebookURI: string;
  uri: string;
}

export interface AmendmentList {
  amendmentList: AmendmentList2;
}

export interface AmendmentList2 {
  amendmentTypeUri: AmendmentTypeUri;
  chamber: Chamber;
  date: string;
  formats: Formats;
  showAs: string;
  stage: Stage;
  stageNo: string;
}

export interface AmendmentTypeUri {
  uri: string;
}

export interface Chamber {
  showAs: string;
  uri: string;
}

export interface Formats {
  pdf: Pdf;
  xml: any;
}

export interface Pdf {
  uri: string;
}

export interface Stage {
  showAs: string;
  uri: string;
}

export interface Debate {
  chamber: Chamber2;
  date: string;
  debateSectionId: string;
  showAs: string;
  uri: string;
}

export interface Chamber2 {
  showAs: string;
  uri: string;
}

export interface Event {
  event: Event2;
}

export interface Event2 {
  chamber?: Chamber3;
  dates: Date[];
  eventURI: string;
  showAs: string;
  uri: string;
}

export interface Chamber3 {
  chamberCode: string;
  showAs: string;
  uri: string;
}

export interface Date {
  date: string;
}

export interface MostRecentStage {
  event: Event3;
}

export interface Event3 {
  chamber: any;
  dates: Date2[];
  house: any;
  progressStage: number;
  showAs: string;
  stageCompleted: boolean;
  stageOutcome: string;
  stageURI: string;
  uri: string;
}

export interface Date2 {
  date: string;
}

export interface OriginHouse {
  showAs: string;
  uri: string;
}

export interface RelatedDoc {
  relatedDoc: RelatedDoc2;
}

export interface RelatedDoc2 {
  date: string;
  docType: string;
  formats: Formats2;
  lang: string;
  showAs: string;
  uri: string;
}

export interface Formats2 {
  pdf: Pdf2;
  xml: any;
}

export interface Pdf2 {
  uri: string;
}

export interface Sponsor {
  sponsor: Sponsor2;
}

export interface Sponsor2 {
  as: As;
  by: By;
  isPrimary: boolean;
}

export interface As {
  showAs: string;
  uri: any;
}

export interface By {
  showAs: any;
  uri: any;
}

export interface Stage2 {
  event: Event4;
}

export interface Event4 {
  chamber?: Chamber4;
  dates: Date3[];
  house?: House;
  progressStage: number;
  showAs: string;
  stageCompleted: boolean;
  stageOutcome?: string;
  stageURI: string;
  uri: string;
}

export interface Chamber4 {
  chamberCode: string;
  showAs: string;
  uri: string;
}

export interface Date3 {
  date: string;
}

export interface House {
  chamberCode: string;
  chamberType: string;
  houseCode: string;
  houseNo: string;
  showAs: string;
  uri: string;
}

export interface Version {
  version: Version2;
}

export interface Version2 {
  date: string;
  docType: string;
  formats: Formats3;
  lang: string;
  showAs: string;
  uri: string;
}

export interface Formats3 {
  pdf: Pdf3;
  xml: any;
}

export interface Pdf3 {
  uri: string;
}

export interface BillSort {
  actNoSort: number;
  actShortTitleEnSort: string;
  actShortTitleGaSort: string;
  actYearSort: number;
  billNoSort: number;
  billShortTitleEnSort: string;
  billShortTitleGaSort: string;
  billYearSort: number;
}
