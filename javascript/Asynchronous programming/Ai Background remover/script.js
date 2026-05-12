document.addEventListener("DOMContentLoaded", () => {
  //select the element
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const selectButton = document.getElementById("selectButton");
  const originalImage = document.getElementById("originalImage");
  const processedImage = document.getElementById("processedImage");
  const removeBackground = document.getElementById("removeBackground");
  const downloadBtn = document.getElementById("download");
  const loading = document.querySelector(".loading");
  loading.style.display = "none";
  // !  Drag and drop feature
  //?1.DragOver
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  //?2/dragleave
  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });
  //?3.drop
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    }
  });
  selectButton.addEventListener("click", () => {
    fileInput.click();
  });
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  });
  function handleImageUpload(file) {
    const reader = new FileReader();
    console.log(reader);

    reader.onload = (e) => {
      originalImage.src = e.target.result;
      originalImage.hidden = false;
      processedImage.hidden = false;
      removeBackground.disabled = false;
      downloadBtn.disabled = true;
    };
    reader.readAsDataURL(file);
  }
  removeBackground.addEventListener("click", async () => {
    loading.style.display = "flex";
    try {
      const formdata = new FormData();
      const blob = await fetch(originalImage.src).then((r) => r.blob());
      formdata.append("source_image_file", blob);
      const response = await fetch(
        "https://api.slazzer.com/v2.0/remove_image_background",
        {
          method: "POST",
          headers: {
            "API-KEY": "7d8924c6cb3a450c82befd3d1c2c1ba4",
          },
          body: formdata,
        }
      );
      const blob_response = await response.blob();
      const url = URL.createObjectURL(blob_response);
      processedImage.src = url;
      processedImage.hidden = false;
      downloadBtn.disabled = false;
    } catch (error) {
    } finally {
      loading.style.display = "none";
    }
  });
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = processedImage.src;
    link.download = "processed_image.png";
    link.click();
  });
});
//7d8924c6cb3a450c82befd3d1c2c1ba4
