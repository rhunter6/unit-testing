import React, { useEffect, useState } from "react";

export const GetData = () => {
  const [loading, setLoading] = useState(true);
  const [remoteData, setRemoteData] = useState("");
  useEffect(() => {
    const simulatedFetch = async () => {
      const result = await new Promise((resolve) => {
        setTimeout(() => resolve("I have data."), 3000);
      });
      setRemoteData(result);
      setLoading(false);
    };

    simulatedFetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Your data is: {remoteData}</div>;
};
