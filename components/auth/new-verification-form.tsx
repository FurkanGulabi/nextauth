"use client";
import { CardWrapper } from "./card-wrapper";
import { Spinner } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSucces } from "../form-succes";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full flex-col gap-3 justify-center">
        {!success && !error && <Spinner color="primary" />}
        <FormSucces message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
