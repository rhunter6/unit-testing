import React, { useEffect, useState } from "react";

export const GetData = () => {
  // Set up some state hooks.
  const [loading, setLoading] = useState(true);
  const [remoteData, setRemoteData] = useState("");

  // When the component loads, set a timeout to return data after 3 seconds.
  // This is to simulate a slow network request.
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

  // If we are loading, show loading text.
  if (loading) {
    return <div>Loading...</div>;
  }

  // Once we have data, show that.
  return <div>Your data is: {remoteData}</div>;
};
