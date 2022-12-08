import Swal from "sweetalert2";




const AlertLogin = () => {
    Swal.fire({
      title: "Lo sentimos, tus datos son incorrectos",
      text: "Por favor, ingresa tu email correctamente",
      imageUrl: "https://thumbs.gfycat.com/GoodnaturedShimmeringHuia-max-1mb.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  export default AlertLogin;