export const getWhatsAppUrl = (customMessage?: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573182732524";
  const message = encodeURIComponent(
    customMessage ||
      "Hola COYMAN PROYECTOS, me gustaría recibir más información sobre sus servicios.",
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const getInstagramUrl = () => {
  return (
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/coymanproyectos"
  );
};

export const getFacebookUrl = () => {
  return (
    process.env.NEXT_PUBLIC_FACEBOOK_URL ||
    "https://www.facebook.com/share/1FbFu8eYUJ/"
  );
};
