export function rc4(key, data) {
  let s = [];
  let j = 0;
  let x;
  let res = [];

  // Key Scheduling Algorithm (KSA)
  for (let i = 0; i < 256; i++) {
    s[i] = i;
  }

  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    [s[i], s[j]] = [s[j], s[i]];
  }

  // Pseudo-Random Generation Algorithm (PRGA)
  let i = 0;
  j = 0;
  for (let y = 0; y < data.length; y++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    [s[i], s[j]] = [s[j], s[i]];
    x = s[(s[i] + s[j]) % 256];
    res.push(data[y] ^ x);
  }

  return Buffer.from(res);
}