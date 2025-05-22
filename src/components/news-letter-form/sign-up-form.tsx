"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import { createPortal } from "react-dom";
import NewsLetterModal from "./news-letter-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface InputEmailWithLabel {
  email: string;
  setEmail: (value: React.SetStateAction<string>) => void;
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
          onChange={(e) => setEmail(e.target.value)}
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
  const [submitted, setSubmitted] = useState(false);
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Valid email required");
      return;
    }
    setError("");
    setSubmitted(true);
  };
  const closeModal = () => setSubmitted(false);

  return (
    <>
      <div className="tablet:space-y-200 tablet:pb-0 space-y-300 pt-200 pb-400">
        <InputEmailWithLabel
          email={email}
          setEmail={setEmail}
          errorMessage={error}
        />
        <Button type="submit" onClick={openModal}>
          Subscribe to monthly newsletter
        </Button>
      </div>
      {submitted &&
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
