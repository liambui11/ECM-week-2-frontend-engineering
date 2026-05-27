import { useState } from "react";

export default function useProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
    tags: "",
    imageUrl: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    if (!value && name !== "tags") return "This field is strictly required.";
    if (name === "price" && (isNaN(value) || Number(value) <= 0)) {
      return "Price must be a valid positive scalar number.";
    }
    if (name === "imageUrl" && value && !value.startsWith("http")) {
      return "Must be a secured semantic URL pointer (http/https).";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const runSubmitPipeline = async () => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 5s Latency Lock
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      desc: "",
      price: "",
      category: "",
      tags: "",
      imageUrl: "",
    });
    setTouched({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((k) => {
      const err = validateField(k, formData[k]);
      if (err) newErrors[k] = err;
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    );

    if (Object.keys(newErrors).length === 0) runSubmitPipeline();
  };

  const hasErrors = Object.values(errors).some((err) => err !== "");

  return {
    formData,
    touched,
    errors,
    isSubmitting,
    submitSuccess,
    hasErrors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
