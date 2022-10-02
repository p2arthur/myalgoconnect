import MyAlgoConnect from './node_modules/@randlabs/myalgo-connect';
const myAlgoWallet = new MyAlgoConnect();
const connectButton = document.querySelector('.connect-wallet');

async function connectToMyAlgo() {
  try {
    const accounts = await myAlgoWallet.connect();
    const addresses = accounts.map(account => account.address);
  } catch (err) {
    console.error(err);
  }
}
connectButton.addEventListener('click', connectToMyAlgo);
