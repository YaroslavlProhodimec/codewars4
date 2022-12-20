class CircularList {
    constructor(...args) {
        this.index = -1;
        if(!args.length) throw new Error('Required');
        this.args = args;
    }

    next() {
        if (this.index >= this.args.length - 1)
            this.index = 0;
        else
            this.index += 1;
        return this.args[this.index];
    }

    prev() {
        if (this.index <= 0)
            this.index = this.args.length - 1;
        else
            this.index -= 1;
        return this.args[this.index];
    }
}
