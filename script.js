const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Open only one FAQ answer at a time for a tidy accordion experience.
document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-list details").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// The form prepares a WhatsApp message with the visitor's information.
document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hello ImportNow! I would like a free sourcing quote.",
    `Name: ${form.get("name")}`,
    `City: ${form.get("city")}`,
    `Product: ${form.get("product")}`,
    `Quantity: ${form.get("quantity") || "Not specified"}`,
    `Budget: ${form.get("budget") || "Not specified"}`,
    `Details: ${form.get("details") || "Not provided"}`
  ].join("\n");
  const whatsappNumber = "919989724320";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
