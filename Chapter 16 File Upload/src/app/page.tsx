"use client";
import { NextPage } from "next";
import { UploadForm } from "./components/UploadForm";

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <main className="max-w-4xl mx-auto p-20 space-y-6">
      <UploadForm />
    </main>
  );
};

export default Home;
