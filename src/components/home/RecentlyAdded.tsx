"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

// interface Book{

// }

const RecentlyAdded = () => {
  const [recentBooks, setRecentBooks] = useState<Array<Book>>([]);
  useEffect(() => {
    const fetchRecentBooks = async () => {
      try {
        const response = await axios.get("")
      }catch(error){}
    }
  }, [])

  return <div>Recently Added</div>;
};

export default RecentlyAdded;
