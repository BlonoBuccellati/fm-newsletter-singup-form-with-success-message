"use client";

import { Button } from "@/components/ui/button";
import NewsLetterModal from "./news-letter-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useSignUpForm } from "@/hooks/useSignUpForm";

interface InputWithLabelProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}
const InputWithLabel = ({
  value,
  onChange,
  errorMessage,
}: InputWithLabelProps) => {
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
          value={value}
          onChange={onChange}
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
  const { email, error, modal, handleChange, handleSubmit, closeModal } =
    useSignUpForm();

  return (
    <>
      <div className="tablet:space-y-200 tablet:pb-0 space-y-300 pt-200 pb-400">
        <InputWithLabel
          value={email}
          onChange={handleChange}
          errorMessage={error}
        />
        <Button type="submit" onClick={handleSubmit}>
          Subscribe to monthly newsletter
        </Button>
      </div>
      {modal && <NewsLetterModal address={email} onClose={closeModal} />}
    </>
  );
};

export default SignUpForm;
