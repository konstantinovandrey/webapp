import React from "react";

const CustomLayout = ({ children, meta }) => {
  return (
    <div className="custom-layout">
      <header>
        <h1>{meta.title || "Мой Кастомный Заголовок"}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Футер страницы</p>
      </footer>
    </div>
  );
};

export default CustomLayout;
