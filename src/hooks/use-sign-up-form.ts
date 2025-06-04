import { useState } from "react";
import { SubmittedSchema } from "@/lib/schemas";

export function useSignUpForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const validationEmail = (email: string): boolean => {
    const validationFields = SubmittedSchema.safeParse({ email });
    if (!validationFields.success) {
      const message = validationFields.error.flatten().fieldErrors.email;
      setError(message?.toString() ?? "");
      return false;
    }
    setError("");
    return true;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) setError("");
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validationEmail(email)) {
      return;
    }

    setModal(true);
  };

  const closeModal = () => {
    setEmail("");
    setModal(false);
  };

  return {
    email,
    error,
    modal,
    handleChange,
    handleSubmit,
    closeModal,
  };
}
