export type PriorityDataType<T> = {obj: T, priority: number};

export class PriorityList <T> {
    private data: PriorityDataType<T>[] = [];

    public insertData(obj: T, priority: number) {
        if (this.data.length === 0) {
            this.data.push({obj, priority});
            return;
        }

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].priority < priority) {
                for (let j = this.data.length; j > i; j--) {
                    this.data[j] = this.data[j - 1]; 
                }
                this.data[i] = {obj, priority};
                return;
            }
        }
        this.data.push({obj, priority});
    }

    public contains(obj: T): boolean {
        for (const t of this.data) {
            if (t === obj) {
                return true;
            }
        }
        return false;
    }

    public getData(): PriorityDataType<T>[] {
        return this.data;
    }
}

