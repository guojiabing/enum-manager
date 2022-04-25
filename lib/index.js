class EnumManager {
    constructor(source) {
        const labels = [];
        const values = [];
        const enums = [];

        Reflect.ownKeys(source).forEach(key => {
            const data = Reflect.get(source, key);
            enums.push(data);
            labels.push(data.label);
            values.push(data.value);
        });

        this.enums = enums;
        this.labels = labels;
        this.values = values;
        this.source = source;
    }
    getValueByLabel(label) {
        return this.values[this.labels.indexOf(label)];
    }
    getLabelByValue(value) {
        return this.labels[this.values.indexOf(value)];
    }
    getEntryByKey(key) {
        return Reflect.get(this.source, key);
    }
}
export default EnumManager;
