import { useState } from "react";
import { SubmittedSchema } from "@/lib/schemas";

export function useSignUpForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) setError("");
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    const result = SubmittedSchema.safeParse({ email });
    if (!result.success) {
      const message = result.error.flatten().fieldErrors.email;
      setError(message?.toString() ?? "");
      return;
    }

    setError("");
    setEmail("");
    setModal(true);
  };

  const closeModal = () => setModal(false);

  return {
    email,
    error,
    modal,
    handleChange,
    handleSubmit,
    closeModal,
  };
}
