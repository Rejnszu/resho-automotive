export function getImage(file, array) {
  let image;
  function setImage() {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        image = reader.result;
        resolve(image);
      };
    });
  }
  setImage().then((resolve) => {
    image = resolve;
  });
}
