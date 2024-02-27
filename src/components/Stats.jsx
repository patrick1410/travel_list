export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );
  }

  const count = items.length;
  const packedCount = items.reduce((count, item) => {
    if (item.packed) {
      count++;
    }
    return count;
  }, 0);
  const packedPercentage = (100 / count) * packedCount;

  return (
    <footer className="stats">
      {packedPercentage !== 100 ? (
        <em>
          💼 You have {count} items on your list, and you already packed{" "}
          {packedCount} ({packedCount ? packedPercentage.toFixed() + "%" : "0%"}
          )
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
};
