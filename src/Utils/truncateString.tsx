const truncateString = (toTruncate: string, limit = 8) => {
  return toTruncate.split(".")[0].length >= limit
    ? `${toTruncate.slice(0, 7)}...`
    : toTruncate;
};

export default truncateString;
