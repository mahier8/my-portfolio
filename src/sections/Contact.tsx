import React from "react";
// import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: "4rem 2rem", backgroundColor: "#f0f2f5", minHeight: "50vh",
      display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>Contact Me</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        <input type="text" placeholder="Name" style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="email" placeholder="Email" style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }} />
        <textarea placeholder="Message" rows={5} style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }} />
        {/* <Button type="submit" variant="default">Send</Button> */}
      </form>
    </section>
  );
};

export default Contact;
