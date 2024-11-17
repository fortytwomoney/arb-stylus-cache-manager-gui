
/// --- GENERATED CODE, DO NOT MODIFY ---
  const config = {"arbitrum_one":{"chainId":42161,"chainName":"Arbitrum One","tokens":{},"contracts":{"cachemanager":{"name":"CacheManager","address":"0x51dEDBD2f190E0696AFbEE5E60bFdE96d86464ec"}}}}
  
      function useCacheSize(chainId, contractAddress, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[],"name":"cacheSize","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'cacheSize',
          args: [],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useDecay(chainId, contractAddress, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[],"name":"decay","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'decay',
          args: [],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useGetEntries(chainId, contractAddress, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[],"name":"getEntries","outputs":[{"components":[{"internalType":"bytes32","name":"code","type":"bytes32"},{"internalType":"uint64","name":"size","type":"uint64"},{"internalType":"uint192","name":"bid","type":"uint192"}],"internalType":"struct CacheManager.Entry[]","name":"allEntries","type":"tuple[]"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'getEntries',
          args: [],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useIsPaused(chainId, contractAddress, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'isPaused',
          args: [],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useQueueSize(chainId, contractAddress, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[],"name":"queueSize","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'queueSize',
          args: [],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useEntries(chainId, contractAddress, arg0, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"entries","outputs":[{"internalType":"bytes32","name":"code","type":"bytes32"},{"internalType":"uint64","name":"size","type":"uint64"},{"internalType":"uint192","name":"bid","type":"uint192"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'entries',
          args: [arg0],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useGetMinBid(chainId, contractAddress, program, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[{"internalType":"address","name":"program","type":"address"}],"name":"getMinBid","outputs":[{"internalType":"uint192","name":"min","type":"uint192"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'getMinBid',
          args: [program],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    

      function useGetSmallestEntries(chainId, contractAddress, k, refetchInterval) {
        const { data: hookData, isLoading, isError, error, refetch } = useReadContract({
          chainId,
          address: contractAddress,
          abi: [{"inputs":[{"internalType":"uint256","name":"k","type":"uint256"}],"name":"getSmallestEntries","outputs":[{"components":[{"internalType":"bytes32","name":"code","type":"bytes32"},{"internalType":"uint64","name":"size","type":"uint64"},{"internalType":"uint192","name":"bid","type":"uint192"}],"internalType":"struct CacheManager.Entry[]","name":"result","type":"tuple[]"}],"stateMutability":"view","type":"function"}] as const,
          functionName: 'getSmallestEntries',
          args: [k],
          
          refetchInterval: refetchInterval ? refetchInterval : undefined,
        });
        return { data: hookData, isLoading, isError, error, refetch };
      }
    
  
    function useEvictAll(chainId, contractAddress, ) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[],"name":"evictAll","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'evictAll',
      };

      const {data: evictAllTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeEvictAll(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing evictAll:", );
        return writeContractAsync({
          ...contractConfig,
          args: [],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeEvictAll, txHash: evictAllTxHash, isPending, isError, error, isSuccess };
    }


    function useEvictPrograms(chainId, contractAddress, count) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"evictPrograms","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'evictPrograms',
      };

      const {data: evictProgramsTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeEvictPrograms(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing evictPrograms:", count);
        return writeContractAsync({
          ...contractConfig,
          args: [count],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeEvictPrograms, txHash: evictProgramsTxHash, isPending, isError, error, isSuccess };
    }


    function useMakeSpace(chainId, contractAddress, size) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[{"internalType":"uint64","name":"size","type":"uint64"}],"name":"makeSpace","outputs":[{"internalType":"uint64","name":"space","type":"uint64"}],"stateMutability":"payable","type":"function"}] as const,
        functionName: 'makeSpace',
      };

      const {data: makeSpaceTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeMakeSpace(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing makeSpace:", size);
        return writeContractAsync({
          ...contractConfig,
          args: [size],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeMakeSpace, txHash: makeSpaceTxHash, isPending, isError, error, isSuccess };
    }


    function usePlaceBid(chainId, contractAddress, program) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[{"internalType":"address","name":"program","type":"address"}],"name":"placeBid","outputs":[],"stateMutability":"payable","type":"function"}] as const,
        functionName: 'placeBid',
      };

      const {data: placeBidTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executePlaceBid(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing placeBid:", program);
        return writeContractAsync({
          ...contractConfig,
          args: [program],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executePlaceBid, txHash: placeBidTxHash, isPending, isError, error, isSuccess };
    }


    function useSetCacheSize(chainId, contractAddress, newSize) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[{"internalType":"uint64","name":"newSize","type":"uint64"}],"name":"setCacheSize","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'setCacheSize',
      };

      const {data: setCacheSizeTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeSetCacheSize(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing setCacheSize:", newSize);
        return writeContractAsync({
          ...contractConfig,
          args: [newSize],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeSetCacheSize, txHash: setCacheSizeTxHash, isPending, isError, error, isSuccess };
    }


    function useSetDecayRate(chainId, contractAddress, newDecay) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[{"internalType":"uint64","name":"newDecay","type":"uint64"}],"name":"setDecayRate","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'setDecayRate',
      };

      const {data: setDecayRateTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeSetDecayRate(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing setDecayRate:", newDecay);
        return writeContractAsync({
          ...contractConfig,
          args: [newDecay],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeSetDecayRate, txHash: setDecayRateTxHash, isPending, isError, error, isSuccess };
    }


    function useSweepFunds(chainId, contractAddress, ) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[],"name":"sweepFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'sweepFunds',
      };

      const {data: sweepFundsTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeSweepFunds(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing sweepFunds:", );
        return writeContractAsync({
          ...contractConfig,
          args: [],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeSweepFunds, txHash: sweepFundsTxHash, isPending, isError, error, isSuccess };
    }


    function useUnpause(chainId, contractAddress, ) {
      const contractConfig = {
        address: contractAddress,
        abi: [{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const,
        functionName: 'unpause',
      };

      const {data: unpauseTxHash, writeContractAsync, isPending, isError, error, isSuccess } = useWriteContract({ chainId });

      function executeUnpause(callbacks?: {
        onSuccess?: (data) => void;
        onError?: (error) => void;
      }) {
        console.log("executing unpause:", );
        return writeContractAsync({
          ...contractConfig,
          args: [],
        }, {
          onSuccess: callbacks?.onSuccess,
          onError: callbacks?.onError,
        });
      }

      return { execute: executeUnpause, txHash: unpauseTxHash, isPending, isError, error, isSuccess };
    }

  
const ArbitrumStylusCacheManager = () => {
  // Declare hooks at the top of the component
  const userAddress = useUserAddress();
  const { data: cacheSize, isLoading: isCacheSizeLoading } = useCacheSize(config.arbitrum_one.chainId, config.arbitrum_one.contracts.cachemanager.address);
  const { data: decayRate, isLoading: isDecayRateLoading } = useDecay(config.arbitrum_one.chainId, config.arbitrum_one.contracts.cachemanager.address);
  const { data: entries, isLoading: isEntriesLoading } = useGetEntries(config.arbitrum_one.chainId, config.arbitrum_one.contracts.cachemanager.address);
  const { data: isPaused, isLoading: isPausedLoading } = useIsPaused(config.arbitrum_one.chainId, config.arbitrum_one.contracts.cachemanager.address);
  const { data: queueSize, isLoading: isQueueSizeLoading } = useQueueSize(config.arbitrum_one.chainId, config.arbitrum_one.contracts.cachemanager.address);

  // State management
  const [bidAmount, setBidAmount] = React.useState(0);
  const [contractAddress, setContractAddress] = React.useState("");
  const [minBid, setMinBid] = React.useState(0);

  // Write hooks
  const placeBid = usePlaceBid(config.arbitrum_one.chainId, config.arbitrum_one.contracts.cachemanager.address, contractAddress);

  // Handle place bid
  const handlePlaceBid = () => {
    placeBid.execute({
      onSuccess: (data) => {
        console.log("Bid placed successfully:", data);
        // Refetch entries after placing a bid
        refetchEntries();
      },
      onError: (error) => {
        console.error("Failed to place bid:", error);
      },
    });
  };

  // Refetch entries
  const refetchEntries = () => {
    entries.refetch();
  };

  return (
    <div className="bg-bgShade-light text-foreground">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-primary-500 text-white">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Arbitrum Stylus Cache Manager</h1>
        </div>
      <NetworkStatus chainId={config.arbitrum_one.chainId} />
        <Connect />
      </header>



      {/* Active Bids Section */}
      <section className="p-4">
        <h2 className="text-lg font-bold mb-2">Active Bids</h2>
        <Search
          searchValue={contractAddress}
          setSearchValue={setContractAddress}
          onSearchChange={(value) => setContractAddress(value)}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contract Address</TableHead>
              <TableHead>Current Bid</TableHead>
              <TableHead>Time Remaining</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries?.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.code}</TableCell>
                <TableCell>{entry.bid.toString()}</TableCell>
                <TableCell>--:--:--</TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => console.log("View Details")}>View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Bid Submission Form */}
      <section className="p-4">
        <h2 className="text-lg font-bold mb-2">Submit a Bid</h2>
        <Input
          type="text"
          placeholder="Contract Address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />
        <TokenAmountInput
          decimals={18}
          onChange={setBidAmount}
          placeholder="Bid Amount"
        />
        <TxButton
          chainId={config.arbitrum_one.chainId}
          onClick={handlePlaceBid}
          disabled={placeBid.isPending || bidAmount < minBid}
        >
          {placeBid.isPending ? "Placing Bid..." : "Place Bid"}
        </TxButton>
        {placeBid.isError && <p className="text-error">Error placing bid.</p>}
        {placeBid.isSuccess && <p className="text-success">Bid placed successfully!</p>}
      </section>

      {/* Documentation Section */}
      <footer className="p-4 bg-bgShade-dark text-white">
        <h2 className="text-lg font-bold mb-2">Documentation</h2>
        <ul>
          <li><a href="https://docs.arbitrum.io/stylus/concepts/stylus-cache-manager" target="_blank" rel="noopener noreferrer">Stylus Cache Manager</a></li>
          <li><a href="https://docs.arbitrum.io/stylus/" target="_blank" rel="noopener noreferrer">Stylus</a></li>
        </ul>
      </footer>
    </div>
  );
};

render(<ArbitrumStylusCacheManager />);
