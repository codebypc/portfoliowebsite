import { Home01Icon } from "@hugeicons/react-pro";
import React from "react";
import { LuDownload } from "react-icons/lu";

export const Download = () => {
  const handleDownload = () => {
    // Create a dummy anchor element
    const link = document.createElement("a");
    link.download = "resume.pdf"; // Set the download file name
    link.href = "/resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <h3 style={{ display: "inline", color: "white" }} onClick={handleDownload}>
      Download File <i class="fa-solid fa-file-arrow-down"></i>
    </h3>
  );
};
