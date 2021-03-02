import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
var connectors = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: TrustWallet,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: MathWallet,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: TokenPocket,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: WalletConnect,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: BinanceChain,
        connectorId: "bsc",
    },
];
export default connectors;
export var localStorageKey = "accountStatus";
