class Barv {
    constructor({ b = null, r = null, v = null, x = null }) {
        this.base = b;
        this.reason = r;
        this.variation = v;
        this.lambda = this.variation < 0 ? this.base + this.reason : this.base - this.reason;
        if (x) this.x = x;
        this.truth = this.getResult() === this.x;
        if (this.isValid) this.result = this.getResult();
    }

    isValid(full = false) {
        this.print = [];
        if (this.base < this.reason) this.print.push(`The base has to be greater than the reason`);
        if (this.reason < 0) this.print.push(`The reason must be greater than or equal to 0`);
        if (!this.base) this.print.push(`Add a value for base (b) to verify the calculation`);
        if (!this.reason) this.print.push(`Add a value for the reason (r) to verify the calculation`);
        if (!this.variation) this.print.push(`Add a value for the variation (v) to verify the calculation`);
        if (!this.x) this.print.push(`Add a value for the result (x) to verify the calculation`);
        // if (this.base && this.reason && this.variation && this.x) return this.truth;
        return this.truth;
    }

    getResult() {
        return this.base * (Math.pow(this.base, 2) - Math.pow(this.reason, 2) + this.variation * this.lambda);
    }

    setBase(base) {
        this.base = base;
        this.result = this.isValid() ? this.getResult() : undefined;
    }

    setReason(reason) {
        this.reason = reason;
        this.result = this.isValid() ? this.getResult() : undefined;
    }

    setVariation(variation) {
        this.variation = variation;
        this.result = this.isValid() ? this.getResult() : undefined;
    }

    setX(x) {
        this.x = x;
        this.truth = this.getResult() === this.x;
    }

}

var barv = new Barv({ b: 4, r: 2, v: 4 });

console.log(barv);
barv.setBase(1);
console.log(barv);
