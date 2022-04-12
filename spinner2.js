let timer = 100;
const spinnerArm = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (const spin of spinnerArm) {
  timer += 200;
  setTimeout(() => process.stdout.write('\r' + spin + '  '), timer);
}
setTimeout(() => process.stdout.write('\r'), 2000); //remove '%' from console
