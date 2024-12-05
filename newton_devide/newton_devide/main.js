

let [x_array, fx_array, dif1_array, dif2_array, dif3_array, dif4_array] = [[], [], [], [], [], []];
let [x, fx, diif1, diif2, diif3, diif4, sum] = [0, 0, 0, 0, 0, 0, 0];

let inp_x = +window.prompt('Enter x :');
let inp = window.prompt('Enter numbrt of iterations :');

for (let i = 0; i < inp; i++) {
  x = window.prompt(`Enter value of x${i}`);
  fx = window.prompt(`Enter value of fx${i}`);
  x_array.push(x);
  fx_array.push(fx);
}

for (let j = 0; j < x_array.length - 1; j++) {
  diif1 = parseFloat((fx_array[j + 1] - fx_array[j]) / (x_array[j + 1] - x_array[j]));
  dif1_array.push(diif1);
}

for (let j = 0; j < dif1_array.length - 1; j++) {
  diif2 = parseFloat((dif1_array[j + 1] - dif1_array[j]) / (x_array[j + 2] - x_array[j]));
  dif2_array.push(diif2);
}


for (let j = 0; j < dif2_array.length - 1; j++) {
  diif3 = parseFloat((dif2_array[j + 1] - dif2_array[j]) / (x_array[j + 3] - x_array[j]));
  dif3_array.push(diif3);
}

for (let j = 0; j < dif3_array.length - 1; j++) {
  diif4 = parseFloat((dif3_array[j + 1] - dif3_array[j]) / (x_array[j + 4] - x_array[j]));
  dif4_array.push(diif4);
}
if (inp == 5) {
  sum =
    +fx_array[0] +
    +(dif1_array[0] * (inp_x - +x_array[0])) +
    +(dif2_array[0] * (inp_x - +x_array[0]) * (inp_x - +x_array[1])) +
    dif3_array[0] * (inp_x - +x_array[0]) * (inp_x - +x_array[1]) * (inp_x - +x_array[2]) +
    +(
      dif4_array[0] *
      (inp_x - +x_array[0]) *
      (inp_x - +x_array[1]) *
      (inp_x - +x_array[2]) *
      (inp_x - +x_array[3])
    );
}
if (inp == 4) {
  sum =
    +fx_array[0] +
    +(dif1_array[0] * (inp_x - +x_array[0])) +
    +(dif2_array[0] * (inp_x - +x_array[0]) * (inp_x - +x_array[1])) +
    +(dif3_array[0] * (inp_x - +x_array[0]) * (inp_x - +x_array[1]) * (inp_x - +x_array[2]));
}
if (inp == 3) {
  sum =
    +fx_array[0] +
    +(dif1_array[0] * (inp_x - +x_array[0])) +
    +(dif2_array[0] * (inp_x - +x_array[0]) * (inp_x - +x_array[1]));
}
if (inp == 2) {
  sum = +fx_array[0] + +(dif1_array[0] * (inp_x - +x_array[0]));
}
document.getElementById('sol').onclick= _=>{
window.alert(`  intrerpolation polynomial : ${sum.toFixed(7)}`);
}