
class Barv {
    constructor({ base = undefined, reason = undefined, variation = undefined, result = undefined }) {

        this.base = base;
        this.reason = reason;
        this.variation = variation;
        this.result = result;


        // Find Result
        if (this.base && this.reason && this.variation) {
            this.lambda = this.variation < 0 ? this.base + this.reason : this.base - this.reason;
            this.result = this.base * (Math.pow(this.base, 2) - Math.pow(this.reason, 2) + this.variation * this.lambda);
            return;
        }

        // Find Variation
        if (this.base && this.reason && this.result) {

            this.lambda = this.base - this.reason;
            this.variation = ((this.result / this.base) - Math.pow(this.base, 2) + Math.pow(this.reason, 2)) / this.lambda;

            if (this.variation > 0) return;

            this.lambda = this.base + this.reason;
            this.variation = ((this.result / this.base) - Math.pow(this.base, 2) + Math.pow(this.reason, 2)) / this.lambda;

            return;
        }

        // Find Reason
        if (this.base && this.variation && this.result) {

            const a = -this.base;
            const b = this.variation < 0 ? this.variation * this.base : -this.variation * this.base;
            const c = (Math.pow(this.base, 3) + this.variation * Math.pow(this.base, 2)) - this.result;

            const d = Math.pow(b, 2) - 4 * a * c;

            const x1 = (-b + Math.sqrt(d)) / (2 * a);
            const x2 = (-b - Math.sqrt(d)) / (2 * a);

            this.reason = x1 >= 0 ? x1 : x2;

            this.lambda = this.variation < 0 ? this.base + this.reason : this.base - this.reason;
            return;
        }

        // Find Base
        if (this.reason && this.variation && this.result) {
            var d;
            const formula = (b) => {
                const _a = Math.pow(b, 3);
                const _b = this.variation * Math.pow(b, 2);
                const _c = (b * -Math.pow(this.reason, 2)) + ((this.variation < 0) ? this.reason : -this.reason) * this.variation * b;

                return _a + _b + _c - this.result;
            }
            for (let n = 1; n < this.result + 1; n++) {
                if (this.result % n === 0) {
                    if (formula(n) === 0) this.base = n;
                }
            }
            this.lambda = this.variation < 0 ? this.base + this.reason : this.base - this.reason;
            return;
        }
    }
}
