"use client";

import Button from "@/components/atoms/Button/Button";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

type StateButton = {
  [x: string]: boolean;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState<StateButton>({
    btnPrimary: false,
    btnDefault: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading({
        btnPrimary: false,
        btnDefault: false,
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  const handleClick = (buttonType: string) => {
    console.log("clicked");

    setIsLoading((prevState) => ({
      ...prevState,
      [buttonType]: true,
    }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        type="primary"
        size="lg"
        icon={<FiSearch />}
        onClick={() => handleClick("btnPrimary")}
        loading={isLoading.btnPrimary}
      >
        Primary
      </Button>
      <Button
        icon={<FiSearch />}
        size="md"
        onClick={() => handleClick("btnDefault")}
        loading={isLoading.btnDefault}
      >
        Default
      </Button>
      <Button type="text" size="md">
        Text
      </Button>
      <Button type="link" size="md">
        Link
      </Button>
    </main>
  );
}
