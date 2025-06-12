"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ResumeScanner() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post("http://localhost:8080/pred", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      localStorage.setItem("resume-result", JSON.stringify(res.data));
      router.push("/resume-result");
    } catch (err) {
      alert("Error uploading file or parsing resume");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
