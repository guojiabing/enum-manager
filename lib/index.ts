type EntryLabel = string | number;
type EntryValue = string | number | boolean;

type EnumKey = string; // 前端自定义的枚举key

type EnumEntry = {
  label: EntryLabel;
  value: EntryValue;
  [prop: string]: any;
};

type EnumList = Array<EnumEntry>;

type EnumSource = {
  [prop: EnumKey]: EnumEntry;
};

class EnumManager {
  public labels: EntryLabel[];
  public values: EntryValue[];
  public enums: EnumList;

  constructor(public source: EnumSource) {
    const labels: EntryLabel[] = [];
    const values: EntryValue[] = [];
    const enums: EnumList = [];

    Reflect.ownKeys(source).forEach(key => {
      const data = Reflect.get(source, key);
      enums.push(data);
      labels.push(data.label);
      values.push(data.value);
    });

    this.enums = enums;
    this.labels = labels;
    this.values = values;
  }

  getValueByLabel(label: EntryLabel) {
    return this.values[this.labels.indexOf(label)];
  }

  getLabelByValue(value: EntryValue) {
    return this.labels[this.values.indexOf(value)];
  }

  getEntryByKey(key: EnumKey): EnumEntry {
    return Reflect.get(this.source, key);
  }
}

export default EnumManager;
