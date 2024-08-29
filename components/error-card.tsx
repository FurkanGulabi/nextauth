import React from "react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { Header } from "./auth/header";
import { BackButton } from "./auth/back-button";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
