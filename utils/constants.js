const Jackpot = require('./Jackpot.json');

const jackpotABI = Jackpot.abi;
const jackpotAddress = '0xB48236f63Dc7d7CCCEe6531513D4A07895C80cc7';

const SpaceCredit = require('./SpaceCredit.json');

const spaceCreditABI = SpaceCredit.abi;
const spaceCreditAddress = '0x88ddb183A87A61Bf2732A4ad5d4116de3d00A8a7';

module.exports = {
  jackpotABI,
  jackpotAddress,
  spaceCreditABI,
  spaceCreditAddress,
};
