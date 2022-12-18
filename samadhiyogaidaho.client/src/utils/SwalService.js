import Swal from "sweetalert2";

class SwalsService {
  /**
   * @param {string } url An image url.
   * @param {string} title The title text.
   * @param {string} btnText The button text.
   * @param {'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end'} position
   */
  async imagePop(url, btnText, position, title) {
    let timerInterval;
    const yes = await Swal.fire({
      title:`${title}` ,
      imageUrl: `${url}`,
      position: `${position}`,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCloseButton: true,
      showCancelButton: true,
      reverseButtons: true,
      showConfirmButton: true,
      focusConfirm: true,
      confirmButtonText: `${btnText}`,
      cancelButtonText: 'cancel',
      confirmButtonAriaLabel: "undo",
      timer: 2500,
      timerProgressBar: true,
      didOpen: (showConfirmButton) => {
        showConfirmButton.addEventListener("mouseenter", Swal.stopTimer);
        showConfirmButton.addEventListener("mouseleave", Swal.resumeTimer);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
    return yes.value
  }
}
export const swalsService = new SwalsService();
