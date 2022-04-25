declare type EntryLabel = string | number;
declare type EntryValue = string | number | boolean;
declare type EnumKey = string;
declare type EnumEntry = {
    label: EntryLabel;
    value: EntryValue;
    [prop: string]: any;
};
declare type EnumList = Array<EnumEntry>;
declare type EnumSource = {
    [prop: EnumKey]: EnumEntry;
};
declare class EnumManager {
    source: EnumSource;
    labels: EntryLabel[];
    values: EntryValue[];
    enums: EnumList;
    constructor(source: EnumSource);
    getValueByLabel(label: EntryLabel): EntryValue;
    getLabelByValue(value: EntryValue): EntryLabel;
    getEntryByKey(key: EnumKey): EnumEntry;
}
export default EnumManager;
