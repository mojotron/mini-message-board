import { formatDistance } from "date-fns";

const formatTimestamp = (timestamp) => {
  return formatDistance(timestamp, new Date(), { addSuffix: true });
};

export default formatTimestamp;
