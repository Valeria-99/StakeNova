export const AwardsDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed right-4 bottom-4"
        onClick={() => setOpen(true)}
      >
        Awards
      </button>

      {open && (
        <div className="fixed right-0 top-0 h-full w-80 bg-black p-6">
          <button onClick={() => setOpen(false)}>Close</button>

          <ul className="mt-6 space-y-4">
            <li>🏆 Best DeFi Protocol</li>
            <li>🏆 Web3 Innovation</li>
            <li>🏆 Community Choice</li>
          </ul>
        </div>
      )}
    </>
  );
};
