import { useEffect, useState } from 'react';

export default function WalletConnector({ onConnected }) {
  const [isConnected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      const [addr] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setConnected(true);
      onConnected(addr);
    } else {
      alert("Please install MetaMask.");
    }
  };

  return (
    <button onClick={connectWallet}>
      {isConnected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
}