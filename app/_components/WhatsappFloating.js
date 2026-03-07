"use client";

import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";

function WhatsappFloating() {
  const handleSubmit = (event, message) => {
    console.log("Message sent:", message);
    // Add your custom logic here
  };

  return (
    <FloatingWhatsApp
      phoneNumber="+201208741247"
      accountName="Physio Peak"
      avatar="/logo-white.png"
      onSubmit={handleSubmit}
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hello! 👋 How can we help you today?"
      darkMode={false}
    //   allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationSound={true}
    />
  );
}

export default WhatsappFloating;
