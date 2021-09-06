export const onSubmitLoginForm = (obg) => {
  // some func to onsubmit
  // this func alert all keys
  const keys = Object.keys(obg);
  let stringToAlert = "";
  for (let i of keys) {
    stringToAlert += `${String(i)}: ${obg[i]}; `;
  }
  alert(stringToAlert);
};
