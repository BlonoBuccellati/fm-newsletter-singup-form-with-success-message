"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createPortal } from "react-dom";
import NewsLetterModal from "./news-letter-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { SubmittedSchema } from "@/lib/schemas";
import { z } from "zod";

type Email = z.infer<typeof SubmittedSchema>;
interface InputEmailWithLabel extends Email {
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}
const InputEmailWithLabel = ({
  email,
  setEmail,
  errorMessage,
}: InputEmailWithLabel) => {
  return (
    <div className="space-y-100">
      <Label htmlFor="email" className="typo-3-regular block">
        Email address
      </Label>
      {/* focus:outline-noneでデフォルトの枠を消す */}
      <div className="relative">
        <Input
          type="email"
          id="email"
          value={email}
          onChange={setEmail}
          placeholder="email@company.com"
          className={cn(
            "placeholder-gray border-gray w-full rounded-lg border px-300 py-200 focus:border-blue-800 focus:outline-none",
            errorMessage && "border-primary bg-primary/10 text-primary",
          )}
        />
        {errorMessage && (
          <span className="text-primary typo-3-regular absolute -top-300 right-0">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

const SignUpForm = () => {
  //  sing up form
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const result = SubmittedSchema.safeParse({ email: email });

    if (!result.success) {
      const message = result.error.flatten().fieldErrors.email;
      setError(message ? message.toString() : "");
      return;
    }
    setError("");
    setEmail("");
    setModal(true);
  };
  const closeModal = () => setModal(false);
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setError("");
    }
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="tablet:space-y-200 tablet:pb-0 space-y-300 pt-200 pb-400">
        <InputEmailWithLabel
          email={email}
          setEmail={changeEmail}
          errorMessage={error}
        />
        <Button type="submit" onClick={openModal}>
          Subscribe to monthly newsletter
        </Button>
      </div>
      {modal &&
        createPortal(
          <NewsLetterModal
            address="ash@loremcompany.com"
            onClose={closeModal}
          />,
          document.body,
        )}
    </>
  );
};

export default SignUpForm;
