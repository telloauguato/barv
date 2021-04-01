const barv = ({ b, r, v, x }) => {
  if (b && r && v && x) return b * (Math.pow(b, 2) - Math.pow(r, 2) + v * (v > 0 ? b - r : b + r)) === x;

  if (b && r && v) return b * (Math.pow(b, 2) - Math.pow(r, 2) + v * (v > 0 ? b - r : b + r));

  if (b && r && x) {
    const cal = (l) => ((x / b) - Math.pow(b, 2) + Math.pow(r, 2)) / l;
    var l = b - r;
    v = cal(l);

    if (v > 0) {
      return v;
    } else {
      l = b + r;
      v = cal(l)
    }
    return v
  }

  if (b && v && x) {
    const v1 = -b;
    const v2 = v < 0 ? v * b : -v * b;
    const v3 = (Math.pow(b, 3) + v * Math.pow(b, 2)) - x;

    const v4 = Math.pow(v2, 2) - 4 * v1 * v3;

    const x1 = (-v2 + Math.sqrt(v4)) / (2 * v1);
    const x2 = (-v2 - Math.sqrt(v4)) / (2 * v1);

    return x1 >= 0 ? x1 : x2;
  }

  if (r && v && x) {
    const formula = (y) => {
      const _a = Math.pow(y, 3);
      const _b = v * Math.pow(y, 2);
      const _c = (y * -Math.pow(r, 2)) + ((v < 0) ? r : -r) * v * y;

      return _a + _b + _c - x;
    }
    for (let n = 1; n < x + 1; n++) {
      if (x % n === 0) {
        if (formula(n) === 0) return n;
      }
    }
  }
}


const b = 34,
  r = 2,
  v = 2,
  x = 41344;
console.log('x', barv({ b, r, v }));
console.log('v', barv({ b, r, x }));
console.log('r', barv({ b, v, x }));
console.log('b', barv({ r, v, x }));
console.log('?', barv({ b, r, v, x }));
