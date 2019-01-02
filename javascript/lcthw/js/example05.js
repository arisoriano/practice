const INVINCIBLE = 94;
let changeme = 82;

console.log(`INVINCIBLE = ${INVINCIBLE} but changeme = ${changeme}`);

// this will work fine
changeme = 100;

// uncomment this to see how you can't do it
// INVINCIBLE = 100000;

console.log(`After change: INVINCIBLE = ${INVINCIBLE} but changeme = ${changeme}`);