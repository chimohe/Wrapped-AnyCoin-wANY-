import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import WalletConnector from '../components/WalletConnector';

export default function Home() {
  const [account, setAccount] = useState(null);

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Wrapped AnyCoin Bridge</h1>
      <WalletConnector onConnected={setAccount} />
      {account && <p>Connected: {account}</p>}
    </div>
  );
}