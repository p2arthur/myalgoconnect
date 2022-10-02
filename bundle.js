(function (MyAlgoConnect) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var MyAlgoConnect__default = /*#__PURE__*/_interopDefaultLegacy(MyAlgoConnect);

  const myAlgoWallet = new MyAlgoConnect__default["default"]();
  const connectButton = document.querySelector(".connect-wallet");

  async function connectToMyAlgo() {
    try {
      const accounts = await myAlgoWallet.connect();
      const addresses = accounts.map((account) => account.address);
    } catch (err) {
      console.error(err);
    }
  }

  function connectToMyAlgo_() {
    connectToMyAlgo().catch(console.error);
  }

  connectButton.addEventListener("click", connectToMyAlgo_);

  connectToMyAlgo();

})(MyAlgoConnect);
